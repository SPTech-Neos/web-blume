import styled from 'styled-components';

export interface LoginFormProps {
    // type: string;
    // placeholder: string;
    // clearable: boolean;
    // required: boolean;
}

export const LoginForm = styled.form<LoginFormProps>`

   width: 50%;
   height: 100vh;
   display: flex;
   flex-direction: column;
   align-items: center;
   justify-content: center;
   gap: 25px;

`;