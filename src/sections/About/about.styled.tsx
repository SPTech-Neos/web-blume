import styled, {keyframes} from 'styled-components';


export const About = styled.section`
    width: 100%;
    height: 80vh;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;

`
// coloquei esse height pra testar a cor
export const AsideRounded = styled.div`
    width: 60%;
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
        right: 330px;
        bottom: -430px;
        position: absolute;
    }
` 

