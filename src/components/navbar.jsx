"use client"
import React, { useEffect, useState } from "react";
import Image from "next/image"
import Link from "next/link";
import { usePathname } from "next/navigation";
//importing images
import logo from "../../public/img/logo.webp"
//software dev
import customsoftware from "../../public/img/mega-menu-icon/Custom-Software-Development.png"
import mobiledev from "../../public/img/mega-menu-icon/Mobile-Application-Development.svg"
import whitelabel from "../../public/img/mega-menu-icon/White-Label-Development.svg"
import softwareproduct from "../../public/img/mega-menu-icon/Software-Product-Development.svg"
import aiml from "../../public/img/mega-menu-icon/AIML-Development.svg" 
import api from "../../public/img/mega-menu-icon/API-Integration.svg"
//trending tech
import ArtificialIntelligence from "../../public/img/mega-menu-icon/artificial-intelligence.svg"
import IoT from "../../public/img/mega-menu-icon/iot.svg"
import Cybersecurity from "../../public/img/mega-menu-icon/cyber-security.svg" 
import Cloud from "../../public/img/mega-menu-icon/Cloud-Computing.svg"
import Edge from "../../public/img/mega-menu-icon/adge-computing.svg"
import Blockchain from "../../public/img/mega-menu-icon/Blockchain.svg"
import VRAR from "../../public/img/mega-menu-icon/Virtual-Augmented-Reality.svg"

