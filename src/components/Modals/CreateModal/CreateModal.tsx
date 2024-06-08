import React, { Dispatch, SetStateAction, useContext, useState } from "react";
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
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [description, setDescription] = useState("");

    // const [formData, setFormData] = useState<EmployeeRequestDto>({
    //     name: "",
    //     email: "",
    //     password: "",
    //     employeeType: 0,
    //     fkEstablishment: 0
    // });

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>, setStateFunction: Dispatch<SetStateAction<string>>) => {
        // const { name, value } = event.target;
        // console.log(name)
        // setFormData({ ...formData, [name]: value });
        setStateFunction(event.target.value);
    };

    const handleClose = () => {
        const modal = document.getElementById("modal-adicionar");
        modal?.classList.remove("active");
        // setFormData({
        //     name: "",
        //     email: "",
        //     password: "",
        //     description: "",
        //     employeeType: 0,
        //     fkEstablishment: 0
        // });
    };

    const handleSave = () => {
        console.log("sadsadaddasda")
        if(titulo == "Funcionário"){
            console.log("handle save")
            
            const employeeNew = {
                name: name, 
                email: email, 
                password: password, 
                fkEstablishment: 1, 
                employeeType: 1 
            }

            if(employeeNew){
                console.log("entrei no if")
                const employeeEstab = handleCreateEmployee(employeeNew);  
                console.log("emplyoyee criando" + JSON.stringify(employeeEstab));
            }

        }      
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
                            onChange={(e => handleChange(e, setName))}
                            label={`Nome do ${titulo}`}
                            theme="establishment"
                            value={name}
                            placeholder={`Nome do ${titulo}....`}
                        />
                    </S.InputContainer>
                    {/* {titulo === "Serviço" && (
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
                    )} */}
                    <S.InputContainer>
                        <InputText
                            type="text"
                            onChange={(e => handleChange(e, setEmail))}
                            label={`Email do ${titulo}`}
                            theme="establishment"
                            value={email}
                            placeholder={`Email do ${titulo}....`}
                        />
                    </S.InputContainer>
                    <S.InputContainer>
                        <InputText
                            type="password"
                            onChange={(e => handleChange(e, setPassword))}
                            label={`Senha do ${titulo}`}
                            theme="establishment"
                            value={password}
                            placeholder={`Senha do ${titulo}....`}
                        />
                    </S.InputContainer>
                    {/* {titulo != "Funcionário" && (
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
                    )} */}
                    {/* {titulo != "Funcionário" && (
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
                    )} */}
                    <S.InputContainer>
                        <InputText
                            type="text"
                            onChange={(e => handleChange(e, setDescription))}
                            label={`Descrição do ${titulo}`}
                            theme="establishment"
                            value={description}
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
