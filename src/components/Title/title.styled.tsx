import styled, { css } from 'styled-components';

import outlineSrc from '../../../src/assets/title-svg.svg';

export interface TitleProps {
  children: string;
  size?: 'sm' | 'md' | 'lg';
  theme?: 'light' | 'dark';
  outline?: boolean;
  lines?: boolean;
}

const PrimarySizeVariants = {
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
      color: 'var(--color-gray-100)',
   },
   dark: {
      color: 'var(--color-gray-900)',
   }
 };

export const PrimaryTitle = styled.h1<TitleProps>`
    font-family: var(--font-text);
    font-size: ${(props) => PrimarySizeVariants[props.size || 'md'].fontSize};
    color: ${(props)=> props.theme === 'light' ? themeVariants.light.color : themeVariants.dark.color };
    font-weight: bold;
    text-transform: uppercase;
    position: relative;

    display: flex;
    justify-content: center;
    align-items: center;
    
    &::before {
      content: '';
      position: absolute;
      width: 110%;
      height: 100%;
      background-size: contain;
      background-repeat: no-repeat;
      background-position: center;

      transform: translateX();

      ${(props) => props.outline && css`
        top: 25%;
        background-image: url(${outlineSrc});
      `} 
    }
`;

const SecondarySizeVariants = {
  sm: {
     fontSize: '1.75rem',
  },
  md: {
     fontSize: '2rem',
  },
  lg: {
     fontSize: '2.25rem',
  }
};

export const SecondaryTitle = styled.h2<TitleProps>`
  font-family: var(--font-text);
    font-size: ${(props) => SecondarySizeVariants[props.size || 'sm'].fontSize};
    color: ${(props)=> props.theme === 'light' ? themeVariants.light.color : themeVariants.dark.color };
    font-weight: bold;
    text-transform: uppercase;
    position: relative;

    display: flex;
    justify-content: center;
    align-items: center;
    
    &::before,
    &::after {
      content: '';
      position: absolute;
      width: 15%; 
      max-width: 70px;
      height: 2px; 
      background-color: var(--color-violet-300);
    }

    &::before {
      left: 0;
      top: 50%;
      transform: translateY(-50%);
    }

    &::after {
      right: 0;
      top: 50%;
      transform: translateY(-50%);
    }

    ${(props) => props.lines === false && css`
        &::before,
        &::after {
          display: none;
        }
    `} 
`;
