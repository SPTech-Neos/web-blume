import styled from 'styled-components';

export const InputContainer = styled.div`
    width: 90%;
    max-width: 1102px;
    height: 60px;
    background-color: var(--color-gray-200);
    border-radius: 80px;
    display: flex;
    align-items: center;
    justify-content: space-around;
`;

export const InputSearch = styled.input`
    width: 70%;
    background: none;
    outline: none;
    border: none;
    font-size: 18px;
    font-family: 'Inter', sans-serif;
`;

export const IconSearchBar = styled.i`
    color: var(--color-gray-700);
`;

export const ButtonSearchBar = styled.button`
    color: var(--color-gray-700);
    background: none;
    border: none;
    
    font-size: 14px;
    font-family: 'Inter', sans-serif;
    font-weight: bold;
    text-transform: uppercase;

    position: relative;
    cursor: pointer;
    transition: .25s;
    padding-left: 12px;

    &:hover {
        opacity: 0.8;
    }

    &::before {
        content: "";
        background-color: var(--color-gray-500);
        width: 2px;
        height: 40px;
        display: flex;
        position: absolute;
        left: 0;
        top: -10px;
    }
`;
