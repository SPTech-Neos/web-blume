import axios from "axios";
import { environment } from "../../../../environment.config";
import { AditumAdapter } from "../../Aditum/Aditum";

import { ProductResponseDto, ProductRequestDto, AditumProductDto} from "../../../utils/Products/Product/product.types";
// import { ProductResponseDto, ProductRequestDto } from "../../../utils/Products/Product/product.types";
import { ProductTypeResponseDto } from "../../../utils/Products/Product/productTypes.types";
import { StatusResponseDto } from "../../../utils/Status/status.types";
import { EstablishmentResponseDto } from "../../../utils/Establishment/establishment.types";

export class ProductAdapter {
    private readonly apiUrl: string;
    private readonly SpringSecurityUsername: string;
    private readonly SpringSecurityPassword: string;
    private aditumAdapter: AditumAdapter;


    constructor() {
        this.apiUrl = environment.apiUrl ? environment.apiUrl : "http://localhost:8080";
        this.SpringSecurityUsername = environment.springSecurityUsername;
        this.SpringSecurityPassword = environment.springSecurityPassword;
        
        this.aditumAdapter = new AditumAdapter();
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

    async create(productDto: ProductRequestDto, aditumProductDto: AditumProductDto): Promise<ProductResponseDto | null> {
        try {

            const aditumRequestOptions = await this.aditumAdapter.getRequestAditum();


            const aditumResponse = await axios.post(
                `${AditumAdapter.urlAditumPortal}/v1/product`,
                aditumProductDto,
                aditumRequestOptions
            );
                
            if (!aditumResponse.data || !aditumResponse.data.product.id) {
                console.error("Erro ao criar Produto na Aditum:", aditumResponse.data);
                return null;
            }

            console.log("Produto criado na Aditum com ID:", aditumResponse.data.product.id);

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
                brand: product.brand, 
                imgUrl: product.imgUrl,
                type: product.type as ProductTypeResponseDto,
                value: product.value,
                status: product.status as StatusResponseDto,
                establishment: product.establishment as EstablishmentResponseDto
            })) as ProductResponseDto[];

            // [
            //     {
            //       "id": 0,
            //       "name": "string",
            //       "brand": "string",
            //       "imgUrl": "string",
            //       "type": {
            //         "id": 0,
            //         "name": "string",
            //         "specification": "string"
            //       },
            //       "value": 0,
            //       "status": {
            //         "statusId": 0,
            //         "name": "string",
            //         "type": "string"
            //       },
            //       "establishment": {
            //         "id": 0,
            //         "aditumId": "string",
            //         "name": "string",
            //         "imgUrl": "string",
            //         "local": {
            //           "id": 0,
            //           "number": 0,
            //           "floor": 0,
            //           "complement": "string",
            //           "block": "string",
            //           "address": {
            //             "id": 0,
            //             "publicPlace": "string",
            //             "city": "string",
            //             "zipCode": "string",
            //             "uf": "string"
            //           }
            //         },
            //         "phone": {
            //           "id": 0,
            //           "countryCode": "string",
            //           "areaCode": "string",
            //           "number": "string"
            //         },
            //         "status": {
            //           "statusId": 0,
            //           "name": "string",
            //           "type": "string"
            //         },
            //         "startShift": {
            //           "hour": 0,
            //           "minute": 0,
            //           "second": 0,
            //           "nano": 0
            //         },
            //         "endShift": {
            //           "hour": 0,
            //           "minute": 0,
            //           "second": 0,
            //           "nano": 0
            //         },
            //         "description": "string",
            //         "cnpj": "string"
            //       }
            //     }
            //   ]
    
            return products;
    
        } catch (error) {
            console.error(error);
            return null;
        }
    } 

}

