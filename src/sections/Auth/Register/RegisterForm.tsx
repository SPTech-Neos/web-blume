import React from "react";
import * as S from "./register.styled";
import { Stepper } from "../../../components/Stepper/Stepper";
import { PrimaryTitle, SecondaryTitle } from "../../../components/Texts/Title/Title";
import StepContent, { getTitle } from "./StepContent";
import StepNavigation from "./StepNavigation";
import ColorContainer from "../../../components/Containers/ColorContainer/ColorContainer";
import { colors as c } from "../../../styles/Colors";

interface RegisterFormProps {
  step: number;
  setStep: React.Dispatch<React.SetStateAction<number>>;
  handleSubmit: () => void;
  acc: string;
}

const RegisterForm: React.FC<RegisterFormProps> = ({ step, setStep, handleSubmit, acc }) => {
  return (
    <ColorContainer bgColor={c.gray100}>
      <S.Register>
        <PrimaryTitle>CADASTRO</PrimaryTitle>
        <Stepper theme={acc} steps={4} currentStep={step} />
        <SecondaryTitle size="sm">{getTitle(step)}</SecondaryTitle>
        <S.RegisterForm step={step} onSubmit={handleSubmit}>
          <StepContent step={step} acc={acc} />
        </S.RegisterForm>
        <StepNavigation step={step} setStep={setStep} />
      </S.Register>
    </ColorContainer>
  );
};

export default RegisterForm;
