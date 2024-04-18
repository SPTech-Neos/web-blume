import React from "react";
import * as S from './Login.styled';

import LoginForm from '../../sections/LoginForm/LoginForm';
import AsideImg from '../../sections/AsideImg/AsideImg';

const Login: React.FC<S.LoginProps> = ({ imgUrl, bgColor, imgAlt }) => {
    return (
        <>
            <S.Login imgUrl={imgUrl} bgColor={bgColor} imgAlt={imgAlt}>
                <AsideImg imgUrl={imgUrl} bgColor={bgColor} imgAlt={imgAlt}></AsideImg>
                <LoginForm></LoginForm>
            </S.Login>
        </>
    );
}

export default Login;