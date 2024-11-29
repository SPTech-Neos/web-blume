import axios from "axios";
import { environment } from "../../../../environment.config";
import { EmployeeResponseDto, EmployeeLoginDto, EmployeeRequestDto } from "../../../utils/Users/Employee/employee.types";
import { LocalResponseDto } from "../../../utils/Local/local.types";
import { PhoneResponseDto } from "../../../utils/Phone/phone.types";
import { StatusResponseDto } from "../../../utils/Status/status.types";
import { LocalAdapter } from "../../Local/Local";
import { PhoneAdapter } from "../../Phone/Phone";
import { EstablishmentResponseDto } from "../../../utils/Establishment/establishment.types";

export class EmployeeAdapter {
    private readonly apiUrl: string;
    private readonly SpringSecurityUsername: string;
    private readonly SpringSecurityPassword: string;

    private localAdapter: LocalAdapter;
    private phoneAdapter: PhoneAdapter;

    constructor() {
        this.apiUrl = environment.apiUrl ? environment.apiUrl : "http://localhost:8080";
        this.SpringSecurityUsername = environment.springSecurityUsername;
        this.SpringSecurityPassword = environment.springSecurityPassword;

        this.localAdapter = new LocalAdapter();
        this.phoneAdapter = new PhoneAdapter();
    }

    private getRequestOptions() {
        return {
            headers: {
                'Content-Type': 'application/json',
                'Authorization': 'Basic ' + btoa(this.SpringSecurityUsername + ':' + this.SpringSecurityPassword),
                'Accept': '*/*'
            }
        };
    }

    // GET EMPLOYEE BY TOKEN
    async getEmployeeById(employeeId: number): Promise<EmployeeResponseDto | null> {
        try {
            const response = await axios.get(`${this.apiUrl}/employees/${employeeId}`, this.getRequestOptions());
            return {
                id: response.data.id,
                name: response.data.name,
                email: response.data.email,
                imgUrl: response.data.imgUrl,
                local: response.data.Local as LocalResponseDto,
                phone: response.data.phone as PhoneResponseDto,
                status: response.data.status as StatusResponseDto,
                establishment: response.data.establishment as EstablishmentResponseDto,
            } as EmployeeResponseDto;
        } catch (error) {
            console.error("Error getting employee by token:", error);
            return null;
        }
    }
    
    async getAllEmployee(): Promise<EmployeeResponseDto[] | null> {
        try {
            const response = await axios.get(`${this.apiUrl}/employees`, this.getRequestOptions());
            const employees = response.data.map((employee: EmployeeResponseDto) => ({
                id: response.data.id,
                name: response.data.name,
                email: response.data.email,
                imgUrl: response.data.imgUrl,
                local: response.data.Local as LocalResponseDto,
                phone: response.data.phone as PhoneResponseDto,
                status: response.data.status as StatusResponseDto,
                establishment: response.data.establishment as EstablishmentResponseDto,
            })) as EmployeeResponseDto[];

            return employees;
    

        } catch (error) {
            console.error("Error getting employee by token:", error);
            return null;
        }
    }

    // LOGIN EMPLOYEE
    async login(employeeLoginDto: EmployeeLoginDto): Promise<EmployeeResponseDto | null> {
        try {

            const response = await axios.post(`${this.apiUrl}/employees/login`, employeeLoginDto, this.getRequestOptions());
            console.log(this.getRequestOptions());
            

            if (response.status === 200 && response.data.id) {
                return {
                    id: response.data.id,
                    name: response.data.name,
                    email: response.data.email,
                    imgUrl: response.data.imgUrl,
                    local: response.data.local as LocalResponseDto,
                    phone: response.data.phone as PhoneResponseDto,
                    status: response.data.status as StatusResponseDto,
                    establishment: response.data.establishment as EstablishmentResponseDto,
                } as EmployeeResponseDto;
            } else {
                console.error("Error during service execution", response.status, response.data);
                return null;
            }
        } catch (error) {
            console.error("Error logging in employee:", error);
            return null;
        }
    }

    async create(employeeRequestDto: EmployeeRequestDto): Promise<EmployeeResponseDto | null> {
        try {

            // 1. Criar Local e obter fkLocal
            const localResponse = await this.localAdapter.create(employeeRequestDto.local);
            if (!localResponse || !localResponse.id) {
                console.error("Erro ao criar Local");
                return null;
            }

            // 2. Criar Phone e obter fkPhone
            const phoneResponse = await this.phoneAdapter.create(employeeRequestDto.phone);
            if (!phoneResponse || !phoneResponse.id) {
                console.error("Erro ao criar Phone");
                return null;
            }

            // 3. Criar o Employee com os FKs obtidos
            const employeeDto = {
                ...employeeRequestDto,
                fkLocal: localResponse.id,
                fkPhone: phoneResponse.id,
                fkStatus: 1,
            };

            const response = await axios.post(`${this.apiUrl}/employees`, employeeDto, this.getRequestOptions());
            return {
                id: response.data.id,
                name: response.data.name,
                email: response.data.email,
                imgUrl: response.data.imgUrl,
                local: response.data.local as LocalResponseDto,
                phone: response.data.phone as PhoneResponseDto,
                status: response.data.status as StatusResponseDto,
                establishment: response.data.establishment as EstablishmentResponseDto,
            } as EmployeeResponseDto;
        } catch (error) {
            console.error("Erro ao registrar o Estabelecimento", error);
            return null;
        }
    }

    // UPDATE EMPLOYEE
    async update(employeeId: number, updatedFields: Partial<EmployeeResponseDto>): Promise<EmployeeResponseDto | null> {
        try {
            const response = await axios.patch(`${this.apiUrl}/employees/${employeeId}`, updatedFields, this.getRequestOptions());
            return {
                id: response.data.id,
                name: response.data.name,
                email: response.data.email,
                imgUrl: response.data.imgUrl,
                employeeType: response.data.employeeType,
                local: response.data.Local as LocalResponseDto,
                phone: response.data.phone as PhoneResponseDto,
                status: response.data.status as StatusResponseDto,
                establishment: response.data.establishment as EstablishmentResponseDto,
            } as EmployeeResponseDto;
        } catch (error) {
            console.error("Error updating employee:", error);
            return null;
        }
    }    

    // DELETE EMPLOYEE
    async delete(employeeId: string): Promise<boolean> {
        try {
            await axios.delete(`${this.apiUrl}/employees/${employeeId}`, this.getRequestOptions());
            return true;
        } catch (error) {
            console.error("Error deleting employee:", error);
            return false;
        }
    }
}
