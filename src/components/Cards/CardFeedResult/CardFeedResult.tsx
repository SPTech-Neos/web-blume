import React from "react";
import * as S from './cardFeedResult.styled';


export const PrimaryCardResult:React.FC<S.PropsCardResult> = ({ estabId, imgUrl, name, servicesName}) => {
    return (
        <S.PrimaryCardResult data-id={estabId}>
            <S.PrimaryCardResultContainer>
                <S.EstablishmentImgUrl 
                    alt={`Imagem de perfil da loja: ${name}`}
                    src={imgUrl}
                />

                <S.EstablishmentName>{name}</S.EstablishmentName>

                
                <S.EstablishmentServicesTagContainer>
                    {servicesName.map((serviceName) => (
                            <S.EstablishmentServicesTag>
                                <p>{serviceName}</p>
                            </S.EstablishmentServicesTag>
                    ))}
                </S.EstablishmentServicesTagContainer>
            </S.PrimaryCardResultContainer>
        </S.PrimaryCardResult>
    
    );
}

export const SecondaryCardResult: React.FC<S.PropsCardResult> = ({ imgUrl, name, servicesName }) => {
    return (
        <S.SecondaryCardResult data-id={estabId}>
            <S.SecondaryCardResultContainer>
                <S.EstablishmentImgUrl 
                    alt={`Imagem de perfil da loja: ${name}`}
                    src={imgUrl}
                />

                <S.EstablishmentName>{name}</S.EstablishmentName>

                
                <S.EstablishmentServicesTagContainer>
                    {servicesName.map((serviceName) => (
                            <S.EstablishmentServicesTag>
                                <p>{serviceName}</p>
                            </S.EstablishmentServicesTag>
                    ))}
                </S.EstablishmentServicesTagContainer>

            </S.SecondaryCardResultContainer>
        </S.SecondaryCardResult>
    );
}
