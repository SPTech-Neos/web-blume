import styled from 'styled-components';
import importedContainer from '../../components/Container/Container';

export interface FooterProps {
      
}


export const Footer = styled.button<FooterProps>`
      width: 100%;
      height: 100vh;
      max-height: 420px;
  
`;

export const Container = styled(importedContainer)`
      height: 100%;
      justify-content: space-around;
`;

export const Row = styled.div`
      display: flex;
      flex-direction: row;
`

export const Col = styled.div`
      display: flex;
      flex-direction: column;
`