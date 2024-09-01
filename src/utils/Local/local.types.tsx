import { AddressRequestDto, AddressResponseDto } from "./address.types";

export interface LocalRequestDto {
    number: string;
    floor: number;
    complement: string;
    block: string;
    address: AddressRequestDto; 
}

export interface LocalResponseDto {
    id: number;
    number: number;
    floor: number;
    block: string;
    complement: string;
    address: AddressResponseDto;
}