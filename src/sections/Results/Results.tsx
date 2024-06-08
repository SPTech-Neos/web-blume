import React from 'react';
import * as S from './results.styled';
import { EstablishmentResponseDto } from '../../utils/Establishment/establishment.types';
import { SecondaryTitle } from '../../components/Texts/Title/Title';
import { PrimaryCardResult, SecondaryCardResult } from '../../components/Cards/CardFeedResult/CardFeedResult';

interface SearchProps<T> {
  searchResults?: T[];
}

const Results: React.FC<SearchProps<EstablishmentResponseDto>> = ({ searchResults }) => {
  if (!searchResults) {
    return <div>Nenhum resultado encontrado.</div>;
  }
  /*
  {searchResults.map((result) => (
    <PrimaryCardResult estabId={result.establishmentId} imgUrl={result.imgUrl} name={result.name} servicesName={null} />
  ))}
  */
  
  return (
    

    <S.Results>

      <S.BestResults>

        <S.Col>
          <SecondaryTitle > Melhor Lugar</SecondaryTitle>
          {searchResults.slice(0, 1).map((result) => (
              <PrimaryCardResult 
                  key={result.establishmentId} 
                  estabId={result.establishmentId} 
                  imgUrl={result.imgUrl} 
                  name={result.name} 
                  servicesName={null} 
              />
          ))}
        </S.Col>

        <S.Col>
          <SecondaryTitle> Melhor Serviço</SecondaryTitle>
            {searchResults.slice(0, 1).map((result) => (
              <PrimaryCardResult 
                  key={result.establishmentId} 
                  estabId={result.establishmentId} 
                  imgUrl={result.imgUrl} 
                  name={result.name} 
                  servicesName={null} 
              />
            ))}
        </S.Col>

      </S.BestResults>

      <S.MoreResults>
        <SecondaryTitle> Outros resultados </SecondaryTitle>
        <S.MoreResultsContainer>
          {searchResults.map((result) => (
              <SecondaryCardResult 
                  key={result.establishmentId} 
                  estabId={result.establishmentId} 
                  imgUrl={result.imgUrl} 
                  name={result.name} 
                  servicesName={null} 
              />
          ))}
        </S.MoreResultsContainer>
      </S.MoreResults>
    </S.Results>
  );
};

export default Results;