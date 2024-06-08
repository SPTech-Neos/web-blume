import { EstablishmentResponseDto } from "../../../utils/Establishment/establishment.types";

export interface ProductRequestDto {
    name: string; 
    brand: string; 
    imgUrl?: string;
    type: number;
    value: number;
    establishment: number;
}

export interface ProductResponseDto {
    id: number;
    name: string;
    brand: string; 
    value: number;
    establishment: EstablishmentResponseDto;
}