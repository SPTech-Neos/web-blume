import axios from "axios";
import { environment } from "../../../environment.config";
import { AddressRequestDto, AddressResponseDto } from "../../utils/Local/address.types";



export class AddressAdapter {
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

    async create(addressDto: AddressRequestDto): Promise<AddressResponseDto | null> {
        try {
            const response = await axios.post(`${this.apiUrl}/addresses`, addressDto, this.getRequestOptions());
            return {
                id: response.data.id,
                publicPlace: response.data.publicPlace,
                city: response.data.city,
                zipCode: response.data.zipCode,
                uf: response.data.uf,
            } as AddressResponseDto

        } catch (error) {
            console.error("Error creating employee:", error);
            return null;
        }
    }
}