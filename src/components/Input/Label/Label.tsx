import React from "react";
import * as S from './Label.styled';

export interface LabelProps {
    label: string;
}

const Label: React.FC<LabelProps> = ({ label }) => {
    return (
        <S.Label>{label}</S.Label>
    );
}

export default Label;