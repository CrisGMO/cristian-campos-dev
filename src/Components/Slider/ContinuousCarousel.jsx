import React from 'react';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

let techs = [
  { name: "HTML", logo: "path/to/html_logo.png" },
  { name: "CSS", logo: "path/to/css_logo.png" },
  { name: "JavaScript", logo: "path/to/javascript_logo.png" },
  { name: "React", logo: "path/to/react_logo.png" },
  { name: "Node.js", logo: "path/to/nodejs_logo.png" }
];

const ContinuousCarousel = ({tecnologias}) => {
  const settings = {
    arrows: false,
    dots: false,
    infinite: true,
    speed: 5000,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 0,
    cssEase: 'linear'
  };


  techs = tecnologias? tecnologias : techs
  var etiquetas = Object.keys(tecnologias)

  return (
    <div>
      <Slider className='slide' {...settings}>
        {etiquetas.map((etiqueta, index) => (
          <div key={index} className="tech-item">
            <img className='img-tecnologia' src={techs[etiqueta]} alt={`${etiqueta} logo`} />
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default ContinuousCarousel;