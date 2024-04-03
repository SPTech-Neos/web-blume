import React from "react";

import Label from '../Label/Label';
import InputText from '../InputText/InputText';

import * as S from './InputContainer.styled';

const InputContainer: React.FC<S.InputContainerProps> = ({ text }) => {
    return (
        <S.InputContainer>
            <Label text={text}></Label>
            <InputText></InputText>
        </S.InputContainer>
    );
}

export default InputContainer;