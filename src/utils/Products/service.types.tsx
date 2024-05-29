import { ServiceType } from "./serviceCategory.types";

// AS DTOS estão iguais no backend (request e response)
export interface ServiceDto {
    serviceId: number;
    specification: string;
    serviceType: ServiceType;
}
