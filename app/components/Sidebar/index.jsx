'use client'
import React, { useEffect, useRef, useState } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import SidebarLinkGroup from "./SidebarLinkGroup"
import Image from "next/image"

const Sidebar = ({ sidebarOpen, setSidebarOpen }) => {
  const pathname = usePathname()

  const trigger = useRef(null)
  const sidebar = useRef(null)

  let storedSidebarExpanded = "true"
  const [sidebarExpanded, setSidebarExpanded] = useState(
    storedSidebarExpanded === null ? false : storedSidebarExpanded === "true"
  )

  // close on click outside
  useEffect(() => {
    const clickHandler = ({ target }) => {
      if (!sidebar.current || !trigger.current) return
      if (
        !sidebarOpen ||
        sidebar.current.contains(target) ||
        trigger.current.contains(target)
      )
        return
      setSidebarOpen(false)
    }
    document.addEventListener("click", clickHandler)
    return () => document.removeEventListener("click", clickHandler)
  })

  // close if the esc key is pressed
  useEffect(() => {
    const keyHandler = ({ keyCode }) => {
      if (!sidebarOpen || keyCode !== 27) return
      setSidebarOpen(false)
    }
    document.addEventListener("keydown", keyHandler)
    return () => document.removeEventListener("keydown", keyHandler)
  })

  useEffect(() => {
    localStorage.setItem("sidebar-expanded", sidebarExpanded.toString())
    if (sidebarExpanded) {
      document.querySelector("body")?.classList.add("sidebar-expanded")
    } else {
      document.querySelector("body")?.classList.remove("sidebar-expanded")
    }
  }, [sidebarExpanded])

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
          <Image
            width={176}
            height={32}
            src={"/images/logo/logo.svg"}
            alt="Logo"
          />
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
                        className={`group relative flex items-center gap-2.5 rounded-sm py-2 px-4 font-medium text-bodydark1 duration-300 ease-in-out hover:bg-graydark dark:hover:bg-meta-4 ${(pathname ===
                          "/" ||
                          pathname.includes("dashboard")) &&
                          "bg-graydark dark:bg-meta-4"}`}
                        
                      >
                                                Dashboard
                                               
                        
                      </Link>
                      {/* <!-- Dropdown Menu Start --> */}
                      
                      {/* <!-- Dropdown Menu End --> */}
                   
               
              {/* <!-- Menu Item Dashboard --> */}

              {/* <!-- Menu Item Calendar --> */}
              <li>
                <Link
                  href="/my-nominations"
                  className={`group relative flex items-center gap-2.5 rounded-sm py-2 px-4 font-medium text-bodydark1 duration-300 ease-in-out hover:bg-graydark dark:hover:bg-meta-4 ${pathname.includes(
                    "my-nominations"
                  ) && "bg-graydark dark:bg-meta-4"}`}
                >
                  
                  My Nominations
                </Link>
              </li>
              {/* <!-- Menu Item Calendar --> */}

              {/* <!-- Menu Item Profile --> */}
              <li>
                <Link
                  href="/my-exhibit-requests"
                  className={`group relative flex items-center gap-2.5 rounded-sm py-2 px-4 font-medium text-bodydark1 duration-300 ease-in-out hover:bg-graydark dark:hover:bg-meta-4 ${pathname.includes(
                    "my-exhibit-requests"
                  ) && "bg-graydark dark:bg-meta-4"}`}
                >
                  
                  My Exhibit Requests
                </Link>
              </li>
              {/* <!-- Menu Item Profile --> */}

              {/* <!-- Menu Item Forms --> */}
              
                      <Link
                        href="/my-tickets"
                        className={`group relative flex items-center gap-2.5 rounded-sm py-2 px-4 font-medium text-bodydark1 duration-300 ease-in-out hover:bg-graydark dark:hover:bg-meta-4 ${(pathname ===
                          "/my-tickets" ||
                          pathname.includes("forms")) &&
                          "bg-graydark dark:bg-meta-4"}`}
                       
                      >
                       
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
                  href="/faqs"
                  className={`group relative flex items-center gap-2.5 rounded-sm py-2 px-4 font-medium text-bodydark1 duration-300 ease-in-out hover:bg-graydark dark:hover:bg-meta-4 ${pathname.includes(
                    "faqs"
                  ) && "bg-graydark dark:bg-meta-4"}`}
                >
                  
                  FAQs
                </Link>
              </li>
              {/* <!-- Menu Item Chart --> */}

              {/* <!-- Menu Item Ui Elements --> */}
             
                      <Link
                        href="/support"
                        className={`group relative flex items-center gap-2.5 rounded-sm py-2 px-4 font-medium text-bodydark1 duration-300 ease-in-out hover:bg-graydark dark:hover:bg-meta-4 ${(pathname ===
                          "/support" ||
                          pathname.includes("ui")) &&
                          "bg-graydark dark:bg-meta-4"}`}
                      
                      >
                       
                       Support
                        
                      </Link>
                      {/* <!-- Dropdown Menu Start --> */}
                     
                      {/* <!-- Dropdown Menu End --> */}
                  
              {/* <!-- Menu Item Ui Elements --> */}

              {/* <!-- Menu Item Auth Pages --> */}
            
                      <Link
                        href="/auth"
                        className={`group relative flex items-center gap-2.5 rounded-sm py-2 px-4 font-medium text-bodydark1 duration-300 ease-in-out hover:bg-graydark dark:hover:bg-meta-4 ${(pathname ===
                          "/auth" ||
                          pathname.includes("auth")) &&
                          "bg-graydark dark:bg-meta-4"}`}
                      
                      >
                        
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
  )
}

export default Sidebar
