import PageHeading from "@/components/pageheading";
import ContactForm from "@/components/contactform";
import Image from "next/image";
import shape from "../../../public/shape.png";
import main from "../../../public/main.png";
function Contact() {
  return (
    <>
      <PageHeading text="Contact Us" category="Home" categorypath="/" />
      <div className="container-fluid software-testing-details">
        <div className="container">
          <div className="row">
            <div className="col-lg-6 col-md-6">
              <div
                className="section-head mb-3 wow slideInLeft"
                data-wow-delay="0.1s"
              >
                <h5 className="small-heading"> Contact Us </h5>
                <h3 className="">
                  Let's <span> Get Started </span>
                </h3>
              </div>
              <div
                className="lines pt-2 pb-4 wow slideInLeft"
                data-wow-delay="0.1s"
              >
                <div className="line"></div>
              </div>
              <div
                className="betasource-smart-title wow slideInLeft"
                data-wow-delay="0.2s"
              >
                <p>
                  Thank you for your interest in our services and business
                  solutions. Share your requirements and ideas with us and get
                  all your question answered by our experts. Please fill out
                  this form and our representative will get back to you shortly.
                  We are here to help you accelerate digital transformation and
                  drive innovation.
                </p>
              </div>
            </div>
            <div className="col-lg-6 col-md-6 text-center">
              <div
                className="betasource-about-thumb1 wow zoomIn"
                data-wow-delay="0.6s"
              >
                <Image
                  src={main}
                  className="img-fluid"
                  alt="contact us"
                  title="contact us"
                />
              </div>
              <div className="about-shape-box wow zoomIn" data-wow-delay="0.2s">
                <div className="about-shape-thumb bounce-animate">
                  <Image src={shape} className="img-fluid" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <ContactForm />
    </>
  );
}

export default Contact;
