// import { useRouter } from "next/router";
import Header from "../../../components/header";
import Footer from "../../../components/footer";
import Head from "next/head";
import pageStyles from "../../../styles/Pages.module.css";
import Link from "next/link";

function PreferredCec() {
  // const router = useRouter();

  // const foodType = router.query.foodType;

  // send a request to the backend API to
  // fetch the food types with foodType

  return (
    <div>
      <Head>
        <title>Preorder - Preferred CEC</title>
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
              Select Preferred CEC
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
          <div className={`mx-14 py-14 ${pageStyles.tableblk}`}>
            <div className="flex flex-col bg-white max-w-7xl rounded-2xl p-6">
              <div
                className="flex justify-center grid grid-cols-1 md:gap-11 lg:gap-8 xl:gap-14 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 py-4"
                style={{ fontFamily: "Open Sans, sans-serif" }}
              >
                <div
                  className={`border p-4 rounded-md cursor-pointer ${pageStyles.cec_card}`}
                  style={{ borderColor: "#8692A6" }}
                >
                  <h6 className="text-base font-normal py-1">
                    33, Imam Dauda Street, Eric Moore, Surulere, Lagos.
                  </h6>
                  <p
                    className="py-2 text-base font-normal"
                    style={{ color: "#333333" }}
                  >
                    Contact person:{" "}
                    <span className="font-bold">0810 876 5677</span>
                  </p>
                </div>
                <div
                  className={`border p-4 rounded-md cursor-pointer ${pageStyles.cec_card}`}
                  style={{ borderColor: "#8692A6" }}
                >
                  <h6 className="text-base font-normal py-1">
                    33, Imam Dauda Street, Eric Moore, Surulere, Lagos.
                  </h6>
                  <p
                    className="py-2 text-base font-normal"
                    style={{ color: "#333333" }}
                  >
                    Contact person:{" "}
                    <span className="font-bold">0810 876 5677</span>
                  </p>
                </div>
                <div
                  className={`border p-4 rounded-md cursor-pointer ${pageStyles.cec_card}`}
                  style={{ borderColor: "#8692A6" }}
                >
                  <h6 className="text-base font-normal py-1">
                    33, Imam Dauda Street, Eric Moore, Surulere, Lagos.
                  </h6>
                  <p
                    className="py-2 text-base font-normal"
                    style={{ color: "#333333" }}
                  >
                    Contact person:{" "}
                    <span className="font-bold">0810 876 5677</span>
                  </p>
                </div>
              </div>
              <div
                className="flex justify-center grid grid-cols-1 md:gap-11 lg:gap-8 xl:gap-14 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 py-4"
                style={{ fontFamily: "Open Sans, sans-serif" }}
              >
                <div
                  className={`border p-4 rounded-md cursor-pointer ${pageStyles.cec_card}`}
                  style={{ borderColor: "#8692A6" }}
                >
                  <h6 className="text-base font-normal py-1">
                    33, Imam Dauda Street, Eric Moore, Surulere, Lagos.
                  </h6>
                  <p
                    className="py-2 text-base font-normal"
                    style={{ color: "#333333" }}
                  >
                    Contact person:{" "}
                    <span className="font-bold">0810 876 5677</span>
                  </p>
                </div>
                <div
                  className={`border p-4 rounded-md cursor-pointer ${pageStyles.cec_card}`}
                  style={{ borderColor: "#8692A6" }}
                >
                  <h6 className="text-base font-normal py-1">
                    33, Imam Dauda Street, Eric Moore, Surulere, Lagos.
                  </h6>
                  <p
                    className="py-2 text-base font-normal"
                    style={{ color: "#333333" }}
                  >
                    Contact person:{" "}
                    <span className="font-bold">0810 876 5677</span>
                  </p>
                </div>
                <div
                  className={`border p-4 rounded-md cursor-pointer ${pageStyles.cec_card}`}
                  style={{ borderColor: "#8692A6" }}
                >
                  <h6 className="text-base font-normal py-1">
                    33, Imam Dauda Street, Eric Moore, Surulere, Lagos.
                  </h6>
                  <p
                    className="py-2 text-base font-normal"
                    style={{ color: "#333333" }}
                  >
                    Contact person:{" "}
                    <span className="font-bold">0810 876 5677</span>
                  </p>
                </div>
              </div>
              <div
                className="flex justify-center grid grid-cols-1 md:gap-11 lg:gap-8 xl:gap-14 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 py-4"
                style={{ fontFamily: "Open Sans, sans-serif" }}
              >
                <div
                  className={`border p-4 rounded-md cursor-pointer ${pageStyles.cec_card}`}
                  style={{ borderColor: "#8692A6" }}
                >
                  <h6 className="text-base font-normal py-1">
                    33, Imam Dauda Street, Eric Moore, Surulere, Lagos.
                  </h6>
                  <p
                    className="py-2 text-base font-normal"
                    style={{ color: "#333333" }}
                  >
                    Contact person:{" "}
                    <span className="font-bold">0810 876 5677</span>
                  </p>
                </div>
                <div
                  className={`border p-4 rounded-md cursor-pointer ${pageStyles.cec_card}`}
                  style={{ borderColor: "#8692A6" }}
                >
                  <h6 className="text-base font-normal py-1">
                    33, Imam Dauda Street, Eric Moore, Surulere, Lagos.
                  </h6>
                  <p
                    className="py-2 text-base font-normal"
                    style={{ color: "#333333" }}
                  >
                    Contact person:{" "}
                    <span className="font-bold">0810 876 5677</span>
                  </p>
                </div>
                <div
                  className={`border p-4 rounded-md cursor-pointer ${pageStyles.cec_card}`}
                  style={{ borderColor: "#8692A6" }}
                >
                  <h6 className="text-base font-normal py-1">
                    33, Imam Dauda Street, Eric Moore, Surulere, Lagos.
                  </h6>
                  <p
                    className="py-2 text-base font-normal"
                    style={{ color: "#333333" }}
                  >
                    Contact person:{" "}
                    <span className="font-bold">0810 876 5677</span>
                  </p>
                </div>
              </div>
              <div
                className="flex justify-center grid grid-cols-1 md:gap-11 lg:gap-8 xl:gap-14 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 py-4"
                style={{ fontFamily: "Open Sans, sans-serif" }}
              >
                <div
                  className={`border p-4 rounded-md cursor-pointer ${pageStyles.cec_card}`}
                  style={{ borderColor: "#8692A6" }}
                >
                  <h6 className="text-base font-normal py-1">
                    33, Imam Dauda Street, Eric Moore, Surulere, Lagos.
                  </h6>
                  <p
                    className="py-2 text-base font-normal"
                    style={{ color: "#333333" }}
                  >
                    Contact person:{" "}
                    <span className="font-bold">0810 876 5677</span>
                  </p>
                </div>
                <div
                  className={`border p-4 rounded-md cursor-pointer ${pageStyles.cec_card}`}
                  style={{ borderColor: "#8692A6" }}
                >
                  <h6 className="text-base font-normal py-1">
                    33, Imam Dauda Street, Eric Moore, Surulere, Lagos.
                  </h6>
                  <p
                    className="py-2 text-base font-normal"
                    style={{ color: "#333333" }}
                  >
                    Contact person:{" "}
                    <span className="font-bold">0810 876 5677</span>
                  </p>
                </div>
                <div
                  className={`border p-4 rounded-md cursor-pointer ${pageStyles.cec_card}`}
                  style={{ borderColor: "#8692A6" }}
                >
                  <h6 className="text-base font-normal py-1">
                    33, Imam Dauda Street, Eric Moore, Surulere, Lagos.
                  </h6>
                  <p
                    className="py-2 text-base font-normal"
                    style={{ color: "#333333" }}
                  >
                    Contact person:{" "}
                    <span className="font-bold">0810 876 5677</span>
                  </p>
                </div>
              </div>
            </div>
            <div className="flex justify-end my-10">
              <button
                className="px-10 py-2.5 text-white text-lg font-bold rounded-3xl block"
                style={{ backgroundColor: "#4D966D" }}
              >
                <Link href="/preorder/payment">Continue</Link>
              </button>
            </div>
          </div>
        </div>
      </div>
      <Footer></Footer>
    </div>
  );
}

export default PreferredCec;
