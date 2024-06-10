// AS DTOS estão iguais no backend (request e response)
export interface ServiceRequestDto {
    specification: string; 
    imgUrl?: string;
    serviceType: number;
}

export interface ServiceResponseDto {
    [x: string]: any;
    serviceId: number;
    specification: string;
    imgUrl?: string; 
    serviceType: number;
}