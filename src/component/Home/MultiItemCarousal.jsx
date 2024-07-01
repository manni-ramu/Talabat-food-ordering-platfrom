import React from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import CarousalItem from "./CarousalItem";
import "./Home.css";
import { topMeel } from "./topMeel";


const MultiItemCarousal = () => {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 5,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 200,
        arrows: false
      };
    return (
        <div >

            <Slider {... settings}>
                {topMeel.map((item)=>(
                    <CarousalItem image={item.image} title={item.title}/>
                ))}
            </Slider>
        </div>
        
    )
}

export default MultiItemCarousal;