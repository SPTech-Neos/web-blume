import axios from "axios";
import { environment } from "../../../environment.config";

import { EmployeeResponseDto, EmployeeLoginDto } from "../../utils/employee.types";

export class EmployeeAdapter {
    private readonly apiUrl: string;
    private readonly SpringSecurityUsername: string;
    private readonly SpringSecurityPassword: string;

    constructor() {
        this.apiUrl = environment.apiUrl ? environment.apiUrl : "http://localhost:8080";
        this.SpringSecurityUsername = environment.springSecurityUsername;
        this.SpringSecurityPassword = environment.springSecurityPassword;
    }

    async getEmployeeByToken(token: string): Promise<EmployeeResponseDto | null> {
        try {
            const response = await axios.get(`${this.apiUrl}/employee/${token}`);
            return response.data as EmployeeResponseDto;
        } catch (error) {
            console.error(error);
            return null;
        }
    }

    async login(employeeLoginDto: EmployeeLoginDto): Promise<object | EmployeeResponseDto | null> {
        try {
            const { email, password } = employeeLoginDto;

            const requestOptions = {
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': 'Basic ' + btoa(this.SpringSecurityUsername + ':' + this.SpringSecurityPassword),
                    'Accept': '*/*'
                }
            };

            const response = await axios.post(`${this.apiUrl}/employee/login`, {
                email,
                password
            }, requestOptions);

            if (response.status === 200) {
                return response.data as EmployeeResponseDto;
            } else {
                return [{type: "error", message: "Erro durante execução do serviço"}];
            }
        } catch (error) {
            console.error(error);
            return null;
        }
    }
}
