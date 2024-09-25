import React from "react";
import * as S from "./checkbox.styled";

// import Subtitle from "../../Texts/Subtitle/Subtitle";
import Text from "../../Texts/Text/Text";

export const Checkbox: React.FC<S.CheckboxProps> = ({ label }) => {
  return (
    <S.Checkbox label={label}>
      <input type="checkbox" />
      <Text size="sm">{label}</Text>
    </S.Checkbox>
  );
};
