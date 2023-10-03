'use client'
import React from 'react';
import { useEffect } from 'react'
import {AiFillCaretRight} from 'react-icons/ai'
const Card = ({ total, title , icon }) => {
  useEffect(()=>{
    const init=async()=>{
      const{Ripple,initTE }=await import ("tw-elements");
      initTE({Ripple})
    }
    init()
  },[]);

  return (
     (total && title) ?(
    <div
    className="block rounded-lg bg-white p-6 shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] dark:bg-black">
    <h5
      className="mb-2 text-4xl font-semibold leading-tight text-neutral-800 dark:text-neutral-50">
      {total}
    </h5>
    <p className="mt-4 text-md text-neutral-600 dark:text-neutral-200">
      {title}
    </p>
    
  </div>):(
    <div
    className="block gap-4  rounded-lg   bg-white p-6 shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] dark:bg-black">
    <h5
      className="mb-2 text-xl font-semibold leading-tight text-neutral-800 dark:text-neutral-50">
      {title}  <span className='float-right'> {icon && <AiFillCaretRight/>}</span>
    </h5>
    
   
    
  </div>
  
  )
 


   
  );
};

export default Card;
