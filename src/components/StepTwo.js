"use client";

import React, { useEffect } from "react";
import Image from "next/image";
import { isStepTwoValid } from "@/utils/stepTwoValidation";

const StepTwo = (props) => {
  const {
    handleBackStep,
    handleNextStep,
    errors,
    formValue,
    handleError,
    setFormValue,
    clearError,
  } = props;

  useEffect(() => {
    const savedData = localStorage.getItem("formData");
    if (savedData) {
      setFormValue(JSON.parse(savedData));
    }
  }, [setFormValue]);

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormValue((prev) => ({
      ...prev,
      [name]: value,
    }));
    clearError(name);
  };

  const handleFormNextStep = (e) => {
    e.preventDefault();
    const { isValid, errors } = isStepTwoValid(formValue);
    if (isValid) {
      const localData = {
        ...formValue,
        currentStep: 2,
      };
      localStorage.setItem("formData", JSON.stringify(localData));
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

        <form
          className="flex flex-col flex-grow gap-y-3 mt-6"
          onSubmit={handleFormNextStep}
        >
          <fieldset className="space-y-2">
            <label
              htmlFor="email"
              className="block text-sm font-semibold text-gray-700"
            >
              Email <span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              id="email"
              name="email"
              placeholder="Your email"
              className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 text-gray-900"
              value={formValue.email || ""}
              onChange={handleChange}
            />
            {errors.email && <p className="text-red-500">{errors.email}</p>}
          </fieldset>

          <fieldset className="space-y-2">
            <label
              htmlFor="phoneNumber"
              className="block text-sm font-semibold text-gray-700"
            >
              Phone Number <span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              id="phoneNumber"
              name="phoneNumber"
              placeholder="Your phone number"
              className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 text-gray-900"
              value={formValue.phoneNumber || ""}
              onChange={handleChange}
            />
            {errors.phoneNumber && (
              <p className="text-red-500">{errors.phoneNumber}</p>
            )}
          </fieldset>

          <fieldset className="space-y-2">
            <label
              htmlFor="password"
              className="block text-sm font-semibold text-gray-700"
            >
              Password <span className="text-red-500">*</span>
            </label>
            <input
              type="password"
              id="password"
              name="password"
              placeholder="Your password"
              className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 text-gray-900"
              value={formValue.password || ""}
              onChange={handleChange}
            />
            {errors.password && (
              <p className="text-red-500">{errors.password}</p>
            )}
          </fieldset>

          <fieldset className="space-y-2">
            <label
              htmlFor="confirmPassword"
              className="block text-sm font-semibold text-gray-700"
            >
              Confirm Password <span className="text-red-500">*</span>
            </label>
            <input
              type="password"
              id="confirmPassword"
              name="confirmPassword"
              placeholder="Confirm password"
              className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 text-gray-900"
              value={formValue.confirmPassword || ""}
              onChange={handleChange}
            />
            {errors.confirmPassword && (
              <p className="text-red-500">{errors.confirmPassword}</p>
            )}
          </fieldset>

          <div className="flex w-full gap-x-2 mt-auto">
            <button
              type="button"
              onClick={handleBackStep}
              className="flex flex-1 items-center justify-center h-[44px] rounded-md bg-gray-400 text-white transition-all duration-300 hover:opacity-80"
            >
              <Image
                src="/back-arrow-icon.svg"
                alt="Back"
                width={12}
                height={12}
              />
              <span>Back</span>
            </button>
            <button
              type="submit"
              className="flex flex-1 items-center justify-center h-[44px] rounded-md bg-black text-white transition-all duration-300 hover:opacity-80"
            >
              Continue 2/3
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

export default StepTwo;
