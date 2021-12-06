// import { useRouter } from "next/router";
import Header from "../../../components/header";
import Footer from "../../../components/footer";
import Head from "next/head";
import pageStyles from "../../../styles/Pages.module.css";
import Link from "next/link";
import { useState } from "react";

function Payment() {
  // const router = useRouter();

  // const foodType = router.query.foodType;

  // send a request to the backend API to
  // fetch the food types with foodType

  const [showCardForm, setShowCardForm] = useState(false);

  return (
    <div>
      <Head>
        <title>Preorder - Payment Method</title>
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
              Payment Method
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
          <div className={`mx-14 py-14 ${pageStyles.paymentpg}`}>
            <div className="sm:block md:flex justify-between">
              <div className="md:w-2/5">
                <h5 className="text-xl font-bold">Order Summary</h5>
                <div className="my-6 bg-white divide-y divide-gray-300 rounded-2xl">
                  <div className="p-4 flex justify-between items-center">
                    <p
                      className="text-xl font-normal"
                      style={{ color: "#828282" }}
                    >
                      Sub-total
                    </p>
                    <p className="text-xl font-bold">₦75,000</p>
                  </div>
                  <div className="p-4 flex justify-between items-center">
                    <p
                      className="text-xl font-normal"
                      style={{ color: "#828282" }}
                    >
                      Delivery Total
                    </p>
                    <p className="text-xl font-bold">₦5,000</p>
                  </div>
                  <div className="p-4 flex justify-between items-center">
                    <p
                      className="text-xl font-normal"
                      style={{ color: "#828282" }}
                    >
                      Total
                    </p>
                    <p className="text-xl font-bold">₦80,000</p>
                  </div>
                </div>
              </div>
              <div className="md:w-2/4">
                <h5 className="text-xl font-bold">Payment Method</h5>
                <div className="my-6 bg-white flex flex-col divide-y divide-gray-300 rounded-2xl">
                  <div className="p-4 inline-flex items-center">
                    <input
                      id="payment-option-1"
                      type="radio"
                      name="payment_method"
                      value="debit-card"
                      className="h-4 w-4 border-gray-300 focus:ring-2 focus:ring-blue-300"
                      aria-labelledby="payment-option-1"
                      aria-describedby="payment-option-1"
                      onChange={() => setShowCardForm(!showCardForm)}
                    />
                    <div className="ml-6">
                      <svg
                        width="48"
                        height="48"
                        viewBox="0 0 48 48"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <circle cx="15" cy="23.9412" r="15" fill="#EB001B" />
                        <circle cx="33" cy="23.9412" r="15" fill="#F79E1B" />
                        <path
                          fillRule="evenodd"
                          clipRule="evenodd"
                          d="M23.9999 35.9411C28.1406 33.5458 30.9265 29.0688 30.9265 23.9412C30.9265 18.8135 28.1406 14.3365 23.9999 11.9412C19.8591 14.3365 17.0732 18.8135 17.0732 23.9412C17.0732 29.0688 19.8591 33.5458 23.9999 35.9411Z"
                          fill="#FF5F00"
                        />
                      </svg>
                    </div>
                    <label
                      htmlFor="payment-option-1"
                      className="text-xl font-normal text-gray-900 ml-6 block"
                    >
                      Credit or Debit Card
                    </label>
                  </div>
                  <div className="p-4 inline-flex items-center">
                    <input
                      id="payment-option-2"
                      type="radio"
                      name="payment_method"
                      value="bank-transfer"
                      className="h-4 w-4 border-gray-300 focus:ring-2 focus:ring-blue-300"
                      aria-labelledby="payment-option-2"
                      aria-describedby="payment-option-2"
                    />
                    <div className="ml-6">
                      <svg
                        width="24"
                        height="27"
                        viewBox="0 0 24 27"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M17.8839 11.1687C21.2675 8.40462 28.1776 -1.55548 17.3597 0.207789C12.6417 0.922629 5.73162 5.49761 4.34959 10.7874C3.63475 9.35774 2.8246 8.02338 1.96679 6.68901C0.632424 4.87808 -0.844913 6.30776 0.584768 8.11869C4.82283 13.2498 7.26632 19.6263 7.54255 26.2756C7.87614 23.0827 7.35192 19.1749 6.06521 15.3624C6.68474 15.553 7.39958 15.6483 8.01911 15.6483C10.2113 19.2702 13.5949 22.3678 17.3597 23.7975C20.8386 25.1795 25.4612 24.3694 23.555 18.7936C22.5542 15.7437 20.219 13.0749 17.8839 11.1687ZM18.3605 1.4945C24.3651 0.827317 17.9316 8.30931 15.8347 9.69134C13.8808 8.40462 11.4027 7.26088 9.01988 7.59447C10.7355 5.35464 14.9292 1.92341 18.3605 1.4945ZM8.97223 9.21478C10.5925 9.07181 12.3558 9.97727 13.7378 10.9304C12.4035 11.5976 10.9738 11.9788 9.49644 12.1218C7.30427 12.1218 6.82771 9.4054 8.97223 9.21478ZM17.2644 20.8428C14.4527 20.0327 11.7839 17.7452 9.87769 15.4577C11.4503 15.1241 13.023 14.5046 14.4527 13.6468C14.9769 13.4085 15.5011 13.0273 15.9777 12.6937C17.6456 14.2187 19.4089 16.2679 20.0761 18.603C20.7433 21.1288 18.9323 21.3194 17.2644 20.8428Z"
                          fill="#F5A623"
                        />
                      </svg>
                    </div>
                    <label
                      htmlFor="payment-option-2"
                      className="text-xl font-normal text-gray-900 ml-6 block"
                    >
                      Pay via Bank Transfer
                    </label>
                  </div>
                  <div className="p-4 inline-flex items-center">
                    <input
                      id="payment-option-3"
                      type="radio"
                      name="payment_method"
                      value="wallet"
                      className="h-4 w-4 border-gray-300 focus:ring-2 focus:ring-blue-300"
                      aria-labelledby="payment-option-3"
                      aria-describedby="payment-option-3"
                    />
                    <div className="ml-6">
                      <svg
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M22.5938 12.9364H22.125V9.6552C22.125 8.36163 21.2167 7.27695 20.0045 7.00357L17.871 3.30823C17.5583 2.76668 17.0535 2.37926 16.4494 2.2174C16.0229 2.10316 15.5831 2.11155 15.1707 2.23605L13.6193 0.684633C12.7064 -0.228164 11.2212 -0.228258 10.3083 0.684633L4.05661 6.93645H2.71875C1.21964 6.93645 0 8.15609 0 9.6552V21.2802C0 22.7793 1.21964 23.9989 2.71875 23.9989H8.95312C9.21197 23.9989 9.42188 23.789 9.42188 23.5302C9.42188 23.2714 9.21197 23.0614 8.95312 23.0614H2.71875C1.73658 23.0614 0.9375 22.2624 0.9375 21.2802V9.6552C0.9375 8.67302 1.73658 7.87395 2.71875 7.87395H19.4062C20.3884 7.87395 21.1875 8.67302 21.1875 9.6552V12.9364H17.7188C16.323 12.9364 15.1875 14.072 15.1875 15.4677C15.1875 16.8634 16.323 17.9989 17.7188 17.9989H21.1875V21.2802C21.1875 22.2624 20.3884 23.0614 19.4062 23.0614H13.1719C12.913 23.0614 12.7031 23.2714 12.7031 23.5302C12.7031 23.789 12.913 23.9989 13.1719 23.9989H19.4062C20.9054 23.9989 22.125 22.7793 22.125 21.2802V17.9989H22.5938C23.3692 17.9989 24 17.3681 24 16.5927V14.3427C24 13.5673 23.3692 12.9364 22.5938 12.9364ZM16.2067 3.12298C16.5689 3.22001 16.8716 3.45227 17.0591 3.77698L18.8832 6.93645H8.77936L15.1416 3.26318C15.4663 3.07577 15.8445 3.0259 16.2067 3.12298ZM10.9713 1.34759C11.2364 1.08246 11.5889 0.936445 11.9638 0.936445C12.3388 0.936445 12.6913 1.08246 12.9564 1.34759L14.2844 2.6756L6.90441 6.93645H5.38247L10.9713 1.34759ZM23.0625 16.5927C23.0625 16.8512 22.8522 17.0614 22.5938 17.0614H17.7188C16.8399 17.0614 16.125 16.3465 16.125 15.4677C16.125 14.5889 16.8399 13.8739 17.7188 13.8739H22.5938C22.8522 13.8739 23.0625 14.0842 23.0625 14.3427V16.5927Z"
                          fill="#333333"
                        />
                        <path
                          d="M17.6406 14.999C17.5173 14.999 17.3964 15.0491 17.3092 15.1364C17.222 15.2236 17.1719 15.344 17.1719 15.4678C17.1719 15.5911 17.222 15.712 17.3092 15.7991C17.3964 15.8863 17.5173 15.9365 17.6406 15.9365C17.7644 15.9365 17.8848 15.8864 17.972 15.7991C18.0596 15.712 18.1094 15.5911 18.1094 15.4678C18.1094 15.3445 18.0596 15.2236 17.972 15.1364C17.8848 15.0492 17.7644 14.999 17.6406 14.999Z"
                          fill="#333333"
                        />
                        <path
                          d="M11.0625 23.0615C10.9392 23.0615 10.8183 23.1116 10.7311 23.1989C10.6439 23.2861 10.5938 23.407 10.5938 23.5303C10.5938 23.6536 10.6439 23.7745 10.7311 23.8616C10.8183 23.9488 10.9392 23.999 11.0625 23.999C11.1858 23.999 11.3067 23.9489 11.3939 23.8616C11.481 23.7745 11.5312 23.6536 11.5312 23.5303C11.5312 23.407 11.4811 23.2861 11.3939 23.1989C11.3067 23.1117 11.1858 23.0615 11.0625 23.0615Z"
                          fill="#333333"
                        />
                      </svg>
                    </div>
                    <label
                      htmlFor="payment-option-3"
                      className="text-xl font-normal text-gray-900 ml-6 block"
                    >
                      Pay via wallet
                    </label>
                  </div>
                  <div className="p-4 inline-flex items-center">
                    <input
                      id="payment-option-4"
                      type="radio"
                      name="payment_method"
                      value="take-loan"
                      className="h-4 w-4 border-gray-300 focus:ring-2 focus:ring-blue-300"
                      aria-labelledby="payment-option-4"
                      aria-describedby="payment-option-4"
                    />
                    <div className="ml-6">
                      <svg
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M21.75 6H2.25C1.83579 6 1.5 6.33579 1.5 6.75V17.25C1.5 17.6642 1.83579 18 2.25 18H21.75C22.1642 18 22.5 17.6642 22.5 17.25V6.75C22.5 6.33579 22.1642 6 21.75 6Z"
                          stroke="#333333"
                          strokeWidth="1.5"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                        <path
                          d="M12 15C13.6569 15 15 13.6569 15 12C15 10.3431 13.6569 9 12 9C10.3431 9 9 10.3431 9 12C9 13.6569 10.3431 15 12 15Z"
                          stroke="#333333"
                          strokeWidth="1.5"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                        <path
                          d="M16.5 6L22.5 11.25"
                          stroke="#333333"
                          strokeWidth="1.5"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                        <path
                          d="M16.5 18L22.5 12.75"
                          stroke="#333333"
                          strokeWidth="1.5"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                        <path
                          d="M7.5 6L1.5 11.25"
                          stroke="#333333"
                          strokeWidth="1.5"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                        <path
                          d="M7.5 18L1.5 12.75"
                          stroke="#333333"
                          strokeWidth="1.5"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    </div>
                    <label
                      htmlFor="payment-option-4"
                      className="text-xl font-normal text-gray-900 ml-6 block"
                    >
                      Take a Loan
                    </label>
                  </div>
                  <div
                    className={`service1 ${
                      showCardForm ? "show my-4 p-3" : "hidden"
                    }`}
                    style={{ fontFamily: "'Sen', sans-serif;" }}
                  >
                    <form action="" method="post">
                      <div className="md:flex items-center mt-6">
                        <div className="relative w-full flex flex-col">
                          <label className="text-base font-normal leading-none">
                            Card Number
                          </label>
                          <span className="absolute top-12 pl-2">
                            <svg
                              width="18"
                              height="18"
                              viewBox="0 0 18 18"
                              fill="none"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path
                                d="M16.3125 2.8125H1.6875C1.37637 2.8125 1.125 3.06387 1.125 3.375V6.1875H16.875V3.375C16.875 3.06387 16.6236 2.8125 16.3125 2.8125ZM1.125 14.625C1.125 14.9361 1.37637 15.1875 1.6875 15.1875H16.3125C16.6236 15.1875 16.875 14.9361 16.875 14.625V7.73438H1.125V14.625ZM11.3027 11.3906C11.3027 11.3133 11.366 11.25 11.4434 11.25H14.3438C14.4211 11.25 14.4844 11.3133 14.4844 11.3906V12.6562C14.4844 12.7336 14.4211 12.7969 14.3438 12.7969H11.4434C11.366 12.7969 11.3027 12.7336 11.3027 12.6562V11.3906Z"
                                fill="#828282"
                              />
                            </svg>
                          </span>
                          <input
                            type="text"
                            className="leading-none text-gray-900 py-3 px-10 focus:outline-none focus:border-green-500 mt-4 bg-white border rounded border-gray-200"
                            placeholder="0000 0000 0000 0000"
                          />
                        </div>
                      </div>
                      <div className="md:flex items-center mt-4">
                        <div className="relative w-full md:w-1/2 flex flex-col">
                          <label className="text-base font-normal leading-none">
                            Expiry Date
                          </label>
                          <span className="absolute top-12 pl-2">
                            <svg
                              width="18"
                              height="18"
                              viewBox="0 0 18 18"
                              fill="none"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path
                                d="M0 15.3C0 16.83 1.17 18 2.7 18H15.3C16.83 18 18 16.83 18 15.3V8.1H0V15.3ZM15.3 1.8H13.5V0.9C13.5 0.36 13.14 0 12.6 0C12.06 0 11.7 0.36 11.7 0.9V1.8H6.3V0.9C6.3 0.36 5.94 0 5.4 0C4.86 0 4.5 0.36 4.5 0.9V1.8H2.7C1.17 1.8 0 2.97 0 4.5V6.3H18V4.5C18 2.97 16.83 1.8 15.3 1.8Z"
                                fill="#828282"
                              />
                            </svg>
                          </span>
                          <input
                            type="text"
                            className="leading-none text-gray-900 py-3 px-10 focus:outline-none focus:border-green-500 mt-4 bg-white border rounded border-gray-200"
                            placeholder="MM/YY"
                          />
                        </div>
                        <div className="relative w-full md:w-1/2 flex flex-col md:ml-6 md:mt-0 mt-4">
                          <label className="text-base font-normal leading-none">
                            CVV
                          </label>
                          <span className="absolute top-12 pl-2">
                            <svg
                              width="14"
                              height="18"
                              viewBox="0 0 14 18"
                              fill="none"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path
                                d="M12.8 7H11V4.6C11 1.703 9.665 0 7 0C4.334 0 3 1.703 3 4.6V7H1C0.447 7 0 7.646 0 8.199V16C0 16.549 0.428 17.139 0.951 17.307L2.148 17.694C2.7829 17.8791 3.43892 17.9819 4.1 18H9.9C10.5608 17.9821 11.2166 17.8789 11.851 17.693L13.047 17.306C13.571 17.139 14 16.549 14 16V8.199C14 7.646 13.352 7 12.8 7ZM9 7H5V4.199C5 2.754 5.797 2 7 2C8.203 2 9 2.754 9 4.199V7Z"
                                fill="#828282"
                              />
                            </svg>
                          </span>
                          <input
                            type="text"
                            className="leading-none text-gray-900 py-3 px-10 focus:outline-none focus:border-green-500 mt-4 bg-white border rounded border-gray-200"
                            placeholder="Pick Up"
                          />
                        </div>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex justify-end my-10">
              <button
                className="px-10 py-2.5 text-white text-lg font-bold rounded-3xl block"
                style={{ backgroundColor: "#4D966D" }}
              >
                Pay
              </button>
            </div>
          </div>
        </div>
      </div>
      <Footer></Footer>
    </div>
  );
}

export default Payment;
