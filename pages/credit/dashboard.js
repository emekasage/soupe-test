import CreditHeader from "../../components/creditheader";
import Head from "next/head";
import pageStyles from "../../styles/Pages.module.css";
import Link from "next/link";
import CreditChart from "../../components/creditchart";

function CreditDashboard() {
  return (
    <div className="container">
      <Head>
        <title>Preorder - Credit Dashboard</title>
        <meta name="keywords" content="Preorder, Grains, Vegetables"></meta>
      </Head>

      <div
        className={`overflow-hidden ${pageStyles.cec_dash}`}
        style={{
          backgroundColor: "#F2C94C",
          height: "345px",
          fontFamily: "Open Sans, sans-serif",
          zIndex: "1",
        }}
      >
        <CreditHeader></CreditHeader>
      </div>
      <div
        className={`mx-14 md:flex justify-between -mt-32 bg-transparent`}
        style={{ zIndex: "1000" }}
      >
        <div className="bg-white max-w-4xl w-8/12 h-72 rounded">
          <div className="w-full py-2.5 sm:px-6 lg:px-4 flex justify-between">
            <div className="inline-flex items-center">
              <h5
                className="font-bold leading-7 pr-4"
                style={{ fontSize: "10px" }}
              >
                Total visits
              </h5>
              <svg
                width="15"
                height="15"
                viewBox="0 0 15 15"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M7.32147 13.307C10.6358 13.307 13.3226 10.6202 13.3226 7.30585C13.3226 3.9915 10.6358 1.30469 7.32147 1.30469C4.00712 1.30469 1.32031 3.9915 1.32031 7.30585C1.32031 10.6202 4.00712 13.307 7.32147 13.307Z"
                  stroke="#D0D1D2"
                  strokeWidth="1.20023"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M7.32422 4.90527V7.30574"
                  stroke="#D0D1D2"
                  strokeWidth="1.20023"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <circle cx="7.32277" cy="9.70656" r="0.600116" fill="#D0D1D2" />
              </svg>
            </div>
            <div className="inline-flex items-center">
              <div className="border border-gray-300 p-1.5 inline-flex items-center">
                <span
                  className="font-normal mr-2.5"
                  style={{ fontSize: "11px", color: "#11263C" }}
                >
                  March 2020
                </span>
                <span>
                  <svg
                    width="12"
                    height="12"
                    viewBox="0 0 12 12"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M1.4043 3.19963C1.4043 2.68406 1.82225 2.26611 2.33781 2.26611H8.87241C9.38797 2.26611 9.80592 2.68406 9.80592 3.19963V9.73422C9.80592 10.2498 9.38797 10.6677 8.87241 10.6677H2.33781C1.82225 10.6677 1.4043 10.2498 1.4043 9.73422V3.19963Z"
                      stroke="#422F8A"
                      strokeOpacity="0.87"
                      strokeWidth="0.933514"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M7.4707 1.33252V3.19955"
                      stroke="#422F8A"
                      strokeOpacity="0.87"
                      strokeWidth="0.933514"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M3.73633 1.33252V3.19955"
                      stroke="#422F8A"
                      strokeOpacity="0.87"
                      strokeWidth="0.933514"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M1.4043 5.06641H9.80592"
                      stroke="#422F8A"
                      strokeOpacity="0.87"
                      strokeWidth="0.933514"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </span>
              </div>
              <div className="b0rder-gray-200 p-2.5 ml-2">
                <svg
                  width="12"
                  height="12"
                  viewBox="0 0 12 12"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M5.96476 7.03841C6.48033 7.03841 6.89828 6.62047 6.89828 6.1049C6.89828 5.58933 6.48033 5.17139 5.96476 5.17139C5.4492 5.17139 5.03125 5.58933 5.03125 6.1049C5.03125 6.62047 5.4492 7.03841 5.96476 7.03841Z"
                    stroke="#422F8A"
                    strokeOpacity="0.87"
                    strokeWidth="0.933514"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M9.69914 7.03841C10.2147 7.03841 10.6327 6.62047 10.6327 6.1049C10.6327 5.58933 10.2147 5.17139 9.69914 5.17139C9.18357 5.17139 8.76562 5.58933 8.76562 6.1049C8.76562 6.62047 9.18357 7.03841 9.69914 7.03841Z"
                    stroke="#422F8A"
                    strokeOpacity="0.87"
                    strokeWidth="0.933514"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M2.23039 7.03841C2.74595 7.03841 3.1639 6.62047 3.1639 6.1049C3.1639 5.58933 2.74595 5.17139 2.23039 5.17139C1.71482 5.17139 1.29688 5.58933 1.29688 6.1049C1.29688 6.62047 1.71482 7.03841 2.23039 7.03841Z"
                    stroke="#422F8A"
                    strokeOpacity="0.87"
                    strokeWidth="0.933514"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </div>
            </div>
          </div>
          <div>
            <CreditChart></CreditChart>
          </div>
        </div>
        <div className="flex flex-col bg-white p-5 rounded-md md:w-full lg:w-3/12 mt-5 lg:mt-0 lg:ml-8">
          <div className="w-52 divide-y divide-gray-800">
            <div className="mb-5">
              <p className="text-gray-400 text-base">Product Sold</p>
              <div className="flex justify-between items-center">
                <h6 className="font-bold text-2xl">4,567</h6>
                <div className="inline-flex items-center my-4">
                  <span className="text-green-500 pr-2 text-sm">5%</span>
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
                      d="M2.54319 11.8821C2.31361 12.2137 2.55095 12.6667 2.95428 12.6667H13.0457C13.449 12.6667 13.6864 12.2137 13.4568 11.8821L8.4111 4.59381C8.21227 4.30661 7.78773 4.30661 7.5889 4.59381L2.54319 11.8821Z"
                      fill="#42C884"
                    />
                  </svg>
                </div>
              </div>
            </div>
            <div>
              <p className="text-gray-400 text-base mt-5">Product Sold</p>
              <div className="flex justify-between items-center">
                <h6 className="font-bold text-2xl">4,567</h6>
                <div className="inline-flex items-center my-4">
                  <span className="text-green-500 pr-2 text-sm">5%</span>
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
                      d="M2.54319 11.8821C2.31361 12.2137 2.55095 12.6667 2.95428 12.6667H13.0457C13.449 12.6667 13.6864 12.2137 13.4568 11.8821L8.4111 4.59381C8.21227 4.30661 7.78773 4.30661 7.5889 4.59381L2.54319 11.8821Z"
                      fill="#42C884"
                    />
                  </svg>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div
        className={`bg-cover pt-48 pb-20 -mt-40 ${pageStyles.dashbg}`}
        style={{ zIndex: "1" }}
      >
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-2 xl:grid-cols-2 mx-14">
          <div className="order-history">
            <div className="flex justify-between">
              <h4 className="font-bold text-2xl">New Credit Request</h4>
              <div className="see_more inline-flex">
                <span
                  className=" flex items-center text-sm font-bold"
                  style={{ color: "#DF421A" }}
                >
                  <Link href="#">View All</Link>
                </span>
                <span className="flex items-center ml-4">
                  <svg
                    width="16"
                    height="16"
                    viewBox="0 0 16 16"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M12.172 7.00005L6.808 1.63605L8.222 0.222046L16 8.00005L8.222 15.778L6.808 14.364L12.172 9.00005H0V7.00005H12.172Z"
                      fill="#DF421A"
                    />
                  </svg>
                </span>
              </div>
            </div>
            <div className="py-5 w-full">
              <div className="overflow-hidden rounded border-b border-gray-200">
                <table className="min-w-full">
                  <thead className="bg-transparent text-gray-400">
                    <tr>
                      <th className="text-left py-3 px-4 capitalize font-semibold text-base">
                        Date
                      </th>
                      <th className="text-left py-3 px-4 capitalize font-semibold text-base">
                        Customer Name
                      </th>
                      <th className="text-left py-3 px-4 capitalize font-semibold text-base">
                        Customer Contact
                      </th>
                      <th className="text-left py-3 px-4 capitalize font-semibold text-base">
                        Amount
                      </th>
                    </tr>
                  </thead>
                  <tbody
                    className="text-gray-700"
                    style={{ fontFamily: "Open Sans, sans-serif" }}
                  >
                    <tr className="bg-gray-400 bg-opacity-10 rounded">
                      <td className="text-left py-3 px-4 text-gray-800 text-sm">
                        19 Jul 2021
                      </td>
                      <td className="text-left py-3 px-4 text-gray-800 text-sm">
                        Floyd Miles
                      </td>
                      <td className="text-left py-3 px-4 text-sm">
                        (209) 555-0104
                      </td>
                      <td className="text-left py-3 px-4 text-sm">₦1,900</td>
                    </tr>
                    <tr>
                      <td className="text-left py-3 px-4 text-gray-800 text-sm">
                        19 Jul 2021
                      </td>
                      <td className="text-left py-3 px-4 text-gray-800 text-sm">
                        Bessie Cooper
                      </td>
                      <td className="text-left py-3 px-4 text-sm">
                        (209) 555-0104
                      </td>
                      <td className="text-left py-3 px-4 text-sm">₦1,900</td>
                    </tr>
                    <tr className="bg-gray-400 bg-opacity-10 rounded">
                      <td className="text-left py-3 px-4 text-gray-800 text-sm">
                        19 Jul 2021
                      </td>
                      <td className="text-left py-3 px-4 text-gray-800 text-sm">
                        Robert Fox
                      </td>
                      <td className="text-left py-3 px-4 text-sm">
                        (209) 555-0104
                      </td>
                      <td className="text-left py-3 px-4 text-sm">₦1,900</td>
                    </tr>
                    <tr>
                      <td className="text-left py-3 px-4 text-gray-800 text-sm">
                        19 Jul 2021
                      </td>
                      <td className="text-left py-3 px-4 text-gray-800 text-sm">
                        Courtney Henry
                      </td>
                      <td className="text-left py-3 px-4 text-sm">
                        (209) 555-0104
                      </td>
                      <td className="text-left py-3 px-4 text-sm">₦1,900</td>
                    </tr>
                    <tr className="bg-gray-400 bg-opacity-10 rounded">
                      <td className="text-left py-3 px-4 text-gray-800 text-sm">
                        19 Jul 2021
                      </td>
                      <td className="text-left py-3 px-4 text-gray-800 text-sm">
                        Wade Warren
                      </td>
                      <td className="text-left py-3 px-4 text-sm">
                        (209) 555-0104
                      </td>
                      <td className="text-left py-3 px-4 text-sm">₦1,900</td>
                    </tr>
                    <tr>
                      <td className="text-left py-3 px-4 text-gray-800 text-sm">
                        19 Jul 2021
                      </td>
                      <td className="text-left py-3 px-4 text-gray-800 text-sm">
                        Esther Howard
                      </td>
                      <td className="text-left py-3 px-4 text-sm">
                        (209) 555-0104
                      </td>
                      <td className="text-left py-3 px-4 text-sm">₦1,900</td>
                    </tr>
                    <tr>
                      <td className="text-left py-3 px-4 text-gray-800 text-sm">
                        19 Jul 2021
                      </td>
                      <td className="text-left py-3 px-4 text-gray-800 text-sm">
                        Marvin McKinney
                      </td>
                      <td className="text-left py-3 px-4 text-sm">
                        (209) 555-0104
                      </td>
                      <td className="text-left py-3 px-4 text-sm">₦1,900</td>
                    </tr>
                    <tr>
                      <td className="text-left py-3 px-4 text-gray-800 text-sm">
                        19 Jul 2021
                      </td>
                      <td className="text-left py-3 px-4 text-gray-800 text-sm">
                        Savannah Ngu
                      </td>
                      <td className="text-left py-3 px-4 text-sm">
                        (209) 555-0104
                      </td>
                      <td className="text-left py-3 px-4 text-sm">₦1,900</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
          <div className="order-history">
            <div className="flex justify-between">
              <h4 className="font-bold text-2xl">Transaction History</h4>
              <div className="see_more inline-flex">
                <span
                  className=" flex items-center text-sm font-bold"
                  style={{ color: "#DF421A" }}
                >
                  <Link href="#">View All</Link>
                </span>
                <span className="flex items-center ml-4">
                  <svg
                    width="16"
                    height="16"
                    viewBox="0 0 16 16"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M12.172 7.00005L6.808 1.63605L8.222 0.222046L16 8.00005L8.222 15.778L6.808 14.364L12.172 9.00005H0V7.00005H12.172Z"
                      fill="#DF421A"
                    />
                  </svg>
                </span>
              </div>
            </div>
            <div className="py-5 w-full">
              <div className="overflow-hidden rounded border-b border-gray-200">
                <table className="min-w-full">
                  <thead className="bg-transparent text-gray-400">
                    <tr>
                      <th className="text-left py-3 px-4 capitalize font-semibold text-base">
                        Date
                      </th>
                      <th className="text-left py-3 px-4 capitalize font-semibold text-base">
                        Customer Name
                      </th>
                      <th className="text-left py-3 px-4 capitalize font-semibold text-base">
                        Customer Contact
                      </th>
                      <th className="text-left py-3 px-4 capitalize font-semibold text-base">
                        Amount
                      </th>
                      <th className="text-left py-3 px-4 capitalize font-semibold text-base">
                        Status
                      </th>
                    </tr>
                  </thead>
                  <tbody
                    className="text-gray-700"
                    style={{ fontFamily: "Open Sans, sans-serif" }}
                  >
                    <tr className="bg-gray-400 bg-opacity-10 rounded">
                      <td className="text-left py-3 px-4 text-gray-800 text-sm">
                        19 Jul 2021
                      </td>
                      <td className="text-left py-3 px-4 text-gray-800 text-sm">
                        Floyd Miles
                      </td>
                      <td className="text-left py-3 px-4 text-sm">
                        (209) 555-0104
                      </td>
                      <td className="text-left py-3 px-4 text-sm">₦1,900</td>
                      <td
                        className="text-left py-3 px-4 font-bold text-sm"
                        style={{ color: "#E79704" }}
                      >
                        Pending
                      </td>
                    </tr>
                    <tr>
                      <td className="text-left py-3 px-4 text-gray-800 text-sm">
                        19 Jul 2021
                      </td>
                      <td className="text-left py-3 px-4 text-gray-800 text-sm">
                        Bessie Cooper
                      </td>
                      <td className="text-left py-3 px-4 text-sm">
                        (209) 555-0104
                      </td>
                      <td className="text-left py-3 px-4 text-sm">₦1,900</td>
                      <td
                        className="text-left py-3 px-4 font-bold text-sm"
                        style={{ color: "#E79704" }}
                      >
                        Pending
                      </td>
                    </tr>
                    <tr className="bg-gray-400 bg-opacity-10 rounded">
                      <td className="text-left py-3 px-4 text-gray-800 text-sm">
                        19 Jul 2021
                      </td>
                      <td className="text-left py-3 px-4 text-gray-800 text-sm">
                        Robert Fox
                      </td>
                      <td className="text-left py-3 px-4 text-sm">
                        (209) 555-0104
                      </td>
                      <td className="text-left py-3 px-4 text-sm">₦1,900</td>
                      <td
                        className="text-left py-3 px-4 font-bold text-sm"
                        style={{ color: "#E79704" }}
                      >
                        Pending
                      </td>
                    </tr>
                    <tr>
                      <td className="text-left py-3 px-4 text-gray-800 text-sm">
                        19 Jul 2021
                      </td>
                      <td className="text-left py-3 px-4 text-gray-800 text-sm">
                        Courtney Henry
                      </td>
                      <td className="text-left py-3 px-4 text-sm">
                        (209) 555-0104
                      </td>
                      <td className="text-left py-3 px-4 text-sm">₦1,900</td>
                      <td
                        className="text-left py-3 px-4 font-bold text-sm"
                        style={{ color: "#4D966D" }}
                      >
                        Paid
                      </td>
                    </tr>
                    <tr className="bg-gray-400 bg-opacity-10 rounded">
                      <td className="text-left py-3 px-4 text-gray-800 text-sm">
                        19 Jul 2021
                      </td>
                      <td className="text-left py-3 px-4 text-gray-800 text-sm">
                        Wade Warren
                      </td>
                      <td className="text-left py-3 px-4 text-sm">
                        (209) 555-0104
                      </td>
                      <td className="text-left py-3 px-4 text-sm">₦1,900</td>
                      <td
                        className="text-left py-3 px-4 font-bold text-sm"
                        style={{ color: "#4D966D" }}
                      >
                        Paid
                      </td>
                    </tr>
                    <tr>
                      <td className="text-left py-3 px-4 text-gray-800 text-sm">
                        19 Jul 2021
                      </td>
                      <td className="text-left py-3 px-4 text-gray-800 text-sm">
                        Esther Howard
                      </td>
                      <td className="text-left py-3 px-4 text-sm">
                        (209) 555-0104
                      </td>
                      <td className="text-left py-3 px-4 text-sm">₦1,900</td>
                      <td
                        className="text-left py-3 px-4 font-bold text-sm"
                        style={{ color: "#4D966D" }}
                      >
                        Paid
                      </td>
                    </tr>
                    <tr className="bg-gray-400 bg-opacity-10 rounded">
                      <td className="text-left py-3 px-4 text-gray-800 text-sm">
                        19 Jul 2021
                      </td>
                      <td className="text-left py-3 px-4 text-gray-800 text-sm">
                        Marvin McKinney
                      </td>
                      <td className="text-left py-3 px-4 text-sm">
                        (209) 555-0104
                      </td>
                      <td className="text-left py-3 px-4 text-sm">₦1,900</td>
                      <td
                        className="text-left py-3 px-4 font-bold text-sm"
                        style={{ color: "#4D966D" }}
                      >
                        Paid
                      </td>
                    </tr>
                    <tr>
                      <td className="text-left py-3 px-4 text-gray-800 text-sm">
                        19 Jul 2021
                      </td>
                      <td className="text-left py-3 px-4 text-gray-800 text-sm">
                        Savannah Ngu
                      </td>
                      <td className="text-left py-3 px-4 text-sm">
                        (209) 555-0104
                      </td>
                      <td className="text-left py-3 px-4 text-sm">₦1,900</td>
                      <td
                        className="text-left py-3 px-4 font-bold text-sm"
                        style={{ color: "#4D966D" }}
                      >
                        Paid
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
  );
}

export default CreditDashboard;
