"use client";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Image from "next/image";
import AI from "../../public/home/ai.webp";
import IOT from "../../public/home/iot.webp";
import Devops from "../../public/home/devops.jpg";
import Hardware from "../../public/home/Hardware.webp";
import CyberSecurity from "../../public/home/cyber.jpg";
import Blockchain from "../../public/home/blockchain.jpg";
import CommonButton from "./commonbutton";
function Homeslider() {
  const settings = {
    dots: true, // Show dot indicators
    arrows: true,
    infinite: true,
    speed: 400,
    slidesToShow: 1,
    slidesToScroll: 1,
    // autoplay: true,
  };

  return (
    <div className="header">
      <Slider {...settings} className="carousel-inner">
        <div className="carousel-item">
          <div className="fill">
          <div className="image-overlay"></div>
            <Image
              src={AI}
              alt="AI/ML"
              title="Artificial Intelligence/Machine Learning"
            />
          </div>
          <div className="carousel-caption">
            <h1 className="wow slideInRight" data-wow-delay="0s">
              AI / ML
            </h1>
            <h2 className="wow fadeInUpBig" data-wow-delay="2s">
              Empowering your business with AI/ML intelligence
            </h2>
            <CommonButton href="/case-studies/ai-ml-portfolio" text="Read More"/>
            
          </div>
        </div>
        <div className="carousel-item">
          <div className="fill">
          <div className="image-overlay"></div>
            <Image
              src={IOT}
              alt="Internet Of Things"
              title="Internet Of Things"
            />
          </div>
          <div className="carousel-caption text-center">
            <h2 className="  wow slideInRight" data-wow-delay="0s">
              IOT
            </h2>
            <h3 className="wow fadeInUpBig" data-wow-delay="2s">
              Connecting everything, everywhere with IoT innovation
            </h3>
            <CommonButton href="/case-studies/iot-case-study" text="Read More"/>
          </div>
        </div>
        <div className="carousel-item">
          <div className="fill">
          <div className="image-overlay"></div>
            <Image src={Devops} alt="DevOps" title="DevOps" />
          </div>
          <div className="carousel-caption">
            <h2
              className="animated fadeInLeft wow slideInRight"
              data-wow-delay="0s"
            >
              24/7 DevOps
            </h2>
            <h3 className="wow fadeInUpBig" data-wow-delay="2s">
              Accelerating your digital transformation with round-the-clock
              DevOps
            </h3>
            <CommonButton href="/devops" text="Read More"/>
          </div>
        </div>
        <div className="carousel-item">
          <div className="fill">
          <div className="image-overlay"></div>
            <Image
              src={Hardware}
              alt="Hardware & Networking"
              title="Hardware & Networking"
            />
          </div>

          <div className="carousel-caption">
            <h2 className="  wow slideInRight" data-wow-delay="0s">
              Hardware & Networking
            </h2>
            <h3 className="wow fadeInUpBig" data-wow-delay="2s">
              Your one-stop-shop for 24/7 Networking and Hardware helpdesk
              solutions
            </h3>
            <CommonButton href="/case-studies/hardware&networking" text="Read More"/>
          </div>
        </div>
        <div className="carousel-item">
          <div className="fill">
          <div className="image-overlay"></div>
            <Image
              src={CyberSecurity}
              alt="Cyber Security"
              title="Cyber Security"
            />
          </div>

          <div className="carousel-caption">
            <h2 className="  wow slideInRight" data-wow-delay="0s">
              Cyber Security
            </h2>
            <h3 className="wow fadeInUpBig" data-wow-delay="2s">
              Your data is your power, and it needs to be protected
            </h3>
            <CommonButton href="/case-studies/cyber-security" text="Read More"/>
          </div>
        </div>
        <div className="carousel-item">
          <div className="fill">
          <div className="image-overlay"></div>
            <Image src={Blockchain} alt="Blockchain" title="Blockchain" />
          </div>
          <div className="carousel-caption">
            <h2 className="wow slideInRight" data-wow-delay="0s">
              Blockchain
            </h2>
            <h3 className="wow fadeInUpBig" data-wow-delay="2s">
              Your Vision, Our Blockchain Expertise
            </h3>
            <CommonButton href="/trending-technology/blockchain" text="Read More"/>
          </div>
        </div>
      </Slider>
    </div>
  );
}

export default Homeslider;
