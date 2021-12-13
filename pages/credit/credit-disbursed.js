import CreditHeader from "../../components/creditheader";
import Footer from "../../components/footer";
import Head from "next/head";
// import pageStyles from "../../styles/Pages.module.css";
import Link from "next/link";

function CreditDisbursed() {
  return (
    <div style={{ fontFamily: "Open Sans, sans-serif" }}>
      <Head>
        <title>Soupe - Credit | Credit Disbursed</title>
        <meta name="keywords" content="Preorder, Grains, Vegetables"></meta>
      </Head>

      <div
        className={`overflow-hidden z-0`}
        style={{
          backgroundColor: "#F2C94C",
          height: "550px",
        }}
      >
        <CreditHeader></CreditHeader>
        <div className="sm:block md:flex justify-between mx-14 my-6">
          <div className="head-txt">
            <h1 className="text-6xl text-left font-bold big-txt pt-8 md:pt-20">
              Credit Disbursed
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
          <div className={`mx-10 md:mx-14 py-6 lg:max-w-5xl xl:max-w-7xl`}>
            <div className="-my-2 overflow-x-auto xl:overflow-x-visible sm:-mx-6 lg:-mx-6 xl:-mx-0">
              {" "}
              {/** lg:-mx-8 **/}
              <div className="py-2 align-middle inline-block min-w-full sm:px-6 lg:px-2 xl:px-8">
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
                          Consumer Name
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
                          Amount
                        </th>
                        <th
                          scope="col"
                          className="px-6 py-3 text-left text-lg font-bold text-gray-500 capitalize tracking-wider"
                        >
                          Interest Rate
                        </th>
                        <th
                          scope="col"
                          className="px-6 py-3 text-left text-lg font-bold text-gray-500 capitalize tracking-wider"
                        >
                          Duration
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
                          <div className="text-lg text-gray-900">
                            Dianne Russell
                          </div>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap">
                          <div className="text-lg text-gray-900">
                            (684) 555-0102
                          </div>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-lg text-gray-900">
                          ₦ 23,000
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-lg text-gray-900">
                          8% p.a
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-lg text-gray-900">
                          4 months
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
                          <div className="text-lg text-gray-900">
                            Cody Fisher
                          </div>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap">
                          <div className="text-lg text-gray-900">
                            (684) 555-0102
                          </div>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-lg text-gray-900">
                          ₦ 23,000
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-lg text-gray-900">
                          8% p.a
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-lg text-gray-900">
                          4 months
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
                          <div className="text-lg text-gray-900">
                            Leslie Alexander
                          </div>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap">
                          <div className="text-lg text-gray-900">
                            (684) 555-0102
                          </div>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-lg text-gray-900">
                          ₦ 23,000
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-lg text-gray-900">
                          8% p.a
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-lg text-gray-900">
                          4 months
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
                          <div className="text-lg text-gray-900">
                            Guy Hawkins
                          </div>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap">
                          <div className="text-lg text-gray-900">
                            (684) 555-0102
                          </div>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-lg text-gray-900">
                          ₦ 23,000
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-lg text-gray-900">
                          8% p.a
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-lg text-gray-900">
                          4 months
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
                          <div className="text-lg text-gray-900">
                            Jenny Wilson
                          </div>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap">
                          <div className="text-lg text-gray-900">
                            (684) 555-0102
                          </div>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-lg text-gray-900">
                          ₦ 23,000
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-lg text-gray-900">
                          8% p.a
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-lg text-gray-900">
                          4 months
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
                          <div className="text-lg text-gray-900">
                            Arlene McCoy
                          </div>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap">
                          <div className="text-lg text-gray-900">
                            (684) 555-0102
                          </div>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-lg text-gray-900">
                          ₦ 23,000
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-lg text-gray-900">
                          8% p.a
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-lg text-gray-900">
                          4 months
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
                          <div className="text-lg text-gray-900">
                            Esther Howard
                          </div>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap">
                          <div className="text-lg text-gray-900">
                            (684) 555-0102
                          </div>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-lg text-gray-900">
                          ₦ 23,000
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-lg text-gray-900">
                          8% p.a
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-lg text-gray-900">
                          4 months
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
                          <div className="text-lg text-gray-900">
                            Savannah Nguyen
                          </div>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap">
                          <div className="text-lg text-gray-900">
                            (684) 555-0102
                          </div>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-lg text-gray-900">
                          ₦ 23,000
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-lg text-gray-900">
                          8% p.a
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-lg text-gray-900">
                          4 months
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
                          <div className="text-lg text-gray-900">
                            Theresa Webb
                          </div>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap">
                          <div className="text-lg text-gray-900">
                            (684) 555-0102
                          </div>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-lg text-gray-900">
                          ₦ 23,000
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-lg text-gray-900">
                          8% p.a
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-lg text-gray-900">
                          4 months
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
                          <div className="text-lg text-gray-900">
                            Devon Lane
                          </div>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap">
                          <div className="text-lg text-gray-900">
                            (684) 555-0102
                          </div>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-lg text-gray-900">
                          ₦ 23,000
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-lg text-gray-900">
                          8% p.a
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-lg text-gray-900">
                          4 months
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
                          <div className="text-lg text-gray-900">
                            Jacob Jones
                          </div>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap">
                          <div className="text-lg text-gray-900">
                            (684) 555-0102
                          </div>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-lg text-gray-900">
                          ₦ 23,000
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-lg text-gray-900">
                          8% p.a
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-lg text-gray-900">
                          4 months
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
      <Footer></Footer>
    </div>
  );
}

export default CreditDisbursed;
