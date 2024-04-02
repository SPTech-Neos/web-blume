import styled, {keyframes} from 'styled-components';


export interface Props {
  children: string | JSX.Element | JSX.Element[];
  className?: string;
  direction: "column" | "row";
}

export const Home = styled.section`
  width: 100%;
  height: 100vh;
  max-height: 725px;
  background-color: #FAFAFA;

  display: flex;
  flex-direction: column;
  justify-content: space-around;
`;

export const Cabecalho = styled.div`
  width: 100%;
  height: 100%;
  max-height: 550px;
  display: flex;
  justify-content: center;
  align-items: center;

  position: relative;

  &>.container {
    position: relative;
  }
`;

export const TextCabecalho = styled.div`
  max-width: 800px;
  text-align: center;
  margin-bottom: 40px;
`;

const infiniteFloat = keyframes`
  0% {
    bottom: 0%;
  }

  50% {
    bottom: 5%;
  }

  100% {
    bottom: 0%;
  }
`;

export const HomeSvg = styled.img`
  position: absolute;

  &.home-svg-01 {
    top: -40%;
    right: 10%;
  },

  &.home-svg-02 {
    top: 0;
    left: 0;
    
  }

  &.home-svg-03 {
      bottom: 0;
      left: 10%; 
      animation: ${infiniteFloat} 2s ease-in-out infinite; 
  }
`
