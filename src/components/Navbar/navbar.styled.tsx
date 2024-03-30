import styled from 'styled-components';

export const NavContainer = styled.div`
    width: 100%;
    height: 60px;
    display: flex;
    /* background-color: red; */
`;

export const NavLogo = styled.div`
    width: 10%;
    height: 50px;
    background-color: yellow;
`;

export const Row = styled.div`
    width: 60%;
    display: flex;
    align-items: center;
`;

export const NavList = styled.div`
    width: 50%;
    display: flex;
    justify-content: space-around;
    margin: 0 10%;
`;

export const NavItem = styled.div`
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    font-family: 'Josefin Sans', sans-serif;
    font-weight: light;
    font-size: 20px;
`;

export const NavLink = styled.a`
    color: var(--color-gray-900);
`;

export const NavLogin = styled.div`
    width: 17%;
    height: 50px;
    display: flex;
    justify-content: center;
`;

export const BtnEntrar = styled.button`
    padding: 0;
    max-width: 200px;
    width: 60%;
    background-color: #8F93EC;
    font-weight: 600;
    font-size: 20px;
    font-family: "Poppins";
    box-shadow: 0px 0px 20px #8F93EC;  
`;
