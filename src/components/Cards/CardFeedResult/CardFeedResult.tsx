import React from "react";
import * as S from './cardFeedResult.styled';

import iconProfile from '../../../assets/icon-profile.png';

export const PrimaryCardResult:React.FC<S.PropsCardResult> = ({ estabId, imgUrl, name, servicesName}) => {
    return (
        <S.PrimaryCardResult data-id={estabId}>
            <S.PrimaryCardResultContainer>
                <S.EstablishmentImgUrl 
                    alt={`Imagem de perfil da loja: ${name}`}
                    src={imgUrl !== null ? imgUrl : iconProfile}
                />

                <S.EstablishmentName>{name}</S.EstablishmentName>

                { servicesName !== null ?
                    <S.EstablishmentServicesTagContainer>
                        {servicesName.map((serviceName) => (
                                <S.EstablishmentServicesTag>
                                    <p>{serviceName}</p>
                                </S.EstablishmentServicesTag>
                        ))}
                    </S.EstablishmentServicesTagContainer>
                : null}
            </S.PrimaryCardResultContainer>
        </S.PrimaryCardResult>
    
    );
}

export const SecondaryCardResult: React.FC<S.PropsCardResult> = ({ estabId, imgUrl, name, servicesName }) => {
    return (
        <S.SecondaryCardResult data-id={estabId}>
            <S.SecondaryCardResultContainer>
                <S.EstablishmentImgUrl 
                    alt={`Imagem de perfil da loja: ${name}`}
                    src={imgUrl !== null ? imgUrl : iconProfile}
                />

                <S.EstablishmentName>{name}</S.EstablishmentName>

                
                { servicesName !== null ?
                    <S.EstablishmentServicesTagContainer>
                        {servicesName.map((serviceName) => (
                                <S.EstablishmentServicesTag>
                                    <p>{serviceName}</p>
                                </S.EstablishmentServicesTag>
                        ))}
                    </S.EstablishmentServicesTagContainer>
                : null}

            </S.SecondaryCardResultContainer>
        </S.SecondaryCardResult>
    );
}
