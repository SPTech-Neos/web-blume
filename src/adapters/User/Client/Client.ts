import axios from "axios";
import { environment } from "../../../../environment.config";

import { ClientResponseDto } from "../../../utils/Users/Client/client.types";

export class ClientAdapter {
    private readonly apiUrl: string;
    // private readonly SpringSecurityUsername: string;
    // private readonly SpringSecurityPassword: string;

    constructor() {
        this.apiUrl = environment.apiUrl ? environment.apiUrl : "http://localhost:8080";
        // this.SpringSecurityUsername = environment.springSecurityUsername;
        // this.SpringSecurityPassword = environment.springSecurityPassword;
    }

    // GET CLIENTE BY TOKEN
    async getClientById(id: number, jwtToken: string): Promise<ClientResponseDto | null> {
        try {
            const requestOptions = {
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${jwtToken}`,
                    'Accept': '*/*'
                }
            };

            const response = await axios.get(`${this.apiUrl}/client/${id}`, requestOptions);
            return {
                clientId: response.data.clientId,
                name: response.data.name,
                email: response.data.email,
                token: response.data.token,
                imgUrl: response.data.imgUrl,
                Local: response.data.local
            } as ClientResponseDto;
        } catch (error) {
            console.error("Error getting Client by token:", error);
            return null;
        }
    }
    
}
