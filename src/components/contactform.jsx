"use client";
import React from "react";
import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPhone } from "@fortawesome/free-solid-svg-icons";
import { faGlobe } from "@fortawesome/free-solid-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { faMapLocationDot } from "@fortawesome/free-solid-svg-icons";
import Image from "next/image";
import Link from "next/link";
import Loader from "../../public/loader.gif"
import ThankYou from "./thankyou";

function ContactForm() {
 const [showPopUp,setShowPopUp] = useState(false);
  const [formData, setFormData] = useState({
    user_name: "",
    user_email: "",
    subject: "",
    message: "",
  });
  const [waitingmessage, setwaitingmessage] = useState(false);

  const [isMessageSent, setMessageSent] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };
  const [formerror, setFormError] = useState({});
  const validation = () => {
    let err = {};
    // we will validate each input field over here step by step
    //validation code
    if (formData.user_name === "") {
      err.user_name = "Please Enter Your Full Name!";
    } else {
      if (formData.user_name.length <= 1) {
        err.user_name = "Name should be at least 2 character";
      }
    }
    if (formData.user_email === "") {
      err.user_email = "Please Enter Your Email!";
    } else {
      let regex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
      if (!regex.test(formData.user_email)) {
        err.user_email = "Email not valid!";
      }
    }
    if (formData.subject === "") {
      err.subject = "Please Enter The Subject!";
    } else {
      if (formData.subject.length <= 1) {
        err.subject = "Please enter Relevant Subject !";
      }
    }
    if (formData.message === "") {
      err.message = "Please Enter Your Message!";
    } else {
      if (formData.message.length <= 1) {
        err.message = "Please enter Relevant Message !";
      }
    }

    setFormError({ ...err });
    return Object.keys(err).length < 1;
  };
  const handlesubmit = async (e) => {
    e.preventDefault();
    
    let isvalid = validation();
    if (isvalid) {
      setwaitingmessage(true);
      await fetch("https://sourcing-techs-backend-sjyq.vercel.app/betasource/contact-form-1", {
        method: "POST",
        headers: {
          "content-Type": "application/json",
        },
        body: JSON.stringify({
          email: formData.user_email,
          name: formData.user_name,
          subject: formData.subject,
          message: formData.message,
        }),
      })
        .then((response) => response.json())
        .then((data) => {
          // Handle the API response data here
          console.log(data);
        })
        .catch((error) => {
          console.error("Error:", error);
        });
      setMessageSent(true);
      setShowPopUp(true);
      setwaitingmessage(false);
      setFormData({ user_name: "", user_email: "", subject: "", message: "" });
    }
  };
  const handleClose = ()=>{
    setShowPopUp(false);
  }
  return (
    <>
      <div className="container-fluid contactUs-page">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-12 col-md-12">
              <div className="row g-0">
                <div className="col-md-7 d-flex align-items-stretch">
                  <div className="contact-wrap w-100 p-md-5 p-4">
                    <h3 className="mb-4">Get in touch</h3>
                    <form name="contactForm">
                      <div className="row">
                        <div className="col-md-6">
                          <div className="form-group form_box">
                            <input
                              type="text"
                              className="form-control"
                              name="user_name"
                              onChange={handleChange}
                              value={formData.user_name}
                              id="name"
                              placeholder="Name"
                            />
                            <span>{formerror.user_name}</span>
                          </div>
                        </div>
                        <div className="col-md-6">
                          <div className="form-group form_box">
                            <input
                              type="email"
                              className="form-control"
                              id="email"
                              name="user_email"
                              placeholder="Your Email"
                              onChange={handleChange}
                              value={formData.user_email}
                            />
                            <span>{formerror.user_email}</span>
                          </div>
                        </div>
                        <div className="col-md-12">
                          <div className="form-group form_box">
                            <input
                              type="text"
                              className="form-control"
                              name="subject"
                              onChange={handleChange}
                              value={formData.subject}
                              id="subject"
                              placeholder="Subject"
                            />
                            <span>{formerror.subject}</span>
                          </div>
                        </div>
                        <div className="col-md-12">
                          <div className="form-group form_box">
                            <textarea
                              name="message"
                              className="form-control"
                              id="message"
                              rows="7"
                              placeholder="Message"
                              onChange={handleChange}
                              value={formData.message}
                            ></textarea>
                            <span>{formerror.message}</span>
                          </div>
                        </div>
                        <div className="col-md-12 text-center">
                          <div className="rounded-btn" onClick={handlesubmit}>
                            <button>{isMessageSent===false && waitingmessage===true ?<Image src={Loader} alt={"Sending Message..."}/>:"Send Message"}</button>
                          </div>
                        </div>
                      </div>
                    </form>
                  </div>
                </div>
                <div className="col-md-5 d-flex align-items-stretch">
                  <div className="info-wrap w-100 p-lg-5 p-4">
                    <h3 className="mb-4 mt-md-4">Contact Us</h3>
                    <div className="contactInfo w-100 d-flex align-items-start">
                      <div className="icon d-flex align-items-center justify-content-center">
                        <FontAwesomeIcon icon={faMapLocationDot} />
                      </div>
                      <div className="text ps-3">
                        <p>
                          301 Dheeraj Vandana Classic, 24th Main Parangipalya,
                          HSR Layout Sector 2, Bangalore - 560102
                        </p>
                      </div>
                    </div>
                    <div className="contactInfo w-100 d-flex align-items-start">
                      <div className="icon d-flex align-items-center justify-content-center">
                        <FontAwesomeIcon icon={faMapLocationDot} />
                      </div>
                      <div className="text ps-3">
                        <p>
                          A-1602 Privillon Ambli BRT Road, Iscon Crossroads,
                          Ahmedabad 380059, Gujarat, India
                        </p>
                      </div>
                    </div>
                    <div className="contactInfo w-100 d-flex align-items-center">
                      <div className="icon d-flex align-items-center justify-content-center">
                        <FontAwesomeIcon icon={faPhone} />
                      </div>
                      <div className="text ps-3">
                        <p>
                          <Link href="tel:+917863889382">+91 786 3889 382</Link>
                        </p>
                      </div>
                    </div>
                    <div className="contactInfo w-100 d-flex align-items-center">
                      <div className="icon d-flex align-items-center justify-content-center">
                        <FontAwesomeIcon icon={faEnvelope} />
                      </div>
                      <div className="text ps-3">
                        <p>
                          <Link href="mailto:info@betasource.tech">
                            info@betasource.tech
                          </Link>
                        </p>
                      </div>
                    </div>
                    <div className="contactInfo w-100 d-flex align-items-center">
                      <div className="icon d-flex align-items-center justify-content-center">
                        <FontAwesomeIcon icon={faGlobe} />
                      </div>
                      <div className="text ps-3">
                        <p>
                          <Link href="/"> https://betasource.tech/</Link>
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {isMessageSent && showPopUp ? <ThankYou handleClose= {handleClose} /> : ""}
      </div>
    </>
  );
}

export default ContactForm;
