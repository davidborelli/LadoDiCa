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
  margin: 10px 0;

  border-top: 1px solid #f4f5f7;
  padding-top: 10px;

  li {
    display: flex;
    flex-direction: column;
    background: #fff;
    padding: 20px;

    border: 1px solid #f4f5f7;
    border-radius: 5px;

    transition: border 0.5s;

    a {
      text-decoration: none;
      color: inherit;
    }

    &:hover {
      border: 1px solid rgba(0, 0, 0, 0.3);
    }

    img {
      align-self: center;
      max-width: 240px;
      border-radius: 5px;
    }

    > strong {
      text-align: center;
      font-size: 14px;
      line-height: 20px;
      color: #333;
      margin-top: 5px;
    }

    div.card-footer {
      display: flex;
      font-size: 12px;
      justify-content: space-between;
      margin-top: 20px;

      div.price {
        display: flex;
        flex-direction: column;
        align-items: center;
        margin: 0 5px;

        span.original-price {
          color: #444;
          text-decoration: line-through;
        }

        span.current-price {
          margin: 7px 0;

          strong {
            font-size: 16px;
          }
        }
      }

      div.division {
        display: flex;
        flex-direction: column;
        align-items: center;
        color: #888;
      }

      div.card {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        margin: 0 5px;

        span.card-price {
          font-size: 16px;
          margin: 5px 0;
        }
      }
    }

    button {
      display: flex;
      align-items: center;
      justify-content: space-between;
      color: #fff;
      padding: 5px;
      font-size: 14px;
      font-weight: bold;
      margin: 10px 0;

      height: 40px;
      background: #4d9a9b;
      border-radius: 3px;

      div {
        display: flex;
        align-items: center;
        padding: 5px;
        background: rgba(0, 0, 0, 0.1);
        border-radius: 3px;

        svg {
          margin-right: 5px;
        }
      }

      span {
        flex: 1;
        text-align: center;
        font-weight: bold;
      }
    }
  }
`;
