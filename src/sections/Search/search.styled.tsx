import styled from 'styled-components';


export interface Props {
  children: string | JSX.Element | JSX.Element[];
  className?: string;
  direction: "column" | "row";
}

export const SearchSection = styled.section`
  width: 100%;
  height: auto;
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
`;
