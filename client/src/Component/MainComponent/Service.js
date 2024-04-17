import React from 'react'
import Card from 'react-bootstrap/Card';
import CardGroup from 'react-bootstrap/CardGroup';

export default function Service() {
  return (
    <>

    <div className=" bg-success p-2 relative top-20  shadow-xl text-white text-center">
        <div className="mb-10 ">
     <h1>Our Services</h1>
</div>
    
    </div>

      
    <div className="container-fluid mt-5 ">
      
      <div className="row py-5 mt-4 px-4 text-center text-white ">

        <div className="col-md-4 p-2">
          <div className="box">
            <img src="./../img/home_pannel_Icon1.png" alt="" />
            <h3>Overseas Maid</h3>
            <p>We provide Indian maids in Dubai and Singapore</p>
            <a href="#" className='btn btn-lg btn-outline-success text-white'>Book Now</a>
          </div>
        </div>
        <div className="col-md-4  p-2">
        <div className="box">
          <img src="./../img/home_pannel_Icon2.png" alt="" />
          <h3>Japa Maid / Baby Massager</h3>
            <p>Experienced Japa maids for your new born</p>
            <a href="#" className='btn btn-lg btn-outline-success text-white'>Book Now</a>

          </div>
        </div>
        <div className="col-md-4  p-2">
        <div className="box">
        <img src="./../img/home_pannel_Icon3.png" alt="" />
          <h3>Japa Maid / Baby Massager</h3>
            <p>Experienced Japa maids for your new born</p>
            <a href="#" className='btn-lg btn btn-outline-success text-white '>Book Now</a>          </div>
        </div>
      </div>
    </div>
    {/* end of section1 */}

    <div className="container-fluid sec2 ">
      <div className="container p-5 text-center">
        <h5>Our Featured Services</h5>
        <h2>Hire professionals, <br />
trained specifically for your needs</h2>
<p className='text-muted fs-4 mt-3'>Broomees offers completely certified workers with an unlimited replacement policy</p>
<br />
<div className="row d-flex justify-content-around ">
  <div className="col-md-3 me-2 p-5 border border-success rounded">
   <img src="./../img/p1.png" alt="" />
   <h4>Domestic Help</h4>
  </div>
  <div className="col-md-3 p-5 border border-success rounded">
  <img src="./../img/p2.png" alt="" />
   <h4>Chef/Cook</h4>
  </div>
  <div className="col-md-3 p-5 border border-success rounded">
  <img src="./../img/p3.png" alt="" />
   <h4>babysitter/ Japa</h4>
  </div>
</div>
      </div>
     </div>
   
{/* end of feature  */}
    </>
  )
}
