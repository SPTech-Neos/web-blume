import React, { useState } from "react";
import * as S from "./register.styled";

const CategorySelector: React.FC = () => {
  const [categories] = useState<string[]>(["Cate", "Goria", "Legal"]);
  
  const HandleCategories = (v: string[]) => {
    return v.map((el, i) => {
      // eslint-disable-next-line react-hooks/rules-of-hooks
      const [checked, setChecked] = useState(false);
      return (
        <S.Category
          key={i}
          isChecked={checked}
          onClick={() => setChecked(!checked)}
        >
          <h4>{el}</h4>
          {checked && <img src="/checked-green.svg" alt="" />}
        </S.Category>
      );
    });
  };

  return <S.Categories>{HandleCategories(categories)}</S.Categories>;
};

export default CategorySelector;
