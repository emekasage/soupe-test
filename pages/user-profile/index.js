import Header from "../../components/header";
import Footer from "../../components/footer";
import Head from "next/head";
import pageStyles from "../../styles/Pages.module.css";
import Profiles from "../../components/profiles";

function UserProfile() {
  return (
    <div style={{ fontFamily: "Open Sans, sans-serif" }}>
      <Head>
        <title>Soupe - Profile</title>
        <meta name="keywords" content="Preorder, Grains, Vegetables"></meta>
      </Head>

      <div
        className={`overflow-hidden z-0 ${pageStyles.other_pgs}`}
        style={{
          backgroundColor: "#F2C94C",
          height: "597px",
        }}
      >
        <Header></Header>
        <div className="sm:block md:flex justify-between mx-14 my-10">
          <div className="head-txt">
            <h1 className="text-6xl font-bold big-txt sm:pt-14 md:pt-20">
              Profile
            </h1>
            <p className="font-normal text-2xl leading-8 md:w-4/6 lg:w-3/5 py-6">
              Kindly provide us with the following information to enable us make
              accurate calculations for you
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
          <div className={``}>
            <Profiles></Profiles>
          </div>
        </div>
      </div>
      <Footer></Footer>
    </div>
  );
}

export default UserProfile;
