/* eslint-disable @typescript-eslint/no-explicit-any */
// import { ProductResponseDto } from "../../utils/Products/Product/product.types"
import { CompanyResponseDto } from "../Company/company.types";
// import { FilterResponseDto } from "../Filter/filters.types";
import { LocalRequestDto, LocalResponseDto } from "../Local/local.types";
import { PhoneRequestDto, PhoneResponseDto } from "../Phone/phone.types";
import { StatusResponseDto } from "../Status/status.types";

export interface EstablishmentRequestDto {
    name: string;
    // cnpj: string;
    // horarioEntrada: string;
    // horariosSaida: string;
    aditumId: string;
    imgUrl: string;
    local: LocalRequestDto;
    phone: PhoneRequestDto;
}

export interface EstablishmentResponseDto {
    id: number;
    name: string;
    imgUrl?: string;
    company: CompanyResponseDto;
    local: LocalResponseDto;
    phone: PhoneResponseDto;
    status: StatusResponseDto;
}