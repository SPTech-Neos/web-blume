import React from 'react';

import * as S from './subtitle.styled';

type Props = {
    children: string | JSX.Element | JSX.Element[];
    classes: string;
}

const Subtitle: React.FC<Props> = ({children, classes}) => {
  return (
    <S.PrimarySubtitle className={classes}>
      {children}
    </S.PrimarySubtitle>
  );
};

export default Subtitle;