"use client";
import React, { useEffect, useState } from "react";
// import Link from "next/link";
// import Layout from "../components/Layout";
import TicketRegistration from "../components/TicketBooking";
// import TicketRegister from "../components/TicketBookings";
import Breadcrumb from "../components/BreadCrumbs/BreadCrumbs";
export default function MyTickets() {
  // const [value, setValue] = React.useState('1');
  const packageData = [
    {
      name: "1",
      category: "2384023",
      sub_category: "03/12/2022",
      status: "$30,000 ",
    },
    {
      name: "2",
      category: "2384023",
      sub_category: "03/12/2022",
      status: "$30,000",
    },
    {
      name: "3",
      category: "2384023",
      sub_category: "03/12/2022",
      status: "$30,000",
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
  useEffect(() => {
    const init = async () => {
      const { Tab, initTE } = await import("tw-elements");
      initTE({ Tab });
    };
    init();
  }, []);

  return (
    <div>
      <Breadcrumb pageNames={["my-tickets"]} />
      <div>
        <ul
          className="mb-4 flex list-none flex-row flex-wrap border-b-0 pl-0"
          id="tabs-tab3"
          role="tablist"
          data-te-nav-ref
        >
          <li role="presentation">
            <a
              href="#tabs-home3"
              className="my-2 block border-x-0 border-b-2 border-t-0 border-transparent px-7 pb-3.5 pt-4 text-lg font-medium uppercase leading-tight text-neutral-500 hover:isolate hover:border-transparent hover:bg-neutral-100 focus:isolate focus:border-transparent data-[te-nav-active]:border-primary data-[te-nav-active]:text-primary dark:text-neutral-400 dark:hover:bg-transparent dark:data-[te-nav-active]:border-primary-400 dark:data-[te-nav-active]:text-primary-400"
              id="tabs-home-tab3"
              data-te-toggle="pill"
              data-te-target="#tabs-home3"
              data-te-nav-active
              role="tab"
              aria-controls="tabs-home3"
              aria-selected="true"
            >
              Buy Tickets
            </a>
          </li>
          <li role="presentation">
            <a
              href="#tabs-profile3"
              className="my-2 block border-x-0 border-b-2 border-t-0 border-transparent px-7 pb-3.5 pt-4 text-lg font-medium uppercase leading-tight text-neutral-500 hover:isolate hover:border-transparent hover:bg-neutral-100 focus:isolate focus:border-transparent data-[te-nav-active]:border-primary data-[te-nav-active]:text-primary dark:text-neutral-400 dark:hover:bg-transparent dark:data-[te-nav-active]:border-primary-400 dark:data-[te-nav-active]:text-primary-400"
              id="tabs-profile-tab3"
              data-te-toggle="pill"
              data-te-target="#tabs-profile3"
              role="tab"
              aria-controls="tabs-profile3"
              aria-selected="false"
            >
              My Tickets
            </a>
          </li>
        </ul>

        <div>
          <div
            className="hidden opacity-100 transition-opacity duration-150 ease-linear data-[te-tab-active]:block"
            id="tabs-home3"
            role="tabpanel"
            data-te-tab-active
            aria-labelledby="tabs-home-tab3"
          >
           <TicketRegistration/>
          </div>
          <div
            className="hidden opacity-0 transition-opacity duration-150 ease-linear data-[te-tab-active]:block"
            id="tabs-profile3"
            role="tabpanel"
            aria-labelledby="tabs-profile-tab3"
          >
            <div className="container mx-auto p-2 md:p-6 relative top-1">
              {" "}
              {/* Adjusted padding for mobile */}
              {/* <p className="mb-2 md:mb-4">Here you can see your applied and pending Nominations</p> Adjusted margin for mobile */}
              <div className="max-w-full overflow-x-auto ">
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
                        <td className="py-2 md:py-3 px-2 md:px-2">
                          {" "}
                          {/* Adjusted padding for mobile */}
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
                  Showing {startIndex + 1} -{" "}
                  {Math.min(endIndex, packageData.length)} of{" "}
                  {packageData.length} entries
                </div>
                <div className="flex space-x-2">
                  <button
                    className={`px-3 py-1 rounded-md ${
                      currentPage === 1
                        ? "bg-gray-300 text-gray-500 cursor-not-allowed"
                        : "bg-primary text-white hover:bg-cyan hover:text-black"
                    }`}
                    onClick={() => goToPage(currentPage - 1)}
                    disabled={currentPage === 1}
                  >
                    Previous
                  </button>
                  <button
                    className={`px-3 py-1 rounded-md ${
                      currentPage === totalPages
                        ? "bg-gray-300 text-gray-500 cursor-not-allowed"
                        : "bg-primary text-white hover:bg-cyan hover:text-black"
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
        </div>
      </div>
    </div>
  );
}
