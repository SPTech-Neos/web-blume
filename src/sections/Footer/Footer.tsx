import React from "react";
import * as S from './footer.styled';

import Subtitle from "../../components/Subtitle/Subtitle";
import PrimaryButton from "../../components/Button/Button";

import logoBlumeFooter from "../../assets/blume-footer.svg";
import logoNeosFooter from "../../assets/neos-footer.svg"
import googlePlayBadge from "../../assets/google-play-badge.svg"
import Icon from "../../components/Icon/Icon";
import { GithubLogo, InstagramLogo } from "@phosphor-icons/react";

const Footer: React.FC<S.FooterProps> = () => {
    return (
        <S.Footer>
            <S.Container direction="column">
                <S.Row className="h-75">
                    <S.ColGroup>
                        <S.Col className="align-center mr-100">
                            <img 
                                className="logo-blume-footer"
                                src={logoBlumeFooter}
                                alt={`Imagem svg com detalhes de circulos no fundo`}
                            />
                        </S.Col>
                        <S.Col>
                            <Subtitle size="lg" weight={500}>Sobre</Subtitle>

                            <S.NavList>
                                <S.NavItem>
                                    <S.NavLink to="/" className={({isActive})=>isActive? "nav-link active" : "nav-link"}>
                                        Início
                                    </S.NavLink>
                                </S.NavItem>
                                <S.NavItem>
                                    <S.NavLink to="/about" className={({isActive})=>isActive? "nav-link active" : "nav-link"}>
                                        O que é
                                    </S.NavLink>
                                </S.NavItem>
                                <S.NavItem className="nav-item">
                                    <S.NavLink to="/services" className={({isActive})=>isActive? "nav-link active" : "nav-link"}>
                                        Serviços
                                    </S.NavLink>
                                </S.NavItem>
                            </S.NavList>
                        </S.Col>
                        <S.Col>
                            <Subtitle size="lg" weight={500}>Sistema</Subtitle>

                            <S.NavList>
                                <S.NavItem>
                                    <S.NavLink to="/" className={({isActive})=>isActive? "nav-link active" : "nav-link"}>
                                        Feed
                                    </S.NavLink>
                                </S.NavItem>
                                <S.NavItem>
                                    <S.NavLink to="/about" className={({isActive})=>isActive? "nav-link active" : "nav-link"}>
                                        Perfil
                                    </S.NavLink>
                                </S.NavItem>
                                <S.NavItem className="nav-item">
                                    <S.NavLink to="/services" className={({isActive})=>isActive? "nav-link active" : "nav-link"}>
                                        Pesquisar
                                    </S.NavLink>
                                </S.NavItem>
                                <S.NavItem className="nav-item">
                                    <S.NavLink to="/services" className={({isActive})=>isActive? "nav-link active" : "nav-link"}>
                                        Carrinho
                                    </S.NavLink>
                                </S.NavItem>
                            </S.NavList>
                        </S.Col>
                    </S.ColGroup>
                    

                    <S.Col className="align-center">
                        <PrimaryButton size={"md"} width={"190px"}>Entrar</PrimaryButton>
                        <img 
                        className="google play badge"
                        src={googlePlayBadge}
                        alt={`Imagem svg com detalhes de circulos no fundo`}
                    />
                    </S.Col>
                </S.Row>

                <S.Row className="h-25">
                    <img 
                        className="logo-neos-footer"
                        src={logoNeosFooter}
                        alt={`Imagem svg com detalhes de circulos no fundo`}
                    />

                    <S.Row>
                        <Icon>
                            <GithubLogo size={32} />
                        </Icon>
                        <Icon>
                            <InstagramLogo size={32} />
                        </Icon>
                    </S.Row>
                </S.Row>
            </S.Container>
        </S.Footer>
    );
}

export default Footer;