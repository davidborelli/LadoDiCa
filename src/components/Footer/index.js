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
              <a href={link.url} rel="noopener noreferrer" target="_blank">
                <div className={link.label} key={link.label}>
                  <Icon size={30} color="#E4D4BB" />
                  {link.text ? link.text : ''}
                </div>
              </a>
            );
          })}
        </div>
      </S.Content>
    </S.Container>
  );
}
