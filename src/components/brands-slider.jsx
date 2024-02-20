"use client"
import React from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import Image from "next/image";
//importing images
import quickcam from "../../public/brands/quickcam.webp"
import kiwiqa from "../../public/brands/kiwiqa.webp"
import mobio from "../../public/brands/mobio.webp"
import primo from "../../public/brands/primo.webp"
import thinkfuture from "../../public/brands/thinkfuture.webp"
import jetapo from "../../public/brands/jetapo.webp"
import view from "../../public/brands/view.webp"
import exaze from "../../public/brands/exaze.webp"
import gspann from "../../public/brands/gspann.svg"
import nike from "../../public/brands/nike.webp"
import bluelogic from "../../public/brands/bluelogic.webp"
import aof from "../../public/brands/aof.png"
import shyftlabs from "../../public/brands/shyftlabs.svg"
import staqo from "../../public/brands/staqo.png"
import lsg from "../../public/brands/lsg.svg"


function BrandsSlider() {

    const settings = {
      infinite: true,
      slidesToShow: 5,
      slidesToScroll: 5,
      // autoplay: true,
      // speed: 2000,
      // autoplaySpeed: 2000,
      // cssEase: "linear",
      responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 3,
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
    <div id="brand" class="container-fluid py-5 brandSlider">
    <div class="container">
    <div class="row pt-50">
        <div class="col-lg-12">
            <div class="betasource-top-title">
                <h3> More Then 500+ Brands with work BetaSource</h3>
            </div>
        </div>
    </div>
    <div class="owl-carousel brand-carousel wow fadeInUp">
      <Slider {...settings}>

      
        <div class="brandSlider-item bg-light rounded p-1">
            <div class="border rounded p-2">
                <div class="brands_grid_box">
                    <Image class="img-fluid flex-shrink-0 rounded" src={quickcam} alt="QuickCam" title="QuickCam"/>
                </div>
            </div>
        </div>
        <div class="brandSlider-item bg-light rounded p-1">
            <div class="border rounded p-2">
                <div class="brands_grid_box">
                    <Image class="img-fluid flex-shrink-0 rounded" src={kiwiqa } alt="KiwiQA" title="KiwiQA"/>
                </div>
            </div>
        </div>
        <div class="brandSlider-item bg-light rounded p-1">
            <div class="border rounded p-2">
                <div class="brands_grid_box">
                    <Image class="img-fluid flex-shrink-0 rounded" src={mobio } alt="Mobio Solutions" title="Mobio Solutions"/>
                </div>
            </div>
        </div>
        <div class="brandSlider-item bg-light rounded p-1">
            <div class="border rounded p-2">
                <div class="brands_grid_box">
                    <Image class="img-fluid flex-shrink-0 rounded" src={primo } alt="PRIMO Furnishings" title="PRIMO Furnishings"/>
                </div>
            </div>
        </div>
        <div class="brandSlider-item bg-light rounded p-1">
            <div class="border rounded p-2">
                <div class="brands_grid_box">
                    <Image class="img-fluid flex-shrink-0 rounded" src={thinkfuture } alt="Think Future Technologies" title="Think Future Technologies"/>
                </div>
            </div>
        </div>
        <div class="brandSlider-item bg-light rounded p-1">
            <div class="border rounded p-2">
                <div class="brands_grid_box">
                    <Image class="img-fluid flex-shrink-0 rounded" src={jetapo } alt="Jetapo" title="Jetapo"/>
                </div>
            </div>
        </div>
        <div class="brandSlider-item bg-light rounded p-1">
            <div class="border rounded p-2">
                <div class="brands_grid_box">
                    <Image class="img-fluid flex-shrink-0 rounded" src={view } alt="View" title="View"/>
                </div>
            </div>
        </div>
        <div class="brandSlider-item bg-light rounded p-1">
            <div class="border rounded p-2">
                <div class="brands_grid_box">
                    <Image class="img-fluid flex-shrink-0 rounded" src={exaze } alt="exaze" title="exaze"/>
                </div>
            </div>
        </div>
        <div class="brandSlider-item bg-light rounded p-1">
            <div class="border rounded p-2">
                <div class="brands_grid_box">
                    <Image class="img-fluid flex-shrink-0 rounded" src={gspann } alt="GSPANN" title="GSPANN"/>
                </div>
            </div>
        </div>
        
        <div class="brandSlider-item bg-light rounded p-1">
            <div class="border rounded p-2">
                <div class="brands_grid_box">
                    <Image class="img-fluid flex-shrink-0 rounded" src={nike } alt="NIKE" title="NIKE"/>
                </div>
            </div>
        </div>
        <div class="brandSlider-item bg-light rounded p-1">
            <div class="border rounded p-2">
                <div class="brands_grid_box">
                    <Image class="img-fluid flex-shrink-0 rounded" src={bluelogic } alt="Bule Logic" title="Bule Logic"/>
                </div>
            </div>
        </div>
        <div class="brandSlider-item bg-light rounded p-1">
            <div class="border rounded p-2">
                <div class="brands_grid_box">
                    <Image class="img-fluid flex-shrink-0 rounded" src={shyftlabs } alt="ShyftLabs" title="ShyftLabs"/>
                </div>
            </div>
        </div>
        <div class="brandSlider-item bg-light rounded p-1">
            <div class="border rounded p-2">
                <div class="brands_grid_box">
                    <Image class="img-fluid flex-shrink-0 rounded" src={aof } alt="AOF" title="AOF" style="width: 85px;"/>
                </div>
            </div>
        </div>
        <div class="brandSlider-item bg-light rounded p-1">
            <div class="border rounded p-2">
                <div class="brands_grid_box">
                    <Image class="img-fluid flex-shrink-0 rounded" src={staqo } alt="Staqo-Let's Simplify" title="Staqo-Let's Simplify"/>
                </div>
            </div>
        </div>
        <div class="brandSlider-item bg-light rounded p-1">
            <div class="border rounded p-2">
                <div class="brands_grid_box">
                    <Image class="img-fluid flex-shrink-0 rounded" src={lsg } alt="LSG- A LEGALTECH COMPANY" title="LSG- A LEGALTECH COMPANY"/>
                </div>
            </div>
        </div>
        </Slider>
    </div>
</div>
</div>
  )
}

export default BrandsSlider
