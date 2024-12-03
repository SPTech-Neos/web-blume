/* eslint-disable @typescript-eslint/no-explicit-any */
import axios from "axios";

import { environment } from "../../../environment.config";
import { ImageRequestDto } from "../../utils/Image/images.types";

export class ImageAdapter {
    private readonly apiUrl: string;
    // private readonly SpringSecurityUsername: string;
    // private readonly SpringSecurityPassword: string;

    constructor() {
        this.apiUrl = environment.apiUrl ? environment.apiUrl : "http://localhost:8080";
        // this.SpringSecurityUsername = environment.springSecurityUsername;
        // this.SpringSecurityPassword = environment.springSecurityPassword;
    }

    private getRequestOptions() {
        return {
            headers: {
                'Content-Type': 'application/json',
                // 'Authorization': 'Basic ' + btoa(this.SpringSecurityUsername + ':' + this.SpringSecurityPassword),
                'Accept': '*/*'
            }
        };
    }


    async registerImageEstab(imageRequestDto: ImageRequestDto): Promise<string | null> {
        try {
    
            const response = await axios.post(`${this.apiUrl}/files/img-upload/establishment`, imageRequestDto, this.getRequestOptions());
    
            return response.data;
    
        } catch (error) {
            console.error(error);
            return null;
        }
    } 

}