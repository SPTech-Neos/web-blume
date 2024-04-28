import React, { createContext, useState, useEffect } from "react";
import axios from "axios";

import { ClientAdapter } from "../../../adapters/User/Client";
import { Client } from "../../../utils/client.types";
import { environment } from "../../../../environment.config";

export const AuthContext = createContext({});

export const AuthContextProvider = ( children: JSX.Element ) => {
  const [token, setToken] = useState(null);
  const [idToken, setIdToken] = useState(null);
  const [expiresAt, setExpiresAt] = useState(0);
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  const [userData, setUserData] = useState<Client>();
  const clientAdapter = new ClientAdapter();

  useEffect(() => {
    const isLoggedIn = localStorage.getItem("isLoggedIn") === "true";
    if (isLoggedIn) {
      // Simulate session renewal logic (replace with actual implementation)
      renewSession();
    }
  }, []);

  const handleAuthentication = () => {
    // Handle authentication logic (replace with actual implementation)
  };

  const login = () => {
    // Handle login logic (replace with actual implementation)
  };

  const logout = () => {
    setToken(null);
    setIdToken(null);
    setExpiresAt(0);
    setIsAuthenticated(false);
    localStorage.removeItem("isLoggedIn");
  };

  const renewSession = async () => {
    try {
      const response = await axios.get(`${environment.apiUrl}/client/me`, {
        headers: { Authorization: `Bearer ${token}` },
      });
      if (response.status === 200) {
        const user = await clientAdapter.getClientById(response.data.idClient);
        if (user) {
          setUserData(user);
        } else {
          // Handle error fetching user details

        }
      } else {
        // Handle failed renewal (e.g., expired token)

      }
    } catch (error) {
      console.error(error);
      logout(); // Logout on errors
    }
  };

  const isUserAuthenticated = () => expiresAt > Date.now();

  const contextValue = {
    token,
    idToken,
    isAuthenticated,
    handleAuthentication,
    login,
    logout,
  };

  return (
    <AuthContext.Provider value={contextValue}>
      {children}
    </AuthContext.Provider>
  );
};
