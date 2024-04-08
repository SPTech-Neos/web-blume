import React from "react";

import * as S from './Link.styled';

const Link: React.FC<S.LinkProps> = ({ children, href }) => {
    return (
        <S.Link href={href}>
            {children}
        </S.Link>
    );
}

export default Link;