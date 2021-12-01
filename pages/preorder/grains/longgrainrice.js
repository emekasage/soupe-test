// import { useRouter } from "next/router";
import Header from "../../../components/header";
import Footer from "../../../components/footer";
import Head from "next/head";
import Image from "next/image";
import pageStyles from "../../../styles/Pages.module.css";
import FoodItemsWithCart from "../../../components/fooditemswithcart";
import DetailedFoodProducts from "../../../components/detailedfoodproduct";
import Link from "next/link";

function LongGrainRice() {
  // const router = useRouter();

  // const foodType = router.query.foodType;

  // send a request to the backend API to
  // fetch the food types with foodType

  return (
    <div>
      <Head>
        <title>Preorder - Long Grain Rice</title>
        <meta name="keywords" content="Preorder, Grains, Vegetables"></meta>
      </Head>

      <div
        className={`overflow-hidden z-0 ${pageStyles.otherpg}`}
        style={{
          backgroundColor: "#F2C94C",
          height: "597px",
          backgroundImage: `url('/assets/img/image-318.png')`,
          backgroundSize: "328px 377px",
          backgroundPosition: "right 180px",
          backgroundRepeat: "no-repeat",
          fontFamily: "Open Sans, sans-serif",
        }}
      >
        <Header></Header>
        <div className="sm:block md:flex justify-between mx-14 sm:my-10 md:my-20">
          <div className={`sm:mt-10 md:mt-24 ${pageStyles.headtxt}`}>
            <h1 className={`text-6xl font-bold ${pageStyles.bigtxt}`}>
              Long Grain Rice
            </h1>
            <p className="font-normal text-2xl leading-8 md:w-3/6 lg:w-4/6 py-6">
              Would you like to use the food calculator to decide?{" "}
              <span className="font-bold" style={{ color: "#DF421A" }}>
                <a href="#">Click here</a>
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
          <div
            className={`sm:block md:flex justify-between items-center md:mx-4 lg:mx-8 xl:mx-24 py-6 ${pageStyles.catblock}`}
          >
            <div
              className="text-2xl font-bold"
              style={{ color: "#828282", fontFamily: "Open Sans, sans-serif" }}
            >
              Categories / Grains / Rice /{" "}
              <span style={{ color: "#333333" }}>Long Grain Rice</span>
            </div>
            <div className={pageStyles.searchbar}>
              <form
                action=""
                className="flex flex-row bg-white rounded-3xl border box-border overflow-hidden sm:mt-4"
                style={{ borderColor: "#B7B6B6" }}
              >
                <button type="submit">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6 my-auto m-2"
                    style={{ color: "gray" }}
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                    />
                  </svg>
                </button>
                <input
                  type="search"
                  placeholder="Search..."
                  className="block rounded-md border-0 focus:outline-none focus:ring-0 focus:border-blue-500 p-2.5"
                />
              </form>
            </div>
          </div>
          <div>
            <DetailedFoodProducts></DetailedFoodProducts>
          </div>
          <h5
            className={`text-xl font-bold py-10 md:px-4 lg:px-8 xl:px-24 ${pageStyles.sim_prod}`}
          >
            Similar Products
          </h5>
          <div>
            <FoodItemsWithCart></FoodItemsWithCart>
          </div>
          <div className="my-10">
            <FoodItemsWithCart></FoodItemsWithCart>
          </div>
        </div>
        <div
          className={`container md:max-w-2xl lg:max-w-4xl xl:max-w-5xl 2xl:max-w-6xl my-12 mx-auto p-6 sm:block md:flex justify-between items-center rounded-2xl ${pageStyles.preorder_ad}`}
          style={{ background: "#ECEDEE" }}
        >
          <div
            className={`bg-white rounded-2xl md:px-12 lg:px-24 xl:px-32 py-4 ${pageStyles.cement_imgs}`}
          >
            <Image
              src="/assets/img/image-402.png"
              alt="rice"
              width={128}
              height={176}
            />
            <Image
              src="/assets/img/image-401.png"
              alt="rice"
              width={128}
              height={176}
            />
          </div>
          <div className="max-w-sm text-2xl font-normal text-center">
            We have the best price for you,{" "}
            <span className="font-bold" style={{ color: "#DF421A" }}>
              <Link href="#" passHref={true}>
                Compare
              </Link>
            </span>{" "}
            with other market
          </div>
        </div>
      </div>
      <Footer></Footer>
    </div>
  );
}

export default LongGrainRice;
