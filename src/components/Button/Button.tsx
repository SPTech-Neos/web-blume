import React from "react";
import * as S from './button.styled';

const PrimaryButton: React.FC<S.PrimaryButtonProps> = ({ width, size, children }) => {
    return (
        <S.PrimaryButton width={width} size={size}>{children}</S.PrimaryButton>
    );
}

export default PrimaryButton;