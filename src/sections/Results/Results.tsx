import React, { useEffect, useState } from 'react';

import * as S from './results.styled';
import { EstablishmentResponseDto } from '../../utils/Establishment/establishment.types';
import { SecondaryTitle } from '../../components/Texts/Title/Title';
import { PrimaryCardResult, SecondaryCardResult, ServiceCardResult } from '../../components/Cards/CardFeedResult/CardFeedResult';
import { ServiceAdapter } from '../../adapters/Products/Service/Service';
import { ServiceResponseDto } from '../../utils/Products/Service/service.types';

interface SearchProps {
  searchResultsEstablishment?: EstablishmentResponseDto[];
}

const Results: React.FC<SearchProps> = ({ searchResultsEstablishment }) => {
  const [servicesInfo, setServicesInfo] = useState<ServiceResponseDto[] | null>(null);
  
  const serviceAdapter = new ServiceAdapter;

  // LOAD DE DADOS DA PÁGINA =======================
  useEffect(() => {
    const fetchServicesData = async () => {
      const serviceData = await serviceAdapter.getAllServices();
      setServicesInfo(serviceData);
    };

    fetchServicesData();
  }, []);

  if (!searchResultsEstablishment) {
    return <div>Nenhum resultado encontrado.</div>;
  }
  
  return (
    <S.Results>
      <S.BestResults>
        <S.Col>
          <SecondaryTitle>Melhor Lugar</SecondaryTitle>
          {searchResultsEstablishment.slice(0, 1).map((establishment) => {

            if (!establishment) return null;
                
            const tags: string[] = Array.isArray(servicesInfo)
                ? servicesInfo.slice(0, 2).map((service: ServiceResponseDto) => service.specification)
                : [];

            return (
              <PrimaryCardResult
                  key={establishment.id}
                  id={establishment.id}
                  imgUrl={establishment.imgUrl}
                  name={establishment.name}
                  servicesName={tags}
              />
            );
        })}
      </S.Col>



    <S.Col>
      <SecondaryTitle>Melhor Serviço</SecondaryTitle>
      {(() => {
        let validServices: ServiceResponseDto[] = [];

        // Reduz os resultados para coletar os filtros válidos
        searchResultsEstablishment.forEach((establishment) => {
          if (!establishment) return;

          // Verifica se filters é um array e filtra os que têm um serviço válido
          const currentvalidServices: ServiceResponseDto[] = Array.isArray(servicesInfo)
            ? servicesInfo.filter((service: ServiceResponseDto) => service)
            : [];

          // Adiciona os filtros válidos ao array acumulador
          validServices = validServices.concat(currentvalidServices);
        });

        // Verifica se há filtros válidos e renderiza o componente ServiceCardResult
        if (validServices.length > 0) {
          return (
            <ServiceCardResult
              services={validServices}
            />
          );
        } else {
          return null;
        }
      })()}
    </S.Col>

    </S.BestResults>
      <S.MoreResults>
        <SecondaryTitle> Outros resultados </SecondaryTitle>
        <S.MoreResultsContainer>
          {searchResultsEstablishment.map((establishment) => {

            if (!establishment) return;

            return searchResultsEstablishment.map((establishment) => {
              
                const tags: string[] = Array.isArray(servicesInfo)
                    ? servicesInfo.slice(0, 2).map((service: ServiceResponseDto) => service.specification)
                    : [];

                return (
                    <SecondaryCardResult
                        key={establishment.id}
                        id={establishment.id}
                        imgUrl={establishment.imgUrl}
                        name={establishment.name}
                        servicesName={tags}
                    />
                );
            });
          })}
        </S.MoreResultsContainer>
      </S.MoreResults>
    </S.Results>
  );
};

export default Results;