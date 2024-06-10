/* eslint-disable @typescript-eslint/no-explicit-any */
import { ProductResponseDto } from "../../utils/Products/Product/product.types"
import { CompanyResponseDto } from "../Company/company.types";
import { FilterResponseDto } from "../Filter/filters.types";
import { LocalRequestDto, LocalResponseDto } from "../Local/local.types";
import {EmployeeResponseFullDto } from "../Users/Employee/employee.types";

export interface EstablishmentRequestDto {
    name: string;
    imgUrl?: string;
    companyId: number;
    localId: LocalRequestDto
}

export interface EstablishmentResponseDto {
    establishmentId: number;
    name: string;
    imgUrl?: string;
    company: CompanyResponseDto;
    local: LocalResponseDto;
}

export interface EstablishmentFullResponseDto {
    [x: string]: any;
    establishment: EstablishmentResponseDto,
    employees: EmployeeResponseFullDto,
    filters: FilterResponseDto,
    products: ProductResponseDto,
}