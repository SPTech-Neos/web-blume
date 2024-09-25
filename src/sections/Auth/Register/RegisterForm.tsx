import React, { useState } from "react";
import * as S from "./register.styled";
import { Stepper } from "../../../components/Stepper/Stepper";
import {
  // PrimaryTitle,
  // SecondaryTitle,
  // Subtitle,
  Title,
} from "../../../components/Texts/Title/Title";
import StepContent, { getTitle } from "./StepContent";
import StepNavigation from "./StepNavigation";
import ColorContainer from "../../../components/Containers/ColorContainer/ColorContainer";
import { colors as c } from "../../../styles/Colors";
import { EstablishmentAdapter } from "../../../adapters/Establishment/Establishment";
import { EstablishmentRequestDto } from "../../../utils/Establishment/establishment.types";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import { EmployeeRequestDto } from "../../../utils/Users/Employee/employee.types";
import { EmployeeAdapter } from "../../../adapters/User/Employee/Employee";
import Text from "../../../components/Texts/Text/Text";

interface RegisterFormProps {
  step: number;
  setStep: React.Dispatch<React.SetStateAction<number>>;
  handleSubmit: () => void;
  acc: string;
}

const RegisterForm: React.FC<RegisterFormProps> = ({
  step,
  setStep,
  handleSubmit,
  acc,
}) => {
  const navigate = useNavigate();
  const [fields, setFields] = useState({
    cnpj: "",
    cep: "",
    nome: "",
    entrada: "",
    saida: "",
    logradouro: "",
    numero: "",
    estado: "",
    complemento: "",
    phone: "",
    imgUrl: "",
    city: "",

    employeeNome: "",
    employeeEmail: "",
    employeePhone: "",
    senha: "",
    confirmarSenha: "",
  });

  // Atualiza o valor dos campos
  const handleFieldChange = (field: string, value: string | string[]) => {
    const treatedValue = value;

    // Atualiza o estado com o valor tratado ou o valor original
    setFields((prevFields) => ({
      ...prevFields,
      [field]: treatedValue,
    }));
  };

  // Função de validação dos campos obrigatórios
  const validateStep = () => {
    let isValid = true;

    switch (step) {
      case 1:
        if (!fields.cnpj || !fields.cep) {
          isValid = false;
        }
        break;
      case 2:
        break;
      case 3:
        break;
      case 4:
        break;
      default:
        isValid = true;
    }

    return isValid;
  };

  const goToNextStep = () => {
    if (validateStep()) {
      setStep(step + 1);
    }
  };

  const goToPreviousStep = () => {
    setStep(step - 1);
  };

  const handleFinish = async () => {
    try {
      const establishmentFields = {
        name: fields.nome,
        imgUrl: fields.imgUrl,
        aditumId: "aditumTeste",
        local: {
          number: fields.numero,
          floor: 0,
          complement: fields.complemento,
          block: "",
          address: {
            publicPlace: fields.logradouro,
            city: fields.city,
            zipCode: fields.cep.replace(/[^\d]/g, ""),
            uf: fields.estado,
          },
        },
        phone: {
          countryCode: fields.phone.replace(/[^\d]/g, "").slice(0, 2),
          areaCode: fields.phone.replace(/[^\d]/g, "").slice(2, 4),
          number: fields.phone.replace(/[^\d]/g, "").slice(4),
        },
      } as EstablishmentRequestDto;

      const establishmenteAdapter = new EstablishmentAdapter();
      const establishmentResponse =
        await establishmenteAdapter.registerEstablishment(establishmentFields);

      console.log(establishmentResponse);

      const employeeFields = {
        name: fields.employeeNome,
        email: fields.employeeEmail,
        password: fields.senha,
        imgUrl: "",
        fkEstablishment: establishmentResponse?.id,
        employeeType: 1,
        local: {
          number: fields.numero,
          floor: 0,
          complement: fields.complemento,
          block: "",
          address: {
            publicPlace: fields.logradouro,
            city: fields.city,
            zipCode: fields.cep.replace(/[^\d]/g, ""),
            uf: fields.estado,
          },
        },
        phone: {
          countryCode: fields.employeePhone.replace(/[^\d]/g, "").slice(0, 2),
          areaCode: fields.employeePhone.replace(/[^\d]/g, "").slice(2, 4),
          number: fields.employeePhone.replace(/[^\d]/g, "").slice(4),
        },
      } as EmployeeRequestDto;

      const employeeAdapter = new EmployeeAdapter();
      const employeeResponse = await employeeAdapter.create(employeeFields);

      console.log(employeeFields);

      if (employeeResponse && establishmentResponse) {
        navigate(`/establishment/${establishmentResponse.id}`);
      } else {
        Swal.fire({
          icon: "error",
          title: "Erro!",
          text: "Os dados fornecidos estão incorretos.",
        });
      }
    } catch (error) {
      console.error("Erro ao cadastrar:", error);
      Swal.fire({
        icon: "error",
        title: "Erro!",
        text: "Houve um erro ao realizar o cadastro.",
      });
    }
  };

  return (
    <ColorContainer bgColor={c.gray100}>
      <S.Register>
        <Title>CADASTRO</Title>
        <Stepper theme={acc} steps={4} currentStep={step} />
        <Text size="lg" weight="bold">
          {getTitle(step)}
        </Text>
        <S.RegisterForm step={step} onSubmit={handleSubmit}>
          <StepContent
            step={step}
            acc={acc}
            fields={fields}
            onFieldChange={handleFieldChange}
            goToNextStep={goToNextStep}
          />
        </S.RegisterForm>
        <StepNavigation
          step={step}
          validateStep={validateStep}
          goToNextStep={goToNextStep}
          goToPreviousStep={goToPreviousStep}
          handleSubmit={handleFinish}
        />
      </S.Register>
    </ColorContainer>
  );
};

export default RegisterForm;
