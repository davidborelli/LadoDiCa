import styled from 'styled-components';

export const Container = styled.div`
  max-width: 900px;
  margin: 0 auto;

  div.check-container {
    display: flex;
    justify-content: center;
    align-content: center;

    div.check-img {
      width: 120px;
    }

    div.check-text {
      border-left: 2px solid #f4f4f4;
      display: flex;
      flex-direction: column;
      align-content: center;
      justify-content: center;
      width: 500px;

      p {
        text-align: center;
      }
    }
  }
`;

export const Header = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  color: #333333;

  border-bottom: 2px solid #faf7f7;
  padding-bottom: 5px;

  h1 {
    font-style: italic;
    font-size: 28px;
    font-weight: 100;

    span {
      font-weight: 100;
      font-size: 21px;
      color: #ddd;
    }
  }

  button {
    width: 140px;
    height: 47px;
    background: #74b667;
    color: #fff;
    font-weight: bold;
    border-radius: 7px;
    font-style: italic;
  }
`;

export const CartBody = styled.div`
  background: #faf7f7;
`;

export const ProductTable = styled.table`
  margin-top: 10px;
  width: 100%;
  background: #faf7f7;
  border-collapse: collapse;
  border: 1px solid #1111;

  thead th {
    &:first-child {
      text-align: left;
    }

    color: #333;
    text-align: center;
    padding: 12px;
  }

  tbody tr {
    td {
      padding: 12px;
      border-bottom: 1px solid #eee;
      background: #fff;
      text-align: center;

      input {
        border: 1px solid #ddd;
        border-radius: 4px;
        color: #666;
        width: 50px;
        height: 40px;
        text-align: center;
      }

      > div {
        display: flex;
        align-items: center;

        button {
          background: transparent;
          border: none;
        }

        > div {
          display: flex;
          flex-direction: column;
          align-items: center;

          button {
            background: transparent;
            border: none;
          }
        }
      }
    }

    td.description {
      text-align: left;
    }
  }

  img {
    height: 90px;
  }
`;

export const CartFooter = styled.div`
  display: flex;
  padding: 15px;
  justify-content: space-between;
  border: 1px solid #1111;

  div.coupon {
    padding: 15px;
    display: flex;
    flex-direction: column;
    flex-grow: 1;

    > span {
      margin-bottom: 10px;
    }

    > div {
      display: flex;
      flex-direction: column;
      font-weight: bold;

      > span {
        margin-bottom: 10px;
      }

      > input {
        width: 200px;
        height: 30px;
        border-radius: 5px;
        border: 1px solid #ddd;
        margin-bottom: 10px;
        padding: 5px;
      }

      > button {
        width: 110px;
        height: 37px;
        background: #74b667;
        color: #fff;
        font-weight: bold;
        border-radius: 7px;
        font-style: italic;
      }
    }
  }

  div.totals {
    display: flex;
    flex-direction: column;
    color: #333;
    flex-grow: 1;

    hr {
      border: 0.5px solid #ddd;
    }

    span.subtotal {
      height: 30px;
      border: 5px 0;
      padding: 5px;
      text-align: right;
      margin: 10px 0;

      > span {
        margin-left: 15px;
      }
    }

    span.grand-total {
      height: 30px;
      border: 5px 0;
      padding: 5px;
      text-align: right;
      margin: 10px 0;
      font-size: 16px;

      strong {
        margin-left: 15px;
      }
    }
  }
`;

export const PageFooter = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  margin-top: 20px;

  a.continue-buy {
    display: flex;
    align-items: center;
    justify-content: center;
    height: 30px;
    width: 180px;
    border-radius: 5px;
    background: #faf7f7;
    color: inherit;
    border: 1px solid #1111;
  }

  button.finish-buy {
    width: 140px;
    height: 47px;
    background: #74b667;
    color: #fff;
    font-weight: bold;
    border-radius: 7px;
    font-style: italic;
  }
`;

export const Discount = styled.div`
  display: ${props => (props.hidden ? 'none' : null)};
  height: 30px;
  border: 5px 0;
  padding: 5px;
  text-align: right;
  margin: 10px 0;
  color: #f79ea2;

  > span {
    margin-left: 15px;
  }
`;
