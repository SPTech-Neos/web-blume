import axios from "axios";
import { environment } from "../../../../environment.config";
import { AditumAdapter } from "../../Aditum/Aditum";

import { ServiceRequestDto, ServiceResponseDto, AditumServicetDto } from "../../../utils/Products/Service/service.types";

export class ServiceAdapter {
    private readonly apiUrl: string;
    private readonly SpringSecurityUsername: string;
    private readonly SpringSecurityPassword: string;
    private aditumAdapter: AditumAdapter;


    constructor() {
        this.apiUrl = environment.apiUrl ? environment.apiUrl : "http://localhost:8080";
        this.SpringSecurityUsername = environment.springSecurityUsername;
        this.SpringSecurityPassword = environment.springSecurityPassword;

        this.aditumAdapter = new AditumAdapter();
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

    async getServiceById(id: number): Promise<ServiceResponseDto | null> {
        try {
            const response = await axios.get(`${this.apiUrl}/services/${id}`, this.getRequestOptions());
            return {
                serviceId: response.data.id,
                specification: response.data.specification,
                price: response.data.price,
                imgUrl: response.data.imgUrl,
                serviceType: response.data.serviceType,
            } as unknown as ServiceResponseDto;
        } catch (error) {
            console.error("Error getting service by token:", error);
            return null;
        }
    }

    async getAllServices(): Promise<ServiceResponseDto[] | null> {
        try {
            const url = new URL(`${this.apiUrl}/services`);
    
            const response = await axios.get(url.toString(), this.getRequestOptions());
    
            const services = response.data.map((service: ServiceResponseDto) => ({
                serviceId: service.id,
                specification: service.specification,
                price: service.price,
                imgUrl: service.imgUrl,
                serviceType: service.serviceType
            })) as ServiceResponseDto[];
    
            return services;
    
        } catch (error) {
            console.error(error);
            return null;
        }
    } 

    async getServicesByEstablishmentId(estabId: number): Promise<ServiceResponseDto[] | null> {
        try {
            const url = new URL(`${this.apiUrl}/establishments/${estabId}/services`);
    
            const response = await axios.get(url.toString(), this.getRequestOptions());
    
            const services = response.data.map((service: ServiceResponseDto) => ({
                serviceId: service.id,
                specification: service.specification,
                price: service.price,
                imgUrl: service.imgUrl,
                serviceType: service.serviceType
            })) as ServiceResponseDto[];
    
            return services;
    
        } catch (error) {
            console.error(error);
            return null;
        }
    } 

    async register(serviceRequestDto: ServiceRequestDto, aditumServicetDto: AditumServicetDto): Promise<ServiceResponseDto | null> {
        try {

            const aditumRequestOptions = await this.aditumAdapter.getRequestAditum();

            const aditumResponse = await axios.post(
                `${AditumAdapter.urlAditumPortal}/v1/product`,
                aditumServicetDto,
                aditumRequestOptions
            );

    
            if (!aditumResponse.data || !aditumResponse.data.product.id) {
                console.error("Erro ao criar Serviço na Aditum:", aditumResponse.data);
                return null;
            }
            
            // const response = await axios.post(`${this.apiUrl}/service`, serviceRequestDto, this.getRequestOptions());
            const response = await axios.post(`${this.apiUrl}/services`, serviceRequestDto, this.getRequestOptions());
            return {
                serviceId: response.data.id,
                specification: response.data.specification,
                price: response.data.price,
                imgUrl: response.data.imgUrl,
                serviceType: response.data.serviceType,
            } as unknown as ServiceResponseDto;
        } catch (error) {
            console.error("Error creating service:", error);
            return null;
        }
    }
    
    async delete(serviceId: number): Promise<boolean> {
        try {
            await axios.delete(`${this.apiUrl}/services/${serviceId}`, this.getRequestOptions());
            return true;
        } catch (error) {
            console.error("Error deleting service:", error);
            return false;
        }
    }
    
    async update(serviceId: number, updatedFields: Partial<ServiceRequestDto>): Promise<ServiceResponseDto | null> {
        try {
            const response = await axios.patch(`${this.apiUrl}/services/${serviceId}`, updatedFields, this.getRequestOptions());
            return {
                serviceId: response.data.id,
                specification: response.data.specification,
                price: response.data.price,
                imgUrl: response.data.imgUrl,
                serviceType: response.data.serviceType,
            } as unknown as ServiceResponseDto;
        } catch (error) {
            console.error("Error updating Service:", error);
            return null;
        }
    }

    // async getByIdEstablishment(establishmentId: number): Promise<ServiceRequestDto | null> {
    //     try {
    //         const response = await axios.get(`${this.apiUrl}/service/${establishmentId}`, this.getRequestOptions());
    //         return {
    //             serviceId: response.data.id,
    //             specification: response.data.specification,
    //             serviceType: response.data.serviceType,
    //         } as ServiceResponseDto;
    //     }
    // }

}    