"use client"
import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";

const SignIn = () => {
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
    <div className="flex min-h-screen flex-col w-full md:flex-row ">
      {/* Left Side */}
      <div className="md:w-2/3 bg-[#FFE4D6] p-8 flex justify-center">
        <div className="text-center">
          <Link href="/">
            <Image
              src="/images/logo.png"
              alt="Logo"
              className="md:relative md:bottom-11 md:left-12 relative left-9"
              width={300}
              height={100}
            />
          </Link>
          <img
            src="/images/signup.svg"
            alt="Custom Image"
            className="mt-8 mx-auto relative bottom-22 md:relative md:bottom-22"
            width="400"
            height="350"
          />
        </div>
      </div>

      {/* Right Side */}
      <div className="md:w-1/2 bg-white dark:bg-gray-800 p-8 flex items-center justify-center">
        <div className="w-full md:w-[350px]">
          <h2 className="mb-8 text-2xl font-bold text-black dark:text-white text-center">
            Sign In to WVConnect
          </h2>

          {/* Form */}
          <form>
            {/* Email Input */}
            <div className="mb-4">
              <label className="mb-2.5 block font-medium text-black dark:text-white">
                Email
              </label>
              <div className="relative">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="w-full rounded-lg border text-black-2 border-black bg-transparent py-3 px-4 outline-none focus:border-primary focus-visible:shadow-none dark:border-form-strokedark dark:bg-form-input dark:focus:border-primary"
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
                    <path d="M3 6l9 7 9-7" />
                    <path
                      d="M5 18h14a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v8a2 2 0 0 0 2 2z"
                    />
                    <polyline points="3 6 12 13 21 6" />
                  </svg>
                </span>
              </div>
            </div>

            {/* Password Input */}
            <div className="mb-2.5">
              <label className="mb-2.5 block font-medium text-black dark:text-white relative md:relative top-6">
                Password
              </label>
              <div className="text-right relative md:relative bottom-2">
                <Link href="/auth/forgotpassword" className="text-primary">
                  Forgot password?
                </Link>
              </div>
              <div className="relative">
                <input
                  type="password"
                  placeholder="Enter your Password"
                  className="w-full rounded-lg border border-black bg-transparent py-3 px-4 outline-none focus:border-primary focus-visible:shadow-none dark:border-form-strokedark dark:bg-form-input dark:focus:border-primary text-black"
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
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <rect x="5" y="11" width="14" height="10" rx="2" ry="2" />
                    <path d="M17 11V7a5 5 0 0 0-10 0v4" />
                  </svg>
                </span>
              </div>
            </div>

            {/* Forgot Password Link */}


            {/* Sign In Button */}
            <div className="mb-5 mt-2.5">
              <input
                type="submit"
                value="Sign In"
                className="w-full cursor-pointer rounded-lg border border-primary bg-[#0866FF] p-3 text-white transition hover:bg-opacity-90"
              />
            </div>

            {/* Social Media Sign In */}
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
            {/* Sign Up Link */}
            <div className="mt-6 text-center relative top-2">
              <p>
                Don’t have an account?{" "}
                <Link href="/auth/signup" className="text-primary">
                  Sign Up
                </Link>
              </p>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default SignIn;
