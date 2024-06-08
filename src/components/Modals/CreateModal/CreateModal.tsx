import React, { useContext, useState } from "react";
import * as S from './createModal.styled';
import InputText from "../../Input/InputText/InputText";
import { PrimaryButton } from "../../Button/button.styled";
import { AuthContextEmployee } from "../../../contexts/User/AuthContextProviderEmployee";
import { EmployeeRequestDto } from "../../../utils/Users/Employee/employee.types";

type Props = {
    id?: string;
    titulo?: string;
};

const CreateModal: React.FC<Props> = ({ id, titulo }) => {
    const { handleCreateEmployee } = useContext(AuthContextEmployee);
    const [formData, setFormData] = useState<EmployeeRequestDto>({
        name: "",
        email: "",
        endereco: "",
        cep: "",
        funcionario: "",
        preco: "",
        status: "",
        descricao: ""
    });

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = event.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleClose = () => {
        const modal = document.getElementById("modal-adicionar");
        modal?.classList.remove("active");
        setFormData({
            name: "",
            email: "",
            endereco: "",
            cep: "",
            funcionario: "",
            preco: "",
            status: "",
            descricao: ""
        });
    };

    const handleSave = () => {
        handleCreateEmployee(formData);
    };

    return (
        <S.ModalSection id={id}>
            <S.ModalContainer>
                <S.ModalHeader>
                    <S.ModalImage />
                    <h1>Adicionar {titulo}</h1>
                </S.ModalHeader>
                <S.ModalBody>
                    <S.InputContainer>
                        <InputText
                            type="text"
                            onChange={handleChange}
                            label={`name do ${titulo}`}
                            theme="establishment"
                            value={formData.name}
                            placeholder={`name do ${titulo}....`}
                        />
                    </S.InputContainer>
                    {titulo === "Serviço" && (
                        <S.InputContainer>
                            <InputText
                                type="text"
                                onChange={handleChange}
                                label={`Funcionário do ${titulo}`}
                                theme="establishment"
                                value={formData.funcionario}
                                placeholder={`Funcionário do ${titulo}....`}
                            />
                        </S.InputContainer>
                    )}
                    <S.InputContainer>
                        <InputText
                            type="text"
                            onChange={handleChange}
                            label={`Email do ${titulo}`}
                            theme="establishment"
                            value={formData.email}
                            placeholder={`Email do ${titulo}....`}
                        />
                    </S.InputContainer>
                    <S.InputContainer>
                        <InputText
                            type="text"
                            onChange={handleChange}
                            label={`Endereço do ${titulo}`}
                            theme="establishment"
                            value={formData.endereco}
                            placeholder={`Endereço do ${titulo}....`}
                        />
                    </S.InputContainer>
                    <S.InputContainer>
                        <InputText
                            type="text"
                            onChange={handleChange}
                            label={`CEP do ${titulo}`}
                            theme="establishment"
                            value={formData.cep}
                            placeholder={`CEP do ${titulo}....`}
                        />
                    </S.InputContainer>
                    <S.InputContainer>
                        <InputText
                            type="number"
                            onChange={handleChange}
                            label={`Preço do ${titulo}`}
                            theme="establishment"
                            value={formData.preco}
                            placeholder={`Preço do ${titulo}....`}
                        />
                    </S.InputContainer>
                    <S.InputContainer>
                        <InputText
                            type="text"
                            onChange={handleChange}
                            label={`Status do ${titulo}`}
                            theme="establishment"
                            value={formData.status}
                            placeholder={`Status do ${titulo}....`}
                        />
                    </S.InputContainer>
                    <S.InputContainer>
                        <InputText
                            type="text"
                            onChange={handleChange}
                            label={`Descrição do ${titulo}`}
                            theme="establishment"
                            value={formData.descricao}
                            placeholder={`Descrição do ${titulo}....`}
                        />
                    </S.InputContainer>
                    <S.ButtonsContainer>
                        <S.ReturnButton onClick={handleClose}>
                            Voltar
                        </S.ReturnButton>
                        <PrimaryButton width="200px" onClick={handleSave}>
                            Finalizar
                        </PrimaryButton>
                    </S.ButtonsContainer>
                </S.ModalBody>
            </S.ModalContainer>
        </S.ModalSection>
    );
};

export default CreateModal;
