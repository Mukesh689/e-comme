// components/GameCarousel.jsx
// import React, { useEffect, useRef } from 'react';
import React from 'react';
import Slider from 'react-slick';
import { Card } from 'react-bootstrap';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import './home.css'

const GameCarousel = ({ title, games }) => {
  const settings = {
    autoplay: true,
    autoplaySpeed: 5000,
    infinite: true,
    speed: 1000,
    slidesToShow: 4,
    slidesToScroll: 1,
    responsive: [
      { breakpoint: 1024, settings: { slidesToShow: 3 } },
      { breakpoint: 768, settings: { slidesToShow: 2 } },
      { breakpoint: 480, settings: { slidesToShow: 1 } },
    ],
  };

  return (
    <div style={{ marginBottom: '40px' }} className='gamecarousel'>
      <h2>{title}</h2>

      <Slider {...settings} className='slider'>
        {games.map(game => (
          <div key={game.id} style={{ padding: '10px' }} className='cardborder'>
            <Card style={{gap:'10px',marginLeft:'5px'}}>
              <img src={game.image} alt={game.name} style={{ width: '255px', height: '200px', objectFit: 'center', marginLeft: '50px', padding: '10px 0' }} className='imgslider' />
              <div style={{ textAlign: "center", fontSize: '20px', fontWeight: 'bold' }}>
                <h4>{game.name}</h4>
                <p>${game.price}</p>
              </div>
            </Card>
          </div>
        ))}
      </Slider>

    </div>
  );
};

export default GameCarousel;
