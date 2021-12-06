// import { useRouter } from "next/router";
import Header from "../../components/header";
import Footer from "../../components/footer";
import Head from "next/head";
import pageStyles from "../../styles/Pages.module.css";
import { useState } from "react";
import Link from "next/link";

function ComparePrice() {
  // const router = useRouter();

  // const foodType = router.query.foodType;

  // send a request to the backend API to
  // fetch the food types with foodType

  const [innerPage, setInnerPage] = useState(1);

  return (
    <div>
      <Head>
        <title>Preorder - Compare Prices</title>
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
        <div className="sm:block md:flex justify-center mx-14 sm:my-10 md:my-20">
          <div
            className={`text-center sm:mt-10 md:mt-14 ${pageStyles.headtxt}`}
          >
            <h1 className={`text-6xl font-bold ${pageStyles.bigtxt}`}>
              Compare Prices
            </h1>
            <p className="font-normal text-2xl leading-8 w-full px-4 md:px-32 lg:px-56 xl:px-96 py-6">
              Kindly provide us with the following information to enable us make
              accurate calculations for you
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
            <div className="flex flex-col">
              <div className="max-w-5xl md:flex justify-around items-center mb-6 mx-24 md:mx-14 xl:mx-80">
                <div className="bg-white p-4">
                  <h5
                    className="text-2xl font-bold text-center"
                    style={{ color: "#4D966D" }}
                  >
                    Soupe
                  </h5>
                </div>
                <div className="text-2xl font-bold text-center">VS</div>
                <div className={`relative ${pageStyles.compare_select}`}>
                  <select
                    className={`border bg-white rounded p-4 outline-none p-text font-bold text-2xl placeholder-gray-300`}
                    style={{ width: "261px", color: "#DF421A" }}
                  >
                    <option className="py-1">Choose Market</option>
                    <option className="py-1">Shoprite</option>
                    <option className="py-1">Shoprite</option>
                    <option className="py-1">Shoprite</option>
                    <option className="py-1">Shoprite</option>
                    <option className="py-1">Shoprite</option>
                  </select>
                </div>
              </div>
              {innerPage === 1 && (
                <div>
                  <div className="-my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
                    <div className="py-2 align-middle inline-block min-w-full sm:px-6 lg:px-8">
                      <div className="shadow overflow-hidden border-b border-gray-200 sm:rounded-lg">
                        <table className="min-w-full divide-y divide-gray-200">
                          <thead className="bg-gray-50">
                            <tr>
                              <th
                                scope="col"
                                className="px-6 py-3 text-left text-lg font-medium text-gray-500 capitalize tracking-wider"
                              >
                                Food Item
                              </th>
                              <th
                                scope="col"
                                className="px-6 py-3 text-left text-lg font-medium text-gray-500 capitalize tracking-wider"
                              >
                                No. of Consumers
                              </th>
                              <th
                                scope="col"
                                className="px-6 py-3 text-left text-lg font-medium text-gray-500 capitalize tracking-wider"
                              >
                                Planning Period
                              </th>
                              <th
                                scope="col"
                                className="px-6 py-3 text-left text-lg font-medium text-gray-500 capitalize tracking-wider"
                              >
                                Unit Price
                              </th>
                              <th
                                scope="col"
                                className="px-6 py-3 text-left text-lg font-medium text-gray-500 capitalize tracking-wider"
                              >
                                Quantity
                              </th>
                              <th
                                scope="col"
                                className="px-6 py-3 text-left text-lg font-medium text-gray-500 capitalize tracking-wider"
                              >
                                Amount
                              </th>
                            </tr>
                          </thead>
                          <tbody className="bg-white divide-y divide-gray-200">
                            <tr>
                              <td className="px-6 py-4 whitespace-nowrap">
                                <div className="flex items-center">
                                  <span className="text-lg font-normal">
                                    Jollof Rice
                                  </span>
                                </div>
                              </td>
                              <td className="px-6 py-4 whitespace-nowrap">
                                <div className="flex justify-center items-center">
                                  <span className="text-lg font-normal">
                                    14
                                  </span>
                                </div>
                              </td>
                              <td className="px-6 py-4 whitespace-nowrap">
                                <div className="text-lg text-gray-900">
                                  1 Month
                                </div>
                              </td>
                              <td className="px-6 py-4 whitespace-nowrap">
                                <div className="text-lg text-gray-900">
                                  ₦1,900
                                </div>
                              </td>
                              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                                <div className="inline-flex items-center">
                                  <span className="text-lg text-gray-900">
                                    1 bag (25kg)
                                  </span>
                                </div>
                              </td>
                              <td className="px-6 py-4 whitespace-nowrap">
                                <div className="text-lg text-gray-900">
                                  ₦1,900
                                </div>
                              </td>
                            </tr>
                            <tr>
                              <td className="px-6 py-4 whitespace-nowrap">
                                <div className="flex items-center">
                                  <span className="text-lg font-normal">
                                    Jollof Rice
                                  </span>
                                </div>
                              </td>
                              <td className="px-6 py-4 whitespace-nowrap">
                                <div className="flex justify-center items-center">
                                  <span className="text-lg font-normal">
                                    14
                                  </span>
                                </div>
                              </td>
                              <td className="px-6 py-4 whitespace-nowrap">
                                <div className="text-lg text-gray-900">
                                  1 Month
                                </div>
                              </td>
                              <td className="px-6 py-4 whitespace-nowrap">
                                <div className="text-lg text-gray-900">
                                  ₦1,900
                                </div>
                              </td>
                              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                                <div className="inline-flex items-center">
                                  <span className="text-lg text-gray-900">
                                    1 bag (25kg)
                                  </span>
                                </div>
                              </td>
                              <td className="px-6 py-4 whitespace-nowrap">
                                <div className="text-lg text-gray-900">
                                  ₦1,900
                                </div>
                              </td>
                            </tr>
                            <tr>
                              <td className="px-6 py-4 whitespace-nowrap">
                                <div className="flex items-center">
                                  <span className="text-lg font-normal">
                                    Jollof Rice
                                  </span>
                                </div>
                              </td>
                              <td className="px-6 py-4 whitespace-nowrap">
                                <div className="flex justify-center items-center">
                                  <span className="text-lg font-normal">
                                    14
                                  </span>
                                </div>
                              </td>
                              <td className="px-6 py-4 whitespace-nowrap">
                                <div className="text-lg text-gray-900">
                                  1 Month
                                </div>
                              </td>
                              <td className="px-6 py-4 whitespace-nowrap">
                                <div className="text-lg text-gray-900">
                                  ₦1,900
                                </div>
                              </td>
                              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                                <div className="inline-flex items-center">
                                  <span className="text-lg text-gray-900">
                                    1 bag (25kg)
                                  </span>
                                </div>
                              </td>
                              <td className="px-6 py-4 whitespace-nowrap">
                                <div className="text-lg text-gray-900">
                                  ₦1,900
                                </div>
                              </td>
                            </tr>
                            <tr>
                              <td className="px-6 py-4 whitespace-nowrap">
                                <div className="flex items-center">
                                  <span className="text-lg font-normal">
                                    Jollof Rice
                                  </span>
                                </div>
                              </td>
                              <td className="px-6 py-4 whitespace-nowrap">
                                <div className="flex justify-center items-center">
                                  <span className="text-lg font-normal">
                                    14
                                  </span>
                                </div>
                              </td>
                              <td className="px-6 py-4 whitespace-nowrap">
                                <div className="text-lg text-gray-900">
                                  1 Month
                                </div>
                              </td>
                              <td className="px-6 py-4 whitespace-nowrap">
                                <div className="text-lg text-gray-900">
                                  ₦1,900
                                </div>
                              </td>
                              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                                <div className="inline-flex items-center">
                                  <span className="text-lg text-gray-900">
                                    1 bag (25kg)
                                  </span>
                                </div>
                              </td>
                              <td className="px-6 py-4 whitespace-nowrap">
                                <div className="text-lg text-gray-900">
                                  ₦1,900
                                </div>
                              </td>
                            </tr>
                            <tr>
                              <td className="px-6 py-4 whitespace-nowrap">
                                <div className="flex items-center">
                                  <span className="text-lg font-normal">
                                    Jollof Rice
                                  </span>
                                </div>
                              </td>
                              <td className="px-6 py-4 whitespace-nowrap">
                                <div className="flex justify-center items-center">
                                  <span className="text-lg font-normal">
                                    14
                                  </span>
                                </div>
                              </td>
                              <td className="px-6 py-4 whitespace-nowrap">
                                <div className="text-lg text-gray-900">
                                  1 Month
                                </div>
                              </td>
                              <td className="px-6 py-4 whitespace-nowrap">
                                <div className="text-lg text-gray-900">
                                  ₦1,900
                                </div>
                              </td>
                              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                                <div className="inline-flex items-center">
                                  <span className="text-lg text-gray-900">
                                    1 bag (25kg)
                                  </span>
                                </div>
                              </td>
                              <td className="px-6 py-4 whitespace-nowrap">
                                <div className="text-lg text-gray-900">
                                  ₦1,900
                                </div>
                              </td>
                            </tr>
                            <tr>
                              <td className="px-6 py-4 whitespace-nowrap">
                                <div className="flex items-center">
                                  <span className="text-lg font-normal">
                                    Jollof Rice
                                  </span>
                                </div>
                              </td>
                              <td className="px-6 py-4 whitespace-nowrap">
                                <div className="flex justify-center items-center">
                                  <span className="text-lg font-normal">
                                    14
                                  </span>
                                </div>
                              </td>
                              <td className="px-6 py-4 whitespace-nowrap">
                                <div className="text-lg text-gray-900">
                                  1 Month
                                </div>
                              </td>
                              <td className="px-6 py-4 whitespace-nowrap">
                                <div className="text-lg text-gray-900">
                                  ₦1,900
                                </div>
                              </td>
                              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                                <div className="inline-flex items-center">
                                  <span className="text-lg text-gray-900">
                                    1 bag (25kg)
                                  </span>
                                </div>
                              </td>
                              <td className="px-6 py-4 whitespace-nowrap">
                                <div className="text-lg text-gray-900">
                                  ₦1,900
                                </div>
                              </td>
                            </tr>
                            <tr>
                              <td className="px-6 py-4 whitespace-nowrap">
                                <div className="flex items-center">
                                  <span className="text-lg font-normal">
                                    Jollof Rice
                                  </span>
                                </div>
                              </td>
                              <td className="px-6 py-4 whitespace-nowrap">
                                <div className="flex justify-center items-center">
                                  <span className="text-lg font-normal">
                                    14
                                  </span>
                                </div>
                              </td>
                              <td className="px-6 py-4 whitespace-nowrap">
                                <div className="text-lg text-gray-900">
                                  1 Month
                                </div>
                              </td>
                              <td className="px-6 py-4 whitespace-nowrap">
                                <div className="text-lg text-gray-900">
                                  ₦1,900
                                </div>
                              </td>
                              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                                <div className="inline-flex items-center">
                                  <span className="text-lg text-gray-900">
                                    1 bag (25kg)
                                  </span>
                                </div>
                              </td>
                              <td className="px-6 py-4 whitespace-nowrap">
                                <div className="text-lg text-gray-900">
                                  ₦1,900
                                </div>
                              </td>
                            </tr>
                          </tbody>
                        </table>
                      </div>
                    </div>
                  </div>

                  <div className="flex justify-between items-center my-10">
                    <div>
                      <button
                        className="font-bold text-xl ml-6"
                        style={{ color: "#333333" }}
                      >
                        <Link href="/foodcalculator">Back</Link>
                      </button>
                    </div>
                    <div className="max-w-md inline-flex items-center">
                      <button
                        className="font-bold text-xl ml-6"
                        style={{ color: "#DF421A" }}
                        onClick={() => setInnerPage(2)}
                      >
                        Compare Food Price
                      </button>
                      <button
                        className="ml-6 px-10 py-2.5 text-white text-lg font-bold rounded-3xl block"
                        style={{ backgroundColor: "#4D966D" }}
                      >
                        <Link href="/preorder/delivery-options">Pre-order</Link>
                      </button>
                    </div>
                  </div>
                </div>
              )}

              {innerPage === 2 && (
                <div className="transition duration-300 ease-in-out">
                  <div className="mt-4 sm:block lg:flex justify-between items-center max-w-5xl mx-auto">
                    <div>
                      <label
                        className="text-base font-normal p-text"
                        style={{ color: "#696F79" }}
                        htmlFor="username"
                      >
                        Type of Food*
                      </label>
                      <div
                        className={`relative ${pageStyles.soupeselect} py-3`}
                      >
                        <select
                          className="border bg-white rounded px-3 py-2 outline-none p-text font-normal text-sm placeholder-gray-300"
                          style={{ borderColor: "#8692A6", width: "450px" }}
                        >
                          <option className="py-1">
                            Search for the food item
                          </option>
                          <option className="py-1">Option 2</option>
                          <option className="py-1">Option 3</option>
                        </select>
                      </div>
                    </div>
                    <div>
                      <label
                        className="text-base font-normal p-text"
                        style={{ color: "#696F79" }}
                        htmlFor="username"
                      >
                        Quantity*
                      </label>
                      <div
                        className={`relative ${pageStyles.soupeselect} py-3`}
                      >
                        <select
                          className="border bg-white rounded px-3 py-2 outline-none p-text font-normal text-sm placeholder-gray-300"
                          style={{ borderColor: "#8692A6", width: "450px" }}
                        >
                          <option className="py-1">
                            Select your preferred quantity/unit
                          </option>
                          <option className="py-1">Option 2</option>
                          <option className="py-1">Option 3</option>
                        </select>
                      </div>
                    </div>
                  </div>
                  <div className="mt-4 sm:block lg:flex justify-between items-center max-w-5xl mx-auto">
                    <div className="-my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
                      <div className="py-2 align-middle inline-block min-w-full sm:px-6 lg:px-8">
                        <div className="shadow overflow-hidden border-b border-gray-200 sm:rounded-lg">
                          <table className="min-w-full divide-y divide-gray-200">
                            <thead className="bg-gray-50">
                              <tr>
                                <th
                                  scope="col"
                                  className="px-6 py-3 text-left text-lg font-medium text-gray-500 capitalize tracking-wider"
                                >
                                  Ingredient
                                </th>
                                <th
                                  scope="col"
                                  className="px-6 py-3 text-left text-lg font-medium text-gray-500 capitalize tracking-wider"
                                >
                                  Quantity
                                </th>
                                <th
                                  scope="col"
                                  className="px-6 py-3 text-left text-lg font-medium text-gray-500 capitalize tracking-wider"
                                >
                                  Unit Price
                                </th>
                              </tr>
                            </thead>
                            <tbody className="bg-white divide-y divide-gray-200">
                              <tr>
                                <td className="px-6 py-4 whitespace-nowrap">
                                  <div className="flex items-center">
                                    <span className="text-lg font-normal">
                                      Rice
                                    </span>
                                  </div>
                                </td>
                                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                                  <div className="inline-flex items-center">
                                    <span className="text-lg text-gray-900">
                                      1 bag (25kg)
                                    </span>
                                  </div>
                                </td>
                                <td className="px-6 py-4 whitespace-nowrap">
                                  <div className="text-lg text-gray-900">
                                    ₦1,900
                                  </div>
                                </td>
                              </tr>
                              <tr>
                                <td className="px-6 py-4 whitespace-nowrap">
                                  <div className="flex items-center">
                                    <span className="text-lg font-normal">
                                      Rice
                                    </span>
                                  </div>
                                </td>
                                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                                  <div className="inline-flex items-center">
                                    <span className="text-lg text-gray-900">
                                      1 bag (25kg)
                                    </span>
                                  </div>
                                </td>
                                <td className="px-6 py-4 whitespace-nowrap">
                                  <div className="text-lg text-gray-900">
                                    ₦1,900
                                  </div>
                                </td>
                              </tr>
                              <tr>
                                <td className="px-6 py-4 whitespace-nowrap">
                                  <div className="flex items-center">
                                    <span className="text-lg font-normal">
                                      Curry
                                    </span>
                                  </div>
                                </td>
                                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                                  <div className="inline-flex items-center">
                                    <span className="text-lg text-gray-900">
                                      3 Sachets
                                    </span>
                                  </div>
                                </td>
                                <td className="px-6 py-4 whitespace-nowrap">
                                  <div className="text-lg text-gray-900">
                                    ₦100
                                  </div>
                                </td>
                              </tr>
                              <tr>
                                <td className="px-6 py-4 whitespace-nowrap">
                                  <div className="flex items-center">
                                    <span className="text-lg font-normal">
                                      Maggi
                                    </span>
                                  </div>
                                </td>
                                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                                  <div className="inline-flex items-center">
                                    <span className="text-lg text-gray-900">
                                      1 Pack
                                    </span>
                                  </div>
                                </td>
                                <td className="px-6 py-4 whitespace-nowrap">
                                  <div className="text-lg text-gray-900">
                                    ₦750
                                  </div>
                                </td>
                              </tr>
                              <tr>
                                <td className="px-6 py-4 whitespace-nowrap">
                                  <div className="flex items-center">
                                    <span className="text-lg font-normal">
                                      Tomato Paste
                                    </span>
                                  </div>
                                </td>
                                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                                  <div className="inline-flex items-center">
                                    <span className="text-lg text-gray-900">
                                      1 big can
                                    </span>
                                  </div>
                                </td>
                                <td className="px-6 py-4 whitespace-nowrap">
                                  <div className="text-lg text-gray-900">
                                    ₦650
                                  </div>
                                </td>
                              </tr>
                              <tr>
                                <td className="px-6 py-4 whitespace-nowrap">
                                  <div className="flex items-center">
                                    <span className="text-lg font-normal">
                                      Bell Pepper
                                    </span>
                                  </div>
                                </td>
                                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                                  <div className="inline-flex items-center">
                                    <span className="text-lg text-gray-900">
                                      1 basket
                                    </span>
                                  </div>
                                </td>
                                <td className="px-6 py-4 whitespace-nowrap">
                                  <div className="text-lg text-gray-900">
                                    ₦1,800
                                  </div>
                                </td>
                              </tr>
                              <tr>
                                <td className="px-6 py-4 whitespace-nowrap">
                                  <div className="flex items-center">
                                    <span className="text-lg font-normal">
                                      Jollof Rice
                                    </span>
                                  </div>
                                </td>
                                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                                  <div className="inline-flex items-center">
                                    <span className="text-lg text-gray-900">
                                      1 bag (25kg)
                                    </span>
                                  </div>
                                </td>
                                <td className="px-6 py-4 whitespace-nowrap">
                                  <div className="text-lg text-gray-900">
                                    ₦1,900
                                  </div>
                                </td>
                              </tr>
                            </tbody>
                          </table>
                        </div>
                      </div>
                    </div>
                    <div className="-my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
                      <div className="py-2 align-middle inline-block min-w-full sm:px-6 lg:px-8">
                        <div className="shadow overflow-hidden border-b border-gray-200 sm:rounded-lg">
                          <table className="min-w-full divide-y divide-gray-200">
                            <thead className="bg-gray-50">
                              <tr>
                                <th
                                  scope="col"
                                  className="px-6 py-3 text-left text-lg font-medium text-gray-500 capitalize tracking-wider"
                                >
                                  Ingredient
                                </th>
                                <th
                                  scope="col"
                                  className="px-6 py-3 text-left text-lg font-medium text-gray-500 capitalize tracking-wider"
                                >
                                  Quantity
                                </th>
                                <th
                                  scope="col"
                                  className="px-6 py-3 text-left text-lg font-medium text-gray-500 capitalize tracking-wider"
                                >
                                  Unit Price
                                </th>
                              </tr>
                            </thead>
                            <tbody className="bg-white divide-y divide-gray-200">
                              <tr>
                                <td className="px-6 py-4 whitespace-nowrap">
                                  <div className="flex items-center">
                                    <span className="text-lg font-normal">
                                      Rice
                                    </span>
                                  </div>
                                </td>
                                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                                  <div className="inline-flex items-center">
                                    <span className="text-lg text-gray-900">
                                      1 bag (25kg)
                                    </span>
                                  </div>
                                </td>
                                <td className="px-6 py-4 whitespace-nowrap">
                                  <div className="text-lg text-gray-900">
                                    ₦1,900
                                  </div>
                                </td>
                              </tr>
                              <tr>
                                <td className="px-6 py-4 whitespace-nowrap">
                                  <div className="flex items-center">
                                    <span className="text-lg font-normal">
                                      Rice
                                    </span>
                                  </div>
                                </td>
                                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                                  <div className="inline-flex items-center">
                                    <span className="text-lg text-gray-900">
                                      1 bag (25kg)
                                    </span>
                                  </div>
                                </td>
                                <td className="px-6 py-4 whitespace-nowrap">
                                  <div className="text-lg text-gray-900">
                                    ₦1,900
                                  </div>
                                </td>
                              </tr>
                              <tr>
                                <td className="px-6 py-4 whitespace-nowrap">
                                  <div className="flex items-center">
                                    <span className="text-lg font-normal">
                                      Curry
                                    </span>
                                  </div>
                                </td>
                                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                                  <div className="inline-flex items-center">
                                    <span className="text-lg text-gray-900">
                                      3 Sachets
                                    </span>
                                  </div>
                                </td>
                                <td className="px-6 py-4 whitespace-nowrap">
                                  <div className="text-lg text-gray-900">
                                    ₦100
                                  </div>
                                </td>
                              </tr>
                              <tr>
                                <td className="px-6 py-4 whitespace-nowrap">
                                  <div className="flex items-center">
                                    <span className="text-lg font-normal">
                                      Maggi
                                    </span>
                                  </div>
                                </td>
                                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                                  <div className="inline-flex items-center">
                                    <span className="text-lg text-gray-900">
                                      1 Pack
                                    </span>
                                  </div>
                                </td>
                                <td className="px-6 py-4 whitespace-nowrap">
                                  <div className="text-lg text-gray-900">
                                    ₦750
                                  </div>
                                </td>
                              </tr>
                              <tr>
                                <td className="px-6 py-4 whitespace-nowrap">
                                  <div className="flex items-center">
                                    <span className="text-lg font-normal">
                                      Tomato Paste
                                    </span>
                                  </div>
                                </td>
                                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                                  <div className="inline-flex items-center">
                                    <span className="text-lg text-gray-900">
                                      1 big can
                                    </span>
                                  </div>
                                </td>
                                <td className="px-6 py-4 whitespace-nowrap">
                                  <div className="text-lg text-gray-900">
                                    ₦650
                                  </div>
                                </td>
                              </tr>
                              <tr>
                                <td className="px-6 py-4 whitespace-nowrap">
                                  <div className="flex items-center">
                                    <span className="text-lg font-normal">
                                      Bell Pepper
                                    </span>
                                  </div>
                                </td>
                                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                                  <div className="inline-flex items-center">
                                    <span className="text-lg text-gray-900">
                                      1 basket
                                    </span>
                                  </div>
                                </td>
                                <td className="px-6 py-4 whitespace-nowrap">
                                  <div className="text-lg text-gray-900">
                                    ₦1,800
                                  </div>
                                </td>
                              </tr>
                              <tr>
                                <td className="px-6 py-4 whitespace-nowrap">
                                  <div className="flex items-center">
                                    <span className="text-lg font-normal">
                                      Jollof Rice
                                    </span>
                                  </div>
                                </td>
                                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                                  <div className="inline-flex items-center">
                                    <span className="text-lg text-gray-900">
                                      1 bag (25kg)
                                    </span>
                                  </div>
                                </td>
                                <td className="px-6 py-4 whitespace-nowrap">
                                  <div className="text-lg text-gray-900">
                                    ₦1,900
                                  </div>
                                </td>
                              </tr>
                            </tbody>
                          </table>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="flex justify-between items-center my-10">
                    <div>
                      <button
                        className="font-bold text-xl ml-6"
                        style={{ color: "#333333" }}
                        onClick={() => setInnerPage(1)}
                      >
                        Back
                      </button>
                    </div>
                    <div className="max-w-md inline-flex items-center">
                      <button
                        className="px-10 py-2.5 text-white text-lg font-bold rounded-3xl block"
                        style={{ backgroundColor: "#4D966D" }}
                      >
                        <Link href="/preorder/delivery-options">Pre-order</Link>
                      </button>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
      <Footer></Footer>
    </div>
  );
}

export default ComparePrice;
