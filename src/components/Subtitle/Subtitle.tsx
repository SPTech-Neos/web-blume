import React from 'react';

import * as S from './subtitle.styled';

const Subtitle: React.FC<S.SubtitleProps> = ({ children, size, theme, weight }) => {
  return (
    <S.PrimarySubtitle size={size} theme={theme} weight={weight}>
      {children}
    </S.PrimarySubtitle>
  );
};

export default Subtitle;