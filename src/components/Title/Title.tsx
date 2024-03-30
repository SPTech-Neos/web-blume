import React from 'react';

import * as S from './title.styled';

type Props = {
    children: string | JSX.Element | JSX.Element[];
    classes: string;
}

const Title: React.FC<Props> = ({children, classes}) => {
  return (
    <S.PrimaryTitle className={classes}>
      {children}
    </S.PrimaryTitle>
  );
};

export default Title;