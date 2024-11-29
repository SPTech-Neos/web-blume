/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { useContext, useEffect, useState } from "react";

import * as S from "./establishmentServices.styled";

import Searchbar from "../../components/Searchbar/Searchbar";
import { CardServico } from "../../components/Cards/CardPedido/CardPedido";
import CreateModal from "../../components/Modals/CreateModal/CreateModal";

import { AuthContextEmployee } from "../../contexts/User/AuthContextProviderEmployee";
import Cookies from "js-cookie";
import { EstablishmentAdapter } from "../../adapters/Establishment/Establishment";
import { EstablishmentResponseDto } from "../../utils/Establishment/establishment.types";

const EstablishmentServices: React.FC = () => {
  const estabAdapter = new EstablishmentAdapter();
  const [, setEstablishment] = useState<EstablishmentResponseDto | null>(null);

  const { isAuthenticated: isAuthenticatedEmployee } =
    useContext(AuthContextEmployee);
  const tokenFromCookie = Cookies.get("employeeInfo");
  const token = tokenFromCookie ? JSON.parse(tokenFromCookie) : null;

  const handleGetServices = async () => {
    try {
      const result = await estabAdapter.getEstablishmentById(
        token.establishment.id
      );
      console.log("Resultado: " + result);
      if (result) {
        setEstablishment(result);
        // console.log("filterssss: " + JSON.stringify(establishmentFull?.filters[0].id))
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    handleGetServices();
  }, [tokenFromCookie, isAuthenticatedEmployee]);

  return (
    <S.ServicesSection>
      <CreateModal id="modal-adicionar" titulo="Serviço" />
      <S.ServicesContainer>
        <h1> SERVIÇOS </h1>
        <Searchbar placeholderText="Nome do produto..." />
        <S.ServicesButtons>
          <h2
            onClick={
              () => {}
              // handleAddService
            }
          >
            ADICIONAR SERVIÇO
          </h2>
        </S.ServicesButtons>
        <S.ServicesBody>
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
