import React from "react";
import * as S from './orders.styled';

import Sidebar from "../../components/Sidebar/Sidebar";

import { AuthContextProvider as AuthContextProviderEmployee } from "../../contexts/User/AuthContextProviderEmployee";
import OrdersSection from '../../sections/Orders/Orders';


const Orders:React.FC = () => {
    return (
            <AuthContextProviderEmployee>
                <S.OrdersBody>
                    <Sidebar />
                    <OrdersSection>
                    </OrdersSection>
                </S.OrdersBody>
            </AuthContextProviderEmployee>
    );
}

export default Orders