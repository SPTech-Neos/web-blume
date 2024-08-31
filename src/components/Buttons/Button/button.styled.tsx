import styled from "styled-components";
import { colors as c } from "../../../styles/Colors";

export interface ButtonProps {
  children: string | JSX.Element | JSX.Element[];
  size?: "sm" | "md" | "lg";
  theme?: string;
  onClick?: () => void;
}

const themeVariants = {
  client: {
    border: "none",
    background: c.violet100,
    color: c.gray100,
    boxShadow: `0 0 24px 8px ${c.violet50}`,
  },
  establishment: {
    border: "none",
    background: c.green300,
    color: c.gray100,
    boxShadow: `0 0 24px 8px ${c.green50}`,
  },
  warning: {
    border: "none",
    background: c.warning,
    color: c.gray100,
    boxShadow: `0 0 24px 8px ${c.warning}`,
  },
  error: {
    border: "none",
    background: c.error,
    color: c.gray100,
    boxShadow: `0 0 24px 8px ${c.error}`,
  },
  success: {
    border: "none",
    background: c.success,
    color: c.gray100,
    boxShadow: `0 0 24px 8px ${c.success}`,
  },
  outlineClient: {
    border: `3px solid ${c.violet300}`,
    background: c.violet50,
    color: c.violet500,
    boxShadow: `0 0 24px 8px ${c.violet50}`,
  },
  outlineEstablishment: {
    border: `3px solid ${c.green800}`,
    background: c.green50,
    color: c.green800,
    boxShadow: `0 0 24px 8px ${c.green100}`,
  },
};

const sizeVariants = {
  sm: {
    fontSize: "small",
    borderRadius: "8px",
    padding: "6px 40px",
  },
  md: {
    fontSize: "medium",
    borderRadius: "12px",
    padding: "8px 50px",
  },
  lg: {
    fontSize: "large",
    borderRadius: "16px",
    padding: "10px 65px",
  },
};

console.log(
  undefined != undefined
    ? themeVariants["client" as keyof typeof themeVariants].background
    : themeVariants.client.background
);

export const Button = styled.button<ButtonProps>`
  font-size: ${(props) =>
    props.size ? sizeVariants[props.size].fontSize : sizeVariants.md.fontSize};
  border-radius: ${(props) =>
    props.size
      ? sizeVariants[props.size].borderRadius
      : sizeVariants.md.borderRadius};
  background: ${(props) =>
    !props.theme
      ? themeVariants[props.theme as keyof typeof themeVariants].background
      : themeVariants.client.background};
  box-shadow: ${(props) =>
    !props.theme
      ? themeVariants[props.theme as keyof typeof themeVariants].boxShadow
      : themeVariants.client.boxShadow};
  color: ${(props) =>
    !props.theme
      ? themeVariants[props.theme as keyof typeof themeVariants].color
      : themeVariants.client.color};
  border: ${(props) =>
    !props.theme
      ? themeVariants[props.theme as keyof typeof themeVariants].border
      : themeVariants.client.border};
  cursor: pointer;

  padding: ${(props) =>
    props.size ? sizeVariants[props.size].padding : sizeVariants.md.padding};

  text-transform: uppercase;
  font-weight: 500;
  font-family: "Poppins", sans-serif;

  transition: all 0.15s ease-in;

  &:hover {
    opacity: 0.75;
  }

  &:active {
    transition: none;
    opacity: 0.5;
  }
`;

// export const LinkButton = styled(PrimaryButton)<PrimaryButtonProps>`
//   background-color: ${c.gray100};
//   color: ${(props) => props.color || c.violet300};
//   box-shadow: none;
//   font-weight: bold;

//   &:hover {
//     background-color: ${c.gray100};
//     text-decoration: underline;
//   }
// `;

// export interface MoveButtonProps {
//   children: string | JSX.Element | JSX.Element[];
//   moveTo?: string;
// }

// export const MoveButton = styled.a`
//   width: 50px;
//   height: 50px;
// `;
