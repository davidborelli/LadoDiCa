import React, { useEffect, useState } from 'react';
import Slider from 'infinite-react-carousel';

import { Link } from 'react-router-dom';
import api from '~/services/api';

export default function Carousel() {
  const [highlights, setHighlights] = useState([]);

  useEffect(() => {
    const loadhighlights = async () => {
      const response = await api.get('/highlights');

      setHighlights(response.data);
      console.tron.log(response.data);
    };

    loadhighlights();
  }, []);

  const settings = {
    autoplay: true,
    dots: true,
    arrows: false,
  };

  return (
    <Slider {...settings} style={{ width: '100%' }}>
      {highlights.map(highlight => (
        <div key={highlight.id}>
          <Link
            to={{
              pathname: `/detail/${highlight.id}`,
              state: { product: highlight },
            }}
          >
            <img src={highlight.pics[0].path} alt={highlight.pics[0].name} />
          </Link>
        </div>
      ))}
    </Slider>
  );
}
