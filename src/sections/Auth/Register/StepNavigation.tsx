import React from "react";
import * as S from "./register.styled";
import { PrimaryButton, LinkButton } from "../../../components/Buttons/DefaultButton/DefaultButton";
import { getTheme } from "../../../styles/Colors";

interface StepNavigationProps {
  step: number;
  setStep: React.Dispatch<React.SetStateAction<number>>;
  validateStep: () => boolean;
  goToNextStep: () => void;
  goToPreviousStep: () => void;
}

const StepNavigation: React.FC<StepNavigationProps> = ({ step, setStep, validateStep, goToNextStep, goToPreviousStep }) => {
  const handleNext = () => {
    if (validateStep()) {
      goToNextStep();
    }
  };

  return (
    <S.FormFooter>
      {step > 1 && (
        <LinkButton
          color={getTheme("none").mainColor}
          size="md"
          width="200px"
          type="button"
          onClick={goToPreviousStep}
        >
          VOLTAR
        </LinkButton>
      )}
      <PrimaryButton
        color={getTheme("none").mainColor}
        size="md"
        width="200px"
        type="button"
        onClick={handleNext}
      >
        PRÓXIMO
      </PrimaryButton>
    </S.FormFooter>
  );
};

export default StepNavigation;
