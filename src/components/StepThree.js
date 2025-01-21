import React from 'react'

const StepThree = (props) => {
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
      <form class="flex flex-col flex-grow gap-y-3">
        <fieldset class="space-y-2">
          <label for="dateOfBirth" class="block text-sm font-semiboldl leading-4 text-[#334155]">
            "Date of birth" 
            <span class="text-error">*</span>
          </label>
          <input placeholder="--/--/--" class="w-full p-3 text-base leading-5 rounded-md outline outline-[#CBD5E1] focus:outline-[0CA5E9]
          text-[121316]" type="date" value name="dateOfBirth">
            
          </input>
        </fieldset>
      </form>
 
   </div>
   </div>
   

  );
};

export default StepThree