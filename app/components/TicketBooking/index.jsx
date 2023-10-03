"use client";
import React, { useState } from "react";
import Button from "./Button";
import DaysButton from "./DaysButton";
import Image from "next/image";
function TicketRegistration() {
  const [registration, setRegistration] = useState("Triple");
  const [stay, setStay] = useState("Rajasthali");
  const [days, setDays] = useState("3 Days");
  const [hotel, setHotel] = useState(4000);
  const [day, setDay] = useState(3);
  const [onlyawards, setOnlyAwards] = useState(false);
  const [awards, setAwards] = useState(0); // + awards night button state
  const [awardsNight, setAwardsNight] = useState(0); // + awards only button state
  const [plusnight, setPlusNight] = useState(false);
  const [person, setPerson] = useState(3);
  const [newPrice, setNewPrice] = useState(0);
  const [discountShow, setDiscountShow] = useState(false);

  const totalCost = plusnight
    ? person * hotel * day + person * awards
    : onlyawards
    ? person * awardsNight
    : person * hotel * day;

  const handleRegistrationClick = (buttonName) => {
    setRegistration(buttonName);
    if (buttonName == "Single") {
      setPerson(1);
    } else if (buttonName == "Double") {
      setPerson(2);
    }
    else if(buttonName="Triple"){
      setPerson(3);
    }

    

    setDiscountShow(false);
    setNewPrice(0);
    // Handle other button click logic if needed
  };

  const handleStayClick = (buttonName) => {
    setStay(buttonName);
    if (buttonName === "Ananta") {
      setHotel(3000);
       setAwardsNight(0);
      setDiscountShow(false);
      setNewPrice(0);
    } else if (buttonName == "Fairmount") {
      setHotel(3500);
       setAwardsNight(0);
      setDiscountShow(false);
      setNewPrice(0);
    }
    else if(buttonName == "Rajasthali"){
      setHotel(4000);
      setAwardsNight(0);
     setDiscountShow(false);
     setNewPrice(0);
    }
   

    setOnlyAwards(false);
  };

  const handleDaysClick = (buttonName) => {
    setDays(buttonName);

    if (buttonName === "2 Days") {
      setDay(2);
      // setStay('Rajasthali');
      setAwardsNight(0);
      setDiscountShow(false);
      setNewPrice(0);
    } else if (buttonName === "3 Days") {
      setDay(3);
      setAwardsNight(0);
      setDiscountShow(false);
      setNewPrice(0);
    }

    setOnlyAwards(false);
  };

  const handleplusNight = () => {
    setPlusNight(!plusnight);
    setOnlyAwards(false);
    setDiscountShow(false);
    setNewPrice(0);
    if (stay && days) {
      setAwards(7500);
    }
  };

  const handleOnlyAwards = () => {
    setPlusNight(false);
    setOnlyAwards(true);
    setStay("Rajasthali");
    setHotel(4000);
    setDays("3 Days");
    setDay(3);
    setAwardsNight(7500);
    setDiscountShow(false);
    setNewPrice(0);
  };

  const handleDiscount = () => {
    setDiscountShow(true);
    const price = totalCost - 2000;
    setNewPrice(price);
  };

  return (
    <div>
      <div className="w-full flex flex-col justify-center sm:max-2xl:flex-row">
        <div className="w-full px-2 py-2 gap-4 sm:max-2xl:w-2/3">
          <div className=" rounded-lg mb-4 border-meta-1 border-solid border-[2px] ">
            <h1 className=" w-full flex items-center gap-2  text-left text-title-md rounded-t-md rounded-b-none px-2 py-2  text-white bg-meta-3">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="32"
                height="32"
                viewBox="0 0 48 48"
                id="people"
              >
                <path
                  fill="white"
                  fillRule="evenodd"
                  d="M17 24C20.8675 24 24 20.8675 24 17 24 13.1325 20.8675 10 17 10 13.1325 10 10 13.1325 10 17 10 20.8675 13.1325 24 17 24zM22 17C22 19.7629 19.7629 22 17 22 14.2371 22 12 19.7629 12 17 12 14.2371 14.2371 12 17 12 19.7629 12 22 14.2371 22 17zM4 38V32.4C4 28.144 12.6612 26 17 26 19.8862 26 24.6851 26.9487 27.5749 28.8368 29.6346 28.2798 31.8936 28 33.5 28 35.3579 28 37.851 28.3742 39.9092 29.1307 40.9364 29.5084 41.9189 30.004 42.6622 30.6463 43.4108 31.2931 44 32.1676 44 33.2667V38H4zM6 32.4C6 32.0826 6.14556 31.6486 6.76618 31.0846 7.39908 30.5095 8.37322 29.9511 9.60682 29.4645 12.076 28.4906 15.0766 28 17 28 18.9234 28 21.924 28.4906 24.3932 29.4645 25.6268 29.9511 26.6009 30.5095 27.2338 31.0846 27.8544 31.6486 28 32.0826 28 32.4V36H6V32.4zM29.3532 30.4692C30.8657 30.1565 32.3834 30 33.5 30 35.1465 30 37.4034 30.3405 39.2191 31.0079 40.1288 31.3423 40.8643 31.736 41.3546 32.1597 41.8398 32.5789 42 32.947 42 33.2667V36H30V32.4C30 31.6991 29.7651 31.0554 29.3532 30.4692zM39 20.5C39 23.5387 36.5387 26 33.5 26 30.4613 26 28 23.5387 28 20.5 28 17.4612 30.4613 15 33.5 15 36.5387 15 39 17.4612 39 20.5zM33.5 24C35.4342 24 37 22.4342 37 20.5 37 18.5658 35.4342 17 33.5 17 31.5658 17 30 18.5658 30 20.5 30 22.4342 31.5658 24 33.5 24z"
                  clipRule="evenodd"
                ></path>
              </svg>
             Number of Attendees
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
              
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="32"
                height="32"
                data-name="Layer 1"
                viewBox="0 0 48 48"
                id="hotel"
              >
                <path
                  fill="white"
                  d="M39 40h-3V7a1 1 0 0 0-1-1H13a1 1 0 0 0-1 1v33H9a1 1 0 0 0 0 2h30a1 1 0 0 0 0-2Zm-18 0v-6h6v6Zm8 0v-6h1a1 1 0 0 0 0-2H18a1 1 0 0 0 0 2h1v6h-5V8h20v32Z"
                ></path>
                <path
                  fill="white"
                  d="M19 11h-2a1 1 0 0 0 0 2h2a1 1 0 0 0 0-2zm6 0h-2a1 1 0 0 0 0 2h2a1 1 0 0 0 0-2zm6 0h-2a1 1 0 0 0 0 2h2a1 1 0 0 0 0-2zm-12 5h-2a1 1 0 0 0 0 2h2a1 1 0 0 0 0-2zm6 0h-2a1 1 0 0 0 0 2h2a1 1 0 0 0 0-2zm6 0h-2a1 1 0 0 0 0 2h2a1 1 0 0 0 0-2zm-12 5h-2a1 1 0 0 0 0 2h2a1 1 0 0 0 0-2zm6 0h-2a1 1 0 0 0 0 2h2a1 1 0 0 0 0-2zm6 0h-2a1 1 0 0 0 0 2h2a1 1 0 0 0 0-2zm-12 5h-2a1 1 0 0 0 0 2h2a1 1 0 0 0 0-2zm6 0h-2a1 1 0 0 0 0 2h2a1 1 0 0 0 0-2zm6 0h-2a1 1 0 0 0 0 2h2a1 1 0 0 0 0-2z"
                ></path>
              </svg>
              Hotels
            </h1>
            <div className=" flex flex-col justify-evenly items-center sm:max-2xl:flex-row gap-4 px-6 py-4 ">
              <Button
                name="Ananta"
                isActive={stay === "Ananta" && onlyawards == false}
                onClick={handleStayClick}
              />
              <Button
                name="Fairmount"
                isActive={stay === "Fairmount" && onlyawards == false}
                onClick={handleStayClick}
              />
              <Button
                name="Rajasthali"
                isActive={stay === "Rajasthali" && onlyawards == false}
                onClick={handleStayClick}
              />
            </div>
          </div>
          <div className="border-[2px] rounded-lg mb-4 border-meta-1 border-solid ">
            <h1 className="w-full text-left text-title-md flex items-center gap-2 rounded-t-md rounded-b-none px-2 py-2  text-white bg-meta-3">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="30"
                height="30"
                viewBox="0 0 16 16"
                id="calendar"
              >
                <path
                  fill="white"
                  d="M5 4.5a.5.5 0 0 1-.5-.5V2a.5.5 0 0 1 1 0v2a.5.5 0 0 1-.5.5zM11 4.5a.5.5 0 0 1-.5-.5V2a.5.5 0 0 1 1 0v2a.5.5 0 0 1-.5.5z"
                ></path>
                <path
                  fill="white"
                  d="M13 14.5H3c-.827 0-1.5-.673-1.5-1.5V4c0-.827.673-1.5 1.5-1.5h10c.827 0 1.5.673 1.5 1.5v9c0 .827-.673 1.5-1.5 1.5zM3 3.5a.5.5 0 0 0-.5.5v9a.5.5 0 0 0 .5.5h10a.5.5 0 0 0 .5-.5V4a.5.5 0 0 0-.5-.5H3z"
                ></path>
                <path
                  fill="white"
                  d="M14 6.5H2a.5.5 0 0 1 0-1h12a.5.5 0 0 1 0 1zM5.5 7.5h1v1h-1zM7.5 7.5h1v1h-1zM9.5 7.5h1v1h-1zM11.5 7.5h1v1h-1zM3.5 9.5h1v1h-1zM5.5 9.5h1v1h-1zM7.5 9.5h1v1h-1zM9.5 9.5h1v1h-1zM11.5 9.5h1v1h-1zM3.5 11.5h1v1h-1zM5.5 11.5h1v1h-1zM7.5 11.5h1v1h-1z"
                ></path>
              </svg>
              Days
            </h1>
            <div className=" flex flex-col justify-around items-center sm:max-2xl:flex-row gap-4 px-8 py-4 ">
              <DaysButton
                name="2 Days"
                isActive={days === "2 Days" && onlyawards == false}
                onClick={handleDaysClick}
              />
              <DaysButton
                name="3 Days"
                isActive={days === "3 Days" && onlyawards == false}
                onClick={handleDaysClick}
              />
            </div>
          </div>
          <div className="border-[2px] rounded-lg  border-meta-1 border-solid ">
            <h1 className=" flex items-center gap-2 w-full text-left text-title-md rounded-t-md rounded-b-none px-2 py-2  text-white bg-meta-3">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="34"
                height="34"
                viewBox="0 0 64 64"
                id="gold-cup"
              >
                <path
                  fill="white"
                  d="M32,23c-3.8599,0-7,3.1401-7,7s3.1401,7,7,7s7-3.1401,7-7S35.8599,23,32,23z M33.0856,34.5247c0,0.2761-0.2239,0.5-0.5,0.5
		h-1c-0.2762,0-0.5-0.2239-0.5-0.5v-6.8818l-1.0001,0.5c-0.247,0.1235-0.5474,0.0234-0.6708-0.2236l-0.4473-0.8947
		c-0.1235-0.247-0.0234-0.5473,0.2236-0.6708l2.4473-1.2236c0.3101-0.1548,0.6787-0.1387,0.9731,0.0439
		c0.2944,0.1821,0.4741,0.5039,0.4741,0.8506V34.5247z M39.6289,41.0646c1.417-1.3848,2.6152-2.9258,3.5557-4.5723
		C45.0264,33.3258,46,29.694,46,25.9894c0-2.9253-0.5869-5.7515-1.7441-8.4004c-0.1592-0.3643-0.5186-0.5996-0.916-0.5996H20.6602
		c-0.3975,0-0.7568,0.2354-0.916,0.5996C18.5869,20.2379,18,23.0641,18,25.9894c0,3.7046,0.9736,7.3364,2.8115,10.4961
		c0.9443,1.6533,2.1426,3.1943,3.5742,4.5933c1.1006,1.0635,2.3145,2.0034,3.6143,2.8008c0,0.0366,0,0.0732,0,0.1099
		c0,2.7949-0.622,5.5142-1.7891,8.0071h11.5781C36.622,49.5036,36,46.7842,36,43.9894c0-0.0366,0-0.0732,0-0.1099
		C37.2998,43.0822,38.5156,42.1403,39.6289,41.0646z M32,39c-4.9624,0-9-4.0376-9-9s4.0376-9,9-9s9,4.0376,9,9S36.9624,39,32,39z
		 M21.3465,47.9673c0.1931,0.1927,0.1982,0.5026,0.0079,0.6981l-0.6968,0.7159c-0.1949,0.2003-0.5198,0.2042-0.7177,0.0068
		c-0.7085-0.7069-1.3817-1.4382-2.0266-2.1817c-1.4002,0.8722-2.8094,1.2953-4.341,1.2953c-0.2588,0-0.5215-0.0117-0.7881-0.0356
		c-2.1084-0.1885-3.8359-1.0605-5.4375-2.7446c-0.1982-0.208-0.2969-0.4917-0.2715-0.7778
		c0.0254-0.2866,0.1729-0.5479,0.4053-0.7178c1.875-1.373,3.7373-1.9253,5.8379-1.7358c0.4229,0.0378,0.8268,0.111,1.2211,0.2049
		c-0.6238-0.985-1.1727-1.9709-1.6458-2.9477c-0.3812,0.0488-0.7578,0.0812-1.1262,0.0812c-1.3086,0-2.541-0.3076-3.7295-0.9272
		c-1.8818-0.9932-3.1426-2.4634-3.9717-4.6294c-0.1035-0.2686-0.085-0.5684,0.0488-0.8228s0.3701-0.439,0.6494-0.5068
		c2.2588-0.5454,4.1816-0.3438,6.0586,0.6357c0.0076,0.004,0.0142,0.0087,0.0217,0.0128c-0.17-0.9316-0.2694-1.8616-0.3094-2.7878
		c-1.9327-0.4279-3.4182-1.3141-4.6273-2.761c-1.3584-1.625-1.9629-3.4634-1.9043-5.7852c0.0078-0.2876,0.1387-0.5576,0.3584-0.7422
		c0.2207-0.1841,0.5098-0.2637,0.7939-0.2207c2.2959,0.3545,3.9971,1.2764,5.3555,2.9004c0.2004,0.2396,0.3792,0.4858,0.5471,0.7357
		c0.2413-1.0971,0.5626-2.1645,0.9597-3.1987c-1.6251-1.1382-2.6586-2.529-3.2207-4.3328
		c-0.6289-2.0205-0.4814-3.9497,0.4639-6.0728c0.1162-0.2627,0.3408-0.4624,0.6152-0.5479
		c0.2764-0.0845,0.5732-0.0488,0.8184,0.1006c1.9844,1.2095,3.2012,2.7144,3.8311,4.7358c0.1119,0.359,0.1903,0.7147,0.2531,1.0695
		c0.5461-0.7433,1.1414-1.4522,1.7852-2.1257c-0.8804-1.5238-1.2357-3.1089-1.0812-4.8232c0.2002-2.1211,1.0732-3.8472,2.748-5.4355
		c0.208-0.1978,0.4941-0.2954,0.7793-0.2705c0.2861,0.0264,0.5469,0.1743,0.7168,0.4063c1.373,1.8804,1.9258,3.7349,1.7383,5.8364
		c-0.1104,1.2783-0.4785,2.4072-1.126,3.4507c-0.0488,0.0786-0.1084,0.1504-0.1768,0.2124
		c-0.6324,0.5062-1.1526,0.9677-1.6097,1.4224l-0.0368,0.0356C14.5801,19.2086,12.5,24.2443,12.5,29.9542
		c0,1.9662,0.3323,3.9704,0.9866,5.9578c0.0035,0.0096,0.0122,0.0174,0.0153,0.0271c0.2365,0.7371,0.5323,1.5085,0.8784,2.2919
		l0.0025,0.0001C15.8372,41.4854,18.301,44.9274,21.3465,47.9673z M59.8848,33.4489c-0.1338-0.2544-0.3701-0.439-0.6494-0.5068
		c-2.2588-0.5454-4.1816-0.3438-6.0586,0.6357c-0.0076,0.004-0.0142,0.0087-0.0217,0.0128c0.17-0.9316,0.2694-1.8616,0.3094-2.7878
		c1.9327-0.4279,3.4182-1.3141,4.6273-2.761c1.3584-1.625,1.9629-3.4634,1.9043-5.7852c-0.0078-0.2876-0.1387-0.5576-0.3584-0.7422
		c-0.2207-0.1841-0.5098-0.2637-0.7939-0.2207c-2.2959,0.3545-3.9971,1.2764-5.3555,2.9004
		c-0.2004,0.2396-0.3792,0.4858-0.5471,0.7357c-0.2413-1.0971-0.5626-2.1645-0.9597-3.1987
		c1.6251-1.1382,2.6586-2.529,3.2207-4.3328c0.6289-2.0205,0.4814-3.9497-0.4639-6.0728c-0.1162-0.2627-0.3408-0.4624-0.6152-0.5479
		c-0.2764-0.0845-0.5732-0.0488-0.8184,0.1006c-1.9844,1.2095-3.2012,2.7144-3.8311,4.7358
		c-0.1119,0.359-0.1903,0.7147-0.2531,1.0695c-0.5461-0.7433-1.1414-1.4522-1.7852-2.1257
		c0.8804-1.5238,1.2357-3.1089,1.0812-4.8232c-0.2002-2.1211-1.0732-3.8472-2.748-5.4355c-0.208-0.1978-0.4941-0.2954-0.7793-0.2705
		c-0.2861,0.0264-0.5469,0.1743-0.7168,0.4063c-1.373,1.8804-1.9258,3.7349-1.7383,5.8364c0.1104,1.2783,0.4785,2.4072,1.126,3.4507
		c0.0488,0.0786,0.1084,0.1504,0.1768,0.2124c0.6324,0.5062,1.1526,0.9677,1.6097,1.4224l0.0368,0.0356
		c3.9365,3.8164,6.0166,8.8521,6.0166,14.562c0,1.9662-0.3323,3.9704-0.9866,5.9578c-0.0035,0.0096-0.0122,0.0174-0.0153,0.0271
		c-0.2365,0.7371-0.5323,1.5085-0.8784,2.2919l-0.0025,0.0001c-1.4543,3.2543-3.9182,6.6963-6.9637,9.7362
		c-0.1931,0.1927-0.1982,0.5026-0.0079,0.6981l0.6968,0.7159c0.1949,0.2003,0.5198,0.2042,0.7177,0.0068
		c0.7085-0.7069,1.3817-1.4382,2.0266-2.1817c1.4002,0.8722,2.8094,1.2953,4.341,1.2953c0.2588,0,0.5215-0.0117,0.7881-0.0356
		c2.1084-0.1885,3.8359-1.0605,5.4375-2.7446c0.1982-0.208,0.2969-0.4917,0.2715-0.7778c-0.0254-0.2866-0.1729-0.5479-0.4053-0.7178
		c-1.875-1.373-3.7373-1.9253-5.8379-1.7358c-0.4229,0.0378-0.8268,0.111-1.2211,0.2049c0.6238-0.985,1.1727-1.9709,1.6458-2.9477
		c0.3812,0.0488,0.7578,0.0812,1.1262,0.0812c1.3086,0,2.541-0.3076,3.7295-0.9272c1.8818-0.9932,3.1426-2.4634,3.9717-4.6294
		C60.0371,34.0031,60.0186,33.7032,59.8848,33.4489z M39,53.9965H25c-1.6543,0-3,1.3457-3,3v2c0,0.5522,0.4473,1,1,1h18
		c0.5527,0,1-0.4478,1-1v-2C42,55.3422,40.6543,53.9965,39,53.9965z"
                ></path>
              </svg>
              Awards
            </h1>
            <div className=" flex flex-col justify-around items-center  sm:max-2xl:flex-row gap-4 px-8 py-4 ">
              {/* <DaysButton name="+ Awards Night" isActive={awards === '+ Awards Night'}  onClick={handleplusNight}/>
           <DaysButton name="Awards Only" isActive={awards === 'Awards Only'}  onClick={handleOnlyAwards}/> */}

              <button
                className={` w-50 sm:max-2xl:w-45 text-sm md:max-2xl:text-sm  uppercase transition  hover:bg-meta-3 hover:opacity-80 hover:text-white delay-100 duration-150   inline-flex items-center justify-center rounded-md border border-meta-3 py-2 px-6 text-center font-medium
       text-meta-3 hover:bg-opacity-90 sm:max-xl:px-6 ${
         plusnight
           ? "bg-meta-3 text-white dark:text-white"
           : "bg-transparent text-meta-3"
       }`}
                onClick={handleplusNight}
              >
                + Awards Night
              </button>
              <button
                className={` w-50 sm:max-2xl:w-45 text-sm md:max-2xl:text-sm  uppercase transition  hover:bg-meta-3 hover:opacity-80 hover:text-white delay-100 duration-150   inline-flex items-center justify-center rounded-md border border-meta-3 py-2 px-8 text-center font-medium 
       text-meta-3 hover:bg-opacity-90 sm:max-xl:px-10 ${
         onlyawards
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
            {plusnight && discountShow == false && (
              <div className="flex flex-row items-center gap-3">
                
                <p className=" font-semibold ml-1 text-xl"> INR {totalCost}</p>
                <p className="text-sm font-semibold "> INCLUDING GST</p>
              </div>
            )}

            {onlyawards && discountShow == false && (
              <div className="flex flex-row items-center gap-3">
               
                <p className="font-semibold ml-1 text-xl"> INR {totalCost}</p>
                <p className="text-sm font-semibold "> INCLUDING GST</p>
              </div>
            )}
            {plusnight == false &&
              onlyawards == false &&
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

export default TicketRegistration;
