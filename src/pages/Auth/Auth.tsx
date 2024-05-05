import React from 'react';
import { useLocation } from "react-router-dom";

import Login from '../../sections/Login/Login';
import ChooseAuth from '../../sections/ChooseAuth/ChooseAuth';
// import Signup from '../../sections/Signup/Signup';

import { AuthContextProvider as AuthContextProviderClient } from "../../contexts/User/AuthContextProviderClient";
import { AuthContextProvider as AuthContextProviderEmployee } from "../../contexts/User/AuthContextProviderEmployee";

const Auth: React.FC = () => {
  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);

  // Extract the mode query parameter (default to 'login')
  const mode = searchParams.get('mode') || 'login' || 'choose-auth';

  const bgLogin = 'linear-gradient(135deg, #96FFA0, #969AFF)';

  return (
    <>
      {mode === 'login' && <Login imgUrl={'/happy-woman.svg'} bgColor={bgLogin} imgAlt={'Login'}></Login>}
      {/* {mode === 'signup' && <Signup></Signup>} */}
      {mode === 'choose-auth' && 
        <AuthContextProviderClient>
          <AuthContextProviderEmployee>
            <ChooseAuth />
          </AuthContextProviderEmployee>
        </AuthContextProviderClient>
      }
    </>
  );
};

export default Auth;