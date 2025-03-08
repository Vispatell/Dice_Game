import React from "react";
import styled from "styled-components";

function StartGame({ handler }) {
  return (
    <Container>
      <img src="/images/dices.png" />
      <Content>
        <h1>Dice Game</h1>
        <Button onClick={handler}>Play Now</Button>
      </Content>
    </Container>
  );
}

export default StartGame;

const Container = styled.div`
  max-width: 1180px;
  display: flex;
  align-items: center;
  margin: 0 auto;
  justify-content: space-around;
  height: 100vh;
`;

const Button = styled.button`
  background: #000;
  color: white;
  padding: 10px 18px;
  border: none;
  border-radius: 10px;
  font-size: 15px;
  font-weight: 700;
  margin-top: 5px;
  border: 1px solid transparent;
  transition: all 0.1s ease-in;

  &:hover {
    background: white;
    border: 1px solid black;
    color: black;
    transition: all 0.1s ease-in;
    transform: scale(0.95);
  }
`;

const Content = styled.div`
  h1 {
    font-size: 80px;
    font-weight: bolder;
  }
`;
