import { useState } from "react";
import logo from "../assets/logo1.png";
import user from "../assets/user.png";
import { BsCart4 } from "react-icons/bs";
import { RiRadioButtonLine } from "react-icons/ri";
import { Link } from "react-router-dom";
import useNetwork from "../utils/useNetwork";

const HeaderComponent = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(true);
  const isOnline = useNetwork();
  const navigationPages = [
    { name: "Home", to: "/" },
    { name: "About", to: "/about" },
    { name: "Contact", to: "/contact-us" },
  ];

  return (
    <>
      <nav className="bg-white shadow-lg rounded-lg p-4 w-full">
        <div className="container navbar-container flex items-center justify-between mx-auto">
          <div className="flex items-center">
            <img src={logo} className="pl-2 w-20 h-16 mr-3" alt="Flowbite Logo" />
            <span className="text-xl font-bold">TasteOfIndia</span>
          </div>

          <ul className="flex items-center space-x-8 md:space-x-4">
            {navigationPages.map((item) => (
              <li key={item.to} className="group">
                <Link
                  to={item.to}
                  className="text-blue-700 hover:bg-yellow-500 hover:text-white px-3 py-2 rounded-lg transition duration-300"
                >
                  {item.name}
                </Link>
              </li>
            ))}
            <li className="group ml-auto">
              <BsCart4 className="text-2xl text-blue-700 group-hover:text-white" />
            </li>
            <li className={`group relative ${isOnline ? 'text-green-500' : 'text-red-500'}`}>
              <RiRadioButtonLine className="text-2xl group-hover:text-white" style={{ top: "3px", position: "relative" }} />
            </li>
            <li className="group">
              <button onClick={() => setIsLoggedIn(!isLoggedIn)} className="text-blue-700 hover:bg-yellow-500 hover:text-white px-3 py-2 rounded-lg transition duration-300">
                {isLoggedIn ? "Logout" : "Login"}
              </button>
            </li>
          </ul>
        </div>
      </nav>
    </>
  );
};

export default HeaderComponent;
