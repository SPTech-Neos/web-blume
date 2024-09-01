import React, { useState } from "react";
import * as S from "./dropdown.styled";
import Label from "../Label/Label";
import { DropdownMenu } from "@radix-ui/themes";

const Dropdown: React.FC<S.DropDownProps> = ({
  size,
  label,
  placeholder,
  list,
  theme,
  onChange,
  error,
  ...rest
}) => {
  const [text, setText] = useState("");
  const [isSelected, setIsSelected] = useState<boolean>(false);

  function handleClick(text: string) {
    setText(text);
    setIsSelected(true);
    // Chama o onChange para propagar o valor selecionado para o pai
    if (onChange) {
      onChange({ target: { value: text } } as React.ChangeEvent<HTMLInputElement>);
    }
  }

  function makeItems() {
    return list.map((el, i) => (
      <S.Item theme={theme} onClick={() => handleClick(el)} key={i}>
        {el}
      </S.Item>
    ));
  }

  return (
    <S.InputContainer size={size}>
      <Label label={label} />
      <S.Container>
        <S.Trigger isSelected={isSelected}>
          <S.Button variant="soft">
            {text === "" ? placeholder : text}
            <DropdownMenu.TriggerIcon />
          </S.Button>
        </S.Trigger>

        <S.Content>{makeItems()}</S.Content>
      </S.Container>
      {error && <S.ErrorText>{error}</S.ErrorText>}
    </S.InputContainer>
  );
};

export default Dropdown;