import axios from "axios";
import { environment } from "../../../environment.config";

import { ServiceDto } from "../../utils/Products/service.types";

export class ServiceAdapter {
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

    async getServiceById(id: number): Promise<ServiceDto | null> {
        try {
            const response = await axios.get(`${this.apiUrl}/service/${id}`, this.getRequestOptions());
            return {
                serviceId: response.data.id,
                specification: response.data.specification,
                serviceType: response.data.serviceType,
            } as ServiceDto;
        } catch (error) {
            console.error("Error getting service by token:", error);
            return null;
        }
    }

    async register(serviceDto: ServiceDto): Promise<ServiceDto | null> {
        try {
            const response = await axios.post(`${this.apiUrl}/service`, serviceDto, this.getRequestOptions());
            return {
                serviceId: response.data.id,
                specification: response.data.specification,
                serviceType: response.data.serviceType,
            } as ServiceDto;
        } catch (error) {
            console.error("Error creating service:", error);
            return null;
        }
    }
    
    async delete(serviceId: number): Promise<boolean> {
        try {
            await axios.delete(`${this.apiUrl}/service/${serviceId}`, this.getRequestOptions());
            return true;
        } catch (error) {
            console.error("Error deleting service:", error);
            return false;
        }
    }
    
    async update(serviceId: number, updatedFields: Partial<ServiceDto>): Promise<ServiceDto | null> {
        try {
            const response = await axios.put(`${this.apiUrl}/service/${serviceId}`, updatedFields, this.getRequestOptions());
            return {
                serviceId: response.data.id,
                specification: response.data.specification,
                serviceType: response.data.serviceType,
            } as ServiceDto;
        } catch (error) {
            console.error("Error updating Service:", error);
            return null;
        }
    }
}    