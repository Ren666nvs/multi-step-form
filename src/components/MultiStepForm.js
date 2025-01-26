"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image";
import { isStepOneValid } from "@/utils/stepOneValidation";

const StepOne = (props) => {
  const {
    handleNextStep,
    errors = {},  // Default errors to an empty object if undefined
    handleError,
    clearError,
  } = props;

  const [formValue, setFormValue] = useState({
    firstName: '',
    lastName: '',
    userName: '',
  });

  // Load saved form data from localStorage if available
  useEffect(() => {
    const savedData = localStorage.getItem("formData");
    if (savedData) {
      setFormValue(JSON.parse(savedData));
    }
  }, []);

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormValue((prev) => ({
      ...prev,
      [name]: value,
    }));
    clearError(name);
  };

  const handleFormNextStep = (event) => {
    event.preventDefault();
    const { isValid, errors } = isStepOneValid(formValue);
    if (isValid) {
      // Save the form data in localStorage
      localStorage.setItem("formData", JSON.stringify(formValue));
      handleNextStep();
    } else {
      handleError(errors);
    }
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
          Please provide all current information accurately.
        </p>

        <form className="flex flex-col flex-grow gap-y-3 mt-6" onSubmit={handleFormNextStep}>
          <fieldset className="space-y-2">
            <label className="block text-sm font-semibold text-gray-700">
              First Name <span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              name="firstName"
              placeholder="Your first name"
              className="w-full p-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500"
              value={formValue.firstName}
              onChange={handleChange}
            />
            {errors.firstName && <p className="text-red-500">{errors.firstName}</p>}
          </fieldset>

          <fieldset className="space-y-2">
            <label className="block text-sm font-semibold text-gray-700">
              Last Name <span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              name="lastName"
              placeholder="Your last name"
              className="w-full p-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500"
              value={formValue.lastName}
              onChange={handleChange}
            />
            {errors.lastName && <p className="text-red-500">{errors.lastName}</p>}
          </fieldset>

          <fieldset className="space-y-2">
            <label className="block text-sm font-semibold text-gray-700">
              Username <span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              name="userName"
              placeholder="Your username"
              className="w-full p-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500"
              value={formValue.userName}
              onChange={handleChange}
            />
            {errors.userName && <p className="text-red-500">{errors.userName}</p>}
          </fieldset>

          <div className="flex w-full gap-x-2 mt-auto">
            <button
              type="submit"
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
