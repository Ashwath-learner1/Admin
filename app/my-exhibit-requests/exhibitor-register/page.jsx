import React from 'react';

const RegisterPage = () => {
  return (
    <div className="bg-gray-100 mt-10 dark:bg-gray-800 flex justify-center items-center">
      <div className="w-full md:w-4/5 lg:w-full xl:w-4/5 rounded-sm border border-stroke bg-white shadow-default dark:border-strokedark dark:bg-boxdark">
        <div className="border-b border-stroke py-4 px-6.5 dark:border-strokedark">
          <h3 className="font-bold text-left text-2xl text-black dark:text-white">
            Exhibitor Request
          </h3>
        </div>
        <form action="#">
        <div className="p-6.5 grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="mb-4.5">
              <label className="mb-2.5 block text-black dark:text-white">
                Name <span className="text-meta-1">*</span>
              </label>
              <input
                type="text"
                placeholder="Enter your Name"
                className="w-full rounded border-[1.5px] border-stroke bg-transparent py-3 px-5 font-medium outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:focus:border-white"
              />
            </div>
            <div className="mb-4.5">
              <label className="mb-2.5 block text-black dark:text-white">
                Company Name <span className="text-meta-1">*</span>
              </label>
              <input
                type="text"
                placeholder="Enter your Company Name"
                className="w-full rounded border-[1.5px] border-stroke bg-transparent py-3 px-5 font-medium outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:focus:border-white"
              />
            </div>

            <div className="mb-4.5">
              <label className="mb-2.5 block text-black dark:text-white">
                Email Address <span className="text-meta-1">*</span>
              </label>  
              <input
                type="email"
                placeholder="Enter your Email Address"
                className="w-full rounded border-[1.5px] border-stroke bg-transparent py-3 px-5 font-medium outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:focus:border-white "
              />
            </div>
            <div className="mb-4.5">
              <label className="mb-2.5 block text-black dark:text-white">
                Mobile Number <span className="text-meta-1">*</span>
              </label>
              <input
                type="tel"
                placeholder="Enter your Mobile Number"
                className="w-full rounded border-[1.5px] border-stroke bg-transparent py-3 px-5 font-medium outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:focus:border-white"
              />
            </div>

            <div className="mb-4.5">
              <label className="mb-2.5 block text-black dark:text-white">
                State <span className="text-meta-1">*</span>
              </label>
              <input
                type="text"
                placeholder="Enter your State"
                className="w-full rounded border-[1.5px] border-stroke bg-transparent py-3 px-5 font-medium outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:focus:border-white"
              />
            </div>

            <div className="mb-4.5">
              <label className="mb-2.5 block text-black dark:text-white">
                Business Type <span className="text-meta-1">*</span>
              </label>
              <input
                type="text"
                placeholder="Enter Business Type"
                className="w-full rounded border-[1.5px] border-stroke bg-transparent py-3 px-5 font-medium outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:focus:border-white"
              />
            </div>
            
          </div>
          <div className='flex w-full justify-center flex-row p-4'>
            <button className="rounded-lg w-full md:w-[200px] bg-white border dark:bg-black dark:text-white hover:border-white hover:bg-black hover:text-white dark:hover:bg-white dark:hover:text-black  border-black p-3 font-bold text-black ">
              SUBMIT
            </button>
            </div>
        </form>
      </div>
    </div>

  );
};

export default RegisterPage;
