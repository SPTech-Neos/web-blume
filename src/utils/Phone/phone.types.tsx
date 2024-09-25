export interface PhoneRequestDto {
    countryCode: string;
    areaCode: string;
    number: string;
}

export interface PhoneResponseDto {
    id: number;
    countryCode: string;
    areaCode: string;
    number: string;
}
