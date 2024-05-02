import styled from 'styled-components';
import { NavLink as RouterNavLink } from 'react-router-dom';

import ImportedContainer from "../Container/Container";

interface sidebarProps {
    color: string;
}

export const SidebarWrapper = styled.div<sidebarProps>`
    width: 80px;
    height: 100vh;
    background-color: #FAFAFA;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    position: fixed;
    -webkit-box-shadow: 5px 0px 20px 0px rgba(0,0,0,0.25);
    -moz-box-shadow: 5px 0px 20px 0px rgba(0,0,0,0.25);
    box-shadow: 5px 0px 20px 0px rgba(0,0,0,0.25);

    z-index: 2;
`;

export const Container = styled(ImportedContainer)`
    width: 100%;
    height: 80%;
    max-height: 890px;
    justify-content: space-between;
    align-items: center;
`;

export const NavList = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    margin: 0 10%;
    gap: 25px;
`;

export const NavItem = styled.div`
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
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
        background-color: ${(props) => props.color || 'var(--color-violet-100)'};
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

export const NavLogin = styled.div`
    width: 17%;
    height: 50px;
    display: flex;
    justify-content: center;
`;

