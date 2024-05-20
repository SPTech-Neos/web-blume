// TO REDO
import styled from "styled-components";
import { colors as c } from "../../../styles/Colors";

export interface RegisterProps {
  children?: string | JSX.Element | JSX.Element[];
}

export interface RegisterFormProps {
  step: number;
  // children: string | JSX.Element | JSX.Element[];
}

export const Register = styled.main<RegisterProps>`
  // width: 100%;
  height: 90vh;
  background-color: ${c.gray100};
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  padding: 50px;
  box-shadow: 0 0 48px 2px rgba(0, 0, 0, 0.25);
  max-width: 45%;
`;

export const Text = styled.span`
  font-family: "Poppins";
  font-size: .8rem;
  color: ${c.gray900};
  font-weight: 400;
`;

export const RegisterForm = styled.form<RegisterFormProps>`
  // display: flex;
  // flex-direction: column;
  // align-items: center;
  // gap: 10px;
`;

export const FormPart = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;
`;

export const TextWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
`;

export const CBText = styled(Text)`
  color: ${c.violet500};
  font-weight: bold;
  `;
export interface RegisterFormProps {
  step: number;
}
