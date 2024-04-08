import styled from 'styled-components';

export interface CheckboxProps {
    label: string;
    checked?: boolean | false;
}

export const Checkbox = styled.input
.attrs({ type: 'checkbox' })<CheckboxProps>`

    accent-color: var(--color-violet-300);
    border: 2px solid var(--color-gray-900)
    border-radius: none;

`;