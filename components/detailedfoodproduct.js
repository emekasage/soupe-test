import Image from "next/image";
import pageStyles from "../styles/Pages.module.css";
import { useState } from "react";
import Link from "next/link";

export default function DetailedFoodProducts() {
  const [counter, setCounter] = useState(1);
  const incrementCounter = () => setCounter(counter + 1);
  let decrementCounter = () => setCounter(counter - 1);

  if (counter <= 1) {
    decrementCounter = () => setCounter(1);
  }

  return (
    <div
      className="sm:block md:flex justify-between md:mx-4 lg:mx-8 xl:mx-24"
      style={{ fontFamily: "Open Sans, sans-serif" }}
    >
      <div
        className={`md:max-w-sm lg:max-w-lg xl:max-w-xl 2xl:max-w-2xl bg-gray-400 bg-opacity-30 ${pageStyles.graybx}`}
      >
        <div className="py-20 px-5">
          <div className="flex justify-between items-center">
            <h5 className="font-bold text-3xl pr-8">
              Mama&#39;s Pride Parboiled Rice
            </h5>
            <div className="pl-8">
              <svg
                width="24"
                height="25"
                viewBox="0 0 24 25"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M0.0625 24.4375V0.5625H23.9375V24.4375H0.0625Z"
                  stroke="#B7B6B6"
                  strokeWidth="0.125"
                />
                <path
                  d="M12 20.75C12 20.75 2.625 15.5 2.625 9.12501C2.62519 7.99826 3.01561 6.90635 3.72989 6.03493C4.44416 5.16351 5.4382 4.56636 6.54299 4.34501C7.64778 4.12367 8.79514 4.29179 9.78999 4.82079C10.7848 5.34979 11.5658 6.20702 12 7.24673L12 7.24673C12.4342 6.20702 13.2152 5.34979 14.21 4.82079C15.2049 4.29179 16.3522 4.12367 17.457 4.34501C18.5618 4.56636 19.5558 5.16351 20.2701 6.03493C20.9844 6.90635 21.3748 7.99826 21.375 9.12501C21.375 15.5 12 20.75 12 20.75Z"
                  stroke="#333333"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </div>
          </div>
          <div className="flex justify-center items-center">
            <div className="lg:ml-36 mt-6">
              <Image
                src="/assets/img/image-317.png"
                alt="bag_of_rice"
                width={328}
                height={377}
              />
            </div>
            <div className="lg:ml-32">
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M9 18L15 12L9 6"
                  stroke="black"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </div>
          </div>
          <div
            className={`flex justify-center grid grid-cols-1 md:gap-6 lg:gap-16 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-4 xl:grid-cols-4 py-4 lg:mx-8 xl:mx-20 ${pageStyles.order_grid}`}
            style={{ fontFamily: "Open Sans, sans-serif" }}
          >
            <div className="md:w-12 lg:w-16 xl:w-24 h-auto bg-white rounded-lg">
              <div className="flex justify-center items-center">
                <Image
                  src="/assets/img/image-317.png"
                  alt="bag_of_rice"
                  width={59}
                  height={68}
                />
              </div>
            </div>
            <div className="md:w-12 lg:w-16 xl:w-24 h-auto bg-white rounded-lg">
              <div className="flex justify-center items-center">
                <Image
                  src="/assets/img/image-317.png"
                  alt="bag_of_rice"
                  width={59}
                  height={68}
                />
              </div>
            </div>
            <div className="md:w-12 lg:w-16 xl:w-24 h-auto bg-white rounded-lg">
              <div className="flex justify-center items-center">
                <Image
                  src="/assets/img/image-317.png"
                  alt="bag_of_rice"
                  width={59}
                  height={68}
                />
              </div>
            </div>
            <div className="md:w-12 lg:w-16 xl:w-24 h-auto bg-white rounded-lg">
              <div className="flex justify-center items-center">
                <Image
                  src="/assets/img/image-317.png"
                  alt="bag_of_rice"
                  width={59}
                  height={68}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className={`lg:max-w-xs xl:max-w-md mt-5 ${pageStyles.graybxnd}`}>
        <h5 className="text-base font-bold">Description</h5>
        <p className="text-lg font-normal py-4">
          Richard McClintock, a Latin professor at Hampden-Sydney College in
          Virginia, looked up one of the more obscure Latin words, consectetur,
          Lorem Ipsum has been the industry&#39;s standard dummy text ever since
          the 1500s, when an unknown printer took a galley of type and scrambled
          it to make a type specimen book.
        </p>
        <hr className="border-gray-300 max-w-sm" />
        <div>
          <h5 className="text-base font-bold pt-3">Variation Available</h5>
          <div className="grid grid-cols-1 gap-3 sm:grid-cols-4 md:grid-cols-4 lg:grid-cols-4 xl:grid-cols-4 py-4">
            <div className="w-12 h-auto bg-white border border-gray-500 border-opacity-10 p-2 rounded-lg">
              <div className="flex justify-center items-center font-bold text-base">
                5
              </div>
            </div>
            <div className="w-12 h-auto bg-white border border-gray-500 border-opacity-10 p-2 rounded-lg">
              <div className="flex justify-center items-center font-bold text-base">
                10
              </div>
            </div>
            <div className="w-12 h-auto bg-white border border-gray-500 border-opacity-10 p-2 rounded-lg">
              <div className="flex justify-center items-center font-bold text-base">
                25
              </div>
            </div>
            <div className="w-12 h-auto bg-white border border-gray-500 border-opacity-10 p-2 rounded-lg">
              <div className="flex justify-center items-center font-bold text-base">
                50
              </div>
            </div>
          </div>
          <hr className="border-gray-300 max-w-sm" />
        </div>
        <div className="inline-flex items-center py-5">
          <button className="font-bold pr-2.5" onClick={decrementCounter}>
            -
          </button>
          <div className="w-12 h-auto bg-white border border-gray-500 border-opacity-10 p-2 rounded-lg">
            <div className="flex justify-center items-center font-bold text-base">
              {counter}
            </div>
          </div>
          <button className="font-bold pl-2.5" onClick={incrementCounter}>
            +
          </button>
        </div>
        <button
          className="px-10 py-2.5 text-white text-lg font-bold rounded-3xl block"
          style={{ backgroundColor: "#4D966D" }}
        >
          <Link href="/preorder/cart" passHref={true}>
            Add to cart
          </Link>
        </button>
      </div>
    </div>
  );
}
