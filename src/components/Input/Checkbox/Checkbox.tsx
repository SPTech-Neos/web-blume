import React from 'react';
import * as S from './Checkbox.styled';

import Subtitle from '../../Subtitle/Subtitle';

export const Checkbox: React.FC<S.CheckboxProps> = ({label}) => {
  return (
    <div className='row'>
      <S.Checkbox className='checkbox' label={label}></S.Checkbox>
      <Subtitle>{label}</Subtitle>
    </div>
  );
};
