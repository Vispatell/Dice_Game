import React, { useEffect, useState } from "react";
import styled from "styled-components";

function Score({ selectedNum, randomNum, score, setScore }) {
 
  useEffect(() => {
    if (selectedNum === randomNum) {
      setScore((prev) => prev + 1);
    }
  }, [selectedNum, randomNum]);

  return (
    <ScoreContainer>
      <h1>{score}</h1>
      <p>Total Score</p>
    </ScoreContainer>
  );
}

export default Score;

const ScoreContainer = styled.div`
  h1 {
    font-size: 85px;
    line-height: 100px;
  }
  p {
    font-size: 24px;
    line-height: 10px;
    font-weight: 500;
  }
  max-width: 200px;
  text-align: center;
`;
