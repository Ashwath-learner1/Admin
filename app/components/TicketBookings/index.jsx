"use client";
import React, { useState } from "react";
import Button from "./Button";
import DaysButton from "./DaysButton";
import Image from "next/image";
function TicketRegister() {
  const [registration, setRegistration] = useState("Triple");
  const [stay, setStay] = useState("Rajasthali");
  const [days, setDays] = useState("3 Days");
  const [person, setPerson] = useState(3);
  const [onlyAwards, setOnlyAwards] = useState(false);
  const [awards, setAwards] = useState(0);
  const [plusNight, setPlusNight] = useState(false);
  const [discountShow, setDiscountShow] = useState(false);
  const [newPrice, setNewPrice] = useState(0);
  const hotelPrices = {
    Ananta: 3000,
    Fairmount: 3500,
    Rajasthali: 4000,
  };

 
  const dayPrices = {
    "2 Days": 2,
    "3 Days": 3,
  };
  const resetPrices = () => {
    setOnlyAwards(false);
    setPlusNight(false);
    setDiscountShow(false);
    setNewPrice(0)
  };
  const handleRegistrationClick = (buttonName) => {
    setRegistration(buttonName);
    setPerson(buttonName === "Single" ? 1 : buttonName === "Double" ? 2 : 3);
    resetPrices();
  };

  const handleStayClick = (buttonName) => {
    setStay(buttonName);
    resetPrices();
  };

  const handleDaysClick = (buttonName) => {
    setDays(buttonName);
    resetPrices();
  };

  


  const totalCost = plusNight
    ? person * hotelPrices[stay] * dayPrices[days] + person * awards
    : onlyAwards
    ? person * awards
    : person * hotelPrices[stay] * dayPrices[days];

  const handleplusNight = () => {
    setPlusNight(!plusNight);
  resetPrices()
    if (stay && days) {
      setAwards(7500);
     
    }
  };

  const handleOnlyAwards = () => {
    setOnlyAwards(true);
    setStay("Rajasthali");
    setDays("3 Days");
    setPerson(1);
    setPlusNight(false);
    setDiscountShow(false);
    setNewPrice(0);
    
  };

  const handleDiscount = () => {
    setDiscountShow(true);
  };

 


  return (
    <div>
      <div className="w-full flex flex-col justify-center sm:max-2xl:flex-row">
        <div className="w-full px-2 py-2 gap-4 sm:max-2xl:w-2/3">
          <div className=" rounded-lg mb-4 border-meta-1 border-solid border-[2px] ">
            <h1 className=" w-full flex items-center gap-2  text-left text-title-md rounded-t-md rounded-b-none px-2 py-2  text-white bg-meta-3">
             
              Registration
            </h1>
            <div className=" flex flex-col justify-evenly items-center sm:max-2xl:flex-row gap-4 px-6 py-4 ">
              <Button
                name="Single"
                isActive={registration === "Single"}
                onClick={handleRegistrationClick}
              />
              <Button
                name="Double"
                isActive={registration === "Double"}
                onClick={handleRegistrationClick}
              />
              <Button
                name="Triple"
                isActive={registration === "Triple"}
                onClick={handleRegistrationClick}
              />
            </div>
          </div>
          <div className=" rounded-lg mb-4 border-meta-1 border-solid border-[2px] ">
            <h1 className=" w-full flex items-center gap-2 text-left text-title-md rounded-t-md rounded-b-none px-2 py-2  text-white bg-meta-3">
              
             
              Hotels
            </h1>
            <div className=" flex flex-col justify-evenly items-center sm:max-2xl:flex-row gap-4 px-6 py-4 ">
              <Button
                name="Ananta"
                isActive={stay === "Ananta" && onlyAwards === false }
                onClick={handleStayClick}
              />
              <Button
                name="Fairmount"
                isActive={stay === "Fairmount" && onlyAwards === false }
                onClick={handleStayClick}
              />
              <Button
                name="Rajasthali"
                isActive={stay === "Rajasthali" && onlyAwards === false }
                onClick={handleStayClick}
              />
            </div>
          </div>
          <div className="border-[2px] rounded-lg mb-4 border-meta-1 border-solid ">
            <h1 className="w-full text-left text-title-md flex items-center gap-2 rounded-t-md rounded-b-none px-2 py-2  text-white bg-meta-3">
             
              Days
            </h1>
            <div className=" flex flex-col justify-around items-center sm:max-2xl:flex-row gap-4 px-8 py-4 ">
              <DaysButton
                name="2 Days"
                isActive={days === "2 Days" && onlyAwards === false}
                onClick={handleDaysClick}
              />
              <DaysButton
                name="3 Days"
                isActive={days === "3 Days" && onlyAwards === false }
                onClick={handleDaysClick}
              />
            </div>
          </div>
          <div className="border-[2px] rounded-lg  border-meta-1 border-solid ">
            <h1 className=" flex items-center gap-2 w-full text-left text-title-md rounded-t-md rounded-b-none px-2 py-2  text-white bg-meta-3">
            
              Awards
            </h1>
            <div className=" flex flex-col justify-around items-center  sm:max-2xl:flex-row gap-4 px-8 py-4 ">
              {/* <DaysButton name="+ Awards Night" isActive={awards === '+ Awards Night'}  onClick={handleplusNight}/>
           <DaysButton name="Awards Only" isActive={awards === 'Awards Only'}  onClick={handleOnlyAwards}/> */}

              <button
                className={` w-50 sm:max-2xl:w-45 text-sm md:max-2xl:text-sm  uppercase   inline-flex items-center justify-center rounded-md border border-meta-3 py-2 px-6 text-center font-medium
       text-meta-3 hover:bg-opacity-90 sm:max-xl:px-6 ${
         plusNight
           ? "bg-meta-3 text-white dark:text-white"
           : "bg-transparent text-meta-3"
       }`}
                onClick={handleplusNight}
              >
                + Awards Night
              </button>
              <button
                className={` w-50 sm:max-2xl:w-45 text-sm md:max-2xl:text-sm  uppercase   inline-flex items-center justify-center rounded-md border border-meta-3 py-2 px-8 text-center font-medium 
       text-meta-3 hover:bg-opacity-90 sm:max-xl:px-10 ${
         onlyAwards
           ? "bg-meta-3 text-white dark:text-white"
           : "bg-transparent text-meta-3"
       } `}
                onClick={handleOnlyAwards}
              >
                Awards Only
              </button>
            </div>
          </div>
          <div className="flex mt-5 flex-col  md:max-2xl:flex-row justify-center items-center gap-8">
            <h1 className=" text-meta-3 dark:text-white  text-xl font-semibold">
              Coupon Code:
            </h1>
            <input id="TEXT11" className="border-meta-3 border-[1px]" placeholder="WVC12345" required type="text" />
          <Button name="Apply" onClick={handleDiscount}/>
          </div>
          <div className="flex text-black dark:text-white mt-5  gap-9 justify-center items-center flex-col md:max-2xl:flex-row">
            <p className=" text-xl font-semibold">TOTAL</p>
            {plusNight && discountShow == false && (
              <div className="flex flex-row items-center gap-3">
                
                <p className=" font-semibold ml-1 text-xl"> INR {totalCost}</p>
                <p className="text-sm font-semibold "> INCLUDING GST</p>
              </div>
            )}

            {onlyAwards && discountShow == false && (
              <div className="flex flex-row items-center gap-3">
               
                <p className="font-semibold ml-1 text-xl"> INR {totalCost}</p>
                <p className="text-sm font-semibold "> INCLUDING GST</p>
              </div>
            )}
            {plusNight == false &&
              onlyAwards == false &&
              discountShow == false && (
                <div className="flex flex-row items-center gap-3">
                 
                  <p className=" font-semibold ml-1 text-xl">
                   
                    INR {totalCost}
                  </p>
                  <p className="text-sm  font-semibold"> INCLUDING GST</p>
                </div>
              )}
            {newPrice !== 0 && discountShow == true && (
              <div className="flex flex-row items-center gap-3">
               
                <p className="font-semibold ml-1 text-xl">
                  <s>INR {totalCost}</s> INR {newPrice}
                </p>
                <p className="text-sm  font-semibold"> INCLUDING GST</p>
              </div>
            )}
          </div>
        </div>
        <div className="w-full sm:max-2xl:w-1/3 flex justify-center flex-col items-center  px-2 py-2 border-[2px] border-solid border-meta-1 rounded-lg ">
          <Image width={230} height={10} src={"/images/logo1.png"} alt="Logo" />
          <br />
          <br />
          <br />
          <Image
            alt="wedding"
            src={"/images/ticketwedimage.jpg"}
            width={500}
            height={900}
          />
        </div>
      </div>
    </div>
  );
}

export default TicketRegister;
