import Image from "next/image";
import { useState } from "react";
import Link from "next/link";
import navStyles from "../styles/Nav.module.css";

export default function Header() {
  const [showUserInfo, setShowUserInfo] = useState(false);
  const [showUserMobileInfo, setShowUserMobileInfo] = useState(false);

  return (
    <div className="flex flex-wrap place-items-center">
      <section
        className="relative mx-auto"
        style={{ fontFamily: "Open Sans, sans-serif" }}
      >
        {/* navbar */}
        <nav className="flex justify-between bg-transparent text-white w-screen">
          <div
            className={`px-5 xl:px-14 py-6 flex w-7/12 items-center ${navStyles.navmenu}`}
          >
            <Link
              className="text-3xl font-bold font-heading"
              href="/"
              passHref={true}
            >
              <Image
                className="cursor-pointer"
                src="/assets/img/soupe-logo.png"
                alt="Soupe Logo"
                width={98}
                height={30}
              />
            </Link>
            {/* Nav Links */}
            <ul className="hidden md:flex px-4 mx-auto font-normal font-heading space-x-12 text-sm text-one">
              <li className="text-gray-800 head-link hover:text-green-600">
                <Link href="/preorder" style={{ color: "#23212b" }}>
                  Preorder
                </Link>
              </li>
              <li className="text-gray-800 hover:text-green-600">
                <Link href="/foodcalculator" style={{ color: "#23212b" }}>
                  Calculate Food
                </Link>
              </li>
              <li>
                <a className="text-gray-800 hover:text-green-600" href="#">
                  Compare Price
                </a>
              </li>
              <li>
                <a className="text-gray-800 hover:text-green-600" href="#">
                  Get A Loan
                </a>
              </li>
              <li>
                <a className="text-gray-800 hover:text-green-600" href="#">
                  Account
                </a>
              </li>
            </ul>
          </div>
          <div className="px-5 xl:px-12 py-6 flex items-center">
            {/* Header Icons */}
            <div className="hidden xl:flex items-center space-x-5 items-center">
              {/* Sign In / Register */}
              <a className="flex items-center hover:text-gray-200" href="#">
                <Image
                  src="/assets/img/Ellipse-1.png"
                  alt="Display Picture"
                  width={48}
                  height={48}
                />
              </a>
              <div className="relative inline-block text-left">
                <div
                  className={`user1 ${
                    !showUserInfo
                      ? "cursor-pointer inline-flex justify-center w-full rounded-md z-10 border border-transparent px-4 py-2 bg-transparent text-xl font-bold text-gray-700"
                      : "cursor-pointer inline-flex justify-center w-full rounded-md z-10 border border-transparent px-4 py-2 bg-transparent text-xl font-bold text-gray-700"
                  }`}
                  id="menu-button"
                  aria-expanded="true"
                  aria-haspopup="true"
                  onClick={() => setShowUserInfo(!showUserInfo)}
                >
                  Dina
                  <svg
                    className="-mr-1 ml-2 h-7 w-5"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                    aria-hidden="true"
                  >
                    <path
                      fillRule="evenodd"
                      d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                      clipRule="evenodd"
                    />
                  </svg>
                </div>
                <div
                  className={`user1 ${
                    showUserInfo
                      ? "origin-top-right absolute right-0 mt-2 w-56 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 focus:outline-none"
                      : "hidden"
                  }`}
                  role="menu"
                  aria-orientation="vertical"
                  aria-labelledby="menu-button"
                  tabIndex="-1"
                >
                  <div className="py-1" role="none">
                    {/* Active: "bg-gray-100 text-gray-900", Not Active: "text-gray-700" */}
                    <a
                      href="#"
                      className="text-gray-700 block px-4 py-2 text-sm"
                      role="menuitem"
                      tabIndex="-1"
                      id="menu-item-0"
                    >
                      Account settings
                    </a>
                    <a
                      href="#"
                      className="text-gray-700 block px-4 py-2 text-sm"
                      role="menuitem"
                      tabIndex="-1"
                      id="menu-item-1"
                    >
                      Support
                    </a>
                    <a
                      href="#"
                      className="text-gray-700 block px-4 py-2 text-sm"
                      role="menuitem"
                      tabIndex="-1"
                      id="menu-item-2"
                    >
                      License
                    </a>
                    <form method="POST" action="#" role="none">
                      <button
                        type="submit"
                        className="text-gray-700 block w-full text-left px-4 py-2 text-sm"
                        role="menuitem"
                        tabIndex="-1"
                        id="menu-item-3"
                      >
                        Sign out
                      </button>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* Responsive navbar */}
          <a className="xl:hidden flex mr-6 items-center" href="#">
            <Image
              src="/assets/img/Ellipse-1.png"
              alt="Soupe Logo"
              width={30}
              height={30}
            />
          </a>
          <a
            className={`user1 ${
              !showUserMobileInfo
                ? "navbar-burger self-center mr-12 lg:hidden"
                : "navbar-burger self-center mr-12 lg:hidden"
            }`}
            onClick={() => setShowUserMobileInfo(!showUserMobileInfo)}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6 fill-current text-gray-800 hover:text-gray-200"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </a>
          <div
            className={`user1 ${
              showUserMobileInfo
                ? "origin-top-right absolute right-0 mt-20 mr-2 w-56 rounded-md shadow-lg z-20 bg-white divide-y divide-gray-100 ring-1 ring-black ring-opacity-5 focus:outline-none"
                : "hidden"
            }`}
            role="menu"
            aria-orientation="vertical"
            aria-labelledby="menu-button"
            tabIndex="-1"
          >
            <div className="py-1" role="none">
              {/* Active: "bg-gray-100 text-gray-900", Not Active: "text-gray-700" */}
              <Link
                href="/preorder"
                className="text-gray-700 block px-4 py-2 text-sm"
                role="menuitem"
                tabIndex="-1"
                id="menu-item-0"
              >
                Preorder
              </Link>
              <Link
                href="/foodcalculator"
                className="text-gray-700 block px-4 py-2 text-sm"
                role="menuitem"
                tabIndex="-1"
                id="menu-item-0"
              >
                Calculate Food
              </Link>
              <a
                href="#"
                className="text-gray-700 block px-4 py-2 text-sm"
                role="menuitem"
                tabIndex="-1"
                id="menu-item-0"
              >
                Compare price
              </a>
              <a
                href="#"
                className="text-gray-700 block px-4 py-2 text-sm"
                role="menuitem"
                tabIndex="-1"
                id="menu-item-0"
              >
                Get A Loan
              </a>
            </div>
            <div className="py-1" role="none">
              <a
                href="#"
                className="text-gray-700 block px-4 py-2 text-sm"
                role="menuitem"
                tabIndex="-1"
                id="menu-item-0"
              >
                Account settings
              </a>
              <a
                href="#"
                className="text-gray-700 block px-4 py-2 text-sm"
                role="menuitem"
                tabIndex="-1"
                id="menu-item-1"
              >
                Support
              </a>
              <form method="POST" action="#" role="none">
                <button
                  type="submit"
                  className="text-gray-700 block w-full text-left px-4 py-2 text-sm"
                  role="menuitem"
                  tabIndex="-1"
                  id="menu-item-3"
                >
                  Sign out
                </button>
              </form>
            </div>
          </div>
        </nav>
      </section>
    </div>
  );
}
