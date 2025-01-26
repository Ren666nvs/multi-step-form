"use client";

import React, { useState, useEffect } from "react";
import StepOne from "./StepOne";
import StepTwo from "./StepTwo";
import StepThree from "./StepThree";
import FormFinish from "./FormFinish";
import { AnimatePresence, motion } from "framer-motion";

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

  const clearError = (name) => {
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

  useEffect(() => {
    const data = localStorage.getItem("formData");
    if (data) {
      setFormValue(JSON.parse(data));
    }
  }, []);
  
  const animationVariants = {
    enter: { opacity: 0, x: 100 },
    center: { opacity: 1, x: 0 },
    exit: { opacity: 0, x: -100 },
  };

  return (
    <AnimatePresence mode="wait">
      <motion.div
        key={currentStep}
        initial="enter"
        animate="center"
        exit="exit"
        variants={animationVariants}
        transition={{ duration: 0.5 }}
      >
        <Step
          errors={formError}
          formValue={formValue}
          handleNextStep={handleNextStep}
          handleBackStep={handleBackStep}
          handleError={handleError}
          clearError={clearError}
          setFormValue={setFormValue}
        />
      </motion.div>
    </AnimatePresence>
  );
};

export default MultiStepForm;
