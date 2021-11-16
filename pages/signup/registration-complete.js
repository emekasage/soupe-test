import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import pageStyles from "../../styles/Pages.module.css";

export default function RegistrationComplete() {
  return (
    <div
      className={`bg-center bg-no-repeat bg-cover h-screen overflow-x-hidden ${pageStyles.dashbg}`}
      style={{ fontFamily: "Open Sans, sans-serif" }}
    >
      <Head>
        <title>Soupe - Registration Complete</title>
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
            Registeration Completed!
          </h4>
        </div>
        <div
          className="max-w-md px-8 py-14 mx-auto bg-white flex flex-col text-sm border rounded-md hover:border-green-400"
          style={{ borderColor: "#BDBDBD" }}
        >
          <svg
            className="mx-auto"
            width="64"
            height="64"
            viewBox="0 0 64 64"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M31.9999 0C14.3269 0 0 14.3269 0 31.9999C0 49.673 14.3269 63.9999 31.9999 63.9999C49.673 63.9999 63.9999 49.673 63.9999 31.9999C63.9811 14.3348 49.6652 0.0188839 31.9999 0ZM31.9999 59.4285C16.8516 59.4285 4.57138 47.1483 4.57138 31.9999C4.57138 16.8516 16.8516 4.57138 31.9999 4.57138C47.1483 4.57138 59.4285 16.8516 59.4285 31.9999C59.4121 47.1416 47.1416 59.4121 31.9999 59.4285Z"
              fill="#32A071"
            />
            <path
              d="M49.5601 18.9551C48.6743 18.0996 47.27 18.0996 46.3844 18.9551L25.1432 40.1962L17.6163 32.6693C16.7393 31.7612 15.2922 31.7362 14.3843 32.6132C13.4763 33.4901 13.4512 34.9372 14.3282 35.8451C14.3465 35.8641 14.3653 35.8829 14.3843 35.9012L23.5272 45.0441C24.4197 45.9365 25.8667 45.9365 26.7592 45.0441L49.6163 22.187C50.4933 21.2791 50.4681 19.8321 49.5601 18.9551Z"
              fill="#32A071"
            />
          </svg>
          <p className="font-normal text-center text-lg py-4">
            Hurray! You&#39;ve registered as a CEC on Soupe We&#39;ve sent you a
            confirmation email. please check your mail to verify
          </p>
          <button className="sm:w-84 md:w-96 py-2.5 text-white font-bold rounded-3xl text-lg text-center bg-green-600 p-text hover:bg-white hover:text-green-600 border-2 hover:border-green-600">
            Done
          </button>
        </div>
      </div>
    </div>
  );
}
