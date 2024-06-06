import React from "react";
import * as S from './orders.styled';

import Sidebar from "../../components/Sidebar/Sidebar";


import OrdersSection from '../../sections/Orders/Orders';


const Orders:React.FC = () => {
    return (
        <S.OrdersBody>
            <Sidebar />
            <OrdersSection>
            </OrdersSection>
        </S.OrdersBody>
    );
}

export default Orders