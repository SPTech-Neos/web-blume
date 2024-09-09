import React from "react";
import InputMask from "react-input-mask";
import styled from "styled-components";
import { TextField } from "@radix-ui/themes";
import { colors as c, getTheme } from "../../../styles/Colors";

export interface InputTextProps {
  type?: "text" | "password" | "email" | string;
  placeholder?: string;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  size?: "full" | "big" | "small" | "half";
  label: string;
  theme: "client" | "establishment" | string;
  value?: string;
  mask?: string;
  error?: string;
}

interface InputContainerProps {
  size?: "full" | "big" | "small" | "half";
}

export interface IconSpanProps {
  $ispassword: boolean;
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

export const InputContainer = styled.div<InputContainerProps>`
  background-color: ${c.gray100};
  width: ${(props) => SizeVariants[props.size || "full"].width};
  color: ${c.gray900};
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

export const StyledInput = styled(InputMask).attrs((props) => ({
  type: props.type || "text",
  placeholder: props.placeholder || "Digite aqui...",
  required: props.required || false,
}))<InputTextProps>`
  position: relative;
  z-index: 0;
  font-size: 14px;
  font-family: "Josefin Sans", "Arial";
  height: 40px;
  margin: 0;
  padding: 22px 50px 22px 25px;
  background-color: ${c.gray100};
  border: 3px solid ${c.gray900};
  font-size: 16px;
  font-weight: 500;
  font-family: "Poppins", "Arial";
  transition: all 0.2s ease-in;
  border-radius: 8px;
  width: 100%;

  &::placeholder {
    color: ${c.gray500};
    font-weight: 400;
  }

  &:focus {
    outline: none;
    border: 3px solid ${(props) => getTheme(props.theme).mainColor};
  }

  &::selection {
    background: ${(props) => getTheme(props.theme).mainColor};
  }
`;

export const IconSpan = styled.span<IconSpanProps>`
  display: ${(props) => (props.$ispassword ? "flex" : "none")};
  cursor: pointer;

  position: absolute;
  z-index: 1;
  right: 15px;
  top: 28px;
  align-self: right;

  background-color: ${c.gray100};
`;

export const InputText = styled.input.attrs((props) => ({
  type: props.type || "text",
  placeholder: props.placeholder || "Digite aqui...",
  required: props.required || false,
}))<InputTextProps>`
  position: relative;
  z-index: 0;

  font-size: 14px;
  font-family: "Josefin Sans", "Arial";

  height: 40px;
  margin: 0;
  padding-left: 25px;
  background-color: ${c.gray100};
  border: 3px solid ${c.gray900};
  border-radius: 8px;
  font-size: 16px;
  font-weight: regular;
  font-family: "Poppins", "Arial";
  transition: all 0.2s ease-in;
  border-radius: 0px;

  width: 100%;

  &::placeholder {
    color: ${c.gray500};
  }

  // &:hover,
  // &:focus {
  //   border: 3px solid ${(props) => getTheme(props.theme).mainColor};
  //   outline: none;
  // }

  &::selection {
    // background-color: ${(props) => getTheme(props.theme).mainColor};
  }
`;

export const ErrorText = styled.span`
  color: red;
  font-size: 0.875rem;
  margin-top: 0.25rem;
  display: block;
`;

export const Slot = styled(TextField.Slot)`
  padding: 10px;
`;

// import styled from 'styled-components';
// import { colors as c} from '../../../styles/Colors';

// import SlInput from '../../../../node_modules/@shoelace-style/shoelace/dist/react/input';

// export interface InputTextProps {
//     type?: "text" | "password" | "email" | string;
//     placeholder?: string;
//     value: string;
//     onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
// }

// export const InputText = styled.input
//     .attrs((props => ({
//         type: props.type || 'text',
//         placeholder: props.placeholder || 'Digite aqui...',
//         required: props.required || false,
//         passwordToggle: props.type == 'password' ? true : false,

//     })
// ))<InputTextProps>`

//     &::part(clear-button){
//         color: ${c.violet300};
//     }

//     &::part(password-toggle-button){ // TO DO: ENCONTRAR FORMA DE DEIXAR O OUTLINE DO BOTÃO MAIOR
//         color: ${c.gray900};
//         // border: 3px solid black
//         // font-weight: bold;
//         // --size: 6rem;
//     }

//     position: relative;
//     z-index: 0;

//     margin: 0;
//     background-color: ${c.gray100};
//     border: 3px solid ${c.gray900};
//     padding: 5px 25px;
//     font-size: 16px;
//     font-weight: regular;
//     font-family: 'Poppins', 'Arial';
//     transition: all .2s ease-in;
//     width: 100%;

//     &::placeholder {
//         color: ${c.violet500};
//     }

//    &:hover, &:focus {
//       border: 3px solid ${c.violet300};
//    }

//    &::selection {
//         background-color: ${c.violet300};
//    }

// `;
