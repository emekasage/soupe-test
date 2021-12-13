import { useState } from "react";
// import Link from "next/link";
import Image from "next/image";
import pageStyles from "../styles/Pages.module.css";

export default function Profiles() {
  const [innerPage, setInnerPage] = useState(1);
  const [tabPage, setTabPage] = useState(1);
  const [passwordShown, setPasswordShown] = useState(false);
  const togglePasswordVisiblity = () => {
    setPasswordShown(passwordShown ? false : true);
  };

  return (
    <div>
      <div
        className={`md:flex justify-between md:mx-4 lg:mx-8 xl:mx-24 py-8`}
        style={{ fontFamily: "Open Sans, sans-serif" }}
      >
        <div className={`w-1/5 h-1/4 bg-white flex flex-col rounded-lg`}>
          <div className={`px-3 pt-4 mb-16`}>
            <p
              className={`text-lg font-normal hover:bg-green-100 p-2 cursor-pointer mb-1 ${
                pageStyles.tabtext
              }  ${
                innerPage === 1
                  ? "active bg-green-100 text-green-600 font-bold"
                  : ""
              }`}
              onClick={() => {
                setInnerPage(1);
              }}
            >
              Personal Information
            </p>
            <p
              className={`text-lg font-normal hover:bg-green-100 p-2 cursor-pointer nav ${
                pageStyles.tabtext
              }
            ${
              innerPage === 2
                ? "active bg-green-100 text-green-600 font-bold"
                : ""
            }
            `}
              onClick={() => {
                setInnerPage(2);
              }}
            >
              Security
            </p>
          </div>
          <h6 className="text-gray-300 text-lg font-bold mx-auto p-8 hover:text-red-600 cursor-pointer">
            Log Out
          </h6>
        </div>
        <div className={`w-3/4 bg-white p-6 rounded-lg`}>
          {innerPage === 1 && (
            <div>
              {" "}
              <div className={`flex justify-between items-center`}>
                <div className={`inline-flex items-center`}>
                  <div>
                    <Image
                      className={`rounded-full`}
                      src="/assets/img/Rectangle-662.png"
                      alt="user-dp"
                      width={104}
                      height={104}
                    />
                  </div>
                  <p
                    className={`text-red-600 font-bold text-lg ml-8 cursor-pointer`}
                  >
                    Upload
                  </p>
                  <p
                    className={`text-gray-400 font-bold text-base ml-8 cursor-pointer`}
                  >
                    Delete
                  </p>
                </div>
                <div className={`inline-flex cursor-pointer`}>
                  <svg
                    width="18"
                    height="18"
                    viewBox="0 0 18 18"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M6.243 16.0001H18V18.0001H0V13.7571L9.9 3.85708L14.142 8.10108L6.242 16.0001H6.243ZM11.313 2.44408L13.435 0.322083C13.6225 0.134612 13.8768 0.0292969 14.142 0.0292969C14.4072 0.0292969 14.6615 0.134612 14.849 0.322083L17.678 3.15108C17.8655 3.33861 17.9708 3.59292 17.9708 3.85808C17.9708 4.12325 17.8655 4.37756 17.678 4.56508L15.556 6.68608L11.314 2.44408H11.313Z"
                      fill="#4D966D"
                    />
                  </svg>
                  <span className="text-base text-green-600 ml-3">Edit</span>
                </div>
              </div>
              <hr className={`border border-gray-300 mt-4`} />
              <div className={`py-4`}>
                <h6 className={`text-lg font-bold`}>Personal Details</h6>
                <form>
                  <div
                    className="md:flex items-center mt-4"
                    style={{ fontFamily: "'Sen', sans-serif" }}
                  >
                    <div className="relative w-full md:w-1/2 flex flex-col">
                      <label className="text-base font-normal leading-none">
                        Full Name
                      </label>
                      <input
                        type="text"
                        className="leading-none text-gray-900 py-3 px-5 focus:outline-none focus:border-green-500 mt-4 bg-white border rounded border-gray-300"
                        placeholder="Dina Simmone"
                      />
                    </div>
                    <div className="relative w-full md:w-1/2 flex flex-col md:ml-6 md:mt-0 mt-4">
                      <label className="text-base font-normal leading-none">
                        Phone Number
                      </label>
                      <input
                        type="number"
                        className="leading-none text-gray-900 py-3 px-5 focus:outline-none focus:border-green-500 mt-4 bg-white border rounded border-gray-300"
                        placeholder="+234 0817 653 8793"
                      />
                    </div>
                  </div>
                  <div
                    className="md:flex items-center mt-4"
                    style={{ fontFamily: "'Sen', sans-serif" }}
                  >
                    <div className="relative w-full md:w-1/2 flex flex-col">
                      <label className="text-base font-normal leading-none">
                        Address
                      </label>
                      <input
                        type="text"
                        className="leading-none text-gray-900 py-3 px-5 focus:outline-none focus:border-green-500 mt-4 bg-white border rounded border-gray-300"
                        placeholder="11 Kajola Street, Maryland, Ikeja, Lagos State"
                      />
                    </div>
                    <div className="relative w-full md:w-1/2 flex flex-col md:ml-6 md:mt-0 mt-4">
                      <label className="text-base font-normal leading-none">
                        Email Address
                      </label>
                      <input
                        type="email"
                        className="leading-none text-gray-900 py-3 px-5 focus:outline-none focus:border-green-500 mt-4 bg-white border rounded border-gray-300"
                        placeholder="Dina.simmone@gmail.com"
                      />
                    </div>
                  </div>
                </form>
              </div>
              <hr className={`border border-gray-300 mt-4`} />
              <div className={`py-4`}>
                <h6 className={`text-lg font-bold`}>Linked Accounts</h6>
                <p className="text-base font-normal text-gray-400 py-5">
                  We use this to let you sign in and populate your information
                </p>
                <div className="flex justify-between items-center">
                  <div className="inline-flex">
                    <svg
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M21.8055 10.0415H21V10H12V14H17.6515C16.827 16.3285 14.6115 18 12 18C8.6865 18 6 15.3135 6 12C6 8.6865 8.6865 6 12 6C13.5295 6 14.921 6.577 15.9805 7.5195L18.809 4.691C17.023 3.0265 14.634 2 12 2C6.4775 2 2 6.4775 2 12C2 17.5225 6.4775 22 12 22C17.5225 22 22 17.5225 22 12C22 11.3295 21.931 10.675 21.8055 10.0415Z"
                        fill="#FFC107"
                      />
                      <path
                        d="M3.15332 7.3455L6.43882 9.755C7.32782 7.554 9.48082 6 12.0003 6C13.5298 6 14.9213 6.577 15.9808 7.5195L18.8093 4.691C17.0233 3.0265 14.6343 2 12.0003 2C8.15932 2 4.82832 4.1685 3.15332 7.3455Z"
                        fill="#FF3D00"
                      />
                      <path
                        d="M12.0002 22.0003C14.5832 22.0003 16.9302 21.0118 18.7047 19.4043L15.6097 16.7853C14.5719 17.5745 13.3039 18.0014 12.0002 18.0003C9.39916 18.0003 7.19066 16.3418 6.35866 14.0273L3.09766 16.5398C4.75266 19.7783 8.11366 22.0003 12.0002 22.0003Z"
                        fill="#4CAF50"
                      />
                      <path
                        d="M21.8055 10.0415H21V10H12V14H17.6515C17.2571 15.1082 16.5467 16.0766 15.608 16.7855L15.6095 16.7845L18.7045 19.4035C18.4855 19.6025 22 17 22 12C22 11.3295 21.931 10.675 21.8055 10.0415Z"
                        fill="#1976D2"
                      />
                    </svg>
                    <p className="text-base font-normal pl-3">
                      Sign in with Google
                    </p>
                  </div>
                  <div className="text-lg font-bold text-red-600">Upload</div>
                </div>
              </div>
              <hr className={`border border-gray-300 mt-4`} />
              <div className="flex justify-between items-center">
                <div>
                  <h6 className={`text-lg font-bold pt-4`}>Linked Accounts</h6>
                  <p className="text-base font-normal text-gray-400 py-5">
                    We use this to let you sign in and populate your information
                  </p>
                </div>
                <div className="text-base text-gray-400 font-bold">
                  Delete Accounts
                </div>
              </div>
            </div>
          )}
          {innerPage === 2 && (
            <div>
              <div className="w-full mx-auto rounded">
                <ul id="tabs" className="inline-flex w-full">
                  <li
                    className={`px-4 py-2 -mb-px font-normal text-gray-900 cursor-pointer ${
                      tabPage === 1
                        ? "font-bold text-lg text-green-600 border-b-2 border-green-600 transition duration-500 ease-in-out"
                        : ""
                    }`}
                    onClick={() => {
                      setTabPage(1);
                    }}
                  >
                    Password
                  </li>
                  <li
                    className={`px-6 py-2 font-normal text-gray-900 rounded-t cursor-pointer ${
                      tabPage === 2
                        ? "text-lg text-green-600 font-bold border-b-2 border-green-600 transition duration-500 ease-in-out"
                        : ""
                    }`}
                    onClick={() => {
                      setTabPage(2);
                    }}
                  >
                    Wallet PIN
                  </li>
                </ul>

                <div id="tab-contents">
                  {tabPage === 1 && (
                    <div className="py-6">
                      <form className="w-1/2">
                        <div className="relative mb-3">
                          <label
                            htmlFor="password"
                            className="block mb-3 text-base"
                            style={{ color: "#696F79" }}
                          >
                            Old Password
                          </label>
                          <input
                            name="password"
                            id="password"
                            type={passwordShown ? "text" : "password"}
                            className="w-80 px-3 py-3 text-base placeholder-gray-300 border rounded-md focus:outline-none focus:ring-1 focus:ring-green-400 focus:border-green-400 dark:bg-gray-700 dark:text-white dark:placeholder-gray-500 dark:border-gray-600 dark:focus:ring-gray-900 dark:focus:border-gray-500"
                            style={{ borderColor: "#8692A6" }}
                          />
                          <span
                            className={`absolute ml-72 bottom-4 flex justify-end items-center text-sm leading-5 cursor-pointer`}
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
                          </span>
                        </div>
                        <div className="relative mb-3">
                          <label
                            htmlFor="password"
                            className="block mb-3 text-base"
                            style={{ color: "#696F79" }}
                          >
                            New Password
                          </label>
                          <input
                            name="password"
                            id="password"
                            type={passwordShown ? "text" : "password"}
                            className="w-80 px-3 py-3 text-base placeholder-gray-300 border rounded-md focus:outline-none focus:ring-1 focus:ring-green-400 focus:border-green-400 dark:bg-gray-700 dark:text-white dark:placeholder-gray-500 dark:border-gray-600 dark:focus:ring-gray-900 dark:focus:border-gray-500"
                            style={{ borderColor: "#8692A6" }}
                          />
                          <span
                            className={`absolute ml-72 bottom-4 flex justify-end items-center text-sm leading-5 cursor-pointer`}
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
                          </span>
                        </div>
                        <div className="relative mb-3">
                          <label
                            htmlFor="password"
                            className="block mb-3 text-base"
                            style={{ color: "#696F79" }}
                          >
                            Confirm New Password
                          </label>
                          <input
                            name="password"
                            id="password"
                            type={passwordShown ? "text" : "password"}
                            className="w-80 px-3 py-3 text-base placeholder-gray-300 border rounded-md focus:outline-none focus:ring-1 focus:ring-green-400 focus:border-green-400 dark:bg-gray-700 dark:text-white dark:placeholder-gray-500 dark:border-gray-600 dark:focus:ring-gray-900 dark:focus:border-gray-500"
                            style={{ borderColor: "#8692A6" }}
                          />
                          <span
                            className={`absolute ml-72 bottom-4 flex justify-end items-center text-sm leading-5 cursor-pointer`}
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
                          </span>
                        </div>
                      </form>
                    </div>
                  )}

                  {tabPage === 2 && (
                    <div className="py-6">
                      <form className="w-1/2">
                        <div className="relative mb-3">
                          <label
                            htmlFor="password"
                            className="block mb-3 text-base"
                            style={{ color: "#696F79" }}
                          >
                            Old PIN
                          </label>
                          <input
                            name="password"
                            id="password"
                            type={passwordShown ? "text" : "password"}
                            className="w-80 px-3 py-3 text-base placeholder-gray-300 border rounded-md focus:outline-none focus:ring-1 focus:ring-green-400 focus:border-green-400 dark:bg-gray-700 dark:text-white dark:placeholder-gray-500 dark:border-gray-600 dark:focus:ring-gray-900 dark:focus:border-gray-500"
                            style={{ borderColor: "#8692A6" }}
                          />
                          <span
                            className={`absolute ml-72 bottom-4 flex justify-end items-center text-sm leading-5 cursor-pointer`}
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
                          </span>
                        </div>
                        <div className="relative mb-3">
                          <label
                            htmlFor="password"
                            className="block mb-3 text-base"
                            style={{ color: "#696F79" }}
                          >
                            New PIN
                          </label>
                          <input
                            name="password"
                            id="password"
                            type={passwordShown ? "text" : "password"}
                            className="w-80 px-3 py-3 text-base placeholder-gray-300 border rounded-md focus:outline-none focus:ring-1 focus:ring-green-400 focus:border-green-400 dark:bg-gray-700 dark:text-white dark:placeholder-gray-500 dark:border-gray-600 dark:focus:ring-gray-900 dark:focus:border-gray-500"
                            style={{ borderColor: "#8692A6" }}
                          />
                          <span
                            className={`absolute ml-72 bottom-4 flex justify-end items-center text-sm leading-5 cursor-pointer`}
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
                          </span>
                        </div>
                        <div className="relative mb-3">
                          <label
                            htmlFor="password"
                            className="block mb-3 text-base"
                            style={{ color: "#696F79" }}
                          >
                            Confirm New PIN
                          </label>
                          <input
                            name="password"
                            id="password"
                            type={passwordShown ? "text" : "password"}
                            className="w-80 px-3 py-3 text-base placeholder-gray-300 border rounded-md focus:outline-none focus:ring-1 focus:ring-green-400 focus:border-green-400 dark:bg-gray-700 dark:text-white dark:placeholder-gray-500 dark:border-gray-600 dark:focus:ring-gray-900 dark:focus:border-gray-500"
                            style={{ borderColor: "#8692A6" }}
                          />
                          <span
                            className={`absolute ml-72 bottom-4 flex justify-end items-center text-sm leading-5 cursor-pointer`}
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
                          </span>
                        </div>
                      </form>
                    </div>
                  )}
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
      <div className="my-14 mx-24 flex justify-end p-text">
        <button
          className="px-6 py-2.5 text-white text-lg font-bold rounded-3xl"
          style={{ backgroundColor: "#4D966D" }}
        >
          Save
        </button>
      </div>
    </div>
  );
}
