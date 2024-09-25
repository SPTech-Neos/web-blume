import { EstablishmentResponseDto } from "../Establishment/establishment.types";
import { ProductResponseDto } from "../Products/Product/product.types";
import { ClientResponseDto } from "../Users/Client/client.types";

export interface PaymentRequestDto {
    productId: number;
    clientId: number;
    establishmentId: number;
    value: number;
}

export interface PaymentResponseDto {
    id: number;
    value: number;
    product: ProductResponseDto;
    client: ClientResponseDto;
    establishment: EstablishmentResponseDto;
}