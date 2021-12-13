import Header from "../../components/header";
import Head from "next/head";
import pageStyles from "../../styles/Pages.module.css";
import Link from "next/link";

function CecDashboard() {
  return (
    <div>
      <Head>
        <title>Preorder - CEC Dashboard</title>
        <meta name="keywords" content="Preorder, Grains, Vegetables"></meta>
      </Head>

      <div
        className={`overflow-hidden ${pageStyles.cec_dash}`}
        style={{
          backgroundColor: "#F2C94C",
          height: "345px",
          fontFamily: "Open Sans, sans-serif",
        }}
      >
        <Header></Header>
        <div className={`mx-10 md:mx-14 my-12`}>
          <div
            className={`grid grid-cols-1 gap-6 md:gap-8 xl:gap-16 2xl:gap-8 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-4 2xl:grid-cols-4 sm:mx-auto xl:mx-0`}
          >
            <div
              className={`relative h-32 bg-white bg-cover bg-center group rounded-2xl transition duration-300 ease-in-out  ${pageStyles.walletgrid}`}
              style={{ width: "275px" }}
            >
              <div className="card-txt w-36 flex flex-col px-5 py-6">
                <h5 className="text-lg font-bold leading-7 text-gray-500">
                  All Orders
                </h5>
                <h4 className="text-4xl font-bold py-2">190070</h4>
              </div>
            </div>
            <div
              className={`relative h-32 bg-white bg-cover bg-center group rounded-2xl transition duration-300 ease-in-out  ${pageStyles.walletgrid}`}
              style={{ width: "275px" }}
            >
              <div className="card-txt flex flex-col px-5 py-6">
                <h5 className="text-lg font-bold leading-7 text-gray-500">
                  Processed Orders
                </h5>
                <h4 className="text-4xl font-bold py-2">1900000</h4>
              </div>
            </div>
            <div
              className={`relative h-32 bg-white bg-cover bg-center group rounded-2xl transition duration-300 ease-in-out  ${pageStyles.walletgrid}`}
              style={{ width: "275px" }}
            >
              <div className="card-txt flex flex-col px-5 py-6">
                <h5 className="text-lg font-bold leading-7 text-gray-500">
                  Pending Orders
                </h5>
                <h4 className="text-4xl font-bold py-2">70</h4>
              </div>
            </div>
            <div
              className={`relative h-32 bg-white bg-cover bg-center group rounded-2xl transition duration-300 ease-in-out`}
              style={{ width: "275px" }}
            >
              <div className="card-txt flex flex-col px-5 py-6">
                <h5 className="text-lg font-bold leading-7 text-gray-500">
                  Returned Orders
                </h5>
                <h4 className="text-4xl font-bold py-2">10</h4>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className={`bg-cover py-20 ${pageStyles.dashbg}`}>
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-2 xl:grid-cols-2 mx-14">
          <div className="order-history">
            <div className="flex justify-between">
              <h4 className="font-bold text-2xl">Order History</h4>
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
                        Dispatch Date
                      </th>
                      <th className="text-left py-3 px-4 capitalize font-semibold text-base">
                        Tracking ID
                      </th>
                      <th className="text-left py-3 px-4 capitalize font-semibold text-base">
                        Customer Contact
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
                        558612
                      </td>
                      <td className="text-left py-3 px-4 text-sm">
                        (209) 555-0104
                      </td>
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
                        558612
                      </td>
                      <td className="text-left py-3 px-4 text-sm">
                        (209) 555-0104
                      </td>
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
                        558612
                      </td>
                      <td className="text-left py-3 px-4 text-sm">
                        (209) 555-0104
                      </td>
                      <td
                        className="text-left py-3 px-4 font-bold text-sm"
                        style={{ color: "#EC5A35" }}
                      >
                        Returned
                      </td>
                    </tr>
                    <tr>
                      <td className="text-left py-3 px-4 text-gray-800 text-sm">
                        19 Jul 2021
                      </td>
                      <td className="text-left py-3 px-4 text-gray-800 text-sm">
                        558612
                      </td>
                      <td className="text-left py-3 px-4 text-sm">
                        (209) 555-0104
                      </td>
                      <td
                        className="text-left py-3 px-4 font-bold text-sm"
                        style={{ color: "#4D966D" }}
                      >
                        Received
                      </td>
                    </tr>
                    <tr className="bg-gray-400 bg-opacity-10 rounded">
                      <td className="text-left py-3 px-4 text-gray-800 text-sm">
                        19 Jul 2021
                      </td>
                      <td className="text-left py-3 px-4 text-gray-800 text-sm">
                        558612
                      </td>
                      <td className="text-left py-3 px-4 text-sm">
                        (209) 555-0104
                      </td>
                      <td
                        className="text-left py-3 px-4 font-bold text-sm"
                        style={{ color: "#4D966D" }}
                      >
                        Received
                      </td>
                    </tr>
                    <tr>
                      <td className="text-left py-3 px-4 text-gray-800 text-sm">
                        19 Jul 2021
                      </td>
                      <td className="text-left py-3 px-4 text-gray-800 text-sm">
                        558612
                      </td>
                      <td className="text-left py-3 px-4 text-sm">
                        (209) 555-0104
                      </td>
                      <td
                        className="text-left py-3 px-4 font-bold text-sm"
                        style={{ color: "#4D966D" }}
                      >
                        Received
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
          <div className="order-history">
            <div className="flex justify-between">
              <h4 className="font-bold text-2xl">New Orders</h4>
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
                        Dispatch Date
                      </th>
                      <th className="text-left py-3 px-4 capitalize font-semibold text-base">
                        Tracking ID
                      </th>
                      <th className="text-left py-3 px-4 capitalize font-semibold text-base">
                        Customer Contact
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
                        558612
                      </td>
                      <td className="text-left py-3 px-4 text-sm">
                        (209) 555-0104
                      </td>
                    </tr>
                    <tr>
                      <td className="text-left py-3 px-4 text-gray-800 text-sm">
                        19 Jul 2021
                      </td>
                      <td className="text-left py-3 px-4 text-gray-800 text-sm">
                        558612
                      </td>
                      <td className="text-left py-3 px-4 text-sm">
                        (209) 555-0104
                      </td>
                    </tr>
                    <tr className="bg-gray-400 bg-opacity-10 rounded">
                      <td className="text-left py-3 px-4 text-gray-800 text-sm">
                        19 Jul 2021
                      </td>
                      <td className="text-left py-3 px-4 text-gray-800 text-sm">
                        558612
                      </td>
                      <td className="text-left py-3 px-4 text-sm">
                        (209) 555-0104
                      </td>
                    </tr>
                    <tr>
                      <td className="text-left py-3 px-4 text-gray-800 text-sm">
                        19 Jul 2021
                      </td>
                      <td className="text-left py-3 px-4 text-gray-800 text-sm">
                        558612
                      </td>
                      <td className="text-left py-3 px-4 text-sm">
                        (209) 555-0104
                      </td>
                    </tr>
                    <tr className="bg-gray-400 bg-opacity-10 rounded">
                      <td className="text-left py-3 px-4 text-gray-800 text-sm">
                        19 Jul 2021
                      </td>
                      <td className="text-left py-3 px-4 text-gray-800 text-sm">
                        558612
                      </td>
                      <td className="text-left py-3 px-4 text-sm">
                        (209) 555-0104
                      </td>
                    </tr>
                    <tr>
                      <td className="text-left py-3 px-4 text-gray-800 text-sm">
                        19 Jul 2021
                      </td>
                      <td className="text-left py-3 px-4 text-gray-800 text-sm">
                        558612
                      </td>
                      <td className="text-left py-3 px-4 text-sm">
                        (209) 555-0104
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

export default CecDashboard;
