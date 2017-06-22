import React from 'react';

export function dateSort(posts) {
  const months = ["january", "february", "march", "april", "may", "june", "july", "august", "september", "october", "november", "december"]; // to get value from index
  return posts.map(post => {
    const dateString = post.date.replace(/,/g, '') .split(' ') // clean data and convert string into array to easily get values
    const monthNum = months.indexOf(dateString[0].toLowerCase()); // convert string into array to easily get values
    const month = monthNum < 10 ? '0' + monthNum : monthNum;
    const day = dateString[1] < 10 ? '0' + dateString[1]: dateString[1]; // to be sure numbers are consistent
    const year = dateString[2];
    console.log();
    post.numDate = `${year}${month}${day}`; // set key and value on object
    return post;
  }).sort((a, b) =>  b.numDate - a.numDate); // sort by newly created numDate value
};

export function lineBreaks(aString) {
  return aString.split('\n').map(item => {
    return (
      <span key={item}>
        {item}
        <br/>
      </span>
    )
  })
};