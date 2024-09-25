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