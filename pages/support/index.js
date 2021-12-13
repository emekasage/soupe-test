import Header from "../../components/header";
import Footer from "../../components/footer";
import Head from "next/head";

function Support() {
  return (
    <div>
      <Head>
        <title>Soupe - Profile</title>
        <meta name="keywords" content="Preorder, Grains, Vegetables"></meta>
      </Head>

      <div
        className={`overflow-hidden`}
        style={{
          background: "#E5E5E5",
        }}
      >
        <Header></Header>
        <div style={{ fontFamily: "Open Sans, sans-serif" }}>
          <div className={`max-w-3xl mx-auto mt-20 mb-16`}>
            <h5
              className="font-bold pb-8 text-center"
              style={{ fontSize: "60px" }}
            >
              Support
            </h5>
            <p className="text-xl font-normal text-center md:px-40">
              Kindly provide us with the following information to enable us make
              accurate calculations for you
            </p>
          </div>
          <div className="bg-white mx-auto max-w-sm md:max-w-2xl lg:max-w-4xl rounded-md p-5">
            <form>
              <div className="md:flex justify-between">
                <div className="flex flex-col md:w-2/5">
                  <div className="mb-3">
                    <label
                      htmlFor="name"
                      className="block mb-2 text-base"
                      style={{ color: "#696F79" }}
                    >
                      Full Name*
                    </label>
                    <input
                      type="text"
                      name="full_name"
                      id="full_name"
                      placeholder="Invictus Simmone"
                      className="w-full px-3 py-3 text-sm placeholder-gray-300 border rounded-md focus:outline-none focus:ring-1 focus:ring-green-400 focus:border-green-400 dark:bg-gray-700 dark:text-white dark:placeholder-gray-500 dark:border-gray-600 dark:focus:ring-gray-900 dark:focus:border-gray-500"
                      style={{ borderColor: "#8692A6" }}
                    />
                  </div>
                  <div className="mb-3">
                    <label
                      htmlFor="email"
                      className="block mb-2 text-base"
                      style={{ color: "#696F79" }}
                    >
                      Email Address*
                    </label>
                    <input
                      type="email"
                      name="full_name"
                      id="full_name"
                      placeholder="D.simmone@gmail.com"
                      className="w-full px-3 py-3 text-sm placeholder-gray-300 border rounded-md focus:outline-none focus:ring-1 focus:ring-green-400 focus:border-green-400 dark:bg-gray-700 dark:text-white dark:placeholder-gray-500 dark:border-gray-600 dark:focus:ring-gray-900 dark:focus:border-gray-500"
                      style={{ borderColor: "#8692A6" }}
                    />
                  </div>
                  <div className="mb-3">
                    <label
                      htmlFor="email"
                      className="block mb-2 text-base"
                      style={{ color: "#696F79" }}
                    >
                      Phone Number*
                    </label>
                    <input
                      type="number"
                      name="full_name"
                      id="full_name"
                      placeholder="+234  906 783 2995"
                      className="w-full px-3 py-3 text-sm placeholder-gray-300 border rounded-md focus:outline-none focus:ring-1 focus:ring-green-400 focus:border-green-400 dark:bg-gray-700 dark:text-white dark:placeholder-gray-500 dark:border-gray-600 dark:focus:ring-gray-900 dark:focus:border-gray-500"
                      style={{ borderColor: "#8692A6" }}
                    />
                  </div>
                </div>
                <div className="md:w-2/4">
                  <label
                    htmlFor="email"
                    className="block mb-2 text-base"
                    style={{ color: "#696F79" }}
                  >
                    Message
                  </label>
                  <textarea className="w-full resize h-56 p-3 border border-gray-400 rounded-md focus:outline-none focus:ring-1 focus:ring-green-400 focus:border-green-400"></textarea>
                </div>
              </div>
            </form>
          </div>
          <div className="mt-14 mb-24 mx-auto max-w-sm md:max-w-2xl lg:max-w-4xl flex justify-end p-text">
            <button
              className="px-10 py-2.5 text-white text-lg font-bold rounded-3xl"
              style={{ backgroundColor: "#4D966D" }}
            >
              Save
            </button>
          </div>
        </div>
      </div>
      <Footer></Footer>
    </div>
  );
}
export default Support;
