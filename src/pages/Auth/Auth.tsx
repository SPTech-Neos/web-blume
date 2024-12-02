import React from "react";
import { useLocation } from "react-router-dom";

import ChooseAuth from "../../sections/ChooseAuth/ChooseAuth";
import Login from "../../sections/Auth/Login/Login";
// import Signup from '../../sections/Signup/Signup';
import { colors as c } from "../../styles/Colors";

import { AuthContextProvider as AuthContextProviderEmployee } from "../../contexts/User/AuthContextProviderEmployee";
import Register from "../../sections/Auth/Register/Register";

import loginImg from "../../assets/Auth/login-left.svg";

const Auth: React.FC = () => {
  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);

  // Extract the mode query parameter (default to 'login')
  const mode = searchParams.get("mode") || "login" || "choose-auth";

  const colorBg = c.gradientDefault;

  return (
    <>
      {/* {mode === 'signup' && <Signup></Signup>} */}
      {mode === "login" && (
        <Login imgUrl={loginImg} bgColor={colorBg} imgAlt={"Login"}></Login>
      )}
      {mode === "register" && <Register></Register>}
      {mode === "choose-auth" && (
        <AuthContextProviderEmployee>
          <ChooseAuth />
        </AuthContextProviderEmployee>
      )}
    </>
  );
};

export default Auth;
