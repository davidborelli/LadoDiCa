import React from 'react';

import { MdLocalGroceryStore as Icon } from 'react-icons/md';
import * as S from './styles';
import Logo from '~/assets/logo2.png';

export default function Header() {
  return (
    <S.Container>
      <S.Content>
        <nav>
          <a href="/">
            <img src={Logo} alt="Logo Ladodicá" />
          </a>
        </nav>

        <aside>
          <input type="text" placeholder="Pesquisa..." />
          <a href="http://localhost:3000">
            <Icon size={26} color="#fff" />
            <span>Minha Cesta</span>
            <span>10</span>
          </a>
        </aside>
      </S.Content>
    </S.Container>
  );
}
