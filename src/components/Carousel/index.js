import React, { useEffect, useState } from 'react';
import Carousel from 'react-multi-carousel';

import { Link } from 'react-router-dom';
import api from '~/services/api';
import * as S from './styles';

export default function CarouselList() {
  const [highlights, setHighlights] = useState([]);

  useEffect(() => {
    const loadhighlights = async () => {
      const response = await api.get('/highlights');

      setHighlights(response.data);
    };

    loadhighlights();
  }, []);

  const responsive = {
    superLargeDesktop: {
      breakpoint: { max: 4000, min: 3000 },
      items: 5,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };

  return (
    <S.Container>
      <Carousel
        responsive={responsive}
        showDots
        autoPlay
        autoPlaySpeed={3000}
        centerMode
        infinite
        removeArrowOnDeviceType={['tablet', 'mobile', 'desktop']}
      >
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
      </Carousel>
    </S.Container>
  );
}
