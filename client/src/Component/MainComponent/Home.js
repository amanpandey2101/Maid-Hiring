// Niralawebsolution.com / Website design & Development service Noida India
import React from 'react'
export default function Home() {
  return (
    <React.Fragment>
    <div>
      <div id="carouselExampleCaptions" class="carousel slide" data-bs-ride="false">
  <div className="carousel-indicators">
    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
  </div>
  <div className="carousel-inner">
    <div className="carousel-item active">
      <img src= './../img/1.jpg' class="d-block w-100" alt="..." />
      
    </div>
    <div class="carousel-item">
      <img src='./../img/2.jpg' className="d-block w-100" alt="..." />
     
    </div>
    <div class="carousel-item">
      <img src='./../img/3.jpeg' className="d-block w-100" alt="..." />
      
    </div>
  </div>
  <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Previous</span>
  </button>
  <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
    <span className="carousel-control-next-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Next</span>
  </button>
</div> 
{/* end of slider */}
   
    <div className="container-fluid ">
      
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

    <div className="container">
      <div className="row text-center">
        <h1 className='mb-5'>How does it work?</h1> <br />
        <div className="col-md-4">
          <img src="./../img/search-b-icon.png" alt="" />
          <h4 className='p-3'>Search</h4>
          <p>Use our simple search and tell us what you require. 
            See list of all the available maids in your area</p>
        </div>
        <div className="col-md-4">
        <img src="./../img/search-b--icon.png" alt="" />
          <h4 className='p-3'>Shortlist</h4>
          <p>View the complete profile of the hundreds of 
            available maids and shortlist as per your preference
</p>
        </div>
        <div className="col-md-4">
        <img src="./../img/relax-b--icon.png" alt="" />
          <h4 className='p-3'>Meet, Select & Relax</h4>
          <p>Talk to the maid on the phone or meet her 
            personally. Select the maid and pay only after the maid joins

</p>
        </div>
      </div>
    </div>
{/* end of section2 */}
     <div className="container-fluid sec2 mt-5">
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

<div className="container-fluid mt-5">
  <div className="row  d-flex justify-content-around text-center">
    <h1> Testimonial</h1>
    <h5 className='text-muted '>What say our client</h5>
    <div className="container mt-5">
      <div className="container p-5 text-center">
       
<div className="row d-flex justify-content-around text-white">
  <div className="col-md-4  p-5  profile bg-success ">
   <img src="./../img/profile.png" alt="" />
   <h4 className='mt-4'>Saurav Josi</h4>
   <p>e are happy with Eden Grace’s services for our new domestic helper! Very professional</p>
  </div>
  <div className="col-md-3 p-5  profile bg-success ">
   <img src="./../img/profile.png" alt="" />
   <h4 className='mt-4'>Saurav Josi</h4>
   <p>e are happy with Eden Grace’s services for our new domestic helper! Very professional</p>
  </div>
  <div className="col-md-4   p-5  profile bg-success ">
   <img src="./../img/profile.png" alt="" />
   <h4 className='mt-4'>Saurav Josi</h4>
   <p>e are happy with Eden Grace’s services for our new domestic helper! Very professional</p>
  </div>
</div>
      </div>
     </div>
  </div>
</div>
<div
  className="container-fluid row justify-content-center mb-5 text-white gx-0 gy-3"
  id="s3"
>
  <div className="row  pb-4 mb-5 justify-content-center gy-4 ">
    <div className="col-lg-3 me-4 ">
      <h2 className="mb-4">
        <i className="bi bi-asterisk text-warning pe-2" />
        Why choose us
      </h2>
      <p className="ps-6">
        We give you an on-demand and customizable service. We are a professional
        and reliable service provider and aim at 100% customer satisfaction.
      </p>
    </div>
    <div className="col-lg-3 me-4">
      <h2 className="mb-4">
        <i className="bi bi-bullseye text-warning pe-2" />
        Our mission
      </h2>
      <p className="ps-6">
        Our mission is to impact your personal and professional life with a
        clean, healthy and hygienic environment. We assure this confidently
        because of our hardworking and committed team.
      </p>
    </div>
    <div className="col-lg-3">
      <h2 className="mb-4">
        <i className="bi bi-cart3 text-warning pe-2" /> What we do
      </h2>
      <p className="ps-6">
        We provide housekeeping services, home cleaning services, sofa and
        carpet cleaning services across Mumbai, Navi-Mumbai and Thane.
      </p>
    </div>
  </div>
  <div className="row justify-content-center pb-5 gy-4">
    <div className="col-lg-3 me-4">
      <h2 className="mb-4">
        <i className="bi bi-file-break text-warning pe-2 " /> security
      </h2>
      <p className="ps-6">
        Prepare a safety manual that is read and understood at the time of
        induction of new employees. Paste safety rules on walls at strategic
        points in the work area.
      </p>
    </div>
    <div className="col-lg-3 me-4">
      <h2 className="mb-4">
        <i className="bi bi-clipboard2-pulse text-warning pe-2" /> Trase
        handling
      </h2>
      <p className="ps-6">
        The handling and disposal of trash is a significant part of
        housekeeping. This job should be monitored by supervisors on a rotating
        basis. Because of the possibility that trash might be used to hide
        contraband, it should not be allowed to accumulate near incoming
        supplies and equipment..
      </p>
    </div>
    <div className="col-lg-3">
      <h2 className="mb-4">
        <i className="bi bi-alarm text-warning pe-2" />
        ON Time
      </h2>
      <p className="ps-6">On time service according to your need</p>
    </div>
  </div>
</div>

    </div>
    </React.Fragment>
    

    

  )
}
