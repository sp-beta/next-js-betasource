import PageHeading from "@/components/pageheading"
import FAQ from "@/components/faq";
import faqData from "../../data/faq/faqhome.json";
import Image from "next/image";
import Industries from "../../../public/about/industries.svg";
import shape from "../../../public/about/shape7.png";
function AboutPage() {
  return (
    <>
      <PageHeading text="About Us" category="Home" categorypath="/" />
      {/* services start */}

      {/* service code here */}

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
