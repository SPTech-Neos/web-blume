import React, { MouseEventHandler, useState } from "react";

import * as S from "./navbar.styled";

import Container from "../Containers/Container/Container";
import Logo from "../Images/Logo/Logo";
import Link from "../Texts/Link/Link";
import { Button } from "../Buttons/Button/Button";

const Navbar: React.FC = () => {
  const [isActive1, setIsActive1] = useState(false);
  const [isActive2, setIsActive2] = useState(false);
  const [isActive3, setIsActive3] = useState(false);

  const handleNavLink = (isActiveIndex: number) => {
    if (isActiveIndex == 1) {
      setIsActive1(true);
      setIsActive2(false);
      setIsActive3(false);
    } else if (isActiveIndex == 2) {
      setIsActive1(false);
      setIsActive2(true);
      setIsActive3(false);
    } else {
      setIsActive1(false);
      setIsActive2(false);
      setIsActive3(true);
    }
  };

  return (
    <S.NavContainer id="navbar">
      <Container direction="row">
        <S.Row>
          <S.NavLink href="#">
            <Logo />
          </S.NavLink>

          <S.NavList>
            <S.NavItem>
              <S.NavLink
                href="#"
                onMouseEnter={() => handleNavLink(1)}
                className={isActive1 ? "nav-link active" : "nav-link"}
              >
                Início
              </S.NavLink>
            </S.NavItem>
            <S.NavItem>
              <S.NavLink
                href="#about"
                onMouseEnter={() => handleNavLink(2)}
                className={isActive2 ? "nav-link active" : "nav-link"}
              >
                O que é
              </S.NavLink>
            </S.NavItem>
            <S.NavItem className="nav-item">
              <S.NavLink
                href="#services"
                onMouseEnter={() => handleNavLink(3)}
                className={isActive3 ? "nav-link active" : "nav-link"}
              >
                Serviços
              </S.NavLink>
            </S.NavItem>
          </S.NavList>
        </S.Row>

        <S.NavLogin>
          <Link href="/auth?mode=login">
            <Button size="md">Entrar</Button>
          </Link>
        </S.NavLogin>
      </Container>
    </S.NavContainer>
  );
};

export default Navbar;
