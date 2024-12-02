import React, {
  // useContext,
  useState,
  useEffect,
  useContext,
} from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { AuthContextEmployee } from "../../contexts/User/AuthContextProviderEmployee";

import * as S from "./loginForm.styled";

// import Link from "../../components/Texts/Link/Link";
// import Subtitle from "../../components/Texts/Subtitle/Subtitle";
// import { Checkbox } from "../../components/Input/Checkbox/Checkbox";
// import { PrimaryButton } from "../../components/Buttons/DefaultButton/DefaultButton";
import { PrimaryTitle } from "../../components/Texts/Title/Title";

import InputContainer from "../../components/Input/InputContainer/InputContainer";
import InputText from "../../components/Input/InputText/InputText";

import Modal from "../../components/Modals/FormModal/Modal";

import { EmployeeLoginDto } from "../../utils/Users/Employee/employee.types";
import { Button } from "../Buttons/Button/Button";
import Container from "../Containers/Container/Container";
import Text from "../Texts/Text/Text";

interface LoginFormProps {
  onSubmit?: (email: string, password: string) => void;
}

const LoginForm: React.FC<LoginFormProps> = () => {
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    window.sessionStorage.setItem("location", location.pathname);
  }, [location]);

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
      const employeeLoginDto: EmployeeLoginDto = { email, password };
      const employeeToken = await handleLoginEmployee(employeeLoginDto);

      if (employeeToken) {
        setType("success");
        setMessage("Login efetuado com sucesso!");
        setLinkTo("/employee");
        setOpen(true);

        const redirectPath = window.sessionStorage.getItem("location") || "/";
        navigate(redirectPath, { replace: true });
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
            <InputContainer>
              <InputText
                size="full"
                label="E-mail"
                type="email"
                placeholder="Digite seu e-mail..."
                value={email}
                onChange={handleEmailChange}
                theme={"client"}
              />
            </InputContainer>

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
            <InputContainer>
              <InputText
                size="full"
                label="Senha"
                type="password"
                placeholder="Digite sua senha..."
                value={password}
                onChange={handlePasswordChange}
                theme={"client"}
              />
            </InputContainer>

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

        {/* <div className="row">
          <Checkbox label="Lembrar de mim" />
          <Link size="sm" font="Poppins" href="google.com">
            Esqueci minha senha...
          </Link>
        </div> */}

        <Button size="lg" type="submit">
          ENTRAR
        </Button>

        <Container direction="column">
          <S.LinkContainer>
            <Text size="sm"> Não tem uma conta ainda? </Text>
            <S.LinkEstablishment
              size="sm"
              id="establish"
              href="/auth?mode=register&acc=establishment"
            >
              Crie um estabelecimento!
            </S.LinkEstablishment>
          </S.LinkContainer>
        </Container>
      </S.LoginForm>
    </>
  );
};

export default LoginForm;
