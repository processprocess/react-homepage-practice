import React, { Component } from 'react';
import Swiper from 'swiper-r';
// import imageText from '../images/carousel/Hero-Panel-text.jpg';
import imageOne from '../images/carousel/Hero-Panel-1.jpg';
import imageTwo from '../images/carousel/Hero-Panel-2.jpg';
import imageThree from '../images/carousel/Hero-Panel-3.jpg';

class Carousel extends Component {
  render() {

    const config = {
      // autoplay: 5000,
      pagination: '.swiper-pagination',
      paginationClickable: true,
      scrollbar: false,
      loop: true,
      nextButton: false,
      prevButton: false,
    };

    return (
      <div className={ "carousel-wrapper" }>
        <Swiper swiperConfig={ config }>

          {/* <div className="carousel-item">
            <div className="text-overlay">
              <div className="text-overlay-header">Screening: <br/> DVF Secret Agent Part 2</div>
              <div className="text-overlay-date">October 15, 2017</div>
              <div className="text-overlay-cta">Join us for a private screening of DVF Secret Agent Part 2 <br/> with our special guest, director Peter Lindberg.</div>
            </div>
            <div className="text-overlay-image"style={ {background: `url(${imageText}) no-repeat center`} }></div>
          </div> */}

          <div className="carousel-item">
            <div className="text-overlay">
              <div className="text-overlay-header">Screening: <br/> DVF Secret Agent Part 2</div>
              <div className="text-overlay-date">October 15, 2017</div>
              <div className="text-overlay-cta">Join us for a private screening of DVF Secret Agent Part 2 <br/> with our special guest, director Peter Lindberg.</div>
            </div>
            <div className="text-overlay-image"style={ {background: `url(${imageOne}) no-repeat center`} }></div>
          </div>

          <div className="carousel-item">
            <div className="text-overlay">
              <div className="text-overlay-header">Screening: <br/> DVF Secret Agent Part 2</div>
              <div className="text-overlay-date">October 15, 2017</div>
              <div className="text-overlay-cta">Join us for a private screening of DVF Secret Agent Part 2 <br/> with our special guest, director Peter Lindberg.</div>
            </div>
            <div className="text-overlay-image"style={ {background: `url(${imageTwo}) no-repeat center`} }></div>
          </div>

          <div className="carousel-item">
            <div className="text-overlay">
              <div className="text-overlay-header">Screening: <br/> DVF Secret Agent Part 2</div>
              <div className="text-overlay-date">October 15, 2017</div>
              <div className="text-overlay-cta">Join us for a private screening of DVF Secret Agent Part 2 <br/> with our special guest, director Peter Lindberg.</div>
            </div>
            <div className="text-overlay-image"style={ {background: `url(${imageThree}) no-repeat center`} }></div>
          </div>

       </Swiper>
       <div className="swiper-pagination"></div>
     </div>
    );
  }
}

export default Carousel;
