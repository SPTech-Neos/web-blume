import React from "react";
import * as S from "./register.styled";
import {
  PrimaryButton,
  LinkButton,
} from "../../../components/Buttons/DefaultButton/DefaultButton";
import { getTheme } from "../../../styles/Colors";

interface StepNavigationProps {
  step: number;
  validateStep: () => boolean;
  goToNextStep: () => void;
  goToPreviousStep: () => void;
  handleSubmit: () => void;
}

const StepNavigation: React.FC<StepNavigationProps> = ({
  step,
  validateStep,
  goToNextStep,
  goToPreviousStep,
  handleSubmit,
}) => {
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

      {step < 3 && (
        <PrimaryButton
          color={getTheme("none").mainColor}
          size="md"
          width="200px"
          type="button"
          onClick={handleNext}
        >
          PRÓXIMO
        </PrimaryButton>
      )}

      {step >= 3 && (
        <PrimaryButton
          color={getTheme("none").mainColor}
          size="md"
          width="200px"
          type="button"
          onClick={handleSubmit}
        >
          FINALIZAR
        </PrimaryButton>
      )}
    </S.FormFooter>
  );
};

export default StepNavigation;
