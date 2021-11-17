import Head from "next/head";
import Header from "../../components/header";
import Image from "next/image";
import pageStyles from "../../styles/Pages.module.css";

export default function Dashboard() {
  return (
    <div
      className={`bg-center bg-no-repeat bg-cover overflow-x-hidden ${pageStyles.dashbg}`}
      style={{ fontFamily: "Open Sans, sans-serif" }}
    >
      <Head>
        <title>Soupe Dashboard</title>
        <meta
          name="keywords"
          content="Preorder, Food Calculator, Compare price"
        ></meta>
      </Head>
      <Header></Header>
      <div
        className={`mx-14 my-14 px-4 max-w-full bg-center bg-cover rounded-3xl ${pageStyles.dashrec}`}
      >
        <div className="px-8 sm:block lg:flex justify-between">
          <div className="sm:block lg:flex items-center">
            <div className={`${pageStyles.user_w_info} block`}>
              <h5 className="text-xl font-bold leading-7">Hi, Dina,</h5>
              <div className={`${pageStyles.wallet_info} pt-5`}>
                <p className="text-lg leading-6 font-normal">
                  Your wallet balance is
                </p>
                <h3 className="sm:text-xl md:text-2xl lg:text-5xl leading-8 font-bold pt-3">
                  ₦100,000
                </h3>
              </div>
            </div>
          </div>
          <div className={`${pageStyles.grocery_img} -mb-1.5`}>
            <Image
              src="/assets/img/grocery-store-food.png"
              alt="Groceries"
              width={446}
              height={200}
            />
          </div>
        </div>
      </div>
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-4 xl:grid-cols-4 mx-14 my-5">
        <div className="relative w-full h-48 bg-white bg-cover bg-center group rounded-2xl transition duration-300 ease-in-out">
          <div className="relative w-full h-full px-4 py-4 sm:px-6 lg:px-4 flex justify-between">
            <div className="card-txt w-36">
              <h5 className="text-lg font-bold leading-7">Pre-order</h5>
              <p
                className="font-normal text-sm leading-7 tracking-wide"
                style={{ color: "#828282" }}
              >
                Pre-order for food items
              </p>
            </div>
            <div className="flex items-end">
              <svg
                width="64"
                height="64"
                viewBox="0 0 64 64"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <circle opacity="0.2" cx="32" cy="32" r="32" fill="#FECE51" />
                <path
                  d="M44 38.1653V25.835C44 25.6575 43.9528 25.4833 43.8632 25.3301C43.7736 25.1769 43.6449 25.0504 43.4903 24.9634L32.4903 18.7759C32.3406 18.6917 32.1717 18.6475 32 18.6475C31.8283 18.6475 31.6594 18.6917 31.5097 18.7759L20.5097 24.9634C20.3551 25.0504 20.2264 25.1769 20.1368 25.3301C20.0472 25.4833 20 25.6575 20 25.835V38.1653C20 38.3427 20.0472 38.5169 20.1368 38.6701C20.2264 38.8233 20.3551 38.9498 20.5097 39.0368L31.5097 45.2243C31.6594 45.3085 31.8283 45.3528 32 45.3528C32.1717 45.3528 32.3406 45.3085 32.4903 45.2243L43.4903 39.0368C43.6449 38.9498 43.7736 38.8233 43.8632 38.6701C43.9528 38.5169 44 38.3427 44 38.1653Z"
                  stroke="#FECE51"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M38.1278 35.0639V28.5639L26 21.875"
                  stroke="#FECE51"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M43.8623 25.3284L32.1188 32L20.1387 25.3271"
                  stroke="#FECE51"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M32.1183 32L32.001 45.3527"
                  stroke="#FECE51"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </div>
          </div>
        </div>
        <div className="relative w-full h-48 bg-white bg-cover bg-center group rounded-2xl transition duration-300 ease-in-out">
          <div className="relative w-full h-full px-4 py-4 sm:px-6 lg:px-4 flex justify-between">
            <div className="card-txt w-36">
              <h5 className="text-lg font-bold leading-7">Calculator</h5>
              <p
                className="font-normal text-sm leading-7 tracking-wide"
                style={{ color: "#828282" }}
              >
                Calculate how much food item you need
              </p>
            </div>
            <div className="flex items-end">
              <svg
                width="64"
                height="64"
                viewBox="0 0 64 64"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <circle opacity="0.2" cx="32" cy="32" r="32" fill="#DF421A" />
                <path
                  d="M36.5 26H27.5V30.5H36.5V26Z"
                  stroke="#DF421A"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M39.5 40.25V23.75C39.5 23.3358 39.1642 23 38.75 23H25.25C24.8358 23 24.5 23.3358 24.5 23.75V40.25C24.5 40.6642 24.8358 41 25.25 41H38.75C39.1642 41 39.5 40.6642 39.5 40.25Z"
                  stroke="#DF421A"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M28.25 35C28.8713 35 29.375 34.4963 29.375 33.875C29.375 33.2537 28.8713 32.75 28.25 32.75C27.6287 32.75 27.125 33.2537 27.125 33.875C27.125 34.4963 27.6287 35 28.25 35Z"
                  fill="#DF421A"
                />
                <path
                  d="M32 35C32.6213 35 33.125 34.4963 33.125 33.875C33.125 33.2537 32.6213 32.75 32 32.75C31.3787 32.75 30.875 33.2537 30.875 33.875C30.875 34.4963 31.3787 35 32 35Z"
                  fill="#DF421A"
                />
                <path
                  d="M35.75 35C36.3713 35 36.875 34.4963 36.875 33.875C36.875 33.2537 36.3713 32.75 35.75 32.75C35.1287 32.75 34.625 33.2537 34.625 33.875C34.625 34.4963 35.1287 35 35.75 35Z"
                  fill="#DF421A"
                />
                <path
                  d="M28.25 38.75C28.8713 38.75 29.375 38.2463 29.375 37.625C29.375 37.0037 28.8713 36.5 28.25 36.5C27.6287 36.5 27.125 37.0037 27.125 37.625C27.125 38.2463 27.6287 38.75 28.25 38.75Z"
                  fill="#DF421A"
                />
                <path
                  d="M32 38.75C32.6213 38.75 33.125 38.2463 33.125 37.625C33.125 37.0037 32.6213 36.5 32 36.5C31.3787 36.5 30.875 37.0037 30.875 37.625C30.875 38.2463 31.3787 38.75 32 38.75Z"
                  fill="#DF421A"
                />
                <path
                  d="M35.75 38.75C36.3713 38.75 36.875 38.2463 36.875 37.625C36.875 37.0037 36.3713 36.5 35.75 36.5C35.1287 36.5 34.625 37.0037 34.625 37.625C34.625 38.2463 35.1287 38.75 35.75 38.75Z"
                  fill="#DF421A"
                />
              </svg>
            </div>
          </div>
        </div>
        <div className="relative w-full h-48 bg-white bg-cover bg-center group rounded-2xl transition duration-300 ease-in-out">
          <div className="relative w-full h-full px-4 py-4 sm:px-6 lg:px-4 flex justify-between">
            <div className="card-txt w-40">
              <h5 className="text-lg font-bold leading-7">Compare</h5>
              <p
                className="font-normal text-sm leading-7 tracking-wide"
                style={{ color: "#828282" }}
              >
                Compare Soupe prices with other stores
              </p>
            </div>
            <div className="flex items-end">
              <svg
                width="64"
                height="64"
                viewBox="0 0 64 64"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <circle opacity="0.2" cx="32" cy="32" r="32" fill="#4D966D" />
                <path
                  d="M37 44H23C22.7348 44 22.4804 43.8946 22.2929 43.7071C22.1054 43.5196 22 43.2652 22 43V25C22 24.7348 22.1054 24.4804 22.2929 24.2929C22.4804 24.1054 22.7348 24 23 24H33L38 29V43C38 43.2652 37.8946 43.5196 37.7071 43.7071C37.5196 43.8946 37.2652 44 37 44Z"
                  stroke="#4D966D"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M26 24V21C26 20.7348 26.1054 20.4804 26.2929 20.2929C26.4804 20.1054 26.7348 20 27 20H37L42 25V39C42 39.2652 41.8946 39.5196 41.7071 39.7071C41.5196 39.8946 41.2652 40 41 40H38"
                  stroke="#4D966D"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M27 35H33"
                  stroke="#4D966D"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M27 39H33"
                  stroke="#4D966D"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </div>
          </div>
        </div>
        <div className={`mx-auto ${pageStyles.loanbtn}`}>
          <button
            className="px-6 py-4 font-sans text-lg text-white"
            style={{ backgroundColor: "#4D966D", borderRadius: "40px" }}
          >
            Get a Loan
          </button>
        </div>
      </div>
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-2 xl:grid-cols-2 mx-14 my-8">
        <div className="order-history">
          <div className="flex justify-between">
            <h4 className="font-bold text-2xl">Order History</h4>
            <div className="see_more inline-flex">
              <span
                className=" flex items-center text-sm font-normal"
                style={{ color: "#DF421A" }}
              >
                See more
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
                      Name
                    </th>
                    <th className="text-left py-3 px-4 capitalize font-semibold text-base">
                      Date {"&"} Time
                    </th>
                    <th className="text-center py-3 px-4 capitalize font-semibold text-base">
                      Amount
                    </th>
                  </tr>
                </thead>
                <tbody
                  className="text-gray-700"
                  style={{ fontFamily: "Open Sans, sans-serif" }}
                >
                  <tr className="bg-gray-200 rounded">
                    <td className="text-left py-3 px-4 text-gray-800">
                      Jollof Rice
                    </td>
                    <td className="text-left py-3 px-4 text-gray-800">
                      01/01/2021; 5:30pm
                    </td>
                    <td
                      className="text-center py-3 px-4"
                      style={{ color: "#27AE60" }}
                    >
                      + ₦100,000
                    </td>
                  </tr>
                  <tr>
                    <td className="text-left py-3 px-4">Fried Rice</td>
                    <td className="text-left py-3 px-4">01/01/2021; 5:30pm</td>
                    <td
                      className="text-center py-3 px-4"
                      style={{ color: "#EB5757" }}
                    >
                      - ₦10,000
                    </td>
                  </tr>
                  <tr className="bg-gray-200 rounded">
                    <td className="w-1/3 text-left py-3 px-4">Ofada Rice</td>
                    <td className="text-left py-3 px-4">01/01/2021; 5:30pm</td>
                    <td
                      className="text-center py-3 px-4"
                      style={{ color: "#27AE60" }}
                    >
                      + ₦100,000
                    </td>
                  </tr>
                  <tr>
                    <td className="w-1/3 text-left py-3 px-4">Beans</td>
                    <td className="text-left py-3 px-4">01/01/2021; 5:30pm</td>
                    <td
                      className="text-center py-3 px-4"
                      style={{ color: "#EB5757" }}
                    >
                      - ₦10,000
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
        <div className="order-history">
          <div className="flex justify-between">
            <h4 className="font-bold text-2xl">Loan History</h4>
            <div className="see_more inline-flex">
              <span
                className=" flex items-center text-sm font-normal"
                style={{ color: "#DF421A" }}
              >
                See more
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
            <div className="overflow-hidden">
              <table className="min-w-full">
                <thead className="bg-transparent text-gray-400">
                  <tr>
                    <th className="w-1/3 text-left py-3 px-4 capitalize font-semibold text-base">
                      Name
                    </th>
                    <th className="text-left py-3 px-4 capitalize font-semibold text-base">
                      Date {"&"} Time
                    </th>
                    <th className="text-center py-3 px-4 capitalize font-semibold text-base">
                      Amount
                    </th>
                  </tr>
                </thead>
              </table>
              <div className="py-6 flex justify-center items-center">
                <svg
                  width="112"
                  height="112"
                  viewBox="0 0 112 112"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M101.081 48.72L96.5072 68.2267C92.5872 85.0733 84.8405 91.8867 70.2805 90.4867C67.9472 90.3 65.4272 89.88 62.7205 89.2267L54.8805 87.36C35.4205 82.74 29.4005 73.1267 33.9738 53.62L38.5472 34.0667C39.4805 30.1 40.6005 26.6467 42.0005 23.8C47.4605 12.5067 56.7472 9.47333 72.3338 13.16L80.1272 14.98C99.6805 19.5533 105.654 29.2133 101.081 48.72Z"
                    stroke="#BDBDBD"
                    strokeWidth="3.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M70.2796 90.4871C67.3863 92.4471 63.7463 94.0804 59.313 95.5271L51.9396 97.9537C33.413 103.927 23.6596 98.9337 17.6396 80.4071L11.6663 61.9737C5.69297 43.4471 10.6396 33.6471 29.1663 27.6737L36.5396 25.2471C38.453 24.6404 40.273 24.1271 41.9996 23.8004C40.5996 26.6471 39.4796 30.1004 38.5463 34.0671L33.973 53.6204C29.3996 73.1271 35.4196 82.7404 54.8796 87.3604L62.7196 89.2271C65.4263 89.8804 67.9463 90.3004 70.2796 90.4871Z"
                    stroke="#BDBDBD"
                    strokeWidth="3.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </div>
              <p className="flex justify-center items-center font-normal text-sm">
                Your loan history will appear here , when you take a loan
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
