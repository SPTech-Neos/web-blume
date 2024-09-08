import React, { useEffect, useState } from 'react';
import CardService from '../../components/Cards/CardService/Card';

import * as S from "./search.styled";
import { ServiceAdapter } from '../../adapters/Products/Service/Service';
import { ServiceResponseDto } from '../../utils/Products/Service/service.types';

interface SearchProps {
  searchQuery?: string | null;
}

const Search: React.FC<SearchProps> = ({ searchQuery }) => {
  const [servicesInfo, setServicesInfo] = useState<ServiceResponseDto[] | null>(null);
  const serviceAdapter = new ServiceAdapter;
  console.log(searchQuery)

  // LOAD DE DADOS DA PÁGINA =======================
  useEffect(() => {
    const fetchServicesData = async () => {

    const serviceData = await serviceAdapter.getAllServices();
    setServicesInfo(serviceData);
    };

    fetchServicesData();
  }, []);

  return (
    <S.SearchSection>
      {servicesInfo ? servicesInfo.map((service) => (
        <CardService imgSrc={service.imgUrl ?? "https://via.placeholder.com/150"} titulo={service.specification ?? "sem titulo"}/>
      )) : <h1>"Sem Categorias"</h1>}
    </S.SearchSection>
  );
};

export default Search;
