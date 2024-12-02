/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { useContext, useEffect, useState } from "react";

import * as S from "./establishmentServices.styled";

import Searchbar from "../../components/Searchbar/Searchbar";
import { CardServico } from "../../components/Cards/CardPedido/CardPedido";
import CreateModal from "../../components/Modals/CreateModal/CreateModal";

import { AuthContextEmployee } from "../../contexts/User/AuthContextProviderEmployee";
import Cookies from "js-cookie";
import { LinkButton } from "../../components/Buttons/DefaultButton/DefaultButton";
import { colors as c } from "../../styles/Colors";
import { ServiceAdapter } from "../../adapters/Products/Service/Service";
import { ServiceResponseDto } from "../../utils/Products/Service/service.types";

const EstablishmentServices: React.FC = () => {
  const serviceAdapter = new ServiceAdapter();
  const [services, setServices] = useState<ServiceResponseDto[] | null>([]);

  const { isAuthenticated: isAuthenticatedEmployee } =
    useContext(AuthContextEmployee);
  const tokenFromCookie = Cookies.get("employeeInfo");
  const token = tokenFromCookie ? JSON.parse(tokenFromCookie) : null;

  const handleGetServices = async () => {
    try {
      const result = await serviceAdapter.getServicesByEstablishmentId(
        token.establishment.id
      );
      console.log("Resultado: " + result);
      if (result) {
        setServices(result);
        console.log(result[0]);

        // console.log("filterssss: " + JSON.stringify(establishmentFull?.filters[0].id))
      }
    } catch (error) {
      console.log(error);
    }
  };

  const handleAddService = () => {
    // const modal = document.getElementById("modal-adicionar");
    // modal?.classList.add("active");
  };

  useEffect(() => {
    handleGetServices();
  }, [tokenFromCookie, isAuthenticatedEmployee]);

  return (
    <S.ServicesSection>
      <CreateModal id="modal-adicionar" titulo="Serviço" />
      <S.ServicesContainer>
        <h1> SERVIÇOS </h1>
        {/* <Searchbar placeholderText="Nome do produto..." /> */}
        <S.ServicesButtons>
          {/* <h2
            onClick={
              () => {}
              // handleAddService
            }
          >
            ADICIONAR SERVIÇO
          </h2> */}
          <LinkButton color={c.green500} onClick={handleAddService}>
            ADICIONAR SERVIÇO
          </LinkButton>
        </S.ServicesButtons>
        <S.ServicesBody>
          {services &&
            services.map((service, index) => (
              <CardServico
                id={service.serviceId}
                service={service.specification}
                preco={service.price}
                status={service.status}
                key={index}
              />
            ))}
          {/* {establishment?.filters &&
            establishment.filters.map(
              (data: {
                price: number | undefined;
                service: any;
                id: number | undefined;
                name: string | undefined;
              }) => ( */}
          <CardServico
            id={1}
            service={"Serviço/Espec."}
            preco={9.9}
            status="Ativo"
          />
          {/* )
            )} */}
        </S.ServicesBody>
      </S.ServicesContainer>
    </S.ServicesSection>
  );
};

export default EstablishmentServices;
