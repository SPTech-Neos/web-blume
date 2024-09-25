import axios from "axios";
import { environment } from "../../../../environment.config";

import { ProductResponseDto, ProductRequestDto } from "../../../utils/Products/Product/product.types";

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

    async create(productDto: ProductRequestDto): Promise<ProductResponseDto | null> {
        try {
            const response = await axios.post(`${this.apiUrl}/products`, productDto, this.getRequestOptions());
            return {
                id: response.data.id,
                name: response.data.name,
                brand: response.data.brand,
                type: response.data.type,
                value: response.data.value
            } as ProductResponseDto;
        } catch (error) {
            console.error("Error insert product: ", error);
            return null;
        }
    }

    async delete(productId: number): Promise<boolean> {
        try {
            await axios.delete(`${this.apiUrl}/products/${productId}`, this.getRequestOptions());
            return true;
        } catch (error) {
            console.error("Error deleting service:", error);
            return false;
        }
    }

    async getProductById(id: number): Promise<ProductResponseDto | null> {
        try {
            const response = await axios.get(`${this.apiUrl}/products/${id}`, this.getRequestOptions());
            return {
                id: response.data.id,
                name: response.data.name,
                imgUrl: response.data.imgUrl,
                brand: response.data.brand, 
                type: response.data.type,
                value: response.data.value
            } as ProductResponseDto;
        } catch (error) {
            console.error("Error getting service by token:", error);
            return null;
        }
    }

    async getProductsByEstablishmentId(estabId: number): Promise<ProductResponseDto[] | null> {
        try {
            const url = new URL(`${this.apiUrl}/products/establishment/${estabId}`);
    
            const response = await axios.get(url.toString(), this.getRequestOptions());
    
            const products = response.data.map((product: ProductResponseDto) => ({
                id: product.id,
                name: product.name,
                imgUrl: product.imgUrl,
                brand: product.brand, 
                type: product.type,
                value: product.value,
            })) as ProductResponseDto[];
    
            return products;
    
        } catch (error) {
            console.error(error);
            return null;
        }
    } 

}

