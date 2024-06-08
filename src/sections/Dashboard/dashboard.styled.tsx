import styled from "styled-components";
import { NavLink as RouterNavLink } from "react-router-dom";
import { colors as c, Themes } from "../../styles/Colors";
import Container from "../../components/Containers/Container/Container";
import Rating from "../../components/Rating/Rating";
import { propsRating } from "../../components/Rating/rating.styled";
import Badge from "../../components/Badges/AvaliationBadge/AvaliationBadge";
import Card from "../../components/Cards/Card/Card";

export interface detailsProps {
  theme?: "client" | "establishmente" | "employee";
}

function getTheme(theme: string) {
  return theme === "client" ? Themes.client : Themes.establishment;
}

export const DetailsSection = styled.section`
  width: 100%;
  height: 100vh;
  font-family: "Poppins";
  display: flex;
  padding-left: 20px;
  align-items: center;
  flex-direction: column;

  & .active-modal {
    display: flex;
  }

  & .active-schedule {
    display: flex;
  }
`;

export const DetaisHeader = styled.div`
  width: 80%;
  height: 10%;
  display: flex;
  justify-content: start;
  align-items: center;
  gap: 43%;
`;

export const NavBody = styled.div`
  width: 30px;
  height: 30px;
  border-radius: 100%;
  background-color: ${c.green300};
  padding-top: 10px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const NavItem = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  font-weight: 300;
  font-size: 20px;
`;

export const NavLink = styled(RouterNavLink)`
  color: white;
`;

export const DetailsContainer = styled(Container)`
  max-width: 85%;
  height: 90%;
  display: flex;
  padding-top: 10px;
`;

export const DetailsProfile = styled.div`
  width: 100%;
  height: 50%;
  display: flex;
  flex-direction: row;
  justify-content: end;
  gap: 5%;
`;

export const DashBox = styled.div`
  width: 25vw;
  max-width: 300px;
  height: 30vh;
  border: 2px solid ${c.green300};
  background: #d2f7d6;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-evenly;
  padding: 10px;
`;

export const DashTitle = styled.h3`
  font-size: 20px;
`;

export const DashData = styled.h1`
  font-size: 32px;
`;
