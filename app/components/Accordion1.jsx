import React, { useState, useRef } from "react";

const Accordion1 = ({ title, content }) => {
  const [isOpen, setIsOpen] = useState(false);
  const contentRef = useRef(null);

  const toggleAccordion = () => {
    setIsOpen(!isOpen);
  };

  const getContentHeight = () => {
    return isOpen ? `${contentRef.current.scrollHeight}px` : "0px";
  };

  return (
    <div className="bg-white shadow-md border rounded-lg mb-4 dark:border-neutral-600 border-neutral-200 overflow-hidden dark:bg-black">
      <div
        className="flex md:justify-between md:gap-0 justify-between cursor-pointer   p-3"
        onClick={toggleAccordion}
      >
        <h2 className="text-lg font-semibold dark:text-primary">{title}</h2>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className={`h-6 w-6 transform ${
            isOpen ? "rotate-[-180]" : "rotate-0"
          } transition-transform duration-300 ease-in-out`}
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d={isOpen ? "M19 9l-7 7-7-7" : "M9 5l7 7-7 7"}
          />
        </svg>
      </div>
      <div
        className="overflow-hidden transition-max-height duration-300 ease-in-out"
        style={{ maxHeight: getContentHeight() }}
        ref={contentRef}
      >
        <div className="p-4">{content}</div>
      </div>
    </div>
  );
};

export default Accordion1;
