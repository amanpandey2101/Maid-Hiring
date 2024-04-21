import React from "react";
import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import {post} from '../helpers/api_helper'
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import ClipLoader from "react-spinners/ClipLoader";
export default function CompanySignup() {
  const form = useRef();

  const [successMessage, setSuccessMessage] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const [loading, setLoading] = useState(false);
  const sendData = async (companyData) => {
    try {
      setLoading(true)
      const response = await post("/admin/signup", companyData);
      toast.success("You have been successfully registered as Client!")
      await new Promise((resolve) => setTimeout(resolve, 2000));
      window.location.href="/login"
      setLoading(false)
    } catch (error) {
      setErrorMessage("An error occurred. Please try again later.");
      toast.error("Error Occurred!")
      setLoading(false)
    }
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData(form.current);
    const companyData = Object.fromEntries(formData.entries());
    sendData(companyData);
  
  };
  return (
    <>
    <ToastContainer/>
      <div className="container-fluid bg-success p-4 text-white text-center ">
        <div className="container mt-20">
          <h1>Register As a Client</h1>
        </div>
      </div>
      <div className="container  p-5">
        <form ref={form} onSubmit={handleSubmit}>
          <div className="grid md:grid-cols-2 gap-3">
            <div>
              <input
                type="text"
                className="form-control"
                placeholder="First Name"
                name="firstName"
                required
              />{" "}
              <br />
            </div>
            <div >
              <input
                type="text"
                className="form-control"
                placeholder="Last Name"
                name="lastName"
                required
              />{" "}
              <br />
            </div>
            <div >
              <input
                type="email"
                className="form-control"
                placeholder="Your Email"
                name="email"
              />{" "}
              <br />
            </div>
         
      
            <div>
              <input
                type="number"
                className="form-control"
                placeholder="Mobile Number"
                name="phone"
                required
              />{" "}
              <br />
            </div>
       
            <div >
              <input
                type="number"
                className="form-control"
                placeholder="Whatsapp Number"
                name="whatsapp"
              
              />{" "}
              <br />
            </div>
        
            <div >
              <input
                type="password"
                className="form-control"
                placeholder="Password"
                name="password"
                required
              />{" "}
              <br />
            </div>
           
            <div >
              <input
                type="text"
                className="form-control"
                placeholder="Address/Locality"
                name="address"
              />{" "}
              <br />
            </div>
            <div>
              <input
                type="text"
                className="form-control"
                placeholder="City"
                name="city"
              />{" "}
              <br />
            </div>
            <div >
              <select
                name="state"
                id=""
                class="form-select"
                required
               
              >
                <option value="">Select State</option>
                <option value="Bihar">Bihar</option>
                <option value="Bhopal">Bhopal</option>
                <option value="Jaipur">Jaipur</option>
                <option value="Banglore">Banglore</option>
                <option value="Nagpur">Nagpur</option>
                <option value="Surat">Surat</option>
                <option value="Ahmedabad">Ahmedabad</option>
                <option value="Pune">Pune</option>
                <option value="Kolkata">Kolkata</option>
                <option value="Aurangabad">Aurangabad</option>
                <option value="New Delhi">New Delhi</option>
                <option value="Lucknow">Lucknow</option>
                <option value="Hyderabad">Hyderabad</option>
                <option value="Varanasi">Varanasi</option>
                <option value="Agra">Agra</option>
                <option value="Kanpur">Kanpur</option>
                <option value="Karnataka">Karnataka</option>
                <option value="Tamil Nadu">Tamil nadu</option>
              </select>{" "}
            </div>
            <div className=" ">
              <input
                type="number"
                className="form-control"
                placeholder="Pin Code"
                name="pincode"
              />{" "}
              <br />
            </div>
           
            </div>

       
            <button type="submit" className="btn btn-success mt-4 flex w-full justify-center">

              Register {loading?<ClipLoader color="white" size={20}  className="relative top-1"/>:""}
            </button>
  
        </form>
      </div>
    
    </>
  );
}
