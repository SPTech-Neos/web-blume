import { Establishment } from "../Establishment/establishment.types";
import { EmployeeType } from "./employeeType.types";

export interface EmployeeResponseDto {
    employeeId: string;
    name: string;
    email: string;
    establishment: Establishment;
    employeeType: EmployeeType;
}

export interface EmployeeLoginDto {
    email: string;
    password: string;
}
