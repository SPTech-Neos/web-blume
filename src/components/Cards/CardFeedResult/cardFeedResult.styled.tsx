import styled from "styled-components";
import { colors as c } from "../../../styles/Colors";
import { device } from "../../../styles/breakpoints.styled";
import { PrimaryTitle } from "../../Texts/Title/title.styled";

export interface PropsCardResult {
  children: string | JSX.Element | JSX.Element[];
  estabId: number;
  imgUrl: string;
  name: string;
  servicesName: string[];
}


export const PrimaryCardResult = styled.div`
  width: 35%;
  max-width: 550px;
  height: 35%;
  max-height: 300px;

  background-color: ${c.gray100};
  border: none;
  border-radius: 16px;
  box-shadow: 2px 2px 50px -15px ${c.gray700};

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  @media ${device.tablet} {

  }

  @media ${device.mobileL} {

  }
`;

export const PrimaryCardResultContainer = styled.div`
  width: 90%;
  height: 100%;

  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: start;
`;

export const EstablishmentImgUrl = styled.img`
  width: 100px;
  height: 100px;
`;

export const EstablishmentName = styled.h3`
  font-family: "Poppins", sans-serif;
  font-weight: 700;
  font-size: 32px;
`;

export const EstablishmentServicesTagContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  gap: 5px;
`;

export const EstablishmentServicesTag = styled.div`
  padding: 5px 8px;
  background-color: ${c.gray700};

  & > p {
    color: ${c.gray100};
    font-family: "Poppins", sans-serif;
    font-size: 8px;
  }
`;

// SECONDARY CARD RESULT ================

export const SecondaryCardResult = styled.div`
  width: 35%;
  max-width: 550px;
  height: 35%;
  max-height: 300px;

  background-color: ${c.gray100};
  border: none;
  border-radius: 16px;
  box-shadow: 2px 2px 50px -15px ${c.gray700};

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  @media ${device.tablet} {
    height: 10%;
    width: 50%;
  }

  @media ${device.mobileL} {
    height: 10%;
    width: 80%;
  }
`;

export const SecondaryCardResultContainer = styled.div`
  width: 90%;
  height: 100%;

  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: start;
`;