import React, { useState } from 'react';
import './Carousel.css';

const Carousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const videos = [
    { src: 'video1.mp4', title: 'Video 1' },
    { src: 'video2.mp4', title: 'Video 2' },
    { src: 'video3.mp4', title: 'Video 3' },
  ];

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % videos.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + videos.length) % videos.length);
  };

  return (
    <>
    <h1 className='TitleVideo'>Conocenos más</h1>
    <div className="carousel">
      <div className="carousel-slide" style={{ transform: `translateX(-${currentIndex * 100}%)` }}>
        {videos.map((video, index) => (
            <div className="carousel-item" key={index}>
            <div className="carousel-card">
              <video className="carousel-video" src={video.src} autoPlay loop muted></video>
            </div>
          </div>
        ))}
      </div>
      <button className="carousel-button prev" onClick={prevSlide}>&#10094;</button>
      <button className="carousel-button next" onClick={nextSlide}>&#10095;</button>
    </div>
    </>
  );
};

export default Carousel;
