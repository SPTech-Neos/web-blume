// AS DTOS estão iguais no backend (request e response)
export interface ServiceRequestDto {
    specification: string; 
    imgUrl: string;
    fkServiceType: number;
}

export interface ServiceResponseDto {
    serviceId: number;
    specification: string;
    imgUrl: string; 
    serviceType: ServiceResponseDto;
}