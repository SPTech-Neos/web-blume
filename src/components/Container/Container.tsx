import React from 'react';

import './container.css';

type Props = {
    children: string | JSX.Element | JSX.Element[],
    className?: string
}

const Container: React.FC<Props> = ({children, className}) => {
  return (
    <div className={className}>
      {children}
    </div>
  );
};

export default Container;