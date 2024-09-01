export interface StatusRequestDto {
    countryCode: number;
    areaCode: number;
    number: number;
}

export interface StatusResponseDto {
    id: number;
    name: string;
    type: string; 
}
