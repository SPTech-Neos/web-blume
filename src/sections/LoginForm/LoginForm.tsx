import React from "react";

import * as S from './LoginForm.styled';

import Link from "../../components/Texts/Link/Link";
import Subtitle from "../../components/Texts/Subtitle/Subtitle";
import { Checkbox } from "../../components/Input/Checkbox/Checkbox";
import { PrimaryButton } from "../../components/Buttons/DefaultButton/DefaultButton";
import { PrimaryTitle } from "../../components/Texts/Title/Title";
import InputContainer from "../../components/Input/InputContainer/InputContainer";

const LoginForm: React.FC<S.LoginFormProps> = () => {
    return (
        <S.LoginForm>
            <PrimaryTitle outline={true} size="md">
                LOGIN
            </PrimaryTitle>

            <InputContainer label="E-mail" type="email" placeholder="email@exemplo.com"></InputContainer>
            <InputContainer label="Senha" type="password" placeholder="Bananinha123"></InputContainer>

            <div className="row">
                <Checkbox label="Lembrar de mim"></Checkbox>
                <Link size="sm" font="Poppins" href="google.com">Esqueci minha senha...</Link>
            </div>


            <PrimaryButton size="lg" width="200px">
                ENTRAR
            </PrimaryButton>
            
            <Subtitle size='sm'>
                <span> Não tem uma conta ainda? </span> 
                <Link href='google.com'>Crie uma conta!</Link>
            </Subtitle>
        </S.LoginForm>
    );
}

export default LoginForm;