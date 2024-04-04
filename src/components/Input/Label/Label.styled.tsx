import styled from 'styled-components';

export interface LabelProps {
    text: string;
}

export const Label = styled.p`
    position: fixed;
    z-index: 1;
    top: 10px;

    background-color: var(--color-gray-100);
    margin: 0 25px;
    padding: 0 3px;
    font-size: 14px;
    font-family: 'Josefin Sans', 'Arial';
    color: var(--color-gray-900);
    
    // font-weight: regular;

`;