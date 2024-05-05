import React from "react";
import * as S from './button.styled';

export const PrimaryButton: React.FC<S.PrimaryButtonProps> = ({ width, size, children, type, disabled, onClick }) => {
    return (
        <S.PrimaryButton width={width} size={size} type={type} disabled={disabled} onClick={onClick}>{children}</S.PrimaryButton>
    );
}

export const DangerButton: React.FC<S.PrimaryButtonProps> = ({ color, width, size, children }) => {
    return (
        <S.DangerButton color = {color} width={width} size={size}>{children}</S.DangerButton>
    );
}

export const WarningButton: React.FC<S.PrimaryButtonProps> = ({ color, width, size, children }) => {
    return (
        <S.WarningButton color = {color} width={width} size={size}>{children}</S.WarningButton>
    );
}



export const MoveButton: React.FC<S.MoveButtonProps> = ({ moveTo, children }) => {
    return (
        <S.MoveButton href={moveTo}>
            {children}
        </S.MoveButton>
    );
}

