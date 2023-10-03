
import React from 'react';
import { MdEmail } from 'react-icons/md';
import { AiFillPhone } from 'react-icons/ai';
import Layout from '../components/Layout';
import Breadcrumb from '../components/BreadCrumbs/BreadCrumbs';

const Support = () => {
  return (
    <Layout>
     <Breadcrumb pageNames={['support']}/>
    <div className="min-h-screen mt-5   flex items-center justify-center bg-gray-100">
   <div className="bg-[#F6F4EB] dark:bg-black text-black-2 dark:text-white p-6 rounded-lg shadow-xl w-full max-w-[500px] relative bottom-16">
        <h1 className="text-3xl text-center  font-extrabold mb-3">
          Contact Information
        </h1>
        <p className="text-center text-gray-600 text-lg  font-bold mb-5">
          Say something to start a live chat
        </p>

        <div className="flex items-center space-x-4">
          <div className="bg-blue-500 rounded-full p-3 ">
            <AiFillPhone className="text-2xl" />
          </div>
          <p className="text-lg  font-semibold">+91 7728218234</p>
        </div>

        <div className="flex items-center mt-3 space-x-4">
          <div className="bg-green-500 rounded-full p-3 ">
            <MdEmail className="text-2xl" />
          </div>
          <p className="text-lg  font-semibold">demomail@gmail.com</p>
        </div>
      </div>
    </div>
    </Layout>
  );
};

export default Support;
