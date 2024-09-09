import React from "react";
import * as S from "./button.styled";

export const Button: React.FC<S.ButtonProps> = ({
  onClick,
  theme,
  size,
  type,
  children,
}) => {
  console.log(theme);

  return (
    <S.Button type={type} theme={theme} onClick={onClick} size={size}>
      {children}
    </S.Button>
  );
};

// export const LinkButton: React.FC<S.PrimaryButtonProps> = ({
//   onClick,
//   type,
//   color,
//   width,
//   size,
//   children,
// }) => {
//   return (
//     <S.LinkButton
//       type={type}
//       onClick={onClick}
//       color={color}
//       width={width}
//       size={size}
//     >
//       {children}
//     </S.LinkButton>
//   );
// };

// export const MoveButton: React.FC<S.MoveButtonProps> = ({
//   moveTo,
//   children,
// }) => {
//   return <S.MoveButton href={moveTo}>{children}</S.MoveButton>;
// };
