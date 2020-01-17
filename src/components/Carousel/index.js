import React from 'react';
import Slider from 'infinite-react-carousel';

import Imagem1 from '~/images/carousel1.jpeg';
import Imagem2 from '~/images/carousel2.jpeg';
import Imagem3 from '~/images/carousel3.jpeg';

export default function Carousel() {
  const settings = {
    autoplay: true,
    dots: true,
  };

  return (
    <Slider {...settings} style={{ width: '100%' }}>
      <div>
        <img src={Imagem1} alt="" />
        <img src={Imagem1} alt="" />
        <img src={Imagem1} alt="" />
      </div>
      <div>
        <img src={Imagem2} alt="" />
        <img src={Imagem2} alt="" />
        <img src={Imagem2} alt="" />
      </div>
      <div>
        <img src={Imagem3} alt="" />
        <img src={Imagem3} alt="" />
        <img src={Imagem3} alt="" />
      </div>
    </Slider>
  );
}
