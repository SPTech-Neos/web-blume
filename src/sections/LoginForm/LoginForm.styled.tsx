import { FormEvent } from 'react';
import styled from 'styled-components';

export interface LoginFormProps {
    // type: string;
    // placeholder: string;
    // clearable: boolean;
    // required: boolean;
    onSubmit?: (event: FormEvent<HTMLFormElement>) => void;
}

export const LoginForm = styled.form<LoginFormProps>`

   width: 50%;
   height: 100vh;
   display: flex;
   flex-direction: column;
   align-items: center;
   justify-content: center;
   gap: 25px;
   padding: 50px 150px;

`;