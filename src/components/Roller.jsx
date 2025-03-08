import React, { useState } from "react";
import styled from "styled-components";

function Roller({
  randomNum,
  setrandomNum,
  resetHandler,
  setIsStarted,
  selectedNum,
}) {
  const dicesImg = [
    {
      img1: "/dices/dice_1.png",
      img2: "/dices/dice_2.png",
      img3: "/dices/dice_3.png",
      img4: "/dices/dice_4.png",
      img5: "/dices/dice_5.png",
      img6: "/dices/dice_6.png",
    },
  ];

  const handleRoller = function () {
    var ranNum = Math.floor(Math.random() * 6) + 1;
    setrandomNum(ranNum);
  };

  return (
    <Imgdiv>
      <div onClick={handleRoller}>
        <img src={dicesImg[0][`img${randomNum}`]} alt="" />
      </div>
      <p>Click on the dice to play</p>
      <button onClick={resetHandler}>Reset Score</button>
      <button onClick={() => setIsStarted(false)}>Back to the main page</button>
      {selectedNum && (
        <Msg style={{ color: "green" }}>
          {randomNum === selectedNum && "Congratulations ! it's match"}
        </Msg>
      )}
    </Imgdiv>
  );
}

export default Roller;

const Imgdiv = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  margin-top: 120px;
  position: relative;
  gap: 20px;
  img {
    width: 250px;
  }

  p {
    font-size: 19px;
    font-weight: 600;
  }

  button {
    padding: 6px 7px;
    border-radius: 10px;
    background-color: white;
    color: black;
    border: 2px solid black;
    font-weight: 700;
    width: 190px;

    &:hover {
      transform: scale(0.9);
    }
  }
`;

const Msg = styled.p`
  position: absolute;
  right: 10px;
  bottom: 0;
`;
