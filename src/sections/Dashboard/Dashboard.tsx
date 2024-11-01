import React, {
  // ReactNode,
  useEffect,
  useState,
} from "react";
import * as S from "./dashboard.styled";

import { BarChart } from "@mui/x-charts/BarChart";

// import Logo from "../../components/Images/Logo/Logo";
// import { Button } from "../../components/Buttons/Button/Button";
// import { axisClasses } from "@mui/x-charts/ChartsAxis";
// import Text from "../../components/Texts/Text/Text";

import { colors as c } from "../../styles/Colors";
import { Title } from "../../components/Texts/Title/Title";
import Container from "../../components/Containers/Container/Container";
import { CaretDown, Receipt, Star, XCircle } from "phosphor-react";
import Text from "../../components/Texts/Text/Text";
// import Button from "@mui/material/Button";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import HeaderProfile from "../../components/Headers/HeaderProfile/HeaderProfile";

import Cookies from "js-cookie";
import { EstablishmentResponseDto } from "../../utils/Establishment/establishment.types";
import { DashboardAdapter } from "../../adapters/Dashboard/Dashboard";
import {
  // DashboardRequestDto,
  DashboardRequestDtoId,
  DashboardRequestDtoIdOnly,
} from "../../utils/Dashboard/dashboard.types";

