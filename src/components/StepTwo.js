import React from 'react'

const StepTwo = (props) => {
  const { handleNextStep, handleBackStep } = props;

  return (
    <div className="flex min-h-screen items-center justify-center bg-gray-100">
    <div className="flex flex-col w-[480px] min-h-[655px] p-8 bg-white rounded-lg shadow-lg">
      
      <div className="flex justify-center mb-7">
       
        
      </div>


    
      <h2 className="text-[26px] text-gray-900 font-semibold text-center">
        Join Us! 😎
      </h2>
      <p className="text-[18px] text-center text-gray-500">
        Please provide all current information accurately.
      </p>
 <form className="flex flex-col flex-grow gap-y-3 mt-6">
          
       
          <fieldset className="space-y-2">
            <label 
              htmlFor="firstName" 
              className="block text-sm font-semibold text-gray-700"
            >
              Email <span className="text-red-500">*</span>
            </label>
            <input 
              type="text" 
              id="firstName" 
              name="firstName" 
              placeholder="Your email" 
              className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 text-gray-900" 
              required 
            />
          </fieldset>

         
          <fieldset className="space-y-2">
            <label 
              htmlFor="lastName" 
              className="block text-sm font-semibold text-gray-700"
            >
              Phone number<span className="text-red-500">*</span>
            </label>
            <input 
              type="text" 
              id="lastName" 
              name="lastName" 
              placeholder="Your phone number " 
              className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 text-gray-900" 
              required 
            />
          </fieldset>

          
          <fieldset className="space-y-2">
            <label 
              htmlFor="username" 
              className="block text-sm font-semibold text-gray-700"
            >
              Password <span className="text-red-500">*</span>
            </label>
            <input 
              type="text" 
              id="username" 
              name="username" 
              placeholder="Your password" 
              className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 text-gray-900" 
              required 
            />
          </fieldset>
          <fieldset className="space-y-2">
            <label 
              htmlFor="username" 
              className="block text-sm font-semibold text-gray-700"
            >
              Confirm password <span className="text-red-500">*</span>
            </label>
            <input 
              type="text" 
              id="username" 
              name="username" 
              placeholder="Confirm password" 
              className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 text-gray-900" 
              required 
            />
          </fieldset>
          <div className="flex w-full gap-x-2 mt-auto">
            <button 
              type="button" 
              onClick={handleBackStep} 
              className="flex flex-1 items-center justify-center h-[44px] rounded-md bg-gray-400 text-white transition-all duration-300 hover:opacity-80"
            >
              Back
            </button>
            <button 
              type="submit" 
              onClick={handleNextStep} 
              className="flex flex-1 items-center justify-center h-[44px] rounded-md bg-black text-white transition-all duration-300 hover:opacity-80"
            >
              Continue 2/3
              
            </button>
          </div>

        </form>
      </div>
    </div>
  

  );
};

export default StepTwo