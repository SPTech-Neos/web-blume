import React from "react";
import * as S from "./inputText.styled";
import Label from "../Label/Label";
// import { TextField } from "@radix-ui/themes";

const InputText: React.FC<S.InputTextProps> = ({
  label,
  type,
  placeholder,
  name,
  value,
  onChange,
  size,
  theme,
  mask, // Receba a prop mask
}) => (
  <div>
    <label>{label}</label>
    <InputMask
      mask={mask}
      value={value}
      onChange={onChange}
    >
      {(inputProps: any) => (
        <input
          {...inputProps}
          type={type}
          placeholder={placeholder}
          name={name}
          style={{ width: size === 'big' ? '100%' : size === 'small' ? '50%' : '75%' }}
        />
      )}
    </InputMask>
  </div>
);

export default InputText;

// import React from "react";
// import * as S from './inputText.styled';

// const InputText: React.FC<S.InputTextProps> = ({ type = "text", placeholder, value, onChange, ...rest }) => (
//     <S.InputText type={type} placeholder={placeholder} value={value} onChange={onChange} {...rest} />
// );

// export default InputText;
