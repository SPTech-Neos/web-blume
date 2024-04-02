import React from 'react';

import * as S from './about.styled';
import Container from '../../components/Container/Container';
import Title from '../../components/Title/Title';
import Subtitle from '../../components/Subtitle/Subtitle';
import svg01 from '../../assets/Itens Produtos.png';

const About: React.FC = () => (
	<S.About>
		<Title> Tudo em um só lugar </Title>
		<Container direction='column'>
			<S.AsideRounded>
				<div className="subtitle">

				</div>
				<S.HomeSvg
					className="home-svg-01"
					src={svg01}
					alt={`Imagem svg com detalhes de circulos no fundo`}
				/>
			</S.AsideRounded>
		</Container>
	</S.About>
		
);

export default About;

