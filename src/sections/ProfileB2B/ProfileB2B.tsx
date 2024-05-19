import React, { useContext, useEffect } from "react";
import Cookies from 'js-cookie';

import { NavLink } from 'react-router-dom';

// import { AuthContextEmployee } from "../../contexts/User/AuthContextProviderEmployee";
import { EmployeeResponseDto } from "../../utils/Employee/employee.types";

import * as S from './profileB2B.styled';
import Profile from "../../components/Profile/Profile";
import Tab from "../../components/Tab/Tab";
import EditModal from "../Modals/EditModal/EditModal";
import { AuthContextEmployee } from "../../contexts/User/AuthContextProviderEmployee";
import { colors as c } from '../../styles/Colors';

const ProfileB2B: React.FC = () => {
    const { handleLogoutEmployee } = useContext(AuthContextEmployee);

    const tokenFromCookie = Cookies.get('employeeToken'); 
    const token = tokenFromCookie ? JSON.parse(tokenFromCookie) : null;

    useEffect(() => {
        if (tokenFromCookie) {
            console.log("Token de autenticação:", tokenFromCookie);
        }
    }, [tokenFromCookie]);

    const showModal = () => {
        const editModal = document.getElementById("editModal");
        editModal?.classList.add("active");
        console.log(editModal);
    };

    return (
        token ? (
            <S.ProfileB2BSection>
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
};

export default ProfileB2B;
