import styled, { css } from 'styled-components';

export const Container = styled.div.attrs(({ className }) => ({
  className: className ? `container ${className}` : 'container',
}))`
  width: 95%;
  max-width: 1200px;  /* Adjust as needed */
  display: flex;
  margin: 0 auto;
  justify-content: space-between;
  align-items: center;

  ${({ className }) => className && css`
    &.column {  /* Target class directly */
      flex-direction: column;
    }
  `}
`;
