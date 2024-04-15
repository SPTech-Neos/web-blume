import React from "react";

import * as S from './navbar.styled';

import Container from '../Container/Container';
import { PrimaryButton } from "../Button/Button";
import Logo from '../Logo/Logo';
import Link from "../Link/Link";


const Navbar: React.FC = () => {
    return (
        <S.NavContainer id="navbar">
            <Container direction="row">
                <S.Row>
                    <S.NavLink to="/">
                        <Logo />
                    </S.NavLink>

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

                </S.Row>
                
                <S.NavLogin>
                    <Link href="/auth?mode=login">
                        <PrimaryButton width="160px" size="md">Entrar</PrimaryButton>
                    </Link>
                </S.NavLogin>
            </Container>
        </S.NavContainer>
    );
};

export default Navbar;
