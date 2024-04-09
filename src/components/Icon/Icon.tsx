import React from "react";
import * as S from './icon.styled';

const Icon: React.FC<S.IconProps> = ({ weight, children }) => {
    return (
        <S.Icon weight={weight}>{children}</S.Icon>
    );
}

export default Icon;