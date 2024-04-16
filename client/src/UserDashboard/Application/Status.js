import Cookies from 'js-cookie';
import React from 'react';

const Status = () => {
  const status = Cookies.get('status');

  return (
    <div className='flex md:flex-row flex-col-reverse justify-center items-center space-x-24 relative md:top-20 shadow-lg'>
      {status === 'Pending' ? (
        <>
          <p className='text-xl text-orange-500 mt-8 '>
            Your Application is Under Review...<br /> Please wait until hirer approves your Application.<br />Thanks for your patience!
          </p>
          <img src={require("../../assets/pendingStatus.gif")} alt='logo' className='md:h-96 h-72'/>
        </>
      ) : status === 'Approved' ? (
        <>
          <p className='text-xl text-green-500 mt-8  '>
            Congratulations! Your Application has been Approved.<br/> Hirer will soon contact you!
          </p>
          <img src={require("../../assets/Verified.gif")} alt='logo' className='md:h-96 h-72'/>
        </>
      ) : status === 'Rejected' ? (
        <>
          <p className='text-xl text-red-500 mt-8 '>
            We regret to inform you that your Application has been Rejected.<br/> Check your mail for further information.
          </p>
          <img src={require("../../assets/Rejected.gif")} alt='logo' className='md:h-80 h-64'/>
        </>
      ) : (
        <p className='text-xl text-gray-500 mt-8 '>Invalid Status</p>
      )}
    </div>
  );
};

export default Status;
