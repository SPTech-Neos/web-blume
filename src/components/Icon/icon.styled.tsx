import styled from 'styled-components';

export interface IconProps {
    children: string | JSX.Element | JSX.Element[];
    weight?: number;
}

export const Icon = styled.div<IconProps>`
    padding: 5px;
    border: 2px solid ("--var-gray-900");
    border-radius: 20px;
`;