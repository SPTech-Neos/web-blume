import { ServiceResponseDto } from "../../Products/Service/service.types";
import { EmployeeResponseDto } from "./employee.types";

export interface EmployeeServicesRequestDto {
    hoursSpent: string;
    expertise: boolean;
    fkEmployee: number;
    fkService: number;
}

export interface EmployeeTypeResponseDto {
    employeeTypeId: number;
    hoursSpent: string;
    expertise: string;
    employee: EmployeeResponseDto;
    service: ServiceResponseDto;
}