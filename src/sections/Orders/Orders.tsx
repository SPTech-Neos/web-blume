import React from "react";
import * as S from './orders.styled';

import Logo from "../../components/Images/Logo/Logo";
import CardPedido from "../../components/Cards/CardPedido/CardPedido";



const Orders: React.FC = () => {


    const handleClick = (event: React.MouseEvent<HTMLDivElement>) => {
        const selected = document.getElementsByClassName("active");
        
        selected[0]?.classList.remove("active");

        const clicked = (event.target as HTMLElement);
        clicked.classList.add("active");

    }

    const handlePast = (event: React.MouseEvent<HTMLDivElement>) => {
        console.log(event.target as HTMLElement);
    }


    return (
        <S.OrdersSectionContainer>
            <S.OrdersHeader>
                <Logo />
            </S.OrdersHeader>
            <S.OrdersBody>
                <S.FiltersContainer>

                    <S.BadgesContainer>
                    <S.Badge onClick={handleClick}>
                            Todos
                        </S.Badge >
                        <S.Badge onClick={handleClick}>
                            Em andamento
                        </S.Badge >
                        <S.Badge onClick={handleClick}>
                            Cancelado
                        </S.Badge>
                        <S.Badge onClick={handleClick}>
                            Concluído
                        </S.Badge>

                    </S.BadgesContainer>
                    <S.HistoricoContainer>
                        <h2 onClick={handlePast}>HISTÓRICO</h2>
                    </S.HistoricoContainer>    
                </S.FiltersContainer>

                <S.OrdersContainer>
                    <CardPedido 
                        client="deixar dinamico" 
                        employee="deixar"
                        establishment="dinamico"
                        preco={20}
                        service="deixar"
                        status="Em Andamento"
                        imgUrl=""
                    />
                </S.OrdersContainer>
            </S.OrdersBody>

        </S.OrdersSectionContainer>
    );
}

export default Orders;
