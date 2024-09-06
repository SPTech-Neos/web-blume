import React, { useState } from "react";
import Text from "../components/Texts/Text/Text";
import { Button } from "../components/Buttons/Button/Button";
import { Subtitle, Title } from "../components/Texts/Title/Title";

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
  </>
);

export default TestComponents;
