/* eslint-disable @typescript-eslint/no-explicit-any */
import axios from "axios";

import { environment } from "../../../environment.config";
import { 
    // DashboardRequestDto, 
    DashboardRequestDtoId, DashboardRequestDtoIdOnly, ProfitableResponseDto, PurchasedResponseDto, QuantityStatusResponseDto } from "../../utils/Dashboard/dashboard.types";

export class DashboardAdapter {
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
                'Authorization': 'Basic ' + btoa(this.SpringSecurityUsername + ':' + this.SpringSecurityPassword),
                'Accept': '*/*'
            }
        };
    }

    async getTotalGain(dashboardRequestDtoId: DashboardRequestDtoId): Promise<number | null> {
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
            
            const response = await axios.post(`${this.apiUrl}/dashboard/totalGain`, dashboardRequestDtoId, this.getRequestOptions());

            console.log("response totalGain = " + response.status);
            

            if (response.status == 204) {
                return null;
                
            }
    
            const totalGain = response.data
    
            return totalGain;
    
        } catch (error) {
            console.error(error);
            return null;
        }
    } 

    async getQuantityStatus(dashboardRequestDtoId: DashboardRequestDtoId): Promise<QuantityStatusResponseDto | null> {
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

            console.log(dashboardRequestDtoId);
            
            const response = await axios.post(`${this.apiUrl}/dashboard/quantityStatus`, dashboardRequestDtoId, this.getRequestOptions());
            
            console.log("response quantityStatus = " + response.status);

            if (response.status == 204) {
                return null;
                
            }
            
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

    async getLeastPurchased(dashboardRequestDtoId: DashboardRequestDtoIdOnly): Promise<PurchasedResponseDto | null> {
        try {
            
            dashboardRequestDtoId = {
                ...dashboardRequestDtoId
            }
            
            const response = await axios.post(`${this.apiUrl}/dashboard/leastPurchased`, dashboardRequestDtoId, this.getRequestOptions());

            console.log("response leastPurchased = " + response.status);
            
            if (response.status == 204) {
                return null;
                
            }
    
            const leastPurchased = response.data as PurchasedResponseDto;
    
            return leastPurchased;
    
        } catch (error) {
            console.error(error);
            return null;
        }
    } 

    async getMostPurchased(dashboardRequestDtoIdOnly: DashboardRequestDtoIdOnly): Promise<PurchasedResponseDto | null> {
        try {
            dashboardRequestDtoIdOnly = {
                ...dashboardRequestDtoIdOnly
            }
            
            const response = await axios.post(`${this.apiUrl}/dashboard/mostPurchased`, dashboardRequestDtoIdOnly, this.getRequestOptions());

            console.log("response mostPurchased = " + response.status);

            if (response.status == 204) {
                return null;
                
            }
    
            const mostPurchased = response.data as PurchasedResponseDto;
    
            return mostPurchased;
    
        } catch (error) {
            console.error(error);
            return null;
        }
    } 

    async getMostProfitable(dashboardRequestDtoIdOnly: DashboardRequestDtoIdOnly): Promise<ProfitableResponseDto | null> {
        try {

            dashboardRequestDtoIdOnly = {
                ...dashboardRequestDtoIdOnly
            }
            
            const response = await axios.post(`${this.apiUrl}/dashboard/mostProfitable`, dashboardRequestDtoIdOnly, this.getRequestOptions());

            console.log("response mostProfitable = " + response.status);

            if (response.status == 204) {
                return null;
                
            }
    
            const mostProfitable = response.data as ProfitableResponseDto;
    
            return mostProfitable;
    
        } catch (error) {
            console.error(error);
            return null;
        }
    } 

    async getLeastProfitable(dashboardRequestDtoIdOnly: DashboardRequestDtoIdOnly): Promise<ProfitableResponseDto | null> {
        try {
    
            dashboardRequestDtoIdOnly = {
                ...dashboardRequestDtoIdOnly
            }
            
            const response = await axios.post(`${this.apiUrl}/dashboard/leastProfitable`, dashboardRequestDtoIdOnly, this.getRequestOptions());

            console.log("response leastProfitable = " + response.status);

            if (response.status == 204) {
                return null;
                
            }
    
            const leastProfitable = response.data as ProfitableResponseDto;
    
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
            
            if (response.status == 204) {
                return null;
                
            }
    
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

            if (response.status == 204) {
                return null;
                
            }
    
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

            if (response.status == 204) {
                return null;
                
            }
    
            const ratingEstablishment = response.data;
    
            return ratingEstablishment;
    
        } catch (error) {
            console.error(error);
            return null;
        }
    } 
}