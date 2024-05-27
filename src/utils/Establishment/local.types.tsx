import { Address } from "./address.types";

export interface Local {
    idLocal: number;
    cep: string;
    address: Address;
    number: number;
    floor: number;
    bloc: string;
    complement: string;
}