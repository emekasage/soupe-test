import Head from "next/head";
// import Image from "next/image";
import HeaderNav from "../components/websitenav";
import Footer from "../components/footer";
import pageStyles from "../styles/Pages.module.css";

export default function Home() {
  return (
    <div>
      <div
        className={`bg-center bg-no-repeat bg-cover overflow-x-hidden ${pageStyles.headbg}`}
        style={{ fontFamily: "Open Sans, sans-serif" }}
      >
        <Head>
          <title>Soupe - Website</title>
          <meta name="description" content="Generated by create next app" />
          <link rel="icon" href="/favicon.ico" />
        </Head>
        <HeaderNav></HeaderNav>
        <div className="px-14 py-20">
          <div className="max-w-lg float-left pb-6">
            <h5
              className="font-bold"
              style={{ fontSize: "50px", lineHeight: "70px" }}
            >
              Get food items from the farm to your kitchen
            </h5>
            <p className="my-6 font-normal text-lg">
              Join Soupe the cheapest food community as a consumer, farmer and
              access instant food credit, food planning and flexible
              delivery/pickup.
            </p>
            <div className="flex items-center">
              <button className="px-6 py-2.5 text-white font-bold rounded-3xl text-lg text-center bg-green-600 p-text hover:bg-white hover:text-green-600 border-0 hover:border-green-600">
                Get started
              </button>
              <button
                className="font-bold text-xl ml-6"
                style={{ color: "#DF421A" }}
              >
                Plan Meal
              </button>
            </div>
          </div>
        </div>
      </div>
      <div></div>
      <Footer></Footer>
    </div>
  );
}
