import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

// import { useMediaQuery } from "react-responsive";
// import { device } from "../../styles/breakpoints.styled";

import Navbar from "../../components/Navbar/Navbar";
import Container from "../../components/Containers/Container/Container";
import Logo from "../../components/Images/Logo/Logo";
import Searchbar from "../../components/Searchbar/Searchbar";

import { PrimaryTitle } from "../../components/Texts/Title/Title";

import * as S from "./home.styled";

import topDecor from "../../assets/LandingPageImgs/top-decor.svg";
import bottomDecor from "../../assets/LandingPageImgs/bottom-decor.svg";
import scrollDown from "../../assets/LandingPageImgs/scroll-down-icon.svg";
import { MoveButton } from "../../components/Buttons/DefaultButton/DefaultButton";
import Text from "../../components/Texts/Text/Text";

const Home: React.FC = () => {
  // const isTabletOrMobile = useMediaQuery({ query: device.tablet });
  const navigate = useNavigate();

  const [searchQuery, setSearchQuery] = useState("");

  const handleSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(event.target.value);
  };

  const handleSearchClick = () => {
    navigate("/feed", { state: { searchQuery } });
  };

  return (
    <S.Home id="home">
      <Navbar />
      <S.Cabecalho>
        <Container direction="column">
          <S.HomeSvg
            className="home-svg-01"
            src={topDecor}
            alt={`Imagem svg com detalhes de circulos no fundo`}
          />

          <S.TextCabecalho>
            <Logo />

            <PrimaryTitle size="lg" outline={false} lines={false}>
              Belo e Direto
            </PrimaryTitle>

            <Text size="lg">
              Pesquise aqui tudo que precisa, de cabelo à sobrancelha, de
              maquiagem à unhas. Aqui tem!
            </Text>
          </S.TextCabecalho>

          <S.HomeSvg
            className="home-svg-02"
            src={bottomDecor}
            alt={`Imagem svg com detalhes de formas geométricas no fundo`}
          />

          <Searchbar
            placeholderText="Salão para cabelos cacheados..."
            value={searchQuery}
            onChange={handleSearchChange}
            onClick={handleSearchClick}
          />

          <MoveButton moveTo={"#footer"}>
            <S.HomeSvg
              className="home-svg-03"
              src={scrollDown}
              alt="Alerta de scroll"
            />
          </MoveButton>
        </Container>
      </S.Cabecalho>
    </S.Home>
  );
};

export default Home;
