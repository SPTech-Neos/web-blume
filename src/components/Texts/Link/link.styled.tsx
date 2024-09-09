import styled from "styled-components";
import { colors as c } from "../../../styles/Colors";

export interface LinkProps {
  id?: string;
  children: string | JSX.Element | JSX.Element[];
  href: string;
  size?: "sm" | "md" | "lg";
  font?: "Poppins" | "Inter";
}

const sizeVariants = {
  xsm: "12px",
  sm: "14px",
  md: "16px",
  lg: "20px",
  xlg: "24px",
};

export const Link = styled.a.attrs((props) => ({
  href: props.href,
}))<LinkProps>`
  font-size: ${(props) => sizeVariants[props.size || "md"]};
  color: ${c.violet300};
  font-weight: bold;
  transition: all 0.25s ease-in-out;
  font-family: ${(props) => props.font || "Inter"};

  &:hover {
    text-decoration: underline;
    color: ${c.violet500};
  }
`;
