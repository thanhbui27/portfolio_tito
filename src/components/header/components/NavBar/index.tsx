import { useState } from "react";
import { Link } from "react-router-dom";
import "./NavBar.css";
import Email from "@/assets/icons/envelope.svg";
import Phone from "@/assets/icons/phone.svg";

const NavBar = () => {
  const [isOpen, setOpen] = useState(false);
  const handleOpen = () => {
    setOpen(!isOpen);
  };
  return (
    <nav className=" w-full z-20  left-0 ">
      <div className=" bg-[#E8E8E8]/[.3] rounded-md max-w-screen-2xl flex flex-wrap items-center justify-between mx-auto p-2">
        <Link to="/" className="flex items-center">
          <img src="logo.svg" className="h-8 mr-3" alt="Logo" />
        </Link>
        <div className="flex md:order-2">
          <button
            type="button"
            className="text-black  bg-white button-circle-sm ml-3"
          >
            <img src={Email} alt="Email" />
          </button>
          <button
            type="button"
            className="text-black l bg-white button-circle-sm ml-3"
          >
            <img src={Phone} alt="Email" />
          </button>
          <button
            data-collapse-toggle="navbar-cta"
            type="button"
            onClick={handleOpen}
            className="inline-flex ml-2 items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-red-100 focus:outline-none focus:ring-2 focus:ring-red-100 dark:text-gray-400 dark:hover:bg-red-100 dark:focus:ring-red-100"
            aria-controls="navbar-cta"
            aria-expanded="false"
          >
            <span className="sr-only">Open main menu</span>
            <svg
              className="w-5 h-5"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 17 14"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M1 1h15M1 7h15M1 13h15"
              />
            </svg>
          </button>
        </div>
        <div
          className={`items-center justify-between ${
            !isOpen && "hidden"
          } w-full md:flex md:w-auto md:order-1`}
          id="navbar-cta"
        >
          <ul className="flex flex-col p-4 md:p-0 mt-4 font-medium border border-gray-100 rounded-lg  md:flex-row md:space-x-8 md:mt-0 md:border-0 font-sans text-black">
            <li>
              <Link to="/" className="item-nav-bar  ">
                Home
              </Link>
            </li>
            <li>
              <Link to="/" className="item-nav-bar ">
                Company
              </Link>
            </li>
            <li>
              <Link to="/" className="item-nav-bar ">
                Services
              </Link>
            </li>
            <li>
              <Link to="/" className="item-nav-bar ">
                Projects
              </Link>
            </li>
            <li>
              <Link to="/" className="item-nav-bar ">
                Contact Us
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
