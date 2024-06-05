import React from "react";
import * as S from './products.styled';

import Sidebar from "../../components/Sidebar/Sidebar";
import HeaderProfile from "../../components/Headers/HeaderProfile/HeaderProfile";
import EstablishmentProducts from "../../sections/EstablishmentProducts/EstablishmentProducts";


const Products: React.FC = () => {
    return(
        <S.ProductsPage>
            <Sidebar />
            <HeaderProfile />
            <EstablishmentProducts/>
        </S.ProductsPage>
    );
}

export default Products;


