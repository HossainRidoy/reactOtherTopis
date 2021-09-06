import React, { useState, useRef, useEffect } from 'react'

import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import slide1 from "../../assets/images/With-Tea-wala.jpg"
import "./slide.scss"


import ModalVideo from 'react-modal-video'



const ModalSli = [
    {
        id: 1,
        photo: slide1,
        title: "Bangladesh 1",
        video: "VBk-nzpwr6Y"
    },
    {
        id: 2,
        photo: slide1,
        title: "Bangladesh 2",
        video: "BBS7Md2SjEs"
    }
]

const Modal_slide = () => {

    let homeSliderRef = useRef()

    // useEffect(() => {
    //     console.log(homeSliderRef.slickPause')
    // },[])

    const [isOpen, setOpen] = useState(false)

    const [videos, setVideos] = useState(null)

    const [selet, setselet] = useState(null)


    var settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        beforeChange: (current, next) => setselet({ activeSlide: next }),
    
    };





    const buttonClick = (video) => {
        setOpen(true)
        setVideos(video)
        homeSliderRef.slickPause()

    }
    const closeButotn = () => {
        setOpen(false)
        homeSliderRef.slickPlay()
    }

    return (
        <div className="py-5" id="topSlide">
            <Slider ref={(slider) => homeSliderRef = (slider)} {...settings}>
                {ModalSli.map((item, index) => (
                    <div key={index} className="slideItem">
                        <img style={{ width: "100%" }} src={item.photo} alt="" />
                        <div className="slideTextMiddle">
                            <h1 className="text-white">{item.title}</h1>
                            <button className="btn-primary" onClick={() => buttonClick(item.video)}>Play</button>
                        </div>


                    </div>
                ))}
            </Slider>
            <React.Fragment>
                <ModalVideo channel="youtube" autoplay isOpen={isOpen} videoId={videos} onClose={closeButotn} />
            </React.Fragment>
        </div>
    )
}

export default Modal_slide
