import axios from "axios";
import { environment } from "../../../environment.config";
import { SchedulingRequestDto, SchedulingResponseDto } from "../../utils/Scheduling/scheduling.types";


export class SchedulingAdapter {
    private readonly apiUrl: string;
    private readonly SpringSecurityUsername: string;
    private readonly SpringSecurityPassword: string;

    constructor() {
        this.apiUrl = environment.apiUrl ? environment.apiUrl : "http://localhost:8080";
        this.SpringSecurityUsername = environment.springSecurityUsername;
        this.SpringSecurityPassword = environment.springSecurityPassword;
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

    async getAllSchedulings(): Promise<SchedulingResponseDto[] | null> {
        try {
            const response = await axios.get(`${this.apiUrl}/schedulings`, this.getRequestOptions());
            const scheduling: SchedulingResponseDto[] | PromiseLike<SchedulingResponseDto[] | null> | null = [];
            response.data.forEach((e: SchedulingResponseDto) => {
                scheduling.push(e)
            });
        
            return scheduling
        } catch (error) {
            console.error("Error getting service by token:", error);
            return null;
        }
    }

    async getSchedulingsByClientId(clientId: number): Promise<SchedulingResponseDto[] | null> {
        try {
            const response = await axios.get(`${this.apiUrl}/schedulings/client/${clientId}`, this.getRequestOptions());
            return response.data;
        } catch (error) {
            console.error("Error getting schedulings by client ID:", error);
            return null;
        }
    }

    async getSchedulingsByEmployeeId(employeeId: number): Promise<SchedulingResponseDto[] | null> {
        try {
            const response = await axios.get(`${this.apiUrl}/schedulings/employee/${employeeId}`, this.getRequestOptions());
            return response.data;
        } catch (error) {
            console.error("Error getting schedulings by employee ID:", error);
            return null;
        }
    }

    
    async register(schedulingDto: SchedulingRequestDto): Promise<SchedulingResponseDto | null> {
        try {
            const response = await axios.post(`${this.apiUrl}/schedulings`, schedulingDto, this.getRequestOptions());
            return {
                serviceId: response.data.id,
                specification: response.data.specification,
                imgUrl: response.data.imgUrl,
                serviceType: response.data.serviceType,
                client: response.data.client,
                employee: response.data.employee,
                idSchedulig: response.data.id,
                service: response.data.service,
                schedulingStatus: response.data.schedulingStatus
            }  as SchedulingResponseDto;
        } catch (error) {
            console.error("Error creating service:", error);
            return null;
        }
    }

    async delete(schedulingId: number): Promise<boolean> {
        try {
            await axios.delete(`${this.apiUrl}/schedulings/${schedulingId}`, this.getRequestOptions());
            return true;
        } catch (error) {
            console.error("Error deleting service:", error);
            return false;
        }
    }

}
