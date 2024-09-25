import React from "react";
import { useLocation } from "react-router-dom";
import RegisterForm from "./RegisterForm";

const Register: React.FC = () => {
  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  const acc = searchParams.get("acc") || "none";
  
  const [step, setStep] = React.useState(1);

  function handleSubmit() {
    // Implement the submit logic if needed
  }

  return (
    <RegisterForm
      step={step}
      setStep={setStep}
      handleSubmit={handleSubmit}
      acc={acc}
    />
  );
};

export default Register;