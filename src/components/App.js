import React, { Component } from 'react';
import Header from './Header';
import Carousel from './Carousel';
import Posts from './Posts';
import Footer from './Footer';
import sampleData from './sampleData.json';
import { dateSort } from '../helpers'

class App extends Component {
  constructor() {
    super();
    this.state = {
      posts: {},
      carouselItems: {}
    };
  }

  componentWillMount() {
    const {posts, carousel} = sampleData;
    const sortedPosts = dateSort(posts)
    const sortedCarousel = dateSort(carousel)
    this.setState({ posts: sortedPosts, carouselItems: sortedCarousel });
  }

  render() {
    return (
      <div className="main">
        <Header />
        <Carousel carouselItems={this.state.carouselItems} />
        {/* <Carousel carouselItems={this.state.carouselItems} lineBreaks={this.lineBreaks} /> */}
        <Posts posts={this.state.posts} />
        <Footer />
      </div>
    );
  }
}

export default App;

// ------ browsers ------
// desktop down to 320px-width mobile
// IE 11
// Edge
// 3 versions of:
// Chrome,
// Firefox
// Safari
// iOS iPhone and iPad:
// Safari
// Chrome

// ------ complete ------
// send source code and live link