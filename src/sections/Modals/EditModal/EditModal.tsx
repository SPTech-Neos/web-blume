import React, {useContext, useState, useEffect} from "react";
import * as S from './editModal.styled';

import Cookies from "js-cookie";
import InputText from "../../../components/Input/InputText/InputText";
import { DangerButton, PrimaryButton } from "../../../components/Buttons/DefaultButton/DefaultButton";
import { AuthContextEmployee } from "../../../contexts/User/AuthContextProviderEmployee";

type Props = {
    id?: string;
    load?: boolean;
}

const EditModal: React.FC<Props> = ({id}) => {
    const { isAuthenticated, handleUpdateEmployee } = useContext(AuthContextEmployee);

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [name, setName] = useState('');

    const handleNameChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setName(event.target.value);
    };
    
    const handleEmailChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setEmail(event.target.value);
    };
    
    const handlePasswordChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setPassword(event.target.value);
    };
    
    const closeModal = () => {
        const editModal = document.getElementById("editModal");
        setName("");
        setEmail("");
        setPassword("");
        editModal?.classList.remove("active");
    }

    const tokenFromCookie = Cookies.get('employeeInfo');

    
    const handleUpdateEmployeeData = async () => {
        try {
            const updatedFields = { name, email, password };
            await handleUpdateEmployee(updatedFields);
            closeModal();
        } catch (error) {
            console.error("Erro ao atualizar funcionário:", error);
        }
    };
    useEffect(() => {
        if (tokenFromCookie) {
            console.log("Token de autenticação:", tokenFromCookie);
            console.log("LOGADO: " + isAuthenticated);
        }
    }, [tokenFromCookie, isAuthenticated, handleUpdateEmployee]);
    

    return (
        <S.EditModalContainer id={id}>
        <S.EditModalBody>

            <S.ContainerAtencao>
                <S.TracoAtencao />
                <S.TitleAtencao> 
                    Dados Pessoais 
                </S.TitleAtencao>
                <S.TracoAtencao />
            </S.ContainerAtencao>

            <S.InputWrapper>
               
                <InputText type="name" label="Nome" theme="establishment" placeholder="Kevin Rodrigues..." value={name} onChange={handleNameChange} />
                
                <InputText type="email" label="Email" theme="establishment" placeholder="email@example.com"  value={email} onChange={handleEmailChange} />
                    
                <InputText type="password" label="Senha" theme="establishment" placeholder="*****"  value={password} onChange={handlePasswordChange} />
            </S.InputWrapper>
            
            <S.ButtonWrapper>
                <DangerButton width="180px" color="#bb1b29" onClick={closeModal}>
                    Cancelar
                </DangerButton>

                <PrimaryButton width="180px" onClick={handleUpdateEmployeeData}>
                    Atualizar
                </PrimaryButton>
            </S.ButtonWrapper>
        </S.EditModalBody>
    </S.EditModalContainer>
    );
}
    

export default EditModal;