import React from "react";
import * as S from './establishmentProducts.styled'

import Searchbar from "../../components/Searchbar/Searchbar";
import { CardProduto } from "../../components/Cards/CardPedido/CardPedido";
import CreateModal from "../../components/Modals/CreateModal/CreateModal";

const EstablishmentProducts:React.FC = () => {

    const handleAddProducts = () => {
        const modal = document.getElementById("modal-adicionar");

        modal?.classList.add("active");
    }

    return(
        <S.ProductsSection>
            <CreateModal id="modal-adicionar" titulo="Produto" />

            <S.ProductsContainer>
                <h1> PRODUTOS </h1>
                <Searchbar placeholderText="Nome do produto..."/>
                <S.ProductsButtons>
                    <h2 onClick={handleAddProducts}>ADICIONAR PRODUTOS</h2>  
                </S.ProductsButtons>
                <S.ProductsBody>
                    <CardProduto 
                        service="Produto1"
                        status="Em Andamento"
                        preco={90}
                    />
                </S.ProductsBody>
            </S.ProductsContainer>
        </S.ProductsSection>
    )
}

export default EstablishmentProducts;