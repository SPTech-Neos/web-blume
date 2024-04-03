import styled, {keyframes} from 'styled-components';
import Container from '../../components/Container/Container';

export const About = styled.section`
    width: 100%;
    height: 80vh;
    max-height: 750px;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;
    background-color: var(--color-gray-100)

`

export const AboutContainer = styled(Container)`
    justify-content: right;

`;

export const AsideRounded = styled.div`
    position: absolute;
    left: 0;
    width: 45vw;
    height: 200px;
    display: flex;
    background-color: #31335F;
    border-radius: 0px 100px 100px 0px;
`;

const rotate = keyframes`
    0% {
        transform: rotate(0deg)
    }
    8.33%, 25% {
        transform: rotate(90deg)
    }
    33.33%, 50% {
        transform: rotate(180deg)
    }
    58.33%, 75% {
        transform: rotate(270deg)
    }
    83.33%, 100% {
        transform: rotate(360deg)
    }
`

export const AboutSvg = styled.img`
    width: 300px;
    
    &.about-svg-01{
        animation: ${rotate} 5s infinite;
    }

    &.about-svg-02{
        width: 160px;
        right: 20vw;
        bottom: -40vhpx;
        position: absolute;
    }
` 

