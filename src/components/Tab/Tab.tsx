import React, {useEffect, useState} from "react";
import * as S from  './tab.styled';

import TabOption from "../TabOption/TabOption";
import { ServiceCard, ProductCard } from "../Cards/ServiceCard/ServiceCard";
import About from "../About/About";
import Badge from "../Badges/AvaliationBadge/AvaliationBadge";
import { ProductResponseDto } from "../../utils/Products/Product/product.types";
import { ServiceResponseDto } from "../../utils/Products/Service/service.types";
import { ServiceAdapter } from "../../adapters/Products/Service/Service";
import { ProductAdapter } from "../../adapters/Products/Product/Product";

const Tab: React.FC<S.SectionProps> = ({theme, establishmentInfo}) => {

    const [result, setResult] = useState("");

    const [servicesInfo, setServicesInfo] = useState<ServiceResponseDto[] | null>(null);
    const serviceAdapter = new ServiceAdapter;

    const [productsInfo, setProductsInfo] = useState<ProductResponseDto[] | null>(null);
    const productAdapter = new ProductAdapter;

    // LOAD DE DADOS DA PÁGINA =======================
    useEffect(() => {
        if (establishmentInfo.id) {
            const fetchEstablishmentData = async () => {
              const serviceData = await serviceAdapter.getServicesByEstablishmentId(Number(establishmentInfo.id));
              setServicesInfo(serviceData);

              const productData = await productAdapter.getProductsByEstablishmentId(Number(establishmentInfo.id));
              setProductsInfo(productData);
            };
            fetchEstablishmentData();
        }
    }, [establishmentInfo.id]);
    
    const handleClick = (event: React.MouseEvent<HTMLDivElement>) => {
        const elementsActive = document.getElementsByClassName("optionsTab");
        const myElement = document.getElementById(`${(event.target as HTMLDivElement).id}`);
        
    
        if (elementsActive) {
            if (myElement) {
                for (let i = 0; i < elementsActive.length; i++) {
                    (elementsActive[i] as HTMLDivElement).classList.remove('active');
                }
    
                myElement.classList.add('active');
            }
        }
    
        setResult((event.target as HTMLDivElement).id);
    }

    return (
        <S.ContainerTab direction='column'>
            <S.TabHeader id="TabHeader">
                <TabOption id="servico" className="optionsTab" titulo="Serviços" theme={theme} onClick={handleClick} />

                <TabOption id="produto" className="optionsTab" titulo="Produtos" theme={theme} onClick={handleClick} />

                <TabOption id="sobre" className="optionsTab" titulo="Sobre" theme={theme} onClick={handleClick} />
            </S.TabHeader>
            <S.TabBody>
                {result == ''? (
                    <div>
                        <span>Selecione uma Opção</span>
                    </div>
                ):
                    <S.ResultBody id="section-escolhida">
                        {result === 'servico'? (
                            establishmentInfo && servicesInfo ? (
                                Array.isArray(servicesInfo) && servicesInfo.length > 0 ? 
                                    servicesInfo.map((service: ServiceResponseDto, index: number) => (
                                        <ServiceCard key={index} id={service.serviceId - 1 } theme={theme} nome={service.specification} valor={service.price} img={service.imgUrl}/>
                                    ))
                                : "Sem serviços no momento"
                            ) : null
                    
                        ) : result === 'produto' ? (
                            establishmentInfo && productsInfo ? (
                                Array.isArray(productsInfo) && productsInfo.length > 0 ? 
                                    productsInfo.map((product: ProductResponseDto, index: number) => (
                                        <ProductCard key={index} id={Number(product.id)} nome={product.name} valor={product.value} img={product.imgUrl} />
                                    ))
                                : "Sem serviços no momento"
                            ) : null
                        ) : (
                            <About establishmentInfo={establishmentInfo == null ? null : establishmentInfo} imgUrl={establishmentInfo.imgUrl}>
                                {establishmentInfo && servicesInfo && (
                                    Array.isArray(servicesInfo)
                                        ? servicesInfo.slice(0, 2).map((service: ServiceResponseDto, index: number) => (
                                            console.log(establishmentInfo),
                                            <Badge key={index}>{service.specification}</Badge>
                                        ))
                                        : <span>"Sem serviços"</span>
                                )}
                            </About>
                        )}
                    </S.ResultBody>
                }
            </S.TabBody>    
        </S.ContainerTab>
    );  
};

export default Tab;