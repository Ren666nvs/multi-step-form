"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import { isStepThreeValid } from "@/utils/stepThreeValidation";

const StepThree = (props) => {
  const {
    handleNextStep,
    handleBackStep,
    errors,
    formValue,
    handleError,
    setFormValue,
    clearError,
  } = props;

  const [selectedImage, setSelectedImage] = useState(
    formValue.profileImage || null
  );

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

  const handleImageChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      const imageUrl = URL.createObjectURL(file);
      setSelectedImage(imageUrl);
      setFormValue((prev) => ({
        ...prev,
        profileImage: imageUrl,
      }));
      clearError("profileImage");
    }
  };

  const handleFormNextStep = (e) => {
    e.preventDefault();
    const { isValid, errors } = isStepThreeValid(formValue);
    if (isValid) {
      const localData = {
        ...formValue,
        currentStep: 3,
      };
      localStorage.setItem("formData", JSON.stringify(localData));
      handleNextStep();
    } else {
      handleError(errors);
    }
  };

  return (
    <div className="flex flex-col items-center justify-center w-full min-h-screen p-8 bg-gray-100">
      <div className="flex flex-col w-[480px] min-h-[655px] p-8 bg-white rounded-lg shadow-lg">
        <div className="flex flex-col items-center space-y-2 mb-7">
          <div className="flex">
            <Image
              src="/pinecone-logo.svg"
              alt="pinecone-logo"
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
        </div>

        <form
          className="flex flex-col flex-grow gap-y-6"
          onSubmit={handleFormNextStep}
        >
          <fieldset className="flex flex-col space-y-2">
            <label
              htmlFor="dateOfBirth"
              className="block text-sm font-semibold text-gray-700"
            >
              Date of birth <span className="text-red-500">*</span>
            </label>
            <input
              type="date"
              id="dateOfBirth"
              name="dateOfBirth"
              placeholder="--/--/--"
              className="w-full p-3 text-base leading-5 rounded-md border border-gray-300 focus:border-blue-500 text-gray-900"
              value={formValue.dateOfBirth || ""}
              onChange={handleChange}
            />
            {errors.dateOfBirth && (
              <p className="text-red-500">{errors.dateOfBirth}</p>
            )}
          </fieldset>

          <div className="flex flex-col space-y-2">
            <label
              htmlFor="profileImage"
              className="block text-sm font-semibold text-gray-700"
            >
              Profile image <span className="text-red-500">*</span>
            </label>
            <div
              className="flex flex-col items-center justify-center gap-y-2 cursor-pointer bg-gray-100 h-[180px] border rounded-md border-solid border-gray-300"
              onClick={() => document.getElementById("profileImage").click()}
            >
              {selectedImage ? (
                <Image
                  src={selectedImage}
                  alt="Profile Preview"
                  width={150}
                  height={150}
                  className="rounded-full object-cover"
                />
              ) : (
                <div className="flex flex-col items-center">
                  <div className="bg-white rounded-full w-10 h-10 flex items-center justify-center">
                    <Image
                      src="/add-image-icon.svg"
                      alt="Add Image"
                      width={24}
                      height={24}
                    />
                  </div>
                  <h4 className="text-sm text-center">Browse or Drop Image</h4>
                </div>
              )}
            </div>
            <input
              id="profileImage"
              type="file"
              name="profileImage"
              hidden
              accept="image/*"
              onChange={handleImageChange}
            />
            {errors.profileImage && (
              <p className="text-red-500">{errors.profileImage}</p>
            )}
          </div>

          <div className="flex w-full gap-x-2 mt-auto">
            <button
              type="button"
              className="flex flex-1 items-center justify-center h-[44px] rounded-md bg-gray-400 text-white transition-all duration-300 hover:opacity-80"
              onClick={handleBackStep}
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
              Continue 3/3
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

export default StepThree;
