import Header from "../../components/header";
import Footer from "../../components/footer";
import Head from "next/head";
import { useState } from "react";
import pageStyles from "../../styles/Pages.module.css";

function FoodCalculator() {
  const [innerPage, setInnerPage] = useState(1);
  return (
    <div style={{ fontFamily: "Open Sans, sans-serif" }}>
      <Head>
        <title>Soupe - Food Calculator</title>
        <meta name="keywords" content="Preorder, Grains, Vegetables"></meta>
      </Head>

      <div
        className={`overflow-hidden z-0 ${pageStyles.other_pgs}`}
        style={{
          backgroundColor: "#F2C94C",
          height: "597px",
        }}
      >
        <Header></Header>
        <div className="sm:block md:flex justify-between mx-14 my-4 md:my-20">
          <div className="head-txt">
            <h1 className="text-6xl font-bold big-txt pt-11 md:pt-20">
              Food Calculator
            </h1>
            <p className="font-normal text-2xl leading-8 md:w-4/6 lg:w-auto py-6">
              Who are the consumers you are planning for
            </p>
          </div>
        </div>
      </div>
      <div
        style={{
          width: "100%",
          minHeight: "500px",
          marginTop: "-118px",
          zIndex: "10000",
        }}
      >
        <div
          style={{
            width: "92%",
            backgroundColor: "#fff",
            margin: "auto",
            background: "#F4F5F5",
            borderRadius: "10px",
            minHeight: "1000px",
          }}
        >
          {innerPage === 1 && (
            <div className="flex items-center mx-14 py-6">
              <form>
                <div className="grid grid-cols-1 sm:gap-4 md:gap-8 lg:gap-8 xl:gap-44 mt-4 sm:grid-cols-2 md:grid-cols-1 lg:grid-cols-2 xl:grid-cols-2">
                  <div>
                    <label
                      className="text-black dark:text-gray-200 p-text"
                      htmlFor="username"
                    >
                      Plaining Period
                    </label>
                    <div className={`relative ${pageStyles.soupeselect} py-4`}>
                      <select
                        className="border bg-white rounded px-3 py-2 outline-none p-text font-normal text-sm placeholder-gray-300"
                        style={{ borderColor: "#8692A6", width: "543px" }}
                      >
                        <option className="py-1">Select the age range</option>
                        <option className="py-1">Option 2</option>
                        <option className="py-1">Option 3</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label
                      className="text-black dark:text-gray-200 p-text"
                      htmlFor="username"
                    >
                      Number of Consumers
                    </label>
                    <div className={`relative ${pageStyles.soupeselect} py-4`}>
                      <select
                        className="border bg-white rounded px-3 py-2 outline-none p-text font-normal text-sm placeholder-gray-300"
                        style={{ borderColor: "#8692A6", width: "543px" }}
                      >
                        <option className="py-1">Select the age range</option>
                        <option className="py-1">Option 2</option>
                        <option className="py-1">Option 3</option>
                      </select>
                    </div>
                  </div>
                </div>
              </form>
            </div>
          )}

          {innerPage === 2 && (
            <div className={`flex items-center mx-20 py-6 ${pageStyles.spaz}`}>
              <form>
                <div className="mt-4 sm:block lg:flex justify-between items-center">
                  {/* MALE PART */}
                  <div className="sm:pr-0 mx-auto lg:pr-36">
                    <h5 className="h-one font-bold text-2xl mb-8">
                      Male Segmentation
                    </h5>
                    <label
                      className="text-base font-normal p-text"
                      style={{ color: "#696F79" }}
                      htmlFor="username"
                    >
                      Total Male Child (2-5 years)
                    </label>
                    <div className={`relative ${pageStyles.soupeselect} py-3`}>
                      <select
                        className="border bg-white rounded px-3 py-2 outline-none p-text font-normal text-sm placeholder-gray-300"
                        style={{ borderColor: "#8692A6", width: "543px" }}
                      >
                        <option className="py-1">Select the age range</option>
                        <option className="py-1">Option 2</option>
                        <option className="py-1">Option 3</option>
                      </select>
                    </div>
                    <label
                      className="text-base font-normal p-text"
                      style={{ color: "#696F79" }}
                      htmlFor="username"
                    >
                      Total Male Adolescent (6-19 years)
                    </label>
                    <div className={`relative ${pageStyles.soupeselect} py-3`}>
                      <select
                        className="border bg-white rounded px-3 py-2 outline-none p-text font-normal text-sm placeholder-gray-300"
                        style={{ borderColor: "#8692A6", width: "543px" }}
                      >
                        <option className="py-1">
                          Select the Gender you are planing for
                        </option>
                        <option className="py-1">Option 2</option>
                        <option className="py-1">Option 3</option>
                      </select>
                    </div>
                    <label
                      className="text-base font-normal p-text"
                      style={{ color: "#696F79" }}
                      htmlFor="username"
                    >
                      Total Male Middle age (20-29 years)
                    </label>
                    <div className={`relative ${pageStyles.soupeselect} py-3`}>
                      <input
                        id="middle_age"
                        type="text"
                        className="block w-full px-4 py-2 text-gray-700 bg-white border border-gray-300 rounded focus:border-blue-500 dark:focus:border-blue-500 focus:outline-none focus:ring"
                        style={{ borderColor: "#8692A6" }}
                        placeholder="Enter the of number of people you are planing for"
                      />
                    </div>
                    <label
                      className="text-base font-normal p-text"
                      style={{ color: "#696F79" }}
                      htmlFor="username"
                    >
                      Total Male Middle age (30-50 years)
                    </label>
                    <div className={`relative ${pageStyles.soupeselect} py-3`}>
                      <select
                        className="border bg-white rounded px-3 py-2 outline-none p-text font-normal text-sm placeholder-gray-300"
                        style={{ borderColor: "#8692A6", width: "543px" }}
                      >
                        <option className="py-1">
                          Select your planning period
                        </option>
                        <option className="py-1">Option 2</option>
                        <option className="py-1">Option 3</option>
                      </select>
                    </div>
                    <label
                      className="text-base font-normal p-text"
                      style={{ color: "#696F79" }}
                      htmlFor="username"
                    >
                      Total Male Middle age (51+ years)
                    </label>
                    <div className={`relative ${pageStyles.soupeselect} py-3`}>
                      <select
                        className="border bg-white rounded px-3 py-2 outline-none p-text font-normal text-sm placeholder-gray-300"
                        style={{ borderColor: "#8692A6", width: "543px" }}
                      >
                        <option className="py-1">
                          Select your planning period
                        </option>
                        <option className="py-1">Option 2</option>
                        <option className="py-1">Option 3</option>
                      </select>
                    </div>
                  </div>
                  {/* FEMALE PART */}
                  <div>
                    <h5 className="h-one font-bold text-2xl sm:mt-8 lg:mt-0 mb-8">
                      Female Segmentation
                    </h5>
                    <label
                      className="text-base font-normal p-text"
                      style={{ color: "#696F79" }}
                      htmlFor="username"
                    >
                      Total Female Child (2-5 years)
                    </label>
                    <div className={`relative ${pageStyles.soupeselect} py-3`}>
                      <select
                        className="border bg-white rounded px-3 py-2 outline-none p-text font-normal text-sm placeholder-gray-300"
                        style={{ borderColor: "#8692A6", width: "543px" }}
                      >
                        <option className="py-1">Select the age range</option>
                        <option className="py-1">Option 2</option>
                        <option className="py-1">Option 3</option>
                      </select>
                    </div>
                    <label
                      className="text-base font-normal p-text"
                      style={{ color: "#696F79" }}
                      htmlFor="username"
                    >
                      Total Female Adolescent (6-19 years)
                    </label>
                    <div className={`relative ${pageStyles.soupeselect} py-3`}>
                      <select
                        className="border bg-white rounded px-3 py-2 outline-none p-text font-normal text-sm placeholder-gray-300"
                        style={{ borderColor: "#8692A6", width: "543px" }}
                      >
                        <option className="py-1">
                          Select the Gender you are planning for
                        </option>
                        <option className="py-1">Option 2</option>
                        <option className="py-1">Option 3</option>
                      </select>
                    </div>
                    <label
                      className="text-base font-normal p-text"
                      style={{ color: "#696F79" }}
                      htmlFor="username"
                    >
                      Total Female Middle age (20-29 years)
                    </label>
                    <div className={`relative ${pageStyles.soupeselect} py-3`}>
                      <input
                        id="middle_age"
                        type="text"
                        className="block w-full px-4 py-2 text-gray-700 bg-white border border-gray-300 rounded focus:border-blue-500 dark:focus:border-blue-500 focus:outline-none focus:ring"
                        style={{ borderColor: "#8692A6" }}
                        placeholder="Enter the of number of people you are planing for"
                      />
                    </div>
                    <label
                      className="text-base font-normal p-text"
                      style={{ color: "#696F79" }}
                      htmlFor="username"
                    >
                      Total Female Middle age (30-50 years)
                    </label>
                    <div className={`relative ${pageStyles.soupeselect} py-3`}>
                      <select
                        className="border bg-white rounded px-3 py-2 outline-none p-text font-normal text-sm placeholder-gray-300"
                        style={{ borderColor: "#8692A6", width: "543px" }}
                      >
                        <option className="py-1">
                          Select your planning period
                        </option>
                        <option className="py-1">Option 2</option>
                        <option className="py-1">Option 3</option>
                      </select>
                    </div>
                    <label
                      className="text-base font-normal p-text"
                      style={{ color: "#696F79" }}
                      htmlFor="username"
                    >
                      Total Female Middle age (51+ years)
                    </label>
                    <div className={`relative ${pageStyles.soupeselect} py-3`}>
                      <select
                        className="border bg-white rounded px-3 py-2 outline-none p-text font-normal text-sm placeholder-gray-300"
                        style={{ borderColor: "#8692A6", width: "543px" }}
                      >
                        <option className="py-1">
                          Select your planning period
                        </option>
                        <option className="py-1">Option 2</option>
                        <option className="py-1">Option 3</option>
                      </select>
                    </div>
                  </div>
                </div>
              </form>
            </div>
          )}

          {innerPage === 3 && (
            <div className={`flex items-center mx-20 py-6 ${pageStyles.spaz}`}>
              <form>
                <div className="mt-4 sm:block lg:flex justify-between items-center">
                  {/* FOOD TYPE */}
                  <div className="sm:pr-0 mx-auto lg:pr-36">
                    <h5 className="h-one font-bold text-2xl mb-8">
                      Select Food Type
                    </h5>
                    <label
                      className="text-base font-normal p-text"
                      style={{ color: "#696F79" }}
                      htmlFor="username"
                    >
                      Food 1
                    </label>
                    <div className={`relative ${pageStyles.soupeselect} py-3`}>
                      <select
                        className="border bg-white rounded px-3 py-2 outline-none p-text font-normal text-sm placeholder-gray-300"
                        style={{ borderColor: "#8692A6", width: "543px" }}
                      >
                        <option className="py-1">Select the age range</option>
                        <option className="py-1">Option 2</option>
                        <option className="py-1">Option 3</option>
                      </select>
                    </div>
                    <label
                      className="text-base font-normal p-text"
                      style={{ color: "#696F79" }}
                      htmlFor="username"
                    >
                      Food 2
                    </label>
                    <div className={`relative ${pageStyles.soupeselect} py-3`}>
                      <select
                        className="border bg-white rounded px-3 py-2 outline-none p-text font-normal text-sm placeholder-gray-300"
                        style={{ borderColor: "#8692A6", width: "543px" }}
                      >
                        <option className="py-1">
                          Select the Gender you are planing for
                        </option>
                        <option className="py-1">Option 2</option>
                        <option className="py-1">Option 3</option>
                      </select>
                    </div>
                    <label
                      className="text-base font-normal p-text"
                      style={{ color: "#696F79" }}
                      htmlFor="username"
                    >
                      Food 3
                    </label>
                    <div className={`relative ${pageStyles.soupeselect} py-3`}>
                      <input
                        id="middle_age"
                        type="text"
                        className="block w-full px-4 py-2 text-gray-700 bg-white border border-gray-300 rounded focus:border-blue-500 dark:focus:border-blue-500 focus:outline-none focus:ring"
                        style={{ borderColor: "#8692A6" }}
                        placeholder="Enter the of number of people you are planing for"
                      />
                    </div>
                    <label
                      className="text-base font-normal p-text"
                      style={{ color: "#696F79" }}
                      htmlFor="username"
                    >
                      Food 4
                    </label>
                    <div className={`relative ${pageStyles.soupeselect} py-3`}>
                      <select
                        className="border bg-white rounded px-3 py-2 outline-none p-text font-normal text-sm placeholder-gray-300"
                        style={{ borderColor: "#8692A6", width: "543px" }}
                      >
                        <option className="py-1">
                          Select your planning period
                        </option>
                        <option className="py-1">Option 2</option>
                        <option className="py-1">Option 3</option>
                      </select>
                    </div>
                    <label
                      className="text-base font-normal p-text"
                      style={{ color: "#696F79" }}
                      htmlFor="username"
                    >
                      Food 5
                    </label>
                    <div className={`relative ${pageStyles.soupeselect} py-3`}>
                      <select
                        className="border bg-white rounded px-3 py-2 outline-none p-text font-normal text-sm placeholder-gray-300"
                        style={{ borderColor: "#8692A6", width: "543px" }}
                      >
                        <option className="py-1">
                          Select your planning period
                        </option>
                        <option className="py-1">Option 2</option>
                        <option className="py-1">Option 3</option>
                      </select>
                    </div>
                  </div>
                  {/* FREQUENCY PART */}
                  <div>
                    <h5 className="h-one font-bold text-2xl mb-8">
                      Frequency of Consumption
                    </h5>
                    <label
                      className="text-base font-normal p-text"
                      style={{ color: "#696F79" }}
                      htmlFor="username"
                    >
                      Frequency 1
                    </label>
                    <div className={`relative ${pageStyles.soupeselect} py-3`}>
                      <select
                        className="border bg-white rounded px-3 py-2 outline-none p-text font-normal text-sm placeholder-gray-300"
                        style={{ borderColor: "#8692A6", width: "543px" }}
                      >
                        <option className="py-1">Select the age range</option>
                        <option className="py-1">Option 2</option>
                        <option className="py-1">Option 3</option>
                      </select>
                    </div>
                    <label
                      className="text-base font-normal p-text"
                      style={{ color: "#696F79" }}
                      htmlFor="username"
                    >
                      Frequency 2
                    </label>
                    <div className={`relative ${pageStyles.soupeselect} py-3`}>
                      <select
                        className="border bg-white rounded px-3 py-2 outline-none p-text font-normal text-sm placeholder-gray-300"
                        style={{ borderColor: "#8692A6", width: "543px" }}
                      >
                        <option className="py-1">
                          Select the Gender you are planning for
                        </option>
                        <option className="py-1">Option 2</option>
                        <option className="py-1">Option 3</option>
                      </select>
                    </div>
                    <label
                      className="text-base font-normal p-text"
                      style={{ color: "#696F79" }}
                      htmlFor="username"
                    >
                      Frequency 3
                    </label>
                    <div className={`relative ${pageStyles.soupeselect} py-3`}>
                      <input
                        id="middle_age"
                        type="text"
                        className="block w-full px-4 py-2 text-gray-700 bg-white border border-gray-300 rounded focus:border-blue-500 dark:focus:border-blue-500 focus:outline-none focus:ring"
                        style={{ borderColor: "#8692A6" }}
                        placeholder="Enter the of number of people you are planing for"
                      />
                    </div>
                    <label
                      className="text-base font-normal p-text"
                      style={{ color: "#696F79" }}
                      htmlFor="username"
                    >
                      Frequency 4
                    </label>
                    <div className={`relative ${pageStyles.soupeselect} py-3`}>
                      <select
                        className="border bg-white rounded px-3 py-2 outline-none p-text font-normal text-sm placeholder-gray-300"
                        style={{ borderColor: "#8692A6", width: "543px" }}
                      >
                        <option className="py-1">
                          Select your planning period
                        </option>
                        <option className="py-1">Option 2</option>
                        <option className="py-1">Option 3</option>
                      </select>
                    </div>
                    <label
                      className="text-base font-normal p-text"
                      style={{ color: "#696F79" }}
                      htmlFor="username"
                    >
                      Frequency 5
                    </label>
                    <div className={`relative ${pageStyles.soupeselect} py-3`}>
                      <select
                        className="border bg-white rounded px-3 py-2 outline-none p-text font-normal text-sm placeholder-gray-300"
                        style={{ borderColor: "#8692A6", width: "543px" }}
                      >
                        <option className="py-1">
                          Select your planning period
                        </option>
                        <option className="py-1">Option 2</option>
                        <option className="py-1">Option 3</option>
                      </select>
                    </div>
                  </div>
                </div>
              </form>
            </div>
          )}
        </div>
        <div className="my-14 mx-14 flex justify-end p-text">
          {innerPage > 0 && innerPage < 2 && (
            <button
              className="px-6 py-2.5 text-white text-lg font-bold rounded-3xl"
              style={{ backgroundColor: "#4D966D" }}
              onClick={() => {
                setInnerPage(innerPage + 1);
              }}
            >
              Continue
            </button>
          )}
        </div>
        {innerPage > 1 && innerPage < 3 && (
          <div className="my-14 mx-14 flex justify-between items-center p-text">
            <button
              className="font-bold text-lg p-text"
              onClick={() => {
                setInnerPage(innerPage - 1);
              }}
            >
              Back
            </button>

            <button
              className="px-6 py-2.5 text-white text-lg font-bold rounded-3xl"
              style={{ backgroundColor: "#4D966D" }}
              onClick={() => {
                setInnerPage(innerPage + 1);
              }}
            >
              Continue
            </button>
          </div>
        )}
        {innerPage > 2 && (
          <div className="my-14 mx-14 flex justify-between items-center p-text">
            <button
              className="font-bold text-lg p-text"
              onClick={() => {
                setInnerPage(innerPage - 1);
              }}
            >
              Back
            </button>

            <button
              className="px-6 py-2.5 text-white text-lg font-bold rounded-3xl"
              style={{ backgroundColor: "#4D966D" }}
              onClick="#"
            >
              Calulate
            </button>
          </div>
        )}
      </div>
      <Footer></Footer>
    </div>
  );
}

export default FoodCalculator;
