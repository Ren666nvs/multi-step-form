import React from "react";
import Image from "next/image";
import { isStepOneValid } from "@/utils/stepOneValidation";


const StepOne = (props) => {
  const {
    handleNextStep,
    errors,
    formValue,
    handleError,
    setFormValue,
    clearError,
  } = props;
  const error = false;
  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormValue((prev) => ({
      ...prev,
      [name]: value,
    }));
    clearError(name);
  };
  const handleFormNextStep = () => {
    const { isValid, errors } = isStepOneValid(formValue);
    if (isValid) {
      const localData = {
        ...formValue,
        currentStep: 1,
      };
      localStorage.setItem("formData", JSON.stringify(localData));
      handleNextStep();
    }
    handleError(errors);
  };
  return (
    <div className="flex min-h-screen items-center justify-center bg-gray-100">
      <div className="flex flex-col w-[480px] min-h-[655px] p-8 bg-white rounded-lg shadow-lg">
        <div className="flex justify-center mb-7">
          <Image
            src="/pinecone-logo.svg"
            alt="Pinecone Logo"
            width={60}
            height={60}
          />
        </div>

        <h2 className="text-[26px] text-gray-900 font-semibold text-center">
          Join Us! 😎
        </h2>
        <p className="text-[18px] text-center text-gray-500">
          Please provide all current information accurately..
        </p>

        <form className="flex flex-col flex-grow gap-y-3 mt-6">
          <fieldset className="space-y-2">
            <label
              htmlFor="firstName"
              className="block text-sm font-semibold text-gray-700"
            >
              First Name <span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              id="firstName"
              name="firstName"
              placeholder="Your first name"
              className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 text-gray-900"
              onChange={handleChange}
            />
            {errors.firstName.length > 0 && (
              <p className="text-red-500">Нэрээ оруулна уу</p>
            )}
          </fieldset>

          <fieldset className="space-y-2">
            <label
              htmlFor="lastName"
              className="block text-sm font-semibold text-gray-700"
            >
              Last Name <span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              id="lastName"
              name="lastName"
              placeholder="Your last name"
              className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 text-gray-900"
              onChange={handleChange}
              required
            />
            {errors.firstName.length > 0 && (
              <p className="text-red-500">Овгоо оруулна уу.</p>
            )}
          </fieldset>

          <fieldset className="space-y-2">
            <label
              htmlFor="username"
              className="block text-sm font-semibold text-gray-700"
            >
              Username <span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              id="username"
              name="username"
              placeholder="Your username"
              className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 text-gray-900"
              onChange={handleChange}
              required
            />

              {errors.userName && <p className="text-red-500">Хэрэглэгчийн нэрээ оруулна уу</p>}
            
          </fieldset>

          <div className="flex w-full gap-x-2 mt-auto">
            {/* <button 
              type="button" 
              onClick={handleBackStep} 
              className="flex flex-1 items-center justify-center h-[44px] rounded-md bg-gray-400 text-white transition-all duration-300 hover:opacity-80"
            >
              Back
            </button> */}
            <button
              type="submit"
              onClick={handleFormNextStep}
              className="flex flex-1 items-center justify-center h-[44px] rounded-md bg-black text-white transition-all duration-300 hover:opacity-80"
            >
              Continue 1/3
              <Image
                src="/forward-arrow-icon.svg"
                alt="Next"
                width={12}
                height={12}
              />
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default StepOne;
