import styled, {keyframes} from 'styled-components';

import importedContainer from '../../components/Container/Container';

const lightBallAnimation = keyframes`
    0% {
        top: 5%;
        box-shadow: 0 0 10px 10px var(--color-violet-100);
    }
    25% {
        top: 30%;
        box-shadow: 0 0 20px 20px var(--color-violet-100);
    }
    75% {
        top: 70%;
        box-shadow: 0 0 20px 20px var(--color-violet-100);
    }
    100% {
        top: 95%;
        box-shadow: 0 0 10px 10px var(--color-violet-100);
    }
`;

export const AboutApp = styled.section`
    width: 100%;
    height: 100vh;
    max-height: 700px;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;
    background-color: var(--color-violet-900);
`

export const ContainerWrapper = styled(importedContainer)`
    position: relative;    
    height: 100%;

    &::before,
    &::after {
        content: "";
        position: absolute;
        top: 5%;
        width: 2px;
        height: 90%;
        background-color: var(--color-violet-300);
    }

    &::before {
        left: 0;
    }

    &::after {
        right: 0;
    }

    .light-ball {
        position: absolute;
        top: 5%;
        width: 10px;
        height: 10px;
        background-color: var(--color-violet-100);
        z-index: 2;
        border-radius: 50%;
        box-shadow: 0 0 10px 10px var(--color-violet-100);
        animation: ${lightBallAnimation} 5s cubic-bezier(0.4, 0, 0.2, 1) infinite;
    }

    .light-ball.left {
        left: calc(0% - 5px);
    }

    .light-ball.right {
        left: calc(100% - 5px);
    }

`;

export const Container = styled(importedContainer)`
    width: 100%;
    max-width: 800px;
    height: 100%;
    text-align: center;
    justify-content: space-around;
    position: relative;
`;

export const Limiter = styled.span`
    width: 100%;
    display: flex;
    flex-direction: column;
`;

export const AboutAppImg = styled.img`
    width: 100%;
`;