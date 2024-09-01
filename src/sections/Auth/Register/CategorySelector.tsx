import React, { useState } from "react";
import * as S from "./register.styled";

interface CategorySelectorProps {
    onChange: (selectedCategories: string[]) => void;
  }
  
  const CategorySelector: React.FC<CategorySelectorProps> = ({ onChange }) => {
    const [categories] = useState<string[]>(["Cate", "Goria", "Legal"]);
    const [selectedCategories, setSelectedCategories] = useState<string[]>([]);
  
    const handleCategoryClick = (category: string) => {
      // Atualiza o estado das categorias selecionadas
      const updatedCategories = selectedCategories.includes(category)
        ? selectedCategories.filter((c) => c !== category)
        : [...selectedCategories, category];
  
      setSelectedCategories(updatedCategories);
      // Chama o onChange com as categorias atualizadas
      onChange(updatedCategories);
    };
  
    return (
      <S.Categories>
        {categories.map((category, index) => (
          <S.Category
            key={index}
            isChecked={selectedCategories.includes(category)}
            onClick={() => handleCategoryClick(category)}
          >
            <h4>{category}</h4>
            {selectedCategories.includes(category) && (
              <img src="/checked-green.svg" alt="" />
            )}
          </S.Category>
        ))}
      </S.Categories>
    );
  };
  
  export default CategorySelector;
