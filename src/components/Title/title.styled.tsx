import styled, { css } from "styled-components";

import { device } from "../../styles/breakpoints.styled";

import outlineSrc from "../../../src/assets/title-svg.svg";

export interface TitleProps {
  children: string | string[] | JSX.Element[] | JSX.Element;
  size?: "sm" | "md" | "lg";
  theme?: "light" | "dark" | "blue" | undefined;
  outline?: boolean;
  lines?: boolean;
}

const PrimarySizeVariants = {
  sm: {
    fontSize: "2rem",
  },
  md: {
    fontSize: "4.125rem",
  },
  lg: {
    fontSize: "5rem",
  },
};

const themeVariants = {
  light: {
    colorTheme: "var(--color-gray-100)",
  },
  dark: {
    colorTheme: "var(--color-gray-900)",
  },
  blue: {
    colorTheme: "var(--color-blue-100)",
  },
};

const getColor = (theme: string | undefined): string => {
  if (theme === "light" || theme === "dark" || theme === "blue") {
    return themeVariants[theme].colorTheme; // Access colorTheme directly after type guard
  }
  return "var(--color-gray-900)"; // Default color
};

export const PrimaryTitle = styled.h1<TitleProps>`
  font-family: var(--font-text);
  font-size: ${(props) => PrimarySizeVariants[props.size || "md"].fontSize};
  color: ${(props) => getColor(props.theme)};
  font-weight: bold;
  text-transform: uppercase;
  position: relative;

  display: flex;
  justify-content: center;
  align-items: center;

  @media ${device.tablet} {
    font-size: ${(props) => props.size === "sm" ? PrimarySizeVariants["sm"].fontSize : PrimarySizeVariants["md"].fontSize};
  }

  @media ${device.mobileL} {
    font-size: ${() => PrimarySizeVariants["sm"].fontSize};
  }

  &::before {
    content: "";
    position: absolute;
    width: 110%;
    height: 100%;
    background-size: contain;
    background-repeat: no-repeat;
    background-position: center;

    transform: translateX();

    ${(props) =>
      props.outline &&
      css`
        top: 25%;
        background-image: url(${outlineSrc});
    `}
  }
`;

const SecondarySizeVariants = {
  sm: {
    fontSize: "1.75rem",
  },
  md: {
    fontSize: "2rem",
  },
  lg: {
    fontSize: "2.25rem",
  },
};

export const SecondaryTitle = styled.h2<TitleProps>`
  font-family: var(--font-text);
  font-size: ${(props) => SecondarySizeVariants[props.size || "sm"].fontSize};
  color: ${(props) => getColor(props.theme)};
  font-weight: bold;
  text-transform: uppercase;
  position: relative;

  display: flex;
  justify-content: center;
  align-items: center;

  @media ${device.tablet} {
    font-size: ${(props) => props.size === "sm" ? PrimarySizeVariants["sm"].fontSize : PrimarySizeVariants["md"].fontSize};
  }

  @media ${device.mobileL} {
    font-size: ${() => PrimarySizeVariants["sm"].fontSize};
  }

  &::before,
  &::after {
    content: "";
    position: absolute;
    width: 15%;
    max-width: 70px;
    height: 2px;
    background-color: var(--color-violet-300);
  }

  &::before {
    left: 0;
    top: 50%;
    transform: translateY(-50%);
  }

  &::after {
    right: 0;
    top: 50%;
    transform: translateY(-50%);
  }

  ${(props) =>
    !props.lines &&
    css`
      &::before,
      &::after {
        display: none;
      }
    `}
`;
