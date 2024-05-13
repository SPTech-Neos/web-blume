import styled from 'styled-components';
import { c } from '../../styles/c';

export interface PrimaryButtonProps {
      children: string;
      size?: 'sm' | 'md' | 'lg';
      width?: string;
      type?: string;
      onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void | Promise<void>;
      disabled?: boolean;
      color?: string;
}

const sizeVariants = {
   sm: {
      fontSize: '0.7rem',
      borderRadius: '0.4rem',
      border: `2px solid ${c.violet300}`
   },
   md: {
      fontSize: '1.1rem',
      padding: '0.2rem 3.3rem',
      borderRadius: '0.5rem',
      border: `3px solid ${c.violet300}`
   },
   lg: {
      fontSize: '1.5rem',
      borderRadius: '0.8rem',
      border: `4px solid ${c.violet300}`
   }
};

export const PrimaryButton = styled.button<PrimaryButtonProps>`

   width: ${(props) => props.width || 'auto'};
   font-size: ${(props) => sizeVariants[props.size || 'md'].fontSize};
   border-radius: ${(props) => sizeVariants[props.size || 'md'].borderRadius};
   background-color: ${c.violet300};
   box-shadow: 0px 0px 20px ${c.violet100};
   height: 45px;
   color: ${c.violet100};
   border: none;
   cursor: pointer;

   text-transform: uppercase;
   font-weight: 500;
   font-family: 'Poppins', sans-serif;

   transition: background-color .2s ease-in;

   &:hover{
      cursor: pointer;
      background-color: ${c.violet500};
   }

   &:active {
      transition: none;
      background-color: ${c.violet500};
   }
`;

export interface MoveButtonProps {
   children: string | JSX.Element | JSX.Element[];
   moveTo?: string;
}

export const MoveButton = styled.a`

`;
