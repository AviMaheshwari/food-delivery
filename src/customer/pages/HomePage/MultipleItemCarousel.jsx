import React from 'react'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from 'react-slick';
import { TopMeals} from './TopMeals';
import CarouselItem from './CarouselItem';

const MultipleItemCarousel = () => {
    const settings = {
        infinite: true,
        dots: false,
        speed: 500,
        slidesToShow: 5,
        slidesToScroll: 1,
        autoplay:true,
        autoplaySpeed:200,
        arrows: false
        };
  return (
    <div>
        <Slider {...settings}>
        {TopMeals.map((item)=><CarouselItem image={item.image} title={item.title}/>)}

  </Slider>
    </div>
  );
};

export default MultipleItemCarousel;
