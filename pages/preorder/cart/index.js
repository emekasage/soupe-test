// import { useRouter } from "next/router";
import Header from "../../../components/header";
import Footer from "../../../components/footer";
import Head from "next/head";
import Image from "next/image";
import pageStyles from "../../../styles/Pages.module.css";
import { useState } from "react";
import Link from "next/link";

function Cart() {
  // const router = useRouter();

  // const foodType = router.query.foodType;

  // send a request to the backend API to
  // fetch the food types with foodType

  const [counter, setCounter] = useState(1);
  const incrementCounter = () => setCounter(counter + 1);
  let decrementCounter = () => setCounter(counter - 1);

  if (counter <= 1) {
    decrementCounter = () => setCounter(1);
  }

  return (
    <div>
      <Head>
        <title>Preorder - Cart</title>
        <meta name="keywords" content="Preorder, Grains, Vegetables"></meta>
      </Head>

      <div
        className={`overflow-hidden z-0 ${pageStyles.cartpg}`}
        style={{
          backgroundColor: "#F2C94C",
          height: "597px",
          backgroundImage: `url('/assets/img/favpng_shopping-cart-fruit-supermarket-1.png')`,
          backgroundSize: "630px 420px",
          backgroundPosition: "right 200px",
          backgroundRepeat: "no-repeat",
          fontFamily: "Open Sans, sans-serif",
        }}
      >
        <Header></Header>
        <div className="sm:block md:flex justify-between mx-14 sm:my-10 md:my-20">
          <div className={`sm:mt-10 md:mt-24 ${pageStyles.headtxt}`}>
            <h1 className={`text-6xl font-bold ${pageStyles.bigtxt}`}>Cart</h1>
            <p className="font-normal text-2xl leading-8 md:w-3/6 lg:w-4/6 py-6">
              Would you like to compare food prices?{" "}
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
          <div className={`mx-14 py-14 ${pageStyles.tableblk}`}>
            <div className="flex flex-col">
              <div className="-my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
                <div className="py-2 align-middle inline-block min-w-full sm:px-6 lg:px-8">
                  <div className="shadow overflow-hidden border-b border-gray-200 sm:rounded-lg">
                    <table className="min-w-full divide-y divide-gray-200">
                      <thead className="bg-gray-50">
                        <tr>
                          <th></th>
                          <th
                            scope="col"
                            className="px-6 py-3 text-left text-lg font-medium text-gray-500 capitalize tracking-wider"
                          >
                            Image
                          </th>
                          <th
                            scope="col"
                            className="px-6 py-3 text-left text-lg font-medium text-gray-500 capitalize tracking-wider"
                          >
                            Product
                          </th>
                          <th
                            scope="col"
                            className="px-6 py-3 text-left text-lg font-medium text-gray-500 capitalize tracking-wider"
                          >
                            Unit price
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
                              <div className="flex-shrink-0 h-10 w-10 cursor-pointer">
                                <svg
                                  width="18"
                                  height="22"
                                  viewBox="0 0 18 22"
                                  fill="none"
                                  xmlns="http://www.w3.org/2000/svg"
                                >
                                  <path
                                    d="M8.9999 0.714355C9.87953 0.714355 10.7255 1.05244 11.3629 1.65869C12.0002 2.26494 12.3802 3.09296 12.4242 3.9715L12.4285 4.14293H16.7142C16.9326 4.14317 17.1428 4.22682 17.3016 4.3768C17.4605 4.52677 17.5561 4.73174 17.5689 4.94984C17.5817 5.16793 17.5107 5.38268 17.3705 5.55021C17.2303 5.71774 17.0314 5.82541 16.8145 5.85121L16.7142 5.85721H15.9865L14.975 18.3312C14.9098 19.1361 14.5439 19.887 13.9503 20.4345C13.3566 20.9819 12.5786 21.2858 11.771 21.2858H6.22875C5.42119 21.2858 4.6432 20.9819 4.04952 20.4345C3.45585 19.887 3.09 19.1361 3.02475 18.3312L2.01247 5.85721H1.28561C1.07567 5.85718 0.873035 5.78011 0.716148 5.6406C0.559261 5.50109 0.45903 5.30886 0.434467 5.10036L0.428467 5.00007C0.428494 4.79013 0.505572 4.58749 0.64508 4.43061C0.784588 4.27372 0.976823 4.17349 1.18532 4.14893L1.28561 4.14293H5.57132C5.57132 3.23361 5.93255 2.36154 6.57553 1.71856C7.21851 1.07558 8.09058 0.714355 8.9999 0.714355ZM7.07132 8.64293C6.91598 8.64293 6.76589 8.69919 6.64881 8.8013C6.53174 8.9034 6.45559 9.04445 6.43447 9.19835L6.42847 9.28578V16.1429L6.43447 16.2304C6.45564 16.3842 6.5318 16.5252 6.64887 16.6273C6.76594 16.7294 6.91601 16.7856 7.07132 16.7856C7.22664 16.7856 7.37671 16.7294 7.49378 16.6273C7.61085 16.5252 7.68701 16.3842 7.70818 16.2304L7.71418 16.1429V9.28578L7.70818 9.19835C7.68705 9.04445 7.61091 8.9034 7.49384 8.8013C7.37676 8.69919 7.22667 8.64293 7.07132 8.64293ZM10.9285 8.64293C10.7731 8.64293 10.623 8.69919 10.506 8.8013C10.3889 8.9034 10.3127 9.04445 10.2916 9.19835L10.2856 9.28578V16.1429L10.2916 16.2304C10.3128 16.3842 10.3889 16.5252 10.506 16.6273C10.6231 16.7294 10.7731 16.7856 10.9285 16.7856C11.0838 16.7856 11.2338 16.7294 11.3509 16.6273C11.468 16.5252 11.5442 16.3842 11.5653 16.2304L11.5713 16.1429V9.28578L11.5653 9.19835C11.5442 9.04445 11.4681 8.9034 11.351 8.8013C11.2339 8.69919 11.0838 8.64293 10.9285 8.64293ZM8.9999 2.42864C8.5674 2.4285 8.15084 2.59185 7.83371 2.88592C7.51658 3.18 7.32233 3.58308 7.2899 4.01435L7.28561 4.14293H10.7142L10.7099 4.01435C10.6775 3.58308 10.4832 3.18 10.1661 2.88592C9.84895 2.59185 9.43239 2.4285 8.9999 2.42864Z"
                                    fill="#828282"
                                  />
                                </svg>
                              </div>
                            </div>
                          </td>
                          <td className="px-3 py-4 whitespace-nowrap">
                            <div
                              className="flex-shrink-0 w-20 h-auto rounded-lg"
                              style={{ background: "#ECEDEE" }}
                            >
                              <div className="flex justify-center items-center p-1.5">
                                <Image
                                  src="/assets/img/image-318.png"
                                  alt="rice"
                                  width={50}
                                  height={57}
                                />
                              </div>
                            </div>
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap">
                            <div className="text-lg text-gray-900">
                              Mama&#39;s Pride Parboiled Rice
                            </div>
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap">
                            <div className="text-lg text-gray-900">???75,000</div>
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                            <div className="inline-flex items-center">
                              <button
                                className="font-bold pr-2.5"
                                onClick={decrementCounter}
                              >
                                -
                              </button>
                              <div className="w-12 h-auto bg-white border border-gray-500 border-opacity-10 p-2 rounded-lg">
                                <div className="flex justify-center items-center font-bold text-base">
                                  {counter}
                                </div>
                              </div>
                              <button
                                className="font-bold pl-2.5"
                                onClick={incrementCounter}
                              >
                                +
                              </button>
                            </div>
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap">
                            <div className="text-lg text-gray-900">???75,000</div>
                          </td>
                        </tr>
                        <tr>
                          <td className="px-6 py-4 whitespace-nowrap">
                            <div className="flex items-center">
                              <div className="flex-shrink-0 h-10 w-10 cursor-pointer">
                                <svg
                                  width="18"
                                  height="22"
                                  viewBox="0 0 18 22"
                                  fill="none"
                                  xmlns="http://www.w3.org/2000/svg"
                                >
                                  <path
                                    d="M8.9999 0.714355C9.87953 0.714355 10.7255 1.05244 11.3629 1.65869C12.0002 2.26494 12.3802 3.09296 12.4242 3.9715L12.4285 4.14293H16.7142C16.9326 4.14317 17.1428 4.22682 17.3016 4.3768C17.4605 4.52677 17.5561 4.73174 17.5689 4.94984C17.5817 5.16793 17.5107 5.38268 17.3705 5.55021C17.2303 5.71774 17.0314 5.82541 16.8145 5.85121L16.7142 5.85721H15.9865L14.975 18.3312C14.9098 19.1361 14.5439 19.887 13.9503 20.4345C13.3566 20.9819 12.5786 21.2858 11.771 21.2858H6.22875C5.42119 21.2858 4.6432 20.9819 4.04952 20.4345C3.45585 19.887 3.09 19.1361 3.02475 18.3312L2.01247 5.85721H1.28561C1.07567 5.85718 0.873035 5.78011 0.716148 5.6406C0.559261 5.50109 0.45903 5.30886 0.434467 5.10036L0.428467 5.00007C0.428494 4.79013 0.505572 4.58749 0.64508 4.43061C0.784588 4.27372 0.976823 4.17349 1.18532 4.14893L1.28561 4.14293H5.57132C5.57132 3.23361 5.93255 2.36154 6.57553 1.71856C7.21851 1.07558 8.09058 0.714355 8.9999 0.714355ZM7.07132 8.64293C6.91598 8.64293 6.76589 8.69919 6.64881 8.8013C6.53174 8.9034 6.45559 9.04445 6.43447 9.19835L6.42847 9.28578V16.1429L6.43447 16.2304C6.45564 16.3842 6.5318 16.5252 6.64887 16.6273C6.76594 16.7294 6.91601 16.7856 7.07132 16.7856C7.22664 16.7856 7.37671 16.7294 7.49378 16.6273C7.61085 16.5252 7.68701 16.3842 7.70818 16.2304L7.71418 16.1429V9.28578L7.70818 9.19835C7.68705 9.04445 7.61091 8.9034 7.49384 8.8013C7.37676 8.69919 7.22667 8.64293 7.07132 8.64293ZM10.9285 8.64293C10.7731 8.64293 10.623 8.69919 10.506 8.8013C10.3889 8.9034 10.3127 9.04445 10.2916 9.19835L10.2856 9.28578V16.1429L10.2916 16.2304C10.3128 16.3842 10.3889 16.5252 10.506 16.6273C10.6231 16.7294 10.7731 16.7856 10.9285 16.7856C11.0838 16.7856 11.2338 16.7294 11.3509 16.6273C11.468 16.5252 11.5442 16.3842 11.5653 16.2304L11.5713 16.1429V9.28578L11.5653 9.19835C11.5442 9.04445 11.4681 8.9034 11.351 8.8013C11.2339 8.69919 11.0838 8.64293 10.9285 8.64293ZM8.9999 2.42864C8.5674 2.4285 8.15084 2.59185 7.83371 2.88592C7.51658 3.18 7.32233 3.58308 7.2899 4.01435L7.28561 4.14293H10.7142L10.7099 4.01435C10.6775 3.58308 10.4832 3.18 10.1661 2.88592C9.84895 2.59185 9.43239 2.4285 8.9999 2.42864Z"
                                    fill="#828282"
                                  />
                                </svg>
                              </div>
                            </div>
                          </td>
                          <td className="px-3 py-4 whitespace-nowrap">
                            <div
                              className="flex-shrink-0 w-20 h-auto rounded-lg"
                              style={{ background: "#ECEDEE" }}
                            >
                              <div className="flex justify-center items-center p-1.5">
                                <Image
                                  src="/assets/img/image-318.png"
                                  alt="rice"
                                  width={50}
                                  height={57}
                                />
                              </div>
                            </div>
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap">
                            <div className="text-lg text-gray-900">
                              Mama&#39;s Pride Parboiled Rice
                            </div>
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap">
                            <div className="text-lg text-gray-900">???75,000</div>
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                            <div className="inline-flex items-center">
                              <button
                                className="font-bold pr-2.5"
                                onClick={decrementCounter}
                              >
                                -
                              </button>
                              <div className="w-12 h-auto bg-white border border-gray-500 border-opacity-10 p-2 rounded-lg">
                                <div className="flex justify-center items-center font-bold text-base">
                                  {counter}
                                </div>
                              </div>
                              <button
                                className="font-bold pl-2.5"
                                onClick={incrementCounter}
                              >
                                +
                              </button>
                            </div>
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap">
                            <div className="text-lg text-gray-900">???75,000</div>
                          </td>
                        </tr>
                        <tr>
                          <td className="px-6 py-4 whitespace-nowrap">
                            <div className="flex items-center">
                              <div className="flex-shrink-0 h-10 w-10 cursor-pointer">
                                <svg
                                  width="18"
                                  height="22"
                                  viewBox="0 0 18 22"
                                  fill="none"
                                  xmlns="http://www.w3.org/2000/svg"
                                >
                                  <path
                                    d="M8.9999 0.714355C9.87953 0.714355 10.7255 1.05244 11.3629 1.65869C12.0002 2.26494 12.3802 3.09296 12.4242 3.9715L12.4285 4.14293H16.7142C16.9326 4.14317 17.1428 4.22682 17.3016 4.3768C17.4605 4.52677 17.5561 4.73174 17.5689 4.94984C17.5817 5.16793 17.5107 5.38268 17.3705 5.55021C17.2303 5.71774 17.0314 5.82541 16.8145 5.85121L16.7142 5.85721H15.9865L14.975 18.3312C14.9098 19.1361 14.5439 19.887 13.9503 20.4345C13.3566 20.9819 12.5786 21.2858 11.771 21.2858H6.22875C5.42119 21.2858 4.6432 20.9819 4.04952 20.4345C3.45585 19.887 3.09 19.1361 3.02475 18.3312L2.01247 5.85721H1.28561C1.07567 5.85718 0.873035 5.78011 0.716148 5.6406C0.559261 5.50109 0.45903 5.30886 0.434467 5.10036L0.428467 5.00007C0.428494 4.79013 0.505572 4.58749 0.64508 4.43061C0.784588 4.27372 0.976823 4.17349 1.18532 4.14893L1.28561 4.14293H5.57132C5.57132 3.23361 5.93255 2.36154 6.57553 1.71856C7.21851 1.07558 8.09058 0.714355 8.9999 0.714355ZM7.07132 8.64293C6.91598 8.64293 6.76589 8.69919 6.64881 8.8013C6.53174 8.9034 6.45559 9.04445 6.43447 9.19835L6.42847 9.28578V16.1429L6.43447 16.2304C6.45564 16.3842 6.5318 16.5252 6.64887 16.6273C6.76594 16.7294 6.91601 16.7856 7.07132 16.7856C7.22664 16.7856 7.37671 16.7294 7.49378 16.6273C7.61085 16.5252 7.68701 16.3842 7.70818 16.2304L7.71418 16.1429V9.28578L7.70818 9.19835C7.68705 9.04445 7.61091 8.9034 7.49384 8.8013C7.37676 8.69919 7.22667 8.64293 7.07132 8.64293ZM10.9285 8.64293C10.7731 8.64293 10.623 8.69919 10.506 8.8013C10.3889 8.9034 10.3127 9.04445 10.2916 9.19835L10.2856 9.28578V16.1429L10.2916 16.2304C10.3128 16.3842 10.3889 16.5252 10.506 16.6273C10.6231 16.7294 10.7731 16.7856 10.9285 16.7856C11.0838 16.7856 11.2338 16.7294 11.3509 16.6273C11.468 16.5252 11.5442 16.3842 11.5653 16.2304L11.5713 16.1429V9.28578L11.5653 9.19835C11.5442 9.04445 11.4681 8.9034 11.351 8.8013C11.2339 8.69919 11.0838 8.64293 10.9285 8.64293ZM8.9999 2.42864C8.5674 2.4285 8.15084 2.59185 7.83371 2.88592C7.51658 3.18 7.32233 3.58308 7.2899 4.01435L7.28561 4.14293H10.7142L10.7099 4.01435C10.6775 3.58308 10.4832 3.18 10.1661 2.88592C9.84895 2.59185 9.43239 2.4285 8.9999 2.42864Z"
                                    fill="#828282"
                                  />
                                </svg>
                              </div>
                            </div>
                          </td>
                          <td className="px-3 py-4 whitespace-nowrap">
                            <div
                              className="flex-shrink-0 w-20 h-auto rounded-lg"
                              style={{ background: "#ECEDEE" }}
                            >
                              <div className="flex justify-center items-center p-1.5">
                                <Image
                                  src="/assets/img/image-318.png"
                                  alt="rice"
                                  width={50}
                                  height={57}
                                />
                              </div>
                            </div>
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap">
                            <div className="text-lg text-gray-900">
                              Mama&#39;s Pride Parboiled Rice
                            </div>
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap">
                            <div className="text-lg text-gray-900">???75,000</div>
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                            <div className="inline-flex items-center">
                              <button
                                className="font-bold pr-2.5"
                                onClick={decrementCounter}
                              >
                                -
                              </button>
                              <div className="w-12 h-auto bg-white border border-gray-500 border-opacity-10 p-2 rounded-lg">
                                <div className="flex justify-center items-center font-bold text-base">
                                  {counter}
                                </div>
                              </div>
                              <button
                                className="font-bold pl-2.5"
                                onClick={incrementCounter}
                              >
                                +
                              </button>
                            </div>
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap">
                            <div className="text-lg text-gray-900">???75,000</div>
                          </td>
                        </tr>
                        <tr>
                          <td className="px-6 py-4 whitespace-nowrap">
                            <div className="flex items-center">
                              <div className="flex-shrink-0 h-10 w-10 cursor-pointer">
                                <svg
                                  width="18"
                                  height="22"
                                  viewBox="0 0 18 22"
                                  fill="none"
                                  xmlns="http://www.w3.org/2000/svg"
                                >
                                  <path
                                    d="M8.9999 0.714355C9.87953 0.714355 10.7255 1.05244 11.3629 1.65869C12.0002 2.26494 12.3802 3.09296 12.4242 3.9715L12.4285 4.14293H16.7142C16.9326 4.14317 17.1428 4.22682 17.3016 4.3768C17.4605 4.52677 17.5561 4.73174 17.5689 4.94984C17.5817 5.16793 17.5107 5.38268 17.3705 5.55021C17.2303 5.71774 17.0314 5.82541 16.8145 5.85121L16.7142 5.85721H15.9865L14.975 18.3312C14.9098 19.1361 14.5439 19.887 13.9503 20.4345C13.3566 20.9819 12.5786 21.2858 11.771 21.2858H6.22875C5.42119 21.2858 4.6432 20.9819 4.04952 20.4345C3.45585 19.887 3.09 19.1361 3.02475 18.3312L2.01247 5.85721H1.28561C1.07567 5.85718 0.873035 5.78011 0.716148 5.6406C0.559261 5.50109 0.45903 5.30886 0.434467 5.10036L0.428467 5.00007C0.428494 4.79013 0.505572 4.58749 0.64508 4.43061C0.784588 4.27372 0.976823 4.17349 1.18532 4.14893L1.28561 4.14293H5.57132C5.57132 3.23361 5.93255 2.36154 6.57553 1.71856C7.21851 1.07558 8.09058 0.714355 8.9999 0.714355ZM7.07132 8.64293C6.91598 8.64293 6.76589 8.69919 6.64881 8.8013C6.53174 8.9034 6.45559 9.04445 6.43447 9.19835L6.42847 9.28578V16.1429L6.43447 16.2304C6.45564 16.3842 6.5318 16.5252 6.64887 16.6273C6.76594 16.7294 6.91601 16.7856 7.07132 16.7856C7.22664 16.7856 7.37671 16.7294 7.49378 16.6273C7.61085 16.5252 7.68701 16.3842 7.70818 16.2304L7.71418 16.1429V9.28578L7.70818 9.19835C7.68705 9.04445 7.61091 8.9034 7.49384 8.8013C7.37676 8.69919 7.22667 8.64293 7.07132 8.64293ZM10.9285 8.64293C10.7731 8.64293 10.623 8.69919 10.506 8.8013C10.3889 8.9034 10.3127 9.04445 10.2916 9.19835L10.2856 9.28578V16.1429L10.2916 16.2304C10.3128 16.3842 10.3889 16.5252 10.506 16.6273C10.6231 16.7294 10.7731 16.7856 10.9285 16.7856C11.0838 16.7856 11.2338 16.7294 11.3509 16.6273C11.468 16.5252 11.5442 16.3842 11.5653 16.2304L11.5713 16.1429V9.28578L11.5653 9.19835C11.5442 9.04445 11.4681 8.9034 11.351 8.8013C11.2339 8.69919 11.0838 8.64293 10.9285 8.64293ZM8.9999 2.42864C8.5674 2.4285 8.15084 2.59185 7.83371 2.88592C7.51658 3.18 7.32233 3.58308 7.2899 4.01435L7.28561 4.14293H10.7142L10.7099 4.01435C10.6775 3.58308 10.4832 3.18 10.1661 2.88592C9.84895 2.59185 9.43239 2.4285 8.9999 2.42864Z"
                                    fill="#828282"
                                  />
                                </svg>
                              </div>
                            </div>
                          </td>
                          <td className="px-3 py-4 whitespace-nowrap">
                            <div
                              className="flex-shrink-0 w-20 h-auto rounded-lg"
                              style={{ background: "#ECEDEE" }}
                            >
                              <div className="flex justify-center items-center p-1.5">
                                <Image
                                  src="/assets/img/image-318.png"
                                  alt="rice"
                                  width={50}
                                  height={57}
                                />
                              </div>
                            </div>
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap">
                            <div className="text-lg text-gray-900">
                              Mama&#39;s Pride Parboiled Rice
                            </div>
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap">
                            <div className="text-lg text-gray-900">???75,000</div>
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                            <div className="inline-flex items-center">
                              <button
                                className="font-bold pr-2.5"
                                onClick={decrementCounter}
                              >
                                -
                              </button>
                              <div className="w-12 h-auto bg-white border border-gray-500 border-opacity-10 p-2 rounded-lg">
                                <div className="flex justify-center items-center font-bold text-base">
                                  {counter}
                                </div>
                              </div>
                              <button
                                className="font-bold pl-2.5"
                                onClick={incrementCounter}
                              >
                                +
                              </button>
                            </div>
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap">
                            <div className="text-lg text-gray-900">???75,000</div>
                          </td>
                        </tr>
                        <tr>
                          <td className="px-6 py-4 whitespace-nowrap">
                            <div className="flex items-center">
                              <div className="flex-shrink-0 h-10 w-10 cursor-pointer">
                                <svg
                                  width="18"
                                  height="22"
                                  viewBox="0 0 18 22"
                                  fill="none"
                                  xmlns="http://www.w3.org/2000/svg"
                                >
                                  <path
                                    d="M8.9999 0.714355C9.87953 0.714355 10.7255 1.05244 11.3629 1.65869C12.0002 2.26494 12.3802 3.09296 12.4242 3.9715L12.4285 4.14293H16.7142C16.9326 4.14317 17.1428 4.22682 17.3016 4.3768C17.4605 4.52677 17.5561 4.73174 17.5689 4.94984C17.5817 5.16793 17.5107 5.38268 17.3705 5.55021C17.2303 5.71774 17.0314 5.82541 16.8145 5.85121L16.7142 5.85721H15.9865L14.975 18.3312C14.9098 19.1361 14.5439 19.887 13.9503 20.4345C13.3566 20.9819 12.5786 21.2858 11.771 21.2858H6.22875C5.42119 21.2858 4.6432 20.9819 4.04952 20.4345C3.45585 19.887 3.09 19.1361 3.02475 18.3312L2.01247 5.85721H1.28561C1.07567 5.85718 0.873035 5.78011 0.716148 5.6406C0.559261 5.50109 0.45903 5.30886 0.434467 5.10036L0.428467 5.00007C0.428494 4.79013 0.505572 4.58749 0.64508 4.43061C0.784588 4.27372 0.976823 4.17349 1.18532 4.14893L1.28561 4.14293H5.57132C5.57132 3.23361 5.93255 2.36154 6.57553 1.71856C7.21851 1.07558 8.09058 0.714355 8.9999 0.714355ZM7.07132 8.64293C6.91598 8.64293 6.76589 8.69919 6.64881 8.8013C6.53174 8.9034 6.45559 9.04445 6.43447 9.19835L6.42847 9.28578V16.1429L6.43447 16.2304C6.45564 16.3842 6.5318 16.5252 6.64887 16.6273C6.76594 16.7294 6.91601 16.7856 7.07132 16.7856C7.22664 16.7856 7.37671 16.7294 7.49378 16.6273C7.61085 16.5252 7.68701 16.3842 7.70818 16.2304L7.71418 16.1429V9.28578L7.70818 9.19835C7.68705 9.04445 7.61091 8.9034 7.49384 8.8013C7.37676 8.69919 7.22667 8.64293 7.07132 8.64293ZM10.9285 8.64293C10.7731 8.64293 10.623 8.69919 10.506 8.8013C10.3889 8.9034 10.3127 9.04445 10.2916 9.19835L10.2856 9.28578V16.1429L10.2916 16.2304C10.3128 16.3842 10.3889 16.5252 10.506 16.6273C10.6231 16.7294 10.7731 16.7856 10.9285 16.7856C11.0838 16.7856 11.2338 16.7294 11.3509 16.6273C11.468 16.5252 11.5442 16.3842 11.5653 16.2304L11.5713 16.1429V9.28578L11.5653 9.19835C11.5442 9.04445 11.4681 8.9034 11.351 8.8013C11.2339 8.69919 11.0838 8.64293 10.9285 8.64293ZM8.9999 2.42864C8.5674 2.4285 8.15084 2.59185 7.83371 2.88592C7.51658 3.18 7.32233 3.58308 7.2899 4.01435L7.28561 4.14293H10.7142L10.7099 4.01435C10.6775 3.58308 10.4832 3.18 10.1661 2.88592C9.84895 2.59185 9.43239 2.4285 8.9999 2.42864Z"
                                    fill="#828282"
                                  />
                                </svg>
                              </div>
                            </div>
                          </td>
                          <td className="px-3 py-4 whitespace-nowrap">
                            <div
                              className="flex-shrink-0 w-20 h-auto rounded-lg"
                              style={{ background: "#ECEDEE" }}
                            >
                              <div className="flex justify-center items-center p-1.5">
                                <Image
                                  src="/assets/img/image-318.png"
                                  alt="rice"
                                  width={50}
                                  height={57}
                                />
                              </div>
                            </div>
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap">
                            <div className="text-lg text-gray-900">
                              Mama&#39;s Pride Parboiled Rice
                            </div>
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap">
                            <div className="text-lg text-gray-900">???75,000</div>
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                            <div className="inline-flex items-center">
                              <button
                                className="font-bold pr-2.5"
                                onClick={decrementCounter}
                              >
                                -
                              </button>
                              <div className="w-12 h-auto bg-white border border-gray-500 border-opacity-10 p-2 rounded-lg">
                                <div className="flex justify-center items-center font-bold text-base">
                                  {counter}
                                </div>
                              </div>
                              <button
                                className="font-bold pl-2.5"
                                onClick={incrementCounter}
                              >
                                +
                              </button>
                            </div>
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap">
                            <div className="text-lg text-gray-900">???75,000</div>
                          </td>
                        </tr>
                        <tr>
                          <td></td>
                          <td></td>
                          <td></td>
                          <td></td>
                          <td></td>
                          <td className="px-6 py-4 whitespace-nowrap">
                            <h2
                              className="text-2xl font-bold"
                              style={{ color: "#4D966D" }}
                            >
                              ???75,000
                            </h2>
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex justify-end my-10">
              <button
                className="px-10 py-2.5 text-white text-lg font-bold rounded-3xl block"
                style={{ backgroundColor: "#4D966D" }}
              >
                <Link href="/preorder/delivery-options">Continue</Link>
              </button>
            </div>
          </div>
        </div>
      </div>
      <Footer></Footer>
    </div>
  );
}

export default Cart;
