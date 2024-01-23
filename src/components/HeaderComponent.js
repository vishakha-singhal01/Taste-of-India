import { useState } from "react";
import logo from "../assets/logo1.png";
import { BsCart4 } from "react-icons/bs";
import { Link } from "react-router-dom";
import useNetwork from "../utils/useNetwork";

// ... (other imports)

const HeaderComponent = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [isNavOpen, setIsNavOpen] = useState(false);
  const isOnline = useNetwork();
  const navigationPages = [
    { name: "Home", to: "/" },
    { name: "About", to: "/about" },
    { name: "Contact", to: "/contact-us" },
  ];

  const toggleNav = () => {
    setIsNavOpen((prevIsNavOpen) => !prevIsNavOpen);
  };

  return (
    <nav className="bg-white border-gray-200 dark:bg-gray-900"    >
      <div className="max-w-screen-xl flex items-center justify-between mx-auto p-4">
        <div className="flex items-center space-x-3 rtl:space-x-reverse">
          <img src={logo} className="h-8" alt="TasteOfIndia Logo" />
          <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">TasteOfIndia</span>
        </div>

        {/* Hamburger Button */}
        <button
          onClick={toggleNav}
          className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
        >
          <span className="sr-only">Open main menu</span>
          <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 1h15M1 7h15M1 13h15" />
          </svg>
        </button>

        {/* Navigation List */}
        <div className={`md:flex md:w-auto ${isNavOpen ? 'block' : 'hidden'}`} id="navbar-default">
          <ul className="font-medium flex flex-col md:flex-row md:space-x-8 rtl:space-x-reverse">
            {navigationPages.map((item) => (
              <li key={item.to}>
                <Link
                  to={item.to}
                  className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
                >
                  {item.name}
                </Link>
              </li>
            ))}
            <li>
              <button
                onClick={() => setIsLoggedIn(!isLoggedIn)}
                className="block py-2 px-3 text-white bg-blue-700 rounded md:bg-transparent md:text-blue-700 md:p-0 dark:text-white md:dark:text-blue-500"
              >
                {isLoggedIn ? "Logout" : "Login"}
              </button>
            </li>
            <li>
              <BsCart4 className="text-2xl text-blue-700" />
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default HeaderComponent;

