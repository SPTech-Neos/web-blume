import styled, { css } from 'styled-components';

export interface PrimaryTitleProps {
  children: string;
  size?: 'sm' | 'md' | 'lg';
  width?: string;
}

const sizeVariants = {
  sm: {
    fontSize: '0.7rem',
    borderRadius: '0.5rem',
    border: '2px solid var(--color-violet-300)'
  },
  md: {
    fontSize: '1.1rem',
    padding: '0.2rem 3.3rem',
    borderRadius: '0.6rem',
    border: '3px solid var(--color-violet-300)'
  },
  lg: {
    fontSize: '1.5rem',
    borderRadius: '0.8rem',
    border: '4px solid var(--color-violet-300)'
  }
};

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