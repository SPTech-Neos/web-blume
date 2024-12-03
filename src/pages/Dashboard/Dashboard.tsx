import React from "react";
import Sidebar from "../../components/Sidebar/Sidebar";
import DashboardSection from "../../sections/Dashboard/Dashboard";
import * as S from "./dashboard.styled";
import HeaderProfile from "../../components/Headers/HeaderProfile/HeaderProfile";

const Dashboard: React.FC = () => {
  return (
    <S.DashSection>
      <Sidebar />
      <HeaderProfile />
      <DashboardSection />
    </S.DashSection>
  );
};

export default Dashboard;
