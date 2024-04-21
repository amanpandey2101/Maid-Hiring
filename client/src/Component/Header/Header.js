import Cookies from "js-cookie";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import { RiMenu3Line } from 'react-icons/ri';

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const token = Cookies.get("token");
  const role = Cookies.get("role");

  const handleToggle = () => {
    setIsOpen(!isOpen);
  };

  const handleLogOut = () => {
    Cookies.remove("token", { domain: "maid-hiring.vercel.app"});
    Cookies.remove("token");
    Cookies.remove("role",  { domain: "maid-hiring.vercel.app"});
    Cookies.remove("role");
    window.location.href = "/";
  };

  return (
    <nav className="bg-white shadow-xl fixed z-50 w-screen">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          <Link to="/" className="flex-shrink-0">
            <img src="./../img/logo.png" alt="Logo" className="h-12" />
          </Link>
          <div className="hidden md:flex justify-center mx-auto">
            <ul className="flex space-x-5 justify-between ">
              <div className="flex gap-2">
                <li className="nav-item">
                  <Link
                    to="/"
                    className="nav-link text-black hover:!text-white hover:bg-green-500 px-3 py-2 rounded-md text-sm font-medium  border-[1.5px] border-green-500 shadow-md shadow-gray-400"
                  >
                    Home
                  </Link>
                </li>
                <li className="nav-item">
                  <Link
                    to="/About"
                    className="nav-link text-black hover:!text-white hover:bg-green-500 px-3 py-2 rounded-md text-sm font-medium  border-[1.5px] border-green-500 shadow-md shadow-gray-400"
                  >
                    About
                  </Link>
                </li>
                <li className="nav-item">
                  <Link
                    to="/Service"
                    className="nav-link text-black hover:!text-white hover:bg-green-500 px-3 py-2 rounded-md text-sm font-medium  border-[1.5px] border-green-500 shadow-md shadow-gray-400"
                  >
                    Service
                  </Link>
                </li>
                <li className="nav-item">
                  <Link
                    to="/Contact"
                    className="nav-link text-black hover:!text-white hover:bg-green-500  px-3 py-2 rounded-md text-sm font-medium  border-[1.5px] border-green-500 shadow-md shadow-gray-400"
                  >
                    Contact
                  </Link>
                </li>
              </div>
              <div className="flex  gap-2 relative left-48">
                {!token ? (
                  <>
                    <li className="">
                      <Link
                        to="/login"
                        className="nav-link text-white hover:bg-green-600 bg-green-700 px-3 py-2 rounded-md text-sm font-medium shadow-md shadow-gray-400 hover:scale-[1.01]"
                      >
                        Login
                      </Link>
                    </li>
                    <li className="nav-item">
                      <Link
                        to="/register"
                        className="nav-link text-white hover:bg-green-600 bg-green-700 px-3 py-2 rounded-md text-sm font-medium shadow-md shadow-gray-400 hover:scale-[1.01]"
                      >
                        Register as Maid
                      </Link>
                    </li>
                    <li className="nav-item">
                      <Link
                        to="/client-register"
                        className ="nav-link text-white  hover:bg-green-600 bg-green-700 px-3 py-2 rounded-md text-sm font-medium shadow-md shadow-gray-400 hover:scale-[1.01]"
                      >
                        Register as Client
                      </Link>
                    </li>
                  </>
                ) : (
                  <>
                    <Link
                      to={`${role}Dashboard/application`}
                      className="nav-link text-white bg-violet-500  px-3 py-2 rounded-md text-sm font-medium border-[1.5px] border-violet-600  hover:bg-violet-600 hover:scale-[1.01] shadow-md shadow-gray-400"
                    >
                      Dashboard
                    </Link>
                    <Link
                      className="nav-link text-black hover:bg-red-500 hover:!text-white px-3 py-2 rounded-md text-sm font-medium border-[1.5px] border-red-600 shadow-md shadow-gray-400"
                      onClick={handleLogOut}
                      to="/"
                    >
                      Logout
                    </Link>
                  </>
                )}
              </div>
            </ul>
          </div>
      
          <div className="md:hidden flex items-center">
            <button
              onClick={handleToggle}
              className="text-black hover:text-white focus:outline-none"
            >
              <RiMenu3Line size={24} />
            </button>
          </div>
        </div>
 
        {isOpen && (
          <div className="md:hidden fixed z-50 bg-green-500 shadow-xl w-44 right-0 flex flex-col justify-center">
            <ul className="text-center w-40">
              <li>
                <Link to="/" className="block py-2 px-4  no-underline text-white hover:bg-green-500 rounded-md hover:text-white  ">Home</Link>
              </li>
              <li>
                <Link to="/About" className="block py-2 px-4  no-underline  text-white  hover:bg-green-500 rounded-md hover:text-white ">About</Link>
              </li>
              <li>
                <Link to="/Service" className="block py-2 px-4  no-underline  text-white  hover:bg-green-500 rounded-md hover:text-white ">Service</Link>
              </li>
              <li>
                <Link to="/Contact" className="block py-2 px-4  no-underline  text-white hover:bg-green-500 rounded-md hover:text-white ">Contact</Link>
              </li>
              {!token ? (
                <>
                  <li>
                    <Link to="/login" className="block py-2 px-4  no-underline  text-white  hover:bg-green-500 rounded-md hover:text-white ">Login</Link>
                  </li>
                  <li>
                    <Link to="/register" className="block py-2 px-4 no-underline  text-white  hover:bg-green-500 rounded-md hover:text-white ">Register as Maid</Link>
                  </li>
                  <li>
                    <Link to="/client-register" className="block py-2 px-4 no-underline  text-white  hover:bg-green-500 rounded-md hover:text-white ">Register as Client</Link>
                  </li>
                </>
              ) : (
                <>
                  <li>
                    <Link to={`${role}Dashboard/application`} className="block py-2 px-4  no-underline  text-white hover:bg-green-500 rounded-md hover:text-white ">Dashboard</Link>
                  </li>
                  <li>
                    <button onClick={handleLogOut} className="block py-2 px-4 ml-4 no-underline  text-white  hover:bg-green-500 rounded-md hover:text-white">Logout</button>
                  </li>
                </>
              )}
            </ul>
          </div>
        )}
      </div>
    </nav>
  );
}
