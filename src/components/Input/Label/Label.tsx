import React from "react";
import * as S from './Label.styled';


const Label: React.FC<S.LabelProps> = ({ text }) => {
    return (
        <S.Label>{text}</S.Label>
    );
}

export default Label;