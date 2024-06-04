import React, { useContext } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import LandingPage from './pages/LandingPage/LandingPage';

import Test from './pages/Test';
import Auth from './pages/Auth/Auth';
import Feed from './pages/Feed/Feed';

import Establishment from './pages/ProfileEstablishment/ProfileEstablishment';
import Client from './pages/ProfileClient/ProfileClient';
import Employee from './pages/ProfileEmployee/ProfileEmployee';

import Details from './pages/Details/Details';
import Orders from './pages/Orders/Orders';
import { AuthContextEmployee } from './contexts/User/AuthContextProviderEmployee';
import { AuthContextClient } from './contexts/User/AuthContextProviderClient';
import ProtectedRoute from './components/ProtectedRoute/ProtectedRoute';

const defaultProtectedRouteProps = {
  authenticationPath: '/auth'
};

const App: React.FC = () => {
  // Verifica se pelo menos um dos contextos de autenticação está autenticado
  const { isAuthenticated: isAuthenticatedEmployee } = useContext(AuthContextEmployee);
  const { isAuthenticated: isAuthenticatedClient } = useContext(AuthContextClient);
  const isAuthenticated = isAuthenticatedEmployee || isAuthenticatedClient;

  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<LandingPage />} />
        <Route path='/test' element={<Test />} />
        <Route path='/auth' element={<Auth />} />
        <Route path='/feed' element={<Feed />} />
        <Route path='/establishment/:establishmentId' element={<Establishment />} />
        {/*<Route
          path='/establishment/:establishmentId'
          element={
            <ProtectedRoute
              {...defaultProtectedRouteProps}
              isAuthenticated={isAuthenticated}
              outlet={<Establishment />}
            />
          }
        />*/}
        <Route
          path='/client'
          element={
            <ProtectedRoute
              {...defaultProtectedRouteProps}
              isAuthenticated={isAuthenticated}
              outlet={<Client />}
            />
          }
        />
        <Route
          path='/employee'
          element={
            <ProtectedRoute
              {...defaultProtectedRouteProps}
              isAuthenticated={isAuthenticated}
              outlet={<Employee />}
            />
          }
        />
        <Route path='/details' element={<Details />} />
        <Route path='/orders' element={<Orders />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;