import React, { useEffect, useState } from 'react';

import * as S from './feed.styled';
import CardPromocional from '../../components/Cards/CardPromocional/CardPromocional';
import {SecondaryTitle} from '../../components/Texts/Title/Title';
import { ServiceAdapter } from '../../adapters/Products/Service/Service';
import { ServiceResponseDto } from '../../utils/Products/Service/service.types';
import CardService from '../../components/Cards/CardService/Card';
import { EstablishmentAdapter } from '../../adapters/Establishment/Establishment';
import { EstablishmentResponseDto } from '../../utils/Establishment/establishment.types';
import { SecondaryCardResult } from '../../components/Cards/CardFeedResult/CardFeedResult';


const Feed: React.FC = () => {
  const [servicesInfo, setServicesInfo] = useState<ServiceResponseDto[] | null>(null);
  const [establishmentInfo, setEstablishmentInfo] = useState<EstablishmentResponseDto[] | null>(null);
  const serviceAdapter = new ServiceAdapter;
  const establishmentAdapter = new EstablishmentAdapter;

  // LOAD DE DADOS DA PÁGINA =======================
  useEffect(() => {
    const fetchServicesData = async () => {

      const establishmentData = await establishmentAdapter.getBestRating(5);
      setEstablishmentInfo(establishmentData);

      const serviceData = await serviceAdapter.getAllServices();
      setServicesInfo(serviceData);
    };

    fetchServicesData();
  }, []);

  return (
    <S.Feed id="feed">
        <CardPromocional />

        <S.Col>
          <SecondaryTitle>Categorias Populares:</SecondaryTitle>
          <S.Row>
            {servicesInfo ? servicesInfo.slice(0, 3).map((service) => (
                <CardService
                  imgSrc={service.imgUrl ?? "https://via.placeholder.com/150"} 
                  titulo={service.specification ?? "sem titulo"}
                />
              )) : <h1>"Sem Categorias"</h1>}
          </S.Row>
        </S.Col>

        <S.Col>
          <SecondaryTitle>Estabelecimentos Bem Avaliados:</SecondaryTitle>
          <S.Row>
            {establishmentInfo ? establishmentInfo.map((establishment) => {
              if (!establishment) return null;

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
            }) : <span>"Sem Estabelecimentos"</span>}
          </S.Row>
        </S.Col>
    </S.Feed>
  );
};

export default Feed;