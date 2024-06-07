import { EstablishmentResponseDto } from "../Establishment/establishment.types";
import { ClientResponseDto } from "../Users/Client/client.types";

export interface PaymentRequestDto {
    dateTime: string;
    productId: number;
    clientId: number;
    establishmentId: number;
}

export interface PaymentResponseDto {
    paymentId: number;
    dateTime: string;
    /* product: ProductResponseDto; */
    client: ClientResponseDto;
    establishment: EstablishmentResponseDto;
}