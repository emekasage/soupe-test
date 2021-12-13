import Header from "../../components/header";
import Footer from "../../components/footer";
import Head from "next/head";
import pageStyles from "../../styles/Pages.module.css";
import Link from "next/link";
import Image from "next/image";

function CecCenter() {
  return (
    <div style={{ fontFamily: "Open Sans, sans-serif" }}>
      <Head>
        <title>Soupe - Admin | CEC Center</title>
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
        <div className="sm:block md:flex justify-between mx-14 my-10">
          <div className="head-txt">
            <h1 className="text-6xl font-bold big-txt sm:pt-14 md:pt-20">
              CEC Center
            </h1>
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
          <div
            className={`max-w-7xl mx-10 md:mx-20 lg:mx-16 xl:mx-14 py-6 ${pageStyles.walletpg}`}
          >
            <div className="lg:flex justify-between items-center">
              <div className="flex justify-between items-center bg-white p-5 rounded-md md:w-full lg:w-2/6">
                <div className="flex flex-col">
                  <Image
                    src="/assets/img/Ellipse-115.png"
                    alt="Soupe Logo"
                    width={102}
                    height={102}
                  />
                  <button className="my-2.5 py-2 px-3 text-white font-bold rounded-3xl text-lg text-center bg-green-600 p-text hover:bg-white hover:text-green-600 border-2 hover:border-green-600">
                    Verify
                  </button>
                </div>
                <div className="flex flex-col text-base font-bold ml-8">
                  <p className="pb-2">Akinade Esther</p>
                  <p className="pb-2">0708 675 3452</p>
                  <p className="pb-2">
                    12C, Garki Awolowo Estate, Ikeja, Lagos
                  </p>
                  <p className="pb-2">i.sample@gmail.com</p>
                </div>
              </div>
              <div className="bg-white py-6 pl-6 pr-28 rounded-md md:w-full lg:w-7/12">
                <div className="md:flex justify-between items-center mb-10">
                  <div>
                    <p className="text-sm font-normal text-gray-400">
                      Total Amount of Transaction
                    </p>
                    <h6 className="mt-1 text-xl font-bold">₦ 28,000.00</h6>
                  </div>
                  <div>
                    <p className="text-sm font-normal text-gray-400">
                      Total Amount of Pending Transaction
                    </p>
                    <h6 className="mt-1 text-xl font-bold text-yellow-500">
                      ₦ 28,000.00
                    </h6>
                  </div>
                </div>
                <div className="md:flex justify-between items-center">
                  <div>
                    <p className="text-sm font-normal text-gray-400">
                      Total Amount of Successful Transaction
                    </p>
                    <h6 className="mt-1 text-xl font-bold text-green-600">
                      ₦ 28,000.00
                    </h6>
                  </div>
                  <div className="">
                    <p className="text-sm font-normal text-gray-400">
                      Total Amount of Unsuccessful Transaction
                    </p>
                    <h6 className="mt-1 text-xl font-bold text-red-600">
                      ₦ 28,000.00
                    </h6>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="mx-8 md:mx-24 lg:mx-16 xl:mx-14 pt-8 pb-12">
            <div className="flex justify-between items-center py-4">
              <h5 className="text-xl font-bold">Transactions</h5>
            </div>
            <div className="flex flex-col">
              <div className="-my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
                <div className="py-2 align-middle inline-block min-w-full sm:px-6 lg:px-8">
                  <div className="shadow overflow-hidden border-b border-gray-200 sm:rounded-lg">
                    <table className="min-w-full divide-y divide-gray-200">
                      <thead className="bg-gray-50">
                        <tr>
                          <th
                            scope="col"
                            className="px-6 py-3 text-left text-lg font-bold text-gray-500 capitalize tracking-wider"
                          >
                            Date
                          </th>
                          <th
                            scope="col"
                            className="px-6 py-3 text-left text-lg font-bold text-gray-500 capitalize tracking-wider"
                          >
                            Tracking ID
                          </th>
                          <th
                            scope="col"
                            className="px-6 py-3 text-left text-lg font-bold text-gray-500 capitalize tracking-wider"
                          >
                            Expected Arrival Date
                          </th>
                          <th
                            scope="col"
                            className="px-6 py-3 text-left text-lg font-bold text-gray-500 capitalize tracking-wider"
                          >
                            Consumer Contact
                          </th>
                          <th
                            scope="col"
                            className="px-6 py-3 text-left text-lg font-bold text-gray-500 capitalize tracking-wider"
                          >
                            Expected Dispatch Date
                          </th>
                          <th
                            scope="col"
                            className="px-6 py-3 text-left text-lg font-bold text-gray-500 capitalize tracking-wider"
                          >
                            Amount
                          </th>
                          <th
                            scope="col"
                            className="px-6 py-3 text-left text-lg font-bold text-gray-500 capitalize tracking-wider"
                          >
                            Status
                          </th>
                          <th scope="col" className="relative px-6 py-3">
                            <span className="sr-only">Edit</span>
                          </th>
                        </tr>
                      </thead>
                      <tbody className="bg-white divide-y divide-gray-200">
                        <tr>
                          <td className="px-6 py-4 whitespace-nowrap">
                            <div className="flex items-center">
                              <div>
                                <div className="text-lg font-medium text-gray-900">
                                  19 Jul 2021
                                </div>
                              </div>
                            </div>
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap">
                            <div className="text-lg text-gray-900">558612</div>
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap">
                            <div className="text-lg text-gray-900">
                              19 Jul 2021
                            </div>
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap">
                            <div className="text-lg text-gray-900">
                              (209) 555-0104
                            </div>
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap text-lg text-gray-900">
                            22 Oct, 2020
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap text-lg text-gray-900">
                            ₦1,900
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap">
                            <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-yellow-100 text-green-800">
                              Pending
                            </span>
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                            <div className="cursor-pointer">
                              <Link href="#" passHref={true}>
                                <svg
                                  width="20"
                                  height="20"
                                  viewBox="0 0 20 20"
                                  fill="none"
                                  xmlns="http://www.w3.org/2000/svg"
                                >
                                  <path
                                    d="M10 0C15.52 0 20 4.48 20 10C20 15.52 15.52 20 10 20C4.48 20 0 15.52 0 10C0 4.48 4.48 0 10 0ZM10 9H6V11H10V14L14 10L10 6V9Z"
                                    fill="#4E9B87"
                                  />
                                </svg>
                              </Link>
                            </div>
                          </td>
                        </tr>
                        <tr>
                          <td className="px-6 py-4 whitespace-nowrap">
                            <div className="flex items-center">
                              <div>
                                <div className="text-lg font-medium text-gray-900">
                                  19 Jul 2021
                                </div>
                              </div>
                            </div>
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap">
                            <div className="text-lg text-gray-900">558612</div>
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap">
                            <div className="text-lg text-gray-900">
                              19 Jul 2021
                            </div>
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap">
                            <div className="text-lg text-gray-900">
                              (209) 555-0104
                            </div>
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap text-lg text-gray-900">
                            22 Oct, 2020
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap text-lg text-gray-900">
                            ₦1,900
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap">
                            <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-yellow-100 text-green-800">
                              Pending
                            </span>
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                            <div className="cursor-pointer">
                              <Link href="#" passHref={true}>
                                <svg
                                  width="20"
                                  height="20"
                                  viewBox="0 0 20 20"
                                  fill="none"
                                  xmlns="http://www.w3.org/2000/svg"
                                >
                                  <path
                                    d="M10 0C15.52 0 20 4.48 20 10C20 15.52 15.52 20 10 20C4.48 20 0 15.52 0 10C0 4.48 4.48 0 10 0ZM10 9H6V11H10V14L14 10L10 6V9Z"
                                    fill="#4E9B87"
                                  />
                                </svg>
                              </Link>
                            </div>
                          </td>
                        </tr>
                        <tr>
                          <td className="px-6 py-4 whitespace-nowrap">
                            <div className="flex items-center">
                              <div>
                                <div className="text-lg font-medium text-gray-900">
                                  19 Jul 2021
                                </div>
                              </div>
                            </div>
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap">
                            <div className="text-lg text-gray-900">558612</div>
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap">
                            <div className="text-lg text-gray-900">
                              19 Jul 2021
                            </div>
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap">
                            <div className="text-lg text-gray-900">
                              (209) 555-0104
                            </div>
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap text-lg text-gray-900">
                            22 Oct, 2020
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap text-lg text-gray-900">
                            ₦1,900
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap">
                            <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-yellow-100 text-green-800">
                              Pending
                            </span>
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                            <div className="cursor-pointer">
                              <Link href="#" passHref={true}>
                                <svg
                                  width="20"
                                  height="20"
                                  viewBox="0 0 20 20"
                                  fill="none"
                                  xmlns="http://www.w3.org/2000/svg"
                                >
                                  <path
                                    d="M10 0C15.52 0 20 4.48 20 10C20 15.52 15.52 20 10 20C4.48 20 0 15.52 0 10C0 4.48 4.48 0 10 0ZM10 9H6V11H10V14L14 10L10 6V9Z"
                                    fill="#4E9B87"
                                  />
                                </svg>
                              </Link>
                            </div>
                          </td>
                        </tr>
                        <tr>
                          <td className="px-6 py-4 whitespace-nowrap">
                            <div className="flex items-center">
                              <div>
                                <div className="text-lg font-medium text-gray-900">
                                  19 Jul 2021
                                </div>
                              </div>
                            </div>
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap">
                            <div className="text-lg text-gray-900">558612</div>
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap">
                            <div className="text-lg text-gray-900">
                              19 Jul 2021
                            </div>
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap">
                            <div className="text-lg text-gray-900">
                              (209) 555-0104
                            </div>
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap text-lg text-gray-900">
                            22 Oct, 2020
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap text-lg text-gray-900">
                            ₦1,900
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap">
                            <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800">
                              Received
                            </span>
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                            <div className="cursor-pointer">
                              <Link href="#" passHref={true}>
                                <svg
                                  width="20"
                                  height="20"
                                  viewBox="0 0 20 20"
                                  fill="none"
                                  xmlns="http://www.w3.org/2000/svg"
                                >
                                  <path
                                    d="M10 0C15.52 0 20 4.48 20 10C20 15.52 15.52 20 10 20C4.48 20 0 15.52 0 10C0 4.48 4.48 0 10 0ZM10 9H6V11H10V14L14 10L10 6V9Z"
                                    fill="#4E9B87"
                                  />
                                </svg>
                              </Link>
                            </div>
                          </td>
                        </tr>
                        <tr>
                          <td className="px-6 py-4 whitespace-nowrap">
                            <div className="flex items-center">
                              <div>
                                <div className="text-lg font-medium text-gray-900">
                                  19 Jul 2021
                                </div>
                              </div>
                            </div>
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap">
                            <div className="text-lg text-gray-900">558612</div>
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap">
                            <div className="text-lg text-gray-900">
                              19 Jul 2021
                            </div>
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap">
                            <div className="text-lg text-gray-900">
                              (209) 555-0104
                            </div>
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap text-lg text-gray-900">
                            22 Oct, 2020
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap text-lg text-gray-900">
                            ₦1,900
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap">
                            <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800">
                              Received
                            </span>
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                            <div className="cursor-pointer">
                              <Link href="#" passHref={true}>
                                <svg
                                  width="20"
                                  height="20"
                                  viewBox="0 0 20 20"
                                  fill="none"
                                  xmlns="http://www.w3.org/2000/svg"
                                >
                                  <path
                                    d="M10 0C15.52 0 20 4.48 20 10C20 15.52 15.52 20 10 20C4.48 20 0 15.52 0 10C0 4.48 4.48 0 10 0ZM10 9H6V11H10V14L14 10L10 6V9Z"
                                    fill="#4E9B87"
                                  />
                                </svg>
                              </Link>
                            </div>
                          </td>
                        </tr>
                        <tr>
                          <td className="px-6 py-4 whitespace-nowrap">
                            <div className="flex items-center">
                              <div>
                                <div className="text-lg font-medium text-gray-900">
                                  19 Jul 2021
                                </div>
                              </div>
                            </div>
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap">
                            <div className="text-lg text-gray-900">558612</div>
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap">
                            <div className="text-lg text-gray-900">
                              19 Jul 2021
                            </div>
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap">
                            <div className="text-lg text-gray-900">
                              (209) 555-0104
                            </div>
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap text-lg text-gray-900">
                            22 Oct, 2020
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap text-lg text-gray-900">
                            ₦1,900
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap">
                            <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800">
                              Received
                            </span>
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                            <div className="cursor-pointer">
                              <Link href="#" passHref={true}>
                                <svg
                                  width="20"
                                  height="20"
                                  viewBox="0 0 20 20"
                                  fill="none"
                                  xmlns="http://www.w3.org/2000/svg"
                                >
                                  <path
                                    d="M10 0C15.52 0 20 4.48 20 10C20 15.52 15.52 20 10 20C4.48 20 0 15.52 0 10C0 4.48 4.48 0 10 0ZM10 9H6V11H10V14L14 10L10 6V9Z"
                                    fill="#4E9B87"
                                  />
                                </svg>
                              </Link>
                            </div>
                          </td>
                        </tr>
                        <tr>
                          <td className="px-6 py-4 whitespace-nowrap">
                            <div className="flex items-center">
                              <div>
                                <div className="text-lg font-medium text-gray-900">
                                  19 Jul 2021
                                </div>
                              </div>
                            </div>
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap">
                            <div className="text-lg text-gray-900">558612</div>
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap">
                            <div className="text-lg text-gray-900">
                              19 Jul 2021
                            </div>
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap">
                            <div className="text-lg text-gray-900">
                              (209) 555-0104
                            </div>
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap text-lg text-gray-900">
                            22 Oct, 2020
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap text-lg text-gray-900">
                            ₦1,900
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap">
                            <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800">
                              Received
                            </span>
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                            <div className="cursor-pointer">
                              <Link href="#" passHref={true}>
                                <svg
                                  width="20"
                                  height="20"
                                  viewBox="0 0 20 20"
                                  fill="none"
                                  xmlns="http://www.w3.org/2000/svg"
                                >
                                  <path
                                    d="M10 0C15.52 0 20 4.48 20 10C20 15.52 15.52 20 10 20C4.48 20 0 15.52 0 10C0 4.48 4.48 0 10 0ZM10 9H6V11H10V14L14 10L10 6V9Z"
                                    fill="#4E9B87"
                                  />
                                </svg>
                              </Link>
                            </div>
                          </td>
                        </tr>
                        <tr>
                          <td className="px-6 py-4 whitespace-nowrap">
                            <div className="flex items-center">
                              <div>
                                <div className="text-lg font-medium text-gray-900">
                                  19 Jul 2021
                                </div>
                              </div>
                            </div>
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap">
                            <div className="text-lg text-gray-900">558612</div>
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap">
                            <div className="text-lg text-gray-900">
                              19 Jul 2021
                            </div>
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap">
                            <div className="text-lg text-gray-900">
                              (209) 555-0104
                            </div>
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap text-lg text-gray-900">
                            22 Oct, 2020
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap text-lg text-gray-900">
                            ₦1,900
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap">
                            <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800">
                              Received
                            </span>
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                            <div className="cursor-pointer">
                              <Link href="#" passHref={true}>
                                <svg
                                  width="20"
                                  height="20"
                                  viewBox="0 0 20 20"
                                  fill="none"
                                  xmlns="http://www.w3.org/2000/svg"
                                >
                                  <path
                                    d="M10 0C15.52 0 20 4.48 20 10C20 15.52 15.52 20 10 20C4.48 20 0 15.52 0 10C0 4.48 4.48 0 10 0ZM10 9H6V11H10V14L14 10L10 6V9Z"
                                    fill="#4E9B87"
                                  />
                                </svg>
                              </Link>
                            </div>
                          </td>
                        </tr>
                        <tr>
                          <td className="px-6 py-4 whitespace-nowrap">
                            <div className="flex items-center">
                              <div>
                                <div className="text-lg font-medium text-gray-900">
                                  19 Jul 2021
                                </div>
                              </div>
                            </div>
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap">
                            <div className="text-lg text-gray-900">558612</div>
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap">
                            <div className="text-lg text-gray-900">
                              19 Jul 2021
                            </div>
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap">
                            <div className="text-lg text-gray-900">
                              (209) 555-0104
                            </div>
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap text-lg text-gray-900">
                            22 Oct, 2020
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap text-lg text-gray-900">
                            ₦1,900
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap">
                            <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800">
                              Received
                            </span>
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                            <div className="cursor-pointer">
                              <Link href="#" passHref={true}>
                                <svg
                                  width="20"
                                  height="20"
                                  viewBox="0 0 20 20"
                                  fill="none"
                                  xmlns="http://www.w3.org/2000/svg"
                                >
                                  <path
                                    d="M10 0C15.52 0 20 4.48 20 10C20 15.52 15.52 20 10 20C4.48 20 0 15.52 0 10C0 4.48 4.48 0 10 0ZM10 9H6V11H10V14L14 10L10 6V9Z"
                                    fill="#4E9B87"
                                  />
                                </svg>
                              </Link>
                            </div>
                          </td>
                        </tr>
                        <tr>
                          <td className="px-6 py-4 whitespace-nowrap">
                            <div className="flex items-center">
                              <div>
                                <div className="text-lg font-medium text-gray-900">
                                  19 Jul 2021
                                </div>
                              </div>
                            </div>
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap">
                            <div className="text-lg text-gray-900">558612</div>
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap">
                            <div className="text-lg text-gray-900">
                              19 Jul 2021
                            </div>
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap">
                            <div className="text-lg text-gray-900">
                              (209) 555-0104
                            </div>
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap text-lg text-gray-900">
                            22 Oct, 2020
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap text-lg text-gray-900">
                            ₦1,900
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap">
                            <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800">
                              Received
                            </span>
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                            <div className="cursor-pointer">
                              <Link href="#" passHref={true}>
                                <svg
                                  width="20"
                                  height="20"
                                  viewBox="0 0 20 20"
                                  fill="none"
                                  xmlns="http://www.w3.org/2000/svg"
                                >
                                  <path
                                    d="M10 0C15.52 0 20 4.48 20 10C20 15.52 15.52 20 10 20C4.48 20 0 15.52 0 10C0 4.48 4.48 0 10 0ZM10 9H6V11H10V14L14 10L10 6V9Z"
                                    fill="#4E9B87"
                                  />
                                </svg>
                              </Link>
                            </div>
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer></Footer>
    </div>
  );
}

export default CecCenter;
