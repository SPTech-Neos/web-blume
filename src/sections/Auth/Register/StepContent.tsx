import React, { useState } from "react";
import * as S from "./register.styled";
import InputText from "../../../components/Input/InputText/InputText";
import InputContainer from "../../../components/Input/InputContainer/InputContainer";
import InputImage from "../../../components/Input/InputImage/InputImage";
import Dropdown from "../../../components/Input/Dropdown/Dropdown";
import CategorySelector from "./CategorySelector";

import { Column } from "../../../components/Input/InputImage/inputImage.styled";

interface StepContentProps {
  step: number;
  acc: string;
}

const StepContent: React.FC<StepContentProps> = ({ step, acc }) => {
    const [fields, setFields] = useState({
        cnpj: "",
        cep: ""
    });

    // Função para atualizar o valor do campo
    const handleChange = (e: React.ChangeEvent<HTMLInputElement>, field: string) => {
        const value = e.target.value.replace(/[^\d]/g, '');
        setFields({
            ...fields,
            [field]: e.target.value
        });
    };


  switch (step) {
    case 1: 
        return (
        <S.FormPart>
          <InputText
            theme={acc}
            label="Nome do Estabelecimento"
            type="text"
            placeholder="Casa da Mãe Joana"
            onChange={function (): void {
              throw new Error("Function not implemented.");
            }}
          />
          <InputText
            theme={acc}
            label="CNPJ"
            type="text"
            mask="99.999.999/9999-99"
            placeholder="99.999.999/9999-99"
            value={fields.cnpj}
            onChange={(e) => handleChange(e, 'cnpj')}
          />
          <InputContainer>
            <InputText
              theme={acc}
              size="half"
              label="Horário de Entrada"
              type="time"
              onChange={function (): void {
                throw new Error("Function not implemented.");
              }}
            />
            <InputText
              theme={acc}
              size="half"
              label="Horário de Saída"
              type="time"
              onChange={function (): void {
                throw new Error("Function not implemented.");
              }}
            />
          </InputContainer>
          <S.FormPartSmall>
            <InputText
              theme={acc}
              size="full"
              label="CEP"
              placeholder="01414-001"
              mask="99999-999"
              type="text"
              value={fields.cep}
              onChange={(e) => handleChange(e, 'cep')}
            />
            <InputContainer>
              <InputText
                theme={acc}
                size="big"
                label="Logradouro"
                placeholder="Rua Haddock Lobo"
                type="text"
                onChange={function (): void {
                  throw new Error("Function not implemented.");
                }}
              />
              <InputText
                theme={acc}
                size="small"
                label="Número"
                placeholder="575"
                type="text"
                onChange={function (): void {
                  throw new Error("Function not implemented.");
                }}
              />
            </InputContainer>
            <InputContainer>
              <Dropdown
                theme={acc}
                size="small"
                label="Estado"
                placeholder="UF"
                list={[
                  "AC",
                  "AL",
                  "AM",
                  "AP",
                  "BA",
                  "CE",
                  "DF",
                  "ES",
                  "GO",
                  "MA",
                  "MG",
                  "MS",
                  "MT",
                  "PA",
                  "PB",
                  "PE",
                  "PI",
                  "PR",
                  "RJ",
                  "RN",
                  "RO",
                  "RR",
                  "RS",
                  "SC",
                  "SE",
                  "SP",
                  "TO",
                ]}
                onChange={function (): void {
                  throw new Error("Function not implemented.");
                }}
              />
              <InputText
                theme={acc}
                size="big"
                label="Complemento"
                type="text"
                onChange={function (): void {
                  throw new Error("Function not implemented.");
                }}
              />
            </InputContainer>
          </S.FormPartSmall>
        </S.FormPart>
      );
    case 2:
      return (
        <S.FormPart>
          <InputImage theme={acc} />
          <InputText
            theme={acc}
            label="Descrição"
            type="text"
            placeholder="Como é seu estabelecimento..."
            onChange={function (): void {
              throw new Error("Function not implemented.");
            }}
          />
        </S.FormPart>
      );
    case 3:
      return (
        <S.FormPart>
          <CategorySelector />
        </S.FormPart>
      );
    case 4:
      return (
        <S.FormPart>
          <InputText
            theme={acc}
            label="Nome Completo"
            type="text"
            placeholder="Joana Silva"
            onChange={function (): void {
              throw new Error("Function not implemented.");
            }}
          />
          <InputText
            theme={acc}
            label="E-mail"
            type="email"
            placeholder="exemplo@servidor.com"
            onChange={function (): void {
              throw new Error("Function not implemented.");
            }}
          />
          <Column>
            <InputContainer>
              <InputText
                theme={acc}
                size="half"
                label="Senha"
                type="password"
                placeholder="Bananina123"
                onChange={function (): void {
                  throw new Error("Function not implemented.");
                }}
              />
              <InputText
                theme={acc}
                size="half"
                label="Confirmar Senha"
                type="password"
                placeholder="***********"
                onChange={function (): void {
                  throw new Error("Function not implemented.");
                }}
              />
            </InputContainer>
            <S.TextWrapper>
              <S.Text>
                Tamanho mínimo: <S.CBText theme={acc}>8 caracteres</S.CBText>
              </S.Text>
              <S.Text>
                Caracter especial: <S.CBText theme={acc}>mínimo 1</S.CBText>
              </S.Text>
              <S.Text>
                Caracter maiúsculo: <S.CBText theme={acc}>mínimo 1</S.CBText>
              </S.Text>
              <S.Text>
                Caracter minúsculo: <S.CBText theme={acc}>mínimo 1</S.CBText>
              </S.Text>
              <S.Text>
                Caracter numérico: <S.CBText theme={acc}>mínimo 1</S.CBText>
              </S.Text>
            </S.TextWrapper>
          </Column>
        </S.FormPart>
      );
    default:
      return <div>Algo deu errado</div>;
  }
};

export const getTitle = (step: number) => {
  switch (step) {
    case 1:
      return "DADOS OBRIGATÓRIOS";
    case 2:
      return "DADOS OPCIONAIS";
    case 3:
      return "DADOS DE CATEGORIA";
    case 4:
      return "DADOS DO ADMINISTRADOR";
    default:
      return "DADOS OBRIGATÓRIOS";
  }
};

export default StepContent;
