import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Swiper from 'swiper-r';
import { lineBreaks } from '../helpers'

class Carousel extends Component {
  static propTypes = {
    carouselItems: PropTypes.array.isRequired,
  }

  render() {
    const carouselItems = this.props.carouselItems;
    const config = {
      // autoplay: 5000,
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
            <div className="text-overlay-cta">{element.cta}</div>
          </div>
          <div className="text-overlay-image"style={style}></div>
        </div>
      );
    });

    return (
      <div className={ "carousel-wrapper" }>
        <Swiper swiperConfig={config}>
          {childElements}
        </Swiper>
        <div className="swiper-pagination"></div>
      </div>
    );
  }
}

export default Carousel;
