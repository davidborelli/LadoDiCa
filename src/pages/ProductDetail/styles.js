import styled from 'styled-components';

export const Container = styled.div`
  max-width: 900px;
  margin: 0 auto;
  flex-direction: column;
`;

export const ProductHeader = styled.div`
  display: flex;
`;

export const Pic = styled.div`
  display: flex;
  flex-direction: column;

  div.big-pic {
    width: 500px;
    height: 360px;
    border: 1px solid #f3f3f3;
    border-radius: 3px;

    img {
      width: 100%;
      height: 100%;
    }
  }

  div.pic-detail {
    display: flex;

    div {
      width: 107px;
      height: 72px;
      margin: 10px 8px 0 0;

      border: 1px solid #f3f3f3;

      &:hover {
        cursor: pointer;
        border: 1px solid #999;
      }

      img {
        width: 100%;
        height: 100%;
      }
    }
  }
`;

export const InfoProductsToBuy = styled.div`
  display: flex;
  flex-direction: column;
  border: 1px solid #f3f3f3;
  margin-left: 15px;

  width: 100%;
  border-radius: 3px;
  padding: 15px;
  height: 100%;
  position: relative;

  h1 {
    margin: 0;
    padding: 0;
    color: #333;
    font-size: 19px;
    font-weight: 600;
    line-height: 27px;
    text-transform: none;
  }

  div.price-detail {
    display: flex;
    font-size: 12px;
    justify-content: space-between;
    margin: 30px 0;
    padding: 0 30px;

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

  div.sizes {
    display: flex;
    flex-direction: column;
    margin-bottom: 20px;

    div.size-hosen {
      display: flex;
      background: #f3f3f3;
      height: 47px;
      align-items: center;
      padding: 10px;
      font-size: 12px;
      font-weight: 600;
    }

    div.size-to-Choose {
      border: 3px solid #f3f3f3;
      padding: 15px 5px;

      span {
        margin: 0 5px 0 0;
        padding: 5px 12px;
        border: 1px solid #f3f3f3;
        font-weight: 600;
        border-radius: 2px;
        position: relative;

        &::after {
          content: '';
          width: 100%;
          height: 2px;
          position: absolute;
          bottom: 0;
          left: 0;
          background: #999;
        }

        &:hover {
          cursor: pointer;
          border: 1px solid #999;
        }
      }
    }
  }

  button {
    display: flex;
    align-items: center;
    justify-content: center;
    color: #fff;
    padding: 10px;
    font-size: 18px;
    font-weight: bold;
    margin: 10px 0;

    background: #74b667;
    border-radius: 3px;

    svg {
      margin-left: 10px;
    }
  }

  &::after {
    content: '';
    width: 100%;
    height: 3px;
    position: absolute;
    bottom: 0;
    left: 0;
    background: #f0a2a4;
  }
`;

export const ProductDetail = styled.div`
  display: flex;
  flex-direction: column;

  margin: 20px 0;

  h2 {
    border-bottom: 1px solid #f3f3f3;
    font-size: 24px;
    color: #464646;
    font-weight: 200;
    padding-bottom: 5px;
  }

  div.text-detail {
    font-size: 16px;
    margin: 20px 0;
  }
`;
