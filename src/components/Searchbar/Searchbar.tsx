import React from "react";
import { MagnifyingGlass } from "@phosphor-icons/react";

import * as S from './searchbar.styled';

type Props = {
    placeholderText: string;
}

const Searchbar: React.FC<Props> = ({placeholderText}) => (
	<S.InputContainer>
        <MagnifyingGlass size={32} className="icon-search-bar"/>
        <S.InputSearch type="text" placeholder={placeholderText}/>
        <S.ButtonSearchBar>Encontrar</S.ButtonSearchBar>
    </S.InputContainer>
);

export default Searchbar;