import { CompanyResponseDto } from "../Company/company.types";
import { LocalRequestDto, LocalResponseDto } from "../Local/local.types";

export interface EstablishmentRequestDto {
    name: string;
    imgUrl?: string;
    companyId: number;
    local: LocalRequestDto
}

export interface EstablishmentResponseDto {
    establishmentId: number;
    name: string;
    imgUrl?: string;
    company: CompanyResponseDto;
    local: LocalResponseDto;
}