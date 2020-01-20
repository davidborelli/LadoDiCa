import React from 'react';
import * as S from './styles';

export default function Category() {
  return (
    <S.Content>
      <S.Bar>
        <ul>
          <S.Link bottonLine="#F0A2A4" href="http://localhost">
            <li>Meninas</li>
          </S.Link>
          <S.Link bottonLine="#6EC4AB" href="http://localhost">
            <li>Meninos</li>
          </S.Link>
          <S.Link bottonLine="#F2C18D" href="http://localhost">
            <li>Bebês</li>
          </S.Link>
          <S.Link bottonLine="#F7D798" href="http://localhost">
            <li>Acessórios</li>
          </S.Link>
          <S.Link bottonLine="#357B92" href="http://localhost">
            <li>Marcas</li>
          </S.Link>
        </ul>
      </S.Bar>
    </S.Content>
  );
}
