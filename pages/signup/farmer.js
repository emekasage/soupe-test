import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import pageStyles from "../../styles/Pages.module.css";

export default function Farmer() {
  const [innerPage, setInnerPage] = useState(1);
  const [passwordShown, setPasswordShown] = useState(false);
  const togglePasswordVisiblity = () => {
    setPasswordShown(passwordShown ? false : true);
  };
  return (
    <div
      className={`bg-center bg-no-repeat bg-cover h-screen overflow-x-hidden ${pageStyles.dashbg}`}
      style={{ fontFamily: "Open Sans, sans-serif" }}
    >
      <Head>
        <title>Soupe - Farmer Signup</title>
        <meta
          name="keywords"
          content="Preorder, Food Calculator, Compare price"
        ></meta>
      </Head>
      <div
        className={`sm:px-8 md:px-16 lg:px-10 xl:px-20 py-10 flex justify-between items-center ${pageStyles.mobheader}`}
      >
        <div>
          <Link href="/" passHref={true}>
            <Image
              className="cursor-pointer"
              src="/assets/img/soupe-logo.png"
              alt="Soupe Logo"
              width={98}
              height={30}
            />
          </Link>
        </div>
        <div
          className="cursor-pointer font-bold text-lg"
          style={{ color: "#DF421A" }}
        >
          <Link href="/login" passHref={true}>
            Log in
          </Link>
        </div>
      </div>
      <div className="sm:mx-16 md:mx-40 lg:mx-10 xl:mx-20 sm:my-4 md:my-16 sm:block lg:flex justify-between items-center">
        <div className={`max-w-lg ${pageStyles.mobheading}`}>
          <h4
            className="sm:text-center md:text-center lg:text-left text-6xl font-bold pb-3"
            style={{ lineHeight: "75px" }}
          >
            Register as a Farmer
          </h4>
          <p className="sm:text-center md:text-center lg:text-left text-2xl font-normal leading-8">
            If you have an account, you can{" "}
            <span className="font-bold" style={{ color: "#DF421A" }}>
              <Link href="/login" passHref={true}>
                Log in
              </Link>
            </span>
          </p>
        </div>

        {innerPage === 1 && (
          <div
            className={`sm:ml-8 lg:mr-8 max-w-sm transition ease-linear delay-500 ${pageStyles.mobform}`}
          >
            <form className="p-text">
              <div className="mb-3">
                <label
                  htmlFor="email"
                  className="block mb-2 text-base"
                  style={{ color: "#696F79" }}
                >
                  Full Name*
                </label>
                <input
                  type="text"
                  name="full_name"
                  id="full_name"
                  placeholder="Invictus Simmone"
                  className="w-full px-3 py-3 text-sm placeholder-gray-300 border rounded-md focus:outline-none focus:ring-1 focus:ring-green-400 focus:border-green-400 dark:bg-gray-700 dark:text-white dark:placeholder-gray-500 dark:border-gray-600 dark:focus:ring-gray-900 dark:focus:border-gray-500"
                  style={{ borderColor: "#8692A6" }}
                />
              </div>
              <div className="mb-3">
                <label
                  htmlFor="email"
                  className="block mb-2 text-base"
                  style={{ color: "#696F79" }}
                >
                  Email Address*
                </label>
                <input
                  type="email"
                  name="email"
                  id="email"
                  placeholder="i.simmone@gmail.com"
                  className="w-full px-3 py-3 text-sm placeholder-gray-300 border rounded-md focus:outline-none focus:ring-1 focus:ring-green-400 focus:border-green-400 dark:bg-gray-700 dark:text-white dark:placeholder-gray-500 dark:border-gray-600 dark:focus:ring-gray-900 dark:focus:border-gray-500"
                  style={{ borderColor: "#8692A6" }}
                />
              </div>
              <div className="mb-3">
                <label
                  htmlFor="email"
                  className="block mb-2 text-base"
                  style={{ color: "#696F79" }}
                >
                  Phone Number*
                </label>
                <input
                  type="number"
                  name="phone_number"
                  id="phone_number"
                  placeholder="+234 902 876 7623"
                  className="w-full px-3 py-3 text-sm placeholder-gray-300 border rounded-md focus:outline-none focus:ring-1 focus:ring-green-400 focus:border-green-400 dark:bg-gray-700 dark:text-white dark:placeholder-gray-500 dark:border-gray-600 dark:focus:ring-gray-900 dark:focus:border-gray-500"
                  style={{ borderColor: "#8692A6" }}
                />
              </div>
              <div className="mb-3" x-data="{ show: true }">
                <label
                  htmlFor="email"
                  className="block mb-2 text-base"
                  style={{ color: "#696F79" }}
                >
                  Password*
                </label>
                <input
                  name="password"
                  id="password"
                  type={passwordShown ? "text" : "password"}
                  className="w-full px-3 py-3 text-sm placeholder-gray-300 border rounded-md focus:outline-none focus:ring-1 focus:ring-green-400 focus:border-green-400 dark:bg-gray-700 dark:text-white dark:placeholder-gray-500 dark:border-gray-600 dark:focus:ring-gray-900 dark:focus:border-gray-500"
                  style={{ borderColor: "#8692A6" }}
                />
                <div
                  className={`static md:-mt-8 md:mr-3 lg:-mt-8 lg:mr-4 flex justify-end items-center text-sm leading-5 cursor-pointer ${pageStyles.mobsvg}`}
                >
                  <svg
                    onClick={togglePasswordVisiblity}
                    className=""
                    width="20"
                    height="20"
                    viewBox="0 0 20 20"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M3.70692 2.29341C3.51832 2.11125 3.26571 2.01045 3.00352 2.01273C2.74132 2.01501 2.49051 2.12018 2.3051 2.30559C2.11969 2.491 2.01452 2.74181 2.01224 3.00401C2.00997 3.2662 2.11076 3.5188 2.29292 3.70741L16.2929 17.7074C16.4815 17.8896 16.7341 17.9904 16.9963 17.9881C17.2585 17.9858 17.5093 17.8806 17.6947 17.6952C17.8801 17.5098 17.9853 17.259 17.9876 16.9968C17.9899 16.7346 17.8891 16.482 17.7069 16.2934L16.2339 14.8204C17.7914 13.5785 18.9432 11.9003 19.5419 10.0004C18.2679 5.94341 14.4779 3.00041 9.99992 3.00041C8.43235 2.99828 6.88642 3.36626 5.48792 4.07441L3.70792 2.29341H3.70692ZM7.96792 6.55341L9.48192 8.06841C9.82101 7.97836 10.1778 7.97895 10.5166 8.07014C10.8554 8.16132 11.1643 8.33989 11.4124 8.58797C11.6604 8.83606 11.839 9.14495 11.9302 9.48374C12.0214 9.82252 12.022 10.1793 11.9319 10.5184L13.4459 12.0324C13.8969 11.2684 14.0811 10.3762 13.9696 9.49608C13.858 8.61596 13.4571 7.7979 12.8297 7.17059C12.2024 6.54327 11.3844 6.1423 10.5042 6.03076C9.62412 5.91921 8.7319 6.10342 7.96792 6.55441V6.55341Z"
                      fill="#828282"
                    />
                    <path
                      d="M12.454 16.6971L9.75001 13.9921C8.77769 13.9312 7.86103 13.5175 7.17206 12.8288C6.4831 12.14 6.06918 11.2234 6.00801 10.2511L2.33501 6.57812C1.49022 7.58414 0.852357 8.74704 0.458008 10.0001C1.73201 14.0571 5.52301 17.0001 10 17.0001C10.847 17.0001 11.669 16.8951 12.454 16.6971Z"
                      fill="#828282"
                    />
                  </svg>
                </div>
              </div>
              <div className={`my-10 w-full ${pageStyles.authbtn}`}>
                <button
                  className="w-96 py-2.5 text-white font-bold rounded-3xl text-lg text-center bg-green-600 p-text hover:bg-white hover:text-green-600 border-2 hover:border-green-600"
                  onClick={() => {
                    setInnerPage(2);
                  }}
                >
                  Continue
                </button>
              </div>
            </form>
          </div>
        )}

        {innerPage === 2 && (
          <div
            className={`sm:ml-8 lg:mr-8 max-w-sm transition ease-linear delay-500 ${pageStyles.mobform}`}
          >
            <button
              className="font-bold text-base p-text float-right"
              onClick={() => {
                setInnerPage(1);
              }}
            >
              Back
            </button>
            <form className="p-text">
              <div className="mt-6 mb-3">
                <label
                  htmlFor="email"
                  className="block mb-2 text-base"
                  style={{ color: "#696F79" }}
                >
                  Farm Physical Address*
                </label>
                <input
                  type="text"
                  name="full_name"
                  id="full_name"
                  placeholder="Farm Address"
                  className="w-full px-3 py-3 text-sm placeholder-gray-300 border rounded-md focus:outline-none focus:ring-1 focus:ring-green-400 focus:border-green-400 dark:bg-gray-700 dark:text-white dark:placeholder-gray-500 dark:border-gray-600 dark:focus:ring-gray-900 dark:focus:border-gray-500"
                  style={{ borderColor: "#8692A6" }}
                />
              </div>
              <div className="mb-3">
                <label
                  htmlFor="email"
                  className="block mb-2 text-base"
                  style={{ color: "#696F79" }}
                >
                  Farm Size*
                </label>
                <input
                  type="text"
                  name="full_name"
                  id="full_name"
                  placeholder="78cm by 64cm"
                  className="w-full px-3 py-3 text-sm placeholder-gray-300 border rounded-md focus:outline-none focus:ring-1 focus:ring-green-400 focus:border-green-400 dark:bg-gray-700 dark:text-white dark:placeholder-gray-500 dark:border-gray-600 dark:focus:ring-gray-900 dark:focus:border-gray-500"
                  style={{ borderColor: "#8692A6" }}
                />
              </div>
              <div className="mb-3">
                <label
                  htmlFor="email"
                  className="block mb-2 text-base"
                  style={{ color: "#696F79" }}
                >
                  Farm Image/Documents*
                </label>
                <label
                  className="w-full px-3 py-8 mx-auto flex flex-col text-sm border rounded-md hover:border-green-400 cursor-pointer"
                  style={{ borderColor: "#8692A6" }}
                >
                  <svg
                    className="mx-auto"
                    width="48"
                    height="48"
                    viewBox="0 0 48 48"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M13.1988 31.1999C11.0496 31.197 8.98333 30.3706 7.42503 28.8905C5.86673 27.4105 4.93499 25.3895 4.82154 23.2433C4.70808 21.0972 5.42154 18.9892 6.8151 17.3531C8.20866 15.717 10.1763 14.6773 12.3132 14.4479C11.684 11.9804 12.0607 9.36404 13.3606 7.17437C14.6604 4.98469 16.7769 3.40106 19.2444 2.77186C21.7118 2.14266 24.3282 2.51943 26.5179 3.81929C28.7075 5.11914 30.2912 7.2356 30.9204 9.70307C32.3878 9.49874 33.8817 9.59854 35.3089 9.99626C36.7362 10.394 38.0663 11.0811 39.2166 12.0149C40.3669 12.9488 41.3128 14.1093 41.9954 15.4243C42.678 16.7393 43.0827 18.1807 43.1843 19.6589C43.286 21.137 43.0824 22.6203 42.5863 24.0163C42.0901 25.4124 41.3121 26.6915 40.3004 27.774C39.2888 28.8565 38.0652 29.7193 36.7059 30.3086C35.3465 30.898 33.8804 31.2014 32.3988 31.1999H26.3988V22.5911L29.502 25.6943C29.9546 26.1314 30.5609 26.3734 31.1901 26.3679C31.8194 26.3624 32.4214 26.11 32.8663 25.665C33.3113 25.2201 33.5637 24.6181 33.5692 23.9888C33.5747 23.3596 33.3328 22.7533 32.8956 22.3007L25.6956 15.1007C25.2455 14.6507 24.6352 14.398 23.9988 14.398C23.3624 14.398 22.752 14.6507 22.302 15.1007L15.102 22.3007C14.6648 22.7533 14.4229 23.3596 14.4284 23.9888C14.4338 24.6181 14.6862 25.2201 15.1312 25.665C15.5762 26.11 16.1781 26.3624 16.8074 26.3679C17.4367 26.3734 18.0429 26.1314 18.4956 25.6943L21.5988 22.5935V31.1999H13.1988Z"
                      fill="#828282"
                    />
                    <path
                      d="M21.5999 31.2002H26.3999V43.2002C26.3999 43.8367 26.147 44.4472 25.6969 44.8973C25.2468 45.3473 24.6364 45.6002 23.9999 45.6002C23.3633 45.6002 22.7529 45.3473 22.3028 44.8973C21.8527 44.4472 21.5999 43.8367 21.5999 43.2002V31.2002Z"
                      fill="#828282"
                    />
                  </svg>
                  <p className="p-text font-normal text-center">
                    Drag Image or Click to upload items
                  </p>
                  <input type="file" className="hidden" />
                </label>
              </div>
              <div className="flex justify-start py-8 w-full">
                <input
                  id="checkbox-2"
                  aria-describedby="checkbox-2"
                  type="checkbox"
                  className="bg-gray-50 border-gray-300 focus:ring-3 focus:ring-green-400 h-4 w-4 rounded"
                />
                <label
                  htmlFor="checkbox-2"
                  className="text-sm ml-3 font-normal"
                  style={{ color: "#696F79" }}
                >
                  I agree to terms {"&"} conditions
                </label>
              </div>
              <div className={`mt-5 mb-10 w-full ${pageStyles.authbtn}`}>
                <Link href="/signup/registration-complete" passHref={true}>
                  <button className="w-96 py-2.5 text-white font-bold rounded-3xl text-lg text-center bg-green-600 p-text hover:bg-white hover:text-green-600 border-2 hover:border-green-600">
                    Sign Up
                  </button>
                </Link>
              </div>
            </form>
          </div>
        )}
      </div>
    </div>
  );
}
