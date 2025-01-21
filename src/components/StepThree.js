import React from 'react'

const StepThree = (props) => {
  const { handleNextStep, handleBackStep } = props;

  return (
    <div>
    <p>step three</p>
    <button onClick={handleNextStep}>next</button>
    <button onClick={handleBackStep}>next</button>
    </div>

  );
};

export default StepThree