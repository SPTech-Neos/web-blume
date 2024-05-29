import { Establishment } from "../Establishment/establishment.types";

export interface ProducTypeRequestDto{
    name: string;
    specification: string;
}

export interface ProducTypeResponseDto{
    id: number;
    name: string;
    specification: string;
}


export interface ProductRequestDto{
    name: string;
    brand: string;
    fkProductType: number;
    fkEstablishment: number;
}

export interface ProductResponseDto{
    id: number;
    name: string;
    brand: string;
    fkProductType: number;
    fkEstablishment: Establishment;
}
