import React from 'react';

import * as S from './subtitle.styled';

const Subtitle: React.FC<S.SubitleProps> = ({ children, size, theme }) => {
  return (
    <S.PrimarySubtitle size={size} theme={theme}>
      {children}
    </S.PrimarySubtitle>
  );
};

export default Subtitle;