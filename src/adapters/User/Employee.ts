import axios from "axios";
import { environment } from "../../../environment.config";

import { Employee } from "../../utils/employee.types";

export class EmployeeAdapter {
    private readonly apiUrl: string;

    constructor() {
        this.apiUrl = environment.apiUrl ? environment.apiUrl : "http://localhost:8080";
    }

    async getEmployeeById(EmployeeId: number): Promise<Employee | null> {
        try {
            const response = await axios.get(`${this.apiUrl}/Employee/${EmployeeId}`);
            return response.data as Employee;
        } catch (error) {
            console.error(error);
            return null;
        }
    }

    async login(email: string, password: string): Promise<object | Employee | string | null> {
        try {
            const response = await axios.post(`${this.apiUrl}/client/login`, {
                email,
                password,
            });

            if (response.status === 200) {
                return response.data as Employee;
            } else {
                return [{type: "error", message: "Erro durante execução do serviço"}];
            }
        } catch (error) {
            console.error(error);
            return null;
        }
    }
}
