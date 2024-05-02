import React, { 
    // useContext, 
    useState,
    useEffect

} from "react";
import { useNavigate, useLocation } from "react-router-dom";

import * as S from './LoginForm.styled'; // Assuming styled-components is used

import { ClientAdapter } from "../../adapters/User/Client";
// import { AuthContext } from "../../contexts/User/Client/AuthContextProvider";

import Link from "../../components/Texts/Link/Link";
import Subtitle from "../../components/Texts/Subtitle/Subtitle";
import { Checkbox } from "../../components/Input/Checkbox/Checkbox";
import { PrimaryButton } from "../../components/Button/Button";
import { PrimaryTitle } from "../../components/Texts/Title/Title";
import InputContainer from "../../components/Input/InputContainer/InputContainer";
import InputText from "../../components/Input/InputText/InputText";
import Modal from "../../components/Modals/FormModal/Modal";

interface LoginFormProps {
    onSubmit: (email: string, password: string) => void;
}

const LoginForm: React.FC<LoginFormProps> = () => {
    const navigate = useNavigate();
    const location = useLocation();

    useEffect(() => {
        window.sessionStorage.setItem("location", location.pathname);
    }, [location]);

    const [type, setType] = useState('');
    const [message, setMessage] = useState('');
    const [open, setOpen] = useState(false);
    const [linkTo, setLinkTo] = useState('');

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [errors, setErrors] = useState<{ email?: string; password?: string; account?: string }[]>([]);

    const clientAdapter = new ClientAdapter();

    const handleEmailChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setEmail(event.target.value);
    };

    const handlePasswordChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setPassword(event.target.value);
    };

    const handleSubmit = async (event: React.SyntheticEvent) => {
        event.preventDefault();

        const newErrors: { email?: string; password?: string; account?: string; }[] = [];

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
                console.log('Login bem-sucedido!');
                setType("success");
                setMessage("Login efetuado com sucesso!");
                setOpen(true);
                setLinkTo("/feed");
                
                setTimeout(() => {
                    navigate("/feed");
                }, 10000)
                    
            } else {
                newErrors.push({ account: 'Credenciais inválidas' });
                setErrors(newErrors);
            }
        } catch (error) {
            setType("error");
            setMessage("Erro durante login, tente novamente mais tarde!");
            setOpen(true);
            setLinkTo(window.sessionStorage.getItem('location') || '');
            console.error('Erro durante o login:', error);

            setTimeout(() => {
                navigate(window.sessionStorage.getItem('location') || '');
            }, 10000)
        }
    };

    return (
    <>
        <Modal message={message} type={type} isOpen={open} linkTo={linkTo}/>

        <S.LoginForm onSubmit={handleSubmit}>
        <PrimaryTitle outline={true} size="md">
            LOGIN
        </PrimaryTitle>

        <>
            <S.InputWrapper>
                <InputContainer label="E-mail" type="email" placeholder="email@exemplo.com">
                    <InputText type="email" value={email} onChange={handleEmailChange} />
                </InputContainer>

                {errors.length > 0 && (
                    <>
                        {errors.map((error) => (
                            <S.ErrorMessage key={error.email}>{error.email}</S.ErrorMessage>
                        ))}
                    
                    </>
                )}
            </S.InputWrapper>

            <S.InputWrapper>
                <InputContainer label="Senha" type="password" placeholder="Bananinha123">
                    <InputText type="password" value={password} onChange={handlePasswordChange} />
                </InputContainer>

                {errors.length > 0 && (
                    <>
                    {errors.map((error) => (
                        <S.ErrorMessage key={error.password || error.account}>{error.password || error.account}</S.ErrorMessage>
                    ))}
                    </>
                )}
            </S.InputWrapper>
        </>

        <div className="row">
            <Checkbox label="Lembrar de mim" />
            <Link size="sm" font="Poppins" href="google.com">
            Esqueci minha senha...
            </Link>
        </div>

        <PrimaryButton size="lg" width="200px" type="submit">
            ENTRAR
        </PrimaryButton>

        <Subtitle size="sm">
            <span> Não tem uma conta ainda? </span>
            <Link href="google.com">Crie uma conta!</Link>
        </Subtitle>
        </S.LoginForm>
    </>
        
    );
};

export default LoginForm;
