import React, {useContext, useEffect} from "react";

import * as S from './establishmentServices.styled'

import Searchbar from "../../components/Searchbar/Searchbar";
import { CardServico } from "../../components/Cards/CardPedido/CardPedido";
import CreateModal from "../../components/Modals/CreateModal/CreateModal";

import { AuthContextEmployee } from "../../contexts/User/AuthContextProviderEmployee";
import Cookies from "js-cookie";


const EstablishmentServices:React.FC = () => {

    const handleAddService = () => {
        const modal = document.getElementById("modal-adicionar");

        modal?.classList.add("active");
    }

    
    const { isAuthenticated: isAuthenticatedEmployee } = useContext(AuthContextEmployee);
    const tokenFromCookie = Cookies.get('employeeInfo');
    const token = tokenFromCookie ? JSON.parse(tokenFromCookie) : null;
  
    useEffect(() => {
        if (tokenFromCookie) {
            console.log("Token de autenticação:", tokenFromCookie);
            console.log("LOGADO: " + isAuthenticatedEmployee);
        }
    }, [tokenFromCookie, isAuthenticatedEmployee]);

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
                        employee={token.name}
                    />
                </S.ServicesBody>
            </S.ServicesContainer>
    </S.ServicesSection>
    );

}

export default EstablishmentServices;