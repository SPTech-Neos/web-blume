import { ProductResponseDto } from "../../adapters/Products/Product/Product";
import { CompanyResponseDto } from "../Company/company.types";
import { FilterResponseDto } from "../Filter/filters.types";
import { LocalRequestDto, LocalResponseDto } from "../Local/local.types";
import { EmployeeResponseDto } from "../Users/Employee/employee.types";

export interface EstablishmentRequestDto {
    name: string;
    imgUrl?: string;
    companyId: number;
    localId: LocalRequestDto
}

export interface EstablishmentResponseDto {
    id: number;
    name: string;
    imgUrl?: string;
    company: CompanyResponseDto;
    local: LocalResponseDto;
}

export interface EstablishmentFullResponseDto {
    establishment: EstablishmentResponseDto,
    employees: EmployeeResponseDto,
    filters: FilterResponseDto,
    products: ProductResponseDto
}