const Dashboard: React.FC<S.detailsProps> = () => {
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);

  const openMenu = Boolean(anchorEl);

  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  let todayDate = new Date();
  todayDate.setHours(0, 0, 0, 0);
  let todayStartDate = todayDate.toISOString();
  let todayEndDate = new Date().toISOString();

  const [totalGain, setTotalGain] = useState(Number);

  const [quantity, setQuantity] = useState(Number);

  const [status, setStatus] = useState(String);

  const [countMarketCanceled, setCountMarketCanceled] = useState(Number);

  const [countMarket, setCountMarket] = useState(Number);

  const [ratingEstablishment, setRatingEstablishment] = useState(Number);

  const [
    dataset,
    // setDataset
  ] = useState([
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

  const [
    // employees,
    // setEmployees
  ] = useState([
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

  const [mostPurchased, setMostPurchased] = useState(String);

  const [leastPurchased, setLeastPurchased] = useState(String);

  const [mostProfitable, setMostProfitable] = useState(String);

  const [leastProfitable, setLeastProfitable] = useState(String);

  const [
    startDate,
    // , setStartDate
  ] = useState(todayStartDate);
  const [
    endDate,
    // , setEndDate
  ] = useState(todayEndDate);

  // Buscando dados nos cookies
  const CookieEstablishmentData = Cookies.get("establishmentInfo");

  // Convertendo para JSON
  const establishmentData = CookieEstablishmentData
    ? (JSON.parse(CookieEstablishmentData) as EstablishmentResponseDto)
    : null;

  const dashboardAdapter = new DashboardAdapter();

  // FETCH TOTAL GAIN / PRIORITYDATA VALUE =======================
  useEffect(() => {
    if (establishmentData) {
      const fetchTotalGain = async () => {
        const fetchBody = {
          establishmentId: Number(establishmentData.id),
          start: startDate,
          end: endDate,
        } as DashboardRequestDtoId;

        const totalGainData = await dashboardAdapter.getTotalGain(fetchBody);

        if (totalGainData != null) {
          setTotalGain(totalGainData);
        } else {
          setTotalGain(0.0);
        }
      };

      const fetchQuantityStatus = async () => {
        const fetchBody = {
          establishmentId: Number(establishmentData.id),
          start: startDate,
          end: endDate,
        } as DashboardRequestDtoId;

        const quantityStatusData = await dashboardAdapter.getQuantityStatus(
          fetchBody
        );
        if (quantityStatusData != null) {
          setQuantity(quantityStatusData.quantity);

          setStatus(quantityStatusData.status);
        } else {
          setQuantity(0);

          setStatus("Sem Pedidos");
        }
      };

      const fetchLeastPurchased = async () => {
        const fetchBody = {
          establishmentId: Number(establishmentData.id),
        } as DashboardRequestDtoIdOnly;

        await dashboardAdapter.getLeastPurchased(fetchBody).then((result) => {
          console.log(result?.name);

          if (result != null) {
            setLeastPurchased(result.name);
          } else {
            setLeastPurchased("Sem Resultados");
          }

          console.log(leastPurchased);
        });
      };

      const fetchMostPurchased = async () => {
        const fetchBody = {
          establishmentId: Number(establishmentData.id),
        } as DashboardRequestDtoIdOnly;

        await dashboardAdapter.getMostPurchased(fetchBody).then((result) => {
          console.log(result?.name);

          if (result != null) {
            setMostPurchased(result.name);
          } else {
            setMostPurchased("Sem Resultados");
          }
        });
      };

      const fetchMostProfitable = async () => {
        const fetchBody = {
          establishmentId: Number(establishmentData.id),
        } as DashboardRequestDtoIdOnly;

        await dashboardAdapter.getMostProfitable(fetchBody).then((result) => {
          console.log(result?.name);

          if (result != null) {
            setMostProfitable(result.name);
          } else {
            setMostProfitable("Sem Resultados");
          }
        });
      };

      const fetchLeastProfitable = async () => {
        const fetchBody = {
          establishmentId: Number(establishmentData.id),
        } as DashboardRequestDtoIdOnly;

        await dashboardAdapter.getLeastProfitable(fetchBody).then((result) => {
          console.log(result?.name);

          if (result != null) {
            setLeastProfitable(result.name);
          } else {
            setLeastProfitable("Sem Resultados");
          }
        });
      };

      const fetchCountMarket = async () => {
        const fetchBody = {
          establishmentId: Number(establishmentData.id),
          start: startDate,
          end: endDate,
        } as DashboardRequestDtoId;

        const countMarketData = await dashboardAdapter.getCountMarket(
          fetchBody
        );

        if (countMarketData != null) {
          setCountMarket(countMarketData);
        } else {
          setCountMarket(0.0);
        }
      };

      const fetchCountMarketCanceled = async () => {
        const fetchBody = {
          establishmentId: Number(establishmentData.id),
          start: startDate,
          end: endDate,
        } as DashboardRequestDtoId;

        const countMarketCanceledData =
          await dashboardAdapter.getCountMarketCanceled(fetchBody);
        if (countMarketCanceledData != null) {
          setCountMarketCanceled(countMarketCanceledData);
        } else {
          setCountMarketCanceled(0.0);
        }
      };

      const fetchRatingEstablishment = async () => {
        const fetchBody = {
          establishmentId: Number(establishmentData.id),
          start: startDate,
          end: endDate,
        } as DashboardRequestDtoId;

        const ratingEstablishmentData =
          await dashboardAdapter.getRatingEstablishment(fetchBody);
        if (ratingEstablishmentData != null) {
          setRatingEstablishment(ratingEstablishmentData);
        } else {
          setRatingEstablishment(0.0);
        }
      };

      //     const employeeStats = async () => {
      //       const fetchBody = {
      //         establishment: Number(establishmentData.id),
      //         start: startDate,
      //         end: endDate,
      //       } as DashboardRequestDto;

      //       const employeeStatsData = await dashboardAdapter.getEmployeeStats(
      //         fetchBody
      //       );
      //       if (employeeStatsData) {
      //         setGeneralKpis([
      //           generalKpis[0],
      //           generalKpis[1],
      //           ratingEstablishmentData,
      //         ]);
      //       }
      //     };

      fetchTotalGain();

      fetchQuantityStatus();

      fetchMostPurchased();

      fetchLeastPurchased();

      fetchMostProfitable();

      fetchLeastProfitable();

      fetchCountMarket();

      fetchCountMarketCanceled();

      fetchRatingEstablishment();
    }
  }, [CookieEstablishmentData]);

  const handlePriorityColor = () => {
    if (status == "Aguardando Pagamento") {
      return "error";
    } else if (status == "Em Andamento") {
      return "warning";
    } else {
      return "black";
    }
  };

  // const handleResultsColor = (result: String) => {
  //   if (result != null) {
  //     return "error";
  //   } else if (priorityData[2] == "Em Andamento") {
  //     return "warning";
  //   } else {
  //     return "black";
  //   }
  // };

  const valueFormatter = (value: number | null) => `${value} pedidos`;

  const colors: string[] = [c.green800, c.green50];

  // const handleEmployees = () => {
  //   employees.forEach((employee) => {
  //     return (
  //       <S.EmployeesLine>
  //         <S.EmployeePic src={employee.urlPic} />
  //         <Text>{employee.empName}</Text>
  //         <>
  //           <Star size={15} weight="fill" color={c.green500} />
  //           <Text>{employee.empRate}</Text>
  //         </>
  //         <Text>{employee.empHours}</Text>
  //         <Text>{employee.empValue}</Text>
  //       </S.EmployeesLine>
  //     );
  //   });
  // };

  return (
    <>
      <HeaderProfile />
      <S.DashSection>
        <Container direction="column">
          <Title>PAINEL</Title>
          <S.DashButton
            id="basic-button"
            aria-controls={openMenu ? "basic-menu" : undefined}
            aria-haspopup="true"
            aria-expanded={openMenu ? "true" : undefined}
            onClick={handleClick}
            sx={{
              color: c.gray500,
              fontFamily: "Poppins",
              fontWeight: 600,
            }}
          >
            de Hoje <CaretDown size={24} />
          </S.DashButton>
          <Menu
            id="basic-menu"
            anchorEl={anchorEl}
            open={openMenu}
            onClose={handleClose}
            MenuListProps={{
              "aria-labelledby": "basic-button",
            }}
          >
            <MenuItem onClick={handleClose}>de Hoje</MenuItem>
            <MenuItem onClick={handleClose}>do Mês</MenuItem>
            <MenuItem onClick={handleClose}>do Semestre</MenuItem>
          </Menu>
        </Container>

        <S.DashTop>
          <S.DashPriority>
            <S.PrioriryItem>
              <S.DashText weight="bold" size="sm">
                Valor:
              </S.DashText>
              <S.DashText weight="bold" size="lg" color="black">
                R${totalGain.toString()}
              </S.DashText>
            </S.PrioriryItem>
            <S.PrioriryItem>
              <S.DashText weight="bold" size="sm">
                Status:
              </S.DashText>
              <S.DashText weight="bold" size="lg" color={handlePriorityColor()}>
                {`(${quantity.toString()}) ${status}`}
              </S.DashText>
            </S.PrioriryItem>
          </S.DashPriority>

          <S.DashCard>
            <S.DashKpi>
              <S.DashText size="md">Cancelados:</S.DashText>
              <S.DashLine />
              <Container direction="row">
                <XCircle weight="fill" color={c.green300} size={40} />
                <S.DashText weight="bold" size="xlg">
                  {countMarketCanceled}
                </S.DashText>
              </Container>
            </S.DashKpi>
            <S.DashKpi>
              <S.DashText size="md">Nº&nbsp;Pedidos:</S.DashText>
              <S.DashLine />
              <Container direction="row">
                <Receipt weight="fill" color={c.green300} size={40} />
                <S.DashText weight="bold" size="xlg">
                  {countMarket}
                </S.DashText>
              </Container>
            </S.DashKpi>
            <S.DashKpi>
              <S.DashText size="md">Avaliação:</S.DashText>
              <S.DashLine />
              <Container direction="row">
                <Star weight="fill" color={c.green300} size={40} />
                <S.DashText weight="bold" size="xlg">
                  {ratingEstablishment}
                </S.DashText>
              </Container>
            </S.DashKpi>
          </S.DashCard>
        </S.DashTop>

        <S.DashMid>
          <S.DashChart>
            <S.DashText size="xlg" weight="bold">
              PEDIDOS
            </S.DashText>
            <S.ChartContainer>
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
              />
            </S.ChartContainer>
          </S.DashChart>
          <S.DashEmployees>
            <S.DashText size="xlg" weight="bold">
              FUNCIONÁRIOS
            </S.DashText>

            {/* {handleEmployees() as ReactNode} */}
            <S.EmployeesLine>
              <S.Employee>
                <S.EmployeePic src="" />
                <Text>Fulano</Text>
              </S.Employee>
              <S.Rating>
                <Star size={20} weight="fill" color={c.green500} />
                <Text>4.9</Text>
              </S.Rating>
              <Text color="gray">5h Agendadas</Text>
              <Text color="green" weight={"bold"}>
                R$999,99
              </Text>
            </S.EmployeesLine>
            <S.EmployeesLine>
              <S.Employee>
                <S.EmployeePic src="" />
                <Text>Fulano</Text>
              </S.Employee>
              <S.Rating>
                <Star size={20} weight="fill" color={c.green500} />
                <Text>4.9</Text>
              </S.Rating>
              <Text color="gray">5h Agendadas</Text>
              <Text color="green" weight={"bold"}>
                R$999,99
              </Text>
            </S.EmployeesLine>
            <S.EmployeesLine>
              <S.Employee>
                <S.EmployeePic src="" />
                <Text>Fulano</Text>
              </S.Employee>
              <S.Rating>
                <Star size={20} weight="fill" color={c.green500} />
                <Text>4.9</Text>
              </S.Rating>
              <Text color="gray">5h Agendadas</Text>
              <Text color="green" weight={"bold"}>
                R$999,99
              </Text>
            </S.EmployeesLine>
          </S.DashEmployees>
        </S.DashMid>

        <S.DashBottom>
          <S.DashCard>
            <S.DashKpi>
              <S.DashText size="sm">Mais Pedido</S.DashText>
              <S.DashLine />
              <S.DashText size="md" weight="bold" color="error">
                {mostPurchased}
              </S.DashText>
            </S.DashKpi>
            <S.DashKpi>
              <S.DashText size="sm">Menos Pedido</S.DashText>
              <S.DashLine />
              <S.DashText size="md" weight="bold" color="success">
                {leastPurchased}
              </S.DashText>
            </S.DashKpi>
            <S.DashKpi>
              <S.DashText size="sm">Mais Lucrativo</S.DashText>
              <S.DashLine />
              <S.DashText size="md" weight="bold" color="error">
                {mostProfitable}
              </S.DashText>
            </S.DashKpi>
            <S.DashKpi>
              <S.DashText size="sm">Menos Lucrativo</S.DashText>
              <S.DashLine />
              <S.DashText size="md" weight="bold" color="success">
                {leastProfitable}
              </S.DashText>
            </S.DashKpi>
          </S.DashCard>
        </S.DashBottom>
      </S.DashSection>
    </>
  );
};

export default Dashboard;
