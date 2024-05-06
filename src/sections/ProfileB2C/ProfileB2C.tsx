import React from "react";
import * as S from './profileB2C.styled';
import Logo from '../../components/Images/Logo/Logo';
import { PrimaryButton } from "../../components/Button/Button";
import Profile from "../../components/Profile/Profile";

const ProfileB2C: React.FC = () => (
    <S.ContainerProfile direction="column">
        <S.HeaderProfile>
            <Logo />
            <PrimaryButton color="" width="180px">ENTRAR</PrimaryButton>
        </S.HeaderProfile>
            
        <S.ProfileContainer>
            <h1>PERFIL</h1>
            <Profile />
        </S.ProfileContainer>
        <S.InfoContainer>
            <S.Infos>
                <S.LabelInfo>
                    E-mail
                </S.LabelInfo>
                <S.TextInfo>
                    email@exemplo.com
                </S.TextInfo>

                <S.LabelInfo>
                    Endereço
                </S.LabelInfo>
                <S.TextInfo>
                    Rua Coração de Maçã, 211, apt 52C
                </S.TextInfo>

                <S.LabelInfo>
                    CEP
                </S.LabelInfo>
                <S.TextInfo>
                    08474-230
                </S.TextInfo>
            </S.Infos>
        </S.InfoContainer>
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
);

export default ProfileB2C;