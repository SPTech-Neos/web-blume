import axios from "axios";
import { environment } from "../../../environment.config";

import { FilterRequestDto, FilterResponseDto } from "../../utils/Filter/filters.types";

export class FilterAdapter {
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

    async create(employeeDto: FilterRequestDto): Promise<FilterResponseDto | null> {
        try {
            const response = await axios.post(`${this.apiUrl}/filter`, employeeDto, this.getRequestOptions());
            return {
                filterId: response.data.id,
                price: response.data.price,
                establishment: response.data.establishment,
                service: response.data.service
            } as FilterResponseDto;
        } catch (error) {
            console.error("Error creating employee:", error);
            return null;
        }
    }
}