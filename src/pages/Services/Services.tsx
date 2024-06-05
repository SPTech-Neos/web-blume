import React from "react";
import * as S from './services.styled';

import Sidebar from "../../components/Sidebar/Sidebar";
import HeaderProfile from "../../components/Headers/HeaderProfile/HeaderProfile";
import EstablishmentServices from "../../sections/EstablishmentServices/EstablishmentServices";


const Services: React.FC = () => {
    return(
        <S.ServicesPage>
            <Sidebar />
            <HeaderProfile />
            <EstablishmentServices/>
        </S.ServicesPage>
    );
}

export default Services;
