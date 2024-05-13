// TO REDO
import styled from 'styled-components';
import { c } from '../../../styles/c';

export interface ColorContainerProps {
  children: string | JSX.Element | JSX.Element[];
  bgColor: string;
}

export const ColorContainer = styled.main<ColorContainerProps>`

  background: ${props => props.bgColor || c.gray100};
  width: 100%;
  height: 100vh;

`;
