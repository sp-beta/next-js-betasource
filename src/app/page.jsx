import Homeslider from '@/components/homeslider'
import FAQ from "@/components/faq";
import Testimonialslider from "@/components/testimonialslider";
import CommonButton from "@/components/commonbutton";
import faqData from "../data/faq/faqhome.json";
import Image from "next/image";
//team members
import Ronak from "../../public/team/ronak.webp";
import Kamlesh from "../../public/team/ceo.webp";
import Kiran from "../../public/team/kiran.webp";
import Payal from "../../public/team/payal.webp";
import Topon from "../../public/team/Topon.webp";
import Veena from "../../public/team/veena.webp";
//testimonial
import Testimonialmap from "../../public/testimonial-map.png";
//what we offer
import whatweoffer from "../../public/bg15.webp";
import whatweofferShape from "../../public/bg10.webp";
//approach
import Approach from "../../public/approch.png";
//about
import DataProtection from "../../public/img3.webp";
import Support from "../../public/img1.webp";
import BusinessDeal from "../../public/img2.webp";
import bg3 from "../../public/bg3.png";
import bg4 from "../../public/bg4.png";
import bg5 from "../../public/bg5.png";
import img8 from "../../public/img8.webp";
//icons
import { FaPinterestP } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaFacebookF } from "react-icons/fa";
import { FaHeart } from "react-icons/fa";
import { FaRegHandPointRight } from "react-icons/fa";

