import styled, {keyframes} from 'styled-components';
import Container from '../../components/Container/Container';


const itemVariants = {
    
}

export const About = styled.section`
    width: 100%;
    height: 80vh;
    max-height: 750px;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;
    background-color: var(--color-gray-100);

`

export const AboutContainer = styled(Container)`
    justify-content: right;

`;

export const AsideRounded = styled.div`
    position: absolute;
    left: 0;

    width: 45vw;
    height: 280px;

    display: flex;
    justify-content: flex-end;
    align-items: center;

    background-color: #31335F;
    border-radius: 0px 400px 400px 0px;
`;

export const Limiter = styled.div` /* #TODO transformar em componente */
    margin-right: 70px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;

    width: 80%;
    max-width: 630px;
    height: 90%;
    max-height: 166px;
`;

export const SvgGroup = styled.div`
    display: flex;
    position: relative;
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
        z-index: 2;
    }

    &.about-svg-02{
        width: 160px;
        right:  180px;
        top: 20px;
        position: absolute;
        z-index: 1;
    }
` 

