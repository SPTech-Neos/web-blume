import axios from "axios";
import { environment } from "../../../environment.config";
import { PhoneRequestDto, PhoneResponseDto } from "../../utils/Phone/phone.types";


export class PhoneAdapter {
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

    async create(phoneDto: PhoneRequestDto): Promise<PhoneResponseDto | null> {
        try {
            const response = await axios.post(`${this.apiUrl}/phones`, phoneDto, this.getRequestOptions());
            return {
                id: response.data.id,
                countryCode: response.data.countryCode,
                areaCode: response.data.areaCode,
                number: response.data.number,
            } as PhoneResponseDto;
        } catch (error) {
            console.error("Error creating employee:", error);
            return null;
        }
    }
}