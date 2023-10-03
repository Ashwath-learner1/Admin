import Breadcrumb from '@/app/components/BreadCrumbs/BreadCrumbs';
import React from 'react';

const CardComponent = () => {
  return (
    <div>
        <Breadcrumb pageNames={['my-nominations','nominate-reg']}/>
    <div className="bg-white rounded-lg shadow-lg p-6  mx-auto max-w-md md:relative md:top-20 relative top-12">
      <h2 className="text-2xl font-semibold mb-4">Nominate Application</h2>
      <div className="mb-4">
        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="segment">
          Segment
        </label>
        <input
          className="w-full px-3 py-2 border rounded-md shadow-sm focus:outline-none focus:ring focus:ring-blue-400"
          type="text"
          id="segment"
          name="segment"
        />
      </div>
      <div className="mb-4">
        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="category">
          Category
        </label>
        <input
          className="w-full px-3 py-2 border rounded-md shadow-sm focus:outline-none focus:ring focus:ring-blue-400"
          type="text"
          id="category"
          name="category"
        />
      </div>
      <div className="mb-4">
        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="sub-category">
          Sub-Category
        </label>
        <input
          className="w-full px-3 py-2 border rounded-md shadow-sm focus:outline-none focus:ring focus:ring-blue-400"
          type="text"
          id="sub-category"
          name="sub-category"
        />
      </div>
      <button
        className="bg-blue-500 hover:bg-[blue] hover:text-white text-black bg-bodydark font-bold py-2 px-4 rounded-full w-full"
        type="button"
      >
        Pay
      </button>
    </div>
    </div>
  );
};

export default CardComponent;
