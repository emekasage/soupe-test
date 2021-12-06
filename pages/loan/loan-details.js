import Header from "../../components/header";
import Footer from "../../components/footer";
import Head from "next/head";
import pageStyles from "../../styles/Pages.module.css";
import Link from "next/link";
import Image from "next/image";

function LoanDetails() {
  return (
    <div style={{ fontFamily: "Open Sans, sans-serif" }}>
      <Head>
        <title>Soupe - Loan Details</title>
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
            className={`max-w-7xl mx-10 md:mx-20 lg:mx-16 xl:mx-32 py-6 ${pageStyles.walletpg}`}
          >
            <h6 className="text-gray-500 font-bold text-xl mb-8">
              Loans / <span className="text-gray-900">Loan Details</span>
            </h6>
            <div className="lg:flex justify-between items-center">
              <div className="bg-white p-6 rounded-md md:w-full lg:w-3/6">
                <div className="md:flex justify-between items-center mb-10">
                  <div>
                    <p className="text-lg font-normal text-gray-400">Loan</p>
                    <h6 className="mt-1 text-xl font-bold">₦750,000,900</h6>
                  </div>
                  <div>
                    <p className="text-lg font-normal text-gray-400">
                      Loan Tenure
                    </p>
                    <h6 className="mt-1 text-xl font-bold">6 years</h6>
                  </div>
                  <div>
                    <p className="text-lg font-normal text-gray-400">
                      Interest Rate
                    </p>
                    <h6 className="mt-1 text-xl font-bold">9%</h6>
                  </div>
                </div>
                <div className="md:flex justify-between items-center">
                  <div>
                    <p className="text-lg font-normal text-gray-400">
                      Interest Amount
                    </p>
                    <h6 className="mt-1 text-xl font-bold">₦10,000,900</h6>
                  </div>
                  <div>
                    <p className="text-lg font-normal text-gray-400">
                      Total Repayment
                    </p>
                    <h6 className="mt-1 text-xl font-bold">₦750,000,900</h6>
                  </div>
                  <div></div>
                  <div></div>
                </div>
              </div>
              <div className="flex flex-col bg-white p-5 rounded-md md:w-full lg:w-1/6 mt-5 lg:mt-0 lg:ml-8">
                <h6 className="text-lg font-normal text-gray-400 text-center mb-8">
                  Next Repayment Date
                </h6>
                <div className="text-center block">
                  <h6
                    className="text-xl font-bold"
                    style={{ color: "#4D966D" }}
                  >
                    22
                  </h6>
                  <h6 className="text-lg font-bold">August</h6>
                  <h6 className="text-lg font-bold">2020</h6>
                </div>
              </div>
              <div
                className={`mx-auto h-48 flex flex-col md:w-full lg:w-1/6 mt-5 lg:mt-0 ${pageStyles.loanbtn}`}
              >
                <button
                  className="md:px-10 lg:px-4 xl:px-8 py-4 font-bold text-lg text-white"
                  style={{ backgroundColor: "#4D966D", borderRadius: "40px" }}
                >
                  Make Payment
                </button>

                <button
                  className="font-bold text-xl mt-12"
                  style={{ color: "#DF421A" }}
                  onClick={() => setInnerPage(2)}
                >
                  Available Loan
                </button>
              </div>
            </div>
          </div>
          <div className="mx-8 md:mx-24 lg:mx-16 xl:mx-32 pt-8 pb-12">
            <div className="flex justify-between items-center py-4">
              <h5 className="text-xl font-bold">Loan History</h5>
              <div className="text-lg font-bold" style={{ color: "#DF421A" }}>
                <Link href="#">See all</Link>
              </div>
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
                          <th
                            scope="col"
                            className="px-6 py-3 text-left text-lg font-bold text-gray-500 capitalize tracking-wider"
                          >
                            Total Till Date
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
                          <td className="px-6 py-4 whitespace-nowrap text-lg text-gray-900">
                            ₦1,900
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
                          <td className="px-6 py-4 whitespace-nowrap text-lg text-gray-900">
                            ₦1,900
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
                          <td className="px-6 py-4 whitespace-nowrap text-lg text-gray-900">
                            ₦1,900
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
                          <td className="px-6 py-4 whitespace-nowrap text-lg text-gray-900">
                            ₦750
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
                          <td className="px-6 py-4 whitespace-nowrap text-lg text-gray-900">
                            ₦650
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
                          <td className="px-6 py-4 whitespace-nowrap text-lg text-gray-900">
                            ₦1,900
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
                          <td className="px-6 py-4 whitespace-nowrap text-lg text-gray-900">
                            ₦1,900
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
                          <td className="px-6 py-4 whitespace-nowrap text-lg text-gray-900">
                            ₦800
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
                          <td className="px-6 py-4 whitespace-nowrap text-lg text-gray-900">
                            ₦1,900
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
                          <td className="px-6 py-4 whitespace-nowrap text-lg text-gray-900">
                            ₦1,900
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

export default LoanDetails;
