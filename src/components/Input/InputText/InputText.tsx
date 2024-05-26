import React from "react";
import * as S from "./inputText.styled";
import Label from "../Label/Label";
import { TextField } from "@radix-ui/themes";

const InputText: React.FC<S.InputTextProps> = ({
  size,
  label,
  type = "text",
  placeholder,
  onChange,
  ...rest
}) => (
  <S.InputContainer size={size}>
    <Label label={label} />
    <S.InputText
      label={label}
      type={type}
      placeholder={placeholder}
      onChange={onChange}
      {...rest}
    >
      <S.Slot />
    </S.InputText>
  </S.InputContainer>
);

export default InputText;
