import React from "react";
import * as S from "./title.styled";

export const PrimaryTitle: React.FC<S.PrimaryTitleProps> = ({
  children,
  size,
  theme,
  outline,
  lines,
}) => {
  return (
    <S.PrimaryTitle
      className="primary-title"
      size={size}
      theme={theme}
      outline={outline}
      lines={lines}
    >
      {children}
    </S.PrimaryTitle>
  );
};

export const SecondaryTitle: React.FC<S.PrimaryTitleProps> = ({
  children,
  size,
  theme,
  outline,
  lines,
}) => {
  return (
    <S.SecondaryTitle
      className="secondary-title"
      size={size}
      theme={theme}
      outline={outline}
      lines={lines}
    >
      {children}
    </S.SecondaryTitle>
  );
};

export const Title: React.FC<S.TitleProps> = ({ theme, outline, children }) => {
  return (
    <S.Title theme={theme} outline={outline}>
      {children}
    </S.Title>
  );
};

export const Subtitle: React.FC<S.TitleProps> = ({
  theme,
  outline,
  children,
}) => {
  return (
    <S.Subtitle theme={theme} outline={outline}>
      {children}
    </S.Subtitle>
  );
};
