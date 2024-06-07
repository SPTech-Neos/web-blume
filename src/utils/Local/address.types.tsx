export interface AddressRequest {
    publicPlace: string
    street: string;
    city: string;
    state: string;
}

export interface AddressResponse {
    addressId: number;
    publicPlace: string
    street: string;
    city: string;
    state: string;    
}
