import React from "react";

import Navbar from "../../components/Navbar/Navbar";
import Container from "../../components/Container/Container";
import Logo from "../../components/Logo/Logo";
import Searchbar from "../../components/Searchbar/Searchbar";

import { PrimaryTitle } from "../../components/Title/Title";
import Subtitle from "../../components/Subtitle/Subtitle";

import * as S from "./home.styled";

import svg01 from "../../assets/home-svg01.svg";
import svg02 from "../../assets/home-svg02.svg";
import svg03 from "../../assets/scroll-down-icon.svg";
import { MoveButton } from "../../components/Button/Button";

const Home: React.FC = () => {

  return (
    <S.Home id="home">
      <Navbar />
      <S.Cabecalho>
        <Container direction="column">
          {/* <S.HomeSvg classes="home-svg-01" imgURL={svg01} imgTitle='svg com detalhes de circulos no fundo'/> */}

          <S.HomeSvg
            className="home-svg-01"
            src={svg01}
            alt={`Imagem svg com detalhes de circulos no fundo`}
          />

          <S.TextCabecalho>
            <Logo />
            <PrimaryTitle size="lg" outline={false} lines={false}>
              Belo e Direto
            </PrimaryTitle>
            <Subtitle>
              Pesquise aqui tudo que precisa, de cabelo à sobrancelha, de
              maquiagem à unhas. Aqui tem!
            </Subtitle>
          </S.TextCabecalho>

          {/* <S.HomeSvg classes="home-svg-02" imgURL={svg02} imgTitle='svg com detalhes de formas geométricas no fundo'/> */}
          <S.HomeSvg
            className="home-svg-02"
            src={svg02}
            alt={`Imagem svg com detalhes de formas geométricas no fundo`}
          />

          <Searchbar placeholderText="Salão para cabelos cacheados..." />
        </Container>
        <MoveButton moveTo={"#footer"}>
          <S.HomeSvg
            className="home-svg-03"
            src={svg03}
            alt="Alerta de scroll"
          />
        </MoveButton>
      </S.Cabecalho>
    </S.Home>
  );
};

export default Home;
