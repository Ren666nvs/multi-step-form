"use client" ;

import React, {useState} from 'react' ;
import StepOne from './StepOne';
import StepTwo from './StepTwo';
import StepThree from './StepThree';
import FormFinish from './FormFinish';
const MultiStepForm = () => {
    const [currentStep, setCurrentStep] = useState(0);
    const [formValue] = useState({
        firstNaME: "",
        lastName: "",
        userName: "",
        phoneNumber: "",

    });
    const Step = [StepOne, StepTwo, StepThree, FormFinish][currentStep];
    const handleNextStep = () => {
        if (currentStep !== 3){
            setCurrentStep((prevStep) => prevStep + 1);
        }
    };
    const handleBackStep = () => {
        if (currentStep !== 0){
            setCurrentStep((prevStep) => prevStep - 1)
        }
    }
  return (
    <div>
        <Step handleNextStep={handleNextStep} handleBackStep={handleBackStep} />
       </div>
  );
};

export default MultiStepForm