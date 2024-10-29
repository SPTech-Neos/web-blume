/* eslint-disable @typescript-eslint/no-explicit-any */
import axios from "axios";

import { environment } from "../../../environment.config";
import { DashboardRequestDto, DashboardRequestDtoId, ProfitableResponseDto, PurchasedResponseDto, QuantityStatusResponseDto } from "../../utils/Dashboard/dashboard.types";

export class DashboardAdapter {
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
                // 'Authorization': 'Basic ' + btoa(this.SpringSecurityUsername + ':' + this.SpringSecurityPassword),
                'Accept': '*/*'
            }
        };
    }

    async getTotalGain(dashboardRequestDto: DashboardRequestDto): Promise<number | null> {
        try {
    
            
            let {start, end} = dashboardRequestDto;
            
            start = start.replaceAll("/", "-");
            start = start.replaceAll(",", "");
            
            end = end.replaceAll("/", "-");
            end = end.replaceAll(",", "");
            
            dashboardRequestDto = {
                ...dashboardRequestDto,
                start,
                end
            }
            
            const response = await axios.post(`${this.apiUrl}/dashboard/totalGain`, dashboardRequestDto, this.getRequestOptions());
    
            const totalGain = response.data
    
            return totalGain;
    
        } catch (error) {
            console.error(error);
            return null;
        }
    } 

    async getQuantityStatus(dashboardRequestDto: DashboardRequestDto): Promise<QuantityStatusResponseDto | null> {
        try {
    
            let {start, end} = dashboardRequestDto;
            
            start = start.replaceAll("/", "-");
            start = start.replaceAll(",", "");
            
            end = end.replaceAll("/", "-");
            end = end.replaceAll(",", "");
            
            dashboardRequestDto = {
                ...dashboardRequestDto,
                start,
                end
            }

            console.log(dashboardRequestDto);
            
            
            const response = await axios.post(`${this.apiUrl}/dashboard/quantityStatus`, dashboardRequestDto, this.getRequestOptions());
    
            const quantityStatus = response.data.map((quantityStatus: any) => ({
                quantity: quantityStatus.quantity,
                status: quantityStatus.status,
            })) as QuantityStatusResponseDto;
    
            return quantityStatus;
    
        } catch (error) {
            console.error(error);
            return null;
        }
    } 

    async getLeastPurchased(dashboardRequestDtoId: DashboardRequestDtoId): Promise<PurchasedResponseDto | null> {
        try {
    
            let {start, end} = dashboardRequestDtoId;
            
            start = start.replaceAll("/", "-");
            start = start.replaceAll(",", "");
            
            end = end.replaceAll("/", "-");
            end = end.replaceAll(",", "");
            
            dashboardRequestDtoId = {
                ...dashboardRequestDtoId,
                start,
                end
            }
            
            const response = await axios.post(`${this.apiUrl}/dashboard/leastPurchased`, dashboardRequestDtoId, this.getRequestOptions());
    
            const leastPurchased = response.data.map((leastPurchased: any) => ({
                quantity: leastPurchased.quantity,
                name: leastPurchased.name,
            })) as PurchasedResponseDto;
    
            return leastPurchased;
    
        } catch (error) {
            console.error(error);
            return null;
        }
    } 

    async getMostPurchased(dashboardRequestDtoId: DashboardRequestDtoId): Promise<PurchasedResponseDto | null> {
        try {
    
            let {start, end} = dashboardRequestDtoId;
            
            start = start.replaceAll("/", "-");
            start = start.replaceAll(",", "");
            
            end = end.replaceAll("/", "-");
            end = end.replaceAll(",", "");
            
            dashboardRequestDtoId = {
                ...dashboardRequestDtoId,
                start,
                end
            }
            
            const response = await axios.post(`${this.apiUrl}/dashboard/mostPurchased`, dashboardRequestDtoId, this.getRequestOptions());
    
            const mostPurchased = response.data.map((mostPurchased: any) => ({
                quantity: mostPurchased.quantity,
                name: mostPurchased.name,
            })) as PurchasedResponseDto;
    
            return mostPurchased;
    
        } catch (error) {
            console.error(error);
            return null;
        }
    } 

    async getMostProfitable(dashboardRequestDtoId: DashboardRequestDtoId): Promise<ProfitableResponseDto | null> {
        try {
    
            let {start, end} = dashboardRequestDtoId;
            
            start = start.replaceAll("/", "-");
            start = start.replaceAll(",", "");
            
            end = end.replaceAll("/", "-");
            end = end.replaceAll(",", "");
            
            dashboardRequestDtoId = {
                ...dashboardRequestDtoId,
                start,
                end
            }
            
            const response = await axios.post(`${this.apiUrl}/dashboard/mostProfitable`, dashboardRequestDtoId, this.getRequestOptions());
    
            const mostProfitable = response.data.map(() => ({
                name: mostProfitable.name,
                price: mostProfitable.price,
            })) as ProfitableResponseDto;
    
            return mostProfitable;
    
        } catch (error) {
            console.error(error);
            return null;
        }
    } 

    async getLeastProfitable(dashboardRequestDtoId: DashboardRequestDtoId): Promise<ProfitableResponseDto | null> {
        try {
    
            let {start, end} = dashboardRequestDtoId;
            
            start = start.replaceAll("/", "-");
            start = start.replaceAll(",", "");
            
            end = end.replaceAll("/", "-");
            end = end.replaceAll(",", "");
            
            dashboardRequestDtoId = {
                ...dashboardRequestDtoId,
                start,
                end
            }
            
            const response = await axios.post(`${this.apiUrl}/dashboard/leastProfitable`, dashboardRequestDtoId, this.getRequestOptions());
    
            const leastProfitable = response.data.map((leastProfitable: any) => ({
                name: leastProfitable.name,
                price: leastProfitable.price,
            })) as ProfitableResponseDto;
    
            return leastProfitable;
    
        } catch (error) {
            console.error(error);
            return null;
        }
    } 

    async getCountMarket(dashboardRequestDtoId: DashboardRequestDtoId): Promise<number | null> {
        try {
    
            let {start, end} = dashboardRequestDtoId;
            
            start = start.replaceAll("/", "-");
            start = start.replaceAll(",", "");
            
            end = end.replaceAll("/", "-");
            end = end.replaceAll(",", "");
            
            dashboardRequestDtoId = {
                ...dashboardRequestDtoId,
                start,
                end
            }
            
            const response = await axios.post(`${this.apiUrl}/dashboard/countMarket`, dashboardRequestDtoId, this.getRequestOptions());
    
            const countMarket = response.data;
    
            return countMarket;
    
        } catch (error) {
            console.error(error);
            return null;
        }
    } 

    async getCountMarketCanceled(dashboardRequestDtoId: DashboardRequestDtoId): Promise<number | null> {
        try {
    
            let {start, end} = dashboardRequestDtoId;
            
            start = start.replaceAll("/", "-");
            start = start.replaceAll(",", "");
            
            end = end.replaceAll("/", "-");
            end = end.replaceAll(",", "");
            
            dashboardRequestDtoId = {
                ...dashboardRequestDtoId,
                start,
                end
            }
            
            const response = await axios.post(`${this.apiUrl}/dashboard/countMarketCanceled`, dashboardRequestDtoId, this.getRequestOptions());
    
            const countMarketCanceled = response.data;
    
            return countMarketCanceled;
    
        } catch (error) {
            console.error(error);
            return null;
        }
    } 

    async getRatingEstablishment(dashboardRequestDtoId: DashboardRequestDtoId): Promise<number | null> {
        try {
    
            let {start, end} = dashboardRequestDtoId;
            
            start = start.replaceAll("/", "-");
            start = start.replaceAll(",", "");
            
            end = end.replaceAll("/", "-");
            end = end.replaceAll(",", "");
            
            dashboardRequestDtoId = {
                ...dashboardRequestDtoId,
                start,
                end
            }
            
            const response = await axios.post(`${this.apiUrl}/dashboard/ratingEstablishment`, dashboardRequestDtoId, this.getRequestOptions());
    
            const ratingEstablishment = response.data;
    
            return ratingEstablishment;
    
        } catch (error) {
            console.error(error);
            return null;
        }
    } 
}