import React, { useState } from "react";
import Text from "../components/Texts/Text/Text";
import { Button } from "../components/Buttons/Button/Button";
import { Subtitle, Title } from "../components/Texts/Title/Title";
import InputText from "../components/Input/InputText/InputText";

const TestComponents: React.FC = () => (
  <>
    <Text size="xsm" color="violet">
      text
    </Text>
    <Button size="sm" theme="warning">
      button
    </Button>
    <Title>Título</Title>
    <Subtitle>Título</Subtitle>
    <InputText
      type="password"
      onChange={() => {}}
      label="Label"
      theme="establishment"
    />
  </>
);

export default TestComponents;
