import { ServiceCategoryResponseDto } from "./serviceCategory.types";

export interface ServiceTypeRequestDto {
    name: String;
    fkServiceCategory: number; // ServiceCategory
}

export interface ServiceTypeResponseDto {
    serviceTypeId: number;
    name: String;
    serviceCategory: ServiceCategoryResponseDto;
}

