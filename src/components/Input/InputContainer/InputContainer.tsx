import React from "react";

import Label from '../Label/Label';
import InputText from '../InputText/InputText';

import * as S from './InputContainer.styled';

const InputContainer: React.FC<S.InputContainerProps> = ({ label, type, placeholder }) => {
    return (
        <S.InputContainer>
            <Label label={label}></Label>
            <InputText type={type} placeholder={placeholder}></InputText>
        </S.InputContainer>
    );
}

export default InputContainer;