import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Masonry from 'react-masonry-component';

class Posts extends Component {
  static propTypes = {
    posts: PropTypes.array.isRequired,
  }

  render() {
    const posts = this.props.posts;

    const masonryOptions = {
      transitionDuration: '.6s',
    };

    const childElements = posts.map(function(element){
      return (
        <li className="post-wrapper" key={element.date}>
          <div className="post-content">
            <a href="#" className="story-wrapper">
              <img src={element.img} alt="article" />
              <div className="date">{element.date}</div>
              <div className="headline-wrap">
                <div className="headline">{element.headline}</div>
              </div>
            </a>
            <div className="sponsor">Presented by <a className="text-link" href="#">{element.sponsor}</a></div>
          </div>
        </li>
      );
    });

    return (
      <div className="posts-wrapper">
        <Masonry
          className={'my-gallery-class'}
          elementType={'ul'}
          options={ masonryOptions }
        >
          {childElements}
        </Masonry>
      </div>
    );
  }
}

export default Posts;