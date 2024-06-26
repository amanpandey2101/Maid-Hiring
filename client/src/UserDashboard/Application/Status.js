import Cookies from 'js-cookie';
import React from 'react';
import { useEffect, useState } from 'react';
import { get } from '../../helpers/api_helper';
const Status = () => {
  const [clientDetails, setClientDetails] = useState([])
 

  useEffect(() => {
    const fetchUser = async(req,res)=>{
      try{
        const response = await get('/user/clientDetails');
        setClientDetails(response.user)
       
      }catch(err){
        console.log(err);
      }
    } 
    fetchUser();
  }, [])
  console.log(clientDetails);
  return (
    <div className='flex md:flex-row  justify-center items-center space-x-24 relative md:top-44 top-16 shadow-lg'>
      {clientDetails.status === 'Pending' ? (
        <div className='flex md:flex-row flex-col-reverse'>
          <p className='text-xl text-orange-500 mt-8 pl-5 '>
            Your Application is Under Review...<br /> Please wait until hirer approves your Application.<br />Thanks for your patience!
          </p>
          <img src={require("../../assets/pendingStatus.gif")} alt='logo' className='md:h-96 h-72 mx-auto'/>
        </div>
      ) : clientDetails.status === 'Approved' ? (
        <div className='flex md:flex-row flex-col-reverse '>
          <div className='flex flex-col justify-center md:p-0 px-4 text-center'>

          <p className='text-xl text-green-500 mt-8  '>
            Congratulations! Your Application has been Approved.<br/> 
          </p>
          <p className='text-lg text-black mt-4 font-bold text-center   '>
            Client Details
          </p>
          <p className='text-md text-black font-bold   '>
           Name : <span className='font-normal'>{clientDetails?.adminDetails?.name}</span> 
          </p>
          <p className='text-md text-black font-bold   '>
           Contact Number: <span className='font-normal'>{clientDetails?.adminDetails?.phoneNumber}</span>
          </p>
          <p className='text-md text-black font-bold'>
           Address: <span className='font-normal'>{clientDetails?.adminDetails?.address}</span>
          </p>
          </div>
         
          <img src={require("../../assets/Verified.gif")} alt='logo' className='md:h-96 h-72 mx-auto'/>
        </div>
      ) : clientDetails.status === 'Rejected' ? (
        <div className='flex md:flex-row flex-col-reverse'>
          <p className='text-xl text-red-500 mt-8 pl-5 '>
            We regret to inform you that your Application has been Rejected.<br/> Check your mail for further information.
          </p>
          <img src={require("../../assets/Rejected.gif")} alt='logo' className='md:h-80 h-64 mx-auto'/>
        </div>
      ) : (
        <p className='text-xl text-gray-500 mt-8 '>Invalid Status</p>
      )}
    </div>
  );
};

export default Status;
