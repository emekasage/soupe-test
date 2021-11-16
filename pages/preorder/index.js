import Header from "../../components/header";
import Footer from "../../components/footer";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import pageStyles from "../../styles/Pages.module.css";

export default function Preorder() {
  return (
    <div
      className="dashboard bg-center bg-no-repeat bg-cover overflow-x-hidden"
      style={{ fontFamily: "Open Sans, sans-serif" }}
    >
      <Head>
        <title>Preorder</title>
        <meta name="keywords" content="Preorder, Grains, Vegetables"></meta>
      </Head>
      <Header></Header>
      <div className="my-12 mx-auto flex flex-col justify-center items-center">
        <h1 className="font-bold text-6xl">Pre-order</h1>
        <p className="font-normal text-2xl leading-8 text-center max-w-lg py-10">
          Would you like to use the food calculator to decide?{" "}
          <span className="font-bold" style={{ color: "#DF421A" }}>
            <Link href="/foodcalculator">Click here</Link>
          </span>
        </p>
      </div>
      <div className="mx-24 my-6">
        <p className="font-bold text-2xl leading-7">Categories</p>
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-2 xl:grid-cols-2 my-4">
          <div className="relative h-full w-full bg-cover bg-center rounded-2xl transition duration-300 ease-in-out transform hover:scale-95">
            <Link href="/preorder/grains" passHref={true}>
              <Image
                src="/assets/img/Group-12802.png"
                alt="Grains"
                width={570}
                height={478}
              />
            </Link>
          </div>
          <div className="flex flex-col">
            <div className="grid grid-cols-1 gap-2 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2">
              <div className="relative h-full w-full bg-cover bg-center rounded-2xl transition duration-300 ease-in-out transform hover:scale-95">
                <a href="#">
                  <Image
                    src="/assets/img/Group-12803.png"
                    alt="Grains"
                    width={274}
                    height={230}
                  />
                </a>
              </div>
              <div className="relative h-full w-full bg-cover bg-center rounded-2xl transition duration-300 ease-in-out transform hover:scale-95">
                <a href="#">
                  <Image
                    src="/assets/img/Group-12804.png"
                    alt="Grains"
                    width={274}
                    height={230}
                  />
                </a>
              </div>
            </div>
            <div className="grid grid-cols-1 gap-2 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2 sm:mt-4 md:mt-4 lg:mt-1 xl:mt-4">
              <div className="relative h-full w-full bg-cover bg-center rounded-2xl transition duration-300 ease-in-out transform hover:scale-95">
                <a href="#">
                  <Image
                    src="/assets/img/Group-12805.png"
                    alt="Grains"
                    width={274}
                    height={230}
                  />
                </a>
              </div>
              <div className="relative h-full w-full bg-cover bg-center rounded-2xl transition duration-300 ease-in-out transform hover:scale-95">
                <a href="#">
                  <Image
                    src="/assets/img/Group-12806.png"
                    alt="Grains"
                    width={274}
                    height={230}
                  />
                </a>
              </div>
            </div>
          </div>
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
          <div className="text-2xl font-normal sm:w-52 lg:w-96 text-center mx-auto">
            Planning an healty diet can be a daunting task, So let us help you
            pick a{" "}
            <span className="font-bold" style={{ color: "#DF421A" }}>
              Balanced diet
            </span>
          </div>
        </div>
      </div>
      <Footer></Footer>
    </div>
  );
}
