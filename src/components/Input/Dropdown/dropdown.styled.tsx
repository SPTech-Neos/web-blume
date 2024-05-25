import { ruby } from "@radix-ui/colors";
import styled, { ThemeProvider } from "styled-components";

import { colors as c } from "../../../styles/Colors";
import { DropdownMenu } from "@radix-ui/themes";

const theme = {
  colors: {
    ...ruby,
  },
};

export interface DropDownProps {
  type?: "text" | "password" | "email" | string;
  placeholder?: string;
  value: string;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  size?: "full" | "big" | "small" | "half";
  label: string;
  list: string[];
  // children: string | JSX.Element | JSX.Element[];
}

export interface ColorProps {
  color: string;
}

export interface InputContainerProps {
  size?: "full" | "big" | "small" | "half";
}

const SizeVariants = {
  full: {
    width: "100%",
  },
  big: {
    width: "80%",
  },
  half: {
    width: "45%",
  },
  small: {
    width: "15%",
  },
};

export const Container = styled(DropdownMenu.Root)`
  background-color: ${c.violet300};
`;

export const Trigger = styled(DropdownMenu.Trigger)`
  background-color: ${c.gray100};
  border-radius: 0px;
  border: 3px solid ${c.gray900};
  color: ${c.gray900};
  outline: none;
  font-family: "Poppins";
  padding: 10px 15px;
  cursor: pointer;
  font-weight: 500;
  transition: all 0.25s ease-in-out;

  &:hover,
  &:focus {
    border: 3px solid ${c.violet300};
    outline: none;
  }

  &::selection {
    background-color: ${c.violet300};
  }
`;

export const Content = styled(DropdownMenu.Content)`
  background-color: ${c.gray100};
  color: ${c.gray900};
  font-family: "Poppins";
  border-radius: 0px;

  position: relative;
  z-index: 0;
`;

export const Item = styled(DropdownMenu.Item)`
  font-weight: 400;
  font-size: 13px;

  &:hover {
    background-color: ${c.violet300};
    cursor: pointer;
    border-radius: 0px;
  }
`;

export const Separator = styled(DropdownMenu.Separator)``;

export const Sub = styled(DropdownMenu.Sub)``;

export const SubTrigger = styled(DropdownMenu.SubTrigger)``;

export const SubContent = styled(DropdownMenu.SubContent)``;

export const InputContainer = styled.div<InputContainerProps>`
  background-color: ${c.gray100};
  // margin: 25px 0;
  width: ${(props) => SizeVariants[props.size || "full"].width};

  color: ${c.gray900};
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

export const DropDown = styled.input.attrs((props) => ({
  type: props.type || "text",
  placeholder: props.placeholder || "Digite aqui...",
  required: props.required || false,
}))<DropDownProps>`
  position: relative;
  z-index: 0;

  font-size: 14px;
  font-family: "Josefin Sans", "Arial";

  margin: 0;
  background-color: ${c.gray100};
  border: 3px solid ${c.gray900};
  padding: 5px 25px;
  font-size: 16px;
  font-weight: regular;
  font-family: "Poppins", "Arial";
  transition: all 0.2s ease-in;

  width: 100%;

  &::placeholder {
    color: ${c.gray500};
  }

  &:hover,
  &:focus {
    border: 3px solid ${c.violet300};
    outline: none;
  }

  &::selection {
    background-color: ${c.violet300};
  }
`;

// export const DropDown = styled(SlInput)
//     .attrs((props => ({
//         type: props.type || 'text',
//         placeholder: props.placeholder || 'Digite aqui...',
//         clearable: props.clearable || false,
//         required: props.required || false,
//         passwordToggle: props.type == 'password' ? true : false,

//     })
// ))<DropDownProps>`

//     &::part(clear-button){
//         color: ${c.violet300};
//     }

//     &::part(password-toggle-button){ // TO DO: ENCONTRAR FORMA DE DEIXAR O OUTLINE DO BOTÃO MAIOR
//         color: var(--color-gray-900);
//         // border: 3px solid black
//         // font-weight: bold;
//         // --size: 6rem;
//     }

//     position: relative;
//     z-index: 0;

//     margin: 0;
//     background-color: var(--color-gray-100);
//     border: 3px solid var(--color-gray-900);
//     padding: 5px 25px;
//     font-size: 16px;
//     font-weight: regular;
//     font-family: 'Poppins', 'Arial';
//     transition: all .2s ease-in;
//     width: 100%;

//     &::placeholder {
//         color: var(--color-violet-500);
//     }

//    &:hover, &:focus {
//       border: 3px solid ${c.violet300};
//    }

//    &::selection {
//         background-color: ${c.violet300};
//    }

// `;
