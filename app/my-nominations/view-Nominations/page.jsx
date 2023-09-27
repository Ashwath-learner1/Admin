// pages/nominations.js
"use client"
import React, { useState } from 'react';
const Nominations = () => {
   
    // Sample data for the table

    const packageData = [
        {
            name: "Segment 1",
            category: "category 1",
            sub_category: "sub1",
            status: "Approved"
        },
        {
            name: "Segment 2",
            category: "category 2",
            sub_category: "sub1",
            status: "pending"
        },
        {
            name: "Segment 3",
            category: "category 3",
            sub_category: "sub1",
            status: "Approved"
        },
        {
            name: "Segment 4",
            category: "category 4",
            sub_category: "sub1",
            status: "Pending"
        },
        {
            name: "Segment 4",
            category: "category 4",
            sub_category: "sub1",
            status: "Pending"
        },
        {
            name: "Segment 4",
            category: "category 4",
            sub_category: "sub1",
            status: "Approved"
        },
        {
            name: "Segment 4",
            category: "category 4",
            sub_category: "sub1",
            status: "Pending"
        },
        {
            name: "Segment 4",
            category: "category 4",
            sub_category: `Sub 4`,
            status: "Approved"
        },
        {
            name: "Segment 4",
            category: "category 4",
            sub_category: `Sub 4`,
            status: "Pending"
        }
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
    return (
        <div className="container mx-auto p-4 md:p-8"> {/* Adjusted padding for mobile */}
            <h1 className="text-2xl md:text-3xl dark:text-white text-black font-bold mb-2 md:mb-4">My Nominations</h1> {/* Adjusted text size for mobile */}
            <p className="mb-2 md:mb-4">Here you can see your applied and pending Nominations</p> {/* Adjusted margin for mobile */}
            <div className="max-w-full overflow-x-auto mt-16">
                <table className="w-full table-auto">
                    <thead>
                        <tr className="bg-graydark text-left dark:bg-meta-4">
                            <th className="w-1/4 md:min-w-[220px] py-2 md:py-4 px-2 md:px-4 font-bold text-white dark:text-white xl:pl-11">
                                Segment
                            </th>
                            <th className="w-1/4 md:min-w-[150px] py-2 md:py-4 px-2 md:px-4 font-bold text-white dark:text-white">
                                Category
                            </th>
                            <th className="w-1/4 md:min-w-[150px] py-2 md:py-4 px-0 md:px-0 font-bold text-white dark:text-white">
                                Sub-Category
                            </th>
                            <th className="w-1/4 py-2 md:py-4 px-2 md:px-4 font-bold text-white md:ml-2 dark:text-white">
                                View
                            </th>
                            <th className="w-1/4 py-2 md:py-4 px-2 md:px-4 font-bold text-white dark:text-white">
                                Status
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
                                <td className="py-2 md:py-3 px-2 md:px-2"> {/* Adjusted padding for mobile */}
                                    <button className="bg-primary hover:bg-cyan hover:text-black text-white font-bold py-1 md:py-2 px-2 md:px-4 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400">
                                        View
                                    </button>
                                </td>
                                <td className="py-2 md:py-3 px-2 md:px-3">
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
    );
};

export default Nominations;
