import React from 'react';
import * as S from './stepper.style';

export const Step: React.FC<S.StepProps> = ({ state, children }) => {
    const states = ['complete', 'onGoing', 'pending'];
    if (!states.includes(state)) state = 'pending';
 
    return (
       <S.Step state={state}>
         {children}
       </S.Step>
    )
}
 
 export const Stepper: React.FC<S.StepperProps> = ({ steps, currentStep }) => {
 
    function generateSteps() {
       let stepsArray = [];
       let stepStates = [];
 
       for (let i = 1; i <= steps; i++) {
          let state= '';
          if (i === currentStep) {
             state = 'onGoing';
          } else if (i < currentStep) {
             state = 'complete';
          } else {
             state = 'pending';
          }
          stepsArray.push(
            <Step state={state}>
               {state == 'complete' ? <img src="/checked.svg" alt="Concluído" /> : i}   
            </Step>
          );
          stepStates.push(state);
       }
 
       return { stepsArray, stepStates };
    }
 
    function generateLines(stepStates: string[]) {
       let linesArray = [];
 
       for (let i = 0; i < stepStates.length - 1; i++) {
          const lineState = stepStates[i] === 'complete' ? 'complete' : 'pending';
          linesArray.push(
             <S.Line key={`line${i}`} />
          );
       }
 
       return linesArray;
    }
 
    const { stepsArray, stepStates } = generateSteps();
 
    function generateStepper() {
       let stepper = [];
 
       for (let i = 0; i < stepsArray.length; i++) {
          stepper.push(stepsArray[i]);
 
          if (i < stepStates.length - 1) { 
             stepper.push(generateLines(stepStates)[i]); 
          }
       }
 
       return stepper;
    }
 
    return (
       <S.Stepper>
          {generateStepper()}
       </S.Stepper>
    )
 }