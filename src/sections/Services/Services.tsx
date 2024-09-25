import React, { useState } from "react";
import { useMediaQuery } from "react-responsive";
import { device } from "../../styles/breakpoints.styled";

import * as S from "./services.styled";
import {
  // PrimaryTitle,
  // SecondaryTitle,
  Title,
  Subtitle,
} from "../../components/Texts/Title/Title";

import Text from "../../components/Texts/Text/Text";

import barberSrc from "../../assets/LandingPageImgs/barber.svg";
import hairSrc from "../../assets/LandingPageImgs/hair.svg";
import makeupSrc from "../../assets/LandingPageImgs/makeup.svg";
import eyebrowSrc from "../../assets/LandingPageImgs/eyebrow.svg";
import Container from "../../components/Containers/Container/Container";

const Services: React.FC = () => {
  const isTabletOrMobile = useMediaQuery({ query: device.tablet });

  const [selectedService, setSelectedService] = useState<string>("cabelo");

  const handleMouseEnter = (service: string) => {
    setSelectedService(service);
  };

  return isTabletOrMobile ? null : (
    <S.Services id="services">
      <Title>O QUE OFERECEMOS?</Title>
      <S.ServiceContainer direction="row">
        <S.ServicesOptions>
          <Container direction="column">
            <Subtitle outline="green">SERVIÇOS</Subtitle>
            <Text>oferecemos suporte de serviço para:</Text>
          </Container>

          <S.ServiceOption
            className="cabelo-option"
            onMouseEnter={() => handleMouseEnter("cabelo")}
          >
            <span>Cabelo</span>
            <span className="local-option">Cabeleleiros e salões</span>
          </S.ServiceOption>

          <S.ServiceOption
            className="barba-option"
            onMouseEnter={() => handleMouseEnter("barba")}
          >
            <span>Barba</span>
            <span className="local-option">Barbearias</span>
          </S.ServiceOption>

          <S.ServiceOption
            className="sobrancelha-option"
            onMouseEnter={() => handleMouseEnter("sobrancelha")}
          >
            <span>Sobrancelha</span>
            <span className="local-option">Esteticistas</span>
          </S.ServiceOption>

          <S.ServiceOption
            className="maquiagem-option"
            onMouseEnter={() => handleMouseEnter("maquiagem")}
          >
            <span>Maquiagem</span>
            <span className="local-option">Maquiadores</span>
          </S.ServiceOption>
        </S.ServicesOptions>
        <div className="services-img">
          {selectedService === "barba" && (
            <img src={barberSrc} alt="imagem de um barbeiro" />
          )}
          {selectedService === "cabelo" && (
            <img src={hairSrc} alt="imagem de um cabeleireiro" />
          )}
          {selectedService === "sobrancelha" && (
            <img src={makeupSrc} alt="imagem de um cabeleireiro" />
          )}
          {selectedService === "maquiagem" && (
            <img src={eyebrowSrc} alt="imagem de um cabeleireiro" />
          )}
        </div>
      </S.ServiceContainer>
    </S.Services>
  );
};

export default Services;
