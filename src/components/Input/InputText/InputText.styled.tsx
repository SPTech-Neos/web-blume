import styled from 'styled-components';

import SlInput from '../../../../node_modules/@shoelace-style/shoelace/dist/react/input';

export const InputText = styled(SlInput).attrs({ placeholder: "Texto placeholder" })`
    &::part(form-control-label){
        // background-color: red;
    }

    position: relative;
    z-index: 0;

    margin: 15px 0;
    background-color: var(--color-gray-100);
    border: 3px solid var(--color-gray-900);
    padding: 5px 25px;
    font-size: 16px;
    font-weight: regular;
    font-family: 'Poppins', 'Arial';
    transition: all .2s ease-in;

    &::placeholder {
        color: var(--color-violet-500);
    }

   &:hover, &:focus{
      border: 3px solid var(--color-violet-300);
   }

`;
