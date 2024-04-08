import React from "react";
import * as S from './LoginForm.styled';
import { PrimaryTitle } from "../../components/Title/Title";
import InputContainer from "../../components/Input/InputContainer/InputContainer";

const LoginForm: React.FC<S.LoginFormProps> = () => {
    return (
        <S.LoginForm>
            <PrimaryTitle children="LOGIN" outline={true} size="md"></PrimaryTitle>
            <InputContainer label="E-mail" type="email" placeholder="email@exemplo.com"></InputContainer>
        </S.LoginForm>
    );
}

export default LoginForm;