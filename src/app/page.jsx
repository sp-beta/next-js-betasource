import Image from "next/image";
import aboutbg from "../../public/img/home/img8.webp"
import bg3 from "../../public/img/home/bg3.png" 
import bg5 from "../../public/img/home/bg5.png"
import  bg4 from "../../public/img/home/bg4.png"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import  {faTwitter  } from  "@fortawesome/free-brands-svg-icons";
import  {faFacebook  } from  "@fortawesome/free-brands-svg-icons";
import  {faPinterest  } from  "@fortawesome/free-brands-svg-icons";
export default function Home() {
  return (
    <>
    <div className="container-fluid about-section py-5">
            <div className="container"> 
                <div className="row">
                    <div className="col-sm-12 col-md-6 col-lg-6">
                        <div className="about-section-thumb">
                            <Image src={aboutbg} className="img-fluid about-main-img" alt="Home" title="Home"/>
                            <div className="section-img shape4">
                                <Image src={bg3} className="img-fluid"/>
                            </div>
                            <div className="section-img shape5">
                                <Image src={bg5} className="img-fluid"/>
                            </div>
                            <div className="section-img shape7 bounce-animate5">
                                <Image src={bg4} className="img-fluid"/>
                            </div>
                            <div className="section-address">
                                <ul>
                                    <li><a className="address3 bounce-animate4" target="_blank" rel='noreferrer' href="https://www.facebook.com/betasource.techofficial"><FontAwesomeIcon icon= {faFacebook}/></a></li>
                                    <li><a className="address1 bounce-animate3" target="_blank" rel='noreferrer' href="https://twitter.com/BetasourceT"><FontAwesomeIcon icon= {faTwitter}/></a></li>
                                    <li><a className="address2 bounce-animate2" target="_blank" rel='noreferrer' href="https://in.pinterest.com/Betasourcetech/"><FontAwesomeIcon icon= {faPinterest}/></a></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div className="col-sm-12 col-md-6 col-lg-6">
                        <div className="content-wrapper">
                            <div className="section-head mb-5">
                                <h5 className="small-heading"> About BetaSource </h5>
                                <h3>
                                    Pioneering the Future of Technology
                                </h3>
                                <h2>
                                    through  
                                    <span className="text-primary">
                                        Cutting-Edge Solutions
                                    </span>
                                </h2>
                                <div className="section-content-text">
                                    <p>
                                        Betasource believes in the power of technology to drive business success. Our mission is to provide organizations with customized, scalable solutions that meet their unique needs and challenges. Whether you're looking to improve software development processes, unlock valuable insights from your data, or streamline IT operations, our expert team has the expertise and experience to help.
                                    </p>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-lg-4 col-md-6 wow zoomIn" data-wow-delay="0.1s">
                                    <div className="about-box">
                                        <div className="section-about-thumb">
                                            {/* <Image src="assets/img/home/img3.webp" alt="Data Protection" title="Data Protection" className="img-fluid"/> */}
                                        </div>
                                        <div className="section-about-content">
                                            <div className="section-about-title">
                                                <h4>Data Protection</h4>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-4 col-md-6 wow zoomIn" data-wow-delay="0.3s">
                                    <div className="about-box">
                                        <div className="section-about-thumb">
                                            {/* <Image src="assets/img/home/img1.webp" alt="24/7 Support" title="24/7 Support" className="img-fluid"/> */}
                                        </div>
                                        <div className="section-about-content">
                                            <div className="section-about-title">
                                                <h4>24/7 Support</h4>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-4 col-md-6 wow zoomIn" data-wow-delay="0.6s">
                                    <div className="about-box two">
                                        <div className="section-about-thumb">
                                            {/* <Image src="assets/img/home/img2.webp" alt="Business Deal" title="Business Deal" className="img-fluid"/> */}
                                        </div>
                                        <div className="section-about-content">
                                            <div className="section-about-title">
                                                <h4>Business Deal</h4>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        </>
  );
}
