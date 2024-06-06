import React from "react";
import * as S from './services.styled';

import Sidebar from "../../components/Sidebar/Sidebar";
import HeaderProfile from "../../components/Headers/HeaderProfile/HeaderProfile";
import EstablishmentServices from "../../sections/EstablishmentServices/EstablishmentServices";

import { AuthContextProvider as AuthContextProviderEmployee } from "../../contexts/User/AuthContextProviderEmployee";
// import { AuthContextProvider as AuthContextProviderClient } from "../../contexts/User/AuthContextProviderClient";

const Services: React.FC = () => {
    return(
        <AuthContextProviderEmployee>
            <S.ServicesPage>
                <Sidebar />
                <HeaderProfile />
                <EstablishmentServices/>
            </S.ServicesPage>
        </AuthContextProviderEmployee>
    );
}

export default Services;
