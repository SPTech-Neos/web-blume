import React, { 
    // useContext, 
    useState 
} from "react";
import { ClientAdapter } from "../../adapters/User/Client";
// import { AuthContext } from "../../contexts/User/Client/AuthContextProvider";

import * as S from './LoginForm.styled'; // Assuming styled-components is used

import Link from "../../components/Texts/Link/Link";
import Subtitle from "../../components/Texts/Subtitle/Subtitle";
import { Checkbox } from "../../components/Input/Checkbox/Checkbox";
import { PrimaryButton } from "../../components/Button/Button";
import { PrimaryTitle } from "../../components/Texts/Title/Title";
import InputContainer from "../../components/Input/InputContainer/InputContainer";
import InputText from "../../components/Input/InputText/InputText";



interface LoginFormProps {
  onSubmit: (email: string, password: string) => void;
}

const LoginForm: React.FC<LoginFormProps> = () => {
    // const { setToken } = useContext(AuthContext);

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [errors, setErrors] = useState<{ email?: string; password?: string }[]>([]);

    const clientAdapter = new ClientAdapter();

    const handleEmailChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setEmail(event.target.value);
    };

    const handlePasswordChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setPassword(event.target.value);
    };

    const handleSubmit = async (event: React.SyntheticEvent) => {
        event.preventDefault();
    
        const newErrors: { email?: string; password?: string }[] = [];
        if (!email) {
            newErrors.push({ email: 'Email obrigatório' });
        }
    
        if (!password) {
            newErrors.push({ password: 'Senha obrigatória' });
        }
    
        if (newErrors.length > 0) {
            setErrors(newErrors);
            return;
        }
    
        try {
            const token = await clientAdapter.login(email, password);
            console.log(token)
            if (token) {
                // Login bem-sucedido, você pode fazer o que for necessário aqui, como redirecionar o usuário
                // setToken(token); manda para o token
                console.log('Login bem-sucedido!');
            } else {
                // Tratar caso de falha de login
                console.log('Credenciais inválidas!');
            }
        } catch (error) {
            // Tratar erros de requisição, como erro de rede, etc.
            console.error('Erro durante o login:', error);
        }
    };

    return (
        <S.LoginForm onSubmit={handleSubmit}>
        <PrimaryTitle outline={true} size="md">
            LOGIN
        </PrimaryTitle>

        <InputContainer label="E-mail" type="email" placeholder="email@exemplo.com">
            <InputText type="email" value={email} onChange={handleEmailChange} />
        </InputContainer>

        <InputContainer label="Senha" type="password" placeholder="Bananinha123">
            <InputText type="password" value={password} onChange={handlePasswordChange} />
        </InputContainer>

        <div className="row">
            <Checkbox label="Lembrar de mim" />
            <Link size="sm" font="Poppins" href="google.com">
            Esqueci minha senha...
            </Link>
        </div>

        {errors.length > 0 && (
            <div className="error">
            {errors.map((error) => (
                <span key={error.email || error.password}>{error.email || error.password}</span>
            ))}
            </div>
        )}

        <PrimaryButton size="lg" width="200px" type="submit">
            ENTRAR
        </PrimaryButton>

        <Subtitle size="sm">
            <span> Não tem uma conta ainda? </span>
            <Link href="google.com">Crie uma conta!</Link>
        </Subtitle>
        </S.LoginForm>
    );
};

export default LoginForm;
