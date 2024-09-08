import React from "react";
import * as S from './card.styled';
// import Calendario from '../../assets/Calendar-amico 2.png';

const CardService:React.FC<S.Props> = ({imgSrc, titulo}) => 
(
    <S.Card>
        <S.CardImg 
            src={imgSrc}
            alt={`card da categoria: ${titulo}`}
        />
        <S.CardBody>
            <S.CardBodyTitle>
                {titulo}
            </S.CardBodyTitle>
        </S.CardBody>
    </S.Card>

);


export default CardService;
