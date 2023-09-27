'use client'
import React, { useState } from 'react';
import Link from 'next/link';
import Layout from '../components/Layout';

export default function MyTickets() {
  // const [value, setValue] = React.useState('1');
  const packageData = [
    {
      name: "1",
      category: "2384023",
      sub_category: "03/12/2022",
      status: "$30,000 "
    },
    {
      name: "2",
      category: "2384023",
      sub_category: "03/12/2022",
      status: "$30,000"
    },
    {
      name: "3",
      category: "2384023",
      sub_category: "03/12/2022",
      status: "$30,000"
    },
    {
      name: "4",
      category: "83948348",
      sub_category: "03/12/2022",
      status: "$30,000"
    },
    {
      name: "4",
      category: "83948348",
      sub_category: "03/12/2022",
      status: "$30,000"
    },
    
  ];
  const itemsPerPage = 4; // Number of items to display per page
  const [currentPage, setCurrentPage] = useState(1);

  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;

  // Filter the data to display only the items for the current page
  const currentPackageData = packageData.slice(startIndex, endIndex);
  const totalPages = Math.ceil(packageData.length / itemsPerPage);

  const goToPage = (page) => {
    if (page >= 1 && page <= totalPages) {
      setCurrentPage(page);
    }
  };

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Layout>
      <div>



        <div className='flex justify-between '>
          <p className='text-black text-left ml-7 md:ml-7 block dark:text-white text-4xl font-bold' >My Tickets</p>
          <Link
            href="#"
            className="inline-flex items-center  justify-center  rounded-md bg-meta-6 py-2 px-10 text-center font-medium text-black hover:bg-opacity-90 lg:px-8 xl:px-10"
          >Buy Now
          </Link>
        </div>
        <div className="container mx-auto p-4 md:p-8 relative top-10"> {/* Adjusted padding for mobile */}
          {/* <p className="mb-2 md:mb-4">Here you can see your applied and pending Nominations</p> Adjusted margin for mobile */}
          <div className="max-w-full overflow-x-auto mt-4">
            <table className="w-full table-auto">
              <thead>
                <tr className="bg-graydark text-left dark:bg-meta-4">
                  <th className="w-1/4 md:min-w-[220px] py-2 md:py-4 px-2 md:px-4 font-bold text-white dark:text-white xl:pl-11">
                    S.No
                  </th>
                  <th className="w-1/4 md:min-w-[150px] py-2 md:py-4 px-2 md:px-2 font-bold text-white dark:text-white">
                    Booking ID
                  </th>
                  <th className="w-1/4 md:min-w-[150px] py-2 md:py-4 px-2 md:px-5 font-bold text-white dark:text-white">
                    Booking Date
                  </th>
                  <th className="w-1/4 py-2 md:py-4 px-2 md:px-6 font-bold text-white md:ml-2 dark:text-white">
                    Amount
                  </th>
                  <th className="w-1/4 py-2 md:py-4 px-5 md:px-5 font-bold text-white dark:text-white">
                    View
                  </th>
                </tr>
              </thead>
              <tbody>
                {currentPackageData.map((packageItem, key) => (
                  <tr key={key} className="border-b border-[#eee]">
                    <td className="py-2 md:py-3 px-1 md:px-10">
                      <h5 className="font-medium text-black dark:text-white">
                        {packageItem.name}
                      </h5>
                    </td>
                    <td className="py-2 md:py-3 px-2 md:px-3 dark:border-strokedark">
                      <p className="text-black dark:text-white">
                        {packageItem.category}
                      </p>
                    </td>
                    <td className="py-2 md:py-3 px-2 md:px-6 dark:border-strokedark">
                      <p className="text-black dark:text-white ">
                        {packageItem.sub_category}
                      </p>
                    </td>
                    <td className="py-2 md:py-3 px-2 md:px-6 dark:border-strokedark">
                      <p className="text-black dark:text-white ">
                        {packageItem.status}
                      </p>
                    </td>
                    {/* <td className="py-2 md:py-3 px-2 md:px-3">
                      <div className="flex items-center">
                        <p
                          className={`inline-flex rounded-full bg-opacity-10 py-1 px-2 text-sm font-medium ${packageItem.status === "Approved"
                            ? "text-success bg-success"
                            : packageItem.status === "pending"
                              ? "text-danger bg-danger"
                              : "text-warning bg-warning"
                            }`}
                        >
                          {packageItem.status}
                        </p>
                      </div>
                    </td> */}
                    <td className="py-2 md:py-3 px-2 md:px-2"> {/* Adjusted padding for mobile */}
                      <button className="bg-primary hover:bg-cyan hover:text-black text-white font-bold py-1 md:py-2 px-2 md:px-4 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400">
                        View
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
     
        <div className="flex justify-between mt-4 items-center">
                <div className="text-sm text-gray-500">
                    Showing {startIndex + 1} - {Math.min(endIndex, packageData.length)} of {packageData.length} entries
                </div>
                <div className="flex space-x-2">
                    <button
                        className={`px-3 py-1 rounded-md ${currentPage === 1
                            ? 'bg-gray-300 text-gray-500 cursor-not-allowed'
                            : 'bg-primary text-white hover:bg-cyan hover:text-black'
                            }`}
                        onClick={() => goToPage(currentPage - 1)}
                        disabled={currentPage === 1}
                    >
                        Previous
                    </button>
                    <button
                        className={`px-3 py-1 rounded-md ${currentPage === totalPages
                            ? 'bg-gray-300 text-gray-500 cursor-not-allowed'
                            : 'bg-primary text-white hover:bg-cyan hover:text-black'
                            }`}
                        onClick={() => goToPage(currentPage + 1)}
                        disabled={currentPage === totalPages}
                    >
                        Next
                    </button>
                </div>
            </div>
      </div>
      </div>
    </Layout>

  );
}
