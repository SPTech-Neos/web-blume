import React from "react";
import { NavLink as RouterNavLink } from 'react-router-dom';


import * as S from './navbar.styled';

import Container from '../Container/Container';
import BtnEntrar from "../Button/Button";
import Logo from '../Logo/Logo';


const Navbar: React.FC = () => {
    return (
        <S.NavContainer>
            <Container className="container">
                <S.Row>
                    <RouterNavLink to="/">
                        <Logo />
                    </RouterNavLink>

                    <S.NavList>
                        <S.NavItem>
                            <RouterNavLink to="/" className={({isActive})=>isActive? "nav-link active" : "nav-link"}>
                                Início
                            </RouterNavLink>
                        </S.NavItem>
                        <S.NavItem>
                            <RouterNavLink to="/about" className={({isActive})=>isActive? "nav-link active" : "nav-link"}>
                                O que é
                            </RouterNavLink>
                        </S.NavItem>
                        <S.NavItem className="nav-item">
                            <RouterNavLink to="/services" className={({isActive})=>isActive? "nav-link active" : "nav-link"}>
                                Serviços
                            </RouterNavLink>
                        </S.NavItem>
                    </S.NavList>

                </S.Row>
                
                <S.NavLogin>
                    <BtnEntrar />   
                </S.NavLogin>
            </Container>
        </S.NavContainer>
    );
};

export default Navbar;
