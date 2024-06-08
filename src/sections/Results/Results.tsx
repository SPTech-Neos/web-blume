import React from 'react';
import * as S from './results.styled';
import Card from '../../components/Cards/Card/Card';

interface Salon {
  id: number;
  title: string;
  
}

interface SearchProps<T> {
  searchResults?: T[];
}

const Results: React.FC<SearchProps<Salon>> = ({ searchResults }) => {
  if (!searchResults) {
    return <div>Nenhum resultado encontrado.</div>;
  }

  return (
    <S.Results>
      {searchResults.map((result) => (
        
        <Card titulo={'Teste'} texto={'Teste'} >
          <div> TESTE </div>
        </Card>
      ))}
    </S.Results>
  );
};

export default Results;