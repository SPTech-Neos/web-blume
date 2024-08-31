import React from "react";
import * as S from "./register.styled";
import { PrimaryButton, LinkButton } from "../../../components/Buttons/DefaultButton/DefaultButton";
import { getTheme } from "../../../styles/Colors";

interface StepNavigationProps {
  step: number;
  setStep: React.Dispatch<React.SetStateAction<number>>;
}

const StepNavigation: React.FC<StepNavigationProps> = ({ step, setStep }) => {
  const handleNext = () => setStep(step + 1);
  const handlePrevious = () => setStep(step - 1);

  return (
    <S.FormFooter>
      {step > 1 && (
        <LinkButton
          color={getTheme("none").mainColor}
          size="md"
          width="200px"
          type="button"
          onClick={handlePrevious}
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
