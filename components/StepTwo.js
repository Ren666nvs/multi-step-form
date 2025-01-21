import React from 'react'

const StepTwo = (props) => {
  const { handleNextStep, handleBackStep } = props;

  return (
    <div>
    <p>step two</p>
    <button onClick={handleNextStep}>next</button>
    <button onClick={handleBackStep}>next</button>
    </div>

  );
};

export default StepTwo