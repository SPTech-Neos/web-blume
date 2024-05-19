import React from "react";
import * as S from './inputText.styled';
import Label from "../Label/Label";

const InputText: React.FC<S.InputTextProps> = ({ size, label, type = "text", placeholder, value, onChange, ...rest }) => (
    <S.InputContainer size={size}>
        <Label label={label} />
        <S.InputText label={label} type={type} placeholder={placeholder} value={value} onChange={onChange} {...rest} />
    </S.InputContainer>
);

export default InputText;