import styled from "styled-components";
import { colors as c } from "../../../styles/Colors";

export interface TextProps {
  children: string;
  weight?: string | number;
  color?:
    | "violet"
    | "green"
    | "black"
    | "white"
    | "gray"
    | "success"
    | "warning"
    | "error";
  size?: "extraSmall" | "small" | "medium" | "large" | "extraLarge";
}

const colorVariants = {
  violet: c.violet300,
  green: c.green300,
  black: c.gray900,
  white: c.gray100,
  gray: c.gray500,
  warning: c.warning,
  success: c.success,
  error: c.error,
};

const sizeVariants = {
  extraSmall: "12px",
  small: "14px",
  medium: "16px",
  large: "20px",
  extraLarge: "24px",
};

export const Text = styled.p<TextProps>`
  font-family: "Poppins";
  font-weight: ${(props) => (props.weight ? props.weight : "medium")};
  color: ${(props) =>
    props.color ? colorVariants[props.color] : colorVariants.black};
  font-size: ${(props) =>
    props.size ? sizeVariants[props.size] : sizeVariants.medium};
`;
