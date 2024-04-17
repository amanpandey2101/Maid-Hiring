import Cookies from "js-cookie";
import React from "react";
import { Link } from "react-router-dom";

export default function Header() {
  const token = Cookies.get("token");
  const role = Cookies.get("role");
  const handleLogOut = () => {
    Cookies.remove("token", { domain: "maid-hiring.vercel.app"});
    Cookies.remove("role",  { domain: "maid-hiring.vercel.app"});
    window.location.href = "/";
  };
  return (
    <nav className="bg-white shadow-xl">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          <Link to="/" className="flex-shrink-0">
            <img src="./../img/logo.png" alt="Logo" className="h-12" />
          </Link>
          <div className="flex justify-center mx-auto">
            <ul className="flex space-x-5 justify-between ">
              <div className="flex gap-2">
                <li className="nav-item">
                  <Link
                    to="/"
                    className="nav-link text-black hover:text-white hover:bg-green-500 px-3 py-2 rounded-md text-sm font-medium  border-[1.5px] border-green-500"
                  >
                    Home
                  </Link>
                </li>
                <li className="nav-item">
                  <Link
                    to="/About"
                    className="nav-link text-black hover:text-white hover:bg-green-500 px-3 py-2 rounded-md text-sm font-medium  border-[1.5px] border-green-500"
                  >
                    About
                  </Link>
                </li>
                <li className="nav-item">
                  <Link
                    to="/Service"
                    className="nav-link text-black hover:text-white hover:bg-green-500 px-3 py-2 rounded-md text-sm font-medium  border-[1.5px] border-green-500"
                  >
                    Service
                  </Link>
                </li>
                <li className="nav-item">
                  <Link
                    to="/Contact"
                    className="nav-link text-black hover:text-white hover:bg-green-500 px-3 py-2 rounded-md text-sm font-medium  border-[1.5px] border-green-500 "
                  >
                    Contact
                  </Link>
                </li>
              </div>
              <div className="flex  gap-2 relative left-48">
                {!token ? (
                  <>
                    <li className="nav-item">
                      <Link
                        to="/login"
                        className="nav-link text-black hover:text-white hover:bg-green-500 px-3 py-2 rounded-md text-sm font-medium border-[1.5px] border-black"
                      >
                        Login
                      </Link>
                    </li>
                    <li className="nav-item">
                      <Link
                        to="/register"
                        className="nav-link text-black hover:text-white hover:bg-green-500 px-3 py-2 rounded-md text-sm font-medium border-[1.5px] border-black"
                      >
                        Register
                      </Link>
                    </li>
                  </>
                ) : (
                  <>
                    <Link
                      to={`${role}Dashboard/application`}
                      className="nav-link text-black hover:bg-red-500 hover:text-white px-3 py-2 rounded-md text-sm font-medium border-[1.5px] border-red-600"
                    >
                      Dashboard
                    </Link>
                    <Link
                      className="nav-link text-black hover:bg-red-500 hover:text-white px-3 py-2 rounded-md text-sm font-medium border-[1.5px] border-red-600"
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
        </div>
      </div>
    </nav>
  );
}
