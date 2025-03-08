import React, { useState } from "react";
import Score from "./Score";
import Selector from "./Selector";
import styled from "styled-components";
import Roller from "./Roller";

function PlayGame({ setIsStarted }) {
  const [selectedNum, setselectedNum] = useState();
  const [randomNum, setrandomNum] = useState(1);
  const [score, setScore] = useState(0);

  const resetHandler = function () {
    setScore(0);
    setselectedNum();
  };

  return (
    <>
      <Main>
        <Score
          randomNum={randomNum}
          selectedNum={selectedNum}
          score={score}
          setScore={setScore}
        />
        <Selector selectedNum={selectedNum} setselectedNum={setselectedNum} />
      </Main>
      <Roller
        randomNum={randomNum}
        setrandomNum={setrandomNum}
        selectedNum={selectedNum}
        resetHandler={resetHandler}
        setIsStarted={setIsStarted}
      />
    </>
  );
}

export default PlayGame;

const Main = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 10px 15px;
`;
