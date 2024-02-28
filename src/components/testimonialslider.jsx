"use client";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import Henry from "../../public/reviews/Henry.webp";
import Tom from "../../public/reviews/Tom.webp";
import Bola from "../../public/reviews/Bola.webp";
import Jordan from "../../public/reviews/Jordan.webp";
import Solomon from "../../public/reviews/Solomon.webp";
import Maha from "../../public/reviews/Maha.png";
import Image from "next/image";
function Testimonialslider() {
  let settings = {
    infinite: true,
    speed: 800,
    slidesToShow: 2,
    slidesToScroll: 1,
    autoplay: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
        },
      },
      {
        breakpoint: 850,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          centerMode: false,
        },
      },
    ],
  };
  return (
    <div className="testimonial-carousel wow fadeInUp" data-wow-delay="0.1s">
      <Slider {...settings}>
        <div className="testimonial-item rounded p-3">
          <Image
            src={Henry}
            className="img-fluid"
            alt="Henry-review"
            title="Client Feedback: Henry's Experience"
          />
        </div>
        <div className="testimonial-item rounded p-3">
          <Image
            src={Tom}
            className="img-fluid"
            alt="Tom-review"
            title="Client Feedback: Tom's Experience"
          />
        </div>
        <div className="testimonial-item rounded p-3">
          <Image
            src={Bola}
            className="img-fluid"
            alt="Bola-review"
            title="Client Feedback: Bola's Experience"
          />
        </div>
        <div className="testimonial-item rounded p-3">
          <Image
            src={Jordan}
            className="img-fluid"
            alt="Jordan-review"
            title="Client Feedback: Jordan's Experience"
          />
        </div>
        <div className="testimonial-item rounded p-3">
          <Image
            src={Solomon}
            className="img-fluid"
            alt="Solomon-review"
            title="Client Feedback: Solomon's Experience"
          />
        </div>
        <div className="testimonial-item rounded p-3">
          <Image
            src={Maha}
            className="img-fluid"
            alt="Maha-review"
            title="Client Feedback: Maha's Experience"
          />
        </div>
      </Slider>
    </div>
  );
}

export default Testimonialslider;
