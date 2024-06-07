import React, {
  // useContext,
  useState,
  useEffect,
  useContext,
} from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { AuthContextClient } from "../../contexts/User/AuthContextProviderClient";
import { AuthContextEmployee } from "../../contexts/User/AuthContextProviderEmployee";

import * as S from "./loginForm.styled";

import Link from "../../components/Texts/Link/Link";
import Subtitle from "../../components/Texts/Subtitle/Subtitle";
import { Checkbox } from "../../components/Input/Checkbox/Checkbox";
import { PrimaryButton } from "../../components/Buttons/DefaultButton/DefaultButton";
import { PrimaryTitle } from "../../components/Texts/Title/Title";

import InputContainer from "../../components/Input/InputContainer/InputContainer";
import InputText from "../../components/Input/InputText/InputText";

import Modal from "../../components/Modals/FormModal/Modal";

import { ClientLoginDto } from "../../utils/client.types";
import { EmployeeLoginDto } from "../../utils/Employee/employee.types";

interface LoginFormProps {
  onSubmit?: (email: string, password: string) => void;
}

const LoginForm: React.FC<LoginFormProps> = () => {
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    window.sessionStorage.setItem("location", location.pathname);
  }, [location]);

  const { handleLoginClient } = useContext(AuthContextClient);
  const { handleLoginEmployee } = useContext(AuthContextEmployee);

  const [type, setType] = useState("");
  const [message, setMessage] = useState("");
  const [open, setOpen] = useState(false);
  const [linkTo, setLinkTo] = useState("");

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errors, setErrors] = useState<
    { email?: string; password?: string; account?: string }[]
  >([]);

  const handleEmailChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(event.target.value);
  };

  const handlePasswordChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(event.target.value);
  };

  const handleSubmit = async (event: React.SyntheticEvent) => {
    event.preventDefault();

    const newErrors: { email?: string; password?: string; account?: string }[] =
      [];

    if (!email) {
      newErrors.push({ email: "Email obrigatório" });
    }

    if (!password) {
      newErrors.push({ password: "Senha obrigatória" });
    }

    if (newErrors.length > 0) {
      setErrors(newErrors);
      return;
    }

    try {
      const clientLoginDto: ClientLoginDto = { email, password };
      const employeeLoginDto: EmployeeLoginDto = { email, password };

      const clientToken = await handleLoginClient(clientLoginDto);
      const employeeToken = await handleLoginEmployee(employeeLoginDto);

      if (clientToken || employeeToken) {
        ("Login bem-sucedido!");

        setType("success");
        setMessage("Login efetuado com sucesso!");
        setLinkTo("/auth?mode=choose-auth");
        setOpen(true);

        if (clientToken && employeeToken) {
          setType("success");
          setMessage("Login efetuado com sucesso!");
          setLinkTo("/auth?mode=choose-auth");
          setOpen(true);
        } else if (clientToken) {
          setType("success");
          setMessage("Login efetuado com sucesso!");
          setLinkTo("/feed");
          setOpen(true);
        } else if (employeeToken) {
          setType("success");
          setMessage("Login efetuado com sucesso!");
          setLinkTo("/employee");
          setOpen(true);
        }
      } else {
        newErrors.push({ account: "Credenciais inválidas" });
        setErrors(newErrors);
      }
    } catch (error) {
      setType("error");
      setMessage("Erro durante login, tente novamente mais tarde!");
      setOpen(true);
      setLinkTo(window.sessionStorage.getItem("location") || "");
      console.error("Erro durante o login:", error);

      setTimeout(() => {
        navigate(window.sessionStorage.getItem("location") || "");
      }, 10000);
    }
  };

  return (
    <>
      <Modal message={message} type={type} isOpen={open} linkTo={linkTo} />

      <S.LoginForm onSubmit={handleSubmit}>
        <PrimaryTitle outline={true} size="md">
          LOGIN
        </PrimaryTitle>

        <>
          <S.InputWrapper>
            <InputText
              label="E-mail"
              type="email"
              value={email}
              onChange={handleEmailChange}
            />

            {errors.length > 0 && (
              <>
                {errors.map((error) => (
                  <S.ErrorMessage key={error.email}>
                    {error.email}
                  </S.ErrorMessage>
                ))}
              </>
            )}
          </S.InputWrapper>

          <S.InputWrapper>
            <InputText
              label="Senha"
              type="password"
              value={password}
              onChange={handlePasswordChange}
            />

            {errors.length > 0 && (
              <>
                {errors.map((error) => (
                  <S.ErrorMessage key={error.password || error.account}>
                    {error.password || error.account}
                  </S.ErrorMessage>
                ))}
              </>
            )}
          </S.InputWrapper>
        </>

        <S.InputWrapper>
          <div className="row">
            <Checkbox label="Lembrar de mim" />
            <Link size="sm" font="Poppins" href="google.com">
              Esqueci minha senha...
            </Link>
          </div>
        </S.InputWrapper>

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
