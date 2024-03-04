"use client";
import React, { useEffect, useState } from "react";
import { useRef } from "react";
import Image from "next/image";
import { usePathname } from "next/navigation";
//importing images
import logo from "../../public/logo.webp";
//software dev
import customsoftware from "../../public/mega-menu-icon/Custom-Software-Development.png";
import mobiledev from "../../public/mega-menu-icon/Mobile-Application-Development.svg";
import whitelabel from "../../public/mega-menu-icon/White-Label-Development.svg";
import softwareproduct from "../../public/mega-menu-icon/Software-Product-Development.svg";
import aiml from "../../public/mega-menu-icon/AIML-Development.svg";
import api from "../../public/mega-menu-icon/API-Integration.svg";
//trending tech
import ArtificialIntelligence from "../../public/mega-menu-icon/artificial-intelligence.svg";
import IoT from "../../public/mega-menu-icon/iot.svg";
import Cybersecurity from "../../public/mega-menu-icon/cyber-security.svg";
import Cloud from "../../public/mega-menu-icon/Cloud-Computing.svg";
import Edge from "../../public/mega-menu-icon/adge-computing.svg";
import Blockchain from "../../public/mega-menu-icon/Blockchain.svg";
import VRAR from "../../public/mega-menu-icon/Virtual-Augmented-Reality.svg";
//Devops
import Devops from "../../public/mega-menu-icon/devops.svg";
import CICD from "../../public/mega-menu-icon/cicd.svg";
import Internet from "../../public/mega-menu-icon/internet.svg";
import Property from "../../public/mega-menu-icon/property.svg";
//cloud Services
import CloudConsulting from "../../public/mega-menu-icon/cloud-Consulting.svg";
import kubernetes from "../../public/mega-menu-icon/Kubernetes.svg";
import Analytics from "../../public/mega-menu-icon/analytics.svg";
import CloudAssessment from "../../public/mega-menu-icon/Cloud-Assessment-Cost-Optimization.svg";
import CloudArchitecture from "../../public/mega-menu-icon/Cloud-Architecture.svg";
import Migrating from "../../public/mega-menu-icon/migrating.svg";
import Microservice from "../../public/mega-menu-icon/microservice.svg";
//case studies
import quickcam from "../../public/mega-menu-icon/quickcam.webp";
//caret dropdown icon
import { RxCaretDown } from "react-icons/rx";


