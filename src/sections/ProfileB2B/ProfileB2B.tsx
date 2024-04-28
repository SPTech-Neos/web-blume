import React from "react";

import * as S from './profileB2B.styled';

import Profile from "../../components/Profile/Profile";
import Tab from "../../components/Tab/Tab";

const ProfileB2B: React.FC = () => (

    <S.ProfileB2BSection> 
        <S.ContainerProfile direction="column">
            <Profile />
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
    

);              

export default ProfileB2B;