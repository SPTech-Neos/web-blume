/* eslint-disable @typescript-eslint/no-explicit-any */
import { LocalRequestDto, LocalResponseDto } from "../Local/local.types";
import { PhoneRequestDto, PhoneResponseDto } from "../Phone/phone.types";
import { StatusRequestDto, StatusResponseDto } from "../Status/status.types";

export interface EstablishmentRequestDto {
    aditumId: string;
    name: string;
    imgUrl?: string;
    local: LocalRequestDto;
    phone: PhoneRequestDto;
    status: StatusRequestDto;
    startShift: string;
    endShift: string;
    description: string;
    cnpj: string;
    media: number;
}
export interface AditumEstablishmentRequest {
    cnpj: string;
    documentType: string;
    email: string;
    merchantCode: string;
    fantasyName: string;
    socialName: string;
    mcc: number;
    acquirerSettings: Array<{
        acquirerId: number;
        merchantIdOnAcquirer: string;
        merchantTokenOnAcquirer: string;
        isActive: boolean;
        aditumProduct: string;
        aditumProductId: number;
    }>;
    address: {
        street: string;
        number: string;
        neighborhood: string;
        city: string;
        state: string;
        country: string;
        zipCode: string;
    };
    contacts: Array<{
        name: string;
        phone: {
            countryCode: string;
            areaCode: string;
            number: string;
            type: string;
        };
        email: string;
        type: string;
    }>;
    type: number;
    profile: {
        smartCheckoutLimitAmount: number;
        antifraudMandatory: boolean;
        acceptForeignCustomer: boolean;
        disputeManagementEnabled: boolean;
        hideRefreshToken: boolean;
        antifraudCheckFirst: boolean;
        ignoreAcquirerSettingsOnUpdate: boolean;
        allowInheritTokenizationConfiguration: boolean;
        needsValidatePaymentLinkOnAcquirer: boolean;
        overridesChildsAntifraudSettings: boolean;
        encodeWebhookPayloadContent: boolean;
        verificationRequiredBeforeCancellation: boolean;
        useUuidOnMerchantChargeId: boolean;
        acquirerTransactionFilter: string;
        useParentAntifraudSettings: boolean;
        useParentMerchantPixSettings: boolean;
        disableSelfFinanceInSmartCheckout: boolean;
    };
    bankSlipSettings: any[]; // Você pode definir um tipo mais específico se necessário
    parentMerchantId: string;
    status: string;
    isActive: boolean;
    relatedMerchants: string[];
}

export interface EstablishmentResponseDto {
    id: number;
    aditumId: string;
    name: string;
    imgUrl?: string;
    local: LocalResponseDto;
    phone: PhoneResponseDto;
    status: StatusResponseDto;
    startShift: string;
    endShift: string;
    description: string;
    cnpj: string;
    media: number;
}