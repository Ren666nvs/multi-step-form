import React from 'react'

const StepOne = (props) => {
    const {handleNextStep, handleBackStep} = props;

  return (
    <div className="h-screen w-full flex flex-col justify-center items-center bg-slate-100">
        <div className="border rounded w-[300px] h-[400px] p-6 bg-white">
          <p className="font-bold text-lg">Join us</p>
          <p className="text-sm text-slate-500">
            Please provide all current information accurately.
          </p>
<button onClick={handleNextStep}>next</button>
        </div>
    </div>
  );
};

export default StepOne;