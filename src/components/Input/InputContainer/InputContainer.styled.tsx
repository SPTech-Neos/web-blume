import styled from 'styled-components';

export interface InputContainerProps {
    text: string;
}

export const InputContainer = styled.div`
    background-color: var(--color-gray-100);
    padding: 0 28px;
    font-size: 14px;
    font-family: 'Josefin Sans', 'Arial';
    color: var(--color-gray-900);
    
    // font-weight: regular;

`;
