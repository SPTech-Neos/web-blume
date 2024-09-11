import styled from "styled-components";
import { NavLink as RouterNavLink } from "react-router-dom";
import { colors as c, Themes } from "../../styles/Colors";
import Container from "../../components/Containers/Container/Container";
import { PieChart } from "@mui/x-charts/PieChart";

export interface detailsProps {
  theme?: "client" | "establishmente" | "employee";
}

function getTheme(theme: string) {
  return theme === "client" ? Themes.client : Themes.establishment;
}

const names = [
  "DashPriority",
  "DashTop",
  "DashLine",
  "DashCard",
  "DashMid",
  "DashBottom",
];

export const DashSection = styled.section`
  width: 100%;
  // height: 100vh;
  height: 100%;
  padding: 50px 125px;
`;

export const DashTop = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 35px;
`;

export const DashPriority = styled.div`
  width: 100%;
  // height: 100vh;

  background: ${c.green100};
  border-radius: 8px;
  padding: 25px;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const DashLine = styled.hr`
  height: 3px;
  border-radius: 3px;
  background: ${c.green300};
  border: none;
`;

export const DashCard = styled.div`
  background: ${c.gray100};
  box-shadow: 0px 0px 8px ${c.gray500}
  border-radius: 8px;
  padding: 25px;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const DashMid = styled(DashTop)``;

export const DashChart = styled.div``;

export const DashEmployees = styled.div``;

export const DashBottom = styled(DashTop)``;
