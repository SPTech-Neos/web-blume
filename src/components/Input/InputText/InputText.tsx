import React from "react";
import * as S from './InputText.styled';

const InputText: React.FC<S.InputTextProps> = ({ type, placeholder }) => {
    return (
        <S.InputText type={type} placeholder={placeholder}></S.InputText>
    );
}

export default InputText;