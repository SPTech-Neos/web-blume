import React from "react";

import * as S from './establishmentServices.styled'

import Searchbar from "../../components/Searchbar/Searchbar";
import { CardServico } from "../../components/Cards/CardPedido/CardPedido";
import CreateModal from "../../components/Modals/CreateModal/CreateModal";

const EstablishmentServices:React.FC = () => {

    const handleAddService = () => {
        const modal = document.getElementById("modal-adicionar");

        modal?.classList.add("active");
    }

    return(
        <S.ServicesSection>
            <CreateModal id="modal-adicionar" titulo="Serviço"/>
            <S.ServicesContainer>
                <h1> SERVIÇOS </h1>
                <Searchbar placeholderText="Nome do produto..."/>
                <S.ServicesButtons>
                    <h2 onClick={handleAddService}>ADICIONAR SERVIÇO</h2>  
                </S.ServicesButtons>
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