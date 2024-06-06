import React, {useState} from "react";
import * as S from './createModal.styled';

import InputText from "../../Input/InputText/InputText";
import { PrimaryButton } from "../../Button/button.styled";

type props = {
    id?: string
    titulo?: string
}

const CreateModal:React.FC<props> = ({id, titulo}) => {

    const[nome, setNome] = useState("");

    const handleChangeName = (event: React.ChangeEvent<HTMLInputElement>) => {
        setNome(event.target.value);
    }

    const[email, setEmail] = useState("");

    const handleChangeEmail = (event: React.ChangeEvent<HTMLInputElement>) => {
        setEmail(event.target.value);
    }

    const[endereco, setEndereco] = useState("");

    const handleChangeEndereco = (event: React.ChangeEvent<HTMLInputElement>) => {
        setEndereco (event.target.value);
    }

    const[cep, setCep] = useState("");

    const handleChangeCep = (event: React.ChangeEvent<HTMLInputElement>) => {
        setCep (event.target.value);
    }

    const[funcionario, setFunc] = useState("");

    const handleChangeFunc = (event: React.ChangeEvent<HTMLInputElement>) => {
        setFunc(event.target.value);
    }

    const[preco, setPreco] = useState("");

    const handleChangePreco = (event: React.ChangeEvent<HTMLInputElement>) => {
        setPreco(event.target.value);
    }

    const[status, setStatus] = useState("");

    const handleChangeStatus = (event: React.ChangeEvent<HTMLInputElement>) => {
        setStatus(event.target.value);
    }

    const handleClose = () => {
        const modal = document.getElementById("modal-adicionar");
        modal?.classList.remove("active");

        setCep("");
        setEmail("");
        setEndereco("");
        setFunc("");
        setNome("");
        setPreco("");
        setStatus("");
    }

    if(titulo == "Funcionário"){
        return (
            <S.ModalSection id={id}>
                <S.ModalContainer>
    
                    <S.ModalHeader>
                        <S.ModalImage />
                        <h1>Adicionar {titulo}</h1>
                    </S.ModalHeader>
    
                    <S.ModalBody>
                        <S.InputContainer>
                            <S.Label>Nome do {titulo}</S.Label>
                            <InputText type="name" onChange={handleChangeName} value={nome} placeholder={"Nome do " + titulo + "...."} >
                            </InputText>
                        </S.InputContainer>
    
                        <S.InputContainer>
                            <S.Label>E-mail do {titulo}</S.Label>
                            <InputText type="name" onChange={handleChangeEmail} value={email} placeholder={"E-mail do " + titulo + "...."} >
                            </InputText>
                        </S.InputContainer>
    
                        <S.InputContainer>
                            <S.Label>Endereço do {titulo}</S.Label>
                            <InputText type="name" onChange={handleChangeEndereco} value={endereco} placeholder={"Endereço do " + titulo + "...."} >
                            </InputText>
                        </S.InputContainer>
                        
                        <S.InputContainer>
                            <S.Label>CEP do {titulo}</S.Label>
                            <InputText type="name" onChange={handleChangeCep} value={cep} placeholder={"CEP do " + titulo + "...."} >
                            </InputText>
                        </S.InputContainer>
    
                        <S.ButtonsContainer>
                            <S.ReturnButton onClick={handleClose}>
                                Voltar
                            </S.ReturnButton>
                            <PrimaryButton width="200px">
                                Finalizar
                            </PrimaryButton>
                        </S.ButtonsContainer>
                    </S.ModalBody>
    
                </S.ModalContainer>
            </S.ModalSection>
        );
    }else{
        return (
            <S.ModalSection id={id}>
                <S.ModalContainer>

                    <S.ModalHeader>
                        <S.ModalImage />
                        <h1>Adicionar {titulo}</h1>
                    </S.ModalHeader>

                    <S.ModalBody>
                        <S.InputContainer>
                            <S.Label>Nome do {titulo}</S.Label>
                            <InputText type="name" onChange={handleChangeName} value={nome} placeholder={"Nome do " + titulo + "...."} >
                            </InputText>
                        </S.InputContainer>

                        <S.InputContainer>
                            <S.Label>Preço do {titulo}</S.Label>
                            <InputText type="number" onChange={handleChangePreco} value={preco} placeholder={"Preço do " + titulo + "...."} >
                            </InputText>
                        </S.InputContainer>

                        {titulo == "Serviço"?
                            <S.InputContainer>
                                <S.Label>Funcionário do {titulo}</S.Label>
                                <InputText type="name" onChange={handleChangeFunc} value={funcionario} placeholder={"Funcionário do " + titulo + "...."} >
                                </InputText>
                            </S.InputContainer>
                        : null}
                        <S.InputContainer>
                            <S.Label>Status do {titulo}</S.Label>
                            <InputText type="name" onChange={handleChangeStatus} value={status} placeholder={"Status do " + titulo + "...."} >
                            </InputText>
                        </S.InputContainer>

                        <S.ButtonsContainer>
                            <S.ReturnButton onClick={handleClose}>
                                Voltar
                            </S.ReturnButton>
                            <PrimaryButton width="200px">
                                Finalizar
                            </PrimaryButton>
                        </S.ButtonsContainer>
                    </S.ModalBody>

                </S.ModalContainer>
            </S.ModalSection>
        );
    }
}

export default CreateModal;