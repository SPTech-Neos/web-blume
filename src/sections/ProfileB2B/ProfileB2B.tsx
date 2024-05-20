import React, { useContext, useEffect } from "react";
import Cookies from 'js-cookie';
import * as S from './profileB2B.styled';

import { NavLink } from 'react-router-dom';

import { EmployeeResponseDto } from "../../utils/Employee/employee.types";

import HeaderProfile from "../../components/Headers/HeaderProfile/HeaderProfile";
import Profile from "../../components/Profile/Profile";
import Tab from "../../components/Tab/Tab";
import EditModal from "../Modals/EditModal/EditModal";

import { AuthContextClient } from "../../contexts/User/AuthContextProviderClient";
import { AuthContextEmployee } from "../../contexts/User/AuthContextProviderEmployee";

import { colors as c } from '../../styles/Colors';


const ProfileB2B: React.FC = () => {

    const { handleLogoutEmployee, isAuthenticated: isAuthenticatedEmployee } = useContext(AuthContextEmployee);
    const { isAuthenticated: isAuthenticatedClient } = useContext(AuthContextClient);
  

    const tokenFromCookie = Cookies.get('employeeInfo');
    const token = tokenFromCookie ? JSON.parse(tokenFromCookie) : null;

    useEffect(() => {
        if (tokenFromCookie) {
            console.log("Token de autenticação:", tokenFromCookie);
            console.log("LOGADO: " + isAuthenticatedEmployee);
        }
    }, [tokenFromCookie, isAuthenticatedEmployee]);

    const showModal = () => {
        const editModal = document.getElementById("editModal");
        editModal?.classList.add("active");
        console.log(editModal);
    };


    if(isAuthenticatedClient){
        return (
            <S.ProfileB2BSection>
                <h1>OI tiago funcionou o login</h1>
            </S.ProfileB2BSection>

        );
    }else if(isAuthenticatedEmployee){
        return (
            token ? (
                <S.ProfileB2BSection>
                    <HeaderProfile />
                    <S.ContainerProfile direction="column">
    
    
                        <EditModal id="editModal"/>
    
                        <Profile tipoperfil="B2B" username={(token as EmployeeResponseDto).name} />
                        <Tab />
                        <S.ContainerAtencao>
                            <S.ContainerTitle>
                                <S.TracoAtencao />
                                <S.TitleAtencao>
                                    Área de atenção
                                </S.TitleAtencao>
                                <S.TracoAtencao />
                            </S.ContainerTitle>
                            <S.ContainerAtencaoButtons>
                                    <NavLink to={"/"} color={c.gray100}>
                                        <S.ButtonDelete width="180px" color={c.error} onClick={() => handleLogoutEmployee()}>
                                                Excluir
                                        </S.ButtonDelete>
                                    </NavLink>
                                <S.ButtonUpdate width="180px" color={c.warning} onClick={showModal}>
                                    Editar
                                </S.ButtonUpdate>
                            </S.ContainerAtencaoButtons>
                        </S.ContainerAtencao>
                    </S.ContainerProfile>
                </ S.ProfileB2BSection>
            ) : null
        );
    }else{
        return (<h1>AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA</h1>)
    }

    
};

export default ProfileB2B;
