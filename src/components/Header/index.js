import React from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

import { MdLocalGroceryStore as Icon } from 'react-icons/md';
import * as S from './styles';
import Logo from '~/assets/logo2.png';

export default function Header() {
  const amount = useSelector(state => state.cart.items.length);

  return (
    <S.Container>
      <S.Content>
        <nav>
          <Link to="/">
            <img src={Logo} alt="Logo Ladodicá" />
          </Link>
        </nav>

        <aside>
          <input type="text" placeholder="Pesquisa..." />
          <Link to="/cart">
            <Icon size={26} color="#fff" />
            <span>Minha Cesta</span>
            <span>{amount || 0}</span>
          </Link>
        </aside>
      </S.Content>
    </S.Container>
  );
}
