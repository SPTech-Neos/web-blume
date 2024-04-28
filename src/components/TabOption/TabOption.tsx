import React from "react";

import * as S from  './tabOption.styled';

type Props = {
    id?: string;
    titulo: string;
    onClick?: (event: React.MouseEvent<HTMLDivElement>) => void | null;  
}

const TabOption: React.FC<Props> = ({ id, titulo, onClick}) => (
    <S.TabOption id={id} onClick={onClick}>
        {titulo}
    </S.TabOption>
);

export default TabOption;