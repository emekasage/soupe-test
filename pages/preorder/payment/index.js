// import { useRouter } from "next/router";
import Header from "../../../components/header";
import Footer from "../../../components/footer";
import Head from "next/head";
import pageStyles from "../../../styles/Pages.module.css";
import Link from "next/link";

function Payment() {
  // const router = useRouter();

  // const foodType = router.query.foodType;

  // send a request to the backend API to
  // fetch the food types with foodType

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
            <div className="flex justify-between items-center">
              <div className="w-2/5">
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
            </div>
            <div className="flex justify-end my-10">
              <button
                className="px-10 py-2.5 text-white text-lg font-bold rounded-3xl block"
                style={{ backgroundColor: "#4D966D" }}
              >
                Continue
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
