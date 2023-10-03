"use client"

import React, { useState, useEffect } from "react"
import Link from "next/link"
import Image from "next/image"
import Head from 'next/head';



const SignUp = () => {
    const [strokeWidth, setStrokeWidth] = useState(1);
    const [strokeWidth2, setStrokeWidth2] = useState(1);
    const [strokeWidth3, setStrokeWidth3] = useState(1);
    const [strokeWidth4, setStrokeWidth4] = useState(1);
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
    const handleFocus3 = () => {
        setStrokeWidth3(2);
    };

    const handleBlur3 = () => {
        setStrokeWidth3(1);
    };
    const handleFocus4 = () => {
        setStrokeWidth4(2);
    };

    const handleBlur4 = () => {
        setStrokeWidth4(1);
    };
    // useEffect(() => {
    //     const defaults = {
    //         spread: 360,
    //         ticks: 100,
    //         gravity: 0,
    //         decay: 0.94,
    //         startVelocity: 30,
    //         shapes: ["heart"],
    //         colors: ["FFC0CB", "FF69B4", "FF1493", "C71585"],
    //       };
          
    //       confetti({
    //         ...defaults,
    //         particleCount: 50,
    //         scalar: 2,
    //       });
          
    //       confetti({
    //         ...defaults,
    //         particleCount: 25,
    //         scalar: 3,
    //       });
          
    //       confetti({
    //         ...defaults,
    //         particleCount: 10,
    //         scalar: 4,
    //       });
    // }, [])
    return (
        <>
            <Head>
                <script
                    src="https://cdn.jsdelivr.net/npm/tsparticles-confetti@2.12.0/tsparticles.confetti.bundle.min.js"
                    type="text/javascript"
                />
            </Head>
            <div className="rounded-sm border border-stroke shadow-default bg-[#FFE4D6] dark:border-strokedark dark:bg-boxdark">
                <div className="flex flex-wrap items-center">
                    <div className="hidden w-full xl:block xl:w-1/2 ">
                        <div className="py-17.5 px-26 text-center">
                            <Link className="mb-5.5 inline-block" href="#">
                            </Link>
                            <span className="mt-8 inline-block">
                                <Link href="#">
                                    <Image
                                        src="/images/logo.png"
                                        alt="Logo"
                                        className="md:relative md:bottom-45  md:left-12 relative left-9"
                                        width={300}
                                        height={100}
                                    />
                                </Link>
                                <img
                                    src="/images/signup.svg"
                                    alt="Custom Image"
                                    className="mt-8 mx-auto  md:relative md:bottom-50 animate-bounce-slow"
                                    width="400"
                                    height="350"
                                />

                            </span>
                        </div>
                    </div>



                    <div className="w-full border-stroke bg-white dark:border-strokedark xl:w-1/2 xl:border-l-2">
                        <div className="w-full p-4 sm:p-12.5 xl:p-17.5">

                            <h2 className="mb-9 text-2xl font-bold text-black dark:text-white sm:text-title-xl2">
                                Sign Up to WVconnect
                            </h2>
                            <form>
                                <div className="mb-4">
                                    <label className="mb-2.5 block font-medium text-black dark:text-white">
                                        Name
                                    </label>
                                    <div className="relative">
                                        <input
                                            type="text"
                                            placeholder="Enter your full name"
                                            className="w-full rounded-lg border border-stroke bg-transparent py-4 pl-6 pr-10 outline-none focus:border-primary focus-visible:shadow-none dark:border-form-strokedark dark:bg-form-input dark:focus:border-primary"
                                            onFocus={handleFocus}
                                            onBlur={handleBlur}
                                        />

                                        <span className="absolute right-4 top-4">
                                            <svg
                                                xmlns="http://www.w3.org/2000/svg"
                                                width="24"
                                                height="24"
                                                viewBox="0 0 24 24"
                                                fill="none"
                                                stroke="currentColor"
                                                strokeWidth={strokeWidth}
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                            >
                                                <circle cx="12" cy="8" r="3" />
                                                <path d="M12 14c-4 0-7.5 2.69-7.5 6.31V21h15v-.69C19.5 16.69 16 14 12 14z" />
                                            </svg>



                                        </span>
                                    </div>
                                </div>

                                <div className="mb-4">
                                    <label className="mb-2.5 block font-medium text-black dark:text-white">
                                        Email
                                    </label>
                                    <div className="relative">
                                        <input
                                            type="email"
                                            placeholder="Enter your email"
                                            className="w-full rounded-lg border border-stroke bg-transparent py-4 pl-6 pr-10 outline-none focus:border-primary focus-visible:shadow-none dark:border-form-strokedark dark:bg-form-input dark:focus:border-primary"
                                            onFocus={handleFocus2}
                                            onBlur={handleBlur2}
                                        />

                                        <span className="absolute right-4 top-4">
                                            <svg
                                                xmlns="http://www.w3.org/2000/svg"
                                                width="24"
                                                height="24"
                                                viewBox="0 0 24 24"
                                                fill="none"
                                                stroke="currentColor"
                                                strokeWidth={strokeWidth2}
                                                stroke-width="2"
                                                strokeLinecap="round"
                                                strokeLinejoin="round"

                                            >
                                                <path d="M3 6l9 7 9-7" />
                                                <path d="M5 18h14a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v8a2 2 0 0 0 2 2z" />
                                                <polyline points="3 6 12 13 21 6" />
                                            </svg>


                                        </span>
                                    </div>
                                </div>

                                <div className="mb-4">
                                    <label className="mb-2.5 block font-medium text-black dark:text-white">
                                        Mobile Number
                                    </label>
                                    <div className="relative">
                                        <input
                                            type="tel"
                                            placeholder="Enter your mobile number"
                                            className="w-full rounded-lg border border-stroke bg-transparent py-4 pl-6 pr-10 outline-none focus:border-primary focus-visible:shadow-none dark:border-form-strokedark dark:bg-form-input dark:focus:border-primary"
                                            onFocus={handleFocus3}
                                            onBlur={handleBlur3}
                                        />

                                        <span className="absolute right-4 top-4">
                                            <svg
                                                xmlns="http://www.w3.org/2000/svg"
                                                width="24"
                                                height="24"
                                                viewBox="0 0 24 24"
                                                fill="none"
                                                stroke="currentColor"
                                                strokeWidth={strokeWidth3}
                                                stroke-linecap="round"
                                                strokeLinejoin="round"
                                                class="feather feather-smartphone"
                                            >
                                                <rect x="5" y="2" width="14" height="20" rx="2" ry="2" />
                                                <line x1="12" y1="18" x2="12" y2="18" />
                                            </svg>


                                        </span>
                                    </div>
                                </div>

                                

                                <div className="mb-5">
                                    <input
                                        type="submit"
                                        value="Create account"
                                        className="w-full cursor-pointer rounded-lg border border-primary bg-[#0866FF] p-4 text-white transition hover:bg-opacity-90"
                                    />
                                </div>

                                <button className="flex w-full items-center justify-center gap-3.5 rounded-lg border border-stroke bg-gray p-4 hover:bg-opacity-50 dark:border-strokedark dark:bg-meta-4 dark:hover:bg-opacity-50">
                                    <span>
                                        <svg
                                            width="20"
                                            height="20"
                                            viewBox="0 0 20 20"
                                            fill="none"
                                            xmlns="http://www.w3.org/2000/svg"
                                        >
                                            <g clipPath="url(#clip0_191_13499)">
                                                <path
                                                    d="M19.999 10.2217C20.0111 9.53428 19.9387 8.84788 19.7834 8.17737H10.2031V11.8884H15.8266C15.7201 12.5391 15.4804 13.162 15.1219 13.7195C14.7634 14.2771 14.2935 14.7578 13.7405 15.1328L13.7209 15.2571L16.7502 17.5568L16.96 17.5774C18.8873 15.8329 19.9986 13.2661 19.9986 10.2217"
                                                    fill="#4285F4"
                                                />
                                                <path
                                                    d="M10.2055 19.9999C12.9605 19.9999 15.2734 19.111 16.9629 17.5777L13.7429 15.1331C12.8813 15.7221 11.7248 16.1333 10.2055 16.1333C8.91513 16.1259 7.65991 15.7205 6.61791 14.9745C5.57592 14.2286 4.80007 13.1801 4.40044 11.9777L4.28085 11.9877L1.13101 14.3765L1.08984 14.4887C1.93817 16.1456 3.24007 17.5386 4.84997 18.5118C6.45987 19.4851 8.31429 20.0004 10.2059 19.9999"
                                                    fill="#34A853"
                                                />
                                                <path
                                                    d="M4.39899 11.9777C4.1758 11.3411 4.06063 10.673 4.05807 9.99996C4.06218 9.32799 4.1731 8.66075 4.38684 8.02225L4.38115 7.88968L1.19269 5.4624L1.0884 5.51101C0.372763 6.90343 0 8.4408 0 9.99987C0 11.5589 0.372763 13.0963 1.0884 14.4887L4.39899 11.9777Z"
                                                    fill="#FBBC05"
                                                />
                                                <path
                                                    d="M10.2059 3.86663C11.668 3.84438 13.0822 4.37803 14.1515 5.35558L17.0313 2.59996C15.1843 0.901848 12.7383 -0.0298855 10.2059 -3.6784e-05C8.31431 -0.000477834 6.4599 0.514732 4.85001 1.48798C3.24011 2.46124 1.9382 3.85416 1.08984 5.51101L4.38946 8.02225C4.79303 6.82005 5.57145 5.77231 6.61498 5.02675C7.65851 4.28118 8.9145 3.87541 10.2059 3.86663Z"
                                                    fill="#EB4335"
                                                />
                                            </g>
                                            <defs>
                                                <clipPath id="clip0_191_13499">
                                                    <rect width="20" height="20" fill="white" />
                                                </clipPath>
                                            </defs>
                                        </svg>
                                    </span>
                                    Sign in with Google
                                </button>
                                <button className="flex w-full items-center relative top-3 md:relative md:top-3 justify-center gap-3.5 rounded-lg border border-stroke text-white font-medium bg-[#4867AA] p-4 hover:bg-opacity-50 dark:border-strokedark dark:bg-meta-4 dark:hover:bg-opacity-50">
                                    <span>
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            viewBox="0 0 24 24"
                                            id="facebook"
                                            className="h-6 w-6" // Adjust the size as needed
                                        >
                                            <path
                                                fill="white"
                                                d="M13.355 22v-9.123h3.062l.459-3.555h-3.52v-2.27c0-1.03.285-1.731 1.761-1.731L17 5.32V2.14A25.233 25.233 0 0 0 14.257 2c-2.715 0-4.573 1.657-4.573 4.7v2.622h-3.07v3.555h3.07V22h3.671Z"
                                                data-name="Brand Logos"
                                            ></path>
                                        </svg>
                                    </span>
                                    Sign in with Facebook
                                </button>

                                <div className="mt-6 text-center md:relative md:top-3 ">
                                    <p>
                                        Already have an account?{" "}
                                        <Link href="/auth/signin" className="text-primary">
                                            Sign in
                                        </Link>
                                    </p>
                                </div>
                            </form>
                        </div>
                    </div>
                </div >
            </div >
        </>
    )
}

export default SignUp