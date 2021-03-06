import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import pageStyles from "../../styles/Pages.module.css";

export default function Index() {
  const [passwordShown, setPasswordShown] = useState(false);
  const togglePasswordVisiblity = () => {
    setPasswordShown(passwordShown ? false : true);
  };
  return (
    <div
      className={`bg-center bg-no-repeat bg-cover h-screen overflow-x-hidden ${pageStyles.dashbg}`}
      style={{ fontFamily: "Open Sans, sans-serif" }}
    >
      <Head>
        <title>Soupe Sign Up</title>
        <meta
          name="keywords"
          content="Preorder, Food Calculator, Compare price"
        ></meta>
      </Head>
      <div
        className={`sm:px-8 md:px-16 lg:px-10 xl:px-20 py-10 flex justify-between items-center ${pageStyles.mobheader}`}
      >
        <div>
          <Link href="/" passHref={true}>
            <Image
              className="cursor-pointer"
              src="/assets/img/soupe-logo.png"
              alt="Soupe Logo"
              width={98}
              height={30}
            />
          </Link>
        </div>
        <div
          className="cursor-pointer font-bold text-lg"
          style={{ color: "#DF421A" }}
        >
          <Link href="/login" passHref={true}>
            Log in
          </Link>
        </div>
      </div>
      <div className="sm:mx-16 md:mx-40 lg:mx-10 xl:mx-20 sm:my-4 md:my-16 sm:block lg:flex justify-between items-center">
        <div className={`max-w-lg ${pageStyles.mobheading}`}>
          <h4
            className="sm:text-center md:text-center lg:text-left text-6xl font-bold pb-3"
            style={{ lineHeight: "75px" }}
          >
            How would you like to register?
          </h4>
          <p className="sm:text-center md:text-center lg:text-left text-2xl font-normal leading-8">
            If you have an account, you can{" "}
            <span className="font-bold" style={{ color: "#DF421A" }}>
              <Link href="/login" passHref={true}>
                Log in
              </Link>
            </span>
          </p>
        </div>
        <div className="sm:ml-8 lg:mr-8 max-w-sm">
          <div className="flex flex-col w-full sm:pt-8 md:pt-6 lg:pt-0">
            <Link href="/signup/consumer" passHref={true}>
              <div
                className={`flex justify-between items-center px-8 py-6 bg-white rounded-md mb-4 cursor-pointer ${pageStyles.signcard}`}
              >
                <div className="signup_icon">
                  <svg
                    width="40"
                    height="40"
                    viewBox="0 0 40 40"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <rect
                      width="40"
                      height="40"
                      rx="6"
                      fill="#284065"
                      fillOpacity="0.1"
                    />
                    <path
                      d="M20 23C23.3137 23 26 20.3137 26 17C26 13.6863 23.3137 11 20 11C16.6863 11 14 13.6863 14 17C14 20.3137 16.6863 23 20 23Z"
                      stroke="#4D966D"
                      strokeWidth="1.5"
                      strokeMiterlimit="10"
                    />
                    <path
                      d="M10.9053 28.2491C11.8274 26.6531 13.1532 25.3278 14.7497 24.4064C16.3461 23.485 18.1569 23 20.0002 23C21.8434 23 23.6542 23.4851 25.2506 24.4065C26.8471 25.3279 28.1729 26.6533 29.0949 28.2493"
                      stroke="#4D966D"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </div>
                <div className="pl-6">
                  <h6 className="text-base font-normal py-1">Consumer</h6>
                  <p
                    className="text-sm font-normal"
                    style={{ color: "#828282" }}
                  >
                    Personal account to pre-order or calculate farm produce when
                    you need
                  </p>
                </div>
              </div>
            </Link>
            <Link href="/signup/cec" passHref={true}>
              <div
                className={`flex justify-between items-center px-8 py-6 bg-white rounded-md mb-4 cursor-pointer ${pageStyles.signcard}`}
              >
                <div>
                  <svg
                    width="40"
                    height="40"
                    viewBox="0 0 40 40"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <rect
                      width="40"
                      height="40"
                      rx="6"
                      fill="#284065"
                      fillOpacity="0.1"
                    />
                    <path
                      d="M12.5 21.0859V27.4995C12.5 27.6985 12.579 27.8892 12.7197 28.0299C12.8603 28.1705 13.0511 28.2495 13.25 28.2495H26.75C26.9489 28.2495 27.1397 28.1705 27.2803 28.0299C27.421 27.8892 27.5 27.6985 27.5 27.4995V21.0861"
                      stroke="black"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M13.0657 11.75H26.9343C27.0973 11.75 27.2558 11.8031 27.3859 11.9012C27.516 11.9994 27.6106 12.1372 27.6554 12.294L29 17H11L12.3446 12.294C12.3894 12.1372 12.484 11.9994 12.6141 11.9012C12.7442 11.8031 12.9027 11.75 13.0657 11.75Z"
                      stroke="black"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M17 17V18.5C17 19.2956 16.6839 20.0587 16.1213 20.6213C15.5587 21.1839 14.7956 21.5 14 21.5C13.2044 21.5 12.4413 21.1839 11.8787 20.6213C11.3161 20.0587 11 19.2956 11 18.5V17"
                      stroke="black"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M23 17V18.5C23 19.2956 22.6839 20.0587 22.1213 20.6213C21.5587 21.1839 20.7956 21.5 20 21.5C19.2044 21.5 18.4413 21.1839 17.8787 20.6213C17.3161 20.0587 17 19.2956 17 18.5V17"
                      stroke="black"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M29 17V18.5C29 19.2956 28.6839 20.0587 28.1213 20.6213C27.5587 21.1839 26.7956 21.5 26 21.5C25.2044 21.5 24.4413 21.1839 23.8787 20.6213C23.3161 20.0587 23 19.2956 23 18.5V17"
                      stroke="black"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </div>
                <div className="pl-6">
                  <h6 className="text-base font-normal py-1">
                    Customer Experience Centre
                  </h6>
                  <p
                    className="text-sm font-normal"
                    style={{ color: "#828282" }}
                  >
                    Own or belong to a company, this is for you.
                  </p>
                </div>
              </div>
            </Link>
            <Link href="/signup/farmer" passHref={true}>
              <div
                className={`flex justify-between items-center px-8 py-6 bg-white rounded-md mb-4 cursor-pointer ${pageStyles.signcard}`}
              >
                <div>
                  <svg
                    width="41"
                    height="40"
                    viewBox="0 0 41 40"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <rect
                      width="40.0705"
                      height="40"
                      rx="6"
                      fill="#284065"
                      fillOpacity="0.1"
                    />
                    <path
                      d="M31.569 13.9477H29.0618C28.9189 12.3239 28.173 10.8126 26.9709 9.71163C25.7689 8.61068 24.198 8 22.5679 8C20.9379 8 19.367 8.61068 18.165 9.71163C16.9629 10.8126 16.217 12.3239 16.0741 13.9477H13.5167C13.3837 13.9477 13.2562 14.0005 13.1621 14.0946C13.0681 14.1886 13.0153 14.3162 13.0153 14.4491C13.0153 14.5821 13.0681 14.7097 13.1621 14.8037C13.2562 14.8978 13.3837 14.9506 13.5167 14.9506H17.0269V23.8113C17.0282 24.7857 17.4159 25.7199 18.1049 26.4089C18.794 27.0979 19.7281 27.4856 20.7025 27.4869H22.0414V31.4985C22.0414 31.6315 22.0943 31.7591 22.1883 31.8531C22.2823 31.9472 22.4099 32 22.5429 32H27.5574C27.6904 32 27.8179 31.9472 27.912 31.8531C28.006 31.7591 28.0589 31.6315 28.0589 31.4985V21.9108C29.2022 21.63 30.0647 20.4064 30.0647 18.9622C30.0647 17.518 29.2022 16.2945 28.0589 16.0137V14.9506H31.569C31.702 14.9506 31.8296 14.8978 31.9236 14.8037C32.0177 14.7097 32.0705 14.5821 32.0705 14.4491C32.0705 14.3162 32.0177 14.1886 31.9236 14.0946C31.8296 14.0005 31.702 13.9477 31.569 13.9477ZM22.5429 8.93316C23.9229 8.92745 25.255 9.43927 26.2762 10.3676C27.2973 11.2959 27.9334 12.5733 28.0589 13.9477H17.052C17.177 12.5777 17.8095 11.3038 18.8254 10.3761C19.8413 9.44835 21.1671 8.93372 22.5429 8.93316ZM29.0618 18.9622C29.0618 20.0704 28.3848 20.968 27.5574 20.968C27.4244 20.968 27.2969 21.0209 27.2028 21.1149C27.1088 21.2089 27.056 21.3365 27.056 21.4695V30.9971H23.0443V26.9855C23.0443 26.8525 22.9915 26.7249 22.8975 26.6309C22.8034 26.5368 22.6759 26.484 22.5429 26.484H20.7025C19.9937 26.484 19.3139 26.2024 18.8126 25.7012C18.3114 25.2 18.0298 24.5201 18.0298 23.8113V14.9506H27.056V16.455C27.056 16.588 27.1088 16.7155 27.2028 16.8095C27.2969 16.9036 27.4244 16.9564 27.5574 16.9564C28.3848 16.9564 29.0618 17.854 29.0618 18.9622ZM19.0578 20.8076L20.0607 17.7989C20.0818 17.7363 20.1149 17.6785 20.1584 17.6288C20.2018 17.579 20.2545 17.5383 20.3137 17.509C20.3728 17.4797 20.4372 17.4623 20.503 17.4578C20.5689 17.4533 20.635 17.4619 20.6975 17.4829C20.7601 17.504 20.8179 17.5372 20.8676 17.5806C20.9174 17.624 20.958 17.6768 20.9874 17.7359C21.0167 17.7951 21.0341 17.8594 21.0386 17.9253C21.0431 17.9911 21.0345 18.0572 21.0134 18.1198L20.0105 21.1285C19.9769 21.2281 19.9128 21.3146 19.8273 21.3758C19.7418 21.437 19.6393 21.4698 19.5342 21.4695C19.4798 21.4681 19.4259 21.4597 19.3737 21.4444C19.311 21.4235 19.2531 21.3904 19.2033 21.347C19.1535 21.3036 19.1127 21.2508 19.0834 21.1916C19.054 21.1325 19.0367 21.0681 19.0323 21.0022C19.0279 20.9363 19.0365 20.8701 19.0578 20.8076ZM22.0414 23.9768C22.0414 24.1097 21.9886 24.2373 21.8946 24.3313C21.8005 24.4254 21.673 24.4782 21.54 24.4782H19.5342C19.4012 24.4782 19.2736 24.4254 19.1796 24.3313C19.0855 24.2373 19.0327 24.1097 19.0327 23.9768C19.0327 23.8438 19.0855 23.7162 19.1796 23.6222C19.2736 23.5281 19.4012 23.4753 19.5342 23.4753H21.54C21.673 23.4753 21.8005 23.5281 21.8946 23.6222C21.9886 23.7162 22.0414 23.8438 22.0414 23.9768ZM8.52727 25.9826C8.4571 25.9787 8.38691 25.9897 8.32126 26.0148C8.25561 26.0398 8.19595 26.0784 8.14616 26.128C8.09657 26.1778 8.058 26.2374 8.03295 26.3031C8.0079 26.3687 7.99692 26.4389 8.00074 26.5091C8.02581 27.0105 8.16121 28.6553 8.74791 29.247C9.20924 29.7033 10.3124 29.8839 11.0095 29.9541V31.4985C11.0095 31.6315 11.0623 31.7591 11.1563 31.8531C11.2504 31.9472 11.3779 32 11.5109 32C11.6439 32 11.7715 31.9472 11.8655 31.8531C11.9595 31.7591 12.0124 31.6315 12.0124 31.4985V29.9541C12.7094 29.8839 13.8126 29.7033 14.2739 29.247C14.8606 28.6553 15.0211 26.9855 15.0211 26.5091C15.0245 26.4412 15.014 26.3732 14.9904 26.3095C14.9667 26.2457 14.9303 26.1874 14.8834 26.1382C14.8365 26.0889 14.78 26.0497 14.7175 26.023C14.655 25.9962 14.5876 25.9825 14.5196 25.9826C13.6552 26 12.8029 26.1892 12.0124 26.5392V25.441C12.7094 25.3708 13.8126 25.1903 14.2739 24.7339C14.8606 24.1422 15.0211 22.4724 15.0211 21.996C15.0245 21.9281 15.014 21.8602 14.9904 21.7964C14.9667 21.7326 14.9303 21.6744 14.8834 21.6251C14.8365 21.5759 14.78 21.5367 14.7175 21.5099C14.655 21.4832 14.5876 21.4694 14.5196 21.4695C13.6552 21.4869 12.8029 21.6761 12.0124 22.0261V20.9279C12.7094 20.8577 13.8126 20.6772 14.2739 20.2209C14.8606 19.6292 15.0211 17.9593 15.0211 17.4829C15.0245 17.415 15.014 17.3471 14.9904 17.2833C14.9667 17.2196 14.9303 17.1613 14.8834 17.112C14.8365 17.0628 14.78 17.0236 14.7175 16.9968C14.655 16.9701 14.5876 16.9563 14.5196 16.9564C13.6552 16.9739 12.8029 17.1631 12.0124 17.513V16.9564C12.0124 16.8234 11.9595 16.6959 11.8655 16.6018C11.7715 16.5078 11.6439 16.455 11.5109 16.455C11.3779 16.455 11.2504 16.5078 11.1563 16.6018C11.0623 16.6959 11.0095 16.8234 11.0095 16.9564V17.513C10.2266 17.1663 9.38319 16.9771 8.52727 16.9564C8.4571 16.9526 8.38691 16.9636 8.32126 16.9886C8.25561 17.0137 8.19595 17.0522 8.14616 17.1018C8.09657 17.1516 8.058 17.2113 8.03295 17.2769C8.0079 17.3426 7.99692 17.4128 8.00074 17.4829C8.02581 17.9844 8.16121 19.6292 8.74791 20.2209C9.20924 20.6772 10.3124 20.8577 11.0095 20.9279V22.0261C10.2266 21.6794 9.38319 21.4902 8.52727 21.4695C8.4571 21.4657 8.38691 21.4766 8.32126 21.5017C8.25561 21.5268 8.19595 21.5653 8.14616 21.6149C8.09657 21.6647 8.058 21.7244 8.03295 21.79C8.0079 21.8557 7.99692 21.9258 8.00074 21.996C8.02581 22.4975 8.16121 24.1422 8.74791 24.7339C9.20924 25.1903 10.3124 25.3708 11.0095 25.441V26.5392C10.2266 26.1924 9.38319 26.0033 8.52727 25.9826ZM9.45997 28.535C9.21876 28.0682 9.08027 27.5553 9.05379 27.0306C9.57849 27.0571 10.0914 27.1956 10.5582 27.4368C10.7994 27.9035 10.9378 28.4164 10.9643 28.9411C10.4396 28.9147 9.92669 28.7762 9.45997 28.535ZM12.4687 27.4418C12.9354 27.2006 13.4484 27.0621 13.973 27.0356C13.9466 27.5603 13.8081 28.0733 13.5669 28.54C13.1002 28.7812 12.5872 28.9197 12.0625 28.9462C12.089 28.4215 12.2275 27.9085 12.4687 27.4418ZM12.4687 22.9287C12.9354 22.6875 13.4484 22.549 13.973 22.5225C13.9466 23.0472 13.8081 23.5602 13.5669 24.0269C13.1002 24.2681 12.5872 24.4066 12.0625 24.4331C12.089 23.9084 12.2275 23.3954 12.4687 22.9287ZM12.4687 18.4156C12.9354 18.1744 13.4484 18.0359 13.973 18.0095C13.9466 18.5342 13.8081 19.0471 13.5669 19.5138C13.1002 19.755 12.5872 19.8935 12.0625 19.92C12.089 19.3953 12.2275 18.8824 12.4687 18.4156ZM9.45997 19.5088C9.21876 19.0421 9.08027 18.5291 9.05379 18.0044C9.57849 18.0309 10.0914 18.1694 10.5582 18.4106C10.7994 18.8773 10.9378 19.3903 10.9643 19.915C10.4396 19.8885 9.92669 19.75 9.45997 19.5088ZM9.45997 24.0219C9.21876 23.5552 9.08027 23.0422 9.05379 22.5175C9.57849 22.544 10.0914 22.6825 10.5582 22.9237C10.7994 23.3904 10.9378 23.9034 10.9643 24.4281C10.4396 24.4016 9.92669 24.2631 9.45997 24.0219Z"
                      fill="black"
                    />
                  </svg>
                </div>
                <div className="signup_info pl-6">
                  <h6 className="text-base font-normal py-1">Farmer</h6>
                  <p
                    className="text-sm font-normal"
                    style={{ color: "#828282" }}
                  >
                    Own or belong to a company, this is for you.
                  </p>
                </div>
              </div>
            </Link>
            <Link href="/signup/creditor" passHref={true}>
              <div
                className={`flex justify-between items-center px-8 py-6 bg-white rounded-md cursor-pointer ${pageStyles.signcard}`}
              >
                <div>
                  <svg
                    width="40"
                    height="40"
                    viewBox="0 0 40 40"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <rect
                      width="40"
                      height="40"
                      rx="6"
                      fill="#284065"
                      fillOpacity="0.1"
                    />
                    <path
                      d="M29.75 14H10.25C9.83579 14 9.5 14.3358 9.5 14.75V25.25C9.5 25.6642 9.83579 26 10.25 26H29.75C30.1642 26 30.5 25.6642 30.5 25.25V14.75C30.5 14.3358 30.1642 14 29.75 14Z"
                      stroke="black"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M20 23C21.6569 23 23 21.6569 23 20C23 18.3431 21.6569 17 20 17C18.3431 17 17 18.3431 17 20C17 21.6569 18.3431 23 20 23Z"
                      stroke="black"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M24.5 14L30.5 19.25"
                      stroke="black"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M24.5 26L30.5 20.75"
                      stroke="black"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M15.5 14L9.5 19.25"
                      stroke="black"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M15.5 26L9.5 20.75"
                      stroke="black"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </div>
                <div className="pl-6">
                  <h6 className="text-base font-normal py-1">Credit Lender</h6>
                  <p
                    className="text-sm font-normal"
                    style={{ color: "#828282" }}
                  >
                    Own or belong to a company, this is for you.
                  </p>
                </div>
              </div>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
