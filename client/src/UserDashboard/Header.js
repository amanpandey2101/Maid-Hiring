import { Link , useLocation} from 'react-router-dom';
import DarkModeSwitcher from './DarkModeSwitcher';
import DropdownNotification from './DropdownNotification';
import DropdownUser from './DropdownUser';
import { RxHamburgerMenu } from 'react-icons/rx';
import {get} from "../helpers/api_helper"
import { useEffect, useState } from 'react';


const Header = (props) => {
  const [userInfo, setUserInfo] = useState({ claimBalance: 0, sharedProducts: [] });
  const location = useLocation();
  useEffect(() => {
    const fetchUserInfo = async () => {
      try {
        const response = await get('/userInfo'); 
        const { claimBalance, sharedProducts, verifiedBalance } = response;
        setUserInfo({ claimBalance, sharedProducts,verifiedBalance });
      } catch (error) {
        console.error('Error fetching user info:', error);
      }
    };

    fetchUserInfo();
  }, [location.pathname]); 
  return (
    <header className="sticky top-0 flex w-full shadow-xl shadow-gray-400 z-50 bg-green-600 h-20 ">
      <div className="flex flex-grow items-center justify-between py-4 px-4 shadow-2 md:px-6 2xl:px-11">
        <div className="flex items-center gap-2 sm:gap-4 lg:hidden">
          <button
            aria-controls="sidebar"
            onClick={(e) => {
              e.stopPropagation();
              props.setSidebarOpen(!props.sidebarOpen);
            }}
            className="z-99999 block rounded-sm border border-stroke bg-white p-1.5 shadow-sm dark:border-strokedark dark:bg-boxdark lg:hidden"
          >
            <RxHamburgerMenu
              size={24}
              className={`${
                !props.sidebarOpen ? '' : ''
              } text-black dark:text-white`}
            />
          </button>
          <Link className="block flex-shrink-0 lg:hidden w-16 mr-2 " to="/userDash">
            <img src={require("../assets/logo.png")} alt="Logo" className='h-7 '/>
          </Link>
        </div>

       
        <div className="block  ">
       
        </div>

        <div className="flex items-center gap-3 2xsm:gap-7">
          <ul className="flex items-center gap-2 2xsm:gap-4">
            <DarkModeSwitcher />
            <DropdownNotification />
          </ul>
          <DropdownUser />
        </div>
      </div>
    </header>
  );
};

export default Header;
