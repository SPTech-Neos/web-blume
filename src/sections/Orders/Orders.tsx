import React, {useEffect, useContext, useState} from "react";
import * as S from './orders.styled';

import Logo from "../../components/Images/Logo/Logo";
import { CardPedidoProduto, CardPedidoServico } from "../../components/Cards/CardPedido/CardPedido";
import { AuthContextClient } from "../../contexts/User/AuthContextProviderClient";
import { AuthContextEmployee } from "../../contexts/User/AuthContextProviderEmployee";
import Cookies from 'js-cookie';
import { SchedulingAdapter } from "../../adapters/Scheduling/Scheduling";
import { SchedulingResponseDto } from "../../utils/Scheduling/scheduling.types";
import { PaymentResponseDto } from "../../utils/Payment/payment.types";
import { PaymentAdapter } from "../../adapters/Payments/Payment";

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
    const scheduleAdapter = new SchedulingAdapter();
    const paymentAdapter = new PaymentAdapter();

    const { isAuthenticated: isAuthenticatedEmployee } = useContext(AuthContextEmployee);
    const { isAuthenticated: isAuthenticatedClient } = useContext(AuthContextClient);
    const [scheduleInfo, setSchedule] = useState<SchedulingResponseDto[] | null>(null);
    const [paymentsInfo, setPayments] = useState<PaymentResponseDto[] | null>(null);


    const tokenFromCookie = Cookies.get('employeeInfo');
    const token = tokenFromCookie ? JSON.parse(tokenFromCookie) : null;

    const handleGetSchedulings = async () => {
        try {
            const allSchedule = await scheduleAdapter.getAllSchedulings(); 
            setSchedule(allSchedule);
            console.log("scheduleeee: " + JSON.stringify(scheduleInfo))
        }catch(error){
            console.log(error);
        }
    }

    const handleGetPayments = async () => {
        try {
            const allPayments = await paymentAdapter.getAllPayments(); 
            setPayments(allPayments);
            console.log("Paymentsssssss: " + JSON.stringify(paymentsInfo))
        }catch(error){
            console.log(error);
        }
    }


    useEffect(() => {   
        handleGetSchedulings();
        handleGetPayments();
    },[])

    const listaProdutos: { produto: string; cliente: string; estabelecimento: string; preco: number; }[] = []
    const listaScheduling: { servico: string; funcionario: string; cliente: string; }[] = [];

    useEffect(() => {
        paymentsInfo?.forEach(e => {
            listaProdutos.push({
                produto: e.product.name,
                cliente: e.client.name,
                estabelecimento: e.establishment.name,
                preco: e.product.value
            })
        });

        console.log(listaProdutos)

        scheduleInfo?.forEach(e => {
            listaScheduling.push({
                servico: e.service.specification,
                funcionario: e.employee.name,
                cliente: e.client.name,
            })
        })


    },[paymentsInfo, scheduleInfo])

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
                            {paymentsInfo && paymentsInfo.map((data) => (
                                <CardPedidoProduto 
                                    id={data.id}
                                    client={data.client.name}
                                    establishment={data.establishment.name}
                                    preco={data.product.value}
                                    service={data.product.name}
                                    status="Em Andamento"
                                    imgUrl=""
                                />
                            ))}
                            {scheduleInfo && scheduleInfo.map((data) => (
                                <CardPedidoServico 
                                    id={data.idSchedulig}
                                    client={data.client.name}
                                    establishment={data.employee.establishment.name}
                                    employee={data.employee.name}
                                    service={data.service.specification}
                                    status="Em Andamento"
                                    imgUrl=""
                                />
                            ))}
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
                        <CardPedidoProduto 
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
                            <CardPedidoServico 
                                
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
