'use client'
import * as React from 'react';
import Link from 'next/link';
import Layout from '../components/Layout';

export default function MyTickets() {
 // const [value, setValue] = React.useState('1');

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Layout>
    <div>
      
       

            <div className='flex justify-between '>
            <p className='text-black text-left block dark:text-white text-2xl' >My Tickets</p>
            <Link
              href="#"
              className="inline-flex items-center  justify-center  rounded-md bg-meta-6 py-2 px-10 text-center font-medium text-black hover:bg-opacity-90 lg:px-8 xl:px-10"
            >Buy Now
            </Link>
            </div>
       
     
    </div>
    </Layout>
  );
}
