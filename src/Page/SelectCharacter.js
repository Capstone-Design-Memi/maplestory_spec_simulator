import React, { useEffect, useState } from "react";
import CharaterList from "../Component/SelectCharacter/CharaterList";
import { Button, Col, Radio, Row } from "antd";
import CreateCharacter from "./CreateCharacter";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { useCookies } from "react-cookie";

const SelectCharacter = () => {
  const [cookies, setcookie, removecookie] = useCookies();
  const [toggle, setToggle] = useState(false);
  const navigator = useNavigate();

  return (
    <div
      style={{
        backgroundImage:
          "url(../../assets/maplestory_character_select_menu_by_pixel_rydol_de9aaup-fullview.jpg)",
        height: "120vh",
        backgroundRepeat: " no-repeat",
        backgroundSize: "cover",
      }}
    >
      <Row style={{ transform: "translateY(25rem)", height: "34rem" }}>
        <Col xs={18} md={18}>
          <CharaterList toggle={toggle} />
        </Col>
        <Col xs={6} md={6}>
          <div>캐릭터 스텟 및 선택버튼</div>
        </Col>
      </Row>
      <Row style={{ transform: "translateY(25rem)", height: "13.3rem" }}>
        <Col xs={24} md={24}>
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
        </Col>
      </Row>
    </div>
  );
};

export default SelectCharacter;
