// import { DatasetType } from "@mui/x-charts/models/seriesType";

export interface DashboardRequestDto {
  establishment: number;
  start: string;
  end: string;
}

export interface DashboardRequestDtoId {
  establishmentId: number;
  start: string;
  end: string;
}

export interface DashboardRequestDtoIdOnly {
  establishmentId: number;
}

// export interface TotalGainResponseDto {
//   start: string;
//   end: string;
//   balance: number;
// }

export interface QuantityStatusResponseDto {
  quantity: number;
  status: string;
}

export interface PurchasedResponseDto {
  quantity: number;
  name: string;
}

export interface ProfitableResponseDto {
  name: string;
  price: number;
}

export interface Employees {
  urlPic: String;
  empName: String;
  empRate: Number;
  empHours: String;
  empValue: Number;
}

export interface BarChartData {
  canceled: number;
  complete: number;
  day: string;
}
