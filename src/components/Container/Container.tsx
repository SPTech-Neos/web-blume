import React from 'react';

import * as S from './container.styled';

type Props = {
    children: string | JSX.Element | JSX.Element[];
    className?: string;
}

const Container: React.FC<Props> = ({children, className}) => {
  return (
    <S.Container className={className}>
      {children}
    </S.Container>
  );
};

export default Container;