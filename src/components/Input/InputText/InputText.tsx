import React from "react";
import * as S from './inputText.styled';

const InputText: React.FC<S.InputTextProps> = ({ type, placeholder }) => {
    return (
        <S.InputText type={type} placeholder={placeholder}></S.InputText>
    );
}

export default InputText;