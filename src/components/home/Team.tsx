'use client';

import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const licenses = Array.from({ length: 15 }, (_, i) => ({
  id: i + 1,
  title: `License ${i + 1}`,
  description: `This is the description for License ${i + 1}.`,
  flag: `/flags/flag-${i + 1}.png`, // Replace with the actual flag image paths
}));


const Area = () => {
  const sliderSettings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 2,
    responsive: [
      {
        breakpoint: 1024, // For tablet
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 600, // For mobile
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  return (
    <div style={{ margin: '20px', background: '#f0f4f8', padding: '20px', borderRadius: '8px' }}>
      <h2 style={{ textAlign: 'center', marginBottom: '20px' }}>Licenses</h2>
      <Slider {...sliderSettings}>
        {licenses.map((license) => (
          <div key={license.id} style={{ padding: '0 15px' }}> {/* Horizontal spacing */}
            <div
              style={{
                border: '1px solid #ddd',
                borderRadius: '12px',
                background: 'linear-gradient(135deg, #6B73FF 0%, #000DFF 100%)',
                color: '#fff',
                padding: '20px',
                textAlign: 'center',
                position: 'relative',
                height: '180px',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
              }}
            >
              {/* Flag Image */}
              <img
                src={license.flag}
                alt={`${license.title} flag`}
                style={{
                  width: '40px',
                  height: '30px',
                  objectFit: 'cover',
                  borderRadius: '4px',
                  position: 'absolute',
                  top: '15px',
                  right: '15px',
                }}
              />
              {/* Card Content */}
              <div>
                <h3 style={{ fontSize: '18px', marginBottom: '10px' }}>{license.title}</h3>
                <p style={{ fontSize: '14px', lineHeight: '1.4' }}>{license.description}</p>
              </div>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default Area;