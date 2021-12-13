import Header from "../../components/header";
import Footer from "../../components/footer";
import Head from "next/head";
import pageStyles from "../../styles/Pages.module.css";
import Link from "next/link";

function Wallet() {
  return (
    <div style={{ fontFamily: "Open Sans, sans-serif" }}>
      <Head>
        <title>Soupe - Wallet</title>
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
              Wallet
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
            className={`flex items-center mx-10 md:mx-14 py-6 ${pageStyles.walletpg}`}
          >
            <div
              className={`grid grid-cols-1 gap-6 md:gap-8 xl:gap-16 2xl:gap-8 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-4 2xl:grid-cols-4 sm:mx-auto xl:mx-0 my-5`}
            >
              <div
                className={`relative h-44 bg-white bg-cover bg-center group rounded-2xl transition duration-300 ease-in-out  ${pageStyles.walletgrid}`}
                style={{ width: "290px" }}
              >
                <div className="card-txt w-36 flex items-start">
                  <h5 className="text-lg font-bold leading-7 h-12 pl-5 py-8">
                    Total Inflows
                  </h5>
                </div>
                <div className="flex items-end">
                  <div className="inline-flex h-32 px-5 py-12">
                    <span className="text-3xl font-bold">₦190,070</span>
                    <span
                      className="text-xs font-bold mt-3.5"
                      style={{ color: "#4D966D" }}
                    >
                      +2.4%
                    </span>
                  </div>
                </div>
              </div>
              <div
                className="relative h-44 bg-white bg-cover bg-center group rounded-2xl transition duration-300 ease-in-out"
                style={{ width: "290px" }}
              >
                <div className="card-txt w-36 flex items-start">
                  <h5 className="text-lg font-bold leading-7 h-12 pl-5 py-8">
                    Total Outflows
                  </h5>
                </div>
                <div className="flex items-end">
                  <div className="inline-flex h-32 px-5 py-12">
                    <span className="text-3xl font-bold">₦190,070</span>
                    <span
                      className="text-xs font-bold mt-3.5"
                      style={{ color: "#EC5A35" }}
                    >
                      +2.4%
                    </span>
                  </div>
                </div>
              </div>
              <div
                className="relative h-44 bg-white bg-cover bg-center group rounded-2xl transition duration-300 ease-in-out"
                style={{ width: "290px" }}
              >
                <div className="card-txt flex items-start">
                  <h5 className="text-lg font-bold leading-7 h-12 pl-5 py-8">
                    Available Cash
                  </h5>
                </div>
                <div className="flex items-end">
                  <div className="inline-flex h-32 px-5 py-12">
                    <span className="text-3xl font-bold">₦190,070</span>
                    <span
                      className="text-xs font-bold mt-3.5"
                      style={{ color: "#407BFF" }}
                    >
                      +2.4%
                    </span>
                  </div>
                </div>
              </div>
              <div
                className={`mx-auto h-44 flex flex-col ${pageStyles.loanbtn}`}
              >
                <button
                  className="px-12 py-4 font-bold text-lg text-white"
                  style={{ backgroundColor: "#4D966D", borderRadius: "40px" }}
                >
                  Pre-order
                </button>

                <button
                  className="font-bold text-xl mt-12"
                  style={{ color: "#DF421A" }}
                >
                  Take a Loan
                </button>
              </div>
            </div>
          </div>
          <div className="lg:flex justify-between mx-10 md:mx-14 pt-6 pb-14">
            <div className="lg:w-3/6">
              <div className="flex justify-between items-center py-4">
                <h5 className="text-xl font-bold">Transcation History</h5>
                <div className="text-lg font-bold" style={{ color: "#DF421A" }}>
                  <Link href="#">See all</Link>
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
                            Date
                          </th>
                          <th
                            scope="col"
                            className="px-6 py-3 text-left text-lg font-medium text-gray-500 capitalize tracking-wider"
                          >
                            Invoice Number
                          </th>
                          <th
                            scope="col"
                            className="px-6 py-3 text-left text-lg font-medium text-gray-500 capitalize tracking-wider"
                          >
                            Amount
                          </th>
                          <th
                            scope="col"
                            className="px-6 py-3 text-left text-lg font-medium text-gray-500 capitalize tracking-wider"
                          >
                            Category
                          </th>
                        </tr>
                      </thead>
                      <tbody className="bg-white divide-y divide-gray-200">
                        <tr>
                          <td className="px-6 py-4 whitespace-nowrap">
                            <div className="flex items-center">
                              <span className="text-lg font-normal">
                                19 July 2021
                              </span>
                            </div>
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                            <div className="inline-flex items-center">
                              <span className="text-lg text-gray-900">
                                21-11765-15
                              </span>
                            </div>
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap">
                            <div className="text-lg text-gray-900">₦1,900</div>
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap">
                            <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800">
                              Inflow
                            </span>
                          </td>
                        </tr>
                        <tr>
                          <td className="px-6 py-4 whitespace-nowrap">
                            <div className="flex items-center">
                              <span className="text-lg font-normal">
                                19 July 2021
                              </span>
                            </div>
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                            <div className="inline-flex items-center">
                              <span className="text-lg text-gray-900">
                                21-11765-15
                              </span>
                            </div>
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap">
                            <div className="text-lg text-gray-900">₦300</div>
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap">
                            <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-red-200 text-green-800">
                              Outflow
                            </span>
                          </td>
                        </tr>
                        <tr>
                          <td className="px-6 py-4 whitespace-nowrap">
                            <div className="flex items-center">
                              <span className="text-lg font-normal">
                                19 July 2021
                              </span>
                            </div>
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                            <div className="inline-flex items-center">
                              <span className="text-lg text-gray-900">
                                21-11765-15
                              </span>
                            </div>
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap">
                            <div className="text-lg text-gray-900">₦300</div>
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap">
                            <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-red-200 text-green-800">
                              Outflow
                            </span>
                          </td>
                        </tr>
                        <tr>
                          <td className="px-6 py-4 whitespace-nowrap">
                            <div className="flex items-center">
                              <span className="text-lg font-normal">
                                19 July 2021
                              </span>
                            </div>
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                            <div className="inline-flex items-center">
                              <span className="text-lg text-gray-900">
                                21-11765-15
                              </span>
                            </div>
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap">
                            <div className="text-lg text-gray-900">₦750</div>
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap">
                            <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-red-200 text-green-800">
                              Outflow
                            </span>
                          </td>
                        </tr>
                        <tr>
                          <td className="px-6 py-4 whitespace-nowrap">
                            <div className="flex items-center">
                              <span className="text-lg font-normal">
                                19 July 2021
                              </span>
                            </div>
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                            <div className="inline-flex items-center">
                              <span className="text-lg text-gray-900">
                                21-11765-15
                              </span>
                            </div>
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap">
                            <div className="text-lg text-gray-900">₦650</div>
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap">
                            <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-red-200 text-green-800">
                              Outflow
                            </span>
                          </td>
                        </tr>
                        <tr>
                          <td className="px-6 py-4 whitespace-nowrap">
                            <div className="flex items-center">
                              <span className="text-lg font-normal">
                                19 July 2021
                              </span>
                            </div>
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                            <div className="inline-flex items-center">
                              <span className="text-lg text-gray-900">
                                21-11765-15
                              </span>
                            </div>
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap">
                            <div className="text-lg text-gray-900">₦1,900</div>
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap">
                            <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-red-200 text-green-800">
                              Outflow
                            </span>
                          </td>
                        </tr>
                        <tr>
                          <td className="px-6 py-4 whitespace-nowrap">
                            <div className="flex items-center">
                              <span className="text-lg font-normal">
                                19 July 2021
                              </span>
                            </div>
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                            <div className="inline-flex items-center">
                              <span className="text-lg text-gray-900">
                                21-11765-15
                              </span>
                            </div>
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap">
                            <div className="text-lg text-gray-900">₦1,900</div>
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap">
                            <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800">
                              Inflow
                            </span>
                          </td>
                        </tr>
                        <tr>
                          <td className="px-6 py-4 whitespace-nowrap">
                            <div className="flex items-center">
                              <span className="text-lg font-normal">
                                19 July 2021
                              </span>
                            </div>
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                            <div className="inline-flex items-center">
                              <span className="text-lg text-gray-900">
                                21-11765-15
                              </span>
                            </div>
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap">
                            <div className="text-lg text-gray-900">₦800</div>
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap">
                            <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800">
                              Inflow
                            </span>
                          </td>
                        </tr>
                        <tr>
                          <td className="px-6 py-4 whitespace-nowrap">
                            <div className="flex items-center">
                              <span className="text-lg font-normal">
                                19 July 2021
                              </span>
                            </div>
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                            <div className="inline-flex items-center">
                              <span className="text-lg text-gray-900">
                                21-11765-15
                              </span>
                            </div>
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap">
                            <div className="text-lg text-gray-900">₦1,200</div>
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap">
                            <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-red-200 text-green-800">
                              Outflow
                            </span>
                          </td>
                        </tr>
                        <tr>
                          <td className="px-6 py-4 whitespace-nowrap">
                            <div className="flex items-center">
                              <span className="text-lg font-normal">
                                19 July 2021
                              </span>
                            </div>
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                            <div className="inline-flex items-center">
                              <span className="text-lg text-gray-900">
                                21-11765-15
                              </span>
                            </div>
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap">
                            <div className="text-lg text-gray-900">₦900</div>
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap">
                            <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800">
                              Inflow
                            </span>
                          </td>
                        </tr>
                        <tr>
                          <td className="px-6 py-4 whitespace-nowrap">
                            <div className="flex items-center">
                              <span className="text-lg font-normal">
                                19 July 2021
                              </span>
                            </div>
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                            <div className="inline-flex items-center">
                              <span className="text-lg text-gray-900">
                                21-11765-15
                              </span>
                            </div>
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap">
                            <div className="text-lg text-gray-900">₦1,100</div>
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap">
                            <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800">
                              Inflow
                            </span>
                          </td>
                        </tr>
                        <tr>
                          <td className="px-6 py-4 whitespace-nowrap">
                            <div className="flex items-center">
                              <span className="text-lg font-normal">
                                19 July 2021
                              </span>
                            </div>
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                            <div className="inline-flex items-center">
                              <span className="text-lg text-gray-900">
                                21-11765-15
                              </span>
                            </div>
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap">
                            <div className="text-lg text-gray-900">₦2,500</div>
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap">
                            <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-red-200 text-green-800">
                              Inflow
                            </span>
                          </td>
                        </tr>
                        <tr>
                          <td className="px-6 py-4 whitespace-nowrap">
                            <div className="flex items-center">
                              <span className="text-lg font-normal">
                                19 July 2021
                              </span>
                            </div>
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                            <div className="inline-flex items-center">
                              <span className="text-lg text-gray-900">
                                21-11765-15
                              </span>
                            </div>
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap">
                            <div className="text-lg text-gray-900">₦1,900</div>
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap">
                            <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800">
                              Inflow
                            </span>
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
            </div>
            <div className="lg:w-2/6 flex flex-col">
              <div className="bg-white py-5 px-8 mt-8 lg:mt-4">
                <div>
                  <svg
                    width="233"
                    height="233"
                    viewBox="0 0 233 233"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    className={`mx-auto ${pageStyles.pie_chart}`}
                  >
                    <rect width="233" height="233" rx="116.5" fill="#4D966D" />
                    <g style={{ mixBlendMode: "overlay" }}>
                      <path
                        d="M116.263 116.263H232.525C232.525 148.278 219.282 177.263 198.243 198.243L116.263 116.263Z"
                        fill="#407BFF"
                      />
                    </g>
                    <path
                      d="M116.263 116.262H232.525C232.525 84.2471 219.282 55.2628 198.243 34.2822L116.263 116.262Z"
                      fill="#EC5A35"
                    />
                    <path
                      d="M116.263 116.263L116.263 -9.91821e-05C148.278 -9.91821e-05 177.263 13.2431 198.243 34.2825L116.263 116.263Z"
                      fill="#EC5A35"
                    />
                  </svg>
                </div>
                <div
                  className={`grid grid-cols-2 gap-4 py-3 ml-10 lg:ml-0 xl:ml-10 ${pageStyles.pie_stats}`}
                >
                  <div className="block">
                    <svg
                      width="14"
                      height="14"
                      viewBox="0 0 14 14"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <rect width="14" height="14" rx="7" fill="#4D966D" />
                    </svg>
                    <p>Total Inflow</p>
                  </div>
                  <div className="block">
                    <svg
                      width="14"
                      height="14"
                      viewBox="0 0 14 14"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <rect width="14" height="14" rx="7" fill="#407BFF" />
                    </svg>
                    <p>Available cash</p>
                  </div>
                  <div className="block">
                    <svg
                      width="14"
                      height="14"
                      viewBox="0 0 14 14"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <rect width="14" height="14" rx="7" fill="#EC5A35" />
                    </svg>
                    <p>Total Outflow</p>
                  </div>
                </div>
              </div>
              <div className="bg-white py-5 px-8 mx-auto mt-8">
                <div className="inline-flex items-center">
                  <div>
                    <h5 className="text-xl font-bold">Why Take a Loan</h5>
                    <ul className="list-disc text-lg font-normal pt-5">
                      <li className="py-2">It is quick and reliable</li>
                      <li className="py-2">
                        Lorem Ipsum has been the industry&#39;s standard dummy
                        text ever since the 1500s
                      </li>
                      <li className="py-2">
                        Lorem Ipsum has been the industry&#39;s standard dummy
                        text ever since the 1500s
                      </li>
                      <li className="py-2">
                        Lorem Ipsum has been the industry&#39;s standard dummy
                        text ever{" "}
                      </li>
                    </ul>
                  </div>
                  <div className="ml-5">
                    <svg
                      width="31"
                      height="454"
                      viewBox="0 0 31 454"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M0 38.1665C0 37.0761 0.297128 36.0064 0.859451 35.0722L19.8595 3.50767C22.9955 -1.70213 31 0.52116 31 6.602V447.46C31 454.283 21.4256 455.814 19.2989 449.331L0.298915 391.411C0.100895 390.808 0 390.176 0 389.541V38.1665Z"
                        fill="#D6FDE7"
                      />
                    </svg>
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

export default Wallet;
