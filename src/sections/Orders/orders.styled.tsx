import styled from 'styled-components';
import AvaliationBadge  from "../../components/Badges/AvaliationBadge/AvaliationBadge";
import { colors as c } from '../../styles/Colors';

export const Badge = styled(AvaliationBadge)`

`

export const OrdersSectionContainer = styled.div`
    width: 100%;
    height: 100vh;
    padding-left: 5.2%;
    display: flex;
    flex-direction: column;
    justify-content: start;
    align-items: center;
    gap: 10%;

    & .active{
        background-color: ${c.violet100};
        color: ${c.gray100}
    }
`;

export const OrdersHeader = styled.div`
    width:100%;
    height: 9%;
    display: flex;
    justify-content: center;
    align-items: end;
`;

export const OrdersBody = styled.div`
    width: 90%;
    height: 85%;
    display: flex;
    flex-direction: column;

`;

export const FiltersContainer = styled.div`
    width: 100%;
    height: 10%;
    display: flex;
    justify-content: space-between;

    `;

export const BadgesContainer = styled.div`
    width: auto;
    height: 100%;
    display: flex;
    justify-content: space-around;
    align-items: center;
    padding-left: 30px;

    & div{
        width: 110px;
        margin-right: 10px;
        font-size: 11px;
        border-radius: 10px;

        &:hover{
            cursor: pointer;
            background-color: ${c.violet100};
            color: ${c.gray100};

        }
    }


`;

export const HistoricoContainer = styled.div`
    width: 15%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    color: ${c.violet100};
    text-decoration: underline;

    & h2:hover{
        cursor: pointer;
    }
`;

export const OrdersContainer = styled.div`
    width: 100%;
    height: 80%;
    display: flex;
    flex-direction: column;
    justify-content: start;
    align-items: center;

`;