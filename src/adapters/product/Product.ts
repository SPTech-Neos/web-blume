import axios from "axios";
import { environment } from "../../../environment.config.ts";

import { ProductResponseDto, ProductRequestDto } from "../../utils/Product/produtc.types.tsx";

export class ProductAdapter {
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
    // Create productType
    async createProductType(productTypeRequestDto: ProductRequestDto): Promise<ProductResponseDto | null> {
        try {
            const response = await axios.post(`${this.apiUrl}/productType`, productTypeRequestDto, this.getRequestOptions());
            return response.data as ProductResponseDto;
        } catch (error) {
            console.error(error);
            return null;
        }
    }

    // Get all productType
    async getAllProductType(): Promise<ProductResponseDto[] | null> {
        try {
            const response = await axios.get(`${this.apiUrl}/productType`, this.getRequestOptions());
            return response.data as ProductResponseDto[];
        } catch (error) {
            console.error(error);
            return null;
        }
    }

    // Get productType by id
    async getProductTypeById(id: number): Promise<ProductResponseDto | null> {
        try {
            const response = await axios.get(`${this.apiUrl}/productType/${id}`, this.getRequestOptions());
            return response.data as ProductResponseDto;
        } catch (error) {
            console.error(error);
            return null;
        }
    }

    // Create product 
    async createProduct(productRequestDto: ProductRequestDto): Promise<ProductResponseDto | null> {
        try {

            const response = await axios.post(`${this.apiUrl}/product`, productRequestDto, this.getRequestOptions());
            if (response.status === 200) {
                return response.data as ProductResponseDto;
            }else{
                console.error("Erro durante execução do serviço", response.status, response.data);
                return null;
            }
        } catch (error) {
            console.error(error);
            return null;
        }
    }
        // Create product at Aditum

    // Delete product
    async deleteProduct(id: number): Promise<ProductResponseDto | null> {
        try {
            const response = await axios.delete(`${this.apiUrl}/product/${id}`, this.getRequestOptions());
            return response.data as ProductResponseDto;
        } catch (error) {
            console.error(error);
            return null;
        }
    }

    // Update product
    async updateProduct(id: number, updatedFields: Partial<ProductRequestDto>): Promise<ProductResponseDto | null> {
        try {
            const response = await axios.put(`${this.apiUrl}/product/${id}`, updatedFields, this.getRequestOptions());
            return response.data as ProductResponseDto;
        } catch (error) {
            console.error(error);
            return null;
        }
    }
        // Update product at Aditum

    // Get all products
    async getAllProducts(): Promise<ProductResponseDto[] | null> {
        try {
            const response = await axios.get(`${this.apiUrl}/product`, this.getRequestOptions());
            return response.data as ProductResponseDto[];
        } catch (error) {
            console.error(error);
            return null;
        }
    }

    // Get product by id
    async getProductById(id: number): Promise<ProductResponseDto | null> {
        try {
            const response = await axios.get(`${this.apiUrl}/product/${id}`, this.getRequestOptions());
            return response.data as ProductResponseDto;
        } catch (error) {
            console.error(error);
            return null;
        }
    }


}

