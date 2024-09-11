import React, { useState } from "react";
import * as S from "./dashboard.styled";
import Logo from "../../components/Images/Logo/Logo";
import { Button } from "../../components/Buttons/Button/Button";

import { BarChart, barElementClasses } from "@mui/x-charts/BarChart";
import { axisClasses } from "@mui/x-charts/ChartsAxis";

import { colors as c, Themes } from "../../styles/Colors";
import { Title, Subtitle } from "../../components/Texts/Title/Title";
import Text from "../../components/Texts/Text/Text";
import Container from "../../components/Containers/Container/Container";

const Dashboard: React.FC<S.detailsProps> = () => {
  const [priorityData, setPriorityData] = useState([
    "999.99",
    "(5) Aguardando Pagamento",
  ]);

  const [generalKpis, setGeneralKpis] = useState(["25", "99", "4.9"]);

  const [dataset, setDataset] = useState([
    {
      canceled: 59,
      complete: 57,
      day: "Seg",
    },
    {
      canceled: 50,
      complete: 52,
      day: "Ter",
    },
    {
      canceled: 47,
      complete: 53,
      day: "Qua",
    },
    {
      canceled: 54,
      complete: 56,
      day: "Qui",
    },
    {
      canceled: 57,
      complete: 69,
      day: "Sex",
    },
    {
      canceled: 60,
      complete: 63,
      day: "Sáb",
    },
    {
      canceled: 59,
      complete: 60,
      day: "Dom",
    },
  ]);

  const [barXAxis, setBarXAxis] = useState([
    "Seg",
    "Ter",
    "Qua",
    "Qui",
    "Sex",
    "Sáb",
    "Dom",
  ]);

  const [employees, setEmployees] = useState([
    {
      urlPic: "urlFoto",
      empName: "Fulano da Silva",
      empRate: 4.9,
      empHours: "5h Agendadas",
      empValue: 999.99,
    },
    {
      urlPic: "urlFoto",
      empName: "Fulano da Silva",
      empRate: 4.9,
      empHours: "5h Agendadas",
      empValue: 999.99,
    },
    {
      urlPic: "urlFoto",
      empName: "Fulano da Silva",
      empRate: 4.9,
      empHours: "5h Agendadas",
      empValue: 999.99,
    },
    {
      urlPic: "urlFoto",
      empName: "Fulano da Silva",
      empRate: 4.9,
      empHours: "5h Agendadas",
      empValue: 999.99,
    },
    {
      urlPic: "urlFoto",
      empName: "Fulano da Silva",
      empRate: 4.9,
      empHours: "5h Agendadas",
      empValue: 999.99,
    },
  ]);

  const [orderKpis, setOrderKpis] = useState([
    "Progressiva",
    "Permanente",
    "Maquiagem de Noiva",
    "Cortar Unha",
  ]);

  const chartSetting = {
    width: 500,
    height: 300,
  };

  // const valueFormatter = (value: number | null) => `${value} pedidos`;
  const valueFormatter = (value: number | null) => `${value}mm`;

  const colors: string[] = [c.green800, c.green50];

  return (
    <S.DashSection>
      <Container direction="column">
        <Title>Dashboard</Title>
        <Text>de Hoje</Text>
      </Container>

      <S.DashTop>
        <S.DashPriority>
          <Container direction="column">
            <Text>Valor:</Text>
            <Text>R${priorityData[0]}</Text>
          </Container>
          <Container direction="column">
            <Text>Status:</Text>
            <Text>{priorityData[1]}</Text>
          </Container>
        </S.DashPriority>
        <S.DashCard>
          <Container direction="column">
            <Text>Cancelados:</Text>
            <S.DashLine />
            <Container direction="row">
              {/* <Icon /> */}
              <Text>ad{generalKpis[0]}</Text>
            </Container>
          </Container>
        </S.DashCard>
      </S.DashTop>

      <S.DashMid>
        <S.DashChart>
          <Text size="lg">PEDIDOS</Text>
          <BarChart
            dataset={dataset}
            xAxis={[
              {
                scaleType: "band",
                dataKey: "day",
              },
            ]}
            series={[
              { dataKey: "canceled", label: "Cancelado", valueFormatter },
              { dataKey: "complete", label: "Concluído", valueFormatter },
            ]}
            colors={colors}
            sx={() => ({
              fontFamily: "Poppins",
              backgroundColor: c.gray100,
            })}
            {...chartSetting}
          />
        </S.DashChart>
        <S.DashEmployees>
          <Text size="lg">Funcionários</Text>
          {/* forEach(linha de employees) */}
        </S.DashEmployees>
      </S.DashMid>

      <S.DashBottom>
        <S.DashCard>
          <Container direction="column">
            <Text>Mais Pedido</Text>
            <S.DashLine />
            <Text>{orderKpis[0]}</Text>
          </Container>
          <Container direction="column">
            <Text>Mais Pedido</Text>
            <S.DashLine />
            <Text>{orderKpis[1]}</Text>
          </Container>
          <Container direction="column">
            <Text>Mais Pedido</Text>
            <S.DashLine />
            <Text>{orderKpis[2]}</Text>
          </Container>
          <Container direction="column">
            <Text>Mais Pedido</Text>
            <S.DashLine />
            <Text>{orderKpis[3]}</Text>
          </Container>
        </S.DashCard>
      </S.DashBottom>
    </S.DashSection>
  );
};

export default Dashboard;
