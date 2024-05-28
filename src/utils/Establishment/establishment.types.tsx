import { Local } from "./local.types";

export interface Establishment {
    idEstablishment: number;
    name: string;
    local: Local;
}

export interface EstablishmentRequestDto {
    name: string;
    cnpj: string;
    startShift: string;
    endShift: string;
    local: Local;
    profilePic: string;
    description: string;
    fkServices: number[];
}

export interface EstablishmentResponseDto {
    establishmentId: number;
    name: string;
    local: Local;
}