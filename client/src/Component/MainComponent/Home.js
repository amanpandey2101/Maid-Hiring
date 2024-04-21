import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Scrollbar, A11y, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import "swiper/css";

export default function Home() {
  return (
    <React.Fragment>
      <div className="container mx-auto pt-24">
     
        <Swiper
        modules={[Navigation, Pagination, Scrollbar, A11y, Autoplay]}
        autoplay={{ delay: 2000 }}
          spaceBetween={50}
          slidesPerView={1}
          onSlideChange={() => console.log("slide change")}
          onSwiper={(swiper) => console.log(swiper)}
          pagination={{ clickable: true }}
        >
          <SwiperSlide>
          <img src="./../img/1.jpg" className="d-block w-full md:h-[70vh] h-[40vh]" alt="..." />
          </SwiperSlide>
          <SwiperSlide>
          <img src="./../img/2.jpg" className="d-block w-full md:h-[70vh] h-[40vh]" alt="..." />
          </SwiperSlide>
          <SwiperSlide>
          <img src="./../img/3.jpeg" className="d-block w-full md:h-[70vh] h-[40vh]" alt="..." />
          </SwiperSlide>
         
       
        </Swiper>
        {/* end of slider */}

        <div className="container mx-auto px-4 py-5 text-center text-white">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="pt-2">
              <div className="box">
                <img
                  src="./../img/home_pannel_Icon1.png"
                  alt=""
                  className="mx-auto"
                />
                <h3 className="mt-3">Overseas Maid</h3>
                <p>We provide Indian maids in Dubai and Singapore</p>
                <a
                  href="#"
                  className="btn btn-lg btn-outline-success text-white relative top-10"
                >
                  Book Now
                </a>
              </div>
            </div>
            <div className="p-2">
              <div className="box">
                <img
                  src="./../img/home_pannel_Icon2.png"
                  alt=""
                  className="mx-auto"
                />
                <h3 className="mt-3">Japa Maid / Baby Massager</h3>
                <p>Experienced Japa maids for your newborn</p>
                <a
                  href="#"
                  className="btn btn-lg btn-outline-success text-white relative top-4"
                >
                  Book Now
                </a>
              </div>
            </div>
            <div className="p-2">
              <div className="box">
                <img
                  src="./../img/home_pannel_Icon3.png"
                  alt=""
                  className="mx-auto"
                />
                <h3 className="mt-3">Married Couple Work</h3>
                <p>Experienced Married Couple for your newborn</p>
                <a
                  href="#"
                  className="btn-lg btn btn-outline-success text-white relative top-10"
                >
                  Book Now
                </a>
              </div>
            </div>
          </div>
        </div>
        {/* end of section1 */}

        <div className="container mx-auto text-center">
          <h1 className="mb-5">How does it work?</h1>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div>
              <img
                src="./../img/search-b-icon.png"
                alt=""
                className="mx-auto"
              />
              <h4 className="p-3">Search</h4>
              <p>
                Use our simple search and tell us what you require. See a list
                of all the available maids in your area
              </p>
            </div>
            <div>
              <img
                src="./../img/search-b--icon.png"
                alt=""
                className="mx-auto"
              />
              <h4 className="p-3">Shortlist</h4>
              <p>
                View the complete profile of the hundreds of available maids and
                shortlist as per your preference
              </p>
            </div>
            <div>
              <img
                src="./../img/relax-b--icon.png"
                alt=""
                className="mx-auto"
              />
              <h4 className="p-3">Meet, Select & Relax</h4>
              <p>
                Talk to the maid on the phone or meet her personally. Select the
                maid and pay only after the maid joins
              </p>
            </div>
          </div>
        </div>
        {/* end of section2 */}

        <div className="container mx-auto text-center mt-5">
          <h5>Our Featured Services</h5>
          <h2>Hire professionals, trained specifically for your needs</h2>
          <p className="text-muted fs-4 mt-3">
            Broomees offers completely certified workers with an unlimited
            replacement policy
          </p>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4 justify-items-center items-center">
            <div className="me-2 p-5 border border-success rounded">
              <img src="./../img/p1.png" alt="" className="mx-auto" />
              <h4 className="pt-4">Domestic Help</h4>
            </div>
            <div className="p-5 border border-success rounded">
              <img src="./../img/p2.png" alt="" className="mx-auto" />
              <h4 className="pt-4">Chef/Cook</h4>
            </div>
            <div className="p-5 border border-success rounded">
              <img src="./../img/p3.png" alt="" className="mx-auto" />
              <h4 className="pt-4">babysitter/ Japa</h4>
            </div>
            <div className="p-5 border border-success rounded">
              <img src="./../img/elderly-care.png" alt="" className="mx-auto h-52" />
              <h4 className="pt-4">Elderly Care</h4>
            </div>
          </div>
        </div>
        {/* end of feature */}
        <div className="container-fluid mt-5">
          <div className="row  d-flex justify-content-around text-center">
            <h1> Testimonial</h1>
            <h5 className="text-muted ">What say our client</h5>
            <div className="container mt-5">
              <div className="container p-5 text-center">
                <div className="row d-flex justify-content-around text-white gap-2">
                  <div className="col-md-3  p-5  profile bg-success   ">
                    <img src="./../img/client1.jpg" alt=""  className="h-32 w-32 rounded-full"/>
                    <h4 className="mt-4">Saurav Josi</h4>
                    <p>
                      e are happy with Eden Grace’s services for our new
                      domestic helper! Very professional
                    </p>
                  </div>
                  <div className="col-md-3 p-5  profile bg-success ">
                    <img src="./../img/client2.jpg" alt=""  className="h-32 w-32 rounded-full"/>
                    <h4 className="mt-4">Rahul Kumar</h4>
                    <p>
                      e are happy with Eden Grace’s services for our new
                      domestic helper! Very professional
                    </p>
                  </div>
                  <div className="col-md-3   p-5  profile bg-success ">
                    <img src="./../img/client3.jpg" alt=""  className="h-32 w-32 rounded-full" />
                    <h4 className="mt-4">Ankita Mishra</h4>
                    <p>
                      e are happy with Eden Grace’s services for our new
                      domestic helper! Very professional
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div
          className="container-fluid row justify-content-center mb-5 text-white gx-0 gy-3 "
          id="s3"
        >
          <div className="row pb-4 mb-5 justify-content-center gy-4">
            <div className="col-lg-3 me-4">
              <h2 className="mb-4">
                <i className="bi bi-asterisk text-warning pe-2" />
                Why choose us
              </h2>
              <p className="ps-6">
                We give you an on-demand and customizable service. We are a
                professional and reliable service provider and aim at 100%
                customer satisfaction.
              </p>
            </div>
            <div className="col-lg-3 me-4">
              <h2 className="mb-4">
                <i className="bi bi-bullseye text-warning pe-2" />
                Our mission
              </h2>
              <p className="ps-6">
                Our mission is to impact your personal and professional life
                with a clean, healthy, and hygienic environment. We assure this
                confidently because of our hardworking and committed team.
              </p>
            </div>
            <div className="col-lg-3">
              <h2 className="mb-4">
                <i className="bi bi-cart3 text-warning pe-2" /> What we do
              </h2>
              <p className="ps-6">
                We provide housekeeping services, home cleaning services, sofa
                and carpet cleaning services across Mumbai, Navi-Mumbai, and
                Thane.
              </p>
            </div>
          </div>
          <div className="row justify-content-center pb-5 gy-4">
            <div className="col-lg-3 me-4">
              <h2 className="mb-4">
                <i className="bi bi-file-break text-warning pe-2 " /> Security
              </h2>
              <p className="ps-6">
                Prepare a safety manual that is read and understood at the time
                of induction of new employees. Paste safety rules on walls at
                strategic points in the work area.
              </p>
            </div>
            <div className="col-lg-3 me-4">
              <h2 className="mb-4">
                <i className="bi bi-clipboard2-pulse text-warning pe-2" /> Trash
                handling
              </h2>
              <p className="ps-6">
                The handling and disposal of trash are significant parts of
                housekeeping. This job should be monitored by supervisors on a
                rotating basis. Because of the possibility that trash might be
                used to hide contraband, it should not be allowed to accumulate
                near incoming supplies and equipment.
              </p>
            </div>
            <div className="col-lg-3">
              <h2 className="mb-4">
                <i className="bi bi-alarm text-warning pe-2" />
                On Time
              </h2>
              <p className="ps-6">On-time service according to your needs</p>
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
}
