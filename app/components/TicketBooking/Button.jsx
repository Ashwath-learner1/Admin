import React from "react";
// import Link from "next/link";

function Button({ name,isActive,onClick }) {
   
  return (
    <div>
      <button
      
        className={`w-50   sm:max-3xl:w-28  text-sm md:max-2xl:text-sm uppercase   inline-flex transition hover:opacity-70  hover:bg-meta-3 hover:text-white delay-100 duration-150 items-center justify-center trackin rounded-md border border-meta-3 py-2 px-8 text-center font-medium 
        text-meta-3 hover:bg-opacity-90 sm:max-xl:px-10 ${
            isActive ? 'bg-meta-3 text-white dark:text-white' : 'bg-transparent text-meta-3'
          }`
    }
    onClick={() => onClick(name)}
      >
        {name}
      </button>
    </div>
  );
}

export default Button;
