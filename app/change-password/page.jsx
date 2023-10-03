'use client'
import React,{useState} from 'react'
import Image from 'next/image'
import Layout from '../components/Layout'
import BreadCrumb from '@/app/components/BreadCrumbs/BreadCrumbs'
function ChangePassword
() {
    const [strokeWidth, setStrokeWidth] = useState(1);

    const [strokeWidth2, setStrokeWidth2] = useState(1);
  
   
  
    const handleFocus = () => {
  
      setStrokeWidth(2);
  
    };
  
   
  
    const handleBlur = () => {
  
      setStrokeWidth(1);
  
    };
  
   
  
    const handleFocus2 = () => {
  
      setStrokeWidth2(2);
  
    };
  
   
  
    const handleBlur2 = () => {
  
      setStrokeWidth2(1);
  
    };
  return (
    <Layout>
      <BreadCrumb pageNames={['change-password']} />
    <div>
      {/* <div className='bg-gradient101'>hello</div> */}
        <div className='flex justify-center gap-4 px-2 py-4 md:max-2xl:flex-row flex-col'>
        <Image
        src={'/images/authentication.svg'}
        width="400"
        alt='change password'
        height="400"/>
        <div className="md:w-1/2 rounded-xl  dark:shadow-8 bg-white dark:bg-black p-8 flex items-center justify-center">

<div className="w-full  md:w-[400px] ">
    
    <div className="mb-6">

<label className="mb-2.5 block font-medium  text-black dark:text-white">

 Old Password

</label>

<div className="relative">

  <input

    type="password"

    placeholder="Old Password"

    className="w-full rounded-lg border dark:text-white border-black bg-transparent py-3 px-4 outline-none focus:border-primary focus-visible:shadow-none dark:border-form-strokedark dark:bg-form-input dark:focus:border-primary text-black"

    onFocus={handleFocus2}

    onBlur={handleBlur2}

  />
  
  </div>
  </div>
    <div className="mb-6">

<label className="mb-2.5 block font-medium text-black dark:text-white">

 New Password

</label>

<div className="relative ">

  <input

    type="password"

    placeholder="New Password"

    className="w-full rounded-lg border dark:text-white border-black bg-transparent py-3 px-4 outline-none focus:border-primary focus-visible:shadow-none dark:border-form-strokedark dark:bg-form-input dark:focus:border-primary text-black"

    onFocus={handleFocus2}

    onBlur={handleBlur2}

  />
  
  </div>
  </div>
    <div className="mb-6">

<label className="mb-2.5 block font-medium text-black dark:text-white">

 Confirm New Password

</label>

<div className="relative">

  <input

    type="password"

    placeholder="Confirm New Password"

    className="w-full rounded-lg border dark:text-white border-black bg-transparent py-3 px-4 outline-none focus:border-primary focus-visible:shadow-none dark:border-form-strokedark dark:bg-form-input dark:focus:border-primary text-black"

    onFocus={handleFocus2}

    onBlur={handleBlur2}

  />
  
  </div>
  <button className="flex mt-7 w-full items-center justify-center gap-3.5 rounded-lg border border-stroke bg-[#0866FF] text-white  p-4 hover:bg-opacity-50 dark:border-strokedark dark:bg-[#0866FF] dark:hover:bg-opacity-50">Change password</button>
  </div>
  
   

</div>
        </div>
    </div>
    </div>
    </Layout>

  )
}

export default ChangePassword
