'use client'
// import Layout from '../../components/Layout';
import React from 'react';
import Breadcrumb from '@/app/components/BreadCrumbs/BreadCrumbs';
function View() {
  return (
   <div>
    <Breadcrumb pageNames={['my-nominations','nomination-details']}/>
      <h2 className="text-title-md2 font-semibold text-black dark:text-white">Nomination Details</h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-3">
        <div className="row-span-3 max-w-md p-6 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">
          <h2 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Nominee Details</h2>
          
          <table className="table-auto mt-4">
            <tbody>
              <tr>
                <td className="font-semibold pr-4 py-2">Name:</td>
                <td>John Doe</td>
              </tr>
              <tr>
                <td className="font-semibold pr-4 py-2">Email:</td>
                <td>John@Doe.com</td>
              </tr>
              <tr>
                <td className="font-semibold pr-4 py-2">Company Name:</td>
                <td>John Pastry</td>
              </tr>
              <tr>
                <td className="font-semibold pr-4 py-2">Mobile number:</td>
                <td>+918765432190</td>
              </tr>
              <tr>
                <td className="font-semibold pr-4 py-2">Category:</td>
                <td>Pastry</td>
              </tr>
              <tr>
                <td className="font-semibold pr-4 py-2">Sub-Category:</td>
                <td>Pastry</td>
              </tr>
              <tr>
                <td className="font-semibold pr-4 py-2">Segment:</td>
                <td>Best Pastry</td>
              </tr>
              <tr>
                <td className="font-semibold pr-4 py-2">Project Name:</td>
                <td>Tricolour Pastry</td>
              </tr>
              <tr>
                <td className="font-semibold pr-4 py-2">Project Date:</td>
                <td>12.09.2022</td>
              </tr>
            </tbody>
          </table>
        </div>

        <div className="col-span-2 max-w-md p-6 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">
          <h2 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Payment Details</h2>
          
          <table className="table-auto mt-4">
            <tbody>
              <tr>
                <td className="font-semibold pr-4">Payment Method:</td>
                <td>UPI</td>
              </tr>
              <tr>
                <td className="font-semibold pr-4">Payment Status:</td>
                <td>Captured</td>
              </tr>
              <tr>
                <td className="font-semibold pr-4">Payment Date:</td>
                <td>10.08.2023</td>
              </tr>
              <tr>
                <td className="font-semibold pr-4">Payment ID:</td>
                <td>asdfg2345sdfg</td>
              </tr>
            </tbody>
          </table>
        </div>

        <div className="row-span-2 col-span-2 max-w-md p-6 bg-white border border-gray-200 rounded-lg shadow hover-bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">
          <h2 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Client Details</h2>
          
          <table className="table-auto mt-4">
            <tbody>
              <tr>
                <td className="font-semibold pr-4">Client Name:</td>
                <td>ruby</td>
              </tr>
              <tr>
                <td className="font-semibold pr-4">Client Email:</td>
                <td>ruby@rails.com</td>
              </tr>
              <tr>
                <td className="font-semibold pr-4">Approval Request Status:</td>
                <td>Pending</td>
              </tr>
              <tr>
                <td className="font-semibold pr-4">Request Sent Date:</td>
                <td>10.08.2023</td>
              </tr>
            </tbody>
            
          </table>
          <div className='flex justify-center items-center'>
              <button className='rounded-md relative top-12 border-solid px-3 py-3 bg-primary text-sm uppercase text-white' >Request again</button>
            </div>
        </div>
      </div>
      </div>
  );
}

export default View;
