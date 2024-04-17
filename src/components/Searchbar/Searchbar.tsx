import React from "react";

import { useMediaQuery } from 'react-responsive';
import { device } from "../../styles/breakpoints.styled";

import * as S from './searchbar.styled';

import { MagnifyingGlass } from "@phosphor-icons/react";

type Props = {
    placeholderText: string;
    onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void | null;
    onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void | null;
}

const Searchbar: React.FC<Props> = ({placeholderText, onChange, onClick}) => {
    const isTabletOrMobile = useMediaQuery({ query: device.tablet });

    return (
        <S.InputContainer onChange={onChange}>

            {isTabletOrMobile ? null : <MagnifyingGlass size={32} className="icon-search-bar"/> }
            <S.InputSearch type="text" placeholder={placeholderText}/>
            {isTabletOrMobile ? 
                <S.MagnifyingGlass size={24} className="icon-search-bar"/> : 
                <S.ButtonSearchBar onClick={onClick}>Encontrar</S.ButtonSearchBar>
            }
        </S.InputContainer>
    )
};

export default Searchbar;