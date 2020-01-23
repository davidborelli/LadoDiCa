import styled from 'styled-components';

export const Container = styled.div`
  z-index: 1;
  width: 400px;
`;

export const Input = styled.input`
  height: 40px;
  width: 100%;
  border: 1px solid #e3e3e3;
  border-radius: 10px;
  padding: 15px;
  color: #999;
  margin-right: 10px;

  &::placeholder {
    color: #e3e3e3;
  }
`;

export const ResultTable = styled.table`
  width: 100%;
  border-collapse: collapse;
  padding: 5px;
  background: #f3f3f3;
  display: ${props => (props.hidden ? 'none' : null)};
  border-radius: 10px;

  /* &:not(:active) {
    display: none;
  } */

  tbody {
    padding: 5px;
    tr {
      height: 30px;
      padding: 10px;

      td a {
        padding: 0 10px;
        color: #333;
      }
    }
  }
`;
