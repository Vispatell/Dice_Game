import React from "react";
import styled from "styled-components";

function Selector({ selectedNum, setselectedNum }) {
  const SelectionArray = [1, 2, 3, 4, 5, 6];

  return (
    <Div>
      <Boxdiv>
        {SelectionArray.map((num, i) => (
          <Box
            style={{
              backgroundColor: num === selectedNum ? "black" : "white",
              color: num === selectedNum ? "white" : "black",
            }}
            key={i}
            onClick={() => setselectedNum(num)}
          >
            {num}
          </Box>
        ))}
      </Boxdiv>
      <p>Select the Number 👆</p>
    </Div>
  );
}

export default Selector;

const Box = styled.div`
  width: 54px;
  height: 54px;
  color: black;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: 900;
  border: 2px solid black;
  font-size: 25px;
  background-color: white;
`;

const Div = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: start;
  gap: 5px;

  p {
    font-size: 17px;
    font-weight: 600;
  }
`;

const Boxdiv = styled.div`
  display: flex;
  align-items: center;
  gap: 15px;
`;
