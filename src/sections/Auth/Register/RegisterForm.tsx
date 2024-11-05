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
import { AditumEstablishmentRequest } from "../../../utils/Establishment/establishment.types";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import { EmployeeRequestDto } from "../../../utils/Users/Employee/employee.types";
import { EmployeeAdapter } from "../../../adapters/User/Employee/Employee";
import Text from "../../../components/Texts/Text/Text";
// import { AditumAdapter } from "../../../adapters/Aditum/Aditum";

interface RegisterFormProps {
  step: number;
  setStep: React.Dispatch<React.SetStateAction<number>>;
  handleSubmit: () => void;
  acc: string;
}
// adicionar Aditum 
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
      const aditumEstablishmentReq = {
        cnpj: fields.cnpj, 
        documentType: "Cnpj",
        email: fields.employeeEmail, 
        merchantCode: "", 
        fantasyName: fields.nome, 
        socialName: fields.nome, 
        mcc: 6010, 
        acquirerSettings: [
          {
            acquirerId: 999,
            merchantIdOnAcquirer: "123123",
            merchantTokenOnAcquirer: "123132",
            isActive: true,
            aditumProduct: "Ecommerce",
            aditumProductId: 1,
          },
          {
            acquirerId: 999,
            merchantIdOnAcquirer: "1231231",
            merchantTokenOnAcquirer: "123",
            isActive: true,
            aditumProduct: "Pos",
            aditumProductId: 2,
          },
        ],
        address: {
          street: fields.logradouro, 
          number: fields.numero, 
          neighborhood: fields.logradouro, 
          city: fields.city, 
          state: fields.estado, 
          country: "Brasil", 
          zipCode: fields.cep.replace(/[^\d]/g, "")
        },
        contacts: [
          {
            name: "Joice", 
            phone: {
              countryCode: "55", 
              areaCode: "11", 
              number: "98123-3131", 
              type: "Commercial", 
            },
            email: "joice.matos@gmail.com", 
            type: "Administration", 
          },
        ],
        type: 2, 
        profile: {
          smartCheckoutLimitAmount: 150000, 
          antifraudMandatory: false, 
          acceptForeignCustomer: false, 
          disputeManagementEnabled: false, 
          hideRefreshToken: true, 
          antifraudCheckFirst: false, 
          ignoreAcquirerSettingsOnUpdate: true, 
          allowInheritTokenizationConfiguration: false, 
          needsValidatePaymentLinkOnAcquirer: false, 
          overridesChildsAntifraudSettings: false, 
          encodeWebhookPayloadContent: true, 
          verificationRequiredBeforeCancellation: false, 
          useUuidOnMerchantChargeId: true, 
          acquirerTransactionFilter: "Undefined", 
          useParentAntifraudSettings: false, 
          useParentMerchantPixSettings: false, 
          disableSelfFinanceInSmartCheckout: false, 
        },
        bankSlipSettings: [], 
        parentMerchantId: "a9296dbc-6372-4f8a-959d-40ff30135a2f", 
        status: "Active", 
        isActive: true, 
        relatedMerchants: [
          "a9296dbc-6372-4f8a-959d-40ff30135a2f", 
          "ce869b77-a2b2-4b95-8863-2f74733a3929", 
        ],
        
      } as AditumEstablishmentRequest;

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
      await establishmenteAdapter.registerEstablishment(establishmentFields, aditumEstablishmentReq);
  
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
