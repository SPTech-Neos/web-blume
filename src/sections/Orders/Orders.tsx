import React, {useEffect, useContext} from "react";
import * as S from './orders.styled';

import Logo from "../../components/Images/Logo/Logo";
import { CardPedido } from "../../components/Cards/CardPedido/CardPedido";
import { AuthContextClient } from "../../contexts/User/AuthContextProviderClient";
import { AuthContextEmployee } from "../../contexts/User/AuthContextProviderEmployee";
import Cookies from 'js-cookie';

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

    const { isAuthenticated: isAuthenticatedEmployee } = useContext(AuthContextEmployee);
    const { isAuthenticated: isAuthenticatedClient } = useContext(AuthContextClient);
  

    const tokenFromCookie = Cookies.get('employeeInfo');
    const token = tokenFromCookie ? JSON.parse(tokenFromCookie) : null;

    useEffect(() => {
        if (tokenFromCookie) {
            console.log("Token de autenticação:", tokenFromCookie);
            console.log("LOGADO: " + isAuthenticatedEmployee);
        }
    }, [tokenFromCookie, isAuthenticatedEmployee]);


    useEffect(() => {
        if (tokenFromCookie) {
            console.log("Token de autenticação:", tokenFromCookie);
            console.log("LOGADO: " + isAuthenticatedClient);
        }
    }, [tokenFromCookie, isAuthenticatedClient]);

    let theme = "";

    if(isAuthenticatedEmployee){
        theme ="B2B";
        return (
            token ? (
                <S.OrdersSectionContainer tema={theme}>
                    <S.OrdersHeader>
                        <Logo />
                    </S.OrdersHeader>
                    <S.OrdersBody>
                        <S.FiltersContainer>

                            <S.BadgesContainer tema={theme}>
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
                            <S.HistoricoContainer tema={theme}>
                                <h2 onClick={handlePast}>HISTÓRICO</h2>
                            </S.HistoricoContainer>    
                        </S.FiltersContainer>

                        <S.OrdersContainer>
                            <CardPedido 
                                client="deixar dinamico" 
                                employee={token.name}
                                establishment={token.establishment.name}
                                preco={20}
                                service="deixar"
                                status="Em Andamento"
                                imgUrl=""
                            />
                        </S.OrdersContainer>    
                    </S.OrdersBody>

                </S.OrdersSectionContainer>
            ) : null
        );
    
    }else if(isAuthenticatedClient){
        theme = "B2C";
        return (
            <S.OrdersSectionContainer tema={theme}>
                <S.OrdersHeader>
                    <Logo />
                </S.OrdersHeader>
                <S.OrdersBody>
                    <S.FiltersContainer>

                        <S.BadgesContainer tema={theme}>
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
                        <S.HistoricoContainer tema={theme}>
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
        return (
                token ? (
                <S.OrdersSectionContainer tema={theme}>
                    <S.OrdersHeader>
                        <Logo />
                    </S.OrdersHeader>
                    <S.OrdersBody>
                        <S.FiltersContainer>

                            <S.BadgesContainer tema={theme}>
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
                            <S.HistoricoContainer tema={theme}>
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
            ) : null
        );
}

export default Orders;
