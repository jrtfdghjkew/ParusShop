import React from 'react';
import './Slider.css'
// import first from '../../assets/ImagesSlides/first.jpg'
const SlideImage = ({ src, alt }) => {
    return (
        <img src={src} alt={alt} className="slide-image" />
    );
};

export default SlideImage;