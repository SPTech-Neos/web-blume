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
import Subtitle from "../../components/Texts/Subtitle/Subtitle";

const Dashboard: React.FC<S.detailsProps> = () => {
  const [pieData, setPieData] = useState([
    { id: 0, value: 90, color: c.green500 },
    { id: 1, value: 10, color: c.violet50 },
  ]);

  const [lineSeries, setLineSeries] = useState([
    {
      data: [2, 5.5, 2, 8.5, 1.5, 5],
    },
    {
      data: [2.5, 5, 5, 5, 1, 4],
    },
  ]);

  const [lineXAxis, setLineXAxis] = useState([1, 2, 3, 5, 8, 10]);

  const [barSeries, setBarSeries] = useState([{ data: [4, 6, 2, 1, 8] }]);

  const [barXAxis, setBarXAxis] = useState([
    "Corte",
    "Pintura",
    "Alisamento",
    "Cacheamento",
    "Estilização",
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
            <div className="column">
              <Subtitle weight={500} size="md">
                Taxa de
              </Subtitle>
              <Subtitle weight={700} size="lg">
                CANCELAMENTO
              </Subtitle>
            </div>
            <S.DashData>85%</S.DashData>
          </S.DashBox>
          {/* <h3>ocupação dos funcionarios</h3> */}
          <S.DashPieChart
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
          <S.DashPieInfo>
            <Subtitle size="lg" weight={800}>
              100%
            </Subtitle>
            <Subtitle size="sm" weight={500}>
              de ocupação dos funcionarios
            </Subtitle>
          </S.DashPieInfo>
          <S.DashBox>
            <div className="column">
              <Subtitle weight={700} size="lg">
                RENDA TOTAL
              </Subtitle>
              <Subtitle weight={500} size="md">
                do Mês
              </Subtitle>
            </div>
            <S.DashData>R$1.000,00</S.DashData>
          </S.DashBox>
        </div>
        <div className="row">
          <S.DashGraph>
            <div>
              <Subtitle weight={700} size="lg">
                CANCELAMENTO
              </Subtitle>
              <Subtitle weight={500} size="md">
                por Funcionário
              </Subtitle>
            </div>
            <LineChart
              slotProps={{
                loadingOverlay: { message: "Carregango gráfico..." },
                noDataOverlay: { message: "Nenhum dado para mostrar." },
              }}
              xAxis={[
                {
                  data: lineXAxis,
                },
              ]}
              series={lineSeries}
              width={500}
              height={300}
            />
          </S.DashGraph>
          <S.DashGraph>
            <div>
              <Subtitle weight={700} size="lg">
                RENDA TOTAL
              </Subtitle>
              <Subtitle weight={500} size="md">
                por Categoria
              </Subtitle>
            </div>
            <BarChart
              slotProps={{
                loadingOverlay: { message: "Carregango gráfico..." },
                noDataOverlay: { message: "Nenhum dado para mostrar." },
              }}
              xAxis={[
                {
                  scaleType: "band",
                  data: barXAxis,
                  // colorMap: {
                  //   type: "piecewise",
                  //   thresholds: [1, 2],
                  //   colors: [c.green500],
                  // },
                  colorMap: {
                    type: "ordinal",
                    values: barXAxis,
                    colors: [c.green300, c.green500, c.green800],
                    unknownColor: c.green100,
                  },
                },
              ]}
              series={barSeries}
              colors={["#FF0000", "#00ff00", "#0000ff", "#00ff00", "#0000ff"]}
              width={500}
              height={300}
            />
          </S.DashGraph>
        </div>
      </S.DetailsContainer>
    </S.DetailsSection>
  );
};

export default Dashboard;
