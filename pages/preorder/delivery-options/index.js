// import { useRouter } from "next/router";
import Header from "../../../components/header";
import Footer from "../../../components/footer";
import Head from "next/head";
import pageStyles from "../../../styles/Pages.module.css";
import { useState } from "react";
import Link from "next/link";

function DeliveryOptions() {
  // const router = useRouter();

  // const foodType = router.query.foodType;

  // send a request to the backend API to
  // fetch the food types with foodType

  const [showDeliveryInfo, setShowDeliveryInfo] = useState(false);

  return (
    <div>
      <Head>
        <title>Preorder - Delivery Options</title>
        <meta name="keywords" content="Preorder, Grains, Vegetables"></meta>
      </Head>

      <div
        className={`overflow-hidden z-0 ${pageStyles.cartpg}`}
        style={{
          backgroundColor: "#F2C94C",
          height: "597px",
          //   backgroundImage: `url('/assets/img/favpng_shopping-cart-fruit-supermarket-1.png')`,
          //   backgroundSize: "630px 420px",
          //   backgroundPosition: "right 200px",
          //   backgroundRepeat: "no-repeat",
          fontFamily: "Open Sans, sans-serif",
        }}
      >
        <Header></Header>
        <div className="sm:block md:flex justify-between mx-14 sm:my-10 md:my-20">
          <div className={`sm:mt-10 md:mt-24 ${pageStyles.headtxt}`}>
            <h1 className={`text-6xl font-bold ${pageStyles.bigtxt}`}>
              Delivery Options
            </h1>
            <p className="font-normal text-2xl leading-8 md:w-3/6 lg:w-full py-6">
              Would you like to take a loan?{" "}
              <span className="font-bold" style={{ color: "#DF421A" }}>
                <Link href="#">Click here</Link>
              </span>
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
          <div className={`mx-14 py-14 ${pageStyles.tableblk}`}>
            <div className="flex flex-col bg-white max-w-7xl rounded-2xl p-6">
              <label
                className="text-base font-normal p-text"
                style={{ color: "#696F79" }}
                htmlFor="username"
              >
                Select your preferred mode of delivery*
              </label>
              <div className={`relative ${pageStyles.soupeselect} py-3`}>
                <select
                  className="border bg-white rounded px-3 py-2 outline-none p-text font-normal text-sm placeholder-gray-300"
                  style={{ borderColor: "#8692A6", width: "543px" }}
                  onChange={() => setShowDeliveryInfo(!showDeliveryInfo)}
                >
                  <option className="block p-2 border-transparent hover:bg-green-100">
                    Pick Up
                  </option>
                  <option className="block p-2 border-transparent hover:bg-green-100">
                    Doorstep Delivery
                  </option>
                </select>
              </div>
              <div
                className={`service1 ${
                  showDeliveryInfo ? "show my-6" : "hidden"
                }`}
              >
                <h5 className="text-xl font-bold">
                  Kindly enter your delivery details
                </h5>
                <form>
                  <div className="mt-4 sm:block lg:flex justify-between items-center">
                    <div className="sm:pr-0 mx-auto lg:pr-36">
                      <label
                        className="text-base font-normal p-text"
                        style={{ color: "#696F79" }}
                        htmlFor="username"
                      >
                        State*
                      </label>
                      <div
                        className={`relative ${pageStyles.soupeselect} py-3`}
                      >
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
                        Nearest Bustop*
                      </label>
                      <div
                        className={`relative ${pageStyles.soupeselect} py-3`}
                      >
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
                        Address
                      </label>
                      <div
                        className={`relative ${pageStyles.soupeselect} py-3`}
                      >
                        <input
                          id="middle_age"
                          type="text"
                          className="block w-full px-4 py-2 text-gray-700 bg-white border border-gray-300 rounded focus:border-blue-500 dark:focus:border-blue-500 focus:outline-none focus:ring"
                          style={{ borderColor: "#8692A6" }}
                          placeholder=""
                        />
                      </div>
                    </div>
                    <div>
                      <label
                        className="text-base font-normal p-text"
                        style={{ color: "#696F79" }}
                        htmlFor="username"
                      >
                        City*
                      </label>
                      <div
                        className={`relative ${pageStyles.soupeselect} py-3`}
                      >
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
                        Landmark
                      </label>
                      <div
                        className={`relative ${pageStyles.soupeselect} py-3`}
                      >
                        <input
                          id="middle_age"
                          type="text"
                          className="block w-full px-4 py-2 text-gray-700 bg-white border border-gray-300 rounded focus:border-blue-500 dark:focus:border-blue-500 focus:outline-none focus:ring"
                          style={{ borderColor: "#8692A6" }}
                          placeholder=""
                        />
                      </div>
                      <label
                        className="text-base font-normal p-text invisible"
                        style={{ color: "#696F79" }}
                        htmlFor="username"
                      >
                        Landmark
                      </label>
                      <div
                        className={`relative ${pageStyles.soupeselect} py-3 invisible`}
                      >
                        <input
                          id="middle_age"
                          type="text"
                          className="block w-full px-4 py-2 text-gray-700 bg-white border border-gray-300 rounded focus:border-blue-500 dark:focus:border-blue-500 focus:outline-none focus:ring"
                          style={{ borderColor: "#8692A6" }}
                          placeholder=""
                        />
                      </div>
                    </div>
                  </div>
                </form>
              </div>
            </div>
            <div className="flex justify-end my-10">
              <button
                className="px-10 py-2.5 text-white text-lg font-bold rounded-3xl block"
                style={{ backgroundColor: "#4D966D" }}
              >
                <Link href="/preorder/preferred-cec">Continue</Link>
              </button>
            </div>
          </div>
        </div>
      </div>
      <Footer></Footer>
    </div>
  );
}

export default DeliveryOptions;
