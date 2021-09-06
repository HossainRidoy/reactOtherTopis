import React from 'react'
import "./mobile_slide.scss"
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import photo1 from "../../assets/images/mobile.JPG"
import photo2 from "../../assets/images/mobile2.jpg"
import Fade from 'react-reveal/Fade';
const Mobile_slide = () => {

    var settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true
    };
    return (
        <div id="mobile" className="py-5">
             <Fade left>
          <h1>React Reveal</h1>
        </Fade>
            <div id="mobileSlide" className="mx-auto">
                <div className="power-button"></div>
                <div className="mobile_body">
                    <Slider {...settings}>
                        <div>
                            <img className="img-fluid" src={photo1} alt="" />
                        </div>
                        <div>
                            <img className="img-fluid" src={photo2} alt="" />
                        </div>

                    </Slider>
                </div>
            </div>
        </div>
    )
}

export default Mobile_slide
