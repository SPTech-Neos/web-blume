import { EstablishmentResponseDto } from "../Establishment/establishment.types";
import { EmployeeType } from "./employeeType.types";

export interface EmployeeResponseDto {
    employeeId: string;
    name: string;
    email: string;
    establishment: EstablishmentResponseDto;
    employeeType: EmployeeType;
}

export interface EmployeeLoginDto {
    email: string;
    password: string;
}

export interface EmployeeRequestDto {
    name: string;
    email: string;
    password: string;
    fkEstablishment: number;
    fkEmployeeType: number;
}
