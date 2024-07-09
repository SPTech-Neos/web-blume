import React from "react";
import Sidebar from "../../components/Sidebar/Sidebar";
import DashboardSection from "../../sections/Dashboard/Dashboard";
import * as S from "./dashboard.styled";

const Dashboard: React.FC = () => {
  return (
    <S.DashSection>
      <Sidebar />
      <DashboardSection />
    </S.DashSection>
  );
};

export default Dashboard;
