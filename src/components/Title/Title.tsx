import React from 'react';
import * as S from './title.styled';

const PrimaryTitle: React.FC<S.PrimaryTitleProps> = ({children, size, theme, outline}) => {
  return (
    <S.PrimaryTitle size={size} theme={theme} outline={outline}>
      {children}
    </S.PrimaryTitle>
  );
};

export default PrimaryTitle;