import React, { useContext, useEffect, useState } from "react";

import { useLocation } from "react-router-dom";
import Cookies from "js-cookie";
import * as S from "./sidebar.styled";

import { colors as c } from "../../styles/Colors";

import {
  // Bell,
  // GearSix,
  // House,
  // MagnifyingGlass,
  Receipt,
  UserCircle,
  Cube,
  Article,
  UserList,
} from "@phosphor-icons/react";
import {
  // CalendarPlus,
  Gauge,
  SignOut,
} from "phosphor-react";

import { AuthContextEmployee } from "../../contexts/User/AuthContextProviderEmployee";
// import { AuthContextClient } from "../../contexts/User/AuthContextProviderClient";
import { AuthContextEstablishment } from "../../contexts/Establishment/AuthContextProviderEstablishment";
import { EstablishmentResponseDto } from "../../utils/Establishment/establishment.types";

import navIcon from "../../assets/nav-icon.svg";

const Sidebar: React.FC = () => {
  const { handleLogoutEmployee, isAuthenticated: isAuthenticatedEmployee } =
    useContext(AuthContextEmployee);
  // const { handleLogoutClient, isAuthenticated: isAuthenticatedClient } =
  //   useContext(AuthContextClient);
  const {
    handleLogoutEstablishment,
    isAuthenticated: isAuthenticatedEstablishment,
  } = useContext(AuthContextEstablishment);

  let handleLogout: () => void;
  let theme: string = "";

  if (isAuthenticatedEstablishment) {
    theme = "employee";
    handleLogout = handleLogoutEstablishment;
  } else if (isAuthenticatedEmployee) {
    theme = "employee";
    handleLogout = handleLogoutEmployee;
  }

  const location = useLocation();

  const iconeAtual = document.getElementsByTagName("a");
  useEffect(() => {
    for (let i = 0; i < iconeAtual.length; i++) {
      if (iconeAtual[i].pathname == location.pathname) {
        iconeAtual[i].classList.add("active-location");
      }
    }
  });

  const CookieEstablishmentData = Cookies.get("establishmentInfo");
  const establishmentData = CookieEstablishmentData
    ? (JSON.parse(CookieEstablishmentData) as EstablishmentResponseDto)
    : null;

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
    <S.SidebarWrapper theme={theme}>
      <S.Container direction="column">
        <S.NavList>
          <S.NavItem>
            <S.NavLink
              href={
                theme == "client"
                  ? "/feed"
                  : `/establishment/${establishmentData?.id}`
              }
              className="nav-link"
            >
              <S.NavIcon src={navIcon} />
            </S.NavLink>
          </S.NavItem>
        </S.NavList>

        <S.NavList>
          <>
            {/* <S.NavItem>
              <S.NavLink
                to={
                  theme == "client"
                    ? "/feed"
                    : `/establishment/${establishmentData?.id}`
                }
                className={({ isActive }) =>
                  isActive ? "nav-link active" : "nav-link"
                }
              >
                <House weight="bold" size={28} />
              </S.NavLink>
            </S.NavItem> */}
            <S.NavItem>
              <S.NavLink
                href={`/dashboard`}
                onMouseEnter={() => handleNavLink(1)}
                className={isActive1 ? "nav-link active" : "nav-link"}
              >
                <Gauge weight="bold" size={28} />
              </S.NavLink>
            </S.NavItem>

            <S.NavItem>
              <S.NavLink
                // to="/employees"
                className="nav-link"
              >
                <UserList color={c.gray200} weight="bold" size={28} />
              </S.NavLink>
            </S.NavItem>
            <S.NavItem>
              <S.NavLink
                // to="/products"
                className="nav-link"
              >
                <Cube color={c.gray200} weight="bold" size={28} />
              </S.NavLink>
            </S.NavItem>

            <S.NavItem>
              <S.NavLink
                // to="/orders"
                className="nav-link"
              >
                <Article color={c.gray200} weight="bold" size={28} />
              </S.NavLink>
            </S.NavItem>
            <S.NavItem>
              <S.NavLink
                // to="/orders"
                className="nav-link"
              >
                <Receipt color={c.gray200} weight="bold" size={28} />
              </S.NavLink>
            </S.NavItem>
          </>
        </S.NavList>

        <S.NavList>
          <S.NavItem>
            {/* <S.NavLink
              to="/"
              className={({ isActive }) =>
                isActive ? "nav-link active" : "nav-link"
              }
            >
              <CalendarPlus weight="bold" size={28} />
            </S.NavLink> */}
          </S.NavItem>
          <S.NavItem>
            <S.NavLink
              href={"/" + theme}
              onMouseEnter={() => handleNavLink(2)}
              className={isActive2 ? "nav-link active" : "nav-link"}
            >
              <UserCircle weight="bold" size={28} />
            </S.NavLink>
          </S.NavItem>
          <S.NavItem>
            <S.NavLink
              href={"/"}
              onMouseEnter={() => handleNavLink(3)}
              className={isActive3 ? "nav-link active" : "nav-link"}
              onClick={() => handleLogout()}
            >
              <SignOut weight="bold" size={28} />
            </S.NavLink>
          </S.NavItem>
        </S.NavList>
      </S.Container>
    </S.SidebarWrapper>
  );
};

export default Sidebar;
