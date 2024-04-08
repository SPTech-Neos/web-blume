import React from 'react';
import * as S from './Checkbox.styled';

export const Checkbox: React.FC<S.CheckboxProps> = ({label}) => {
  return (
    <S.Checkbox label={label}></S.Checkbox>
  );
};