function Navbar() {
    const pathname = usePathname();
    const [isSticky, setIsSticky] = useState(false);
    const navbarclass = "nav-bar";
    const bootstrapcontainer = "container-fluid"
    const transparent = "bg-transparent"
    useEffect(() => {
      const handleScroll = () => {
        if (window.pageYOffset > 0) {
          setIsSticky(true);
        } else {
          setIsSticky(false);
        }
      };
  
      window.addEventListener("scroll", handleScroll);
  
      // Clean up the event listener on component unmount
      return () => {
        window.removeEventListener("scroll", handleScroll);
      };
    }, []);

  return (
    <div className={`${isSticky ? "sticky-top" : ""} ${navbarclass} ${bootstrapcontainer} ${transparent}`}>
    <nav className="navbar navbar-expand-lg bg-white navbar-light py-0 px-4">
    <a href="/" className="navbar-brand d-flex align-items-center text-center">
        <Image className="img-fluid" src={logo} alt={"logo"} title="Betasource logo" width={170}/>
    </a>
    <button type="button" className="navbar-toggler" data-bs-toggle="collapse" data-bs-target="#navbarCollapse">
        <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarCollapse">
        <div className="navbar-nav ms-auto">
            <Link href="/"  className= {`nav-item nav-link ${pathname=="/" ? "active-route" : ""}` }>Home</Link>
            <Link href="/about" className= {`nav-item nav-link ${pathname=="/about" ? "active-route" : ""}` }>About</Link>
            <div className="nav-item dropdown dropdown-mega position-static">
                <a className="nav-link dropdown-toggle" href="#" data-bs-toggle="dropdown" data-bs-auto-close="outside">Services</a>
                <div className="dropdown-menu shadow">
                    <div className="mega-content p-4">
                    <div className="container-fluid">
                        <div className="row">
                            <div className="col-12 col-sm-4 col-md-3">
                                <a href="../software-development/software-developmnet.html" className="dropdown-item">Software Development</a>
                                <div className="list-group">
                                    <a className="list-group-item" href="../software-development/custom-software-development.html"><Image src={customsoftware} alt="Software Development" title="Software Development"/> Custom Software Development</a>
                                    <a className="list-group-item" href="../software-development/mobile-app-development.html"><Image src={mobiledev} alt="Software Development" title="Software Development"/> Mobile Application Development</a>
                                    <a className="list-group-item" href="../software-development/white-label-development.html"><Image src={whitelabel}  alt="Software Development" title="Software Development"/> White Label Development</a>
                                    <a className="list-group-item" href="../software-development/software-product-development.html"><Image src={softwareproduct} alt="Software Development" title="Software Development"/> Software Product Development</a>
                                    <a className="list-group-item" href="../software-development/ai-ml-development.html"><Image src={aiml} alt="Software Development" title="Software Development"/> AI/ML Development</a>
                                    <a className="list-group-item" href="../software-development/api-integration.html"> <Image src={api} alt="Software Development" title="Software Development"/> API Integration</a>
                                </div>
                            </div>
                            <div className="col-12 col-sm-4 col-md-3">
                                <a href="../trending-technology/trending-technology.html" className="dropdown-item">Trending Technology </a>
                                    <div className="list-group">
                                        <a className="list-group-item" href="../trending-technology/artificial-intelligence.html"><Image src={ArtificialIntelligence} alt="Trending Technology" title="Trending Technology"/> Artificial Intelligence (AI) </a>
                                        <a className="list-group-item" href="../trending-technology/internet-of-things.html"><Image src={IoT} alt="Trending Technology" title="Trending Technology"/> Internet of Things (IoT) </a>
                                        <a className="list-group-item" href="../trending-technology/cybersecurity.html"><Image src={Cybersecurity} alt="Trending Technology" title="Trending Technology"/> Cybersecurity </a>
                                        <a className="list-group-item" href="../trending-technology/cloud-computing.html"><Image src={Cloud} alt="Trending Technology" title="Trending Technology"/> Cloud Computing </a>
                                        <a className="list-group-item" href="../trending-technology/edge-computing.html"><Image src={Edge} alt="Trending Technology" title="Trending Technology"/> Edge Computing </a>
                                        <a className="list-group-item" href="../trending-technology/blockchain.html"><Image src={Blockchain} alt="Trending Technology" title="Trending Technology"/> Blockchain </a>
                                        <a className="list-group-item" href="../trending-technology/virtual-augmented-reality.html"><Image src={VRAR} alt="Trending Technology" title="Trending Technology"/> Virtual and Augmented Reality </a>
                                    </div>
                            </div>
                           
                            {/* <div className="col-12 col-sm-4 col-md-3">
                                <a href="../devops/devops.html" className="dropdown-item">DevOps </a>
                                <div className="list-group">
                                    <a className="list-group-item" href="../devops/devops-consulting.html"><Image src="../assets/img/mega-menu-icon/devops.svg" alt="DevOps" title="DevOps"/> DevOps Consulting </a>
                                    <a className="list-group-item" href="../devops/cicd-services.html"><Image src="../assets/img/mega-menu-icon/cicd.svg" alt="DevOps" title="DevOps"/> CI/CD </a>
                                    <a className="list-group-item" href="../devops/containerization-orchestration.html"><Image src="../assets/img/mega-menu-icon/internet.svg" alt="DevOps" title="DevOps"/> Containerization and Orchestration </a>
                                    <a className="list-group-item" href="../devops/infrastructure-management-services.html"><Image src="../assets/img/mega-menu-icon/property.svg" alt="DevOps" title="DevOps"/> Infrastructure Management </a>
                                    <a className="list-group-item" href="../devops/infrastructure-services.html"><Image src="../assets/img/mega-menu-icon/Blockchain.svg" alt="DevOps" title="DevOps"/> Infrastructure as Code </a>
                                </div>
                            </div> */}
                            {/* <div className="col-12 col-sm-4 col-md-3">
                                <a href="../cloud/cloud-services.html" className="dropdown-item">Cloud Services </a>
                                <div className="list-group">
                                    <a className="list-group-item" href="../cloud/cloud-consulting.html"><Image src="../assets/img/mega-menu-icon/cloud-Consulting.svg" alt="Cloud Services" title="Cloud Services"/> Cloud Consulting </a>
                                    <a className="list-group-item" href="../cloud/kubernetes-consulting.html"><Image src="../assets/img/mega-menu-icon/Kubernetes.svg" alt="Cloud Services" title="Cloud Services"/> Kubernetes Consulting  </a>
                                    <a className="list-group-item" href="../cloud/data-analytics-consulting.html"><Image src="../assets/img/mega-menu-icon/analytics.svg" alt="Cloud Services" title="Cloud Services"/> Data Analytics Consulting  </a>
                                    <a className="list-group-item" href="../cloud/cloud-assessment&cost-optimization.html"><Image src="../assets/img/mega-menu-icon/Cloud-Assessment-Cost-Optimization.svg" alt="Cloud Services" title="Cloud Services"/> Cloud Assessment and Cost Optimization  </a>
                                    <a className="list-group-item" href="../cloud/cloud-architecture-design.html"><Image src="../assets/img/mega-menu-icon/Cloud-Architecture.svg" alt="Cloud Services" title="Cloud Services"/> Cloud Architecture Design </a>
                                    <a className="list-group-item" href="../cloud/micro-service-architecture&development.html"><Image src="../assets/img/mega-menu-icon/Micro-Service.svg" alt="Cloud Services" title="Cloud Services"/> Micro-Service Architecture and Development </a>
                                    <a className="list-group-item" href="../cloud/serverless-app-development.html"><Image src="../assets/img/mega-menu-icon/devops.svg" alt="Cloud Services" title="Cloud Services"/> Serverless App Development </a>
                                    <a className="list-group-item" href="../cloud/cloud-migration.html"><Image src="../assets/img/mega-menu-icon/migrating.svg" alt="Cloud Services" title="Cloud Services"/> Cloud Migration </a>
                                </div>
                            </div> */}
                            
                        </div>
                    </div>
                    </div>
                </div>
            </div>
            <div className="nav-item dropdown dropdown-mega position-static industries-dropdwn">
                <a className="nav-link dropdown-toggle" href="#" data-bs-toggle="dropdown" data-bs-auto-close="outside">Case Studies</a>
                <div className="dropdown-menu shadow">
                    <div className="mega-content p-4">
                    <div className="container-fluid">
                        <div className="row">
                            <div className="col-12 col-sm-4 col-md-3">
                                <a href="../case-studies/quick-cam-case-study.html" className="dropdown-item industries-dropdwn-box">
                                    {/* <Image src="../assets/img/case-study-mega-menu-icon/quickcam.webp" alt="QuickCam" style="object-fit: contain;" className="img-fluid" />     */}
                                    QuickCam App
                                </a>
                            </div>
                            <div className="col-12 col-sm-4 col-md-3">
                                <a href="../case-studies/iot-case-study.html" className="dropdown-item industries-dropdwn-box">
                                    {/* <Image src="../assets/img/case-study-mega-menu-icon/iot.svg" alt="IOT" className="img-fluid"/> */}
                                    IOT
                                </a>
                            </div>
                        </div>
                    </div>
                    </div>
                </div>
            </div>
        </div>
        <Link href="/contact" className="btn btn-primary my-3 px-3">Contact Us</Link>
        
    </div>
</nav>

</div>

  )
}

export default Navbar
