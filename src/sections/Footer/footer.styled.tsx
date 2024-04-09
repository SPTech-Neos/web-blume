import styled from 'styled-components';

import importedContainer from '../../components/Container/Container';
import { NavLink as RouterNavLink } from 'react-router-dom';

export interface FooterProps {
      
}


export const Footer = styled.button<FooterProps>`
      width: 100%;
      height: 100vh;
      max-height: 420px;
  
`;

export const Container = styled(importedContainer)`
      height: 100%;
      justify-content: space-around;
`;

export const Row = styled.div`
      width: 100%;
      display: flex;
      flex-direction: row;
      justify-content: center;
      align-items: center;

      &.h-75 {
            height: 75%;
      }

      &.h-25 {
            width: 100%;
            justify-content: space-between;
            height: 25%;
      }
`

export const ColGroup = styled.div`
      width: 100%;
      height: 200px;
      display: flex;
      align-items: start;
      justify-content: start;
      gap: 50px;
`;

export const Col = styled.div`
      width: 100%;
      max-width: 180px;

      display: flex;
      flex-direction: column;
      align-items: start;
      justify-content: center;

      gap: 20px;

      &.align-center {
            height: 100%;
            align-items: center;
      }

      &.mr-100 {
            margin-right: 100px;
      }
`

// COMPONENTIZAR DEPOIS

export const NavList = styled.div`
    display: flex;
    flex-direction: column;
    gap: 15px;
`;

export const NavItem = styled.div`
    width: 100%;
    display: flex;
    justify-content: start;
    align-items: center;
    font-family: "Josefin Sans";
    font-weight: 300;
    font-size: 20px;
`;

export const NavLink = styled(RouterNavLink)`
    color: var(--color-gray-900);
    display: flex;
    justify-content: center;
    align-items: center;
    
    position: relative;

    &::before {
        content: '';
        position: absolute;
        padding: 0 5px;
        width: 100%;
        height: 4px;
        border-radius: 4px;
        color: var(--color-gray-900);
        background-color: var(--color-violet-100);
        bottom: -10px;
        transform-origin: right;
        transform: scaleX(0);
        transition: transform .3s ease-in-out;
    }

    &:hover::before {
        transform-origin: left;
        transform: scaleX(1);
    }
`;
