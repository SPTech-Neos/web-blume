import React, { useEffect } from "react";
import Cookies from 'js-cookie';

// import { AuthContextEmployee } from "../../contexts/User/AuthContextProviderEmployee";
import { EmployeeResponseDto } from "../../utils/employee.types";

import * as S from './profileB2B.styled';
import Profile from "../../components/Profile/Profile";
import Tab from "../../components/Tab/Tab";

const ProfileB2B: React.FC = () => {
    const tokenFromCookie = Cookies.get('employeeToken');
    console.log(tokenFromCookie)
    const token = tokenFromCookie ? JSON.parse(tokenFromCookie) : null;

    useEffect(() => {
        // Exemplo de uso do token após o login
        if (token) {
            console.log("Token de autenticação:", token);
        }
    }, [token]);

    return (
        token ? (
            <S.ProfileB2BSection>
                <S.ContainerProfile direction="column">
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
                            <S.ButtonDelete width="180px" color="var(--color-status-error)">
                                Excluir
                            </S.ButtonDelete>
                            <S.ButtonUpdate width="180px" color="var(--color-status-warning)">
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
