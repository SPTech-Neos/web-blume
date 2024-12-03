/* eslint-disable @typescript-eslint/no-explicit-any */
import { EstablishmentResponseDto } from "../../../utils/Establishment/establishment.types";
import { ProductTypeResponseDto } from "./productTypes.types";

export interface ProductRequestDto {
    name: string; 
    brand: string; 
    imgUrl?: string;
    type: number | string;
    value: number;
    establishment: number;
    aditum_id: string;
}

export interface AditumProductDto {
    name: string;
    amount: number; 
    description: string; 
    isActive: boolean;
    Sku: string;
    merchantId: string;
}

export interface ProductResponseDto {
    [x: string]: any;
    id: number | string;
    name: string;
    brand: string; 
    imgUrl: string;
    type: ProductTypeResponseDto
    value: number;
    establishment: EstablishmentResponseDto;
}