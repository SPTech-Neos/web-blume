import React from 'react';

import * as S from './about.styled';
// import Container from '../../components/Container/Container';
import Title from '../../components/Title/Title';
import Subtitle from '../../components/Subtitle/Subtitle';
import svg01 from '../../assets/Itens Produtos.png';
import svg02 from '../../assets/pentagono-blume.png';

const About: React.FC = () => (
	<S.About>
		<Title> Tudo em um só lugar </Title>
		<S.AboutContainer direction='row'>
			<S.AsideRounded>
				<div className="subtitle">
					<Subtitle classes=''>Opa</Subtitle>
				</div>
			</S.AsideRounded>
			<div>
				<S.AboutSvg
					className="about-svg-01"
					src={svg01}
					alt={`Imagem svg com detalhes de circulos no fundo`}
				/>
				<S.AboutSvg
					className="about-svg-02"
					src={svg02}
					alt={`Pentagono roxo`}
				/>
				
			</div>
			
		</S.AboutContainer>
	</S.About>
		
);

export default About;

