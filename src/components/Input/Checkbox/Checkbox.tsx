import React from 'react';
import * as S from './Checkbox.styled';

import Subtitle from '../../Texts/Subtitle/Subtitle';

export const Checkbox: React.FC<S.CheckboxProps> = ({label}) => {
  return (
    <S.Checkbox label={label}>
      <input type='checkbox' />
      <Subtitle>{label}</Subtitle>
    </S.Checkbox>
  );
};
