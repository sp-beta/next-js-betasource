"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
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

function Navbar() {
  const pathname = usePathname();
  const [isSticky, setIsSticky] = useState(false);

  const navbarclass = "nav-bar";
  const bootstrapcontainer = "container-fluid";
  const transparent = "bg-transparent";
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

  return (
    <div
      className={`${
        isSticky ? "sticky-top" : ""
      } ${navbarclass} ${bootstrapcontainer} ${transparent}`}
    >
      <nav className="navbar navbar-expand-lg bg-white navbar-light py-0 px-4">
        <Link
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
        </Link>
        <button
          type="button"
          className="navbar-toggler"
          data-bs-toggle="collapse"
          data-bs-target="#navbarCollapse"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarCollapse">
          <div className="navbar-nav ms-auto">
            <Link
              href="/"
              className={`nav-item nav-link ${
                pathname == "/" ? "active-route" : ""
              }`}
            >
              Home
            </Link>
            <Link
              href="/about"
              className={`nav-item nav-link ${
                pathname == "/about" ? "active-route" : ""
              }`}
            >
              About
            </Link>
            <div className="nav-item dropdown dropdown-mega position-static">
              <Link
                className="nav-link dropdown-toggle"
                href="#"
                data-bs-toggle="dropdown"
                data-bs-auto-close="outside"
              >
                Services
              </Link>
              <div className={`dropdown-menu shadow`}>
                <div className="mega-content p-4">
                  <div className="container-fluid">
                    <div className="row">
                      <div className="col-12 col-sm-4 col-lg-3 col-md-6">
                        <Link
                          href="/services/software-development"
                          className="dropdown-item"
                        >
                          Software Development
                        </Link>
                        <div className="list-group">
                          <Link
                            className="list-group-item"
                            href="/services/software-development/custom-software-development"
                          >
                            <Image
                              src={customsoftware}
                              alt="Software Development"
                              title="Software Development"
                            />
                            Custom Software Development
                          </Link>
                          <Link
                            className="list-group-item"
                            href="/services/software-development/mobile-application-development"
                          >
                            <Image
                              src={mobiledev}
                              alt="Software Development"
                              title="Software Development"
                            />
                            Mobile Application Development
                          </Link>
                          <Link
                            className="list-group-item"
                            href="/services/software-development/white-label-development"
                          >
                            <Image
                              src={whitelabel}
                              alt="Software Development"
                              title="Software Development"
                            />
                            White Label Development
                          </Link>
                          <Link
                            className="list-group-item"
                            href="/services/software-development/software-product-development"
                          >
                            <Image
                              src={softwareproduct}
                              alt="Software Development"
                              title="Software Development"
                            />
                            Software Product Development
                          </Link>
                          <Link
                            className="list-group-item"
                            href="/services/software-development/ai-ml-development"
                          >
                            <Image
                              src={aiml}
                              alt="Software Development"
                              title="Software Development"
                            />
                            AI/ML Development
                          </Link>
                          <Link
                            className="list-group-item"
                            href="/services/software-development/api-integration"
                          >
                            <Image
                              src={api}
                              alt="Software Development"
                              title="Software Development"
                            />
                            API Integration
                          </Link>
                        </div>
                      </div>
                      <div className="col-12 col-sm-4 col-lg-3 col-md-6">
                        <Link
                          href="/services/trending-technology"
                          className="dropdown-item"
                        >
                          Trending Technology
                        </Link>
                        <div className="list-group">
                          <Link
                            className="list-group-item"
                            href="/services/trending-technology/artificial-intelligence"
                          >
                            <Image
                              src={ArtificialIntelligence}
                              alt="Trending Technology"
                              title="Trending Technology"
                            />
                            Artificial Intelligence (AI)
                          </Link>
                          <Link
                            className="list-group-item"
                            href="/services/trending-technology/internet-of-things"
                          >
                            <Image
                              src={IoT}
                              alt="Trending Technology"
                              title="Trending Technology"
                            />
                            Internet of Things (IoT)
                          </Link>
                          <Link
                            className="list-group-item"
                            href="/services/trending-technology/cybersecurity"
                          >
                            <Image
                              src={Cybersecurity}
                              alt="Trending Technology"
                              title="Trending Technology"
                            />
                            Cybersecurity
                          </Link>
                          <Link
                            className="list-group-item"
                            href="/services/trending-technology/cloud-computing"
                          >
                            <Image
                              src={Cloud}
                              alt="Trending Technology"
                              title="Trending Technology"
                            />
                            Cloud Computing
                          </Link>
                          <Link
                            className="list-group-item"
                            href="/services/trending-technology/edge-computing"
                          >
                            <Image
                              src={Edge}
                              alt="Trending Technology"
                              title="Trending Technology"
                            />
                            Edge Computing
                          </Link>
                          <Link
                            className="list-group-item"
                            href="/services/trending-technology/blockchain"
                          >
                            <Image
                              src={Blockchain}
                              alt="Trending Technology"
                              title="Trending Technology"
                            />
                            Blockchain
                          </Link>
                          <Link
                            className="list-group-item"
                            href="/services/trending-technology/virtual-augmented-reality"
                          >
                            <Image
                              src={VRAR}
                              alt="Trending Technology"
                              title="Trending Technology"
                            />
                            Virtual and Augmented Reality
                          </Link>
                        </div>
                      </div>

                      <div className="col-12 col-sm-4 col-lg-3 col-md-6">
                        <Link href="/services/devops" className="dropdown-item">
                          DevOps
                        </Link>
                        <div className="list-group">
                          <Link
                            className="list-group-item"
                            href="/services/devops/devops-consulting"
                          >
                            <Image src={Devops} alt="DevOps" title="DevOps" />
                            DevOps Consulting
                          </Link>
                          <Link
                            className="list-group-item"
                            href="/services/devops/ci-cd-services"
                          >
                            <Image src={CICD} alt="DevOps" title="DevOps" />
                            CI/CD
                          </Link>
                          <Link
                            className="list-group-item"
                            href="/services/devops/containerization-orchestration"
                          >
                            <Image src={Internet} alt="DevOps" title="DevOps" />
                            Containerization and Orchestration
                          </Link>
                          <Link
                            className="list-group-item"
                            href="/services/devops/infrastructure-management-services"
                          >
                            <Image src={Property} alt="DevOps" title="DevOps" />
                            Infrastructure Management
                          </Link>
                          <Link
                            className="list-group-item"
                            href="/services/devops/infrastructure-as-code"
                          >
                            <Image
                              src={Blockchain}
                              alt="DevOps"
                              title="DevOps"
                            />
                            Infrastructure as Code
                          </Link>
                        </div>
                      </div>
                      <div className="col-12 col-sm-4 col-lg-3 col-md-6">
                        <Link href="/services/cloud" className="dropdown-item">
                          Cloud Services
                        </Link>
                        <div className="list-group">
                          <Link
                            className="list-group-item"
                            href="/services/cloud/cloud-consulting"
                          >
                            <Image
                              src={CloudConsulting}
                              alt="Cloud Services"
                              title="Cloud Services"
                            />
                            Cloud Consulting
                          </Link>
                          <Link
                            className="list-group-item"
                            href="/services/cloud/kubernetes-consulting"
                          >
                            <Image
                              src={kubernetes}
                              alt="Cloud Services"
                              title="Cloud Services"
                            />
                            Kubernetes Consulting
                          </Link>
                          <Link
                            className="list-group-item"
                            href="/services/cloud/data-analytics-consulting"
                          >
                            <Image
                              src={Analytics}
                              alt="Cloud Services"
                              title="Cloud Services"
                            />
                            Data Analytics Consulting
                          </Link>
                          <Link
                            className="list-group-item"
                            href="/services/cloud/cloud-assessment&cost-optimization"
                          >
                            <Image
                              src={CloudAssessment}
                              alt="Cloud Services"
                              title="Cloud Services"
                            />
                            Cloud Assessment and Cost Optimization
                          </Link>
                          <Link
                            className="list-group-item"
                            href="/services/cloud/cloud-architecture-design"
                          >
                            <Image
                              src={CloudArchitecture}
                              alt="Cloud Services"
                              title="Cloud Services"
                            />
                            Cloud Architecture Design
                          </Link>
                          <Link
                            className="list-group-item"
                            href="/services/cloud/micro-service-architecture&development"
                          >
                            <Image
                              src={Microservice}
                              alt="Cloud Services"
                              title="Cloud Services"
                            />
                            Micro-Service Architecture and Development
                          </Link>
                          <Link
                            className="list-group-item"
                            href="/services/cloud/serverless-app-development"
                          >
                            <Image
                              src={Devops}
                              alt="Cloud Services"
                              title="Cloud Services"
                            />
                            Serverless App Development
                          </Link>
                          <Link
                            className="list-group-item"
                            href="/services/cloud/cloud-migration"
                          >
                            <Image
                              src={Migrating}
                              alt="Cloud Services"
                              title="Cloud Services"
                            />
                            Cloud Migration
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="nav-item dropdown dropdown-mega position-static industries-dropdwn">
              <Link
                className="nav-link dropdown-toggle"
                href="#"
                data-bs-toggle="dropdown"
                data-bs-auto-close="outside"
              >
                Case Studies
              </Link>
              <div className={`dropdown-menu shadow`}>
                <div className="mega-content p-4">
                  <div className="container-fluid">
                    <div className="row">
                      <div className="col-12 col-sm-6 col-md-4">
                        <Link
                          href="/case-studies/quick-cam-case-study"
                          className="dropdown-item industries-dropdwn-box"
                        >
                          <Image
                            src={quickcam}
                            alt="QuickCam"
                            className="img-fluid"
                          />
                          QuickCam App
                        </Link>
                      </div>
                      <div className="col-12 col-sm-6 col-md-4">
                        <Link
                          href="/case-studies/iot-case-study"
                          className="dropdown-item industries-dropdwn-box"
                        >
                          <Image src={IoT} alt="IOT" className="img-fluid" />
                          IOT
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <Link href="/contact" className="btn btn-primary my-3 px-3">
            Contact Us
          </Link>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;
