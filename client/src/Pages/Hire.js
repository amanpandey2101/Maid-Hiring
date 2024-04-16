import React from "react";
import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import {post} from '../helpers/api_helper'
export default function Contact() {
  const form = useRef();

  const [successMessage, setSuccessMessage] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const sendData = async (userData) => {
    try {
      const response = await post("/user/signup", userData);
      if (response.status === 200) {
        setSuccessMessage("Your registration was successful!");
      }
    } catch (error) {
      setErrorMessage("An error occurred. Please try again later.");
    }
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData(form.current);
    const userData = Object.fromEntries(formData.entries());
    sendData(userData);
    e.target.reset();
  };
  return (
    <>
      <div className="container-fluid bg-success p-4 text-white text-center">
        <div className="container">
          <h1>Register Now</h1>
        </div>
      </div>
      <div className="container  p-5">
        <form ref={form} onSubmit={handleSubmit}>
          <div className="row">
            <div className="col-md-6">
              <input
                type="text"
                className="form-control"
                placeholder="First Name"
                name="firstName"
              />{" "}
              <br />
            </div>
            <div className="col-md-6">
              <input
                type="text"
                className="form-control"
                placeholder="Last Name"
                name="lastName"
              />{" "}
              <br />
            </div>
            <div className="col-md-6">
              <input
                type="email"
                className="form-control"
                placeholder="Your Email"
                name="email"
              />{" "}
              <br />
            </div>
          </div>
          <div className="row mt-4">
            <div className="col-md-6">
              <input
                type="number"
                className="form-control"
                placeholder="Mobile Number"
                name="phone"
              />{" "}
              <br />
            </div>
            <div className="col-md-6">
              <input
                type="password"
                className="form-control"
                placeholder="Password"
                name="password"
              />{" "}
              <br />
            </div>
           
            <div className="col-md-6">
              <input
                type="text"
                className="form-control"
                placeholder="Address"
                name="address"
              />{" "}
              <br />
            </div>
            <div className="col-md-6">
              <input
                type="text"
                className="form-control"
                placeholder="City"
                name="city"
              />{" "}
              <br />
            </div>
            <div className="col-md-4">
              <select
                name="state"
                id=""
                class="form-select"
               
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
            <div className="col-md-2">
              <input
                type="number"
                className="form-control"
                placeholder="Pin Code"
                name="pincode"
              />{" "}
              <br />
            </div>
            <div className="col-md-6">
              <label htmlFor="">Choose your Suitable Job</label> <br />
              <select name="job" id="" className="form-select">
                <option value="">Select Job</option>
                <option value="Elderly Care">Elderly Care</option>
                <option value="Babysitter">Babysitter</option>
                <option value="Cooking">Cooking</option>
                <option value="Cleaning">Cleaning</option>
              </select>
            </div>
            <div className="col-md-6">
              <label htmlFor="">Gender</label> <br />
              <input type="radio" name="gender" value="Male" className="form-check-input mr-2" />
              <label htmlFor="" className="form-check-label mr-4">
                {" "}
                Male
              </label>
              <input type="radio" name="gender" value="Female" className="form-check-input mr-2" />
              <label htmlFor="" className="form-check-label">
                {" "}
                Female
              </label>
            </div>

            <textarea
              name="message"
              id=""
              cols="10"
              rows="7"
              className="form-control mt-4"
              placeholder="Type your message"
            ></textarea>
            <button type="submit" className="btn btn-success mt-4">
              Register
            </button>
          </div>
        </form>
      </div>
    </>
  );
}
