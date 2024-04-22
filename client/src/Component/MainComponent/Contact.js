import React from 'react'
import {useRef} from 'react'
import emailjs from '@emailjs/browser';

export default function Contact() {

  const form = useRef()
  // const sendEmail = () => {};
  
  
  const sendEmail = (e) => {
      e.preventDefault();
  
      emailjs.sendForm('service_vpii398', 'template_td8a9zn', form.current, '6kHCQb_QMpeTBwO8A')
        .then((result) => {
            console.log(result.text);
        }, (error) => {
            console.log(error.text);
        });
        e.target.reset()
        alert('Your Message has been submit Successfull ')
     
    };
  


  return (
    <>
     <div className="container-fluid bg-success p-5 text-white text-center">
        <div className="container py-5">
     <h1>Contact Us</h1>
</div>
     </div>
     <div className="container  p-5">
     <form ref={form} onSubmit={sendEmail}>
      <div className="row">
        <div className="col-md-6">
      <input type="text" className='form-control' placeholder='Your Name' /> <br />
      </div>
        <div className="col-md-6">
      <input type="email" className='form-control' placeholder='Your Email' /> <br />
      </div>
      </div>
      <div className="row mt-4">
        <div className="col-md-6">
      <input type="number" className='form-control' placeholder='Mobile Number' /> <br />
      </div>
        <div className="col-md-6">
      <input type="text" className='form-control' placeholder='Subject' /> <br />
      </div>
      <textarea name="" id="" cols="30" rows="10" className='form-control mt-4'></textarea>
        <button type="submit" className='btn btn-success mt-4'>Submit</button>
      </div>
     </form>
     </div>
    </>
  )
}