function Home() {
  return (
    <div>
      <Homeslider></Homeslider>
      {/* about start */}
      <div className="container-fluid about-section py-5">
        <div className="container">
          <div className="row">
            <div className="col-sm-12 col-md-6 col-lg-6">
              <div className="about-section-thumb">
                <Image
                  src={img8}
                  className="img-fluid about-main-img"
                  alt="Home"
                  title="Home"
                />
                <div className="section-img shape4">
                  <Image src={bg3} className="img-fluid" />
                </div>
                <div className="section-img shape5">
                  <Image src={bg5} className="img-fluid" />
                </div>
                <div className="section-img shape7 bounce-animate5">
                  <Image src={bg4} className="img-fluid" />
                </div>
                <div className="section-address">
                  <ul>
                    <li>
                      <a
                        className="address3 bounce-animate4"
                        target="_blank"
                        rel="noreferrer"
                        href="https://www.facebook.com/betasource.techofficial"
                      >
                        <FaFacebookF />
                      </a>
                    </li>
                    <li>
                      <a
                        className="address1 bounce-animate3"
                        target="_blank"
                        rel="noreferrer"
                        href="https://twitter.com/BetasourceT"
                      >
                        <FaTwitter />
                      </a>
                    </li>
                    <li>
                      <a
                        className="address2 bounce-animate2"
                        target="_blank"
                        rel="noreferrer"
                        href="https://in.pinterest.com/Betasourcetech/"
                      >
                        <FaPinterestP />
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="col-sm-12 col-md-6 col-lg-6">
              <div className="content-wrapper">
                <div className="section-head mb-5">
                  <h5 className="small-heading">About BetaSource</h5>
                  <h3>Pioneering the Future of Technology</h3>
                  <h2>
                    through
                    <span className="text-primary">
                      {" "}
                      Cutting-Edge Solutions{" "}
                    </span>
                  </h2>
                  <div className="section-content-text">
                    <p>
                      Betasource believes in the power of technology to drive
                      business success. Our mission is to provide organizations
                      with customized, scalable solutions that meet their unique
                      needs and challenges. Whether you're looking to improve
                      software development processes, unlock valuable insights
                      from your data, or streamline IT operations, our expert
                      team has the expertise and experience to help.
                    </p>
                  </div>
                </div>
                <div className="row">
                  <div
                    className="col-lg-4 col-md-6 wow zoomIn"
                    data-wow-delay="0.1s"
                  >
                    <div className="about-box">
                      <div className="section-about-thumb">
                        <Image
                          src={DataProtection}
                          alt="Data Protection"
                          title="Data Protection"
                          className="img-fluid"
                        />
                      </div>
                      <div className="section-about-content">
                        <div className="section-about-title">
                          <h4>Data Protection</h4>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div
                    className="col-lg-4 col-md-6 wow zoomIn"
                    data-wow-delay="0.3s"
                  >
                    <div className="about-box">
                      <div className="section-about-thumb">
                        <Image
                          src={Support}
                          alt="24/7 Support"
                          title="24/7 Support"
                          className="img-fluid"
                        />
                      </div>
                      <div className="section-about-content">
                        <div className="section-about-title">
                          <h4>24/7 Support</h4>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div
                    className="col-lg-4 col-md-6 wow zoomIn"
                    data-wow-delay="0.6s"
                  >
                    <div className="about-box two">
                      <div className="section-about-thumb">
                        <Image
                          src={BusinessDeal}
                          alt="Business Deal"
                          title="Business Deal"
                          className="img-fluid"
                        />
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
      {/* about end */}
      {/* what we offer start */}
      <div className="container-fluid about-area py-5">
        <div className="container">
          <div className="row">
            <div className="col-lg-6 col-md-6">
              <div className="about-thumb">
                <Image
                  src={whatweoffer}
                  className="img-fluid"
                  alt="What We Offer"
                  title="Our Services"
                />
                <div className="about-shape-thumb1 bounce-animate2">
                  <Image src={whatweofferShape} className="img-fluid" />
                </div>
              </div>
            </div>
            <div className="col-lg-6 col-md-6">
              <div className="section-head mb-4">
                <h5 className="small-heading">What We Offer</h5>
                <h3>
                  Revolutionize Your Business with Technology Solutions from
                  <span> Betasource</span>
                </h3>
                <div className="section-content-text">
                  <p>
                    We trust in the power of technology to transform businesses
                    and are dedicated to delivering high-quality products and
                    services. Choose Betasource for your business, and
                    experience the future of technology today.
                  </p>
                </div>
              </div>
              <div className="row">
                <div className="col-lg-6">
                  <div className="icon-box">
                    <div className="icon-list">
                      <ul>
                        <li>
                          <FaRegHandPointRight />
                          <div>Software Development</div>
                        </li>
                        <li>
                          <FaRegHandPointRight />
                          <div>Web Design and Development </div>
                        </li>
                        <li>
                          <FaRegHandPointRight />
                          <div>Cloud Computing</div>
                        </li>
                        <li>
                          <FaRegHandPointRight />
                          <div>DevOps Consulting </div>
                        </li>
                        <li>
                          <FaRegHandPointRight />
                          <div>Web and Mobile Application</div>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
                <div className="col-lg-6">
                  <div className="icon-box">
                    <div className="icon-list">
                      <ul>
                        <li>
                          <FaRegHandPointRight />
                          <div>IoT Development</div>
                        </li>
                        <li>
                          <FaRegHandPointRight />
                          <div>IT Consulting and Strategy</div>
                        </li>
                        <li>
                          <FaRegHandPointRight />
                          <div>Blockchain Technologies</div>
                        </li>
                        <li>
                          <FaRegHandPointRight />
                          <div>Data Analytics</div>
                        </li>
                        <li>
                          <FaRegHandPointRight />
                          <div>AI/ML Development</div>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
                <div className="col-lg-12 text-center">
                  <CommonButton
                    text="Learn More"
                    href="/services/trending-technology"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* what we offer end */}
      <div className="container-fluid design-approch py-5 my-5">
        <div className="container">
          <div className="section-head mb-4 text-center">
            <h3 className="first-word-uppercase-p">
              We understand the complexities of planning a digital strategy,
            </h3>
            <h3>
              that's why we have crafted a unique approach to digital planning.
            </h3>
          </div>
          <div className="row py-3">
            <div className="col-lg-12 text-center">
              <Image
                src={Approach}
                className="img-fluid"
                alt="Our Design Approach"
                title="crafting a unique approach to digital planning"
              />
            </div>
          </div>
        </div>
      </div>
      <FAQ faqData={faqData} />
      {/* team members start */}
      <div className="container-xxl team-member py-5">
        <div className="container">
          <div className="section-head mb-4 text-center">
            <h5 className="small-heading">Team Member</h5>
            <h3>
              Let’s Meet with <span> Our Experts </span>
            </h3>
          </div>
          <div className="row g-4">
            <div
              className="col-sm-12 col-md-6 col-lg-4 pt-4 wow fadeInUp"
              data-wow-delay="0.1s"
            >
              <div className="team-item rounded">
                <div className="team-member-img">
                  <Image
                    className="img-fluid"
                    src={Kamlesh}
                    alt="Kamlesh Rao"
                  />
                </div>
                <div className="team-info">
                  <h2>Kamlesh Rao</h2>
                  <p>Executive Director</p>
                </div>
              </div>
            </div>
            <div
              className="col-sm-12 col-md-6 col-lg-4 pt-4 wow fadeInUp"
              data-wow-delay="0.3s"
            >
              <div className="team-item rounded">
                <div className="team-member-img">
                  <Image className="img-fluid" src={Ronak} alt="Ronak Barot" />
                </div>
                <div className="team-info">
                  <h2>Ronak Barot</h2>
                  <p>CEO</p>
                </div>
              </div>
            </div>
            <div
              className="col-sm-12 col-md-6 col-lg-4 pt-4 wow fadeInUp"
              data-wow-delay="0.5s"
            >
              <div className="team-item rounded">
                <div className="team-member-img">
                  <Image
                    className="img-fluid"
                    src={Kiran}
                    alt="Kiran Chaudhari"
                  />
                </div>
                <div className="team-info">
                  <h2>Kiran Chaudhari</h2>
                  <p>Talent Acquisition - Lead</p>
                </div>
              </div>
            </div>
            <div
              className="col-sm-12 col-md-6 col-lg-4 pt-4 wow fadeInUp"
              data-wow-delay="0.7s"
            >
              <div className="team-item rounded">
                <div className="team-member-img">
                  <Image className="img-fluid" src={Payal} alt="Payal Butani" />
                </div>
                <div className="team-info">
                  <h2>Payal Butani</h2>
                  <p>Designer Lead</p>
                </div>
              </div>
            </div>
            <div
              className="col-sm-12 col-md-6 col-lg-4 pt-4 wow fadeInUp"
              data-wow-delay="0.7s"
            >
              <div className="team-item rounded">
                <div className="team-member-img">
                  <Image className="img-fluid" src={Topon} alt="Topon" />
                </div>
                <div className="team-info">
                  <h2>Topon</h2>
                  <p>Social Media Manager</p>
                </div>
              </div>
            </div>
            <div
              className="col-sm-12 col-md-6 col-lg-4 pt-4 wow fadeInUp"
              data-wow-delay="0.7s"
            >
              <div className="team-item rounded">
                <div className="team-member-img">
                  <Image className="img-fluid" src={Veena} alt="Veena" />
                </div>
                <div className="team-info">
                  <h2>Veena</h2>
                  <p>QA Lead</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* team members end */}
      {/* testimonial start */}
      <div className="container-fluid py-5 testimonial">
        <div className="container">
          <div className="row mb-5 testi-rotate align-items-center">
            <div className="col-lg-7 col-md-6">
              <div className="section-head mb-4">
                <h5 className="small-heading text-white">Testimonials</h5>
                <h3 className="text-white">BetaSource Trusted Clients</h3>
                <h3 className="text-white">
                  Awesome <span> Reviews </span>
                </h3>
              </div>
            </div>
            <div className="col-lg-5 col-md-6">
              <div className="row">
                <div className="col-lg-6">
                  <div className="testi-counter-box addon">
                    <div className="testi-counter-title">
                      <h2 className="counter">50</h2>
                      <span>+</span>
                      <p>Happy Clients</p>
                    </div>
                  </div>
                </div>
                <div className="col-lg-6">
                  <div className="testi-counter-box">
                    <div className="testi-counter-title">
                      <h2 className="counter">100</h2>
                      <span>%</span>
                      <p>Satisfaction Rate</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="common-about-shape">
              <div className="common-about-shape-thumb2 rotateme">
                <Image
                  src={Testimonialmap}
                  className="img-fluid"
                  alt="Home"
                  title="Home"
                />
              </div>
            </div>
          </div>
          <Testimonialslider />
        </div>
      </div>
      {/* testimonial end */}
      {/* lets talk start */}
      <div className="container shadow rounded lets-talk">
        <div className="row">
          <div className="col-12 p-5 text-center">
            <FaHeart />
            <div className=" text-center p-2">
              <h2 className="mb-4 text-white">
                We would love to hear more about your what's on your mind.
              </h2>
              <p className="handwritten highlight pb-4 text-white">
                Why wait? Start now!
              </p>

              <CommonButton
                text="Let's Talk"
                href="https://calendly.com/ronak-barot/30min"
              />
            </div>
          </div>
        </div>
      </div>
      {/* lets talk end */}
    </div>
  );
}

export default Home