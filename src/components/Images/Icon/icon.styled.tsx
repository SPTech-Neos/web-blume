import styled from 'styled-components';

export interface IconProps {
    children: string | JSX.Element | JSX.Element[];
    weight?: number | null;
    route?: string;
}

export const Icon = styled.div<IconProps>`
    padding: 5px;
    border: 2px solid var(--color-gray-900);
    border-radius: 30px;
    height: 50px;
    width: 50px;
    display: flex;
    align-items: center;
    justify-content: center; 
`;

export const IconLink = styled.a`
    color: var(--color-gray-900);
`;