import axios from "axios";
import { environment } from "../../../environment.config";

import { EmployeeResponseDto, EmployeeLoginDto } from "../../utils/Employee/employee.types";

export class EmployeeAdapter {
    private readonly apiUrl: string;
    private readonly SpringSecurityUsername: string;
    private readonly SpringSecurityPassword: string;

    constructor() {
        this.apiUrl = environment.apiUrl ? environment.apiUrl : "http://localhost:8080";
        this.SpringSecurityUsername = environment.springSecurityUsername;
        this.SpringSecurityPassword = environment.springSecurityPassword;
    }


    // GET EMPLOYEE BY TOKEN
    async getEmployeeByToken(token: string): Promise<EmployeeResponseDto | null> {
        try {
            const response = await axios.get(`${this.apiUrl}/employee/${token}`);
            return response.data as EmployeeResponseDto;
        } catch (error) {
            console.error(error);
            return null;
        }
    }

    // LOGIN EMPLOYEE
    async login(employeeLoginDto: EmployeeLoginDto): Promise<EmployeeResponseDto | null> {
        try {
            const { email, password } = employeeLoginDto;
    
            const requestOptions = {
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': 'Basic ' + btoa(this.SpringSecurityUsername + ':' + this.SpringSecurityPassword),
                    'Accept': '*/*'
                }
            };
    
            const response = await axios.post(`${this.apiUrl}/employee/login`, { email, password }, requestOptions);
            
            console.log("ADAPTER: " + response.data.id);
    
            return {
                employeeId: response.data.id,
                name: response.data.name,
                email: response.data.email,
                establishment: response.data.establishment,
                employeeType: response.data.employeeType
            } as EmployeeResponseDto;
        } catch (error) {
            console.error(error);
            return null;
        }
    }

    // UPDATE EMPLOYEE
    async updateEmployee(employeeId: number, updatedFields: Partial<EmployeeResponseDto>): Promise<EmployeeResponseDto | null> {
        try {
            const requestOptions = {
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': 'Basic ' + btoa(this.SpringSecurityUsername + ':' + this.SpringSecurityPassword),
                    'Accept': '*/*'
                }
            };

            const response = await axios.patch(`${this.apiUrl}/employee/${employeeId}`, updatedFields, requestOptions);

            return response.data as EmployeeResponseDto;
        } catch (error) {
            console.error(error);
            return null;
        }
    }
    
}
