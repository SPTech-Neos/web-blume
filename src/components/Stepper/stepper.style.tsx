import styled from "styled-components";
import { colors as c } from '../../styles/Colors';;

export interface StepperProps {
    steps: number
    currentStep: number,
    children?: string | JSX.Element | JSX.Element[]
}

export interface StateProps {
   state: string
}


// export const Step = styled.div`
//    width: 1rem;
//    height: 1rem;
//    background-color: aqua;
//    box-sizing: border-box;
//    border: 0.2rem solid red;
//    border-radius: 50%;

//    @media (min-width: 1700px) {
//       width: 1.5rem;
//       height: 1.5rem;
//    }
// `

// export const Stepper = styled.div`
//    display: flex;
//    justify-content: center;
//    align-items: center;
//    gap: 0.5rem;
// `

// export const Line = styled.div`
//    display: flex;
//    width: fit-content;
//    height: fit-content;
//    gap: 0.3rem;
// `

// export const Circle = styled.div`
//    width: 0.4rem;
//    height: 0.4rem;
//    border-radius: 50%;
//    background-color: blue;
// `;

export const Step = styled.div<StateProps>`
   width: 1rem;
   height: 1rem;
   background-color: ${props => props.state == 'pending' ? c.violet100 : c.green500};
   box-sizing: border-box;
   border: 0.2rem solid ${props => props.state == 'complete' ? c.green500 : c.violet100};
   border-radius: 50%;

   @media (min-width: 1700px) {
      width: 1.5rem;
      height: 1.5rem;
   }
`

export const Stepper = styled.div`
   display: flex;
   justify-content: center;
   align-items: center;
   gap: 0.5rem;
`

export const Line = styled.div`
   display: flex;
   width: fit-content;
   height: fit-content;
   gap: 0.3rem;
`

export const Circle = styled.div<StateProps>`
   width: 0.4rem;
   height: 0.4rem;
   border-radius: 50%;
   background-color: ${props => props.state == 'pending' ? c.violet100 : c.green500};
`