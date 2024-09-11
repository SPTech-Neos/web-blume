import React, { useContext, useEffect } from "react";

import { useLocation } from "react-router-dom";
import Cookies from "js-cookie";
import * as S from "./sidebar.styled";

import {
  Bell,
  GearSix,
  House,
  MagnifyingGlass,
  Receipt,
  UserCircle,
  Cube,
  Article,
  UserList,
} from "@phosphor-icons/react";
import { CalendarPlus, SignOut } from "phosphor-react";

import { AuthContextEmployee } from "../../contexts/User/AuthContextProviderEmployee";
import { AuthContextClient } from "../../contexts/User/AuthContextProviderClient";
import { AuthContextEstablishment } from "../../contexts/Establishment/AuthContextProviderEstablishment";
import { EstablishmentResponseDto } from "../../utils/Establishment/establishment.types";

import navIcon from "../../assets/nav-icon.svg";

const Sidebar: React.FC = () => {
  const { handleLogoutEmployee, isAuthenticated: isAuthenticatedEmployee } =
    useContext(AuthContextEmployee);
  const { handleLogoutClient, isAuthenticated: isAuthenticatedClient } =
    useContext(AuthContextClient);
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
  } else if (isAuthenticatedClient) {
    theme = "client";
    handleLogout = handleLogoutClient;
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

  return (
    <S.SidebarWrapper theme={theme}>
      <S.Container direction="column">
        <S.NavList>
          <S.NavItem>
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
              <S.NavIcon src={navIcon} />
            </S.NavLink>
          </S.NavItem>
        </S.NavList>

        <S.NavList>
          <>
            <S.NavItem>
              <S.NavLink
                to={`/dashboard`}
                className={({ isActive }) =>
                  isActive ? "nav-link active" : "nav-link"
                }
              >
                <House weight="bold" size={28} />
              </S.NavLink>
            </S.NavItem>
            <S.NavItem>
              <S.NavLink
                to="/employees"
                className={({ isActive }) =>
                  isActive ? "nav-link active" : "nav-link"
                }
              >
                <UserList weight="bold" size={28} />
              </S.NavLink>
            </S.NavItem>
            <S.NavItem>
              <S.NavLink
                to="/products"
                className={({ isActive }) =>
                  isActive ? "nav-link active" : "nav-link"
                }
              >
                <Cube weight="bold" size={28} />
              </S.NavLink>
            </S.NavItem>

            <S.NavItem>
              <S.NavLink
                to="/orders"
                className={({ isActive }) =>
                  isActive ? "nav-link active" : "nav-link"
                }
              >
                <Article weight="bold" size={28} />
              </S.NavLink>
            </S.NavItem>
            <S.NavItem>
              <S.NavLink
                to="/orders"
                className={({ isActive }) =>
                  isActive ? "nav-link active" : "nav-link"
                }
              >
                <Receipt weight="bold" size={28} />
              </S.NavLink>
            </S.NavItem>
          </>
        </S.NavList>

        <S.NavList>
          <S.NavItem>
            <S.NavLink
              to="/"
              className={({ isActive }) =>
                isActive ? "nav-link active" : "nav-link"
              }
            >
              <CalendarPlus weight="bold" size={28} />
            </S.NavLink>
          </S.NavItem>
          <S.NavItem>
            <S.NavLink
              to={"/" + theme}
              className={({ isActive }) =>
                isActive ? "nav-link active " : "nav-link"
              }
            >
              <UserCircle weight="bold" size={28} />
            </S.NavLink>
          </S.NavItem>
          {/* <S.NavItem>
            <S.NavLink
              to={"/"}
              className={({ isActive }) =>
                isActive ? "nav-link active" : "nav-link"
              }
              onClick={() => handleLogout()}
            >
              <SignOut weight="bold" size={28} />
            </S.NavLink>
          </S.NavItem> */}
        </S.NavList>
      </S.Container>
    </S.SidebarWrapper>
  );
};

export default Sidebar;
