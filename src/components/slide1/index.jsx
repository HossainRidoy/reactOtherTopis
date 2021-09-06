import React from 'react'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import slide1 from "../../assets/images/With-Tea-wala.jpg"
import "./slide.scss"
import { Link } from 'react-router-dom';

const Slide = () => {

    var settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        // autoplay: true
    };

    return (
        <div className="py-5" id="topSlide">
            <Slider {...settings}>
                <div className="slideItem">
                    <img style={{ width: "100%" }} src={slide1} alt="" />
                    <div className="slideTextMiddle">
                        <h1 className="text-white">Banglasesh is a beautyfull country</h1>
                        <button className="slide-button">Slide 1</button>
                    </div>
                </div>
                <div className="slideItem">
                    <img style={{ width: "100%" }} src={slide1} alt="" />
                    <div className="slideTextMiddle">
                        <h1 className="text-white">Banglasesh is a beautyfull country</h1>
                        <button className="slide-button">Slide 1</button>

                    </div>
                </div>

            </Slider>
        </div>
    )
}

export default Slide
