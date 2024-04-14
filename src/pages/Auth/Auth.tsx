import React from 'react';
import { useLocation } from "react-router-dom";

import Login from '../../sections/Login/Login';
// import Signup from '../../sections/Signup/Signup';

const Auth: React.FC = () => {
  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);

  // Extract the mode query parameter (default to 'login')
  const mode = searchParams.get('mode') || 'login';

  return (
    <>
      {mode === 'login' && <Login imgUrl={'/happy-woman.svg'} bgColor={'var(--color-violet-50)'} imgAlt={'Login'}></Login>}
      {/* {mode === 'signup' && <Signup></Signup>} */}
    </>
  );
};

export default Auth;