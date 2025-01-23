"use client";

import React, { useState } from "react";
import StepOne from "./StepOne";
import StepTwo from "./StepTwo";
import StepThree from "./StepThree";
import FormFinish from "./FormFinish";

const MultiStepForm = () => {
  const [currentStep, setCurrentStep] = useState(0);
  const [formValue, setFormValue] = useState({
    firstName: "",
    lastName: "",
    userName: "",
    phoneNumber: "",
  });
  const [formError, setFormError] = useState({
    firstName: "",
    lastName: "",
    userName: "",
    phoneNumber: "",
  });

  const handleError = (errors) => {
    setFormError((prev) => ({ ...prev, ...errors }));
  };

  const clearError = () => {
    setFormError({
      firstName: "",
      lastName: "",
      userName: "",
      phoneNumber: "",
    });
  };

  const steps = [StepOne, StepTwo, StepThree, FormFinish];
  const Step = steps[currentStep];

  const handleNextStep = () => {
    if (currentStep < steps.length - 1) {
      setCurrentStep((prevStep) => prevStep + 1);
    }
  };

  const handleBackStep = () => {
    if (currentStep > 0) {
      setCurrentStep((prevStep) => prevStep - 1);
    }
  };

  return (
    <div>
      <Step
        errors={formError}
        formValue={formValue}
        handleNextStep={handleNextStep}
        handleBackStep={handleBackStep}
        handleError={handleError}
        setFormValue={setFormValue}
      />
    </div>
  );
};

export default MultiStepForm;
