import React, { Component } from 'react';
import Header from './Header';
import Carousel from './Carousel';
import Posts from './Posts';
import Footer from './Footer';
import samplePosts from './samplePosts.json';

class App extends Component {
  constructor() {
    super();
    this.dateSort = this.dateSort.bind(this);
    this.state = {
      posts: {}
    };
  }

  componentWillMount() {
    let sortedPosts = this.dateSort(samplePosts)
    this.setState({ posts: sortedPosts });
  }

  dateSort(posts) {
    const months = ["january", "february", "march", "april", "may", "june", "july", "august", "september", "october", "november", "december"]; // to get value from index
    return posts.map(post => { // iterates over posts
      let dateString = post.date.split(' ') // convert string into array to easily get values
      let month = months.indexOf(dateString[0].toLowerCase()); // convert string into array to easily get values
      let day = dateString[1] < 10 ? '0' + dateString[1]: dateString[1]; // to be sure numbers are consistent
      let year = dateString[2] < 10 ? '0' + dateString[2]: dateString[2];
      post.numDate = `${year}${month}${day}`; // set key and value on object
      return post;
    }).sort((a, b) => a.numDate - b.numDate); // sort by newly created numDate value
  }

  render() {
    return (
      <div className="main">
        <Header />
        <Carousel />
        <Posts posts={this.state.posts}/>
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