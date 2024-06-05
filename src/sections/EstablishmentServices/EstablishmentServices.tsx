import React from "react";

import * as S from './establishmentServices.styled'

import Searchbar from "../../components/Searchbar/Searchbar";
import { CardServico } from "../../components/Cards/CardPedido/CardPedido";

const EstablishmentServices:React.FC = () => {
    return(
        <S.ServicesSection>
        <S.ServicesContainer>
            <h1> SERVIÇOS </h1>
            <Searchbar placeholderText="Nome do produto..."/>
            <S.ServicesBody>
                <CardServico 
                    service="Servico1"
                    status="Em Andamento"
                    imgUrl=""
                    preco={90}
                    employee="Kevin"
                />
            </S.ServicesBody>
        </S.ServicesContainer>
    </S.ServicesSection>
    );

}

export default EstablishmentServices;