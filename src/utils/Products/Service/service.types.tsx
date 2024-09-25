// AS DTOS estão iguais no backend (request e response)
export interface ServiceRequestDto {
    specification: string; 
    imgUrl?: string;
    serviceType: number;
}

export interface ServiceResponseDto {
    [x: string]: unknown;
    serviceId: number;
    specification: string;
    price: number;
    imgUrl?: string; 
    serviceType: number;
}