import axios from "axios";
import { environment } from "../../../environment.config";
import { LocalRequestDto, LocalResponseDto } from "../../utils/Local/local.types";
import { AddressAdapter } from "../Address/Address";


export class LocalAdapter {
    private readonly apiUrl: string;
    private readonly SpringSecurityUsername: string;
    private readonly SpringSecurityPassword: string;

    private addressAdapter: AddressAdapter;

    constructor() {
        this.apiUrl = environment.apiUrl ? environment.apiUrl : "http://localhost:8080";
        this.SpringSecurityUsername = environment.springSecurityUsername;
        this.SpringSecurityPassword = environment.springSecurityPassword;

        this.addressAdapter = new AddressAdapter();
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

    async create(localRequestDto: LocalRequestDto): Promise<LocalResponseDto | null> {
        try {
            // 1. Criar Local e obter fkLocal
            const addressResponse = await this.addressAdapter.create(localRequestDto.address);
            if (!addressResponse || !addressResponse.id) {
                console.error("Erro ao criar Local no Local.ts");
                return null;
            }

            const localDto = {
                ...localRequestDto,
                address: addressResponse.id,
            };

            const response = await axios.post(`${this.apiUrl}/locals`, localDto, this.getRequestOptions());
            return {
                id: response.data.id,
                number: response.data.number,
                floor: response.data.floor,
                block: response.data.block,
                complement: response.data.complement,
                address: response.data.address
            } as LocalResponseDto;
        } catch (error) {
            console.error("Error creating employee:", error);
            return null;
        }
    }
}