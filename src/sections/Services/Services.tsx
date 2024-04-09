import React, { useState } from "react";

import * as S from './services.styled';
import { PrimaryTitle, SecondaryTitle } from '../../components/Title/title.styled';

import BarbaSrc from "../../assets/servico-barba.png";
import CabeloSrc from "../../assets/servico-cabelo.png";
import MaquiagemSrc from "../../assets/servico-maquiagem.png";
import SobrancelhaSrc from "../../assets/servico-sobrancelha.png";

const Services: React.FC = () => {
    const [selectedService, setSelectedService] = useState<string | null>("cabelo");

    // tem delay eu fico achando que eu to escrevendo errado
    // mas enfim, a ideia é usar o state com a função onMouseHover ou onMouseEnter não lembro, do react
    // ai eu troco a imagem pelo state
    
    //entendi, talvez funcione 

    // vê se foi, fiz só no da barba por enquanto. Tenho ctz q não é o melhor jeito de fazer
    // da pra rodar dnv? acho que é visual
    

    const handleMouseEnter = (service: string) => {
        setSelectedService(service);
    };

    const handleMouseLeave = () => {
        setSelectedService(null);
    };

    return (
        <S.Services>
            <PrimaryTitle size='md' outline={true} lines={false}> O QUE OFERECEMOS? </PrimaryTitle>
            <S.ServiceContainer direction="row"> 
                <S.ServicesOptions>

                    <SecondaryTitle>SERVIÇOS</SecondaryTitle>
                    
                    <S.ServiceOption className="cabelo-option" onMouseEnter={() => handleMouseEnter("cabelo")} onMouseLeave={handleMouseLeave}>
                        <span>Cabelo</span>
                        <span className="local-option">Cabeleleiros e salões</span>
                    </S.ServiceOption>
                    
                    <S.ServiceOption className="barba-option" onMouseEnter={() => handleMouseEnter("barba")} onMouseLeave={handleMouseLeave}>
                        <span>Barba</span>
                        <span className="local-option">Barbearias</span>
                    </S.ServiceOption>

                    <S.ServiceOption className="sobrancelha-option" onMouseEnter={() => handleMouseEnter("sobrancelha")} onMouseLeave={handleMouseLeave}>
                        <span>Sobrancelha</span>
                        <span className="local-option">Esteticistas</span>
                    </S.ServiceOption>
                    
                    <S.ServiceOption className="maquiagem-option" onMouseEnter={() => handleMouseEnter("maquiagem")} onMouseLeave={handleMouseLeave}>
                        <span>Maquiagem</span>
                        <span className="local-option">Maquiadores</span>
                    </S.ServiceOption>
                    
                </S.ServicesOptions>
                <div className="services-img">
                    {selectedService === "barba" && <img src={BarbaSrc} alt="imagem de um barbeiro" />}
                    {selectedService === "cabelo" && <img src={CabeloSrc} alt="imagem de um cabeleireiro" />}
                    {selectedService === "sobrancelha" && <img src={MaquiagemSrc} alt="imagem de um cabeleireiro" />}
                    {selectedService === "maquiagem" && <img src={SobrancelhaSrc} alt="imagem de um cabeleireiro" />}
                </div>
            </S.ServiceContainer>
        </S.Services>
    );

};

export default Services;