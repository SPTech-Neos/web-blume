import styled, { css } from "styled-components";
import { colors as c } from "../../../styles/Colors";
import { device } from "../../../styles/breakpoints.styled";
import outlineSrc from "../../../assets/title-svg.svg";

export interface PrimaryTitleProps {
  children: string | string[] | JSX.Element[] | JSX.Element;
  size?: "sm" | "md" | "lg";
  theme?: "light" | "dark" | "blue" | undefined;
  outline?: boolean;
  lines?: boolean;
}

const PrimarySizeVariants = {
  sm: {
    fontSize: "2.15rem",
  },
  md: {
    fontSize: "3rem",
  },
  lg: {
    fontSize: "5rem",
  },
};

const themeVariants = {
  light: {
    colorTheme: c.gray100,
  },
  dark: {
    colorTheme: c.gray900,
  },
  // blue: {
  //   colorTheme: "var(--color-blue-100)",
  // },
};

const getColor = (theme: string | undefined): string => {
  if (theme === "light" || theme === "dark") {
    return themeVariants[theme].colorTheme;
  }
  return c.gray900;
};

export const PrimaryTitle = styled.h1<PrimaryTitleProps>`
  font-family: var(--font-text);
  font-size: ${(props) => PrimarySizeVariants[props.size || "md"].fontSize};
  color: ${(props) => getColor(props.theme)};
  text-transform: uppercase;
  position: relative;

  display: flex;
  justify-content: center;
  align-items: center;

  z-index: 2;

  @media ${device.tablet} {
    font-size: ${(props) =>
      props.size === "sm"
        ? PrimarySizeVariants["sm"].fontSize
        : PrimarySizeVariants["md"].fontSize};
  }

  @media ${device.mobileL} {
    font-size: ${() => PrimarySizeVariants["sm"].fontSize};
  }

  @media ${device.mobileM} {
    text-wrap: wrap;
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
    fontSize: "1.30rem",
  },
  md: {
    fontSize: "2rem",
  },
  lg: {
    fontSize: "2.25rem",
  },
};

export const SecondaryTitle = styled.h2<PrimaryTitleProps>`
  font-family: "Poppins";
  font-size: ${(props) => SecondarySizeVariants[props.size || "md"].fontSize};
  color: ${(props) => getColor(props.theme)};
  font-weight: bold;
  text-transform: uppercase;
  position: relative;

  display: flex;
  justify-content: center;
  align-items: center;

  @media ${device.tablet} {
    font-size: ${(props) =>
      props.size === "sm"
        ? SecondarySizeVariants["sm"].fontSize
        : SecondarySizeVariants["md"].fontSize};
  }

  @media ${device.mobileL} {
    font-size: ${() => SecondarySizeVariants["sm"].fontSize};
  }

  &::before,
  &::after {
    content: "";
    position: absolute;
    width: 15%;
    max-width: 70px;
    height: 2px;
    background-color: ${c.violet300};
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

  @media ${device.tablet} {
    &::before {
      display: none;
    }

    &::after {
      width: 100%;
      max-width: none;
      left: 0;
      top: 100%;
    }
  }
`;

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

export interface TitleProps {
  children: string | string[] | JSX.Element[] | JSX.Element;
  color?:
    | "violet"
    | "green"
    | "black"
    | "white"
    | "gray"
    | "success"
    | "warning"
    | "error";
  outline?: "green" | "violet";
}

export interface LineProps {
  outline?: "green" | "violet";
}

export const Title = styled.h1<TitleProps>`
  font-weight: bold;
  text-transform: uppercase;
  font-family: "Poppins";
  font-size: 40px;
  color: ${(props) =>
    props.color ? colorVariants[props.color] : colorVariants.black};
`;

export const Subtitle = styled.h2<TitleProps>`
  font-weight: bold;
  text-transform: uppercase;
  font-family: "Poppins";
  font-size: 32px;
  color: ${(props) =>
    props.color ? colorVariants[props.color] : colorVariants.black};
  white-space: nowrap;
`;

export const SubtitleRow = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 15px;
`;

export const SubLine = styled.hr<LineProps>`
  width: 100%;
  // min-width: 50px;
  height: 4px;
  border-radius: 5px;
  background: ${(props) =>
    props.outline != undefined && props.outline == "green"
      ? colorVariants.green
      : colorVariants.violet};
  border: none;
`;
