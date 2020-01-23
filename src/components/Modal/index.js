import React from 'react';
import PropTypes from 'prop-types';

import * as S from './styles';

function Modal({ children, size, fnOnClose }) {
  return (
    <S.Container>
      <S.Content size={size}>
        {children}
        <S.Button onClick={fnOnClose}>Continuar para o site</S.Button>
      </S.Content>
    </S.Container>
  );
}

Modal.defaultProps = {
  size: 'default',
};

Modal.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.element,
    PropTypes.arrayOf(PropTypes.element),
  ]).isRequired,
  size: PropTypes.string,
  fnOnClose: PropTypes.func.isRequired,
};

export default Modal;
