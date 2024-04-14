import React from "react";
import { MagnifyingGlass } from "@phosphor-icons/react";

import * as S from './searchbar.styled';

type Props = {
    placeholderText: string;
    onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void | null;
    onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void | null;
}

const Searchbar: React.FC<Props> = ({placeholderText, onChange, onClick}) => (
	<S.InputContainer onChange={onChange}>
        <MagnifyingGlass size={32} className="icon-search-bar"/>
        <S.InputSearch type="text" placeholder={placeholderText}/>
        <S.ButtonSearchBar onClick={onClick}>Encontrar</S.ButtonSearchBar>
    </S.InputContainer>
);

export default Searchbar;