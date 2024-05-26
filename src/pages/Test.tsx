import React from "react";
import Dropdown from "../components/Input/Dropdown/Dropdown";

const Test: React.FC = () => (
  <>
    <Dropdown
      size="small"
      onChange={() => {}}
      label={"Dropdown"}
      list={["teste1", "teste2"]}
    />
  </>
);

export default Test;
