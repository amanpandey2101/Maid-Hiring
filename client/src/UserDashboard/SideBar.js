import React, { useEffect, useRef, useState } from "react";
import { NavLink, useLocation } from "react-router-dom";
import SidebarLinkGroup from "./SidebarLinkGroup";
import Navigation from "../constants/section";
import Cookies from "js-cookie";
import { IoIosArrowForward } from "react-icons/io";
import { IoIosArrowBack } from "react-icons/io";

const Sidebar = ({ sidebarOpen, setSidebarOpen }) => {
  const location = useLocation();
  const { pathname } = location;

  const trigger = useRef(null);
  const sidebar = useRef(null);

  const storedSidebarExpanded = Cookies.get("sidebar-expanded");
  const [sidebarExpanded, setSidebarExpanded] = useState(
    storedSidebarExpanded === null ? false : storedSidebarExpanded === "true"
  );

  useEffect(() => {
    const clickHandler = ({ target }) => {
      if (!sidebar.current || !trigger.current) return;
      if (
        !sidebarOpen ||
        sidebar.current.contains(target) ||
        trigger.current.contains(target)
      )
        return;
      setSidebarOpen(false);
    };
    document.addEventListener("click", clickHandler);
    return () => document.removeEventListener("click", clickHandler);
  });

  useEffect(() => {
    const keyHandler = ({ keyCode }) => {
      if (!sidebarOpen || keyCode !== 27) return;
      setSidebarOpen(false);
    };
    document.addEventListener("keydown", keyHandler);
    return () => document.removeEventListener("keydown", keyHandler);
  });

  useEffect(() => {
    Cookies.set("sidebar-expanded", sidebarExpanded.toString());
    if (sidebarExpanded) {
      document.querySelector("body")?.classList.add("sidebar-expanded");
    } else {
      document.querySelector("body")?.classList.remove("sidebar-expanded");
    }
  }, [sidebarExpanded]);
  const handleLogOut = () => {
    Cookies.remove("token", { domain: "maid-hiring.vercel.app" });
    Cookies.remove("token");
    Cookies.remove("role", { domain: "maid-hiring.vercel.app" });
    Cookies.remove("role");
    window.location.href = "/";
  };
  return (
    <>
    {sidebarOpen?(
      <div>
         <button
        onClick={() => setSidebarOpen(false)}
        aria-controls="sidebar"
        aria-expanded={sidebarOpen}
        className="lg:hidden   absolute top-[50%]  z-50 bg-green-500 py-4 px-1 rounded-r-xl shadow-lg transition-all ease-linear duration-300  " 
      
      >
        <IoIosArrowBack className="fill-current" color="white" />
      </button>
      </div>
    ):(
      <>
     <button
        onClick={() => setSidebarOpen(true)}
        aria-controls="sidebar"
        aria-expanded={sidebarOpen}
        className="lg:hidden   absolute top-[50%]  z-50 bg-green-500 py-4 px-1 rounded-r-xl shadow-2xl transition-all ease-in-out duration-300" 
      
      >
        <IoIosArrowForward className="fill-current" color="white" />
      </button>
      </>
    )}
    <aside
      ref={sidebar}
      className={`absolute left-0 top-0 z-40 flex h-screen flex-col overflow-y-hidden bg-[#fafafa] mt-20 duration-300 ease-linear dark:bg-boxdark lg:static lg:translate-x-0 shadow-2xl shadow-gray-500 w-72 ${
        sidebarOpen ? "translate-x-0" : "-translate-x-full"
      }`}
    >
      <div className="flex items-center justify-between gap-2 6 w-52 py-5.5 lg:py-6.5 ">
   
        {/* <button
          ref={trigger}
          onClick={() => setSidebarOpen(!sidebarOpen)}
          aria-controls="sidebar"
          aria-expanded={sidebarOpen}
          className=" block  "
          style={{
            position: "absolute",
            top: "50%",
            left: "12px", 
            transform: "translateY(-50%)",
          }}
        >
          <IoIosArrowForward className="fill-current" />
        </button> */}
      </div>

      <div className="no-scrollbar flex flex-col overflow-y-auto duration-300 ease-linear w-[18rem]">
        <nav className=" py-4 px-4  lg:px-6">
          <div>
            <h3 className="mb-4  text-sm font-semibold text-bodydark2 text-center border-b-2 ">
              MENU
            </h3>

            <ul className="mb-6 flex flex-col  ">
              {Navigation.map((item, index) => (
                <SidebarLinkGroup
                  activeCondition={
                    pathname === "/" || pathname.includes("userDashboard")
                  }
                >
                  {(handleClick, open) => {
                    return (
                      <React.Fragment>
                        <li key={index}>
                          <NavLink
                            to={item.to}
                            className={`group relative flex items-center gap-2.5 rounded-sm py-2 px-4 font-medium text-white bg-green-600 duration-300 ease-in-out hover:bg-green-800 hover:text-white dark:hover:bg-meta-4 no-underline ${
                              (pathname === "/" || pathname.includes("Dash")) &&
                              "bg-gray dark:bg-meta-4"
                            }`}
                            onClick={(e) => {
                              sidebarExpanded
                                ? handleClick()
                                : setSidebarExpanded(true);
                            }}
                          >
                            {item.icon}
                            {item.name}
                          </NavLink>
                        </li>
                      </React.Fragment>
                    );
                  }}
                </SidebarLinkGroup>
              ))}
            </ul>
          </div>
          <div>
            <ul className="mb-6 flex flex-col ">
              {/* <!-- Menu Item Auth Pages --> */}
              <SidebarLinkGroup
                activeCondition={
                  pathname === "/auth" || pathname.includes("auth")
                }
              >
                {(handleClick, open) => {
                  return (
                    <React.Fragment>
                      <NavLink
                        to="#"
                        className={`group relative flex items-center gap-2.5 rounded-sm py-2 px-4 font-medium text-white bg-green-600 hover:bg-green-800  no-underline duration-300 ease-in-out dark:hover:bg-meta-4 ${
                          (pathname === "/auth" || pathname.includes("auth")) &&
                          "bg-graydark dark:bg-meta-4"
                        }`}
                        onClick={(e) => {
                          e.preventDefault();
                          sidebarExpanded
                            ? handleClick()
                            : setSidebarExpanded(true);
                        }}
                      >
                        <svg
                          className="fill-current"
                          width="18"
                          height="19"
                          viewBox="0 0 18 19"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <g clipPath="url(#clip0_130_9814)">
                            <path
                              d="M12.7127 0.55835H9.53457C8.80332 0.55835 8.18457 1.1771 8.18457 1.90835V3.84897C8.18457 4.18647 8.46582 4.46772 8.80332 4.46772C9.14082 4.46772 9.45019 4.18647 9.45019 3.84897V1.88022C9.45019 1.82397 9.47832 1.79585 9.53457 1.79585H12.7127C13.3877 1.79585 13.9221 2.33022 13.9221 3.00522V15.0709C13.9221 15.7459 13.3877 16.2802 12.7127 16.2802H9.53457C9.47832 16.2802 9.45019 16.2521 9.45019 16.1959V14.2552C9.45019 13.9177 9.16894 13.6365 8.80332 13.6365C8.43769 13.6365 8.18457 13.9177 8.18457 14.2552V16.1959C8.18457 16.9271 8.80332 17.5459 9.53457 17.5459H12.7127C14.0908 17.5459 15.1877 16.4209 15.1877 15.0709V3.03335C15.1877 1.65522 14.0627 0.55835 12.7127 0.55835Z"
                              fill=""
                            />
                            <path
                              d="M10.4346 8.60205L7.62207 5.7333C7.36895 5.48018 6.97519 5.48018 6.72207 5.7333C6.46895 5.98643 6.46895 6.38018 6.72207 6.6333L8.46582 8.40518H3.45957C3.12207 8.40518 2.84082 8.68643 2.84082 9.02393C2.84082 9.36143 3.12207 9.64268 3.45957 9.64268H8.49395L6.72207 11.4427C6.46895 11.6958 6.46895 12.0896 6.72207 12.3427C6.83457 12.4552 7.00332 12.5114 7.17207 12.5114C7.34082 12.5114 7.50957 12.4552 7.62207 12.3145L10.4346 9.4458C10.6877 9.24893 10.6877 8.85518 10.4346 8.60205Z"
                              fill=""
                            />
                          </g>
                          <defs>
                            <clipPath id="clip0_130_9814">
                              <rect
                                width="18"
                                height="18"
                                fill="white"
                                transform="translate(0 0.052124)"
                              />
                            </clipPath>
                          </defs>
                        </svg>
                        Authentication
                        <svg
                          className={`absolute right-4 top-1/2 -translate-y-1/2 fill-current ${
                            open && "rotate-180"
                          }`}
                          width="20"
                          height="20"
                          viewBox="0 0 20 20"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            fillRule="evenodd"
                            clipRule="evenodd"
                            d="M4.41107 6.9107C4.73651 6.58527 5.26414 6.58527 5.58958 6.9107L10.0003 11.3214L14.4111 6.91071C14.7365 6.58527 15.2641 6.58527 15.5896 6.91071C15.915 7.23614 15.915 7.76378 15.5896 8.08922L10.5896 13.0892C10.2641 13.4147 9.73651 13.4147 9.41107 13.0892L4.41107 8.08922C4.08563 7.76378 4.08563 7.23614 4.41107 6.9107Z"
                            fill=""
                          />
                        </svg>
                      </NavLink>

                      <div
                        className={`translate transform overflow-hidden ${
                          !open && "hidden"
                        }`}
                      >
                        <ul className="mt-3 mb-5.5 flex flex-col ">
                          <li>
                            <NavLink
                              to="/"
                              className={({ isActive }) =>
                                "group relative flex items-center justify-center  rounded-sm px-4 font-medium text-white bg-green-600 hover:bg-green-800 no-underline duration-300 ease-in-out  hover:text-white p-2  " +
                                (isActive && "!bg-gray-800")
                              }
                              onClick={handleLogOut}
                            >
                              Log Out
                            </NavLink>
                          </li>
                        </ul>
                      </div>
                    </React.Fragment>
                  );
                }}
              </SidebarLinkGroup>
            </ul>
          </div>
        </nav>
      </div>
    </aside>
    </>
  );
};

export default Sidebar;
