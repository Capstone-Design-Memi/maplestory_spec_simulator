import React, { useEffect, useState } from "react";
import CharaterList from "../Component/SelectCharacter/CharaterList";
import { Col } from "antd";
import CreateCharacter from "./CreateCharacter";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { useCookies } from "react-cookie";
import CharacterStat from "../Component/SelectCharacter/CharacterStat";
import {
  ButtonRow,
  CharacterListRow,
  CRButton,
  Background,
  CharacterSel,
} from "../Style/CharacterSelectStyle";

const SelectCharacter = () => {
  const [cookies, setCookie, removeCookie] = useCookies();
  const [toggle, setToggle] = useState(false);
  const navigator = useNavigate();

  return (
    <Background>
      <CharacterSel>
        ⎷ 캐릭터 선택 <br /> CHARACTER SELECT
      </CharacterSel>
      <CharacterListRow>
        <Col xs={18} md={18}>
          <CharaterList toggle={toggle} />
        </Col>
        <Col xs={6} md={6}>
          <CharacterStat />
        </Col>
      </CharacterListRow>
      <ButtonRow
        style={{
          height: "3.3rem",
          textAlign: "center",
        }}
      >
        <Col xs={24} md={24}>
          <CRButton
            onClick={() => {
              navigator(`/createcharacter`);
            }}
          >
            + 캐릭터 생성
          </CRButton>
          <CRButton
            onClick={() => {
              if (cookies.cId !== undefined) {
                removeCookie(`testChInfo${cookies.cId.cId}`);
                localStorage.removeItem(`testChItem${cookies.cId.cId}`);
                localStorage.removeItem(`InventoryItem${cookies.cId.cId}`);
                removeCookie(`cId`);
              } else {
                alert("캐릭터를 클릭해주세요");
              }
            }}
          >
            X 캐릭터 삭제
          </CRButton>
        </Col>
      </ButtonRow>
    </Background>
  );
};

export default SelectCharacter;
