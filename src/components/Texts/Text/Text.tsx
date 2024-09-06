import React from "react";
import * as S from "./text.styled";

const Text: React.FC<S.TextProps> = ({ children, weight, color, size }) => (
  <S.Text weight={weight} color={color} size={size}>
    {children}
  </S.Text>
);

export default Text;
