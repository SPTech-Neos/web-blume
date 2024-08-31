import React, { useState } from "react";
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
    const [fields, setFields] = useState({
        cnpj: "",
        cep: "",
        // Adicione outros campos conforme necessário
    });
  
    // Atualiza o valor dos campos
    const handleFieldChange = (field: string, value: string) => {
        setFields(prevFields => ({
            ...prevFields,
            [field]: value
        }));
    };
  
    // Função de validação dos campos obrigatórios
    const validateStep = () => {
        let isValid = true;

        switch (step) {
            case 1:
                if (!fields.cnpj || !fields.cep) {
                    isValid = false;
                }
                break;
            case 2:
                break;
            case 3:
                break;
            case 4:
                break;
            default:
                isValid = true;
        }

        return isValid;
    };
  
    const goToNextStep = () => {
        if (validateStep()) {
            setStep(step + 1);
        }
    };
  
    const goToPreviousStep = () => {
        setStep(step - 1);
    };

  return (
    <ColorContainer bgColor={c.gray100}>
      <S.Register>
        <PrimaryTitle>CADASTRO</PrimaryTitle>
        <Stepper theme={acc} steps={4} currentStep={step} />
        <SecondaryTitle size="sm">{getTitle(step)}</SecondaryTitle>
        <S.RegisterForm step={step} onSubmit={handleSubmit}>
          <StepContent 
            step={step} 
            acc={acc} 
            fields={fields} 
            onFieldChange={handleFieldChange} 
            goToNextStep={goToNextStep}  />
        </S.RegisterForm>
        <StepNavigation 
            step={step} 
            setStep={setStep} 
            validateStep={validateStep} 
            goToNextStep={goToNextStep} 
            goToPreviousStep={goToPreviousStep} />
      </S.Register>
    </ColorContainer>
  );
};

export default RegisterForm;
