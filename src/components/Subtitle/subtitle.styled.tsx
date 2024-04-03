import styled from 'styled-components';

export interface SubitleProps {
  children: string;
  size?: 'sm' | 'md' | 'lg';
  theme?: 'light' | 'dark';
}

const sizeVariants = {
  sm: {
     fontSize: '0.875rem',
  },
  md: {
     fontSize: '1rem',
  },
  lg: {
     fontSize: '1.125rem',
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

export const PrimarySubtitle = styled.h2<SubitleProps>`
  font-family: var(--font-text);
  font-size: ${(props) => sizeVariants[props.size || 'md'].fontSize};
  color: ${(props)=> props.theme === 'light' ? themeVariants.light.color : themeVariants.dark.color };
  font-weight: 200;

  position: relative;
`;