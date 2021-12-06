import Header from "../../components/header";
import Footer from "../../components/footer";
import Head from "next/head";
import pageStyles from "../../styles/Pages.module.css";
import Link from "next/link";
import Image from "next/image";

function Loan() {
  return (
    <div style={{ fontFamily: "Open Sans, sans-serif" }}>
      <Head>
        <title>Soupe - Loan</title>
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
              Loan
            </h1>
            <p className="font-normal text-2xl leading-8 md:w-4/6 lg:w-3/5 py-6">
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
          <div
            className={`max-w-7xl mx-10 md:mx-20 lg:mx-48 xl:mx-32 py-6 ${pageStyles.walletpg}`}
          >
            <div className="bg-white inline-flex items-center py-4 px-6 rounded-md">
              <div className="grid grid-cols-1 gap-6 lg:gap-14 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-4">
                <div className="flex flex-col p-3">
                  <div className="mb-14">
                    <div>
                      <p className="text-lg font-normal text-gray-400">
                        Creditor
                      </p>
                      <h6 className="mt-2 text-xl font-bold">
                        Eyowo Microfinance
                      </h6>
                    </div>
                    <div className="mt-4">
                      <p className="text-lg font-normal text-gray-400">
                        Current Loan
                      </p>
                      <h6 className="mt-2 text-xl font-bold">₦750,000,900</h6>
                    </div>
                  </div>
                  <div>
                    <button
                      className="px-8 py-4 font-bold text-lg text-white"
                      style={{
                        backgroundColor: "#4D966D",
                        borderRadius: "40px",
                      }}
                    >
                      View details
                    </button>
                  </div>
                </div>
                <div className="flex flex-col bg-gray-200 p-3 rounded-md">
                  <div className="flex justify-between mb-2">
                    <div>
                      <Image
                        src="/assets/img/Group-12832.png"
                        alt="renmoney-logo"
                        width={82}
                        height={55}
                      />
                    </div>
                    <div
                      className="text-lg font-bold"
                      style={{ color: "#4D966D" }}
                    >
                      10%PA
                    </div>
                  </div>
                  <div className="mb-10">
                    <div>
                      <p className="text-base font-normal text-gray-400">
                        Available Credit
                      </p>
                      <h6 className="text-xl font-bold">₦700,000</h6>
                    </div>
                    <div>
                      <p className="text-base font-normal text-gray-400 mt-1.5">
                        Duration
                      </p>
                      <h6 className="text-xl font-bold">3 months</h6>
                    </div>
                  </div>
                  <div>
                    <button
                      className="px-6 py-2 font-bold text-lg text-white"
                      style={{
                        backgroundColor: "#4D966D",
                        borderRadius: "40px",
                      }}
                    >
                      Take a loan
                    </button>
                  </div>
                </div>
                <div className="flex flex-col bg-gray-200 p-3 rounded-md">
                  <div className="flex justify-between mb-2">
                    <div className="block">
                      <div>
                        <Image
                          src="/assets/img/image-48.png"
                          alt="cowrywise-logo"
                          width={28}
                          height={24}
                        />
                      </div>
                      <Image
                        src="/assets/img/image-47.png"
                        alt="cowrywise-logo"
                        width={84}
                        height={18}
                      />
                    </div>
                    <div
                      className="text-lg font-bold"
                      style={{ color: "#4D966D" }}
                    >
                      10%PA
                    </div>
                  </div>
                  <div className="mb-10">
                    <div>
                      <p className="text-base font-normal text-gray-400">
                        Available Credit
                      </p>
                      <h6 className="text-xl font-bold">₦700,000</h6>
                    </div>
                    <div>
                      <p className="text-base font-normal text-gray-400 mt-1.5">
                        Duration
                      </p>
                      <h6 className="text-xl font-bold">3 months</h6>
                    </div>
                  </div>
                  <div>
                    <button
                      className="px-6 py-2 font-bold text-lg text-white"
                      style={{
                        backgroundColor: "#4D966D",
                        borderRadius: "40px",
                      }}
                    >
                      Take a loan
                    </button>
                  </div>
                </div>
                <div className="flex flex-col bg-gray-200 p-3 rounded-md">
                  <div className="flex justify-between mb-2">
                    <div>
                      <Image
                        src="/assets/img/Group-12833.png"
                        alt="kuda-logo"
                        width={82}
                        height={55}
                      />
                    </div>
                    <div
                      className="text-lg font-bold"
                      style={{ color: "#4D966D" }}
                    >
                      10%PA
                    </div>
                  </div>
                  <div className="mb-10">
                    <div>
                      <p className="text-base font-normal text-gray-400">
                        Available Credit
                      </p>
                      <h6 className="text-xl font-bold">₦700,000</h6>
                    </div>
                    <div>
                      <p className="text-base font-normal text-gray-400 mt-1.5">
                        Duration
                      </p>
                      <h6 className="text-xl font-bold">3 months</h6>
                    </div>
                  </div>
                  <div>
                    <button
                      className="px-6 py-2 font-bold text-lg text-white"
                      style={{
                        backgroundColor: "#4D966D",
                        borderRadius: "40px",
                      }}
                    >
                      Take a loan
                    </button>
                  </div>
                </div>
              </div>
              <div className="ml-6">
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M12 3.28125C16.8141 3.28125 20.7188 7.18594 20.7188 12C20.7188 16.8141 16.8141 20.7188 12 20.7188C7.18594 20.7188 3.28125 16.8141 3.28125 12C3.28125 7.18594 7.18594 3.28125 12 3.28125ZM9.5625 8.92734C9.5625 9.16875 9.67734 9.39375 9.87188 9.53437L13.2797 12L9.87188 14.4633C9.67734 14.6039 9.5625 14.8313 9.5625 15.0703V16.1695C9.5625 16.3219 9.73594 16.4109 9.86016 16.3219L15.6258 12.15C15.6497 12.1327 15.6692 12.11 15.6827 12.0837C15.6962 12.0575 15.7032 12.0284 15.7032 11.9988C15.7032 11.9693 15.6962 11.9402 15.6827 11.9139C15.6692 11.8876 15.6497 11.8649 15.6258 11.8477L9.86016 7.67578C9.73594 7.58672 9.5625 7.67578 9.5625 7.82812V8.92734Z"
                    fill="#E7E9EA"
                  />
                  <path
                    d="M12 1.5C17.7984 1.5 22.5 6.20156 22.5 12C22.5 17.7984 17.7984 22.5 12 22.5C6.20156 22.5 1.5 17.7984 1.5 12C1.5 6.20156 6.20156 1.5 12 1.5ZM12 20.7188C16.8141 20.7188 20.7188 16.8141 20.7188 12C20.7188 7.18594 16.8141 3.28125 12 3.28125C7.18594 3.28125 3.28125 7.18594 3.28125 12C3.28125 16.8141 7.18594 20.7188 12 20.7188Z"
                    fill="#333333"
                  />
                  <path
                    d="M9.8601 7.67608L15.6257 11.848C15.6497 11.8652 15.6692 11.8879 15.6827 11.9142C15.6961 11.9405 15.7031 11.9696 15.7031 11.9991C15.7031 12.0287 15.6961 12.0578 15.6827 12.084C15.6692 12.1103 15.6497 12.133 15.6257 12.1503L9.8601 16.3222C9.73588 16.4112 9.56244 16.3222 9.56244 16.1698V15.0706C9.56244 14.8315 9.67729 14.6042 9.87182 14.4636L13.2796 12.0003L9.87182 9.53467C9.67729 9.39405 9.56244 9.16905 9.56244 8.92764V7.82842C9.56244 7.67608 9.73588 7.58702 9.8601 7.67608Z"
                    fill="#333333"
                  />
                </svg>
              </div>
            </div>
          </div>
          <div className="mx-8 md:mx-24 lg:mx-48 xl:mx-32 pt-8 pb-12">
            <h6 className="text-xl font-bold text-start mb-4">
              Recent Activities
            </h6>
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
                            Activity
                          </th>
                          <th
                            scope="col"
                            className="px-6 py-3 text-left text-lg font-bold text-gray-500 capitalize tracking-wider"
                          >
                            Creditor
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
                                  Oct 13, 2021 at 08:05 am
                                </div>
                              </div>
                            </div>
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap">
                            <div className="text-lg text-gray-900">
                              Loan Application
                            </div>
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap">
                            <div className="text-lg text-gray-900">Eyowo</div>
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
                                  Oct 13, 2021 at 08:05 am
                                </div>
                              </div>
                            </div>
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap">
                            <div className="text-lg text-gray-900">
                              Loan Application
                            </div>
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap">
                            <div className="text-lg text-gray-900">Eyowo</div>
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap text-lg text-gray-900">
                            ₦300
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap">
                            <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800">
                              Verified
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
                                  Oct 13, 2021 at 08:05 am
                                </div>
                              </div>
                            </div>
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap">
                            <div className="text-lg text-gray-900">
                              Loan Application
                            </div>
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap">
                            <div className="text-lg text-gray-900">Eyowo</div>
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap text-lg text-gray-900">
                            ₦300
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap">
                            <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800">
                              Verified
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
                                  Oct 13, 2021 at 08:05 am
                                </div>
                              </div>
                            </div>
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap">
                            <div className="text-lg text-gray-900">
                              Document Submission
                            </div>
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap">
                            <div className="text-lg text-gray-900">Eyowo</div>
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap text-lg text-gray-900">
                            ₦750
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap">
                            <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-yellow-100 text-green-800">
                              Unverified
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
                                  Oct 13, 2021 at 08:05 am
                                </div>
                              </div>
                            </div>
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap">
                            <div className="text-lg text-gray-900">
                              Loan Application
                            </div>
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap">
                            <div className="text-lg text-gray-900">Eyowo</div>
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap text-lg text-gray-900">
                            ₦650
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap">
                            <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800">
                              Verified
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
                                  Oct 13, 2021 at 08:05 am
                                </div>
                              </div>
                            </div>
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap">
                            <div className="text-lg text-gray-900">
                              Loan Application
                            </div>
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap">
                            <div className="text-lg text-gray-900">Eyowo</div>
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap text-lg text-gray-900">
                            ₦1,900
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap">
                            <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800">
                              Verified
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
                                  Oct 13, 2021 at 08:05 am
                                </div>
                              </div>
                            </div>
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap">
                            <div className="text-lg text-gray-900">
                              Loan Approval
                            </div>
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap">
                            <div className="text-lg text-gray-900">Eyowo</div>
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap text-lg text-gray-900">
                            ₦1,900
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap">
                            <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-red-100 text-green-800">
                              Denied
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
                                  Oct 13, 2021 at 08:05 am
                                </div>
                              </div>
                            </div>
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap">
                            <div className="text-lg text-gray-900">
                              Document Submission
                            </div>
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap">
                            <div className="text-lg text-gray-900">Eyowo</div>
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap text-lg text-gray-900">
                            ₦800
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap">
                            <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800">
                              Verified
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
                                  Oct 13, 2021 at 08:05 am
                                </div>
                              </div>
                            </div>
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap">
                            <div className="text-lg text-gray-900">
                              Loan Application
                            </div>
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap">
                            <div className="text-lg text-gray-900">Eyowo</div>
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
                                  Oct 13, 2021 at 08:05 am
                                </div>
                              </div>
                            </div>
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap">
                            <div className="text-lg text-gray-900">
                              Loan Application
                            </div>
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap">
                            <div className="text-lg text-gray-900">Eyowo</div>
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

export default Loan;
