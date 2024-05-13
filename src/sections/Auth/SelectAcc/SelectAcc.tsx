// TO REDO
import React from "react";
import * as S from './selectAcc.styled';
import { c } from "../../../styles/Colors";
import ColorContainer from "../../../components/Containers/ColorContainer/ColorContainer";

const SelectAcc: React.FC<S.SelectAccProps> = ({ intention }) => {
    return (
        <>
            <ColorContainer bgColor={c.gradientDefault}>
                Teste
            </ColorContainer>
        </>
    );
}

export default SelectAcc;