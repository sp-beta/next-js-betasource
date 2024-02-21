"use client"
import Link from "next/link";
//image import
import Image from "next/image";
import appfutura from "../../public/footer/appfutura.png";
import clutch from "../../public/footer/clutch.png";
import guru from "../../public/footer/guru.png";
import smalldot from "../../public/footer/small-dot.png";
import bigdot from "../../public/footer/big-dot.png";
//icon import
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPhone } from "@fortawesome/free-solid-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { faMapLocationDot } from "@fortawesome/free-solid-svg-icons";
import { faTwitter } from "@fortawesome/free-brands-svg-icons";
import { faFacebook } from "@fortawesome/free-brands-svg-icons";
import { faPinterest } from "@fortawesome/free-brands-svg-icons";
import { faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { faInstagram } from "@fortawesome/free-brands-svg-icons";

import { usePathname } from "next/navigation";

function Footer() {
  
    const pathname = usePathname();
    
  return (
    <div id="footer">
      <div className="container-fluid text-white footer pt-5 mt-5">
        <div className="container">
          <div
            className="row subscribe-area wow slideInUp"
            data-wow-delay="0.2s"
          >
            <div className="col-lg-6 col-md-6">
              <div className="subscribe-title">
                <h2>Subscribe to our Newsletter</h2>
              </div>
            </div>
            <div className="col-lg-6 col-md-6">
              <form name="subscription" action="#">
                <div className="subscribe_form">
                  <input
                    type="email"
                    name="email"
                    id="email"
                    className="form-control"
                    placeholder="Enter Your Email"
                  />
                  <button type="button" className="btn">
                    Subscribe
                  </button>
                </div>
              </form>
            </div>
            <div className="subscribe-shape">
              <div className="subscribe-thumb bounce-animate5">
                <Image src={smalldot} className="img-fluid" alt="" />
              </div>
              <div className="subscribe-thumb1">
                <Image src={bigdot} className="img-fluid" alt="" />
              </div>
            </div>
          </div>
          <div className="row footer-bg wow slideInUp" data-wow-delay="0.4s">
            <div className="col-lg-4 col-md-6 pl-0">
              <h5 className="text-white mb-4">Get In Touch</h5>
              <p className="mb-2 d-flex">
                <FontAwesomeIcon
                  icon={faMapLocationDot}
                  className="me-3 mt-1"
                />
                301 Dheeraj Vandana Classic, 24th Main Parangipalya, HSR Layout
                Sector 2, <br /> Bangalore - 560102
              </p>
              <p className="mb-2 d-flex">
                <FontAwesomeIcon
                  icon={faMapLocationDot}
                  className="me-3 mt-1"
                />
                A-1602 Privillon, Ambli BRT Road, Iscon Crossroads, Ahmedabad
                380059, <br /> Gujarat, India
              </p>
              <p className="mb-2">
                {" "}
                <FontAwesomeIcon icon={faPhone} className="me-3 mt-1" />
                <Link className="text-white" href="tel:+917863889382">
                  +91 786 3889 382
                </Link>
              </p>
              <p className="mb-2">
                <FontAwesomeIcon icon={faEnvelope} className="me-3 mt-1" />
                <Link className="text-white" href="mailto:info@betasource.tech">
                  info@betasource.tech
                </Link>
              </p>
            </div>
            <div className="col-lg-2 col-md-6">
              <h5 className="text-white mb-4">Company</h5>
              <Link className={`btn btn-link text-white ${pathname== "/" ? "active-route" : " "}`} href="/">
                Home
              </Link>
              <Link className={`btn btn-link text-white ${pathname== "/about" ? "active-route" : " "}`} href="/about">
                About Us
              </Link>
              <Link className={`btn btn-link text-white ${pathname== "/contact" ? "active-route" : " "}`} href="/contact">
                Contact Us
              </Link>
            </div>
            <div className="col-lg-3 col-md-6 ps-2">
              <h5 className="text-white mb-4">Services</h5>
              <Link className={`btn btn-link text-white ${pathname== "/services/devops" ? "active-route" : " "}`}  href="/services/devops">
                DevOps
              </Link>
              <Link className={`btn btn-link text-white ${pathname== "/services/cloud" ? "active-route" : " "}`}  href="/services/cloud">
                Cloud Services
              </Link>
              <Link
                className={`btn btn-link text-white ${pathname== "/services/software-development" ? "active-route" : " "}`} 
                href="/services/software-development"
              >
                Software Developmnet
              </Link>
              <Link
                className={`btn btn-link text-white ${pathname== "/services/trending-technology" ? "active-route" : " "}`} 
                href="/services/trending-technology"
              >
                Trending Technology
              </Link>
            </div>
            <div className="col-lg-3 col-md-6 pe-0">
              <h5 className="text-white mb-4">About Us</h5>
              <p>
                Betasource.Tech is a premier provider of innovative technology
                solutions for businesses of all sizes.
              </p>
              <div className="d-flex pt-2">
                <Link
                  className="btn btn-outline-light btn-social"
                  target="_blank"
                  rel="noreferrer"
                  href="https://twitter.com/BetasourceT"
                >
                  <FontAwesomeIcon icon={faTwitter} />
                </Link>
                <Link
                  className="btn btn-outline-light btn-social"
                  target="_blank"
                  rel="noreferrer"
                  href="https://www.facebook.com/BetaSource.tech"
                >
                  <FontAwesomeIcon icon={faFacebook} />
                </Link>
                <Link
                  className="btn btn-outline-light btn-social"
                  target="_blank"
                  rel="noreferrer"
                  href="https://in.pinterest.com/Betasourcetech/"
                >
                  <FontAwesomeIcon icon={faPinterest} />
                </Link>
                <Link
                  className="btn btn-outline-light btn-social"
                  target="_blank"
                  rel="noreferrer"
                  href="https://www.linkedin.com/company/betasourcetech/"
                >
                  <FontAwesomeIcon icon={faLinkedin} />
                </Link>
                <Link
                  className="btn btn-outline-light btn-social"
                  target="_blank"
                  rel="noreferrer"
                  href="https://www.instagram.com/betasource.tech/"
                >
                  <FontAwesomeIcon icon={faInstagram} />
                </Link>
              </div>
            </div>
          </div>
          <div className="row d-flex align-items-center justify-content-center">
            <div className="col-sm-2">
              <Link
                href="https://www.appfutura.com/software-development-companies/india/gujarat/ahmedabad/c/cvwx"
                target="_blank"
                rel="noreferrer"
                className="me-3"
              >
                <Image src={appfutura} alt="appfutura" />
              </Link>
            </div>
            <div className="col-sm-2">
              <Link
                href="https://clutch.co/profile/betasourcetech"
                target="_blank"
                rel="noreferrer"
                className="me-3"
              >
                <Image src={clutch} alt="Clutch" />
              </Link>
            </div>
            <div className="col-sm-2">
              <Link
                href="https://www.guru.com/freelancers/betasourcetech"
                target="_blank"
                rel="noreferrer"
              >
                <Image src={guru} alt="Guru" />
              </Link>
            </div>
          </div>
        </div>
        <div className="container wow slideInUp" data-wow-delay="0.6s">
          <div className="copyright">
            <div className="row">
              <div className="col-md-12 text-center mb-3 mb-md-0">
                Copyright &copy; 2023
                <Link className="border-bottom" href="">
                 
                  BetaSource
                </Link>
                . All rights reserved
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
