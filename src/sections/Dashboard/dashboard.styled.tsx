import styled from "styled-components";
// import { NavLink as RouterNavLink } from "react-router-dom";
import { colors as c } from "../../styles/Colors";
// import Container from "../../components/Containers/Container/Container";
import Text from "../../components/Texts/Text/Text";
import Button from "@mui/material/Button";

export interface detailsProps {
  theme?: "client" | "establishmente" | "employee";
}

export const DashSection = styled.section`
  width: 100%;
  // height: 100vh;
  height: 100%;
  padding: 50px 125px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  gap: 25px;
  background: ${c.gray100};
`;

export const DashTop = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 50px;
`;

export const DashPriority = styled.div`
  width: 100%;
  // height: 100vh;

  background: ${c.green100};
  border-radius: 8px;
  padding: 35px 25px;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const PrioriryItem = styled.div`
  display: flex;
  flex-direction: column;
  align-items: start;
  justify-content: center;
  gap: 10px;
`;

export const DashLine = styled.hr`
  width: 100%;
  height: 3px;
  border-radius: 3px;
  background: ${c.green300};
  border: none;
`;

export const DashCard = styled.div`
  background: ${c.gray100};
  box-shadow: 0px 0px 24px 4px ${c.gray300};
  border-radius: 8px;
  padding: 25px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  gap: 25px;
`;

export const DashFooter = styled(DashCard)`
  height: 100%;
  padding: 15px 25px;
`;

export const DashKpi = styled.div`
  display: flex;
  flex-direction: column;
  align-item: center;
  justify-content: center;
  gap: 5px;
  width: min-content;

  & * {
    word-break: keep-all;
    white-space: nowrap;
    text-align: center;
  }
`;

export const DashMid = styled(DashTop)`
  height: 35vh;
`;

export const ChartContainer = styled.div`
  width: 100%;
  height: 100%;
  max-height: 30vh;
`;

export const DashChart = styled.div`
  width: 100%;
  height: 100%;
  max-width: 40vw;
`;

export const DashEmployees = styled(DashChart)`
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

export const DashBottom = styled(DashTop)`
  height: 15vh;
`;

export const DashText = styled(Text)`
  word-break: keep-all;
  white-space: nowrap;
  text-align: center;
`;

export const EmployeesContainer = styled(ChartContainer)`
  overflow-y: scroll;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  gap: 10px;
`;

export const EmployeesLine = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const EmployeePic = styled.img`
  height: 45px;
  width: 45px;
  border-radius: 45px;
  background-color: ${c.gray500};
`;

export const DashButton = styled(Button)``;

export const Rating = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 3px;
`;

export const Employee = styled(Rating)`
  gap: 10px;
`;
