// TO REDO
import React, { useState } from "react";
import * as S from "./register.styled";
import { colors as c } from "../../../styles/Colors";
import {
  PrimaryTitle,
  SecondaryTitle,
} from "../../../components/Texts/Title/Title";
import InputText from "../../../components/Input/InputText/InputText";
import { PrimaryButton } from "../../../components/Buttons/DefaultButton/DefaultButton";
import InputContainer from "../../../components/Input/InputContainer/InputContainer";
import ColorContainer from "../../../components/Containers/ColorContainer/ColorContainer";
// import Subtitle from "../../../components/Texts/Subtitle/Subtitle";
import { Stepper } from "../../../components/Stepper/Stepper";
import { log } from "console";
import InputImage from "../../../components/Input/InputImage/InputImage";
import { Column } from "../../../components/Input/InputImage/inputImage.styled";
import Link from "../../../components/Texts/Link/Link";
import { LinkButton } from "../../../components/Buttons/DefaultButton/DefaultButton";
import Dropdown from "../../../components/Input/Dropdown/Dropdown";
import { useLocation } from "react-router-dom";

// export const RegisterForm: React.FC<S.RegisterFormProps> = ({ step, children }) => {

//     return (
//         <S.RegisterForm step={step}>
//             {children}
//         </S.RegisterForm>
//     )
// }

