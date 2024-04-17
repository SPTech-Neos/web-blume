import styled from 'styled-components';

export interface InputContainerProps {
    label: string;
    type: string;
    placeholder: string;
}

export const InputContainer = styled.div`
    background-color: var(--color-gray-100);
    // margin: 25px 0;
    width: 100%;
    font-size: 14px;
    font-family: 'Josefin Sans', 'Arial';
    color: var(--color-gray-900);

`;
