import React from 'react';
import { AiOutlineArrowRight } from 'react-icons/ai';

const SuccessPage = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <div className="max-w-md mx-auto p-6 bg-white  text-center overflow-hidden">
        <h1 className="text-3xl font-bold text-black mb-4">
          Your request for a Stall has been successfully sent to the Wedding Vows Team
        </h1>
        <p className="text-lg mb-6">
          Our Wedding Vows representative will contact you in 2 or 3 working days.
          For any queries, please contact us by clicking on the link below.
        </p>
        <div className="mb-6 flex items-center justify-center">
          <span className='text-blue-500 cursor-pointer hover:underline text-black font-extrabold'>
            Contact us
          </span>
          <span className="ml-2 text-blue-500 cursor-pointer hover:underline">
            <AiOutlineArrowRight className='text-black font-extrabold'/>
          </span>
        </div>
      </div>
    </div>
  );
};

export default SuccessPage;
