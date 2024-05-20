import styled from "styled-components";
import { colors as c } from '../../styles/Colors';;

export interface StepperProps {
    steps: number
    currentStep: number,
    children?: string | JSX.Element | JSX.Element[]
}

export interface StepProps {
   state: string,
   children: number | string | JSX.Element | JSX.Element[]
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

export const Step = styled.div<StepProps>`
   width: 35px;
   height: 35px;
   background-color: ${props => props.state == 'pending' ? c.gray100 : c.violet300};
   box-sizing: border-box;
   border: 0.2rem solid ${c.violet300};
   border-radius: 50%;
   display: flex;
   align-items: center;
   justify-content: center;
   font-size: 20px;
   font-family: 'Poppins';
   font-weight: bold;
   color: ${props => props.state == 'pending' ? c.violet300 : c.gray100};

   @media (min-width: 1700px) {
      // width: 1.5rem;
      // height: 1.5rem;
   }
`

export const Stepper = styled.div`
   display: flex;
   justify-content: center;
   align-items: center;
   // gap: 0.5rem;
`
export const Line = styled.div`
   width: 2rem;
   background: ${c.violet300};
   height: 3px;
`

// export const Circle = styled.div<StateProps>`
//    width: 0.4rem;
//    height: 0.4rem;
//    border-radius: 50%;
//    background-color: ${props => props.state == 'pending' ? c.violet100 : c.green500};
// `