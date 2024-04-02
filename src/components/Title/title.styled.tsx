import styled, { css } from 'styled-components';

export interface PrimaryTitleProps {
  children: string;
  size?: 'sm' | 'md' | 'lg';
  theme?: 'light' | 'dark';
  outline?: boolean | null;
}

const sizeVariants = {
  sm: {
     fontSize: '3rem',
  },
  md: {
     fontSize: '4.125rem',
  },
  lg: {
     fontSize: '5rem',
  }
};

const themeVariants = {
   light: {
      color: 'var(--color-black-100)',
   },
   dark: {
      color: 'var(--color-black-900)',
   }
 };


export const PrimaryTitle = styled.h1<PrimaryTitleProps>`
    font-family: var(--font-text);
    font-size: ${(props) => sizeVariants[props.size || 'md'].fontSize};
    color: ${(props)=> props.color ? props.color : themeVariants.light.color };
    font-weight: bold;
    text-transform: uppercase;
    position: 'relative';

    ${(props) => props.outline ? css`
      background-image: url('../../assets/title-svg.svg');` : ""}
`;