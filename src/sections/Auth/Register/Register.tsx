// TO REDO
import React, { useState } from "react";
import * as S from './register.styled';
import { colors as c } from "../../../styles/Colors";
import { PrimaryTitle } from "../../../components/Texts/Title/Title";
import InputText from "../../../components/Input/InputText/InputText";
import { PrimaryButton } from "../../../components/Buttons/DefaultButton/DefaultButton";
import InputContainer from "../../../components/Input/InputContainer/InputContainer";
import ColorContainer from "../../../components/Containers/ColorContainer/ColorContainer";
import Subtitle from "../../../components/Texts/Subtitle/Subtitle";
import { Stepper } from "../../../components/Stepper/Stepper";

const Register: React.FC<S.RegisterProps> = ({  }) => {
    const [step, setStep] = useState(1);

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [senha, setSenha] = useState('');
    const [confSenha, setConfSenha] = useState('');

    function handleNext() {
        setStep(step + 1);
    }

    return (
        <>
            <ColorContainer bgColor={c.gray100}>
                <S.Register>                                                                                
                    <PrimaryTitle>CADASTRO</PrimaryTitle>

                    <Stepper steps={3} currentStep={1}></Stepper>

                    <S.RegisterForm step={step}> 
                        
                        <InputText label="Nome" value={name} type={"text"} onChange={() => {}}></InputText>
                        
                        <InputText label="E-mail" value={email} type={"email"} onChange={() => {}}></InputText>

                        <InputContainer>
                            <InputText size="half" label="Senha" value={senha} type={"password"} onChange={() => {}}></InputText>
                            <InputText size="half" label="Confirmar Senha" value={confSenha} type={"password"} onChange={() => {}}></InputText>
                        </InputContainer>

                    </S.RegisterForm>

                    <S.TextWrapper>
                        <S.Text> Tamanho mínimo: <S.CBText>8 caracteres</S.CBText> </S.Text>     
                        <S.Text> Caracter especial: <S.CBText>mínimo 1</S.CBText> </S.Text>     
                        <S.Text> Caracter maiúsculo: <S.CBText>mínimo 1</S.CBText> </S.Text>     
                        <S.Text> Caracter minúsculo: <S.CBText>mínimo 1</S.CBText> </S.Text>     
                        <S.Text> Caracter numérico: <S.CBText>mínimo 1</S.CBText> </S.Text>     
                    </S.TextWrapper>
                    
                    <PrimaryButton 
                    size="md" 
                    width="200px" 
                    // onClick={handleNext()}
                    >
                        PRÓXIMO
                    </PrimaryButton>
                </S.Register>
            </ColorContainer>
        </>
    );
}

export default Register;