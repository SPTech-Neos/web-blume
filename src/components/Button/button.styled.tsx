import styled from 'styled-components';

export interface PrimaryButtonProps {
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

export const PrimaryButton = styled.button<PrimaryButtonProps>`

   width: ${(props) => props.width || 'auto'};
   font-size: ${(props) => sizeVariants[props.size || 'md'].fontSize};
   border-radius: ${(props) => sizeVariants[props.size || 'md'].borderRadius};
   background-color: var(--color-violet-300);
   box-shadow: 0px 0px 20px var(--color-violet-100);

   color: var(--color-gray-100);
   border: none;
   cursor: pointer;

   text-transform: uppercase;
   font-weight: bold;
   font-family: 'Poppins', sans-serif;

   transition: background-color .2s ease-in;

   &:hover{
      cursor: pointer;
      background-color: var(--color-violet-500);
   }

   &:active {
      transition: none;
      background-color: var(--color-violet-500);
   }
`;
