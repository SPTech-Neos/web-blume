/* eslint-disable @typescript-eslint/no-explicit-any */
import { EstablishmentResponseDto } from "../Establishment/establishment.types";
import { ServiceResponseDto } from "../Products/Service/service.types";

export interface FilterRequestDto {
    price: number;
    fkService: number;
    fkEstablishment: number;
}

export interface FilterResponseDto {
    [x: string]: any;
    filterId: number;
    price: number;
    establishment: EstablishmentResponseDto;
    service: ServiceResponseDto;
}