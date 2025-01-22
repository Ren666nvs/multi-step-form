import React, { useState } from "react";
import Image from "next/image";

const StepThree = (props) => {
  const { handleNextStep, handleBackStep } = props;
  const [selectedImage, setSelectedImage] = useState(null);

  const handleImageChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      setSelectedImage(URL.createObjectURL(file));
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
          <h2 className="text-[26px] text-foreground font-semibold text-center">
            Join Us! 😎
          </h2>
          <p className="text-[18px] text-center text-[#8E8E8E]">
            Please provide all current information accurately.
          </p>
        </div>

        <form className="flex flex-col flex-grow gap-y-6">
          <fieldset className="flex flex-col space-y-2">
            <label
              htmlFor="dateOfBirth"
              className="block text-sm font-semibold text-[#334155]"
            >
              Date of birth <span className="text-error">*</span>
            </label>
            <input
              type="date"
              name="dateOfBirth"
              placeholder="--/--/--"
              className="w-full p-3 text-base leading-5 rounded-md outline outline-[#CBD5E1] focus:outline-[#0CA5E9] text-[#121316]"
            />
          </fieldset>

          <div className="flex flex-col space-y-2">
            <label
              htmlFor="profileImage"
              className="block text-sm font-semibold text-[#334155]"
            >
              Profile image <span className="text-error">*</span>
            </label>
            <div
              className="flex flex-col items-center justify-center gap-y-2 cursor-pointer bg-gray-100 h-[180px] border rounded-md border-solid"
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
              onClick={handleNextStep}
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
