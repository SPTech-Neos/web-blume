import { createContext, useState, useEffect, useRef } from "react";
import Cookies from 'js-cookie';

import { EmployeeResponseDto, EmployeeLoginDto, EmployeeRequestDto } from "../../utils/Users/Employee/employee.types";

import { EmployeeAdapter } from "../../adapters/User/Employee/Employee";
import { EstablishmentResponseDto } from "../../utils/Establishment/establishment.types";

interface AuthContextType {
  token: EmployeeResponseDto | null;
  isAuthenticated: boolean;
  handleLoginEmployee: (clientLoginDto: EmployeeLoginDto) => Promise<object | EmployeeResponseDto | null>;
  handleLogoutEmployee: () => void;
  handleUpdateEmployee: (updatedFields: Partial<EmployeeResponseDto>) => Promise<void>;
  handleCreateEmployee: (employeeRequestDto: EmployeeRequestDto) => Promise<EmployeeResponseDto | null>;
  handleDeleteEmployee: (employeeId: string) => Promise<boolean>;
  getEmployeeById: (employeeId: number) => Promise<EmployeeResponseDto | null>;
}

export const AuthContextEmployee = createContext<AuthContextType>({
  token: null,
  isAuthenticated: false,
  handleLoginEmployee: async () => null,
  handleLogoutEmployee: () => {},
  handleUpdateEmployee: async () => {},
  handleCreateEmployee: async () => null,
  handleDeleteEmployee: async () => false,
  getEmployeeById: async () => null,
});

export const AuthContextProvider = ({ children }: { children: JSX.Element | JSX.Element[] | null }) => {
  const [token, setToken] = useState<EmployeeResponseDto | null>(null);
  const [, setEstablishmentToken] = useState<EstablishmentResponseDto | null>(null);
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  const employeeAdapter = new EmployeeAdapter();
  const renewedSession = useRef(false);

  useEffect(() => {
    if (!renewedSession.current) {
      renewSession();
      renewedSession.current = true;
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const handleLoginEmployee = async (employeeLoginDto: EmployeeLoginDto): Promise<object | EmployeeResponseDto | null> => {
    try {
      const { email, password } = employeeLoginDto;
      const token = await employeeAdapter.login({ email, password });
  
      if (token !== null && 'id' in token) {
        setToken(token);
        setEstablishmentToken(token.establishment);
        setIsAuthenticated(true);
  
        Cookies.set('employeeInfo', JSON.stringify(token), { expires: 7 });
        Cookies.set('establishmentInfo', JSON.stringify(token.establishment), { expires: 7 });
  
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
    setIsAuthenticated(false);
  };

  const renewSession = async () => {
    try {
      const tokenString = Cookies.get('employeeInfo');
  
      // Se algum dos cookies não estiver presente, faz o logout
      if (!tokenString) {
        handleLogoutEmployee();
        return;
      }
  
      // Parse dos tokens diretamente dos cookies
      const token = JSON.parse(tokenString) as EmployeeResponseDto;
  
      // Obtendo os dados necessários a partir dos tokens
      const employee = await employeeAdapter.getEmployeeById(Number(token.id));
  
      if (employee) {
        // Atualiza o estado com os tokens diretamente
        setToken(token);
        setIsAuthenticated(true);
      } else {
        handleLogoutEmployee();
      }
    } catch (error) {
      console.error("Erro ao renovar sessão:", error);
      handleLogoutEmployee();
    }
  };
  

  const handleUpdateEmployee = async (updatedFields: Partial<EmployeeResponseDto>) => {
    try {
      const tokenFromCookie = Cookies.get('employeeInfo');
      const token = tokenFromCookie ? JSON.parse(tokenFromCookie) : null;

      if (token && token.id !== undefined) {
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

  const handleCreateEmployee = async (employeeRequestDto: EmployeeRequestDto): Promise<EmployeeResponseDto | null> => {
    try {
      return await employeeAdapter.create(employeeRequestDto);
    } catch (error) {
      console.error("Erro ao criar funcionário:", error);
      return null;
    }
  };

  const handleDeleteEmployee = async (employeeId: string): Promise<boolean> => {
    try {
      return await employeeAdapter.delete(employeeId);
    } catch (error) {
      console.error("Erro ao deletar funcionário:", error);
      return false;
    }
  };

  const getEmployeeById = async (employeeId: number): Promise<EmployeeResponseDto | null> => {
    try {
      return await employeeAdapter.getEmployeeById(employeeId);
    } catch (error) {
      console.error("Erro ao buscar funcionário por ID:", error);
      return null;
    }
  };

  const contextValue = {
    token,
    isAuthenticated,
    handleLoginEmployee,
    handleLogoutEmployee,
    handleUpdateEmployee,
    handleCreateEmployee,
    handleDeleteEmployee,
    getEmployeeById
  };

  return (
    <AuthContextEmployee.Provider value={contextValue}>
      {children}
    </AuthContextEmployee.Provider>
  );
};
