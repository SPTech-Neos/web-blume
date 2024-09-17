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
