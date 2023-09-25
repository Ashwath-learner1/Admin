import React from 'react';

const Card = ({ total, title }) => {
  return (
    <div className="bg-white rounded-sm border border-stroke shadow-lg  overflow-hidden w-full  mx-auto mb-4 dark:border-strokedark dark:bg-boxdark">
      <div className="px-4 py-6">
        <h2 className="text-3xl font-extrabold text-gray-800">{total}</h2>
        <p className="text-lg font-semibold text-indigo-600 mt-2">{title}</p>
      </div>
    </div>
  );
};

export default Card;
