import React from 'react';
import Image from 'next/image';

const FormFinish = () => {
  return (
    <div className="flex flex-col items-center justify-center w-full min-h-screen p-8 bg-gray-100">
    <div className="space-y-2 bg-white rounded-lg w-[480px]  p-8">
      <div className="flex flex-col items-center space-y-2 mb-7">
        <div className="flex">
    <div style={{ opacity: 1, transform: 'none' }}>
      <div className="space-y-6 bg-white rounded-lg w-[480px] p-8 flex flex-col items-center">
       
        <div className="flex justify-center">
          <Image 
            src="/pinecone-logo.svg" 
            alt="pinecone-logo" 
            width={60} 
            height={60} 
            className="object-cover"
          />
        </div>

       
        <h2 className="text-[26px] text-[#202124] font-semibold text-center">
          You're All Set! 🔥
        </h2>

      
        <p className="text-lg text-[#8E8E8E] font-normal text-center">
          We've received your submission. Thank you!
        </p>
  
      </div>
    </div>
    </div>
    </div>
    </div>
    </div>
  );
};

export default FormFinish;
