import React, { Dispatch, SetStateAction, useContext, useState, useEffect } from "react";
import * as S from './createModal.styled';
import InputText from "../../Input/InputText/InputText";
import { PrimaryButton } from "../../Button/button.styled";
import { AuthContextEmployee } from "../../../contexts/User/AuthContextProviderEmployee";
import { ServiceTypeAdapter } from "../../../adapters/Products/Service/ServiceType";
import { ServiceTypeResponseDto } from "../../../utils/Products/Service/serviceType.types";
import { ServiceAdapter } from "../../../adapters/Products/Service/Service";

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
    const [preco, setPreco] = useState("");
    const [funcionario, setFuncionario] = useState("");
    const [status, setStatus] = useState("");
    const [serviceType, setServiceType] = useState("");

    const [serviceTypeInfo, setServiceTypeInfo] = useState<ServiceTypeResponseDto[] | null>(null);

    const adapterServiceType = new ServiceTypeAdapter;

    const handleGetServiceTypes = async () => {
        try{
            const result = await adapterServiceType.getAllServicesType();
            console.log("Resultado: " + result);
            if(result){
                setServiceTypeInfo(result);
                console.log(serviceTypeInfo)
            }
        }catch (error) {
            console.log(error);
        }
    }

    useEffect(() => {
        handleGetServiceTypes();
    }, []);


    const handleChange = (event: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>, setStateFunction: Dispatch<SetStateAction<string>>) => {
        setStateFunction(event.target.value);
    };

    const handleClose = () => {
        const modal = document.getElementById("modal-adicionar");
        modal?.classList.remove("active");
        console.log(serviceType);
        setName("")
        setDescription("")
        setEmail("")
        setPassword("")
        setFuncionario("")
        setPreco("")
        setServiceType("")
        setStatus("")
    };

    const handleReload = () => {
        window.location.reload();
    }

    const adapterService = new ServiceAdapter;

    const handleSave = () => {

        if(titulo == "Serviço"){

            const serviceNew = {
                specification: name,
                serviceType: Number(serviceType)
            }

            if(serviceNew){
                console.log("entrei no if serviço")
                const serviceCreated = adapterService.register(serviceNew);  
                console.log("emplyoyee criando" + JSON.stringify(serviceCreated));
            }


        }


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

        handleClose();
        handleReload();
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
                            label={titulo=="Serviço" ? `Especificação do ${titulo}`: `Nome do ${titulo}`}
                            theme="establishment"
                            value={name}
                            placeholder={`Nome do ${titulo}....`}
                        />
                    </S.InputContainer>
                    {titulo === "Serviço" && (
                        <S.InputContainer>
                            <InputText
                                type="text"
                                onChange={(e => handleChange(e, setFuncionario))}
                                label={`Funcionário do ${titulo}`}
                                theme="establishment"
                                value={funcionario}
                                placeholder={`Funcionário do ${titulo}....`}
                            />
                        </S.InputContainer>
                    )}
                    {titulo === "Funcionário" && (
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
                    )}
                    {titulo === "Serviço" && (
                        <S.SelectType name="Selecione o tipo do serviço" onChange={(e => handleChange(e, setServiceType))}>
                            <option value="" disabled selected>Selecione o tipo do serviço....</option>
                            {serviceTypeInfo && serviceTypeInfo.map((data) => (
                                <option  value={data.id}> {data.name} </option>
                            ))}
                        </S.SelectType>
                    )}
                    {titulo === "Funcionário" && (
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
                    )}
                    {titulo != "Funcionário" && (
                    <S.InputContainer>
                        <InputText
                            type="number"
                            onChange={(e => handleChange(e, setPreco))}
                            label={`Preço do ${titulo}`}
                            theme="establishment"
                            value={preco}
                            placeholder={`Preço do ${titulo}....`}
                        />
                    </S.InputContainer>
                    )}
                    {titulo != "Funcionário" && (
                        <S.InputContainer>
                            <InputText
                                type="text"
                                onChange={(e => handleChange(e, setStatus))}
                                label={`Status do ${titulo}`}
                                theme="establishment"
                                value={status}
                                placeholder={`Status do ${titulo}....`}
                            />
                        </S.InputContainer>
                    )}
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
