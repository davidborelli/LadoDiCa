import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

import * as S from './styles';

import api from '~/services/api';

export default function InputSearch({ size }) {
  const [inputValue, setInputValue] = useState('');
  const [resultSearch, setResultSearch] = useState([]);

  useEffect(() => {
    const search = async () => {
      const response = await api.post('/search', {
        key: 'products',
        searchBy: inputValue,
      });

      setResultSearch(response.data);
    };

    if (inputValue.length >= 4) {
      search();
    }

    if (inputValue.length < 4 && resultSearch.length > 0) {
      setResultSearch([]);
    }
  }, [inputValue, resultSearch.length]);

  return (
    <S.Container size={size}>
      <S.Input
        type="text"
        placeholder="Pesquisa..."
        onChange={event => setInputValue(event.target.value)}
      />
      <S.ResultTable hidden={!resultSearch}>
        <tbody>
          {resultSearch.map(result => (
            <tr key={result.id}>
              <td>
                <Link
                  to={{
                    pathname: `/detail/${result.id}`,
                    state: { product: result },
                  }}
                >
                  {result.name}
                </Link>
              </td>
            </tr>
          ))}
        </tbody>
      </S.ResultTable>
    </S.Container>
  );
}

InputSearch.defaultProps = {
  size: '',
};

InputSearch.propTypes = {
  size: PropTypes.string,
};
