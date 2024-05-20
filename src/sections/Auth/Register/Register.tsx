// TO REDO
import React, { useState } from "react";
import * as S from "./register.styled";
import { colors as c } from "../../../styles/Colors";
import { PrimaryTitle, SecondaryTitle } from "../../../components/Texts/Title/Title";
import InputText from "../../../components/Input/InputText/InputText";
import { PrimaryButton } from "../../../components/Buttons/DefaultButton/DefaultButton";
import InputContainer from "../../../components/Input/InputContainer/InputContainer";
import ColorContainer from "../../../components/Containers/ColorContainer/ColorContainer";
// import Subtitle from "../../../components/Texts/Subtitle/Subtitle";
import { Stepper } from "../../../components/Stepper/Stepper";
import { log } from "console";
import InputImage from "../../../components/Input/InputImage/InputImage";

// export const RegisterForm: React.FC<S.RegisterFormProps> = ({ step, children }) => {

//     return (
//         <S.RegisterForm step={step}>
//             {children}
//         </S.RegisterForm>
//     )
// }

const Register: React.FC<S.RegisterProps> = ({}) => {
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

  function handleSubmit() {}

  return (
    <>
      <ColorContainer bgColor={c.gray100}>
        <S.Register>
            <PrimaryTitle>CADASTRO</PrimaryTitle>
            <Stepper steps={2} currentStep={step}></Stepper>
          <>

            <S.RegisterForm step={step} onSubmit={() => handleSubmit()}>
              {step == 1 ? (
                <S.FormPart>
                  <SecondaryTitle size="sm">Dados Obrigatórios</SecondaryTitle>
                  <InputText
                    label="Nome"
                    value={name}
                    type={"text"}
                    onChange={() => {}}
                  />

                  <InputText
                    label="E-mail"
                    value={email}
                    type={"email"}
                    onChange={() => {}}
                  />

                  <InputContainer>
                    <InputText
                      size="half"
                      label="Senha"
                      value={senha}
                      type={"password"}
                      onChange={() => {}}
                    />
                    <InputText
                      size="half"
                      label="Confirmar Senha"
                      value={confSenha}
                      type={"password"}
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
                </S.FormPart>
              ) : (
                <S.FormPartSmall>
                    <SecondaryTitle size="sm">Dados Opcionais</SecondaryTitle>

                    <InputImage />

                    <>
                      <InputText 
                        size="full"
                        label="CEP"
                        value={cep}
                        type={"text"}
                        onChange={() => {}}
                      />

                      <InputContainer>
                        <InputText 
                          size="big"
                          label="Logradouro"
                          value={logradouro}
                          type={"text"}
                          onChange={() => {}}
                        />
                        <InputText 
                          size="small"
                          label="Número"
                          value={numero}
                          type={"text"}
                          onChange={() => {}}
                        />
                      </InputContainer>

                      <InputContainer>
                        <InputText 
                          size="small"
                          label="Estado"
                          value={estado}
                          type={"text"}
                          onChange={() => {}}
                        />
                        <InputText 
                          size="big"
                          label="Complemento"
                          value={complemento}
                          type={"text"}
                          onChange={() => {}}
                        />
                      </InputContainer>
                    </>
                </S.FormPartSmall>
              )}
            </S.RegisterForm>

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
          </>
        </S.Register>
      </ColorContainer>
    </>
  );
};

export default Register;
