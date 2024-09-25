/* eslint-disable react-hooks/exhaustive-deps */
import React, { useContext, useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import Cookies from 'js-cookie';
import * as S from './profileEstablishment.styled';

// import { NavLink } from 'react-router-dom';
import { CaretLeft } from "phosphor-react";

// import { EmployeeResponseDto } from "../../utils/Employee/employee.types";

import HeaderProfile from "../../components/Headers/HeaderProfile/HeaderProfile";
import Tab from "../../components/Tab/Tab";
import EditModal from "../Modals/EditModal/EditModal";
import Badge from '../../components/Badges/AvaliationBadge/AvaliationBadge';
import Logo from "../../components/Images/Logo/Logo";
import Modal from "../../components/Modals/FormModal/Modal";
import { ModalProps } from "../../components/Modals/FormModal/modal.styled";

import { AuthContextEmployee } from "../../contexts/User/AuthContextProviderEmployee";

import { colors as c, Themes } from '../../styles/Colors';
import { EstablishmentResponseDto } from "../../utils/Establishment/establishment.types";

import { EstablishmentAdapter } from "../../adapters/Establishment/Establishment";
import { ServiceAdapter } from "../../adapters/Products/Service/Service";
import { ServiceResponseDto } from "../../utils/Products/Service/service.types";
import { EmployeeResponseDto } from "../../utils/Users/Employee/employee.types";


const ProfileB2B: React.FC = () => {
    const { establishmentId } = useParams<{establishmentId: string}>();

    const navigate = useNavigate();
    
    function getTheme(theme: string) {
        return theme === "B2C"? Themes.client : Themes.establishment;
    }

    const { isAuthenticated: isAuthenticatedEmployee } = useContext(AuthContextEmployee);
  
    // Buscando dados nos cookies
    const CookieEmployeeData = Cookies.get('employeeInfo');
    const CookieEstablishmentData = Cookies.get('establishmentInfo');

    // Convertendo para JSON
    const employeeData = CookieEmployeeData ? JSON.parse(CookieEmployeeData) as EmployeeResponseDto : null;
    const establishmentData = CookieEstablishmentData ? JSON.parse(CookieEstablishmentData) as EstablishmentResponseDto : null;

    // Se o establishmentData (vindo dos cookies) não for carregado, pois é um cliente acessando
    // Fazer a requisição setando establishmentData useState
    const [servicesInfo, setServicesInfo] = useState<ServiceResponseDto[] | null>(null);
    const [establishmentInfo, setEstablishmentInfo] = useState<EstablishmentResponseDto | null>(null);

    const establishmentAdapter = new EstablishmentAdapter();
    const serviceAdapter = new ServiceAdapter();

    // LOAD DE DADOS DA PÁGINA =======================
    useEffect(() => {
        if (establishmentId) {
            const fetchEstablishmentData = async () => {
                try {
                    const fetchedEstablishmentInfo = await establishmentAdapter.getEstablishmentById(Number(establishmentId));
                    setEstablishmentInfo(fetchedEstablishmentInfo);

                    const serviceData = await serviceAdapter.getServicesByEstablishmentId(Number(establishmentId));
                    setServicesInfo(serviceData);
                } catch (error) {
                    console.error("Error fetching establishment data:", error);
                }
            };

            fetchEstablishmentData();
        }
    }, [establishmentId]);


    // MODAL =======================
    const [modalProps, setModalProps] = useState<ModalProps | null>(null);
    const showModal = () => {
        const editModal = document.getElementById("editModal");
        editModal?.classList.add("active");
        console.log(editModal);
    };

    const openDeleteModal = () => {
        setModalProps({
            type: "error",
            message: "Tem certeza que deseja excluir esse estabelecimento?",
            isOpen: true,
            linkTo: "/",
            onConfirm: handleDeleteConfirmation
        });
    };

    const handleDeleteConfirmation = async () => {
        if (employeeData) {
            establishmentAdapter.delete(employeeData.establishment.id);
            setModalProps(null);
            navigate("/");
        }
    };
    
    if(isAuthenticatedEmployee){
        return (
            employeeData && establishmentData ? (
                <S.ProfileB2BSection>
                    <HeaderProfile />
                    <S.ContainerProfile direction="column">
    
    
                        <EditModal id="editModal"/>
    
                        <S.Perfil tipoperfil="B2B" username={establishmentData.name} />
                        <Tab theme='establishment' establishmentInfo={establishmentData}/>
                        <S.ContainerAtencao>
                            <S.ContainerTitle>
                                <S.TracoAtencao />
                                <S.TitleAtencao>
                                    Área de atenção
                                </S.TitleAtencao>
                                <S.TracoAtencao />
                            </S.ContainerTitle>
                            <S.ContainerAtencaoButtons>
                                    <S.ButtonDelete width="180px" color={c.error} onClick={openDeleteModal}>
                                          Excluir
                                    </S.ButtonDelete>
                                    <S.ButtonUpdate width="180px" color={c.warning} onClick={showModal}>
                                        Editar
                                    </S.ButtonUpdate>
                            </S.ContainerAtencaoButtons>
                        </S.ContainerAtencao>
                    </S.ContainerProfile>
                    {modalProps && (
                        <Modal
                            type={modalProps.type}
                            message={modalProps.message}
                            isOpen={modalProps.isOpen}
                            linkTo={modalProps.linkTo}
                            onConfirm={modalProps.onConfirm}
                            onClose={() => setModalProps(null)}
                        />
                    )}
                </ S.ProfileB2BSection>
            ) : null
        );
    } else {
        return (
            establishmentInfo ? (
                <S.ProfileB2BSection>
                    <S.ContainerProfile direction="column">
                        <S.HeaderProfile>
                            <S.NavBody>
                                <S.NavItem>
                                    <S.NavLink  to= '/feed' className={({isActive})=>isActive? "nav-link active" : "nav-link"}>
                                        <CaretLeft size={22} />
                                    </S.NavLink>
                                </S.NavItem>
                            </S.NavBody>
                            <Logo />
                        </S.HeaderProfile>
                        <S.PerfilContainer>
                            <S.Perfil tipoperfil="B2C" username={establishmentInfo.name} profile={establishmentInfo.imgUrl} />
                            <S.AvaliacaoContainer>
                                <Badge>
                                    <S.StarImg weight="fill" color={getTheme("B2C").mainColor}></S.StarImg>
                                    <span>{establishmentInfo.media}</span>
                                </Badge>

                                {establishmentInfo && servicesInfo && (
                                    Array.isArray(servicesInfo)
                                        ? servicesInfo.slice(0, 2).map((service: ServiceResponseDto, index: number) => (
                                            <Badge key={index}>{service.specification}</Badge>
                                        ))
                                        : null  
                                )}

                            </S.AvaliacaoContainer>
                        </S.PerfilContainer>
                        <S.Searchbar placeholderText="Salão para cabelos cacheados..."></S.Searchbar>
                        <Tab theme='client' establishmentInfo={establishmentInfo}/>
                    </S.ContainerProfile>
                </S.ProfileB2BSection>
            ) : null
        )
    }

    
};

export default ProfileB2B;