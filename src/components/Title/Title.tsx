import React from 'react';

import './title.css';

type Props = {
    children: string | JSX.Element | JSX.Element[];
    classes: string;
}

const Title: React.FC<Props> = ({children, classes}) => {
  return (
    <div className={classes}>
      {children}
    </div>
  );
};

export default Title;