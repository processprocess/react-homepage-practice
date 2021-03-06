import React from 'react';
import PropTypes from 'prop-types';
import Swiper from 'swiper-r';
import { lineBreaks } from '../helpers';

const Carousel = ({carouselItems}) => {
  this.propTypes = {
    carouselItems: PropTypes.array.isRequired,
  };

  const carouselConfig = {
    autoplay: 5000,
    pagination: '.swiper-pagination',
    paginationClickable: true,
    scrollbar: false,
    loop: true,
    nextButton: false,
    prevButton: false,
  };

  const childElements = carouselItems.map(element => {
    const style = {background: `url(${element.img}) no-repeat center`}

    return (
      <div className="carousel-item" key={element.date}>
        <div className="text-overlay">
          <div className="text-overlay-header">{lineBreaks(element.headline)}</div>
          <div className="text-overlay-date">{element.date}</div>
          <div className="text-overlay-cta">{lineBreaks(element.cta)}</div>
        </div>
        <div className="text-overlay-image"style={style}></div>
      </div>
    );
  });

  return (
    <div className="carousel-wrapper" >
      <Swiper swiperConfig={carouselConfig} >
        {childElements}
      </Swiper>
      <div className="swiper-pagination"></div>
    </div>
  );
};

export default Carousel;
