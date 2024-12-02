/* eslint-disable @typescript-eslint/no-explicit-any */
import { EstablishmentResponseDto } from "../../Establishment/establishment.types";
import { LocalRequestDto, LocalResponseDto } from "../../Local/local.types";
import { PhoneRequestDto, PhoneResponseDto } from "../../Phone/phone.types";
import { ServiceResponseDto } from "../../Products/Service/service.types";
import { StatusResponseDto } from "../../Status/status.types";
import { EmployeeTypeResponseDto } from "./employeeType.types";

export interface EmployeeResponseDto {
  // [x: string]: any;
  id: string;
  name: string;
  email: string;
  password: string;
  imgUrl?: string;
  establishment: EstablishmentResponseDto;
  local: LocalResponseDto;
  phone: PhoneResponseDto;
  status: StatusResponseDto;
  employeeType: EmployeeTypeResponseDto;
}

export interface EmployeeResponseFullDto extends EmployeeResponseDto {
  [x: string]: any;
  id: string;
  name: string;
  email: string;
  imgUrl?: string;
  establishment: EstablishmentResponseDto;
  employeeType: EmployeeTypeResponseDto;
  services: ServiceResponseDto;
}

export interface EmployeeLoginDto {
  email: string;
  password: string;
}

export interface EmployeeRequestDto {
  name: string;
  email: string;
  password: string;
  imgUrl?: string;
  description?: string;
  fkEstablishment: number;
  employeeType: number;
  local: LocalRequestDto;
  phone: PhoneRequestDto;
  fkStatus: number;
}
