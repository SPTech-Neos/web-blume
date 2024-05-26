import React, { useContext } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import LandingPage from './pages/LandingPage/LandingPage';
import Test from './pages/Test';
import Auth from './pages/Auth/Auth';
import Feed from './pages/Feed/Feed';
import ProfileB2B from './pages/ProfileB2B/ProfileB2B';
import ProfileB2C from './pages/ProfileB2C/ProfileB2C';
import { AuthContextEmployee } from './contexts/User/AuthContextProviderEmployee';
import { AuthContextClient } from './contexts/User/AuthContextProviderClient';
import ProtectedRoute, { ProtectedRouteProps } from './components/ProtectedRoute/ProtectedRoute';


const defaultProtectedRouteProps: Omit<ProtectedRouteProps, 'outlet'> = {
  isAuthenticated: false, 
  authenticationPath: '/auth'
};

const App: React.FC = () => {
  // Verifica se pelo menos um dos contextos de autenticação está autenticado
  const isEmployeeAuthenticated = useContext(AuthContextEmployee).isAuthenticated;
  const isClientAuthenticated = useContext(AuthContextClient).isAuthenticated;
  const isAuthenticated = isEmployeeAuthenticated || isClientAuthenticated;

  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<LandingPage />} />
        <Route path='/test' element={<Test />} />
        <Route path='/auth' element={<Auth />} />
        <Route path='/feed' element={<Feed />} />
        <Route
          path='/profileb2b'
          element={
            <ProtectedRoute
              {...defaultProtectedRouteProps}
              isAuthenticated={isAuthenticated}
              outlet={<ProfileB2B />}
            />
          }
        />
        <Route
          path='/profileb2c'
          element={
            <ProtectedRoute
              {...defaultProtectedRouteProps}
              isAuthenticated={isAuthenticated}
              outlet={<ProfileB2C />}
            />
          }
        />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
