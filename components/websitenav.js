import Image from "next/image";
import { useState } from "react";
import Link from "next/link";
import navStyles from "../styles/Nav.module.css";

export default function HeaderNav() {
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
            <ul
              className={`hidden md:flex px-4 mx-auto font-normal font-heading space-x-12 text-sm ${navStyles.textone}`}
            >
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
          <div
            className={`px-5 xl:px-28 py-6 flex items-center ${navStyles.navbtn}`}
          >
            {/* Auth CTA */}
            <div
              className="cursor-pointer font-bold text-lg"
              style={{ color: "#DF421A" }}
            >
              <Link href="/login" passHref={true}>
                Log in
              </Link>
            </div>
            <div className="ml-6 xl:ml-10">
              <button className="px-6 py-2.5 text-white font-bold rounded-3xl text-lg text-center bg-green-600 p-text hover:bg-white hover:text-green-600 border-0 hover:border-green-600">
                Get started
              </button>
            </div>
          </div>
          {/* Responsive navbar */}
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
              <a
                className="text-gray-700 block px-4 py-2 text-sm"
                role="menuitem"
                tabIndex="-1"
                id="menu-item-0"
              >
                <Link href="/preorder">Preorder</Link>
              </a>
              <a
                className="text-gray-700 block px-4 py-2 text-sm"
                role="menuitem"
                tabIndex="-1"
                id="menu-item-0"
              >
                <Link href="/foodcalculator">Calculate Food</Link>
              </a>
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
            <div className="py-1 md:hidden" role="none">
              <a
                className="text-gray-700 block px-4 py-2 text-sm"
                role="menuitem"
                tabIndex="-1"
                id="menu-item-1"
              >
                <Link href="/login">Login</Link>
              </a>
              <form method="POST" action="#" role="none">
                <button
                  type="submit"
                  className="text-gray-700 block w-full text-left px-4 py-2 text-sm"
                  role="menuitem"
                  tabIndex="-1"
                  id="menu-item-3"
                >
                  <Link href="/signup">Get started</Link>
                </button>
              </form>
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
