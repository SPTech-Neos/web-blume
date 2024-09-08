import React from "react";
import * as S from './cardFeedResult.styled';
// teste

import iconProfile from '../../../assets/icon-profile.png';
import Subtitle from "../../Texts/Subtitle/Subtitle";

export const PrimaryCardResult:React.FC<S.PropsCardResult> = ({ id, imgUrl, name, servicesName}) => {
    const handleCardClick = () => {
        window.location.href = `/establishment/${1}`;
    };


    return (
        <S.PrimaryCardResult data-id={id} onClick={handleCardClick}>
            <S.PrimaryCardResultContainer>
                <S.EstablishmentImgUrl 
                    alt={`Imagem de perfil da loja: ${name}`}
                    src={imgUrl ?? iconProfile}
                />

                <S.EstablishmentName>{name}</S.EstablishmentName>

                {servicesName !== null && servicesName !== undefined ?
                    <S.EstablishmentServicesTagContainer>
                        {servicesName.map((service) => (
                            typeof service === 'string' ? (
                                <S.EstablishmentServicesTag key={service}>
                                    <p>{service}</p>
                                </S.EstablishmentServicesTag>
                            ) : null
                        ))}
                    </S.EstablishmentServicesTagContainer>
                : null}
            </S.PrimaryCardResultContainer>
        </S.PrimaryCardResult>
    
    );
}

export const SecondaryCardResult: React.FC<S.PropsCardResult> = ({ id, imgUrl, name, servicesName }) => {
    const handleCardClick = () => {
        window.location.href = `/establishment/${id}`;
    };

    return (
        <S.SecondaryCardResult data-id={id} onClick={handleCardClick}>
            <S.SecondaryCardResultContainer>
                <S.EstablishmentImgUrl 
                    alt={`Imagem de perfil da loja: ${name}`}
                    src={imgUrl ?? iconProfile}
                />

                <S.EstablishmentName>{name}</S.EstablishmentName>

                
                {servicesName !== null && servicesName !== undefined ?
                    <S.EstablishmentServicesTagContainer>
                        {servicesName.map((service) => (
                            typeof service === 'string' ? (
                                <S.EstablishmentServicesTag key={service}>
                                    <p>{service}</p>
                                </S.EstablishmentServicesTag>
                            ) : null
                        ))}
                    </S.EstablishmentServicesTagContainer>
                : null}

            </S.SecondaryCardResultContainer>
        </S.SecondaryCardResult>
    );
}

export const ServiceCardResult: React.FC<S.PropsCardResult> = ({ services }) => {

    return (
        <S.ServiceCardResult>
            <S.ServiceCardResultContainer>
                {services !== null && services !== undefined && 
                    services.slice(0, 2).map((service, index) => (

                        <S.ServiceCard key={index} data-id={service.id}>
                            <S.ServiceImgUrl alt={`Imagem do serviço: ${service.specification}`} src={service.imgUrl} />
                            <S.Col>
                                <Subtitle>{service.specification}</Subtitle>
                                <Subtitle>{`R$ ${(service.price).toFixed(2)}`}</Subtitle>
                            </S.Col>
                        </S.ServiceCard>
                        
                    ))
                }
            </S.ServiceCardResultContainer>
        </S.ServiceCardResult>
    );
}

