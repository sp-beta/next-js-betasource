import PageHeading from "@/components/pageheading"
import FAQ from "@/components/faq";
import faqData from "../../data/faq/faqhome.json";
import Image from "next/image";
import Industries from "../../../public/about/industries.svg";
import shape from "../../../public/about/shape7.png";
//services thumb
import S1 from "../../../public/s1.svg";
import S2 from "../../../public/s2.svg";
import S4 from "../../../public/s4.svg";
import S5 from "../../../public/s5.svg";
import CommonButton from "@/components/commonbutton";
import { FaPlus } from "react-icons/fa6";
function AboutPage() {
  return (
    <>
      <PageHeading text="About Us" category="Home" categorypath="/" />
      <div className="container-fluid about-page-details">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6 col-md-6">
              <div className="row process-bg">
                <div
                  className="col-lg-6 col-md-6 wow slideInLeft"
                  data-wow-delay="0.2s"
                >
                  <div className="process-single-box">
                    <div className="process-number">
                      <span>1</span>
                    </div>
                    <div className="process-title">
                      <h3>
                        Cutting Edge <span> Solutions</span>
                      </h3>
                      <p>
                        Forefront of technology advancements and provides
                        cutting-edge solutions.
                      </p>
                    </div>
                  </div>
                </div>
                <div
                  className="col-lg-6 col-md-6 wow slideInLeft"
                  data-wow-delay="0.8s"
                >
                  <div className="process-single-box upper">
                    <div className="process-number">
                      <span>2</span>
                    </div>
                    <div className="process-title">
                      <h3>
                        Expert <span> Team Members </span>
                      </h3>
                      <p>
                        Extensive knowledge and experience in technology and
                        dedicated high-quality.
                      </p>
                    </div>
                  </div>
                </div>
                <div
                  className="col-lg-6 col-md-6 wow slideInLeft"
                  data-wow-delay="0.2s"
                >
                  <div className="process-single-box upper1">
                    <div className="process-number">
                      <span>3</span>
                    </div>
                    <div className="process-title">
                      <h3>
                        Customer Focused<span> Approach </span>
                      </h3>
                      <p>
                        Power of technology to transform businesses and are
                        dedicated to delivering solutions.
                      </p>
                    </div>
                  </div>
                </div>
                <div
                  className="col-lg-6 col-md-6 wow slideInLeft"
                  data-wow-delay="0.6s"
                >
                  <div className="process-single-box upper2">
                    <div className="process-number">
                      <span>4</span>
                    </div>
                    <div className="process-title">
                      <h3>
                        24/7<span> Hours Customer Support </span>
                      </h3>
                      <p>
                        24/7 Hours real-time support is offered by betasource
                        and anytime open our customer service.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-6 col-md-6">
              <div
                className="section-head mb-3 wow slideInRight"
                data-wow-delay="0.1s"
              >
                <h5 className="small-heading">About BetaSource</h5>
                <h3>
                  Welcome to <span> Betasource.tech! </span>
                </h3>
              </div>
              <div
                className="lines pt-2 pb-4 wow slideInRight"
                data-wow-delay="0.1s"
              >
                <div className="line"></div>
              </div>
              <p className="about-text">
                “Empowering Businesses with Innovative Technology Solutions.”
              </p>
              <div className="wow slideInRight" data-wow-delay="0.1s">
                <p className="about-text-para">
                  We understand the importance of technology in today's digital
                  landscape, and we work tirelessly to provide cutting-edge
                  solutions that help our clients thrive. Betasource team of
                  experienced developers and a commitment to delivering results.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* services start */}
      <div className="container-fluid service-providing">
      <div className="container">
        <div className="row">
          <div className="col-lg-6 col-md-6 d-flex justify-content-center flex-column pb-4">
            <div
              className="section-head wow slideInLeft"
              data-wow-delay="0.1s"
            >
              <h5 className="small-heading">Services</h5>
              <h3 className="">We Run All Kinds Of Services</h3>
              <h3 className="">From <span> Technologies </span></h3>
            </div>
            <div className="section-content-text">
                  <p>
                   Empowering businesses through cutting-edge software development, seamless DevOps integration, and advanced cloud solutions, BetaSource drives innovation at every turn. 
                  </p>
                </div>
           <CommonButton text="All Services" href="/"/>
          </div>
          <div className="col-lg-6 col-md-6 pt-5 d-flex">
            <div
              className="betasource-service-box wow slideInUp"
              data-wow-delay="0.8s"
            >
              <div className="service-box-inner">
                <div className="betasource-service-icon">
                  <Image
                    src={S4}
                    alt="Software Development"
                    title="Software Development"
                  />
                </div>
                <div className="betasource-service-title">
                  <h2>Software Development</h2>
                </div>

                <div className="betasource-service-text">
                  <p>
                    Betasource is a leading force in the software development industry, dedicated to providing innovative solutions for clients to thrive in today's digital landscape. With our experienced team of developers and unwavering commitment to delivering results, we continuously push the boundaries of technology to drive success.</p>
                </div>
                <div className="service-button">
                <a href="/services/software-development">
                    Read More <FaPlus />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="row justify-content-center">
          
          <div className="col-lg-4 col-md-6 pt-5 d-flex">
            <div
              className="betasource-service-box wow slideInUp"
              data-wow-delay="0.4s"
            >
              <div className="service-box-inner">
                <div className="betasource-service-icon">
                  <Image
                    src={S1}
                    alt="about"
                    title="about"
                  />
                </div>
                <div className="betasource-service-title">
                  <h2>DevOps</h2>
                </div>

                <div className="betasource-service-text">
                  <p>DevOps has become essential in modern software development and deployment, uniting development and operations teams for enhanced collaboration and efficiency. At BetaSource, we specialize in guiding companies through this transformative approach, enabling faster time-to-market, increased agility, and superior software quality.</p>
                </div>
                <div className="service-button">
                  <a href="services/devops">
                    Read More <FaPlus />
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-md-6 pt-5 d-flex">
            <div
              className="betasource-service-box wow slideInUp"
              data-wow-delay="0.6s"
            >
              <div className="service-box-inner">
                <div className="betasource-service-icon">
                  <Image
                    src={S2}
                    alt="about"
                    title="about"
                  />
                </div>
                <div className="betasource-service-title">
                  <h2>Cloud</h2>
                </div>

                <div className="betasource-service-text">
                  <p>Betasource delivers cutting-edge cloud services to optimize your business operations and boost efficiency. Our secure and scalable solutions empower your team with global access to data and applications from anywhere. Backed by a team of seasoned professionals, we offer seamless cloud migration, optimization, and ongoing support to keep your business at the forefront of innovation.</p>
                </div>
                <div className="service-button">
                  <a href="/services/cloud">
                    Read More <FaPlus />
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-md-6 pt-5 d-flex">
            <div
              className="betasource-service-box wow slideInUp"
              data-wow-delay="0.6s"
            >
              <div className="service-box-inner">
                <div className="betasource-service-icon">
                  <Image
                    src={S5}
                    alt="about"
                    title="about"
                  />
                </div>
                <div className="betasource-service-title">
                  <h2>Trending Technology</h2>
                </div>

                <div className="betasource-service-text">
                  <p>
                    The world of technology is in a constant state of evolution, with new and exciting developments emerging regularly. Among today's most trending advancements are artificial intelligence, virtual reality, augmented reality, IoT development, and blockchain. Artificial intelligence, in particular, is capturing significant attention for its potential to revolutionize industries through process automation.</p>
                </div>
                <div className="service-button">
                  <a href="services/trending-technology">
                    Read More <FaPlus />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

      {/* services end */}

      {/* Industries We serve Start */}
      <div className="container industries-serve my-5">
        <div className="row d-flex align-items-center">
          <div className="col-lg-8">
            <Image src={Industries} className="img-fluid industries-img" />
          </div>
          <div className="col-lg-4">
            <div className="common-about-shape">
              <div className="common-about-shape1-thumb1 bounce-animate2">
                <Image
                  src={shape}
                  className="img-fluid"
                  alt="about"
                  title="about"
                />
              </div>
            </div>
            <div className="section-head mb-4">
              <h5 className="small-heading">Industries</h5>
              <h3>
                Serve a Diverse Range of Industries with <br />
                <span>Cutting-Edge</span>
                Solutions
              </h3>
              <div
                className="lines pt-2 pb-4 wow slideInRight"
                data-wow-delay="0.1s"
              >
                <div className="line"></div>
              </div>
              <p>
                Betasource is serving a diverse range of industries! Our
                innovative solutions are designed to meet the unique needs of
                each and every one of our clients. We offer the most trending
                technology developments, including artificial intelligence,
                virtual reality, augmented reality, and blockchain.
              </p>
            </div>
          </div>
        </div>
      </div>
      {/* Industries We serve end */}
      <FAQ faqData={faqData} />
    </>
  );
}

export default AboutPage
