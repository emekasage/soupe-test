import Image from "next/image";
import pageStyles from "../styles/Pages.module.css";

export default function FoodProducts() {
  return (
    <div
      className="flex justify-center grid grid-cols-1 gap-20 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 py-4"
      style={{ fontFamily: "Open Sans, sans-serif" }}
    >
      <div className={pageStyles.food_card}>
        <div className="relative w-64 h-64 py-6 bg-white bg-cover bg-center transition duration-300 ease-in-out transform hover:scale-95">
          <a href="#" className="flex justify-center pt-4">
            <Image
              src="/assets/img/image-6.png"
              alt="rice"
              width={160}
              height={160}
            />
          </a>
        </div>
        <p className="p-text text-xl font-normal pt-2.5 pb-1.5">Rice</p>
        <div className="inline-flex text-lg">
          <span className="font-bold" style={{ color: "#EB5757" }}>
            ₦1,900
          </span>
          <span className="ml-3 text-gray-400">
            <del>2900</del>
          </span>
        </div>
      </div>
      <div className={pageStyles.food_card}>
        <div className="relative w-64 h-64 py-6 bg-white bg-cover bg-center transition duration-300 ease-in-out transform hover:scale-95">
          <a href="#" className="flex justify-center pt-8 pr-4">
            <Image
              src="/assets/img/Group-12770.png"
              alt="rice"
              width={165}
              height={143}
            />
          </a>
        </div>
        <p className="p-text text-xl font-normal pt-2.5 pb-1.5">Vegetables</p>
        <div className="inline-flex text-lg">
          <span className="font-bold" style={{ color: "#EB5757" }}>
            ₦1,900
          </span>
          <span className="ml-3 text-gray-400">
            <del>2900</del>
          </span>
        </div>
      </div>
      <div className={pageStyles.food_card}>
        <div className="relative w-64 h-64 py-6 bg-white bg-cover bg-center transition duration-300 ease-in-out transform hover:scale-95">
          <a href="#" className="flex justify-center pt-8 pr-3">
            <Image
              src="/assets/img/Group-12771.png"
              alt="rice"
              width={148}
              height={137}
            />
          </a>
        </div>
        <p className="p-text text-xl font-normal pt-2.5 pb-1.5">Eggs</p>
        <div className="inline-flex text-lg">
          <span className="font-bold" style={{ color: "#EB5757" }}>
            ₦1,900
          </span>
          <span className="ml-3 text-gray-400">
            <del>2900</del>
          </span>
        </div>
      </div>
      <div className={pageStyles.food_card}>
        <div className="relative w-64 h-64 py-6 bg-white bg-cover bg-center transition duration-300 ease-in-out transform hover:scale-95">
          <a href="#" className="flex justify-center pt-6 pr-2">
            <Image
              src="/assets/img/image-70.png"
              alt="rice"
              width={165}
              height={143}
            />
          </a>
        </div>
        <p className="p-text text-xl font-normal pt-2.5 pb-1.5">Cow Meat</p>
        <div className="inline-flex text-lg">
          <span className="font-bold" style={{ color: "#EB5757" }}>
            ₦1,900
          </span>
          <span className="ml-3 text-gray-400">
            <del>2900</del>
          </span>
        </div>
      </div>
    </div>
  );
}