function Navbar() {
  const pathname = usePathname();
  const dropdownRef = useRef(null);
  const [isSticky, setIsSticky] = useState(false);
  useEffect(() => {
    const handleScroll = () => {
      if (window.pageYOffset > 0) {
        setIsSticky(true);
      } else {
        setIsSticky(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const handleDropdownItemClick = () => {
    const dropdownMenu = dropdownRef.current;
    if (dropdownMenu && dropdownMenu.classList.contains("show")) {
      dropdownMenu.classList.remove("show");
    }
  };
  return (
    <div className={`${isSticky ? "sticky-top" : ""} nav-bar bg-transparent `}>
      <nav className="navbar navbar-expand-lg bg-white navbar-light py-0 px-4">
        <a
          href="/"
          className="navbar-brand d-flex align-items-center text-center"
        >
          <Image
            className="img-fluid"
            src={logo}
            alt={"logo"}
            title="Betasource logo"
            width={140}
          />
        </a>
        <button
          type="button"
          className="navbar-toggler"
          data-bs-toggle="collapse"
          data-bs-target="#navbarCollapse"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div
          className="collapse navbar-collapse"
          ref={dropdownRef}
          id="navbarCollapse"
        >
          <div className="navbar-nav ms-auto">
            <a
              href="/"
              className={`nav-item nav-link ${
                pathname == "/" ? "active-route" : ""
              }`}
              onClick={handleDropdownItemClick}
            >
              Home
            </a>
            <a
              href="/about"
              className={`nav-item nav-link ${
                pathname == "/about" ? "active-route" : ""
              }`}
              onClick={handleDropdownItemClick}
            >
              About
            </a>
            <a
              href="/blog"
              className={`nav-item nav-link ${
                pathname == "/blog" ? "active-route" : ""
              }`}
              onClick={handleDropdownItemClick}
            >
              Blog
            </a>
            <a
              href="/portfolio"
              className={`nav-item nav-link ${
                pathname == "/portfolio" ? "active-route" : ""
              }`}
              onClick={handleDropdownItemClick}
            >
              Portfolio
            </a>
            <div className="nav-item dropdown dropdown-mega position-static">
              <a
                className={`nav-link dropdown-toggle ${
                  pathname.includes("/services/") ? "active-route" : ""
                }`}
                href="#"
                data-bs-toggle="dropdown"
              >
                Services
                <span>
                  <RxCaretDown />
                </span>
              </a>
              <div className={`dropdown-menu shadow `}>
                <div className="mega-content p-4">
                  <div className="container-fluid">
                    <div className="row">
                      <div className="col-12 col-sm-4 col-lg-3 col-md-6">
                        <a
                          href="/services/software-development"
                          className="dropdown-item"
                          onClick={handleDropdownItemClick}
                        >
                          Software Development
                        </a>
                        <div className="list-group">
                          <a
                            className="list-group-item"
                            href="/services/software-development/custom-software-development"
                            onClick={handleDropdownItemClick}
                          >
                            <Image
                              src={customsoftware}
                              alt="Software Development"
                              title="Software Development"
                            />
                            Custom Software Development
                          </a>
                          <a
                            onClick={handleDropdownItemClick}
                            className="list-group-item"
                            href="/services/software-development/mobile-application-development"
                          >
                            <Image
                              src={mobiledev}
                              alt="Software Development"
                              title="Software Development"
                            />
                            Mobile Application Development
                          </a>
                          <a
                            onClick={handleDropdownItemClick}
                            className="list-group-item"
                            href="/services/software-development/white-label-development"
                          >
                            <Image
                              src={whitelabel}
                              alt="Software Development"
                              title="Software Development"
                            />
                            White Label Development
                          </a>
                          <a
                            onClick={handleDropdownItemClick}
                            className="list-group-item"
                            href="/services/software-development/software-product-development"
                          >
                            <Image
                              src={softwareproduct}
                              alt="Software Development"
                              title="Software Development"
                            />
                            Software Product Development
                          </a>
                          <a
                            className="list-group-item"
                            onClick={handleDropdownItemClick}
                            href="/services/software-development/ai-ml-development"
                          >
                            <Image
                              src={aiml}
                              alt="Software Development"
                              title="Software Development"
                            />
                            AI/ML Development
                          </a>
                          <a
                            onClick={handleDropdownItemClick}
                            className="list-group-item"
                            href="/services/software-development/api-integration"
                          >
                            <Image
                              src={api}
                              alt="Software Development"
                              title="Software Development"
                            />
                            API Integration
                          </a>
                        </div>
                      </div>
                      <div className="col-12 col-sm-4 col-lg-3 col-md-6">
                        <a
                          href="/services/trending-technology"
                          className="dropdown-item"
                          onClick={handleDropdownItemClick}
                        >
                          Trending Technology
                        </a>
                        <div className="list-group">
                          <a
                            className="list-group-item"
                            onClick={handleDropdownItemClick}
                            href="/services/trending-technology/artificial-intelligence"
                          >
                            <Image
                              src={ArtificialIntelligence}
                              alt="Trending Technology"
                              title="Trending Technology"
                            />
                            Artificial Intelligence (AI)
                          </a>
                          <a
                            onClick={handleDropdownItemClick}
                            className="list-group-item"
                            href="/services/trending-technology/internet-of-things"
                          >
                            <Image
                              src={IoT}
                              alt="Trending Technology"
                              title="Trending Technology"
                            />
                            Internet of Things (IoT)
                          </a>
                          <a
                            onClick={handleDropdownItemClick}
                            className="list-group-item"
                            href="/services/trending-technology/cybersecurity"
                          >
                            <Image
                              src={Cybersecurity}
                              alt="Trending Technology"
                              title="Trending Technology"
                            />
                            Cybersecurity
                          </a>
                          <a
                            onClick={handleDropdownItemClick}
                            className="list-group-item"
                            href="/services/trending-technology/cloud-computing"
                          >
                            <Image
                              src={Cloud}
                              alt="Trending Technology"
                              title="Trending Technology"
                            />
                            Cloud Computing
                          </a>
                          <a
                            onClick={handleDropdownItemClick}
                            className="list-group-item"
                            href="/services/trending-technology/edge-computing"
                          >
                            <Image
                              src={Edge}
                              alt="Trending Technology"
                              title="Trending Technology"
                            />
                            Edge Computing
                          </a>
                          <a
                            onClick={handleDropdownItemClick}
                            className="list-group-item"
                            href="/services/trending-technology/blockchain"
                          >
                            <Image
                              src={Blockchain}
                              alt="Trending Technology"
                              title="Trending Technology"
                            />
                            Blockchain
                          </a>
                          <a
                            className="list-group-item"
                            href="/services/trending-technology/virtual-augmented-reality"
                          >
                            <Image
                              onClick={handleDropdownItemClick}
                              src={VRAR}
                              alt="Trending Technology"
                              title="Trending Technology"
                            />
                            Virtual and Augmented Reality
                          </a>
                        </div>
                      </div>
                      <div className="col-12 col-sm-4 col-lg-3 col-md-6">
                        <a
                          href="/services/devops"
                          className="dropdown-item"
                          onClick={handleDropdownItemClick}
                        >
                          DevOps
                        </a>
                        <div className="list-group">
                          <a
                            onClick={handleDropdownItemClick}
                            className="list-group-item"
                            href="/services/devops/devops-consulting"
                          >
                            <Image src={Devops} alt="DevOps" title="DevOps" />
                            DevOps Consulting
                          </a>
                          <a
                            onClick={handleDropdownItemClick}
                            className="list-group-item"
                            href="/services/devops/ci-cd-services"
                          >
                            <Image src={CICD} alt="DevOps" title="DevOps" />
                            CI/CD
                          </a>
                          <a
                            onClick={handleDropdownItemClick}
                            className="list-group-item"
                            href="/services/devops/containerization-orchestration"
                          >
                            <Image src={Internet} alt="DevOps" title="DevOps" />
                            Containerization and Orchestration
                          </a>
                          <a
                            onClick={handleDropdownItemClick}
                            className="list-group-item"
                            href="/services/devops/infrastructure-management-services"
                          >
                            <Image src={Property} alt="DevOps" title="DevOps" />
                            Infrastructure Management
                          </a>
                          <a
                            onClick={handleDropdownItemClick}
                            className="list-group-item"
                            href="/services/devops/infrastructure-as-code"
                          >
                            <Image
                              src={Blockchain}
                              alt="DevOps"
                              title="DevOps"
                            />
                            Infrastructure as Code
                          </a>
                        </div>
                      </div>
                      <div className="col-12 col-sm-4 col-lg-3 col-md-6">
                        <a
                          href="/services/cloud"
                          className="dropdown-item"
                          onClick={handleDropdownItemClick}
                        >
                          Cloud Services
                        </a>
                        <div className="list-group">
                          <a
                            onClick={handleDropdownItemClick}
                            className="list-group-item"
                            href="/services/cloud/cloud-consulting"
                          >
                            <Image
                              src={CloudConsulting}
                              alt="Cloud Services"
                              title="Cloud Services"
                            />
                            Cloud Consulting
                          </a>
                          <a
                            onClick={handleDropdownItemClick}
                            className="list-group-item"
                            href="/services/cloud/kubernetes-consulting"
                          >
                            <Image
                              src={kubernetes}
                              alt="Cloud Services"
                              title="Cloud Services"
                            />
                            Kubernetes Consulting
                          </a>
                          <a
                            onClick={handleDropdownItemClick}
                            className="list-group-item"
                            href="/services/cloud/data-analytics-consulting"
                          >
                            <Image
                              src={Analytics}
                              alt="Cloud Services"
                              title="Cloud Services"
                            />
                            Data Analytics Consulting
                          </a>
                          <a
                            onClick={handleDropdownItemClick}
                            className="list-group-item"
                            href="/services/cloud/cloud-assessment&cost-optimization"
                          >
                            <Image
                              src={CloudAssessment}
                              alt="Cloud Services"
                              title="Cloud Services"
                            />
                            Cloud Assessment and Cost Optimization
                          </a>
                          <a
                            onClick={handleDropdownItemClick}
                            className="list-group-item"
                            href="/services/cloud/cloud-architecture-design"
                          >
                            <Image
                              src={CloudArchitecture}
                              alt="Cloud Services"
                              title="Cloud Services"
                            />
                            Cloud Architecture Design
                          </a>
                          <a
                            onClick={handleDropdownItemClick}
                            className="list-group-item"
                            href="/services/cloud/micro-service-architecture&development"
                          >
                            <Image
                              src={Microservice}
                              alt="Cloud Services"
                              title="Cloud Services"
                            />
                            Micro-Service Architecture and Development
                          </a>
                          <a
                            onClick={handleDropdownItemClick}
                            className="list-group-item"
                            href="/services/cloud/serverless-app-development"
                          >
                            <Image
                              src={Devops}
                              alt="Cloud Services"
                              title="Cloud Services"
                            />
                            Serverless App Development
                          </a>
                          <a
                            onClick={handleDropdownItemClick}
                            className="list-group-item"
                            href="/services/cloud/cloud-migration"
                          >
                            <Image
                              src={Migrating}
                              alt="Cloud Services"
                              title="Cloud Services"
                            />
                            Cloud Migration
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="nav-item dropdown dropdown-mega position-static industries-dropdwn">
              <a
                className={`nav-link dropdown-toggle ${
                  pathname.includes("/case-studies/") ? "active-route" : ""
                }`}
                href="#"
                data-bs-toggle="dropdown"
              >
                Case Studies
                <span>
                  <RxCaretDown />
                </span>
              </a>
              <div className="dropdown-menu shadow">
                <div className="mega-content p-4">
                  <div className="container-fluid">
                    <div className="row">
                      <div className="col-12 col-sm-6 col-md-4">
                        <a
                          href="/case-studies/quick-cam-case-study"
                          className="dropdown-item industries-dropdwn-box"
                          onClick={handleDropdownItemClick}
                        >
                          <Image
                            src={quickcam}
                            alt="QuickCam"
                            className="img-fluid"
                          />
                          QuickCam App
                        </a>
                      </div>
                      <div className="col-12 col-sm-6 col-md-4">
                        <a
                          onClick={handleDropdownItemClick}
                          href="/case-studies/iot-case-study"
                          className="dropdown-item industries-dropdwn-box"
                        >
                          <Image src={IoT} alt="IOT" className="img-fluid" />
                          IOT
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <a
            href="/contact"
            className="btn btn-primary my-3 px-3 contact-navbtn"
            onClick={handleDropdownItemClick}
          >
            Contact Us
          </a>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;
