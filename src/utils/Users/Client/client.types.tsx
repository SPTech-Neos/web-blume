import { LocalRequestDto, LocalResponseDto } from "../../Local/local.types";

export interface ClientRequestDto {
    name: string;
    email: string;
    password: string;
    imgUrl?: string;
    local?: LocalRequestDto;
}

export interface ClientResponseDto {
    clientId: number;
    name: string;
    email: string;
    token: string;
    imgUrl?: string;
    Local?: LocalResponseDto;
}

export interface ClientLoginDto {
    email: string;
    password: string;
}