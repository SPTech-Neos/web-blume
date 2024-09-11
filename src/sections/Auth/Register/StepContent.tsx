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
  fields: Record<string, string>;
  onFieldChange: (field: string, value: string | string[]) => void;
  goToNextStep: () => void;
}

const StepContent: React.FC<StepContentProps> = ({
  step,
  acc,
  fields,
  onFieldChange,
  goToNextStep,
}) => {
  const [errors, setErrors] = useState({
    // OBRIGATÓRIOS
    cnpj: false,
    cep: false,
    nome: false,
    entrada: false,
    saida: false,
    logradouro: false,
    numero: false,
    estado: false,
    complemento: false,
    phone: false,
    city: false,

    // DADOS EMPLOYEE
    employeeNome: false,
    employeeEmail: false,
    employeePhone: false,
    senha: false,
    confirmarSenha: false,
  });

  const validateStep = () => {
    let isValid = true;
    const newErrors = {
      cnpj: false,
      cep: false,
      nome: false,
      entrada: false,
      saida: false,
      logradouro: false,
      numero: false,
      estado: false,
      complemento: false,
      phone: false,

      // DADOS EMPLOYEE
      employeeNome: false,
      employeeEmail: false,
      employeePhone: false,
      senha: false,
      confirmarSenha: false,
    };

    switch (step) {
      case 1:
        if (!fields.cnpj) {
          newErrors.cnpj = true;
          isValid = false;
        }
        if (!fields.cep) {
          newErrors.cep = true;
          isValid = false;
        }
        break;
      case 2:
        break;
      case 3:
        break;
      case 4:
        if (!fields.employeeNome) {
          newErrors.employeeNome = true;
          isValid = false;
        }
        if (!fields.employeeEmail) {
          newErrors.employeeEmail = true;
          isValid = false;
        }
        if (!fields.employeePhone) {
          newErrors.employeePhone = true;
          isValid = false;
        }
        if (!fields.senha) {
          newErrors.senha = true;
          isValid = false;
        }
        if (!fields.confirmarSenha) {
          newErrors.confirmarSenha = true;
          isValid = false;
        }
        break;
      default:
        isValid = true;
    }

    setErrors(newErrors);
    return isValid;
  };

  React.useEffect(() => {
    validateStep(); // Revalida a cada renderização
  }, [step, fields]);

  switch (step) {
    case 1:
      return (
        <S.FormPart>
          <InputText
            theme={acc}
            label="Nome do Estabelecimento"
            type="text"
            placeholder="Casa da Mãe Joana"
            value={fields.nome}
            onChange={(e) => onFieldChange("nome", e.target.value)}
            error={errors.nome ? "*Campo obrigatório" : ""}
          />
          <InputText
            theme={acc}
            label="CNPJ"
            type="text"
            mask="99.999.999/9999-99"
            placeholder="99.999.999/9999-99"
            value={fields.cnpj}
            onChange={(e) => onFieldChange("cnpj", e.target.value)}
            error={errors.cnpj ? "*Campo obrigatório" : ""}
          />

          <InputText
            theme={acc}
            label="Celular|Telefone"
            type="text"
            mask="+99 (99) 99999-9999"
            placeholder="+55 11 98100-0000"
            value={fields.phone}
            onChange={(e) => onFieldChange("phone", e.target.value)}
            error={errors.phone ? "*Campo obrigatório" : ""}
          />
          <InputContainer>
            <InputText
              theme={acc}
              size="half"
              label="Horário de Entrada"
              type="time"
              value={fields.entrada}
              onChange={(e) => onFieldChange("entrada", e.target.value)}
              error={errors.entrada ? "*Campo obrigatório" : ""}
            />
            <InputText
              theme={acc}
              size="half"
              label="Horário de Saída"
              type="time"
              value={fields.saida}
              onChange={(e) => onFieldChange("saida", e.target.value)}
              error={errors.saida ? "*Campo obrigatório" : ""}
            />
          </InputContainer>

          <S.FormPartSmall>
            <InputContainer>
              <InputText
                theme={acc}
                size="half"
                label="Cidade"
                type="text"
                value={fields.city}
                onChange={(e) => onFieldChange("city", e.target.value)}
                error={errors.city ? "*Campo obrigatório" : ""}
              />
              <InputText
                theme={acc}
                size="half"
                label="CEP"
                placeholder="01414-001"
                mask="99999-999"
                type="text"
                value={fields.cep}
                onChange={(e) => onFieldChange("cep", e.target.value)}
                error={errors.cep ? "*Campo obrigatório" : ""}
              />
            </InputContainer>

            <InputContainer>
              <InputText
                theme={acc}
                size="big"
                label="Logradouro"
                placeholder="Rua Haddock Lobo"
                type="text"
                value={fields.logradouro}
                onChange={(e) => onFieldChange("logradouro", e.target.value)}
                error={errors.logradouro ? "*Campo obrigatório" : ""}
              />
              <InputText
                theme={acc}
                size="small"
                label="Número"
                placeholder="575"
                type="text"
                value={fields.numero}
                onChange={(e) => onFieldChange("numero", e.target.value)}
                error={errors.numero ? "*Campo obrigatório" : ""}
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
                onChange={(e) => onFieldChange("estado", e.target.value)}
                error={errors.estado ? "*Campo obrigatório" : ""}
              />
              <InputText
                theme={acc}
                size="big"
                label="Complemento"
                type="text"
                value={fields.complemento}
                onChange={(e) => onFieldChange("complemento", e.target.value)}
                error={errors.complemento ? "*Campo obrigatório" : ""}
              />
            </InputContainer>
          </S.FormPartSmall>
        </S.FormPart>
      );
    case 2:
      return (
        <S.FormPart>
          <InputImage
            theme={acc}
            onChange={(e) => onFieldChange("imgUrl", e.target.value)}
          />
          <InputText
            theme={acc}
            label="Descrição"
            type="text"
            placeholder="Como é seu estabelecimento..."
            value={fields.descricao}
            onChange={(e) => onFieldChange("descricao", e.target.value)}
          />
        </S.FormPart>
      );
    case 3:
      return (
        <S.FormPart>
          <CategorySelector
            onChange={(selectedCategories) =>
              onFieldChange("categorias", selectedCategories)
            }
          />
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
            value={fields.employeeNome}
            onChange={(e) => onFieldChange("employeeNome", e.target.value)}
            error={errors.employeeNome ? "*Campo obrigatório" : ""}
          />
          <InputText
            theme={acc}
            label="E-mail"
            type="email"
            placeholder="exemplo@servidor.com"
            value={fields.employeeEmail}
            onChange={(e) => onFieldChange("employeeEmail", e.target.value)}
            error={errors.employeeEmail ? "*Campo obrigatório" : ""}
          />
          <InputText
            theme={acc}
            label="Celular"
            type="text"
            placeholder="+55 11 98100-0000"
            mask="+99 (99) 99999-9999"
            value={fields.employeePhone}
            onChange={(e) => onFieldChange("employeePhone", e.target.value)}
            error={errors.employeePhone ? "*Campo obrigatório" : ""}
          />
          <Column>
            <InputContainer>
              <InputText
                theme={acc}
                size="half"
                label="Senha"
                type="password"
                placeholder="Bananina123"
                value={fields.senha}
                onChange={(e) => onFieldChange("senha", e.target.value)}
                error={errors.senha ? "*Campo obrigatório" : ""}
              />
              <InputText
                theme={acc}
                size="half"
                label="Confirmar Senha"
                type="password"
                placeholder="***********"
                value={fields.confirmarSenha}
                onChange={(e) =>
                  onFieldChange("confirmarSenha", e.target.value)
                }
                error={errors.confirmarSenha ? "*Campo obrigatório" : ""}
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
