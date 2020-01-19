import styled from 'styled-components';

export const Container = styled.footer`
  height: 150px;
  width: 100%;
  background: #e4d4bb;
  padding-top: 50px;
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;

  max-width: 900px;
  margin: 0 auto;

  span {
    display: block;
    font-weight: bold;
    color: #fff;
  }

  div.social-medias {
    display: flex;
    flex-direction: row;

    div {
      display: flex;
      align-items: center;
      justify-content: center;

      background: #fff;
      border-radius: 50%;

      width: 40px;
      height: 40px;
      margin: 5px 5px 0 0;
    }

    div.Whatsapp {
      display: flex;
      justify-content: center;

      border-radius: 30px;
      width: 150px;
      font-weight: bold;
      color: #e4d4bb;
    }
  }
`;
