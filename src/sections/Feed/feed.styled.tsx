import styled from 'styled-components';


export interface Props {
  children: string | JSX.Element | JSX.Element[];
  className?: string;
  direction: "column" | "row";
}

export interface FeedProps {
    searchQuery?: string;
}

export const Feed = styled.section<FeedProps>`
    width: 100%;
`;

export const Row = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
`;

export const Col = styled.div`
  width: 100%;
  margin: 10px 0;
  display: flex;
  align-items: flex-start;
  justify-content: flex-start;
  flex-direction: column;
  gap: 10px;
`;
