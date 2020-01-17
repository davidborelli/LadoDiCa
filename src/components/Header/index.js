import React from 'react';

import { MdLocalGroceryStore as Icon } from 'react-icons/md';
import * as S from './styles';
import Logo from '~/assets/logo1.png';

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
          <Icon size={26} color="#999" />
        </aside>
      </S.Content>
    </S.Container>
  );
}
