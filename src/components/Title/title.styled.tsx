import styled, { css } from 'styled-components';

export const PrimaryTitle = styled.div.attrs(({ className }) => ({
    className: className ? `primary-title ${className}` : 'primary-title',
  }))`
    font-family: var(--font-text);
    font-size: 80px;
    font-weight: bold;
    color: var(--color-gray-900);
    text-transform: uppercase;

    ${({ className }) => className && css`
    &.white {  /* Target class directly */
        color: var(--color-gray-200);
    }
  `}
`;