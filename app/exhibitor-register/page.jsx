import React from 'react';

const RegisterPage = () => {
  return (
    <div className="min-h-screen bg-gray-100 dark:bg-gray-800">
      <div className="py-8 px-4 sm:px-6 lg:px-8 max-w-md mx-auto">
        <div className="text-center">
          <h1 className="text-3xl font-extrabold text-gray-900 dark:text-white">
            Register Here
          </h1>
        </div>
        <div className="mt-8">
          <div className="grid grid-cols-1 gap-6">
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-gray-700 dark:text-white">
                Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                className="mt-1 p-2 w-full rounded-md border border-gray-300 dark:border-gray-600 shadow-sm focus:ring focus:ring-opacity-50 focus:ring-indigo-500 focus:border-indigo-500"
                placeholder="Your Name"
              />
            </div>
            <div>
              <label htmlFor="companyName" className="block text-sm font-medium text-gray-700 dark:text-white">
                Company Name
              </label>
              <input
                type="text"
                id="companyName"
                name="companyName"
                className="mt-1 p-2 w-full rounded-md border border-gray-300 dark:border-gray-600 shadow-sm focus:ring focus:ring-opacity-50 focus:ring-indigo-500 focus:border-indigo-500"
                placeholder="Company Name"
              />
            </div>
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700 dark:text-white">
                Email Address
              </label>
              <input
                type="email"
                id="email"
                name="email"
                className="mt-1 p-2 w-full rounded-md border border-gray-300 dark:border-gray-600 shadow-sm focus:ring focus:ring-opacity-50 focus:ring-indigo-500 focus:border-indigo-500"
                placeholder="you@example.com"
              />
            </div>
            <div>
              <label htmlFor="mobile" className="block text-sm font-medium text-gray-700 dark:text-white">
                Mobile Number
              </label>
              <input
                type="tel"
                id="mobile"
                name="mobile"
                className="mt-1 p-2 w-full rounded-md border border-gray-300 dark:border-gray-600 shadow-sm focus:ring focus:ring-opacity-50 focus:ring-indigo-500 focus:border-indigo-500"
                placeholder="Mobile Number"
                inputMode="numeric" // Allow only numeric input
                pattern="[0-9]*" // Only accept numeric characters
              />
            </div>
            <div>
              <label htmlFor="state" className="block text-sm font-medium text-gray-700 dark:text-white">
                State
              </label>
              <input
                type="text"
                id="state"
                name="state"
                className="mt-1 p-2 w-full rounded-md border border-gray-300 dark:border-gray-600 shadow-sm focus:ring focus:ring-opacity-50 focus:ring-indigo-500 focus:border-indigo-500"
                placeholder="State"
              />
            </div>
            <div>
              <label htmlFor="businessType" className="block text-sm font-medium text-gray-700 dark:text-white">
                Business Type
              </label>
              <input
                type="text"
                id="businessType"
                name="businessType"
                className="mt-1 p-2 w-full rounded-md border border-gray-300 dark:border-gray-600 shadow-sm focus:ring focus:ring-opacity-50 focus:ring-indigo-500 focus:border-indigo-500"
                placeholder="Business Type"
              />
            </div>
          </div>
          <div className="mt-6">
            <button
              type="button"
              className="w-full inline-flex items-center justify-center px-4 py-2 border border-warning hover:border-black text-sm font-medium rounded-md text-black bg-warning hover:bg-white hover:text-black focus:outline-none focus:ring focus:ring-opacity-50 focus:ring-indigo-500 focus:border-indigo-500 dark:bg-warning dark:text-black dark:hover:bg-black dark:hover:text-white ">
              Submit
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RegisterPage;
