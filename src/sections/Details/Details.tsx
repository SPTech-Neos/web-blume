import React, { useEffect, useState } from "react";
import * as S from './details.styled';
import Logo from "../../components/Images/Logo/Logo";
import { PrimaryButton as Button } from "../../components/Buttons/DefaultButton/DefaultButton";
import { CaretLeft } from "phosphor-react";
import Modal from "../../components/Modals/ChooseModal/ChooseModal";
import Schedule from "../../components/Modals/ScheduleModal/ScheduleModal";
import { ProductAdapter } from "../../adapters/Products/Product/Product";
import { ServiceAdapter } from "../../adapters/Products/Service/Service";
import { ProductResponseDto } from "../../utils/Products/Product/product.types";
import { ServiceResponseDto } from "../../utils/Products/Service/service.types";
import { useParams } from "react-router-dom";
 
const Details: React.FC<S.detailsProps> = () => {

    const { type, id } = useParams();

    const openModal = () => {
        console.log("estou aqui");
        const editModal = document.getElementById("editModal");
        console.log(editModal);
        editModal?.classList.add("active-modal");
    }

    const [productInfo, setProductInfo] = useState<ProductResponseDto | null>(null);
    const [serviceInfo, setServiceInfo] = useState<ServiceResponseDto | null>(null);

    const productAdapter = new ProductAdapter;
    const serviceAdapter = new ServiceAdapter;

    // LOAD PRODUTO/SERVIÇO =========================
    useEffect(() => {
        if (type === "product" && id) {

            const fetchProductData = async () => {
              const data = await productAdapter.getProductById(Number(id));
              setProductInfo(data);
            };
            fetchProductData();

        } else if (type === "service" && id) {

            const fetchServiceData = async () => {
                const data = await serviceAdapter.getServiceById(Number(id));
                setServiceInfo(data);
              };
              fetchServiceData();

        }

    }, []);

    return (
        productInfo || serviceInfo ? (
            <S.DetailsSection>
                <Schedule id="schedule" />
                <Modal id="editModal" />   

                <S.DetaisHeader>
                <S.NavBody>

                    <S.NavItem>
                        <S.NavLink  to= '/feed' className={({isActive})=>isActive? "nav-link active" : "nav-link"}>
                            <CaretLeft size={22} />
                        </S.NavLink>
                    </S.NavItem>

                </S.NavBody>
                <Logo />

                </S.DetaisHeader>

                <S.DetailsContainer direction="column">

                    <S.DetailsProfile>

                        <S.DetailsImgContainer theme="client">

                            <S.DetailsImg />
                            <S.RatingStar weight="fill"/>
                            <span>{(Math.random() + 100).toFixed(0)} Avaliações</span>

                        </S.DetailsImgContainer>

                        <S.DetailsInfoContainer>
                            <S.NameInfoContainer>
                                <h1>Nome do serviço/produto</h1>

                                <S.BadgeContainer>
                                    <S.BadgeService>Deixar</S.BadgeService>
                                    <S.BadgeService>Dinamico</S.BadgeService>
                                </S.BadgeContainer>

                                <S.ProfileInfoContainer>
                                    <S.ProfileImg />
                                    <h3>Nome do estabelecimento</h3>
                                </S.ProfileInfoContainer>

                                <S.PrecificacaoContainer>
                                    <h1>R$ XXXXXX</h1>
                                    <Button width="180px" size="md" onClick={openModal}>Comprar</Button>
                                </S.PrecificacaoContainer>
                            </S.NameInfoContainer>
                        </S.DetailsInfoContainer>
                    </S.DetailsProfile>

                    <S.DetailsDesc>
                        <S.DescContainer>
                            <h1>
                                Descrição:
                            </h1>
                            <S.ContainerDescText>
                                <span>
                                Descrição do item. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod  tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim  veniam, quis nostrud.
                                </span>
                            </S.ContainerDescText>
                        </S.DescContainer>
                        <S.CardContainer>
                            <S.CardDesc titulo="teste" texto="aaaaaaa">
                                <S.ProfileImg />
                            </S.CardDesc>
                        </S.CardContainer>
                    </S.DetailsDesc>
                    
                </S.DetailsContainer>
            </S.DetailsSection>) : null
    );
} 

export default Details;