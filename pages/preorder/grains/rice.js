// import { useRouter } from "next/router";
import Header from "../../../components/header";
import Footer from "../../../components/footer";
import Head from "next/head";
import Image from "next/image";
import pageStyles from "../../../styles/Pages.module.css";
import FoodItemsWithCart from "../../../components/fooditemswithcart";

function Rice() {
  // const router = useRouter();

  // const foodType = router.query.foodType;

  // send a request to the backend API to
  // fetch the food types with foodType

  return (
    <div>
      <Head>
        <title>Preorder - Rice</title>
        <meta name="keywords" content="Preorder, Grains, Vegetables"></meta>
      </Head>

      <div
        className={`overflow-hidden z-0 ${pageStyles.otherpg}`}
        style={{
          backgroundColor: "#F2C94C",
          height: "597px",
          backgroundImage: `url('/assets/img/favpng_shopping-cart-supermarket.png')`,
          backgroundSize: "436px 654px",
          backgroundPosition: "right 110px",
          backgroundRepeat: "no-repeat",
          fontFamily: "Open Sans, sans-serif",
        }}
      >
        <Header></Header>
        <div className="sm:block md:flex justify-between mx-14 sm:my-10 md:my-20">
          <div className="sm:mt-10 md:mt-24">
            <h1 className={`text-6xl font-bold ${pageStyles.bigtxt}`}>
              Pre-order
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
            margin: "auto",
            background: "#F4F5F5",
            borderRadius: "10px",
            minHeight: "1000px",
          }}
        >
          <div
            className={`sm:block md:flex justify-between items-center md:mx-11 lg:mx-8 xl:mx-24 py-6 ${pageStyles.catblock}`}
          >
            <div
              className="text-2xl font-bold"
              style={{ color: "#828282", fontFamily: "Open Sans, sans-serif" }}
            >
              Categories / Grains /{" "}
              <span style={{ color: "#333333" }}>Rice</span>
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
            <FoodItemsWithCart></FoodItemsWithCart>
          </div>
          <div className="my-10">
            <FoodItemsWithCart></FoodItemsWithCart>
          </div>
          <div>
            <FoodItemsWithCart></FoodItemsWithCart>
          </div>
        </div>
        <div className="container max-w-full bg-white my-12">
          <div className="relative px-14 py-14 sm:block mx-auto lg:flex flex-row items-center">
            <div className={pageStyles.rice_png}>
              <Image
                src="/assets/img/image-7.png"
                alt="rice_png"
                width={236}
                height={177}
              />
            </div>
            <div className={`text-5xl font-bold px-12 ${pageStyles.math_sign}`}>
              +
            </div>
            <div className={pageStyles.food_ad}>
              <Image
                src="/assets/img/image-9.png"
                alt="veggies"
                width={177}
                height={99}
              />
            </div>
            <div className={`text-5xl font-bold px-12 ${pageStyles.math_sign}`}>
              +
            </div>
            <div className={pageStyles.food_ad2}>
              <Image
                src="/assets/img/image-11.png"
                alt="fats_png"
                width={160}
                height={104}
              />
            </div>
            <div className={`text-5xl font-bold px-12 ${pageStyles.math_sign}`}>
              =
            </div>
            <div className="text-2xl font-normal sm:w-52 lg:w-96 text-center p-text mx-auto">
              Planning an healty diet can be a daunting task, So let us help you
              pick a{" "}
              <span className="font-bold" style={{ color: "#DF421A" }}>
                Balanced diet
              </span>
            </div>
          </div>
        </div>
      </div>
      <Footer></Footer>
    </div>
  );
}

export default Rice;
