import React from "react";
import * as S from  './tab.styled';

import TabOption from "../TabOption/TabOption";

const handleClick = (event: React.MouseEvent<HTMLDivElement>) => {
    console.log(event.target.id);
}

const Tab: React.FC = () => (
    <S.ContainerTab direction='column'>
        <S.TabHeader>
            <TabOption id="servico" titulo="Serviços" onClick={handleClick} />

            <TabOption id="produto" titulo="Produtos" onClick={handleClick} />

            <TabOption id="sobre" titulo="Sobre" onClick={handleClick} />
        </S.TabHeader>
        <S.TabBody>
            
        </S.TabBody>
    </S.ContainerTab>
);

export default Tab;