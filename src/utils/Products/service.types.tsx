import { ServiceType } from "./serviceCategory.types";


export interface Service {
    idService: number;
    specification: string;
    serviceType: ServiceType;
    number: number;
    floor: number;
    bloc: string;
    complement: string;
}