const Register: React.FC<S.RegisterProps> = ({}) => {
  // const [isClient, setIsClient] = useState("");

  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);

  // Extract the mode query parameter (default to 'login')
  const acc = searchParams.get("acc") || "client" || "choose-auth";

  function handleSubmit() {}

  const Client: React.FC<S.RegisterProps> = ({}) => {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [senha, setSenha] = useState("");
    const [confSenha, setConfSenha] = useState("");
    const [cep, setCep] = useState("");
    const [logradouro, setLogradouro] = useState("");
    const [numero, setNumero] = useState("");
    const [estado, setEstado] = useState("");
    const [complemento, setComplemento] = useState("");
    const [step, setStep] = useState(1);

    function handleNext() {
      setStep(step + 1);
    }

    return (
      <>
        <Column>
          <PrimaryTitle>CADASTRO</PrimaryTitle>
          <Stepper steps={2} currentStep={step} />
          <SecondaryTitle size="sm">
            {step == 1 ? "DADOS OBRIGATÓRIOS" : "DADOS OPCIONAIS"}
          </SecondaryTitle>
        </Column>
        <>
          <S.RegisterForm step={step} onSubmit={() => handleSubmit()}>
            {step == 1 ? (
              <S.FormPart>
                <InputText
                  label="Nome"
                  type={"text"}
                  placeholder="Joana Silva"
                  onChange={() => {}}
                />

                <InputText
                  label="E-mail"
                  type={"email"}
                  placeholder="exemplo@servidor.com"
                  onChange={() => {}}
                />
                <Column>
                  <InputContainer>
                    <InputText
                      size="half"
                      label="Senha"
                      type={"password"}
                      placeholder="Bananina123"
                      onChange={() => {}}
                    />
                    <InputText
                      size="half"
                      label="Confirmar Senha"
                      type={"password"}
                      placeholder="***********"
                      onChange={() => {}}
                    />
                  </InputContainer>

                  <S.TextWrapper>
                    <S.Text>
                      Tamanho mínimo: <S.CBText>8 caracteres</S.CBText>
                    </S.Text>
                    <S.Text>
                      Caracter especial: <S.CBText>mínimo 1</S.CBText>
                    </S.Text>
                    <S.Text>
                      Caracter maiúsculo: <S.CBText>mínimo 1</S.CBText>
                    </S.Text>
                    <S.Text>
                      Caracter minúsculo: <S.CBText>mínimo 1</S.CBText>
                    </S.Text>
                    <S.Text>
                      Caracter numérico: <S.CBText>mínimo 1</S.CBText>
                    </S.Text>
                  </S.TextWrapper>
                </Column>
              </S.FormPart>
            ) : (
              <S.FormPart>
                <InputImage />

                <S.FormPartSmall>
                  <InputText
                    size="full"
                    label="CEP"
                    placeholder="01414001"
                    type={"text"}
                    onChange={() => {}}
                  />

                  <InputContainer>
                    <InputText
                      size="big"
                      label="Logradouro"
                      placeholder="Rua Haddock Lobo"
                      type={"text"}
                      onChange={() => {}}
                    />
                    <InputText
                      size="small"
                      label="Número"
                      placeholder="575"
                      type={"text"}
                      onChange={() => {}}
                    />
                  </InputContainer>

                  <InputContainer>
                    <Dropdown
                      size="small"
                      label="Estado"
                      placeholder="UF"
                      list={[
                        "AC",
                        "AL",
                        "AM",
                        "AP",
                        "BA",
                        "CE",
                        "DF",
                        "ES",
                        "GO",
                        "MA",
                        "MG",
                        "MS",
                        "MT",
                        "PA",
                        "PB",
                        "PE",
                        "PI",
                        "PR",
                        "RJ",
                        "RN",
                        "RO",
                        "RR",
                        "RS",
                        "SC",
                        "SE",
                        "SP",
                        "TO",
                      ]}
                      onChange={() => {}}
                    />
                    <InputText
                      size="big"
                      label="Complemento"
                      type={"text"}
                      onChange={() => {}}
                    />
                  </InputContainer>
                </S.FormPartSmall>
              </S.FormPart>
            )}
          </S.RegisterForm>

          <S.FormFooter>
            <LinkButton
              size="md"
              width="200px"
              type="submit"
              onClick={
                step == 2
                  ? () => {
                      setStep(step - 1);
                      console.log(step);
                    }
                  : () => handleNext()
              }
            >
              VOLTAR
            </LinkButton>
            <PrimaryButton
              size="md"
              width="200px"
              type="submit"
              onClick={
                step == 2
                  ? () => {
                      setStep(step - 1);
                      console.log(step);
                    }
                  : () => handleNext()
              }
            >
              PRÓXIMO
            </PrimaryButton>
          </S.FormFooter>
        </>
      </>
    );
  };

  const Establishment: React.FC<S.RegisterProps> = ({}) => {
    const [step, setStep] = useState(1);

    function handleNext() {
      setStep(step + 1);
    }

    function handleTitle(step: number) {
      switch (step) {
        case 1: {
          return "DADOS OBRIGATÓRIOS";
        }
        case 2: {
          return "DADOS OPCIONAIS";
        }
        case 3: {
          return "DADOS DE CATEGORIA";
        }
        case 4: {
          return "DADOS DO ADMINISTRADOR";
        }
        default: {
          return "DADOS OBRIGATÓRIOS";
        }
      }
    }

    return (
      // <h1>Business</h1>
      <>
        <Column>
          <PrimaryTitle>CADASTRO</PrimaryTitle>
          <Stepper steps={4} currentStep={step} />
          <SecondaryTitle size="sm">{handleTitle(step)}</SecondaryTitle>
        </Column>
        <>
          <S.RegisterForm step={step} onSubmit={() => handleSubmit()}>
            {step == 1 ? (
              <S.FormPart>
                <InputText
                  label="Nome"
                  type={"text"}
                  placeholder="Joana Silva"
                  onChange={() => {}}
                />

                <InputText
                  label="E-mail"
                  type={"email"}
                  placeholder="exemplo@servidor.com"
                  onChange={() => {}}
                />
                <Column>
                  <InputContainer>
                    <InputText
                      size="half"
                      label="Senha"
                      type={"password"}
                      placeholder="Bananina123"
                      onChange={() => {}}
                    />
                    <InputText
                      size="half"
                      label="Confirmar Senha"
                      type={"password"}
                      placeholder="***********"
                      onChange={() => {}}
                    />
                  </InputContainer>

                  <S.TextWrapper>
                    <S.Text>
                      Tamanho mínimo: <S.CBText>8 caracteres</S.CBText>
                    </S.Text>
                    <S.Text>
                      Caracter especial: <S.CBText>mínimo 1</S.CBText>
                    </S.Text>
                    <S.Text>
                      Caracter maiúsculo: <S.CBText>mínimo 1</S.CBText>
                    </S.Text>
                    <S.Text>
                      Caracter minúsculo: <S.CBText>mínimo 1</S.CBText>
                    </S.Text>
                    <S.Text>
                      Caracter numérico: <S.CBText>mínimo 1</S.CBText>
                    </S.Text>
                  </S.TextWrapper>
                </Column>
              </S.FormPart>
            ) : (
              <S.FormPart>
                <InputImage />

                <S.FormPartSmall>
                  <InputText
                    size="full"
                    label="CEP"
                    placeholder="01414001"
                    type={"text"}
                    onChange={() => {}}
                  />

                  <InputContainer>
                    <InputText
                      size="big"
                      label="Logradouro"
                      placeholder="Rua Haddock Lobo"
                      type={"text"}
                      onChange={() => {}}
                    />
                    <InputText
                      size="small"
                      label="Número"
                      placeholder="575"
                      type={"text"}
                      onChange={() => {}}
                    />
                  </InputContainer>

                  <InputContainer>
                    <Dropdown
                      size="small"
                      label="Estado"
                      placeholder="UF"
                      list={[
                        "AC",
                        "AL",
                        "AM",
                        "AP",
                        "BA",
                        "CE",
                        "DF",
                        "ES",
                        "GO",
                        "MA",
                        "MG",
                        "MS",
                        "MT",
                        "PA",
                        "PB",
                        "PE",
                        "PI",
                        "PR",
                        "RJ",
                        "RN",
                        "RO",
                        "RR",
                        "RS",
                        "SC",
                        "SE",
                        "SP",
                        "TO",
                      ]}
                      onChange={() => {}}
                    />
                    <InputText
                      size="big"
                      label="Complemento"
                      type={"text"}
                      onChange={() => {}}
                    />
                  </InputContainer>
                </S.FormPartSmall>
              </S.FormPart>
            )}
          </S.RegisterForm>

          <S.FormFooter>
            <LinkButton
              size="md"
              width="200px"
              type="submit"
              onClick={
                step == 2
                  ? () => {
                      setStep(step - 1);
                      console.log(step);
                    }
                  : () => handleNext()
              }
            >
              VOLTAR
            </LinkButton>
            <PrimaryButton
              size="md"
              width="200px"
              type="submit"
              onClick={
                step == 2
                  ? () => {
                      setStep(step - 1);
                      console.log(step);
                    }
                  : () => handleNext()
              }
            >
              PRÓXIMO
            </PrimaryButton>
          </S.FormFooter>
        </>
      </>
    );
  };

  return (
    <>
      <ColorContainer bgColor={c.gray100}>
        <S.Register>
          {acc == "client" ? <Client /> : <Establishment />}
        </S.Register>
      </ColorContainer>
    </>
  );
};

export default Register;
