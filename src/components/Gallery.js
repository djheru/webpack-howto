import React from "react"

const getBundle = () => {
  import(/* webpackChunkName: 'hoedash' */ 'lodash')
    .then((_) => {
      console.log('imported');
    });
};

const Gallery = () => (
  <div>
    <h1 onClick={getBundle}>Gallery</h1>
  </div>
);

export default Gallery;
