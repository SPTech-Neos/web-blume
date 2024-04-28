import { Local } from "./local.types";

export interface Client {
    idClient: number;
    name: string;
    email: string;
    local: Local;
}

export interface ClientLoginDto {
    email: string;
    password: string;
}