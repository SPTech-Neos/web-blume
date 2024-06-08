import React, { useState } from "react";
import * as S from "./dashboard.styled";
import Logo from "../../components/Images/Logo/Logo";
import { PrimaryButton as Button } from "../../components/Buttons/DefaultButton/DefaultButton";
import { CaretLeft } from "phosphor-react";
import Modal from "../../components/Modals/ChooseModal/ChooseModal";
import Schedule from "../../components/Modals/ScheduleModal/ScheduleModal";
import { PieChart } from "@mui/x-charts/PieChart";
import { LineChart } from "@mui/x-charts/LineChart";
import { BarChart } from "@mui/x-charts/BarChart";
import { colors as c, Themes } from "../../styles/Colors";

const Dashboard: React.FC<S.detailsProps> = () => {
  // const openModal = () => {
  //     console.log("estou aqui");
  //     const editModal = document.getElementById("editModal");
  //     console.log(editModal);
  //     editModal?.classList.add("active-modal");
  // }

  const [pieData, setPieData] = useState([
    { id: 0, value: 90, color: c.green500 },
    { id: 1, value: 10, color: c.violet50 },
  ]);

  const [lineSeries, setLineSeries] = useState([2, 5.5, 2, 8.5, 1.5, 5]);

  const [barXAxis, setBarXAxis] = useState(["group A", "group B", "group C"]);

  const [lineXAxis, setLineXAxis] = useState([1, 2, 3, 5, 8, 10]);

  const [barSeries, setBarSeries] = useState([
    { data: [4, 3, 5] },
    { data: [1, 6, 3] },
    { data: [2, 5, 6] },
  ]);

  return (
    <S.DetailsSection>
      <Schedule id="schedule" />
      <Modal id="editModal" />

      <S.DetaisHeader>
        <S.NavBody>
          <S.NavItem>
            <S.NavLink
              to="/feed"
              className={({ isActive }) =>
                isActive ? "nav-link active" : "nav-link"
              }
            >
              <CaretLeft size={22} />
            </S.NavLink>
          </S.NavItem>
        </S.NavBody>
        <Logo />
      </S.DetaisHeader>

      <S.DetailsContainer direction="column">
        <h1>PAINEL</h1>
        <div className="row">
          <S.DashBox>
            <S.DashTitle>Taxa de Cancelamento</S.DashTitle>
            <S.DashData>85%</S.DashData>
          </S.DashBox>
          {/* <h3>ocupação dos funcionarios</h3> */}
          <PieChart
            series={[
              {
                data: pieData,
                innerRadius: 80,
                cornerRadius: 100,
              },
            ]}
            width={400}
            height={200}
          />
          <S.DashBox>
            <S.DashTitle>Renda Total do Mês</S.DashTitle>
            <S.DashData>R$1.000,00</S.DashData>
          </S.DashBox>
        </div>
        <div className="row">
          {/* <h3>grafico de linha, cancelamento por funcionario</h3> */}
          <LineChart
            xAxis={[{ data: lineXAxis }]}
            series={[
              {
                data: lineSeries,
              },
            ]}
            width={500}
            height={300}
          />
          {/* <h3>grafico de coluna, renda total por categoria</h3> */}
          <BarChart
            xAxis={[{ scaleType: "band", data: barXAxis }]}
            series={barSeries}
            width={500}
            height={300}
          />
        </div>
      </S.DetailsContainer>
    </S.DetailsSection>
  );
};

export default Dashboard;
