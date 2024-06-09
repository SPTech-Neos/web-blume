/* eslint-disable @typescript-eslint/no-explicit-any */
import { EstablishmentResponseDto } from "../../Establishment/establishment.types";
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
    
}