import { EstablishmentResponseDto } from "../../Establishment/establishment.types";
import { EmployeeTypeResponseDto } from "./employeeType.types";

export interface EmployeeRequestDto {
    name: string;
    email: string;
    password: string;
    imgUrl?: string;
    fkEstablishment: number;
    fkEmployeeType: number;
}

export interface EmployeeResponseDto {
    employeeId: string;
    name: string;
    email: string;
    imgUrl: string;
    establishment: EstablishmentResponseDto;
    employeeType: EmployeeTypeResponseDto;
}

export interface EmployeeLoginDto {
    email: string;
    password: string;
}