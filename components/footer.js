import Image from "next/image";

export default function Footer() {
  return (
    <div>
      <footer
        className="footer relative py-4 border-b-2"
        style={{ backgroundColor: "#212429" }}
      >
        <div className="container mx-auto px-6">
          <div className="sm:flex sm:mt-8">
            <div className="mt-8 sm:mt-0 sm:w-full sm:px-6 flex flex-col md:flex-row justify-between">
              <div className="flex flex-col">
                <a className="text-3xl font-bold font-heading mb-6" href="#">
                  <Image
                    src="/assets/img/soupe-logo.png"
                    alt="Soupe Logo"
                    width={98}
                    height={30}
                  />
                </a>
                <span className="my-2 text-white font-normal text-xl">
                  +(234) 815-132-6797
                </span>
                <span className="text-white font-normal text-lg">
                  support@soupe.com
                </span>
              </div>
              <div className="flex flex-col">
                <span className="font-bold text-white capitalize mt-4 md:mt-0 mb-6">
                  Quick Links
                </span>
                <span className="my-2">
                  <a
                    href="#"
                    className="text-white text-opacity-60 text-base hover:text-green-600"
                  >
                    Product
                  </a>
                </span>
                <span className="my-3">
                  <a
                    href="#"
                    className="text-white text-opacity-60 text-base hover:text-green-600"
                  >
                    Information
                  </a>
                </span>
              </div>
              <div className="flex flex-col">
                <span className="sm:mt-6 mb-5" style={{ marginTop: "3.2rem" }}>
                  <a
                    href="#"
                    className="text-white text-opacity-60 text-base hover:text-green-600"
                  >
                    Company
                  </a>
                </span>
                <span className="text-white font-normal text-base">
                  <a
                    href="#"
                    className="my-3 text-white text-opacity-60 hover:text-green-600"
                  >
                    Soupe
                  </a>
                </span>
              </div>
              <div className="flex flex-col">
                <span className="font-bold text-white capitalize mt-4 md:mt-0 mb-6">
                  Subscribe
                </span>
                <div>
                  <form className="flex">
                    <input
                      className="rounded-l-lg p-3 mr-0 text-gray-800 bg-white text-sm focus:ring-2 focus:ring-blue-600"
                      placeholder="Get product updates"
                    />
                    <button
                      className="px-4 rounded-r-lg text-gray-800 font-bold p-3"
                      style={{ backgroundColor: "#263238" }}
                    >
                      <svg
                        width="16"
                        height="13"
                        viewBox="0 0 16 13"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          fillRule="evenodd"
                          clipRule="evenodd"
                          d="M9.23347 13L14.8898 7.42846C15.4106 6.91519 15.4106 6.08324 14.8898 5.57154L9.23347 0L7.34788 1.8581L10.7279 5.18669H0L0 7.81292H10.7279L7.34788 11.1427L9.23347 13Z"
                          fill="white"
                        />
                      </svg>
                    </button>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="container mx-auto px-8">
          <div className="mt-16 border-t border-white border-opacity-20 sm:block md:flex justify-between items-center">
            <div className="py-6 inline-flex social-icons">
              <a className="linkdin mr-3" href="#">
                <svg
                  width="37"
                  height="37"
                  viewBox="0 0 37 37"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    opacity="0.25"
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M18.5 36C28.165 36 36 28.165 36 18.5C36 8.83502 28.165 1 18.5 1C8.83502 1 1 8.83502 1 18.5C1 28.165 8.83502 36 18.5 36Z"
                    stroke="white"
                    strokeWidth="1.5"
                  />
                  <path
                    d="M14.4835 14.9671C15.3029 14.9671 15.9671 14.3029 15.9671 13.4835C15.9671 12.6642 15.3029 12 14.4835 12C13.6642 12 13 12.6642 13 13.4835C13 14.3029 13.6642 14.9671 14.4835 14.9671Z"
                    fill="white"
                  />
                  <path
                    d="M15.7198 15.9581H13.2473C13.1108 15.9581 13 16.0689 13 16.2054V23.6231C13 23.7596 13.1108 23.8704 13.2473 23.8704H15.7198C15.8563 23.8704 15.9671 23.7596 15.9671 23.6231V16.2054C15.9671 16.0689 15.8563 15.9581 15.7198 15.9581Z"
                    fill="white"
                  />
                  <path
                    d="M23.0885 15.5468C22.0317 15.1848 20.7099 15.5028 19.9172 16.0729C19.89 15.9666 19.7931 15.8875 19.6778 15.8875H17.2053C17.0688 15.8875 16.958 15.9983 16.958 16.1347V23.5525C16.958 23.689 17.0688 23.7998 17.2053 23.7998H19.6778C19.8143 23.7998 19.9251 23.689 19.9251 23.5525V18.2216C20.3247 17.8774 20.8395 17.7676 21.2608 17.9467C21.6693 18.1192 21.9032 18.5406 21.9032 19.1018V23.5525C21.9032 23.689 22.0139 23.7998 22.1504 23.7998H24.623C24.7595 23.7998 24.8703 23.689 24.8703 23.5525V18.6039C24.8421 16.5719 23.8862 15.8197 23.0885 15.5468Z"
                    fill="white"
                  />
                </svg>
              </a>
              <a className="facebk mr-3" href="#">
                <svg
                  width="37"
                  height="37"
                  viewBox="0 0 37 37"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    opacity="0.25"
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M18.5 36C28.165 36 36 28.165 36 18.5C36 8.83502 28.165 1 18.5 1C8.83502 1 1 8.83502 1 18.5C1 28.165 8.83502 36 18.5 36Z"
                    stroke="white"
                    strokeWidth="1.5"
                  />
                  <path
                    d="M20.0932 14.0207H21.7016C21.8495 14.0207 21.9696 13.9075 21.9696 13.7681V12.2525C21.9696 12.113 21.8495 11.9999 21.7016 11.9999H20.0932C18.4677 11.9999 17.1445 13.2462 17.1445 14.7785V16.5466H15.2681C15.1201 16.5466 15 16.6598 15 16.7992V18.3148C15 18.4543 15.1201 18.5674 15.2681 18.5674H17.1445V23.872C17.1445 24.0114 17.2646 24.1246 17.4126 24.1246H19.0209C19.1689 24.1246 19.289 24.0114 19.289 23.872V18.5674H21.1655C21.2807 18.5674 21.3831 18.4977 21.4201 18.3946L21.9562 16.8791C21.9836 16.8023 21.9696 16.7174 21.9192 16.6512C21.8683 16.5855 21.7879 16.5466 21.7016 16.5466H19.289V14.7785C19.289 14.3607 19.6498 14.0207 20.0932 14.0207Z"
                    fill="white"
                  />
                </svg>
              </a>
              <a className="twitt" href="#">
                <svg
                  className="hover:fill-current hover:text-green-600"
                  width="37"
                  height="37"
                  viewBox="0 0 37 37"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                >
                  <path
                    opacity="0.25"
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M18.5 36C28.165 36 36 28.165 36 18.5C36 8.83502 28.165 1 18.5 1C8.83502 1 1 8.83502 1 18.5C1 28.165 8.83502 36 18.5 36Z"
                    stroke="white"
                    strokeWidth="1.5"
                  />
                  <path
                    d="M24.2202 15.2647C24.139 15.1729 24.0081 15.1498 23.9007 15.2064C23.8339 15.2416 23.7083 15.2878 23.5592 15.3334C23.7473 15.0762 23.8985 14.7882 23.9653 14.5293C23.9942 14.4177 23.952 14.3001 23.8601 14.2336C23.7682 14.1677 23.6458 14.1677 23.5539 14.2336C23.4091 14.3375 22.7102 14.6497 22.2683 14.7508C21.2696 13.8511 20.1074 13.7577 18.8992 14.4831C17.9171 15.0729 17.7034 16.2721 17.7451 17.0031C15.4971 16.7805 14.0998 15.5593 13.3132 14.5485C13.2582 14.4776 13.1695 14.4403 13.0861 14.4458C12.9985 14.4524 12.9194 14.5024 12.8745 14.5799C12.5026 15.2257 12.3995 15.9396 12.5774 16.6447C12.6747 17.0295 12.8446 17.3686 13.0418 17.6434C12.9472 17.5956 12.8558 17.5357 12.7698 17.4642C12.6907 17.3972 12.5801 17.3845 12.4866 17.429C12.3936 17.4747 12.3343 17.5714 12.3343 17.6775C12.3343 18.8882 13.0706 19.6962 13.7583 20.1183C13.6472 20.1045 13.5312 20.0792 13.4142 20.0424C13.3138 20.0111 13.2048 20.0424 13.1353 20.1238C13.0658 20.2046 13.0493 20.32 13.0926 20.4184C13.4789 21.2972 14.2109 21.9017 15.1166 22.121C14.3258 22.5986 13.2673 22.8328 12.298 22.7179C12.1724 22.6998 12.0527 22.7817 12.0132 22.9059C11.9736 23.0301 12.0255 23.1664 12.1361 23.2301C13.6066 24.0793 14.936 24.3827 16.0849 24.3827C17.7568 24.3827 19.0472 23.7407 19.8327 23.2038C21.9503 21.7583 23.2701 19.163 23.0863 16.841C23.4256 16.5832 23.9333 16.1072 24.248 15.5955C24.3132 15.4922 24.3014 15.3559 24.2202 15.2647Z"
                    fill="white"
                  />
                </svg>
              </a>
            </div>
            <div className="sm:text-left md:text-center py-6">
              <p className="text-base text-white font-normal mb-2">
                A product of{" "}
                <span className="font-bold text-lg text-green-600">Soupe</span>
              </p>
            </div>
            <div className="sm:text-left md:text-center py-6">
              <p className="text-base text-white font-normal mb-2">
                © 2021 Soupe. All rights reserved
              </p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
