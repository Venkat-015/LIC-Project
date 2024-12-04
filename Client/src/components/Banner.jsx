import React from 'react';
import '../styles/Banner.css';

function Banner() {
  return (
    <div className="banner">
      <div className="banner-content">
        <h2>I have secured my future with smart planning</h2>
        <p>Start earning your second income through LIC Agency</p>
      </div>
      <div className="banner-images">
        <img src="/images/banner1.jpg" alt="Banner 1" />
        <img src="/images/banner2.jpg" alt="Banner 2" />
      </div>
    </div>
  );
}

export default Banner;
