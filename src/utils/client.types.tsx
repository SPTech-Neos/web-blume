export interface ClientResponseDto {
    clientId: number;
    name: string;
    email: string;
    token: string;
}

export interface ClientLoginDto {
    email: string;
    password: string;
}