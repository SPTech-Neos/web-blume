import axios from "axios";
import { environment } from "../../../environment.config";

import { Client } from "../../utils/client.types";

export class ClientAdapter {
    private readonly apiUrl: string;

    constructor() {
        this.apiUrl = environment.apiUrl ? environment.apiUrl : "http://localhost:8080";
    }

    async getClientById(ClientId: number): Promise<Client | null> {
        try {
            const response = await axios.get(`${this.apiUrl}/client/${ClientId}`);
            return response.data as Client;
        } catch (error) {
            console.error(error);
            return null;
        }
    }

    async login(email: string, password: string): Promise<string | null> {
        try {
            const response = await axios.post(`${this.apiUrl}/client/login`, {
                email,
                password,
            });
            if (response.status === 200) {
                return response.data;
            } else {
                return null;
            }
        } catch (error) {
            console.error(error);
            return null;
        }
    }
}
