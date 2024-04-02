import styled, { css } from 'styled-components';

export const PrimarySubtitle = styled.div.attrs(({ className }) => ({
    className: className ? `primary-subtitle ${className}` : 'primary-subtitle',
  }))`
    font-family: var(--font-text);
    font-size: 24px;
    font-weight: regular;
    color: var(--color-gray-900);
    

    ${({ className }) => className && css`
    &.white {  /* Target class directly */
        color: var(--color-gray-200);
    }
  `}
`;