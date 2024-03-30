import React from 'react';

import Navbar from '../../components/Navbar/Navbar';
import Container from '../../components/Container/Container';
import Logo from '../../components/Logo/Logo';

import Title from '../../components/Title/Title';
import Subtitle from '../../components/Subtitle/Subtitle';

import Searchbar from '../../components/Searchbar/Searchbar';

import './home.css'

import LoadImg from '../../components/LoadImg/LoadImg';
import svg01 from '../../assets/home-svg01.svg';
import svg02 from '../../assets/home-svg02.svg';

const Home: React.FC = () => (
	<section id="home">
		<Navbar/>
		<div className="cabecalho">
			<Container className="container column">

				<LoadImg classes="home-svg-01" imgURL={svg01} imgTitle='svg com detalhes de circulos no fundo'/>

				<div className='text-cabecalho'>
					<Logo />
					<Title classes="primary-title">Belo e Direto</Title>
					<Subtitle classes="primary-subtitle">Pesquise aqui tudo que precisa, de cabelo à sobrancelha, de maquiagem à unhas. Aqui tem!</Subtitle>
				</div>

				<LoadImg classes="home-svg-02" imgURL={svg02} imgTitle='svg com detalhes de formas geométricas no fundo'/>

				<Searchbar placeholderText='Salão para cabelos cacheados...'/>
			</Container>
		</div>
	</section>
);

export default Home;

