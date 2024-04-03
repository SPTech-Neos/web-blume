import React from 'react';

import * as S from './about.styled';
// import Container from '../../components/Container/Container';
import Subtitle from '../../components/Subtitle/Subtitle';
import svg01 from '../../assets/Itens Produtos.png';
import svg02 from '../../assets/pentagono-blume.png';
import { PrimaryTitle, SecondaryTitle } from '../../components/Title/title.styled';

const About: React.FC = () => (
	<S.About>
		<PrimaryTitle size='md' outline={true} lines={false}> Tudo em um só lugar </PrimaryTitle>
		<S.AboutContainer direction='row'>
			<S.AsideRounded>
				<S.Limiter>
					<SecondaryTitle size='sm' theme='light' outline={false} lines={true}>De agenda a produtos</SecondaryTitle>

					<Subtitle size='sm' theme='light'>
						Na Blume, você encontra o lugar que você precisa, o serviço que quer, o produto que gostou e agenda tudo isso. 
					</Subtitle>
					<Subtitle size='sm' theme='light'>
						Feche tudo em um único pacote e pronto!
					</Subtitle>
				</S.Limiter>
				
			</S.AsideRounded>
	
			<S.SvgGroup>
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
			</S.SvgGroup>
			
		</S.AboutContainer>
	</S.About>
		
);

export default About;

