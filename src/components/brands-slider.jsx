"use client";
import React from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import Image from "next/image";
//importing images
import quickcam from "../../public/brands/quickcam.webp";
import kiwiqa from "../../public/brands/kiwiqa.webp";
import mobio from "../../public/brands/mobio.webp";
import primo from "../../public/brands/primo.webp";
import thinkfuture from "../../public/brands/thinkfuture.webp";
import jetapo from "../../public/brands/jetapo.webp";
import view from "../../public/brands/view.webp";
import exaze from "../../public/brands/exaze.webp";
import gspann from "../../public/brands/gspann.svg";
import nike from "../../public/brands/nike.webp";
import bluelogic from "../../public/brands/bluelogic.webp";
import aof from "../../public/brands/aof.png";
import shyftlabs from "../../public/brands/shyftlabs.svg";
import staqo from "../../public/brands/staqo.png";
import lsg from "../../public/brands/lsg.svg";

function BrandsSlider() {
  const settings = {
    infinite: true,
    slidesToShow: 5,
    slidesToScroll: 1,
    autoplay: true,
    speed: 400,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
          autoplay: true,
        },
      },
      {
        breakpoint: 769,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          initialSlide: 1,
          infinite: true,
          autoplay: true,
        },
      },
      {
        breakpoint: 726,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          initialSlide: 1,
          infinite: true,
          autoplay: true,
        },
      },
    ],
  };
  return (
    <div id="brand" className="container-fluid py-5 brandSlider">
      <div className="container">
        <div className="row pt-50">
          <div className="col-lg-12">
            <div className="betasource-top-title">
              <h3> More Then 500+ Brands with work BetaSource</h3>
            </div>
          </div>
        </div>
        <div className="owl-carousel brand-carousel wow fadeInUp">
          <Slider {...settings}>
            <div className="brandSlider-item bg-light rounded p-1">
              <div className="border rounded p-2">
                <div className="brands_grid_box">
                  <Image
                    className="img-fluid flex-shrink-0 rounded"
                    src={quickcam}
                    alt="QuickCam"
                    title="QuickCam"
                  />
                </div>
              </div>
            </div>
            <div className="brandSlider-item bg-light rounded p-1">
              <div className="border rounded p-2">
                <div className="brands_grid_box">
                  <Image
                    className="img-fluid flex-shrink-0 rounded"
                    src={kiwiqa}
                    alt="KiwiQA"
                    title="KiwiQA"
                  />
                </div>
              </div>
            </div>
            <div className="brandSlider-item bg-light rounded p-1">
              <div className="border rounded p-2">
                <div className="brands_grid_box">
                  <Image
                    className="img-fluid flex-shrink-0 rounded"
                    src={mobio}
                    alt="Mobio Solutions"
                    title="Mobio Solutions"
                  />
                </div>
              </div>
            </div>
            <div className="brandSlider-item bg-light rounded p-1">
              <div className="border rounded p-2">
                <div className="brands_grid_box">
                  <Image
                    className="img-fluid flex-shrink-0 rounded"
                    src={primo}
                    alt="PRIMO Furnishings"
                    title="PRIMO Furnishings"
                  />
                </div>
              </div>
            </div>
            <div className="brandSlider-item bg-light rounded p-1">
              <div className="border rounded p-2">
                <div className="brands_grid_box">
                  <Image
                    className="img-fluid flex-shrink-0 rounded"
                    src={thinkfuture}
                    alt="Think Future Technologies"
                    title="Think Future Technologies"
                  />
                </div>
              </div>
            </div>
            <div className="brandSlider-item bg-light rounded p-1">
              <div className="border rounded p-2">
                <div className="brands_grid_box">
                  <Image
                    className="img-fluid flex-shrink-0 rounded"
                    src={jetapo}
                    alt="Jetapo"
                    title="Jetapo"
                  />
                </div>
              </div>
            </div>
            <div className="brandSlider-item bg-light rounded p-1">
              <div className="border rounded p-2">
                <div className="brands_grid_box">
                  <Image
                    className="img-fluid flex-shrink-0 rounded"
                    src={view}
                    alt="View"
                    title="View"
                  />
                </div>
              </div>
            </div>
            <div className="brandSlider-item bg-light rounded p-1">
              <div className="border rounded p-2">
                <div className="brands_grid_box">
                  <Image
                    className="img-fluid flex-shrink-0 rounded"
                    src={exaze}
                    alt="exaze"
                    title="exaze"
                  />
                </div>
              </div>
            </div>
            <div className="brandSlider-item bg-light rounded p-1">
              <div className="border rounded p-2">
                <div className="brands_grid_box">
                  <Image
                    className="img-fluid flex-shrink-0 rounded"
                    src={gspann}
                    alt="GSPANN"
                    title="GSPANN"
                  />
                </div>
              </div>
            </div>

            <div className="brandSlider-item bg-light rounded p-1">
              <div className="border rounded p-2">
                <div className="brands_grid_box">
                  <Image
                    className="img-fluid flex-shrink-0 rounded"
                    src={nike}
                    alt="NIKE"
                    title="NIKE"
                  />
                </div>
              </div>
            </div>
            <div className="brandSlider-item bg-light rounded p-1">
              <div className="border rounded p-2">
                <div className="brands_grid_box">
                  <Image
                    className="img-fluid flex-shrink-0 rounded"
                    src={bluelogic}
                    alt="Bule Logic"
                    title="Bule Logic"
                  />
                </div>
              </div>
            </div>
            <div className="brandSlider-item bg-light rounded p-1">
              <div className="border rounded p-2">
                <div className="brands_grid_box">
                  <Image
                    className="img-fluid flex-shrink-0 rounded"
                    src={shyftlabs}
                    alt="ShyftLabs"
                    title="ShyftLabs"
                  />
                </div>
              </div>
            </div>
            <div className="brandSlider-item bg-light rounded p-1">
              <div className="border rounded p-2">
                <div className="brands_grid_box">
                  <Image
                    className="img-fluid flex-shrink-0 rounded"
                    src={aof}
                    alt="AOF"
                    title="AOF"
                  />
                </div>
              </div>
            </div>
            <div className="brandSlider-item bg-light rounded p-1">
              <div className="border rounded p-2">
                <div className="brands_grid_box">
                  <Image
                    className="img-fluid flex-shrink-0 rounded"
                    src={staqo}
                    alt="Staqo-Let's Simplify"
                    title="Staqo-Let's Simplify"
                  />
                </div>
              </div>
            </div>
            <div className="brandSlider-item bg-light rounded p-1">
              <div className="border rounded p-2">
                <div className="brands_grid_box">
                  <Image
                    className="img-fluid flex-shrink-0 rounded"
                    src={lsg}
                    alt="LSG- A LEGALTECH COMPANY"
                    title="LSG- A LEGALTECH COMPANY"
                  />
                </div>
              </div>
            </div>
          </Slider>
        </div>
      </div>
    </div>
  );
}

export default BrandsSlider;
