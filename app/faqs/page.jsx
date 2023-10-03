'use client'
import * as React from 'react';
import { useEffect } from 'react';
// import {Tab,initTE} from "tw-elements"
import Accordion1 from '../components/Accordion1';
import Layout from '../components/Layout';
import Breadcrumb from '../components/BreadCrumbs/BreadCrumbs';
// import Box from '@mui/material/Box';
// import Tab from '@mui/material/Tab';
// import TabContext from '@mui/lab/TabContext';
// import TabList from '@mui/lab/TabList';
// import TabPanel from '@mui/lab/TabPanel';
// import { Accordion,AccordionActions,AccordionDetails,AccordionSummary } from '@mui/material';
// import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';

export default function Faqs() {

    useEffect(() => {
        
         const init=async ()=>{
          const {Tab,initTE}=await import("tw-elements")
          initTE({ Tab });
         }
          
         
        init();
      
      }, []);

      
  //const [value, setValue] = React.useState('1');

//   const handleChange = (event, newValue) => {
//     setValue(newValue);
//   };

  return (
   
<div>
      <Breadcrumb pageNames={['faqs']}/>
    <div>

<div className='flex justify-center mt-5 gap-8  flex-col text-black dark:text-white' >
            <p className='text-center font-semibold text-[55px]'>FAQs</p>
            <p className='text-md text-center font-medium text-md text-black dark:text-gray-2'> Here you can see the frequently asked questions</p>
        </div>
       
       {/* <ul
  className="mb-5 flex list-none flex-row flex-wrap border-b-0 px-10"
  role="tablist"
  data-te-nav-ref>
  <li role="presentation" className="flex-grow basis-0 text-center">
    <a
      href="#tickets-booking01"
      className="my-2 block border-x-0  border-b-2 border-t-0 border-transparent px-10 pb-3.5 pt-4 text-lg font-medium uppercase leading-tight text-neutral-500 hover:isolate hover:border-transparent hover:bg-neutral-100 focus:isolate focus:border-transparent  data-[te-nav-active]:border-primary data-[te-nav-active]:text-primary dark:text-neutral-400 dark:hover:bg-transparent dark:data-[te-nav-active]:border-primary-400 dark:data-[te-nav-active]:text-primary-400"
      data-te-toggle="pill"
      data-te-target="#tickets-booking01"
      data-te-nav-active
      role="tab"
      aria-controls="tickets-booking01"
      aria-selected="true"
      >Tickets Booking</a
    >
  </li>
  <li role="presentation" className="flex-grow basis-0 text-center">
    <a
      href="#nominations01"
      className="my-2 block  border-x-0 border-b-2 border-t-0 border-transparent px-10 pb-3.5 pt-4 text-lg font-medium uppercase leading-tight text-neutral-500 hover:isolate hover:border-transparent hover:bg-neutral-100 focus:isolate focus:border-transparent  data-[te-nav-active]:border-primary data-[te-nav-active]:text-primary dark:text-neutral-400 dark:hover:bg-transparent dark:data-[te-nav-active]:border-primary-400 dark:data-[te-nav-active]:text-primary-400"
      data-te-toggle="pill"
      data-te-target="#nominations01"
      role="tab"
      aria-controls="nominations01"
      aria-selected="false"
      >Nominations</a
    >
  </li>
  <li role="presentation" className="flex-grow basis-0 text-center">
    <a
      href="#exhibitors01"
      className="my-2 block border-x-0  border-b-2 border-t-0 border-transparent px-10 pb-3.5 pt-4 text-lg font-medium uppercase leading-tight text-neutral-500 hover:isolate hover:border-transparent hover:bg-neutral-100 focus:isolate focus:border-transparent data-[te-nav-active]:border-primary data-[te-nav-active]:text-primary dark:text-neutral-400 dark:hover:bg-transparent dark:data-[te-nav-active]:border-primary-400 dark:data-[te-nav-active]:text-primary-400"
      data-te-toggle="pill"
      data-te-target="#exhibitors01"
      role="tab"
      aria-controls="exhibitors01"
      aria-selected="false"
      >Exhibitors</a
    >
  </li>
  
</ul> */}


  {/*Tabs navigation*/}
  <ul
  className="mb-5 flex justify-evenly  list-none flex-row flex-wrap border-b-0 pl-0"
  role="tablist"
  data-te-nav-ref
>
  <li role="presentation">
    <a
      href="#tickets-booking01"
      className="my-2 block border-x-0 border-b-2 border-t-0 border-transparent px-7 pb-3.5 pt-4 text-lg font-medium uppercase leading-tight text-neutral-500 hover:isolate hover:border-transparent hover:bg-neutral-100 focus:isolate focus:border-transparent data-[te-nav-active]:border-primary data-[te-nav-active]:text-primary dark:text-neutral-400 dark:hover:bg-transparent dark:data-[te-nav-active]:border-primary-400 dark:data-[te-nav-active]:text-primary-400"
      data-te-toggle="pill"
      data-te-target="#tickets-booking01"
      data-te-nav-active=""
      role="tab"
      aria-controls="tickets-booking01"
      aria-selected="false"
    >
      TICKETS BOOKING
    </a>
  </li>
  <li role="presentation">
    <a
      href="#nominations01"
      className="my-2 block border-x-0 border-b-2 border-t-0 border-transparent px-7 pb-3.5 pt-4 text-lg font-medium uppercase leading-tight text-neutral-500 hover:isolate hover:border-transparent hover:bg-neutral-100 focus:isolate focus:border-transparent data-[te-nav-active]:border-primary data-[te-nav-active]:text-primary dark:text-neutral-400 dark:hover:bg-transparent dark:data-[te-nav-active]:border-primary-400 dark:data-[te-nav-active]:text-primary-400"
      data-te-toggle="pill"
      data-te-target="#nominations01"
      role="tab"
      aria-controls="nominations01"
      aria-selected="true"
    >
      NOMINATIONS
    </a>
  </li>
  <li role="presentation">
    <a
      href="#exhibitors01"
      className="my-2 block border-x-0 border-b-2 border-t-0 border-transparent px-7 pb-3.5 pt-4 text-lg font-medium uppercase leading-tight text-neutral-500 hover:isolate hover:border-transparent hover:bg-neutral-100 focus:isolate focus:border-transparent data-[te-nav-active]:border-primary data-[te-nav-active]:text-primary dark:text-neutral-400 dark:hover:bg-transparent dark:data-[te-nav-active]:border-primary-400 dark:data-[te-nav-active]:text-primary-400"
      data-te-toggle="pill"
      data-te-target="#exhibitors01"
      role="tab"
      aria-controls="exhibitors01"
      aria-selected="false"
    >
      EXHIBITORS
    </a>
  </li>
</ul>

  {/*Tabs content*/}

 


<div className="mb-6  py-4 ">
  <div
    className="hidden opacity-100 md:px-35 transition-opacity duration-150 ease-linear data-[te-tab-active]:block"
    id="tickets-booking01"
    role="tabpanel"
    aria-labelledby='tickets-booking01'
    data-te-tab-active>
 <Accordion1
        title="Accordion Title 1"
        content="This is the content for Accordion 1."
      />
      <Accordion1
        title="Accordion Title 1"
        content="This is the content for Accordion 1."
      />
      <Accordion1
        title="Accordion Title 1"
        content="This is the content for Accordion 1."
      />
  </div>
  <div
    className="hidden opacity-0 md:px-35 transition-opacity duration-150 ease-linear data-[te-tab-active]:block"
    id="nominations01"
    aria-labelledby="nominations01"
    role="tabpanel"
    >
   <Accordion1
        title="Accordion Title 1"
        content="This is the content for Accordion 1."
      />
      <Accordion1
        title="Accordion Title 1"
        content="This is the content for Accordion 1."
      />
      <Accordion1
        title="Accordion Title 1"
        content="This is the content for Accordion 1."
      />
     
     
      
  </div>
  <div
    className="hidden opacity-0 md:px-35 transition-opacity duration-150 ease-linear data-[te-tab-active]:block"
    id="exhibitors01"
    aria-labelledby="exhibitors01"
    role="tabpanel"
    >
      <Accordion1
        title="Accordion Title 1"
        content="This is the content for Accordion 1."
      />
      <Accordion1
        title="Accordion Title 1"
        content="This is the content for Accordion 1."
      />
      <Accordion1
        title="Accordion Title 1"
        content="This is the content for Accordion 1."
      />
   
  </div>


 
</div>
</div>
  
</div>



)}
