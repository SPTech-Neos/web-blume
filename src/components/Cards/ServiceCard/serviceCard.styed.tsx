import styled from 'styled-components';
import { colors as c } from '../../../styles/Colors';

export const CardBody = styled.div`
    width: 280px;
    height: 100px;
    display: flex;
    flex-direction: row;
    border-radius: 15px;
    box-shadow: 0px 0px 8px ${c.gray500};
`;

export const CardImg = styled.div`
    width: 45%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
`;

export const CardInfo = styled.div`
    width: 55%;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;
`;  

export const ImgService = styled.div`
    width: 80%;
    height: 70px;
    background-color: gray; 
    border-radius: 5px;

`;