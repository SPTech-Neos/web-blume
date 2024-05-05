export interface EmployeeResponseDto {
    idEmployee: number;
    name: string;
    email: string;
    fkEstablishment: number;
    fkEmployeeType: number;
}

export interface EmployeeLoginDto {
    email: string;
    password: string;
}