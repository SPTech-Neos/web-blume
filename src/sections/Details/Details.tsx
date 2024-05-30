import React from "react";
import * as S from './details.styled';
import Logo from "../../components/Images/Logo/Logo";
import { PrimaryButton as Button } from "../../components/Buttons/DefaultButton/DefaultButton";
import { CaretLeft } from "phosphor-react";


const Details: React.FC<S.detailsProps> = () => {
    return (
        <S.DetailsSection>

            <S.DetaisHeader>
            <S.NavBody>

                <S.NavItem>
                    <S.NavLink  to= '/feed' className={({isActive})=>isActive? "nav-link active" : "nav-link"}>
                        <CaretLeft size={22} />
                    </S.NavLink>
                </S.NavItem>

            </S.NavBody>
            <Logo />

            </S.DetaisHeader>

            <S.DetailsContainer direction="column">

                <S.DetailsProfile>

                    <S.DetailsImgContainer theme="client">
                        <S.DetailsImg />
                        <S.RatingStar weight="fill"/>
                        <span>120 Avaliações</span>
                    </S.DetailsImgContainer>

                    <S.DetailsInfoContainer>
                        <S.NameInfoContainer>
                            <h1>Nome do serviço/produto</h1>

                            <S.BadgeContainer>
                                <S.BadgeService>Deixar</S.BadgeService>
                                <S.BadgeService>Dinamico</S.BadgeService>
                            </S.BadgeContainer>

                            <S.ProfileInfoContainer>
                                <S.ProfileImg />
                                <h3>Nome do estabelecimento</h3>
                            </S.ProfileInfoContainer>

                            <S.PrecificacaoContainer>
                                <h1>R$ XXXXXX</h1>
                                <Button width="180px" size="md">Comprar</Button>
                            </S.PrecificacaoContainer>
                        </S.NameInfoContainer>
                    </S.DetailsInfoContainer>
                </S.DetailsProfile>

                <S.DetailsDesc>
                    <S.DescContainer>
                        <h1>
                            Descrição:
                        </h1>
                        <S.ContainerDescText>
                            <span>
                            Descrição do item. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod  tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim  veniam, quis nostrud.
                            </span>
                        </S.ContainerDescText>
                    </S.DescContainer>
                    <S.CardContainer>
                        <S.CardDesc titulo="teste" texto="aaaaaaa">
                            <S.ProfileImg />
                        </S.CardDesc>
                    </S.CardContainer>
                </S.DetailsDesc>
                
            </S.DetailsContainer>
        </S.DetailsSection>
    );
} 

export default Details;