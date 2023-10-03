"use client";
import React, { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import SidebarLinkGroup from "./SidebarLinkGroup";
import Image from "next/image";

const Sidebar = ({ sidebarOpen, setSidebarOpen }) => {
  const pathname = usePathname();

  const trigger = useRef(null);
  const sidebar = useRef(null);

  let storedSidebarExpanded = "true";
  const [sidebarExpanded, setSidebarExpanded] = useState(
    storedSidebarExpanded === null ? false : storedSidebarExpanded === "true"
  );

  // close on click outside
  useEffect(() => {
    const clickHandler = ({ target }) => {
      if (!sidebar.current || !trigger.current) return;
      if (
        !sidebarOpen ||
        sidebar.current.contains(target) ||
        trigger.current.contains(target)
      )
        return;
      setSidebarOpen(false);
    };
    document.addEventListener("click", clickHandler);
    return () => document.removeEventListener("click", clickHandler);
  });

  // close if the esc key is pressed
  useEffect(() => {
    const keyHandler = ({ keyCode }) => {
      if (!sidebarOpen || keyCode !== 27) return;
      setSidebarOpen(false);
    };
    document.addEventListener("keydown", keyHandler);
    return () => document.removeEventListener("keydown", keyHandler);
  });

  useEffect(() => {
    localStorage.setItem("sidebar-expanded", sidebarExpanded.toString());
    if (sidebarExpanded) {
      document.querySelector("body")?.classList.add("sidebar-expanded");
    } else {
      document.querySelector("body")?.classList.remove("sidebar-expanded");
    }
  }, [sidebarExpanded]);

  return (
    <aside
      ref={sidebar}
      className={`absolute left-0 top-0 z-9999 flex h-screen w-72.5 flex-col overflow-y-hidden bg-black duration-300 ease-linear dark:bg-boxdark lg:static lg:translate-x-0 ${
        sidebarOpen ? "translate-x-0" : "-translate-x-full"
      }`}
    >
      {/* <!-- SIDEBAR HEADER --> */}
      <div className="flex items-center justify-between gap-2 px-6 py-5.5 lg:py-6.5">
        <Link href="/">
          <Image width={230} height={10} src={"/images/logo1.png"} alt="Logo" />
        </Link>

        <button
          ref={trigger}
          onClick={() => setSidebarOpen(!sidebarOpen)}
          aria-controls="sidebar"
          aria-expanded={sidebarOpen}
          className="block lg:hidden"
        >
          <svg
            className="fill-current"
            width="20"
            height="18"
            viewBox="0 0 20 18"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M19 8.175H2.98748L9.36248 1.6875C9.69998 1.35 9.69998 0.825 9.36248 0.4875C9.02498 0.15 8.49998 0.15 8.16248 0.4875L0.399976 8.3625C0.0624756 8.7 0.0624756 9.225 0.399976 9.5625L8.16248 17.4375C8.31248 17.5875 8.53748 17.7 8.76248 17.7C8.98748 17.7 9.17498 17.625 9.36248 17.475C9.69998 17.1375 9.69998 16.6125 9.36248 16.275L3.02498 9.8625H19C19.45 9.8625 19.825 9.4875 19.825 9.0375C19.825 8.55 19.45 8.175 19 8.175Z"
              fill=""
            />
          </svg>
        </button>
      </div>
      {/* <!-- SIDEBAR HEADER --> */}

      <div className="no-scrollbar flex flex-col overflow-y-auto duration-300 ease-linear">
        {/* <!-- Sidebar Menu --> */}
        <nav className="mt-5 py-4 px-4 lg:mt-9 lg:px-6">
          {/* <!-- Menu Group --> */}
          <div>
            <ul className="mb-[120px] flex flex-col gap-1.5">
              {/* <!-- Menu Item Dashboard --> */}

              <Link
                href="/"
                className={`group relative flex items-center gap-2.5 rounded-sm py-2 px-4 font-medium text-bodydark1 duration-300 ease-in-out hover:bg-graydark dark:hover:bg-meta-4 ${
                  (pathname === "/" || pathname.includes("dashboard")) &&
                  "bg-graydark dark:bg-meta-4"
                }`}
              >
                <svg
                  className="fill-current"
                  width="18"
                  height="18"
                  viewBox="0 0 18 18"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M6.10322 0.956299H2.53135C1.5751 0.956299 0.787598 1.7438 0.787598 2.70005V6.27192C0.787598 7.22817 1.5751 8.01567 2.53135 8.01567H6.10322C7.05947 8.01567 7.84697 7.22817 7.84697 6.27192V2.72817C7.8751 1.7438 7.0876 0.956299 6.10322 0.956299ZM6.60947 6.30005C6.60947 6.5813 6.38447 6.8063 6.10322 6.8063H2.53135C2.2501 6.8063 2.0251 6.5813 2.0251 6.30005V2.72817C2.0251 2.44692 2.2501 2.22192 2.53135 2.22192H6.10322C6.38447 2.22192 6.60947 2.44692 6.60947 2.72817V6.30005Z"
                    fill=""
                  />

                  <path
                    d="M15.4689 0.956299H11.8971C10.9408 0.956299 10.1533 1.7438 10.1533 2.70005V6.27192C10.1533 7.22817 10.9408 8.01567 11.8971 8.01567H15.4689C16.4252 8.01567 17.2127 7.22817 17.2127 6.27192V2.72817C17.2127 1.7438 16.4252 0.956299 15.4689 0.956299ZM15.9752 6.30005C15.9752 6.5813 15.7502 6.8063 15.4689 6.8063H11.8971C11.6158 6.8063 11.3908 6.5813 11.3908 6.30005V2.72817C11.3908 2.44692 11.6158 2.22192 11.8971 2.22192H15.4689C15.7502 2.22192 15.9752 2.44692 15.9752 2.72817V6.30005Z"
                    fill=""
                  />

                  <path
                    d="M6.10322 9.92822H2.53135C1.5751 9.92822 0.787598 10.7157 0.787598 11.672V15.2438C0.787598 16.2001 1.5751 16.9876 2.53135 16.9876H6.10322C7.05947 16.9876 7.84697 16.2001 7.84697 15.2438V11.7001C7.8751 10.7157 7.0876 9.92822 6.10322 9.92822ZM6.60947 15.272C6.60947 15.5532 6.38447 15.7782 6.10322 15.7782H2.53135C2.2501 15.7782 2.0251 15.5532 2.0251 15.272V11.7001C2.0251 11.4188 2.2501 11.1938 2.53135 11.1938H6.10322C6.38447 11.1938 6.60947 11.4188 6.60947 11.7001V15.272Z"
                    fill=""
                  />

                  <path
                    d="M15.4689 9.92822H11.8971C10.9408 9.92822 10.1533 10.7157 10.1533 11.672V15.2438C10.1533 16.2001 10.9408 16.9876 11.8971 16.9876H15.4689C16.4252 16.9876 17.2127 16.2001 17.2127 15.2438V11.7001C17.2127 10.7157 16.4252 9.92822 15.4689 9.92822ZM15.9752 15.272C15.9752 15.5532 15.7502 15.7782 15.4689 15.7782H11.8971C11.6158 15.7782 11.3908 15.5532 11.3908 15.272V11.7001C11.3908 11.4188 11.6158 11.1938 11.8971 11.1938H15.4689C15.7502 11.1938 15.9752 11.4188 15.9752 11.7001V15.272Z"
                    fill=""
                  />
                </svg>
                Dashboard
              </Link>
              {/* <!-- Dropdown Menu Start --> */}

              {/* <!-- Dropdown Menu End --> */}

              {/* <!-- Menu Item Dashboard --> */}

              {/* <!-- Menu Item Calendar --> */}
              <li>
                <Link
                  href="/my-nominations"
                  className={`group relative flex items-center gap-2.5 rounded-sm py-2 px-4 font-medium text-bodydark1 duration-300 ease-in-out hover:bg-graydark dark:hover:bg-meta-4 ${
                    pathname.includes("my-nominations") &&
                    "bg-graydark dark:bg-meta-4"
                  }`}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    width="18"
                    height="18"
                    stroke="currentColor"
                    className="w-6 h-6"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M16.5 18.75h-9m9 0a3 3 0 013 3h-15a3 3 0 013-3m9 0v-3.375c0-.621-.503-1.125-1.125-1.125h-.871M7.5 18.75v-3.375c0-.621.504-1.125 1.125-1.125h.872m5.007 0H9.497m5.007 0a7.454 7.454 0 01-.982-3.172M9.497 14.25a7.454 7.454 0 00.981-3.172M5.25 4.236c-.982.143-1.954.317-2.916.52A6.003 6.003 0 007.73 9.728M5.25 4.236V4.5c0 2.108.966 3.99 2.48 5.228M5.25 4.236V2.721C7.456 2.41 9.71 2.25 12 2.25c2.291 0 4.545.16 6.75.47v1.516M7.73 9.728a6.726 6.726 0 002.748 1.35m8.272-6.842V4.5c0 2.108-.966 3.99-2.48 5.228m2.48-5.492a46.32 46.32 0 012.916.52 6.003 6.003 0 01-5.395 4.972m0 0a6.726 6.726 0 01-2.749 1.35m0 0a6.772 6.772 0 01-3.044 0"
                    />
                  </svg>
                  My Nominations
                </Link>
              </li>
              {/* <!-- Menu Item Calendar --> */}

              {/* <!-- Menu Item Profile --> */}
              <li>
                <Link
                  href="/my-exhibit-requests"
                  className={`group relative flex items-center gap-2.5 rounded-sm py-2 px-4 font-medium text-bodydark1 duration-300 ease-in-out hover:bg-graydark dark:hover:bg-meta-4 ${
                    pathname.includes("my-exhibit-requests") &&
                    "bg-graydark dark:bg-meta-4"
                  }`}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="currentColor"
                    className="w-6 h-6"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M13.5 21v-7.5a.75.75 0 01.75-.75h3a.75.75 0 01.75.75V21m-4.5 0H2.36m11.14 0H18m0 0h3.64m-1.39 0V9.349m-16.5 11.65V9.35m0 0a3.001 3.001 0 003.75-.615A2.993 2.993 0 009.75 9.75c.896 0 1.7-.393 2.25-1.016a2.993 2.993 0 002.25 1.016c.896 0 1.7-.393 2.25-1.016a3.001 3.001 0 003.75.614m-16.5 0a3.004 3.004 0 01-.621-4.72L4.318 3.44A1.5 1.5 0 015.378 3h13.243a1.5 1.5 0 011.06.44l1.19 1.189a3 3 0 01-.621 4.72m-13.5 8.65h3.75a.75.75 0 00.75-.75V13.5a.75.75 0 00-.75-.75H6.75a.75.75 0 00-.75.75v3.75c0 .415.336.75.75.75z"
                    />
                  </svg>
                  My Exhibition Requests
                </Link>
              </li>
              {/* <!-- Menu Item Profile --> */}

              {/* <!-- Menu Item Forms --> */}

              <Link
                href="/my-tickets"
                className={`group relative flex items-center gap-2.5 rounded-sm py-2 px-4 font-medium text-bodydark1 duration-300 ease-in-out hover:bg-graydark dark:hover:bg-meta-4 ${
                  (pathname === "/my-tickets" || pathname.includes("forms")) &&
                  "bg-graydark dark:bg-meta-4"
                }`}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  className="w-6 h-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M16.5 6v.75m0 3v.75m0 3v.75m0 3V18m-9-5.25h5.25M7.5 15h3M3.375 5.25c-.621 0-1.125.504-1.125 1.125v3.026a2.999 2.999 0 010 5.198v3.026c0 .621.504 1.125 1.125 1.125h17.25c.621 0 1.125-.504 1.125-1.125v-3.026a2.999 2.999 0 010-5.198V6.375c0-.621-.504-1.125-1.125-1.125H3.375z"
                  />
                </svg>
                My Tickets
              </Link>
              {/* <!-- Dropdown Menu Start --> */}

              {/* <!-- Dropdown Menu End --> */}

              {/* <!-- Menu Item Forms --> */}

              {/* <!-- Menu Item Tables --> */}

              {/* <!-- Menu Item Settings --> */}
            </ul>
          </div>

          {/* <!-- Others Group --> */}
          <div>
            <ul className="mb-2 flex flex-col gap-1.5">
              {/* <!-- Menu Item Chart --> */}
              <li>
                <Link
                  href="/change-password"
                  className={`group relative flex items-center gap-2.5 rounded-sm py-2 px-4 font-medium text-bodydark1 duration-300 ease-in-out hover:bg-graydark dark:hover:bg-meta-4 ${
                    pathname.includes("change-password") && "bg-graydark dark:bg-meta-4"
                  }`}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                fillRule="evenodd"
                    strokeLinejoin="round"
                    strokeMiterlimit="2"
                    className="w-6 h-6"
                  clipRule="evenodd"
                    viewBox="0 0 64 64"
                    id="password"
                  >
                    <path
                      fill="white"
                      d="M4.982,24.725c-3.06,-2.568 -5.006,-6.421 -5.006,-10.725c0,-7.727 6.273,-14 14,-14c7.727,-0 14,6.273 14,14c0,1.39 -0.203,2.733 -0.58,4l24.58,0c3.867,0 7,3.134 7,7l0,29l2,0c1.65,0 3,1.35 3,3c0,1.938 -0.783,3.689 -2.049,4.944c-1.261,1.273 -3.012,2.056 -4.951,2.056c0,0 -50,0 -50,0c-3.861,0 -7,-3.138 -7,-7c0,-0.825 0.331,-1.575 0.883,-2.117c0.543,-0.553 1.292,-0.883 2.117,-0.883l2,0l0,-29c0,-0.092 0.002,-0.184 0.006,-0.275Zm34.765,31.275c-0.28,0.603 -0.82,1.171 -1.615,1.636c-1.388,0.812 -3.624,1.364 -6.156,1.364c-2.532,0 -4.767,-0.552 -6.155,-1.364c-0.795,-0.465 -1.335,-1.033 -1.616,-1.636l-21.229,0c-0.27,0 -0.516,0.106 -0.693,0.287c-0.006,0.007 -0.013,0.013 -0.019,0.02c-0.182,0.176 -0.288,0.423 -0.288,0.693c0,2.758 2.242,5 5,5l50,0c1.382,0 2.631,-0.557 3.536,-1.47c0.908,-0.899 1.464,-2.148 1.464,-3.53c0,-0.55 -0.45,-1 -1,-1l-21.229,0Zm-2.786,0l-9.969,0c1.166,0.624 2.967,1 4.984,1c2.017,0 3.818,-0.376 4.985,-1Zm-10.334,-36c-0.333,0.701 -0.723,1.369 -1.163,2l26.512,0c1.655,0 3,1.346 3,3l0,29l2,0l0,-29c0,-2.762 -2.238,-5 -5,-5l-25.349,0Zm-19.651,6.125l0,27.875l2,0l0,-26.921c-0.695,-0.266 -1.363,-0.586 -2,-0.954Zm16.794,-2.125c-2.526,2.474 -5.983,4 -9.794,4c-1.03,0 -2.034,-0.111 -3,-0.323l0,26.323l42,0l0,-29c0,-0.552 -0.448,-1 -1,-1l-28.206,0Zm9.206,26l1,0c0.552,-0 1,-0.448 1,-1c0,-0.552 -0.448,-1 -1,-1l-1,0c-0.552,-0 -1,0.448 -1,1c0,0.552 0.448,1 1,1Zm-17,0l1,0c0.552,-0 1,-0.448 1,-1c0,-0.552 -0.448,-1 -1,-1l-1,0c-0.552,-0 -1,0.448 -1,1c0,0.552 0.448,1 1,1Zm30,0l2,0c0.552,-0 1,-0.448 1,-1c0,-0.552 -0.448,-1 -1,-1l-2,0c-0.552,-0 -1,0.448 -1,1c0,0.552 0.448,1 1,1Zm-8,0c-0.552,-0 -1,-0.448 -1,-1c0,-0.552 0.448,-1 1,-1l4,0c0.552,-0 1,0.448 1,1c0,0.55 -0.444,0.997 -0.993,1l-0.007,0l-4,0Zm-17,0l8,0c0.552,-0 1,-0.448 1,-1c0,-0.552 -0.448,-1 -1,-1l-8,0c-0.552,-0 -1,0.448 -1,1c0,0.552 0.448,1 1,1Zm-3,-7l-2,0c-0.552,-0 -1,0.448 -1,1c0,0.552 0.448,1 1,1l2,0c0.552,-0 1,-0.448 1,-1c0,-0.552 -0.448,-1 -1,-1Zm20,0l-1,0c-0.552,-0 -1,0.448 -1,1c0,0.552 0.448,1 1,1l1,0c0.552,-0 1,-0.448 1,-1c0,-0.552 -0.448,-1 -1,-1Zm-5,0l-2,0c-0.552,-0 -1,0.448 -1,1c0,0.552 0.448,1 1,1l2,0c0.552,-0 1,-0.448 1,-1c0,-0.552 -0.448,-1 -1,-1Zm-6,0l-5,0c-0.552,-0 -1,0.448 -1,1c0,0.552 0.448,1 1,1l5,0c0.552,-0 1,-0.448 1,-1c0,-0.552 -0.448,-1 -1,-1Zm21,0l-6,0c-0.552,-0 -1,0.448 -1,1c0,0.552 0.448,1 1,1l6,0c0.552,-0 1,-0.448 1,-1c0,-0.552 -0.448,-1 -1,-1Zm-2,-15l-28,0c-1.657,0 -3,1.342 -3,3c0,-0 0,6 0,6c0,1.658 1.343,3 3,3c0,0 28,0 28,0c1.658,0 3,-1.342 3,-3l0,-6c0,-1.658 -1.342,-3 -3,-3Zm0,2c0.553,0 1,0.447 1,1c0,-0 0,6 0,6c0,0.553 -0.447,1 -1,1l-28,0c-0.552,0 -1,-0.447 -1,-1l0,-6c0,-0.553 0.448,-1 1,-1c0,0 28,0 28,0Zm-18,2.586l0.293,-0.293c0.39,-0.39 1.024,-0.39 1.414,-0c0.391,0.39 0.391,1.024 0,1.414l-0.293,0.293l0.293,0.293c0.391,0.39 0.391,1.024 0,1.414c-0.39,0.39 -1.024,0.39 -1.414,0l-0.293,-0.293l-0.293,0.293c-0.39,0.39 -1.024,0.39 -1.414,0c-0.39,-0.39 -0.39,-1.024 0,-1.414l0.293,-0.293l-0.293,-0.293c-0.39,-0.39 -0.39,-1.024 0,-1.414c0.39,-0.39 1.024,-0.39 1.414,-0l0.293,0.293Zm-7,-0l0.293,-0.293c0.39,-0.39 1.024,-0.39 1.414,-0c0.391,0.39 0.391,1.024 0,1.414l-0.293,0.293l0.293,0.293c0.391,0.39 0.391,1.024 0,1.414c-0.39,0.39 -1.024,0.39 -1.414,0l-0.293,-0.293l-0.293,0.293c-0.39,0.39 -1.024,0.39 -1.414,0c-0.39,-0.39 -0.39,-1.024 0,-1.414l0.293,-0.293l-0.293,-0.293c-0.39,-0.39 -0.39,-1.024 0,-1.414c0.39,-0.39 1.024,-0.39 1.414,-0l0.293,0.293Zm21,-0l0.293,-0.293c0.39,-0.39 1.024,-0.39 1.414,-0c0.391,0.39 0.391,1.024 0,1.414l-0.293,0.293l0.293,0.293c0.391,0.39 0.391,1.024 0,1.414c-0.39,0.39 -1.024,0.39 -1.414,0l-0.293,-0.293l-0.293,0.293c-0.39,0.39 -1.024,0.39 -1.414,0c-0.39,-0.39 -0.39,-1.024 0,-1.414l0.293,-0.293l-0.293,-0.293c-0.39,-0.39 -0.39,-1.024 0,-1.414c0.39,-0.39 1.024,-0.39 1.414,-0l0.293,0.293Zm-7,-0l0.293,-0.293c0.39,-0.39 1.024,-0.39 1.414,-0c0.391,0.39 0.391,1.024 0,1.414l-0.293,0.293l0.293,0.293c0.391,0.39 0.391,1.024 0,1.414c-0.39,0.39 -1.024,0.39 -1.414,0l-0.293,-0.293l-0.293,0.293c-0.39,0.39 -1.024,0.39 -1.414,0c-0.39,-0.39 -0.39,-1.024 0,-1.414l0.293,-0.293l-0.293,-0.293c-0.39,-0.39 -0.39,-1.024 0,-1.414c0.39,-0.39 1.024,-0.39 1.414,-0l0.293,0.293Zm-9,-18.586c0,6.623 -5.377,12 -12,12c-6.623,0 -12,-5.377 -12,-12c0,-6.623 5.377,-12 12,-12c6.623,0 12,5.377 12,12Zm-2,0c0,-5.519 -4.481,-10 -10,-10c-5.519,0 -10,4.481 -10,10c0,5.519 4.481,10 10,10c5.519,0 10,-4.481 10,-10Zm-2,0c0,4.415 -3.584,8 -8,8c-4.415,0 -8,-3.585 -8,-8c0,-4.415 3.585,-8 8,-8c4.416,0 8,3.585 8,8Zm-9,1.586l4.293,-4.293c0.39,-0.39 1.024,-0.39 1.414,-0c0.391,0.39 0.391,1.024 0,1.414l-5,5c-0.39,0.391 -1.023,0.391 -1.414,0l-3,-3c-0.39,-0.39 -0.39,-1.024 0,-1.414c0.39,-0.39 1.024,-0.39 1.414,-0l2.293,2.293Zm34,-0.586l1,0c0.552,-0 1,-0.448 1,-1c0,-0.552 -0.448,-1 -1,-1l-1,0c-0.552,-0 -1,0.448 -1,1c0,0.552 0.448,1 1,1Zm-15,0l4,0c0.552,-0 1,-0.448 1,-1c0,-0.552 -0.448,-1 -1,-1l-4,0c-0.552,-0 -1,0.448 -1,1c0,0.552 0.448,1 1,1Zm8,0l3,0c0.552,-0 1,-0.448 1,-1c0,-0.552 -0.448,-1 -1,-1l-3,0c-0.552,-0 -1,0.448 -1,1c0,0.552 0.448,1 1,1Zm3,-5l5,0c0.552,-0 1,-0.448 1,-1c0,-0.552 -0.448,-1 -1,-1l-5,0c-0.552,-0 -1,0.448 -1,1c0,0.552 0.448,1 1,1Zm-12,0l8,0c0.552,-0 1,-0.448 1,-1c0,-0.552 -0.448,-1 -1,-1l-8,0c-0.552,-0 -1,0.448 -1,1c0,0.552 0.448,1 1,1Zm7,-5l2,0c0.552,-0 1,-0.448 1,-1c0,-0.552 -0.448,-1 -1,-1l-2,0c-0.552,-0 -1,0.448 -1,1c0,0.552 0.448,1 1,1Zm-9,0l5,0c0.552,-0 1,-0.448 1,-1c0,-0.552 -0.448,-1 -1,-1l-5,0c-0.552,-0 -1,0.448 -1,1c0,0.552 0.448,1 1,1Zm15,0l2,0c0.552,-0 1,-0.448 1,-1c0,-0.552 -0.448,-1 -1,-1l-2,0c-0.552,-0 -1,0.448 -1,1c0,0.552 0.448,1 1,1Z"
                    ></path>
                  </svg>
                  Change Password
                </Link>
              </li>
              <li>
                <Link
                  href="/faqs"
                  className={`group relative flex items-center gap-2.5 rounded-sm py-2 px-4 font-medium text-bodydark1 duration-300 ease-in-out hover:bg-graydark dark:hover:bg-meta-4 ${
                    pathname.includes("faqs") && "bg-graydark dark:bg-meta-4"
                  }`}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="currentColor"
                    className="w-6 h-6"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M9 12h3.75M9 15h3.75M9 18h3.75m3 .75H18a2.25 2.25 0 002.25-2.25V6.108c0-1.135-.845-2.098-1.976-2.192a48.424 48.424 0 00-1.123-.08m-5.801 0c-.065.21-.1.433-.1.664 0 .414.336.75.75.75h4.5a.75.75 0 00.75-.75 2.25 2.25 0 00-.1-.664m-5.8 0A2.251 2.251 0 0113.5 2.25H15c1.012 0 1.867.668 2.15 1.586m-5.8 0c-.376.023-.75.05-1.124.08C9.095 4.01 8.25 4.973 8.25 6.108V8.25m0 0H4.875c-.621 0-1.125.504-1.125 1.125v11.25c0 .621.504 1.125 1.125 1.125h9.75c.621 0 1.125-.504 1.125-1.125V9.375c0-.621-.504-1.125-1.125-1.125H8.25zM6.75 12h.008v.008H6.75V12zm0 3h.008v.008H6.75V15zm0 3h.008v.008H6.75V18z"
                    />
                  </svg>
                  FAQs
                </Link>
              </li>
              {/* <!-- Menu Item Chart --> */}

              {/* <!-- Menu Item Ui Elements --> */}

              <Link
                href="/support"
                className={`group relative flex items-center gap-2.5 rounded-sm py-2 px-4 font-medium text-bodydark1 duration-300 ease-in-out hover:bg-graydark dark:hover:bg-meta-4 ${
                  (pathname === "/support" || pathname.includes("ui")) &&
                  "bg-graydark dark:bg-meta-4"
                }`}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  className="w-6 h-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M15 19.128a9.38 9.38 0 002.625.372 9.337 9.337 0 004.121-.952 4.125 4.125 0 00-7.533-2.493M15 19.128v-.003c0-1.113-.285-2.16-.786-3.07M15 19.128v.106A12.318 12.318 0 018.624 21c-2.331 0-4.512-.645-6.374-1.766l-.001-.109a6.375 6.375 0 0111.964-3.07M12 6.375a3.375 3.375 0 11-6.75 0 3.375 3.375 0 016.75 0zm8.25 2.25a2.625 2.625 0 11-5.25 0 2.625 2.625 0 015.25 0z"
                  />
                </svg>
                Support
              </Link>
              {/* <!-- Dropdown Menu Start --> */}

              {/* <!-- Dropdown Menu End --> */}

              {/* <!-- Menu Item Ui Elements --> */}

              {/* <!-- Menu Item Auth Pages --> */}

              <Link
                href="/auth"
                className={`group relative flex items-center gap-2.5 rounded-sm py-2 px-4 font-medium text-bodydark1 duration-300 ease-in-out hover:bg-graydark dark:hover:bg-meta-4 ${
                  (pathname === "/auth" || pathname.includes("auth")) &&
                  "bg-graydark dark:bg-meta-4"
                }`}
              >
                <svg
                  className="fill-current"
                  width="22"
                  height="22"
                  viewBox="0 0 22 22"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M15.5375 0.618744H11.6531C10.7594 0.618744 10.0031 1.37499 10.0031 2.26874V4.64062C10.0031 5.05312 10.3469 5.39687 10.7594 5.39687C11.1719 5.39687 11.55 5.05312 11.55 4.64062V2.23437C11.55 2.16562 11.5844 2.13124 11.6531 2.13124H15.5375C16.3625 2.13124 17.0156 2.78437 17.0156 3.60937V18.3562C17.0156 19.1812 16.3625 19.8344 15.5375 19.8344H11.6531C11.5844 19.8344 11.55 19.8 11.55 19.7312V17.3594C11.55 16.9469 11.2062 16.6031 10.7594 16.6031C10.3125 16.6031 10.0031 16.9469 10.0031 17.3594V19.7312C10.0031 20.625 10.7594 21.3812 11.6531 21.3812H15.5375C17.2219 21.3812 18.5625 20.0062 18.5625 18.3562V3.64374C18.5625 1.95937 17.1875 0.618744 15.5375 0.618744Z"
                    fill=""
                  />

                  <path
                    d="M6.05001 11.7563H12.2031C12.6156 11.7563 12.9594 11.4125 12.9594 11C12.9594 10.5875 12.6156 10.2438 12.2031 10.2438H6.08439L8.21564 8.07813C8.52501 7.76875 8.52501 7.2875 8.21564 6.97812C7.90626 6.66875 7.42501 6.66875 7.11564 6.97812L3.67814 10.4844C3.36876 10.7938 3.36876 11.275 3.67814 11.5844L7.11564 15.0906C7.25314 15.2281 7.45939 15.3312 7.66564 15.3312C7.87189 15.3312 8.04376 15.2625 8.21564 15.125C8.52501 14.8156 8.52501 14.3344 8.21564 14.025L6.05001 11.7563Z"
                    fill=""
                  />
                </svg>
                Logout
              </Link>
              {/* <!-- Dropdown Menu Start --> */}

              {/* <!-- Dropdown Menu End --> */}

              {/* <!-- Menu Item Auth Pages --> */}
            </ul>
          </div>
        </nav>
        {/* <!-- Sidebar Menu --> */}
      </div>
    </aside>
  );
};

export default Sidebar;
