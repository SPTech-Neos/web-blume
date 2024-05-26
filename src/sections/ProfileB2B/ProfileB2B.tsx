import React, { useContext, useEffect, useState } from "react";
import Cookies from 'js-cookie';

import { colors as c } from '../../styles/Colors';

import { EmployeeResponseDto } from "../../utils/Employee/employee.types";

import * as S from './profileB2B.styled';
import Profile from "../../components/Profile/Profile";
import Tab from "../../components/Tab/Tab";
import EditModal from "../Modals/EditModal/EditModal";

import Modal from "../../components/Modals/FormModal/Modal";
import { ModalProps } from "../../components/Modals/FormModal/modal.styled";

import { AuthContextEmployee } from "../../contexts/User/AuthContextProviderEmployee";
import { useNavigate } from "react-router-dom";

const ProfileB2B: React.FC = () => {
    const navigate = useNavigate();
    const { isAuthenticated, handleDeleteEmployee } = useContext(AuthContextEmployee);

    const tokenFromCookie = Cookies.get('employeeInfo');
    const token: EmployeeResponseDto = tokenFromCookie ? JSON.parse(tokenFromCookie) : null;

    const [modalProps, setModalProps] = useState<ModalProps | null>(null);

    useEffect(() => {
        if (tokenFromCookie) {
            console.log("Token de autenticação:", tokenFromCookie);
            console.log("LOGADO: " + isAuthenticated);
        }
    }, [tokenFromCookie, isAuthenticated]);

    const showModal = () => {
        const editModal = document.getElementById("editModal");
        editModal?.classList.add("active");
        console.log(editModal);
    };

    const openDeleteModal = () => {
        setModalProps({
            type: "error",
            message: "Tem certeza que deseja excluir a conta?",
            isOpen: true,
            linkTo: "/",
            onConfirm: handleDeleteConfirmation
        });
    };

    const handleDeleteConfirmation = () => {
        if (token) {
            handleDeleteEmployee(token.employeeId);
            setModalProps(null);
            navigate("/");
        }
    };

    return (
        token ? (
            <S.ProfileB2BSection>
                <S.ContainerProfile direction="column">
                    <EditModal id="editModal" />
                    <Profile tipoperfil="B2B" username={token.establishment.name} />
                    <Tab />
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
            </S.ProfileB2BSection>
        ) : null
    );
};

export default ProfileB2B;
