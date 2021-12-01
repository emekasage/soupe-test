import Image from "next/image";
import pageStyles from "../styles/Pages.module.css";
import Link from "next/link";

export default function FoodItemsWithCart() {
  return (
    <div
      className="flex justify-center grid grid-cols-1 md:gap-11 lg:gap-8 xl:gap-24 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 py-4 md:ml-11 lg:ml-8 xl:ml-24"
      style={{ fontFamily: "Open Sans, sans-serif" }}
    >
      <div className={pageStyles.food_card_cart}>
        <div className="relative w-64 h-64 py-6 bg-white bg-cover bg-center transition duration-300 ease-in-out transform hover:scale-95 rounded-2xl cursor-pointer">
          <Link href="/preorder/grains/longgrainrice" passHref={true}>
            <div href="#" className="flex justify-center items-center pt-4">
              <Image
                src="/assets/img/image-7.png"
                alt="rice"
                width={262}
                height={192}
              />
            </div>
          </Link>
        </div>
        <div className="flex justify-between items-center w-64">
          <div className="p-text text-xl font-bold pt-2.5 pb-1.5">
            Short Grain...
          </div>
          <div className="inline-flex">
            <svg
              width="25"
              height="25"
              viewBox="0 0 25 25"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="pr-1.5"
            >
              <path
                d="M8.5 22.25C9.32843 22.25 10 21.5784 10 20.75C10 19.9216 9.32843 19.25 8.5 19.25C7.67157 19.25 7 19.9216 7 20.75C7 21.5784 7.67157 22.25 8.5 22.25Z"
                fill="#23212B"
              />
              <path
                d="M18.25 22.25C19.0784 22.25 19.75 21.5784 19.75 20.75C19.75 19.9216 19.0784 19.25 18.25 19.25C17.4216 19.25 16.75 19.9216 16.75 20.75C16.75 21.5784 17.4216 22.25 18.25 22.25Z"
                fill="#23212B"
              />
              <path
                d="M4.96429 7.25H21.7857L19.3108 15.9121C19.2213 16.2255 19.0321 16.5012 18.7718 16.6975C18.5116 16.8938 18.1945 17 17.8685 17H8.88145C8.55549 17 8.23839 16.8938 7.97816 16.6975C7.71792 16.5012 7.52872 16.2255 7.43917 15.9121L4.04827 4.04396C4.0035 3.88725 3.90889 3.74939 3.77878 3.65124C3.64866 3.55309 3.49011 3.5 3.32713 3.5H1.75"
                stroke="#23212B"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
            <svg
              width="24"
              height="25"
              viewBox="0 0 24 25"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="pl-1.5"
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
        <div className="text-lg">
          <span className="font-bold" style={{ color: "#EB5757" }}>
            ₦1,900
          </span>
        </div>
      </div>
      <div className={pageStyles.food_card_cart}>
        <div className="relative w-64 h-64 py-6 bg-white bg-cover bg-center transition duration-300 ease-in-out transform hover:scale-95 rounded-2xl">
          <a href="#" className="flex justify-center items-center pt-4">
            <Image
              src="/assets/img/image-7.png"
              alt="rice"
              width={262}
              height={192}
            />
          </a>
        </div>
        <div className="flex justify-between items-center w-64">
          <div className="p-text text-xl font-bold pt-2.5 pb-1.5">
            Short Grain...
          </div>
          <div className="inline-flex">
            <svg
              width="25"
              height="25"
              viewBox="0 0 25 25"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="pr-1.5"
            >
              <path
                d="M8.5 22.25C9.32843 22.25 10 21.5784 10 20.75C10 19.9216 9.32843 19.25 8.5 19.25C7.67157 19.25 7 19.9216 7 20.75C7 21.5784 7.67157 22.25 8.5 22.25Z"
                fill="#23212B"
              />
              <path
                d="M18.25 22.25C19.0784 22.25 19.75 21.5784 19.75 20.75C19.75 19.9216 19.0784 19.25 18.25 19.25C17.4216 19.25 16.75 19.9216 16.75 20.75C16.75 21.5784 17.4216 22.25 18.25 22.25Z"
                fill="#23212B"
              />
              <path
                d="M4.96429 7.25H21.7857L19.3108 15.9121C19.2213 16.2255 19.0321 16.5012 18.7718 16.6975C18.5116 16.8938 18.1945 17 17.8685 17H8.88145C8.55549 17 8.23839 16.8938 7.97816 16.6975C7.71792 16.5012 7.52872 16.2255 7.43917 15.9121L4.04827 4.04396C4.0035 3.88725 3.90889 3.74939 3.77878 3.65124C3.64866 3.55309 3.49011 3.5 3.32713 3.5H1.75"
                stroke="#23212B"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
            <svg
              width="24"
              height="25"
              viewBox="0 0 24 25"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="pl-1.5"
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
        <div className="text-lg">
          <span className="font-bold" style={{ color: "#EB5757" }}>
            ₦1,900
          </span>
        </div>
      </div>
      <div className={pageStyles.food_card_cart}>
        <div className="relative w-64 h-64 py-6 bg-white bg-cover bg-center transition duration-300 ease-in-out transform hover:scale-95 rounded-2xl">
          <a href="#" className="flex justify-center items-center pt-4">
            <Image
              src="/assets/img/image-7.png"
              alt="rice"
              width={262}
              height={192}
            />
          </a>
        </div>
        <div className="flex justify-between items-center w-64">
          <div className="p-text text-xl font-bold pt-2.5 pb-1.5">
            Short Grain...
          </div>
          <div className="inline-flex">
            <svg
              width="25"
              height="25"
              viewBox="0 0 25 25"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="pr-1.5"
            >
              <path
                d="M8.5 22.25C9.32843 22.25 10 21.5784 10 20.75C10 19.9216 9.32843 19.25 8.5 19.25C7.67157 19.25 7 19.9216 7 20.75C7 21.5784 7.67157 22.25 8.5 22.25Z"
                fill="#23212B"
              />
              <path
                d="M18.25 22.25C19.0784 22.25 19.75 21.5784 19.75 20.75C19.75 19.9216 19.0784 19.25 18.25 19.25C17.4216 19.25 16.75 19.9216 16.75 20.75C16.75 21.5784 17.4216 22.25 18.25 22.25Z"
                fill="#23212B"
              />
              <path
                d="M4.96429 7.25H21.7857L19.3108 15.9121C19.2213 16.2255 19.0321 16.5012 18.7718 16.6975C18.5116 16.8938 18.1945 17 17.8685 17H8.88145C8.55549 17 8.23839 16.8938 7.97816 16.6975C7.71792 16.5012 7.52872 16.2255 7.43917 15.9121L4.04827 4.04396C4.0035 3.88725 3.90889 3.74939 3.77878 3.65124C3.64866 3.55309 3.49011 3.5 3.32713 3.5H1.75"
                stroke="#23212B"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
            <svg
              width="24"
              height="25"
              viewBox="0 0 24 25"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="pl-1.5"
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
        <div className="text-lg pb-10">
          <span className="font-bold" style={{ color: "#EB5757" }}>
            ₦1,900
          </span>
        </div>
      </div>
    </div>
  );
}
