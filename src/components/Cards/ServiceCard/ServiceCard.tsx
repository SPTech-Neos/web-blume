import React from "react";
import * as S from "./serviceCard.styed";


const ServiceCard: React.FC = () => {
    return (
        <S.CardBody>
            <S.CardImg>
                <S.ImgService></S.ImgService>
            </S.CardImg>
            <S.CardInfo>
                <span>
                    Nome
                </span>
                <span>
                    R$ 14,99
                </span>
            </S.CardInfo>
        </S.CardBody>
    );
}

export default ServiceCard;