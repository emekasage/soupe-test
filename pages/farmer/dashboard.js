import Header from "../../components/header";
import Footer from "../../components/footer";
import Head from "next/head";
import pageStyles from "../../styles/Pages.module.css";
import Link from "next/link";
import FoodProduce from "../../components/farmproduce";
import { useState } from "react";
import ProduceModal from "../../components/producemodal";

function FarmerDashboard() {
  const [showModal, setShowModal] = useState(false);
  return (
    <div style={{ fontFamily: "Open Sans, sans-serif" }}>
      <Head>
        <title>Soupe - Farmer | Dashboard</title>
        <meta name="keywords" content="Preorder, Grains, Vegetables"></meta>
      </Head>

      <div
        className={`overflow-hidden z-0`}
        style={{
          backgroundColor: "#F2C94C",
          height: "580px",
          zIndex: "1",
        }}
      >
        <Header></Header>
        <div className="sm:block md:flex justify-center mx-14 my-4">
          <div className="head-txt">
            <h1 className="text-6xl text-center font-bold big-txt pt-8 md:pt-14">
              Farm Produce
            </h1>
            <p className="font-normal text-center text-2xl leading-8 md:px-24 lg:px-0 w-full py-6">
              Do you have new farm produce you would like to add?{" "}
              <span
                className="font-bold cursor-pointer"
                style={{ color: "#DF421A" }}
                onClick={() => setShowModal(true)}
              >
                Click here
              </span>
            </p>
          </div>
        </div>
        <div className="md:flex relative mx-14 lg:w-1/2 max-w-3xl mt-12">
          <input
            className="border transition h-12 px-11 pr-4 md:pr-16 rounded-full focus:outline-none focus:ring-1 focus:ring-green-400 focus:border-green-400 w-full text-black text-lg"
            style={{ borderColor: "#B7B6B6" }}
            type="search"
            name="search"
            placeholder="Search for a consumer"
          />
          <span className="absolute left-3.5 top-3.5">
            <svg
              width="16"
              height="16"
              viewBox="0 0 16 16"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M6 1.99979C4.93913 1.99979 3.92172 2.42122 3.17157 3.17136C2.42143 3.92151 2 4.93892 2 5.99979C2 7.06066 2.42143 8.07807 3.17157 8.82822C3.92172 9.57836 4.93913 9.99979 6 9.99979C7.06087 9.99979 8.07828 9.57836 8.82843 8.82822C9.57857 8.07807 10 7.06066 10 5.99979C10 4.93892 9.57857 3.92151 8.82843 3.17136C8.07828 2.42122 7.06087 1.99979 6 1.99979ZM1.13461e-07 5.99979C-0.00012039 5.05549 0.222642 4.1245 0.650171 3.28253C1.0777 2.44056 1.69792 1.71139 2.4604 1.15432C3.22287 0.597243 4.10606 0.228002 5.03815 0.0766228C5.97023 -0.0747564 6.92488 -0.00399905 7.82446 0.28314C8.72404 0.570279 9.54315 1.06569 10.2152 1.72909C10.8872 2.39248 11.3931 3.20512 11.6919 4.10092C11.9906 4.99672 12.0737 5.95038 11.9343 6.88434C11.795 7.8183 11.4372 8.70619 10.89 9.47579L15.707 14.2928C15.8892 14.4814 15.99 14.734 15.9877 14.9962C15.9854 15.2584 15.8802 15.5092 15.6948 15.6946C15.5094 15.88 15.2586 15.9852 14.9964 15.9875C14.7342 15.9897 14.4816 15.8889 14.293 15.7068L9.477 10.8908C8.57936 11.5291 7.52335 11.9079 6.42468 11.9859C5.326 12.0639 4.22707 11.8379 3.2483 11.3328C2.26953 10.8276 1.44869 10.0628 0.875723 9.12214C0.30276 8.18147 -0.000214051 7.10122 1.13461e-07 5.99979Z"
                fill="#A8A8A8"
              />
            </svg>
          </span>
          <button
            className="absolute right-2 md:right-3 top-14 md:top-1.5 px-12 py-1.5 font-bold text-base text-white"
            style={{ backgroundColor: "#4D966D", borderRadius: "40px" }}
          >
            Search
          </button>
        </div>
      </div>
      <div
        className={`mx-10 md:mx-16 -mt-32 bg-transparent ${pageStyles.overlapp}`}
        style={{ zIndex: "1000" }}
      >
        <FoodProduce></FoodProduce>
      </div>
      <div
        className={`bg-cover lg:pt-64 pb-20 lg:-mt-64 px-10 md:px-16 ${pageStyles.dashbg00}`}
        style={{ zIndex: "1" }}
      >
        <FoodProduce></FoodProduce>
        <div className="py-10">
          <FoodProduce></FoodProduce>
        </div>
      </div>
      <Footer></Footer>
      <ProduceModal show={showModal} setShowModal={setShowModal}>
        <div className="mt-8">
          <h5 className="font-bold text-lg">Add Produce</h5>
          <form className=" mt-4 p-text">
            <div className="mb-3">
              <label
                htmlFor="title"
                className="block mb-2 text-base"
                style={{ color: "#696F79" }}
              >
                Product Title*
              </label>
              <input
                type="text"
                name="full_name"
                id="full_name"
                className="w-full px-3 py-3 text-sm border rounded-md focus:outline-none focus:ring-1 focus:ring-green-400 focus:border-green-400 dark:bg-gray-700 dark:text-white dark:placeholder-gray-500 dark:border-gray-600 dark:focus:ring-gray-900 dark:focus:border-gray-500"
                style={{ borderColor: "#8692A6" }}
              />
            </div>
            <div className="mb-3">
              <label
                htmlFor="category"
                className="block mb-2 text-base"
                style={{ color: "#696F79" }}
              >
                Product Category*
              </label>
              <input
                type="text"
                name="category"
                id="category"
                className="w-full px-3 py-3 text-sm border rounded-md focus:outline-none focus:ring-1 focus:ring-green-400 focus:border-green-400 dark:bg-gray-700 dark:text-white dark:placeholder-gray-500 dark:border-gray-600 dark:focus:ring-gray-900 dark:focus:border-gray-500"
                style={{ borderColor: "#8692A6" }}
              />
            </div>
            <div className="mb-3">
              <label
                htmlFor="description"
                className="block mb-2 text-base"
                style={{ color: "#696F79" }}
              >
                Product Description*
              </label>
              <textarea
                type="text"
                name="description"
                id="description"
                className="w-full px-3 py-6 text-sm border rounded-md focus:outline-none focus:ring-1 focus:ring-green-400 focus:border-green-400 dark:bg-gray-700 dark:text-white dark:placeholder-gray-500 dark:border-gray-600 dark:focus:ring-gray-900 dark:focus:border-gray-500"
                style={{ borderColor: "#8692A6" }}
              />
            </div>
            <div className="mb-3">
              <label
                htmlFor="email"
                className="block mb-2 text-base"
                style={{ color: "#696F79" }}
              >
                Available Variation
              </label>
              <input
                type="text"
                name="variation"
                id="address"
                placeholder="Invictus Simmone Address"
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
                Current Price*
              </label>
              <input
                type="text"
                name="variation"
                id="address"
                placeholder="Invictus Simmone Address"
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
                Discounted Price*
              </label>
              <input
                type="text"
                name="variation"
                id="address"
                placeholder="Invictus Simmone Address"
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
            <div className={`${pageStyles.authbtn} mt-5 mb-10 w-full`}>
              <button className="w-96 py-2.5 text-white font-bold rounded-3xl text-lg text-center bg-green-600 p-text hover:bg-white hover:text-green-600 border-2 hover:border-green-600">
                Save product
              </button>
            </div>
          </form>
        </div>
      </ProduceModal>
    </div>
  );
}

export default FarmerDashboard;
