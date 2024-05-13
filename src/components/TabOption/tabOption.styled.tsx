import styled from 'styled-components';
import { colors as c } from '../../styles/Colors';

export const TabOption = styled.div`
    width: 33.3%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    border-bottom: 3px solid ${c.gray300};

    &:hover{
        cursor:pointer;
        color: ${c.green300};
        border-bottom: 4px solid ${c.green300};
    }

    &.active {
        color: ${c.green300};
        border-bottom: 4px solid ${c.green300};
    }

`;