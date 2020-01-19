import React from 'react';

import links from './content';
import Icons from './icons';

import * as S from './styles';

export default function Footer() {
  return (
    <S.Container>
      <S.Content>
        <span> ENCONTRE-NOS AQUI</span>
        <div className="social-medias">
          {links.map(link => {
            const Icon = Icons[link.label];

            return (
              <div className={link.label} key={link.name}>
                <a href={link.url}>
                  <Icon size={30} color="#E4D4BB" />
                </a>
                {link.text ? link.text : ''}
              </div>
            );
          })}
        </div>
      </S.Content>
    </S.Container>
  );
}
