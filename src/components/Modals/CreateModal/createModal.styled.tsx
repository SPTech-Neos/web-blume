import styled from 'styled-components';
import { colors as c } from '../../../styles/Colors';

export const ModalSection = styled.section`
    width: 100vw;
    height: 100vh;
    position: absolute;
    z-index: 2;
    background-color: #0000006f;
    display: none;  
    justify-content: center;
    align-items: center;
`;

export const ModalContainer = styled.div`
    width: 50%;
    height: 80%;
    background-color: ${c.gray100};
    border-radius: 20px;
`;