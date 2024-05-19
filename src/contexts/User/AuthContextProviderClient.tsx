import { createContext, useState, useEffect } from "react";
import Cookies from 'js-cookie';

import { ClientAdapter } from "../../adapters/User/Client";
import { ClientResponseDto, ClientLoginDto } from "../../utils/client.types";

interface AuthContextType {
  token: object | ClientResponseDto | null;
  isAuthenticated: boolean;
  handleLoginClient: (clientLoginDto: ClientLoginDto) => Promise<object | ClientResponseDto | null>;
  handleLogoutClient: () => void;
  handleUpdateClient: (updatedFields: Partial<ClientResponseDto>) => Promise<void>;
}

export const AuthContextClient = createContext<AuthContextType>({
  token: null,
  isAuthenticated: false,
  handleLoginClient: async () => null,
  handleLogoutClient: () => {},
  handleUpdateClient: async () => {},
});

export const AuthContextProvider = ({ children }: { children: JSX.Element }) => {
  const [token, setToken] = useState<object | ClientResponseDto>({});
  const [expiresAt, setExpiresAt] = useState(0);
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  const clientAdapter = new ClientAdapter();

  useEffect(() => {
      const isLoggedIn = localStorage.getItem("isLoggedIn") === "true";
      if (isLoggedIn) {
          renewSession();
      }
  });

  const handleLoginClient = async (clientLoginDto: ClientLoginDto): Promise<object | ClientResponseDto | null> => {
    try {
        const { email, password } = clientLoginDto;
        const token = await clientAdapter.login({ email, password });

        if (token !== null && 'clientId' in token) {
            setToken(token);
            setIsAuthenticated(true);
            setExpiresAt(Date.now() + 7 * 24 * 60 * 60 * 1000); // Expira em 7 dias
            Cookies.set('clientInfo', JSON.stringify(token), { expires: 7 });

            return token as ClientResponseDto;
        } else {
            console.error("Login falhou: Token de autenticação é inválido ou nulo.");
            return null;
        }
    } catch (error) {
        console.error("Erro ao fazer login:", error);
        throw error;
    }
  };

  const handleLogoutClient = () => {
      Cookies.remove('clientInfo');
      setToken({});
      setExpiresAt(0);
      setIsAuthenticated(false);
      localStorage.removeItem("isLoggedIn");
  };

  const renewSession = async () => {
      try {
          const tokenString = Cookies.get('clientInfo');

          if (isUserAuthenticated() || !tokenString) {
              handleLogoutClient();
              return;
          }

          const token = JSON.parse(tokenString);
          const client = await clientAdapter.getClientByToken(token, token.token);

          if (client) {
              setToken(token);
              setIsAuthenticated(true);
              setExpiresAt(Date.now() + 7 * 24 * 60 * 60 * 1000); // Expira em 7 dias
          } else {
              handleLogoutClient();
          }
      } catch (error) {
          console.error("Erro ao renovar sessão:", error);
          handleLogoutClient();
      }
  };

  const isUserAuthenticated = () => expiresAt > Date.now();

  const handleUpdateClient = async (updatedFields: Partial<ClientResponseDto>) => {
    try {
        const tokenFromCookie = Cookies.get('clientInfo');
        const token = tokenFromCookie ? JSON.parse(tokenFromCookie) : null;

        if (token && token.clientId !== undefined) {
            const updatedClient = await clientAdapter.update(token.clientId, updatedFields, token.token);

            if (updatedClient) {
                setToken(updatedClient);

                const updatedClientToken = { ...token, ...updatedFields };
                Cookies.set('clientInfo', JSON.stringify(updatedClientToken), { expires: 7 });
            } else {
                console.error("Atualização do cliente falhou: resposta do servidor é nula.");
            }
        } else {
            console.error("ID do Client não encontrado no token.");
        }
        } catch (error) {
            console.error("Erro ao atualizar os dados do cliente:", error);
            throw error;
        }
    };



  const contextValue = {
      token,
      isAuthenticated,
      handleLoginClient,
      handleLogoutClient,
      handleUpdateClient,
  };

  return (
      <AuthContextClient.Provider value={contextValue}>
          {children}
      </AuthContextClient.Provider>
  );
};
