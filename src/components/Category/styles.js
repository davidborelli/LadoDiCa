import styled from 'styled-components';

export const Content = styled.div`
  max-width: 900px;
  margin: 20px auto;
`;

export const Bar = styled.div`
  display: flex;

  ul {
    display: flex;
    width: 100%;
    flex-direction: row;
    list-style: none;
    height: 100%;
  }
`;

export const Link = styled.a`
  display: flex;
  flex-grow: 1;
  width: 100%;
  position: relative;

  color: #8a8a8a;
  height: 30px;
  justify-content: center;
  position: relative;

  &::after {
    content: '';
    width: 100%;
    height: 5px;
    position: absolute;
    bottom: 0;
    left: 0;
    background: ${props => props.bottonLine};
  }
`;
