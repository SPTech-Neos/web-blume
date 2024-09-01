/* eslint-disable @typescript-eslint/no-explicit-any */
import { EstablishmentResponseDto } from "../../Establishment/establishment.types";
import { LocalRequestDto } from "../../Local/local.types";
import { PhoneRequestDto } from "../../Phone/phone.types";
import { ServiceResponseDto } from "../../Products/Service/service.types";
import { StatusRequestDto } from "../../Status/status.types";
import { EmployeeTypeResponseDto } from "./employeeType.types";

export interface EmployeeResponseDto {
    [x: string]: any;
    employeeId: string;
    name: string;
    email: string;
    imgUrl?: string;
    establishment: EstablishmentResponseDto;
    employeeType: EmployeeTypeResponseDto;
}

export interface EmployeeResponseFullDto extends EmployeeResponseDto {
    [x: string]: any;
    employeeId: string;
    name: string;
    email: string;
    imgUrl?: string;
    establishment: EstablishmentResponseDto;
    employeeType: EmployeeTypeResponseDto;
    services: ServiceResponseDto
}

export interface EmployeeLoginDto {
    email: string;
    password: string;
}

export interface EmployeeRequestDto {
    name: string;
    email: string;
    password: string;
    imgUrl?: string;
    description?: string,
    fkEstablishment: number;
    employeeType: number;
    local: LocalRequestDto;
    phone: PhoneRequestDto;
    fkStatus: number;
}