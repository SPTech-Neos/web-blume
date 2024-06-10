import { AddressResponseDto } from "./address.types";

export interface LocalRequestDto {
    number: number;
    floor?: number;
    block?: string;
    complement?: string;
    address: number; // address
}

export interface LocalResponseDto {
    localId: number;
    number: number;
    floor: number;
    block: string;
    complement: string;
    addressId: AddressResponseDto;
}