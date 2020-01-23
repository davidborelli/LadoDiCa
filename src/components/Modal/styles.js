import styled from 'styled-components';

export const Container = styled.div`
  z-index: 2;
  position: fixed;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  background: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-content: center;
  background: #fff;
  border-radius: 5px;
  box-shadow: 0 2px 10px 0 rgba(0, 0, 0, 0.2);
  padding: 40px;
  width: ${props => (props.size === 'big' ? 900 : 600)}px;

  h1 {
    font-size: 26px;
    font-weight: 500;
    text-align: center;
    margin: 0 0 10px;
  }
`;

export const Button = styled.button`
  margin-top: 20px;
  width: 100%;
  height: 37px;
  background: #74b667;
  color: #fff;
  font-weight: bold;
  border-radius: 3px;
  font-style: italic;
`;
