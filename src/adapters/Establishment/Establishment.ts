import axios from "axios";
import { environment } from "../../../environment.config";

import { EstablishmentResponseDto, EstablishmentLoginDto, EstablishmentRequestDto } from "../../utils/establishment.types";

export class EstablishmentAdapter {
    private readonly apiUrl: string;
    private readonly SpringSecurityUsername: string;
    private readonly SpringSecurityPassword: string;

    constructor() {
        this.apiUrl = environment.apiUrl ? environment.apiUrl : "http://localhost:8080";
        this.SpringSecurityUsername = environment.springSecurityUsername;
        this.SpringSecurityPassword = environment.springSecurityPassword;
    }

    async getEstablishmentByToken(token: string, jwtToken: string): Promise<EstablishmentResponseDto | null> {
        try {
            const requestOptions = {
                headers: {
                    'Authorization': `Bearer ${jwtToken}`
                }
            };
            const response = await axios.get(`${this.apiUrl}/establishment/${token}`, requestOptions);
            return response.data as EstablishmentResponseDto;
        } catch (error) {
            console.error(error);
            return null;
        }
    }

    async login(establishmentLoginDto: EstablishmentLoginDto): Promise<EstablishmentResponseDto | null> {
        try {
            const { email, password } = establishmentLoginDto;

            const requestOptions = {
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': 'Basic ' + btoa(this.SpringSecurityUsername + ':' + this.SpringSecurityPassword),
                    'Accept': '*/*'
                }
            };

            const response = await axios.post(`${this.apiUrl}/establishment/login`, { email, password }, requestOptions);

            if (response.status === 200 && response.data.establishmentId) {
                return {
                    establishmentId: response.data.establishmentId,
                    name: response.data.name,
                    email: response.data.email,
                    token: response.data.token
                } as EstablishmentResponseDto;
            } else {
                console.error("Erro durante execução do serviço", response.status, response.data);
                return null;
            }
        } catch (error) {
            console.error(error);
            return null;
        }
    }

    async register(establishmentRequestDto: EstablishmentRequestDto): Promise<EstablishmentResponseDto | null> {
        try {
            const { 
                name,
                cnpj,
                startShift,
                endShift,
                local,
                profilePic,
                description,
                fkServices
            } = establishmentRequestDto;
    
            const requestOptions = {
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${this.jwtToken}`,
                    'Accept': '*/*'
                }
            };
    
            const response = await axios.post(`${this.apiUrl}/establishment`, {
                name,
                cnpj,
                startShift,
                endShift,
                local,
                profilePic,
                description,
                fkServices
            }, requestOptions);
    
            if (response.status === 200) {
                return {
                    establishmentId: response.data.establishmentId,
                    name: response.data.name,
                    email: response.data.email,
                    token: response.data.token
                } as EstablishmentResponseDto;
            } else {
                console.error("Erro durante execução do serviço", response.status, response.data);
                return null;
            }
        } catch (error) {
            console.error(error);
            return null;
        }
    }
    
    async deleteEstablishment(establishmentId: number, jwtToken: string): Promise<boolean> {
        try {
            const requestOptions = {
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${jwtToken}`,
                    'Accept': '*/*'
                }
            };
        
            const response = await axios.delete(`${this.apiUrl}/establishment/${establishmentId}`, requestOptions);
        
            return response.status === 200;
        } catch (error) {
            console.error(error);
            return false;
        }
    }
    
    async update(establishmentId: number, updatedFields: Partial<EstablishmentResponseDto>, jwtToken: string): Promise<EstablishmentResponseDto | null> {
        try {
            const requestOptions = {
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${jwtToken}`,
                    'Accept': '*/*'
                }
            };
    
            const response = await axios.patch(`${this.apiUrl}/establishment/${establishmentId}`, updatedFields, requestOptions);
    
            return response.data as EstablishmentResponseDto;
        } catch (error) {
            console.error(error);
            return null;
        }
    }
}    