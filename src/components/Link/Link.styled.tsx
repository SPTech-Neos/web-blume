import styled from 'styled-components';

export interface LinkProps {
    children: string | JSX.Element | JSX.Element[];
    href: string;
}

export const Link = styled.a
    .attrs((props => ({
        href: props.href
    })
))<LinkProps>`

    color: var(--color-violet-300);
    font-weight: bold;
    
`;