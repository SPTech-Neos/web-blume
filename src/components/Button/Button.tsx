import React from "react";
import * as S from './button.styled';

export const PrimaryButton: React.FC<S.PrimaryButtonProps> = ({ width, size, children }) => {
    return (
        <S.PrimaryButton width={width} size={size}>{children}</S.PrimaryButton>
    );
}

export const MoveButton: React.FC<S.MoveButtonProps> = ({ moveTo, children }) => {
    return (
        <S.MoveButton href={moveTo}>
            {children}
        </S.MoveButton>
    );
}

