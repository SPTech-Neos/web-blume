/* eslint-disable @typescript-eslint/no-explicit-any */
import axios from "axios";
import { environment } from "../../../environment.config";

import { LocalAdapter } from "../Local/Local" 
import { PhoneAdapter } from "../Phone/Phone"; 

import { EstablishmentResponseDto, EstablishmentRequestDto } from "../../utils/Establishment/establishment.types";
import { LocalResponseDto } from "../../utils/Local/local.types";
import { PhoneResponseDto } from "../../utils/Phone/phone.types";
import { StatusResponseDto } from "../../utils/Status/status.types";

export class EstablishmentAdapter {
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

    async getAllEstablishments(): Promise<EstablishmentResponseDto[] | null> {
        try {
    
            const response = await axios.get(`${this.apiUrl}/establishments`, this.getRequestOptions());
    
            const establishments = response.data.map((establishment: any) => ({
                establishmentId: establishment.id,
                name: establishment.name,
                imgUrl: establishment.imgUrl,
                company: establishment.company,
                local: establishment.local
            })) as EstablishmentResponseDto[];
    
            return establishments;
    
        } catch (error) {
            console.error(error);
            return null;
        }
    }    

    async getEstablishmentById(id: number): Promise<EstablishmentResponseDto | null> {
        try {

            const response = await axios.get(`${this.apiUrl}/establishments/${id}`, this.getRequestOptions());
            return {
                id: response.data.id,
                name: response.data.name,
                imgUrl: response.data.imgUrl,
                local: response.data.local as LocalResponseDto,
                phone: response.data.phone as PhoneResponseDto,
                status: response.data.status as StatusResponseDto,
            } as EstablishmentResponseDto;
        } catch (error) {
            console.error(error);
            return null;
        }
    }

    async registerEstablishment(establishmentRequestDto: EstablishmentRequestDto): Promise<EstablishmentResponseDto | null> {
        try {

            // 1. Criar Local e obter fkLocal
            const localResponse = await this.localAdapter.create(establishmentRequestDto.local);
            if (!localResponse || !localResponse.id) {
                console.error("Erro ao criar Local");
                return null;
            }

            // 2. Criar Phone e obter fkPhone
            const phoneResponse = await this.phoneAdapter.create(establishmentRequestDto.phone);
            if (!phoneResponse || !phoneResponse.id) {
                console.error("Erro ao criar Phone");
                return null;
            }

            // 3. Criar o Establishment com os FKs obtidos
            const establishmentDto = {
                ...establishmentRequestDto,
                localId: localResponse.id,
                phoneId: phoneResponse.id,
                statusId: 1,
            };

            const response = await axios.post(`${this.apiUrl}/establishments`, establishmentDto, this.getRequestOptions());
            return {
                id: response.data.id,
                name: response.data.name,
                imgUrl: response.data.imgUrl,
                local: response.data.local as LocalResponseDto,
                phone: response.data.phone as PhoneResponseDto,
                status: response.data.status as StatusResponseDto,
            } as EstablishmentResponseDto;
        } catch (error) {
            console.error("Erro ao registrar o Estabelecimento", error);
            return null;
        }
    }
    
    async delete(establishmentId: number): Promise<boolean> {
        try {        
            const response = await axios.delete(`${this.apiUrl}/establishments/${establishmentId}`, this.getRequestOptions());
        
            return response.status === 200;
        } catch (error) {
            console.error(error);
            return false;
        }
    }
    
    async update(establishmentId: number, updatedFields: Partial<EstablishmentRequestDto>): Promise<EstablishmentResponseDto | null> {
        try {
    
            const response = await axios.patch(`${this.apiUrl}/establishments/${establishmentId}`, updatedFields, this.getRequestOptions());
    
            return {
                id: response.data.id,
                name: response.data.name,
                imgUrl: response.data.imgUrl,
                company: response.data.company,
                local: response.data.local
            } as EstablishmentResponseDto;
        } catch (error) {
            console.error(error);
            return null;
        }
    }
}    