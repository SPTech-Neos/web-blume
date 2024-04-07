import React from 'react';

import * as S from './aboutApp.styled';

import { PrimaryTitle } from '../../components/Title/title.styled';
import Subtitle from '../../components/Subtitle/Subtitle';

import imgAboutApp from '../../assets/imagem-about-app.png';

const AboutApp: React.FC = () => (
	<S.AboutApp>
        <S.ContainerWrapper direction='row'>
           <div className="light-ball left"></div>
            <div className="light-ball right"></div>
            
            <S.Container direction='column'>
                <S.Limiter>
                    <PrimaryTitle size='md' theme="light" lines={false} outline={false}> Para Todo Mundo </PrimaryTitle>
                    <Subtitle size='lg' theme='light'>Você escolhe por onde quer acessar o Blume, pelo site no computador ou pelo nosso aplicativo!</Subtitle>
                </S.Limiter>

                <S.AboutAppImg
                    className="about-app-img"
                    src={imgAboutApp}
                    alt={`Computador e celular demonstrando aplicação Blume`}
                />
            </S.Container>
        </S.ContainerWrapper>
	</S.AboutApp>
		
);

export default AboutApp;

