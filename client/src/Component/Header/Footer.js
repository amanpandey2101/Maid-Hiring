import React from 'react'
import {Link} from 'react-router-dom'
export default function Footer() {
  return (
    <>
    <div className="f-top p-1 m-0"></div>
      <div className="container-fluid footer-bg">
         <div className="container  p-5">
            <div className="row">
                <div className="col-md-4">
                    <h4>About Eco <span className='f_logo'>Home</span> </h4>
                    <p>We are India's biggest internet based aggregator of house 
                        cleaner departments. Whether you are searching for a house keeper or a babysitter or a patient overseer in Mumbai, Thane, Navi Mumbai, Pune, Bangalore, Surat, you will track down the best quality\
                         and experienced staff here.</p>
               
                </div>
                
                <div className="col-md-2">
                    
                    <h4>Quick Link</h4>
                    <ul>
                        <li><Link to="/" className='text-decoration-none text-white '>Home</Link></li>
                        <li><Link to="/About" className='text-decoration-none text-white '>About</Link></li>
                        <li><Link to="/Contact" className='text-decoration-none text-white '>Contact</Link></li>
                        <li><Link to="/Service" className='text-decoration-none text-white '>Service</Link></li>
                        <li><Link to="/Service" className='text-decoration-none text-white '>Privacy Policy</Link></li>
                        <li><Link to="/Service" className='text-decoration-none text-white '>Terms of Use</Link></li>
                    </ul>
                </div>
                <div className="col-md-3">
                    <h4>Partner with Us</h4>
                    <p>Are you an organization which supplies house
                         keepers/sitters/patient consideration staff ? Band together with us 
                        and bring in additional cash</p>
                        
                        <Link to="/register" className='btn btn-success'>Register With Us</Link>
                        
                   </div>
                <div className="col-md-3">
                    <h4>Contact Us</h4>
                   <p>Email : mail@ecohome.co.in</p>
                   <p>Phone : +91 123456821</p>
                   
                </div>
            </div>
         </div>
      </div>
      <div className="f-bottom p-2 m-0 bg-dark">
        <p className='text-center text-white m-2'> © Copyright 2022</p>
      </div>

      </>

  )
}
