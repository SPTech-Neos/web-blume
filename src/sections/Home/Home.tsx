import React from 'react';

import Navbar from '../../components/Navbar/Navbar';
import Container from '../../components/Container/Container';
import Title from '../../components/Title/Title';
import Logo from '../../components/Logo/Logo';

import './home.css'

const Home: React.FC = () => (
	<section id="home">
		<Navbar/>
		<div className="cabecalho">
			<Container className="container column">
				<Logo />
				<Title classes="primary-title">Belo e Direto</Title>
			</Container>
		</div>
	</section>
);

export default Home;

