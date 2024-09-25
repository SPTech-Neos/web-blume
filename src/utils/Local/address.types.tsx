export interface AddressRequestDto {
    publicPlace: string;
    city: string;
    zipCode: string;
    uf: string;
}

export interface AddressResponseDto {
    id: number;
    publicPlace: string;
    city: string;
    zipCode: string;
    uf: string;
}
