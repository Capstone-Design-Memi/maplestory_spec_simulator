import React, { useState } from "react";
import CharaterList from "../Component/SelectCharacter/CharaterList";
import { Button } from "antd";
import CreateCharacter from "./CreateCharacter";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";

const SelectCharacter = () => {
  const [toggle, setToggle] = useState(false);
  const navigator = useNavigate();
  return (
    <div>
      <Button
        onClick={() => {
          if (toggle) {
            setToggle(false);
          } else if (!toggle) {
            setToggle(true);
          }
        }}
      >
        캐릭터 삭제
      </Button>
      <Button
        onClick={() => {
          navigator("/createcharacter");
        }}
      >
        캐릭터 생성
      </Button>
      <h2>캐릭터 선택</h2>
      <CharaterList toggle={toggle} />
    </div>
  );
};

export default SelectCharacter;
