import { createContext, useState, useEffect } from "react";
import Cookies from 'js-cookie';

import { EmployeeResponseDto, EmployeeLoginDto } from "../../utils/Employee/employee.types";
import { EmployeeAdapter } from "../../adapters/User/Employee";

interface AuthContextType {
  token: EmployeeResponseDto | null;
  isAuthenticated: boolean;
  handleLoginEmployee: (clientLoginDto: EmployeeLoginDto) => Promise<object | EmployeeResponseDto | null>;
  handleLogoutEmployee: () => void;
  handleUpdateEmployee: (updatedFields: Partial<EmployeeResponseDto>) => Promise<void>;
}

export const AuthContextEmployee = createContext<AuthContextType>({
  token: null,
  isAuthenticated: false,
  handleLoginEmployee: async () => null,
  handleLogoutEmployee: () => {},
  handleUpdateEmployee: async () => {}
});

export const AuthContextProvider = ({ children }: { children: JSX.Element }) => {
  const [token, setToken] = useState<EmployeeResponseDto | null>(null);
  const [expiresAt, setExpiresAt] = useState(0);
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  const employeeAdapter = new EmployeeAdapter();

  useEffect(() => {
      const isLoggedIn = localStorage.getItem("isLoggedIn") === "true";
      if (isLoggedIn) {
          renewSession();
      }
  });

  const handleLoginEmployee = async (clientLoginDto: EmployeeLoginDto): Promise<object | EmployeeResponseDto | null> => {
    try {
        const { email, password } = clientLoginDto;
        const token = await employeeAdapter.login({ email, password });

        if (token !== null && 'employeeId' in token) {
            setToken(token);
            setIsAuthenticated(true);
            setExpiresAt(Date.now() + 7 * 24 * 60 * 60 * 1000); // Expira em 7 dias
            Cookies.set('employeeInfo', JSON.stringify(token), { expires: 7 });

            return token as EmployeeResponseDto;
        } else {
            console.error("Login falhou: Token de autenticação é inválido ou nulo.");
            return null;
        }
    } catch (error) {
        console.error("Erro ao fazer login:", error);
        throw error;
    }
  };


  const handleLogoutEmployee = () => {
      Cookies.remove('employeeInfo');

      setToken(null);
      setExpiresAt(0);
      setIsAuthenticated(false);

      localStorage.removeItem("isLoggedIn");
  };

  const renewSession = async () => {
      try {
          const tokenString = Cookies.get('employeeInfo');

          if (isUserAuthenticated() || !tokenString) {
              handleLogoutEmployee();
              return;
          }

          const token = JSON.parse(tokenString);
          const employee = await employeeAdapter.getEmployeeByToken(token);

          if (employee) {
              setToken(token);
              setIsAuthenticated(true);
              setExpiresAt(Date.now() + 7 * 24 * 60 * 60 * 1000); // Expira em 7 dias
          } else {
            handleLogoutEmployee();
          }
      } catch (error) {
          console.error("Erro ao renovar sessão:", error);
          handleLogoutEmployee();
      }
  };

  const isUserAuthenticated = () => expiresAt > Date.now();

  const handleUpdateEmployee = async (updatedFields: Partial<EmployeeResponseDto>) => {
    try {
      const tokenFromCookie = Cookies.get('employeeInfo');
      const token = tokenFromCookie ? JSON.parse(tokenFromCookie) : null;

      if (token && token.employeeId !== undefined) {
        const updatedEmployee = await employeeAdapter.update(token.idEmployee, updatedFields);

        setToken(updatedEmployee);
  
        const updatedEmployeeToken = { ...token, ...updatedFields };
        Cookies.set('employeeInfo', JSON.stringify(updatedEmployeeToken), { expires: 7 });
      } else {
        console.error("ID do funcionário não encontrado no token.");
      }

    } catch (error) {
      console.error("Erro ao atualizar os dados do funcionário:", error);
      throw error;
    }
  };

  const contextValue = {
      token,
      isAuthenticated,
      handleLoginEmployee,
      handleLogoutEmployee,
      handleUpdateEmployee
  };

  return (
      <AuthContextEmployee.Provider value={contextValue}>
          {children}
      </AuthContextEmployee.Provider>
  );
};
