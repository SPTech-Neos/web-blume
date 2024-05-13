import { Address } from "./address.types";

export interface Local {
    idLocal: number;
    number: number;
    floor: number;
    bloc: string;
    complement: string;
    address: Address;
}