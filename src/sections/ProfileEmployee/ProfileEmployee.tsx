import React, { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import Cookies from 'js-cookie';

import * as S from '../ProfileClient/profileClient.styled';
import * as E from './profileEmployee.styled';

// import Logo from '../../components/Images/Logo/Logo';
import HeaderProfile from "../../components/Headers/HeaderProfile/HeaderProfile";
import Profile from "../../components/Profile/Profile";
import EditModal from "../Modals/EditModal/EditModal";

// import { AuthContextClient } from "../../contexts/User/AuthContextProviderClient";
import { AuthContextEmployee } from "../../contexts/User/AuthContextProviderEmployee";

import { colors as c } from '../../styles/Colors';

import Modal from "../../components/Modals/FormModal/Modal";
import { ModalProps } from "../../components/Modals/FormModal/modal.styled";
import { EmployeeResponseDto } from "../../utils/Users/Employee/employee.types";

const ProfileEmployee: React.FC = () => {
    const navigate = useNavigate();

    const { isAuthenticated: isAuthenticatedEmployee, handleDeleteEmployee} = useContext(AuthContextEmployee);

    // LOAD DA PAGINA;
    const tokenFromCookie = Cookies.get('employeeInfo');
    const employeeData = tokenFromCookie ? JSON.parse(tokenFromCookie) as EmployeeResponseDto: null;

    const [modalProps, setModalProps] = useState<ModalProps | null>(null);

    const showModal = () => {
        const editModal = document.getElementById("editModal");
        editModal?.classList.add("active");
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
        if (employeeData) {
            handleDeleteEmployee(employeeData.id);
            setModalProps(null);
            navigate("/");
        }
    };

    return (
        <E.ContainerProfile direction="column">
          <HeaderProfile />
      
          <EditModal id="editModal" tipo="employee" />
      
          {isAuthenticatedEmployee ? (
            <>
              <E.ProfileContainer>
                <h1>PERFIL</h1>
                <Profile profile={employeeData?.imgUrl} username={employeeData?.name} />
              </E.ProfileContainer>
              <S.InfoContainer>
                <S.Infos>
                  <E.LabelInfo>E-mail</E.LabelInfo>
                  <S.TextInfo>{employeeData?.email}</S.TextInfo>
      
                  <E.LabelInfo>Endereço</E.LabelInfo>
                  <S.TextInfo>{employeeData?.local.address.publicPlace}</S.TextInfo>
      
                  <E.LabelInfo>CEP</E.LabelInfo>
                  <S.TextInfo>{employeeData?.local.address.zipCode}</S.TextInfo>
                </S.Infos>
              </S.InfoContainer>
              <S.ContainerAtencao>
                <S.ContainerTitle>
                  <S.TracoAtencao />
                  <S.TitleAtencao>Área de atenção</S.TitleAtencao>
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
              </S.ContainerAtencao>
            </>
          ) : (
            <E.ProfileContainer>
              <p>PRECISA ESTAR LOGADO</p>
            </E.ProfileContainer>
          )}
        </E.ContainerProfile>
      );
};

export default ProfileEmployee;