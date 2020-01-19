import styled from 'styled-components';
import Painel from '~/assets/painel.jpg';

export const Container = styled.div`
  padding: 0 30px;
  /* border-bottom: 1px solid #e5afb4; */
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
      width: 180px;
      height: 150px;
    }
  }

  input {
    height: 40px;
    width: 200px;
    border: 1px solid #e5afb4;
    border-radius: 10px;
    padding: 15px;
    color: #e5afb4;
    margin-right: 10px;

    &::placeholder {
      color: #e5afb4;
    }
  }

  aside {
    display: flex;
    align-items: center;

    a {
      color: red;

      span {
        display: flex;
        justify-content: center;
        align-items: center;

        text-decoration: none;
        background: #888;
        border-radius: 50%;
        width: 15px;
        height: 15px;
        font-size: 12px;
        position: absolute;
        margin-top: -40px;
        margin-left: 18px;
      }
    }
  }
`;
