export interface AddressRequestDto {
    publicPlace: string
    street: string;
    city: string;
    state: string;
}

export interface AddressResponseDto {
    addressId: number;
    publicPlace: string
    street: string;
    city: string;
    state: string;    
}
