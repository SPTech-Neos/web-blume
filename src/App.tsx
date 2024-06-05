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
import Employees from './pages/Employees/Employees';
import Products from './pages/Products/Products';
import Services from './pages/Services/Services';
// import { AuthContextEmployee } from './contexts/User/AuthContextProviderEmployee';
// import { AuthContextClient } from './contexts/User/AuthContextProviderClient';
// import ProtectedRoute, { ProtectedRouteProps } from './components/ProtectedRoute/ProtectedRoute';


// const defaultProtectedRouteProps: Omit<ProtectedRouteProps, 'outlet'> = {
//   isAuthenticated: false, 
//   authenticationPath: '/auth'
// };

const App: React.FC = () => {
  // Verifica se pelo menos um dos contextos de autenticação está autenticado
  // const isEmployeeAuthenticated = useContext(AuthContextEmployee).isAuthenticated;
  // const isClientAuthenticated = useContext(AuthContextClient).isAuthenticated;
  // const isAuthenticated = isEmployeeAuthenticated || isClientAuthenticated;

  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<LandingPage />} />
        <Route path='/test' element={<Test />} />
        <Route path='/auth' element={<Auth />} />
        <Route path='/feed' element={<Feed />} />
        <Route
          path='/establishment'
          element={
            // <ProtectedRoute
            //   {...defaultProtectedRouteProps}
            //   isAuthenticated={isAuthenticated}
            //   outlet={<Establishment />}
            // />
            <Establishment />}
        />
        <Route
          path='/client'
          element={
          //   <ProtectedRoute
          //     {...defaultProtectedRouteProps}
          //     isAuthenticated={isAuthenticated}
          //     outlet={<Client />}
          //   />
          // }
          <Client />}
        />
        <Route path="/employee" element={<Employee/>}/>
        <Route path="/details" element={<Details/>}/>
        <Route path="/orders" element={<Orders/>}/>
        <Route path="/employees" element={<Employees/>}/>
        <Route path="/services" element={<Services/>}/>
        <Route path="/products" element={<Products/>}/>
      </Routes>
    </BrowserRouter>
  );
};

export default App;
