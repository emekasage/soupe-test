import Head from "next/head";
import Header from "../../components/header";
import Image from "next/image";
import pageStyles from "../../styles/Pages.module.css";
import AdminChart from "../../components/adminchart";
import Link from "next/link";

export default function AdminDashboard() {
  return (
    <div
      className={`bg-center bg-no-repeat bg-cover overflow-x-hidden ${pageStyles.dashbg}`}
      style={{ fontFamily: "Open Sans, sans-serif" }}
    >
      <Head>
        <title>Soupe - Admin Dashboard</title>
        <meta
          name="keywords"
          content="Preorder, Food Calculator, Compare price"
        ></meta>
      </Head>
      <Header></Header>
      <div
        className={`mx-14 my-10 px-4 max-w-full bg-center bg-cover rounded-3xl ${pageStyles.dashrec}`}
      >
        <div className="px-8 sm:block lg:flex justify-between">
          <div className="sm:block lg:flex items-center">
            <div className={`${pageStyles.user_w_info} block`}>
              <h5 className="text-xl font-bold leading-7">Hi, Dina,</h5>
              <div className={`${pageStyles.wallet_info} pt-5`}>
                <p className="text-lg leading-6 font-normal">New Orders:</p>
                <h3 className="sm:text-xl md:text-2xl lg:text-5xl leading-8 font-bold pt-3">
                  174
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
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-2 xl:grid-cols-2 mx-14 my-5">
        <div className="relative w-full h-56 bg-white bg-cover group rounded-2xl transition duration-300 ease-in-out">
          <div className="w-full py-2.5 pl-4 pr-10 sm:px-6 lg:px-4 flex justify-between">
            <div className="flex flex-col">
              <h5 className="font-bold leading-7" style={{ fontSize: "10px" }}>
                Activity Trail
              </h5>
              <p
                className="font-normal leading-7 tracking-wide -mt-4"
                style={{ color: "#9FA2B4", fontSize: "6px" }}
              >
                as of 25 May 2021, 09:41 PM
              </p>
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
              <div
                className="bg-gray-100 p-2.5 ml-2"
                style={{ fontSize: "11px", color: "#11263C" }}
              >
                This Month
              </div>
            </div>
          </div>
          <div>
            <AdminChart></AdminChart>
          </div>
        </div>
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2">
          <div className="relative w-full h-24 bg-white bg-cover bg-center group rounded-2xl transition duration-300 ease-in-out">
            <div className="px-4 py-4 sm:px-6 lg:px-4 flex justify-between">
              <div className="card-txt">
                <p
                  className="font-normal text-sm leading-7 tracking-wide"
                  style={{ color: "#828282" }}
                >
                  Number of Consumers
                </p>
                <h5 className="text-lg font-bold leading-7">190070</h5>
              </div>
              <div className="flex items-end">
                <svg
                  width="36"
                  height="36"
                  viewBox="0 0 36 36"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <circle opacity="0.2" cx="18" cy="18" r="18" fill="#4D966D" />
                  <path
                    d="M18 21C21.3137 21 24 18.3137 24 15C24 11.6863 21.3137 9 18 9C14.6863 9 12 11.6863 12 15C12 18.3137 14.6863 21 18 21Z"
                    stroke="#4D966D"
                    strokeWidth="1.5"
                    strokeMiterlimit="10"
                  />
                  <path
                    d="M8.9043 26.2491C9.82638 24.6531 11.1522 23.3278 12.7487 22.4064C14.3451 21.485 16.1559 21 17.9992 21C19.8424 21 21.6532 21.4851 23.2497 22.4065C24.8461 23.3279 26.1719 24.6533 27.094 26.2493"
                    stroke="#4D966D"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </div>
            </div>
          </div>
          <div className="relative w-full h-24 bg-white bg-cover bg-center group rounded-2xl transition duration-300 ease-in-out">
            <div className="px-4 py-4 sm:px-6 lg:px-4 flex justify-between">
              <div className="card-txt">
                <p
                  className="font-normal text-sm leading-7 tracking-wide"
                  style={{ color: "#828282" }}
                >
                  Number of Farmers
                </p>
                <h5 className="text-lg font-bold leading-7">190070</h5>
              </div>
              <div className="flex items-end">
                <svg
                  width="36"
                  height="36"
                  viewBox="0 0 36 36"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <circle opacity="0.2" cx="18" cy="18" r="18" fill="#E79704" />
                  <path
                    d="M27.5833 12.9564H25.5001C25.3814 11.6033 24.7616 10.3438 23.7628 9.42636C22.764 8.5089 21.4588 8 20.1044 8C18.75 8 17.4448 8.5089 16.446 9.42636C15.4472 10.3438 14.8274 11.6033 14.7087 12.9564H12.5838C12.4733 12.9564 12.3673 13.0004 12.2892 13.0788C12.2111 13.1572 12.1672 13.2635 12.1672 13.3743C12.1672 13.4851 12.2111 13.5914 12.2892 13.6698C12.3673 13.7481 12.4733 13.7922 12.5838 13.7922H15.5004V21.1761C15.5015 21.9881 15.8236 22.7665 16.3961 23.3407C16.9686 23.9149 17.7448 24.238 18.5545 24.2391H19.6669V27.5821C19.6669 27.693 19.7108 27.7992 19.789 27.8776C19.8671 27.956 19.9731 28 20.0836 28H24.2501C24.3606 28 24.4666 27.956 24.5447 27.8776C24.6229 27.7992 24.6668 27.693 24.6668 27.5821V19.5923C25.6167 19.3583 26.3334 18.3387 26.3334 17.1352C26.3334 15.9317 25.6167 14.9121 24.6668 14.6781V13.7922H27.5833C27.6938 13.7922 27.7998 13.7481 27.878 13.6698C27.9561 13.5914 28 13.4851 28 13.3743C28 13.2635 27.9561 13.1572 27.878 13.0788C27.7998 13.0004 27.6938 12.9564 27.5833 12.9564ZM20.0836 8.77764C21.2303 8.77288 22.3371 9.19939 23.1855 9.973C24.034 10.7466 24.5625 11.8111 24.6668 12.9564H15.5212C15.6251 11.8147 16.1507 10.7532 16.9948 9.98006C17.8388 9.20696 18.9405 8.7781 20.0836 8.77764ZM25.5001 17.1352C25.5001 18.0587 24.9376 18.8067 24.2501 18.8067C24.1396 18.8067 24.0336 18.8507 23.9555 18.9291C23.8774 19.0075 23.8335 19.1137 23.8335 19.2246V27.1642H20.5002V23.8212C20.5002 23.7104 20.4563 23.6041 20.3782 23.5257C20.3001 23.4474 20.1941 23.4033 20.0836 23.4033H18.5545C17.9655 23.4033 17.4006 23.1687 16.9841 22.751C16.5677 22.3333 16.3337 21.7668 16.3337 21.1761V13.7922H23.8335V15.0458C23.8335 15.1566 23.8774 15.2629 23.9555 15.3413C24.0336 15.4197 24.1396 15.4637 24.2501 15.4637C24.9376 15.4637 25.5001 16.2117 25.5001 17.1352ZM17.1878 18.673L18.0211 16.1657C18.0386 16.1136 18.0662 16.0654 18.1023 16.024C18.1384 15.9825 18.1822 15.9486 18.2314 15.9242C18.2805 15.8997 18.3339 15.8852 18.3887 15.8815C18.4434 15.8778 18.4983 15.8849 18.5503 15.9024C18.6023 15.92 18.6503 15.9477 18.6916 15.9838C18.7329 16.02 18.7668 16.064 18.7911 16.1133C18.8155 16.1626 18.83 16.2162 18.8337 16.2711C18.8374 16.3259 18.8303 16.381 18.8128 16.4332L17.9795 18.9404C17.9515 19.0234 17.8983 19.0955 17.8272 19.1465C17.7562 19.1975 17.671 19.2248 17.5837 19.2246C17.5385 19.2234 17.4937 19.2164 17.4503 19.2037C17.3983 19.1862 17.3502 19.1586 17.3088 19.1225C17.2674 19.0863 17.2335 19.0424 17.2091 18.993C17.1847 18.9437 17.1703 18.8901 17.1666 18.8351C17.163 18.7802 17.1702 18.7251 17.1878 18.673ZM19.6669 21.314C19.6669 21.4248 19.623 21.5311 19.5449 21.6094C19.4668 21.6878 19.3608 21.7318 19.2503 21.7318H17.5837C17.4732 21.7318 17.3672 21.6878 17.289 21.6094C17.2109 21.5311 17.167 21.4248 17.167 21.314C17.167 21.2031 17.2109 21.0968 17.289 21.0185C17.3672 20.9401 17.4732 20.8961 17.5837 20.8961H19.2503C19.3608 20.8961 19.4668 20.9401 19.5449 21.0185C19.623 21.0968 19.6669 21.2031 19.6669 21.314ZM8.4381 22.9855C8.3798 22.9823 8.32148 22.9914 8.26693 23.0123C8.21238 23.0332 8.16281 23.0653 8.12144 23.1067C8.08024 23.1481 8.04819 23.1979 8.02738 23.2526C8.00656 23.3073 7.99744 23.3658 8.00062 23.4242C8.02145 23.8421 8.13394 25.2128 8.62143 25.7059C9.00475 26.0861 9.92139 26.2366 10.5005 26.2951V27.5821C10.5005 27.693 10.5444 27.7992 10.6226 27.8776C10.7007 27.956 10.8067 28 10.9172 28C11.0277 28 11.1337 27.956 11.2118 27.8776C11.2899 27.7992 11.3338 27.693 11.3338 27.5821V26.2951C11.913 26.2366 12.8296 26.0861 13.213 25.7059C13.7004 25.2128 13.8338 23.8212 13.8338 23.4242C13.8366 23.3676 13.8279 23.311 13.8082 23.2579C13.7886 23.2048 13.7583 23.1562 13.7194 23.1152C13.6804 23.0741 13.6335 23.0414 13.5815 23.0192C13.5296 22.9969 13.4736 22.9854 13.4171 22.9855C12.6989 23 11.9907 23.1577 11.3338 23.4493V22.5342C11.913 22.4757 12.8296 22.3252 13.213 21.945C13.7004 21.4519 13.8338 20.0603 13.8338 19.6633C13.8366 19.6067 13.8279 19.5501 13.8082 19.497C13.7886 19.4439 13.7583 19.3953 13.7194 19.3543C13.6804 19.3132 13.6335 19.2806 13.5815 19.2583C13.5296 19.236 13.4736 19.2245 13.4171 19.2246C12.6989 19.2391 11.9907 19.3968 11.3338 19.6884V18.7733C11.913 18.7148 12.8296 18.5643 13.213 18.1841C13.7004 17.691 13.8338 16.2994 13.8338 15.9024C13.8366 15.8458 13.8279 15.7892 13.8082 15.7361C13.7886 15.683 13.7583 15.6344 13.7194 15.5934C13.6804 15.5523 13.6335 15.5197 13.5815 15.4974C13.5296 15.4751 13.4736 15.4636 13.4171 15.4637C12.6989 15.4782 11.9907 15.6359 11.3338 15.9275V15.4637C11.3338 15.3528 11.2899 15.2466 11.2118 15.1682C11.1337 15.0898 11.0277 15.0458 10.9172 15.0458C10.8067 15.0458 10.7007 15.0898 10.6226 15.1682C10.5444 15.2466 10.5005 15.3528 10.5005 15.4637V15.9275C9.8501 15.6386 9.14928 15.481 8.4381 15.4637C8.3798 15.4605 8.32148 15.4696 8.26693 15.4905C8.21238 15.5114 8.16281 15.5435 8.12144 15.5849C8.08024 15.6264 8.04819 15.6761 8.02738 15.7308C8.00656 15.7855 7.99744 15.844 8.00062 15.9024C8.02145 16.3203 8.13394 17.691 8.62143 18.1841C9.00475 18.5643 9.92139 18.7148 10.5005 18.7733V19.6884C9.8501 19.3995 9.14928 19.2419 8.4381 19.2246C8.3798 19.2214 8.32148 19.2305 8.26693 19.2514C8.21238 19.2723 8.16281 19.3044 8.12144 19.3458C8.08024 19.3872 8.04819 19.437 8.02738 19.4917C8.00656 19.5464 7.99744 19.6049 8.00062 19.6633C8.02145 20.0812 8.13394 21.4519 8.62143 21.945C9.00475 22.3252 9.92139 22.4757 10.5005 22.5342V23.4493C9.8501 23.1604 9.14928 23.0027 8.4381 22.9855ZM9.21308 25.1125C9.01266 24.7235 8.89759 24.2961 8.87559 23.8588C9.31155 23.8809 9.73776 23.9963 10.1255 24.1973C10.326 24.5862 10.441 25.0137 10.463 25.4509C10.0271 25.4289 9.60087 25.3135 9.21308 25.1125ZM11.713 24.2015C12.1008 24.0005 12.527 23.8851 12.963 23.863C12.941 24.3003 12.8259 24.7277 12.6255 25.1166C12.2377 25.3176 11.8115 25.4331 11.3755 25.4551C11.3975 25.0179 11.5126 24.5904 11.713 24.2015ZM11.713 20.4406C12.1008 20.2396 12.527 20.1242 12.963 20.1021C12.941 20.5394 12.8259 20.9668 12.6255 21.3557C12.2377 21.5568 11.8115 21.6722 11.3755 21.6942C11.3975 21.257 11.5126 20.8295 11.713 20.4406ZM11.713 16.6797C12.1008 16.4787 12.527 16.3633 12.963 16.3412C12.941 16.7785 12.8259 17.2059 12.6255 17.5949C12.2377 17.7959 11.8115 17.9113 11.3755 17.9333C11.3975 17.4961 11.5126 17.0686 11.713 16.6797ZM9.21308 17.5907C9.01266 17.2017 8.89759 16.7743 8.87559 16.337C9.31155 16.3591 9.73776 16.4745 10.1255 16.6755C10.326 17.0645 10.441 17.4919 10.463 17.9292C10.0271 17.9071 9.60087 17.7917 9.21308 17.5907ZM9.21308 21.3516C9.01266 20.9626 8.89759 20.5352 8.87559 20.0979C9.31155 20.12 9.73776 20.2354 10.1255 20.4364C10.326 20.8254 10.441 21.2528 10.463 21.6901C10.0271 21.668 9.60087 21.5526 9.21308 21.3516Z"
                    fill="#E79704"
                  />
                </svg>
              </div>
            </div>
          </div>
          <div className="relative w-full h-24 bg-white bg-cover bg-center group rounded-2xl transition duration-300 ease-in-out">
            <div className="px-4 py-4 sm:px-6 lg:px-4 flex justify-between">
              <div className="card-txt">
                <p
                  className="font-normal text-sm leading-7 tracking-wide"
                  style={{ color: "#828282" }}
                >
                  Number of CEC
                </p>
                <h5 className="text-lg font-bold leading-7">190070</h5>
              </div>
              <div className="flex items-end">
                <svg
                  width="36"
                  height="36"
                  viewBox="0 0 36 36"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <circle opacity="0.2" cx="18" cy="18" r="18" fill="#DF421A" />
                  <path
                    d="M11.125 18.9961V24.8752C11.125 25.0576 11.1974 25.2324 11.3264 25.3614C11.4553 25.4903 11.6302 25.5627 11.8125 25.5627H24.1875C24.3698 25.5627 24.5447 25.4903 24.6736 25.3614C24.8026 25.2324 24.875 25.0576 24.875 24.8752V18.9962"
                    stroke="#DF421A"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M11.6436 10.4375H24.3564C24.5058 10.4375 24.6512 10.4862 24.7704 10.5761C24.8897 10.6661 24.9764 10.7925 25.0175 10.9361L26.25 15.25H9.75L10.9825 10.9361C11.0236 10.7925 11.1103 10.6661 11.2296 10.5761C11.3488 10.4862 11.4942 10.4375 11.6436 10.4375Z"
                    stroke="#DF421A"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M15.25 15.25V16.625C15.25 17.3543 14.9603 18.0538 14.4445 18.5695C13.9288 19.0853 13.2293 19.375 12.5 19.375C11.7707 19.375 11.0712 19.0853 10.5555 18.5695C10.0397 18.0538 9.75 17.3543 9.75 16.625V15.25"
                    stroke="#DF421A"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M20.75 15.25V16.625C20.75 17.3543 20.4603 18.0538 19.9445 18.5695C19.4288 19.0853 18.7293 19.375 18 19.375C17.2707 19.375 16.5712 19.0853 16.0555 18.5695C15.5397 18.0538 15.25 17.3543 15.25 16.625V15.25"
                    stroke="#DF421A"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M26.25 15.25V16.625C26.25 17.3543 25.9603 18.0538 25.4445 18.5695C24.9288 19.0853 24.2293 19.375 23.5 19.375C22.7707 19.375 22.0712 19.0853 21.5555 18.5695C21.0397 18.0538 20.75 17.3543 20.75 16.625V15.25"
                    stroke="#DF421A"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </div>
            </div>
          </div>
          <div className="relative w-full h-24 bg-white bg-cover bg-center group rounded-2xl transition duration-300 ease-in-out">
            <div className="px-4 py-4 sm:px-6 lg:px-4 flex justify-between">
              <div className="card-txt">
                <p
                  className="font-normal text-sm leading-7 tracking-wide"
                  style={{ color: "#828282" }}
                >
                  Number of Logistics
                </p>
                <h5 className="text-lg font-bold leading-7">190070</h5>
              </div>
              <div className="flex items-end">
                <svg
                  width="36"
                  height="36"
                  viewBox="0 0 36 36"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <circle opacity="0.2" cx="18" cy="18" r="18" fill="#20458A" />
                  <g clipPath="url(#clip0_457_10537)">
                    <path
                      d="M10.1255 25.5238C10.3169 25.5575 10.4992 25.4303 10.5332 25.2392C10.5672 25.048 10.4398 24.8655 10.2486 24.8315C8.19424 24.4663 6.70313 22.6841 6.70313 20.5939C6.70313 18.2205 8.63397 16.2897 11.0074 16.2897C11.5734 16.2897 12.1143 16.3997 12.6098 16.5992L12.3953 17.0287C11.9647 16.8605 11.4968 16.7671 11.0074 16.7671C8.89727 16.7671 7.1806 18.4838 7.1806 20.5939C7.1806 22.704 8.89727 24.4207 11.0074 24.4207C12.9989 24.4207 14.6392 22.8913 14.8173 20.9455H15.2968C15.1404 22.8812 13.7042 24.487 11.7661 24.8315C11.575 24.8655 11.4475 25.048 11.4816 25.2392C11.5118 25.4096 11.6601 25.5292 11.8273 25.5292C11.8477 25.5292 11.8684 25.5275 11.8892 25.5238C13.8586 25.1736 15.3821 23.7044 15.8581 21.8381C16.0775 22.0404 16.3504 22.1856 16.6529 22.2498V22.9682H16.3449C16.1507 22.9682 15.9934 23.1256 15.9934 23.3198C15.9934 23.514 16.1507 23.6714 16.3449 23.6714H17.664C17.8582 23.6714 18.0156 23.514 18.0156 23.3198C18.0156 23.1256 17.8582 22.9682 17.664 22.9682H17.3561V22.2498C18.1213 22.0875 18.6973 21.4068 18.6973 20.5939C18.6973 20.215 18.5722 19.8649 18.3612 19.5825L22.5196 14.9767L22.9159 16.0379C21.1885 16.8285 19.9853 18.5733 19.9853 20.5939C19.9853 23.3549 22.2316 25.6012 24.9926 25.6012C27.7537 25.6012 30 23.3549 30 20.5939C30 17.8328 27.7537 15.5865 24.9926 15.5865C24.5002 15.5865 24.0243 15.6583 23.5744 15.7914L22.3709 12.5687H24.3851C24.5241 12.9069 24.8567 13.1459 25.2444 13.1459C25.3196 13.1459 25.3809 13.2072 25.3809 13.2824C25.3809 13.3576 25.3196 13.4188 25.2444 13.4188H24.8165C24.3043 13.4188 23.8876 13.8356 23.8876 14.3477C23.8876 14.8598 24.3044 15.2765 24.8165 15.2765H25.2444C26.344 15.2765 27.2386 14.3819 27.2386 13.2823C27.2386 12.1828 26.344 11.2882 25.2444 11.2882C24.8567 11.2882 24.5241 11.5272 24.3851 11.8654H21.8643C21.6239 11.8654 21.4482 12.1067 21.535 12.34L21.8915 13.2948H14.7218L14.4979 12.6955C14.6405 12.607 14.7619 12.4838 14.8475 12.3332C14.9038 12.2341 15.0096 12.1724 15.1237 12.1724H16.6187C17.0324 12.1724 17.3143 11.7528 17.1584 11.3698L17.1584 11.3698C16.9182 10.7803 16.3516 10.3994 15.7151 10.3994H12.1134C11.6331 10.3994 11.2423 10.7902 11.2423 11.2705C11.2423 12.1413 11.9507 12.8497 12.8215 12.8497H13.805L14.0949 13.6261L12.9249 15.9683C12.334 15.7224 11.6863 15.5864 11.0074 15.5864C8.24631 15.5865 6 17.8329 6 20.5939C6 23.0255 7.73504 25.0988 10.1255 25.5238ZM24.9926 16.2897C27.366 16.2897 29.2969 18.2205 29.2969 20.5939C29.2969 22.9673 27.366 24.8982 24.9926 24.8982C22.6192 24.8982 20.6884 22.9673 20.6884 20.5939C20.6884 18.8746 21.7018 17.3877 23.1627 16.6987L23.3303 17.1475C22.0505 17.7673 21.1659 19.0792 21.1659 20.5939C21.1659 22.704 22.8826 24.4207 24.9927 24.4207C26.7654 24.4207 28.2945 23.2184 28.7113 21.497C28.757 21.3083 28.6411 21.1183 28.4524 21.0726C28.2636 21.0267 28.0737 21.1428 28.028 21.3315C27.6878 22.7364 26.4397 23.7175 24.9927 23.7175C23.2703 23.7175 21.869 22.3162 21.869 20.5939C21.869 19.3806 22.5648 18.3274 23.5779 17.8104L24.3278 19.8185C24.1093 20.0061 23.9705 20.284 23.9705 20.5939C23.9705 21.1575 24.429 21.6161 24.9927 21.6161C25.5564 21.6161 26.0149 21.1576 26.0149 20.5939C26.0149 20.0302 25.5564 19.5717 24.9927 19.5717C24.9905 19.5717 24.9884 19.5718 24.9863 19.5718L24.2362 17.5633C24.4786 17.5028 24.7319 17.4702 24.9927 17.4702C26.4397 17.4702 27.6879 18.4514 28.028 19.8562C28.0737 20.0449 28.2636 20.1608 28.4524 20.1152C28.6411 20.0695 28.7571 19.8795 28.7113 19.6908C28.2946 17.9693 26.7654 16.767 24.9927 16.767C24.6454 16.767 24.3092 16.8144 23.9891 16.9014L23.8212 16.4516C24.1936 16.3462 24.5866 16.2897 24.9926 16.2897ZM24.9926 20.2749C25.1686 20.2749 25.3118 20.418 25.3118 20.594C25.3118 20.7699 25.1686 20.913 24.9926 20.913C24.8167 20.913 24.6736 20.7699 24.6736 20.594C24.6736 20.418 24.8167 20.2749 24.9926 20.2749ZM13.2384 16.9142C14.386 17.6126 15.1826 18.8326 15.2972 20.2424H14.8173C14.7053 19.0193 14.0157 17.9612 13.0239 17.3436L13.2384 16.9142ZM11.9673 20.2424C11.9191 20.1112 11.8446 19.9928 11.7505 19.8931L12.7081 17.9759C13.4709 18.4732 14.004 19.2939 14.1107 20.2424H11.9673ZM11.0074 20.2749C11.1833 20.2749 11.3264 20.418 11.3264 20.594C11.3264 20.7699 11.1833 20.913 11.0074 20.913C10.8314 20.913 10.6882 20.7699 10.6882 20.594C10.6882 20.418 10.8314 20.2749 11.0074 20.2749ZM11.0074 23.7176C9.28503 23.7176 7.88373 22.3163 7.88373 20.5939C7.88373 18.8715 9.28503 17.4702 11.0074 17.4702C11.384 17.4702 11.7453 17.5373 12.0799 17.66L11.1216 19.5783C11.0841 19.574 11.046 19.5717 11.0074 19.5717C10.4437 19.5717 9.98511 20.0302 9.98511 20.5939C9.98511 21.1576 10.4437 21.6161 11.0074 21.6161C11.4475 21.6161 11.8236 21.3365 11.9673 20.9455H14.1107C13.9353 22.5029 12.6108 23.7176 11.0074 23.7176ZM17.3561 21.518V20.5939C17.3561 20.3997 17.1987 20.2424 17.0045 20.2424C16.8103 20.2424 16.6529 20.3997 16.6529 20.5939V21.518C16.2805 21.3758 16.0148 21.0157 16.0148 20.5939C16.0148 20.0482 16.4588 19.6042 17.0045 19.6042C17.5502 19.6042 17.9942 20.0482 17.9942 20.5939C17.9942 21.0157 17.7285 21.3758 17.3561 21.518ZM25.2444 11.9915C25.9563 11.9915 26.5354 12.5706 26.5354 13.2825C26.5354 13.9944 25.9563 14.5735 25.2444 14.5735H24.8165C24.692 14.5735 24.5908 14.4722 24.5908 14.3478C24.5908 14.2234 24.692 14.1221 24.8165 14.1221H25.2444C25.7073 14.1221 26.084 13.7455 26.084 13.2825C26.084 12.8196 25.7073 12.4429 25.2444 12.4429C25.1199 12.4429 25.0187 12.3417 25.0187 12.2172C25.0187 12.0927 25.1199 11.9915 25.2444 11.9915ZM22.1541 13.9981L22.2424 14.2345L17.8329 19.1185C17.5879 18.9803 17.3054 18.9011 17.0046 18.9011C16.9419 18.9011 16.8802 18.9048 16.8193 18.9115L14.9844 13.9981H22.1541V13.9981ZM11.9454 11.2707C11.9454 11.1781 12.0207 11.1027 12.1133 11.1027H15.715C16.0003 11.1027 16.26 11.2422 16.4174 11.4695H15.1237C14.7572 11.4695 14.4171 11.6674 14.2361 11.986C14.1798 12.0852 14.0739 12.1468 13.9598 12.1468H12.8214C12.3384 12.1468 11.9454 11.7538 11.9454 11.2707ZM14.4311 14.5267L16.1513 19.1328C16.0459 19.1946 15.9476 19.2673 15.8583 19.3497C15.5246 18.0496 14.6805 16.9522 13.5534 16.2838L14.4311 14.5267Z"
                      fill="#20458A"
                    />
                  </g>
                  <defs>
                    <clipPath id="clip0_457_10537">
                      <rect
                        width="24"
                        height="24"
                        fill="white"
                        transform="translate(6 6)"
                      />
                    </clipPath>
                  </defs>
                </svg>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-2 xl:grid-cols-2 mx-14 my-8">
        <div className="order-history">
          <div className="flex justify-between">
            <h4 className="font-bold text-2xl">New Orders</h4>
            <div className="see_more inline-flex">
              <span
                className=" flex items-center text-sm font-normal"
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
        <div className="order-history">
          <div className="flex justify-between">
            <h4 className="font-bold text-2xl">Order History</h4>
            <div className="see_more inline-flex">
              <span
                className=" flex items-center text-sm font-normal"
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
      </div>
    </div>
  );
}
