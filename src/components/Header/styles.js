import styled from 'styled-components';
import Painel from '~/assets/painel.jpg';

export const Container = styled.div`
  padding: 0 30px;
  background: url(${Painel}) repeat-x top center;
  height: 170px;

  -webkit-background-size: cover;
  -moz-background-size: cover;
  -o-background-size: cover;
  background-size: cover;
`;

export const Content = styled.div`
  max-width: 900px;
  margin: 0 auto;

  display: flex;
  justify-content: space-between;
  align-items: baseline;

  nav {
    display: flex;
    align-items: center;

    img {
      padding-top: 10px;
      width: 170px;
      height: 150px;
    }
  }

  input {
    height: 40px;
    width: 400px;
    border: 1px solid #e3e3e3;
    border-radius: 3px;
    padding: 15px;
    color: #999;
    margin-right: 10px;

    &::placeholder {
      color: #e3e3e3;
    }
  }

  aside {
    display: flex;
    align-items: center;

    a {
      display: flex;
      align-items: center;
      justify-content: space-between;
      padding: 0 10px;

      height: 40px;
      width: 150px;
      background: #4d9a9b;
      border-radius: 3px;

      span {
        color: #fff;
        font-weight: bold;
      }

      span:last-child {
        font-size: 16px;
      }
    }
  }
`;
