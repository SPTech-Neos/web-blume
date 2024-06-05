import React from "react";
import * as S from './establishmentProducts.styled'

import Searchbar from "../../components/Searchbar/Searchbar";
import { CardProduto } from "../../components/Cards/CardPedido/CardPedido";

const EstablishmentProducts:React.FC = () => {
    return(
        <S.ProductsSection>
            <S.ProductsContainer>
                <h1> PRODUTOS </h1>
                <Searchbar placeholderText="Nome do produto..."/>
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