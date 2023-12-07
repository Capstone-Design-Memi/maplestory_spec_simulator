import React from "react";
import styled from "styled-components";
import { useState, useEffect } from "react";
import { Button } from "antd";

export const StarforceButton = styled(Button)`
  height: auto;
`;

const StarforceTab = ({
  item,
  extraInfo,
  onAddStar,
  onSubStar,
  star,
  onAdd10Star,
  onSub10Star,
}) => {
  const [mouseHoverMTen, setMouseHoverMTen] = useState(false);
  const [mouseHoverMOne, setMouseHoverMOne] = useState(false);
  const [mouseHoverPOne, setMouseHoverPOne] = useState(false);
  const [mouseHoverPTen, setMouseHoverPTen] = useState(false);
  let disableSub = false;
  let disableAdd = false;
  let disable10Sub = false;
  let disable10Add = false;

  if (star <= 0) {
    disableSub = true;
  }
  if (star >= extraInfo.maxStar) {
    disableAdd = true;
  }
  if (star < 10) {
    disable10Sub = true;
  }
  if (star + 10 > extraInfo.maxStar) {
    disable10Add = true;
  }
  return (
    <div>
      <div>
        <StarforceButton
          htmlType="button"
          onClick={onSub10Star}
          disabled={disable10Sub}
          onMouseOver={() => {
            setMouseHoverMTen(true);
          }}
          onMouseLeave={() => {
            setMouseHoverMTen(false);
          }}
          style={{
            backgroundColor: `${mouseHoverMTen ? "red" : "white"}`,
            textAlign: "center",
            color: `${mouseHoverMTen ? "white" : "red"}`,
            margin: "4px",
            borderColor: "red",
            width: "100px",
            padding: "20px",
          }}
        >
          -10
        </StarforceButton>
        <StarforceButton
          htmlType="button"
          onClick={() => {
            onSubStar();
          }}
          disabled={disableSub}
          onMouseOver={() => {
            setMouseHoverMOne(true);
          }}
          onMouseLeave={() => {
            setMouseHoverMOne(false);
          }}
          style={{
            backgroundColor: `${mouseHoverMOne ? "red" : "white"}`,
            textAlign: "center",
            justifyItems: "center",
            color: `${mouseHoverMOne ? "white" : "red"}`,
            margin: "4px",
            borderColor: "red",
            width: "100px",
            padding: "20px",
          }}
        >
          -1
        </StarforceButton>
        <span
          style={{
            margin: "4px",
            width: "70px",
            padding: "20px",
            textAlign: "center",
          }}
        >
          {star}
        </span>
        <StarforceButton
          htmlType="button"
          onClick={() => {
            onAddStar();
          }}
          disabled={disableAdd}
          onMouseOver={() => {
            setMouseHoverPOne(true);
          }}
          onMouseLeave={() => {
            setMouseHoverPOne(false);
          }}
          style={{
            backgroundColor: `${mouseHoverPOne ? "blue" : "white"}`,
            textAlign: "center",
            color: `${mouseHoverPOne ? "white" : "blue"}`,
            margin: "4px",
            borderColor: "blue",
            width: "100px",
            padding: "20px",
          }}
        >
          +1
        </StarforceButton>
        <StarforceButton
          htmlType="button"
          onClick={onAdd10Star}
          disabled={disable10Add}
          onMouseOver={() => {
            setMouseHoverPTen(true);
          }}
          onMouseLeave={() => {
            setMouseHoverPTen(false);
          }}
          style={{
            backgroundColor: `${mouseHoverPTen ? "blue" : "white"}`,
            textAlign: "center",
            color: `${mouseHoverPTen ? "white" : "blue"}`,
            margin: "4px",
            borderColor: "blue",
            width: "100px",
            padding: "20px",
          }}
        >
          +10
        </StarforceButton>
      </div>
      <br />
    </div>
  );
};

export default StarforceTab;
