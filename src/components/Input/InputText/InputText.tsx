import React from "react";
import * as S from "./inputText.styled";
import Label from "../Label/Label";
// import { TextField } from "@radix-ui/themes";

const InputText: React.FC<S.InputTextProps> = ({
  size,
  label,
  type = "text",
  placeholder,
  theme,
  value,
  onChange,
  mask,
  error,
  ...rest
}) => (
  <S.InputContainer size={size}>
    <Label label={label} />
    <S.StyledInput
      mask={mask}
      label={label}
      theme={theme}
      type={type}
      placeholder={placeholder}
      value={value}
      onChange={onChange}
      error={error}
      {...rest}
    />
    {error && <S.ErrorText>{error}</S.ErrorText>} 
  </S.InputContainer>
);

export default InputText;

// import React from "react";
// import * as S from './inputText.styled';

// const InputText: React.FC<S.InputTextProps> = ({ type = "text", placeholder, value, onChange, ...rest }) => (
//     <S.InputText type={type} placeholder={placeholder} value={value} onChange={onChange} {...rest} />
// );

// export default InputText;
