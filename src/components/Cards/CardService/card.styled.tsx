import styled from "styled-components";
import { colors as c } from "../../../styles/Colors";
import { device } from "../../../styles/breakpoints.styled";
import { PrimaryTitle } from "../../Texts/Title/title.styled";

export interface Props {
  imgSrc: string;
  titulo: string;
}
export const Card = styled.div`
  position: relative;
  width: 30%;
  max-width: 280px;
  height: 180px;
  margin: 25px 0;

  height: 176.31px;

  background-color: ${c.blue};
  
  border: none;
  border-radius: 16px;
  box-shadow: 2px 2px 50px -15px ${c.blue};

  display: flex;

  @media ${device.tablet} {
    height: 10%;
    width: 50%;
  }

  @media ${device.mobileL} {
    height: 10%;
    width: 80%;
  }
`;

export const CardImg = styled.img`
  position: absolute;
  top: -20%;
  right: 10%;
  max-width: 300px;
  height: auto;
  display: block;
  object-fit: cover;
  clip-path: polygon(50% 0%, 100% 50%, 50% 100%, 0% 50%);
`;

export const CardBody = styled.div`
  width: 90%;
  height: 90%;
  display: flex;
  align-items: flex-end;
  margin: 0 auto;
`;

export const CardBodyTitle = styled(PrimaryTitle)`
  font-size: 24px;
`;
