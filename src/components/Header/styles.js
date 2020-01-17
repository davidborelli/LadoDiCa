import styled from 'styled-components';

export const Container = styled.div`
  background: #fff;
  padding: 0 30px;
  border-bottom: 1px solid #fff2f4;
`;

export const Content = styled.div`
  height: 90px;
  max-width: 900px;
  margin: 0 auto;

  display: flex;
  justify-content: space-between;
  align-items: center;

  nav {
    display: flex;
    align-items: center;

    img {
      width: 85px;
      height: 65px;
    }
  }

  input {
    height: 40px;
    width: 200pxpx;
    border: 1px solid #9999;
    border-radius: 10px;
    padding: 15px;
    color: rgba(0, 0, 0, 0.6);
    margin-right: 10px;

    &::placeholder {
      color: rgba(0, 0, 0, 0.2);
    }
  }

  aside {
    display: flex;
    align-items: center;
  }
`;
