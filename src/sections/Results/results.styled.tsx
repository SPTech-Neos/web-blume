import styled from 'styled-components';


export interface Props {
  children: string | JSX.Element | JSX.Element[];
  className?: string;
  direction: "column" | "row";
}

export const Results = styled.section`
  width: 100%;
  display: flex;
  flex-direction: column;
`;

export const BestResults = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  gap: 20px;
`;

export const Col = styled.div`
  width: 50%;
  display: flex;
  flex-direction: column;
  align-items: start;
`;

export const MoreResults = styled.div`
`;
