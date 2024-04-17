import React from 'react';
import { useLocation } from "react-router-dom";

import Login from '../../sections/Login/Login';
// import Signup from '../../sections/Signup/Signup';

const Auth: React.FC = () => {
  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);

  // Extract the mode query parameter (default to 'login')
  const mode = searchParams.get('mode') || 'login';

  const bgLogin = 'linear-gradient(135deg, #96FFA0, #969AFF)';

  return (
    <>
      {mode === 'login' && <Login imgUrl={'/happy-woman.svg'} bgColor={bgLogin} imgAlt={'Login'}></Login>}
      {/* {mode === 'signup' && <Signup></Signup>} */}
    </>
  );
};

export default Auth;