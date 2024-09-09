import React, { useState } from "react";
import * as S from "./inputText.styled";
import Label from "../Label/Label";
import Text from "../../Texts/Text/Text";

import { Icon } from "react-icons-kit";
import { eyeOff } from "react-icons-kit/feather/eyeOff";
import { eye } from "react-icons-kit/feather/eye";

const InputText: React.FC<S.InputTextProps> = ({
  size,
  label,
  type,
  placeholder,
  theme,
  value,
  onChange,
  mask,
  error,
  ...rest
}) => {
  const [icon, setIcon] = useState(eyeOff);
  const [typeState, setTypeState] = useState(type);

  const handleToggle = () => {
    if (typeState === "password") {
      setIcon(eye);
      setTypeState("text");
    } else {
      setIcon(eyeOff);
      setTypeState("password");
    }
  };

  return (
    <S.InputContainer size={size}>
      <Label label={label} />
      <S.StyledInput
        mask={mask}
        label={label}
        theme={theme}
        type={typeState}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        error={error}
        {...rest}
      />
      <S.IconSpan $ispassword={type == "password"} onClick={handleToggle}>
        <Icon className="absolute mr-10" icon={icon} size={25} />
      </S.IconSpan>
      {error && <S.ErrorText>{error}</S.ErrorText>}
    </S.InputContainer>
  );
};

export default InputText;

// import React from "react";
// import * as S from './inputText.styled';

// const InputText: React.FC<S.InputTextProps> = ({ type = "text", placeholder, value, onChange, ...rest }) => (
//     <S.InputText type={type} placeholder={placeholder} value={value} onChange={onChange} {...rest} />
// );

// export default InputText;
