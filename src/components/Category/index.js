import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import * as S from './styles';

import api from '~/services/api';

export default function Category() {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    const loadCategories = async () => {
      const response = await api.get('/categories');

      setCategories(response.data);
    };

    loadCategories();
  }, []);

  return (
    <S.Content>
      <S.Bar>
        <ul>
          {categories.map(category => (
            <Link to={{ pathname: '/', state: { category } }} key={category.id}>
              <S.Link bottonLine={category.color}>
                <li>{category.name}</li>
              </S.Link>
            </Link>
          ))}
        </ul>
      </S.Bar>
    </S.Content>
  );
}
