// TO REDO
import React, { useState } from "react";
import * as S from "./register.styled";
import { colors as c, Themes, getTheme } from "../../../styles/Colors";
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
import InputImage from "../../../components/Input/InputImage/InputImage";
import { Column } from "../../../components/Input/InputImage/inputImage.styled";
import { LinkButton } from "../../../components/Buttons/DefaultButton/DefaultButton";
import Dropdown from "../../../components/Input/Dropdown/Dropdown";
import { useLocation } from "react-router-dom";

const Register: React.FC<S.RegisterProps> = ({}) => {
  // const [isClient, setIsClient] = useState("");
  const [cats, setCats] = useState<string[]>(["cate", "goria", "legal"]);

  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);

  const acc = searchParams.get("acc") || "none";

  function chooseRegister(acc: string) {
    // console.log(acc);

    if (acc == "client") {
      return <Client />;
    } else if (acc == "establishment") {
      return <Establishment />;
    } else {
      return <h1>TA ERRADO</h1>;
    }
  }

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
          <Stepper theme={acc} steps={2} currentStep={step} />
          <SecondaryTitle size="sm">
            {step == 1 ? "DADOS OBRIGATÓRIOS" : "DADOS OPCIONAIS"}
          </SecondaryTitle>
        </Column>
        <>
          <S.RegisterForm step={step} onSubmit={() => handleSubmit()}>
            {step == 1 ? (
              <S.FormPart>
                <InputText
                  theme={acc}
                  label="Nome"
                  type={"text"}
                  placeholder="Joana Silva"
                  onChange={() => {}}
                />

                <InputText
                  theme={acc}
                  label="E-mail"
                  type={"email"}
                  placeholder="exemplo@servidor.com"
                  onChange={() => {}}
                />
                <Column>
                  <InputContainer>
                    <InputText
                      theme={acc}
                      size="half"
                      label="Senha"
                      type={"password"}
                      placeholder="Bananina123"
                      onChange={() => {}}
                    />
                    <InputText
                      theme={acc}
                      size="half"
                      label="Confirmar Senha"
                      type={"password"}
                      placeholder="***********"
                      onChange={() => {}}
                    />
                  </InputContainer>

                  <S.TextWrapper>
                    <S.Text>
                      Tamanho mínimo:{" "}
                      <S.CBText theme={acc}>8 caracteres</S.CBText>
                    </S.Text>
                    <S.Text>
                      Caracter especial:{" "}
                      <S.CBText theme={acc}>mínimo 1</S.CBText>
                    </S.Text>
                    <S.Text>
                      Caracter maiúsculo:{" "}
                      <S.CBText theme={acc}>mínimo 1</S.CBText>
                    </S.Text>
                    <S.Text>
                      Caracter minúsculo:{" "}
                      <S.CBText theme={acc}>mínimo 1</S.CBText>
                    </S.Text>
                    <S.Text>
                      Caracter numérico:{" "}
                      <S.CBText theme={acc}>mínimo 1</S.CBText>
                    </S.Text>
                  </S.TextWrapper>
                </Column>
              </S.FormPart>
            ) : (
              <S.FormPart>
                <InputImage theme={acc} />

                <S.FormPartSmall>
                  <InputText
                    theme={acc}
                    size="full"
                    label="CEP"
                    placeholder="01414001"
                    type={"text"}
                    onChange={() => {}}
                  />

                  <InputContainer>
                    <InputText
                      theme={acc}
                      size="big"
                      label="Logradouro"
                      placeholder="Rua Haddock Lobo"
                      type={"text"}
                      onChange={() => {}}
                    />
                    <InputText
                      theme={acc}
                      size="small"
                      label="Número"
                      placeholder="575"
                      type={"text"}
                      onChange={() => {}}
                    />
                  </InputContainer>

                  <InputContainer>
                    <Dropdown
                      theme={acc}
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
                      theme={acc}
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
              color={getTheme(acc).mainColor}
              onClick={
                step == 2
                  ? () => {
                      setStep(step - 1);
                      // console.log(step);
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
              color={getTheme(acc).mainColor}
              onClick={
                step == 2
                  ? () => {
                      setStep(step - 1);
                      // console.log(step);
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
    const [maxStep, setMaxStep] = useState();
    const [minStep, setMinStep] = useState();

    function handleNext() {
      setStep(step + 1);
    }

    function handlePrevious() {
      setStep(step - 1);
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

    interface CategoriesProps {
      v: string[];
    }

    const HandleCategories: React.FC<CategoriesProps> = ({ v }) => {
      let elements = [];

      for (let i = 0; i < v.length; i++) {
        const el = v[i];
        const [checked, setChecked] = useState(false);

        elements.push(
          <S.Category isChecked={checked} onClick={() => setChecked(!checked)}>
            <h4>{el}</h4>
            {checked && <img src="/checked-green.svg" alt="" />}
          </S.Category>
        );
      }

      return elements;
    };

    function handleFormEstablishment(step: number) {
      switch (step) {
        case 1: {
          return (
            <S.FormPart>
              <InputText
                theme={acc}
                label="Nome do Estabelecimento"
                type={"text"}
                placeholder="Casa da Mãe Joana"
                onChange={() => {}}
              />

              <InputText
                theme={acc}
                label="CNPJ"
                type={"text"}
                placeholder="XXXXXXX"
                onChange={() => {}}
              />

              <InputContainer>
                <InputText
                  theme={acc}
                  size="half"
                  label="Horário de Entrada"
                  type={"time"}
                  placeholder=""
                  onChange={() => {}}
                />
                <InputText
                  theme={acc}
                  size="half"
                  label="Horário de Saída"
                  type={"time"}
                  placeholder=""
                  onChange={() => {}}
                />
              </InputContainer>

              <S.FormPartSmall>
                <InputText
                  theme={acc}
                  size="full"
                  label="CEP"
                  placeholder="01414001"
                  type={"text"}
                  onChange={() => {}}
                />

                <InputContainer>
                  <InputText
                    theme={acc}
                    size="big"
                    label="Logradouro"
                    placeholder="Rua Haddock Lobo"
                    type={"text"}
                    onChange={() => {}}
                  />
                  <InputText
                    theme={acc}
                    size="small"
                    label="Número"
                    placeholder="575"
                    type={"text"}
                    onChange={() => {}}
                  />
                </InputContainer>

                <InputContainer>
                  <Dropdown
                    theme={acc}
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
                    theme={acc}
                    size="big"
                    label="Complemento"
                    type={"text"}
                    onChange={() => {}}
                  />
                </InputContainer>
              </S.FormPartSmall>
            </S.FormPart>
          );
        }
        case 2: {
          return (
            <S.FormPart>
              <InputImage theme={acc} />
              <InputText
                theme={acc}
                label="Descrição"
                type={"text"}
                placeholder="Como é seu estabelecimento..."
                onChange={() => {}}
              />
            </S.FormPart>
          );
        }
        case 3: {
          return (
            <S.FormPart>
              <S.Categories>
                <HandleCategories v={cats} />
              </S.Categories>
            </S.FormPart>
          );
        }
        case 4: {
          return (
            <S.FormPart>
              <InputText
                theme={acc}
                label="Nome Completo"
                type={"text"}
                placeholder="Joana Silva"
                onChange={() => {}}
              />

              <InputText
                theme={acc}
                label="E-mail"
                type={"email"}
                placeholder="exemplo@servidor.com"
                onChange={() => {}}
              />
              <Column>
                <InputContainer>
                  <InputText
                    theme={acc}
                    size="half"
                    label="Senha"
                    type={"password"}
                    placeholder="Bananina123"
                    onChange={() => {}}
                  />
                  <InputText
                    theme={acc}
                    size="half"
                    label="Confirmar Senha"
                    type={"password"}
                    placeholder="***********"
                    onChange={() => {}}
                  />
                </InputContainer>

                <S.TextWrapper>
                  <S.Text>
                    Tamanho mínimo:{" "}
                    <S.CBText theme={acc}>8 caracteres</S.CBText>
                  </S.Text>
                  <S.Text>
                    Caracter especial: <S.CBText theme={acc}>mínimo 1</S.CBText>
                  </S.Text>
                  <S.Text>
                    Caracter maiúsculo:{" "}
                    <S.CBText theme={acc}>mínimo 1</S.CBText>
                  </S.Text>
                  <S.Text>
                    Caracter minúsculo:{" "}
                    <S.CBText theme={acc}>mínimo 1</S.CBText>
                  </S.Text>
                  <S.Text>
                    Caracter numérico: <S.CBText theme={acc}>mínimo 1</S.CBText>
                  </S.Text>
                </S.TextWrapper>
              </Column>
            </S.FormPart>
          );
        }
        default: {
          return <h1>DEFAULT</h1>;
        }
      }
    }

    return (
      // <h1>Business</h1>
      <>
        <Column>
          <PrimaryTitle>CADASTRO</PrimaryTitle>
          <Stepper theme={acc} steps={4} currentStep={step} />
          <SecondaryTitle size="sm">{handleTitle(step)}</SecondaryTitle>
        </Column>
        <>
          <S.RegisterForm step={step} onSubmit={() => handleSubmit()}>
            {handleFormEstablishment(step)}
          </S.RegisterForm>

          <S.FormFooter>
            <LinkButton
              color={getTheme(acc).mainColor}
              size="md"
              width="200px"
              type="submit"
              onClick={() => handlePrevious()}
            >
              VOLTAR
            </LinkButton>
            <PrimaryButton
              color={getTheme(acc).mainColor}
              size="md"
              width="200px"
              type="submit"
              onClick={() => handleNext()}
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
        <S.Register>{chooseRegister(acc)}</S.Register>
      </ColorContainer>
    </>
  );
};

export default Register;
