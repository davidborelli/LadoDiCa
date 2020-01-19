import styled from 'styled-components';

export const Container = styled.div`
  background: #fff;

  max-width: 900px;
  margin: 10px auto;
`;

export const ProductList = styled.ul`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 20px;
  list-style: none;
  margin: 10px;

  li {
    display: flex;
    flex-direction: column;
    background: #fff;
    padding: 20px;

    border: 1px solid #f4f5f7;
    border-radius: 5px;

    transition: all 0.2s;

    &:hover {
      border: 1px solid rgba(0, 0, 0, 0.3);
    }

    img {
      align-self: center;
      max-width: 250px;
      border-radius: 5px;
    }

    > strong {
      font-size: 16px;
      line-height: 20px;
      color: #333;
      margin-top: 5px;
    }

    > span {
      font-size: 21px;
      font-weight: bold;
      margin: 5px 0 20px;
    }
  }
`;
