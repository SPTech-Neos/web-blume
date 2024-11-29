/* eslint-disable @typescript-eslint/no-explicit-any */
import axios from "axios";

import { environment } from "../../../environment.config";
import { 
    BarChartData,
    // DashboardRequestDto, 
    DashboardRequestDto, Employees, ProfitableResponseDto, PurchasedResponseDto, QuantityStatusResponseDto } from "../../utils/Dashboard/dashboard.types";

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

    async getLeastPurchased(dashboardRequestDto: DashboardRequestDto): Promise<PurchasedResponseDto | null> {
        try {
            
            dashboardRequestDto = {
                ...dashboardRequestDto
            }
            
            const response = await axios.post(`${this.apiUrl}/dashboard/leastPurchased`, dashboardRequestDto, this.getRequestOptions());

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

    async getMostPurchased(dashboardRequestDto: DashboardRequestDto): Promise<PurchasedResponseDto | null> {
        try {
            dashboardRequestDto = {
                ...dashboardRequestDto
            }
            
            const response = await axios.post(`${this.apiUrl}/dashboard/mostPurchased`, dashboardRequestDto, this.getRequestOptions());

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

    async getMostProfitable(dashboardRequestDto: DashboardRequestDto): Promise<ProfitableResponseDto | null> {
        try {

            dashboardRequestDto = {
                ...dashboardRequestDto
            }
            
            const response = await axios.post(`${this.apiUrl}/dashboard/mostProfitable`, dashboardRequestDto, this.getRequestOptions());

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

    async getLeastProfitable(dashboardRequestDto: DashboardRequestDto): Promise<ProfitableResponseDto | null> {
        try {
    
            dashboardRequestDto = {
                ...dashboardRequestDto
            }
            
            const response = await axios.post(`${this.apiUrl}/dashboard/leastProfitable`, dashboardRequestDto, this.getRequestOptions());

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

    async getCountMarket(dashboardRequestDto: DashboardRequestDto): Promise<number | null> {
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
            
            const response = await axios.post(`${this.apiUrl}/dashboard/countMarket`, dashboardRequestDto, this.getRequestOptions());
            
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

    async getCountMarketCanceled(dashboardRequestDto: DashboardRequestDto): Promise<number | null> {
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
            
            const response = await axios.post(`${this.apiUrl}/dashboard/countMarketCanceled`, dashboardRequestDto, this.getRequestOptions());

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

    async getRatingEstablishment(dashboardRequestDto: DashboardRequestDto): Promise<number | null> {
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
            
            const response = await axios.post(`${this.apiUrl}/dashboard/ratingEstablishment`, dashboardRequestDto, this.getRequestOptions());

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

    async getEmployeeStats(dashboardRequestDto: DashboardRequestDto): Promise<Employees[] | null> {
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
            
            const response = await axios.post(`${this.apiUrl}/dashboard/employeeStats`, dashboardRequestDto, this.getRequestOptions());

            if (response.status == 204) {
                return null;
                
            }
    
            const employeeStats = response.data;
    
            return employeeStats;
    
        } catch (error) {
            console.error(error);
            return null;
        }
    } 

    async getBarChart(dashboardRequestDto: DashboardRequestDto, period: number): Promise<BarChartData[] | null> {
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
            
            const response = await axios.post(`${this.apiUrl}/dashboard/graficCountMarket/${period}`, dashboardRequestDto, this.getRequestOptions());

            if (response.status == 204) {
                return null;
                
            }
    
            const barChart = response.data;
    
            return barChart;
    
        } catch (error) {
            console.error(error);
            return null;
        }
    } 
}