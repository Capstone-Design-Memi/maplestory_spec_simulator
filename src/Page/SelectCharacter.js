import React, { useEffect, useState } from "react";
import CharaterList from "../Component/SelectCharacter/CharaterList";
import { Button, Radio } from "antd";
import CreateCharacter from "./CreateCharacter";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { useCookies } from "react-cookie";

const SelectCharacter = () => {
  const [cookies, setcookie, removecookie] = useCookies();
  const [toggle, setToggle] = useState(false);
  const navigator = useNavigate();

  return (
    <div>
      <Button
        onClick={() => {
          navigator("/createcharacter");
        }}
      >
        캐릭터 생성
      </Button>
      <Radio.Group
        value={toggle}
        onChange={(e) => {
          setToggle(e.target.value);
        }}
      >
        <Radio value={false}>선택</Radio>
        <Radio value={true}>삭제</Radio>
      </Radio.Group>
      <h2>캐릭터 선택</h2>
      <CharaterList toggle={toggle} />
    </div>
  );
};

export default SelectCharacter;
