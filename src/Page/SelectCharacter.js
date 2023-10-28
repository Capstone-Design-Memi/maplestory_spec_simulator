import React, { useEffect, useState } from "react";
import CharaterList from "../Component/SelectCharacter/CharaterList";
import { Button, Col, Radio, Row } from "antd";
import CreateCharacter from "./CreateCharacter";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { useCookies } from "react-cookie";
import CharacterStat from "../Component/SelectCharacter/CharacterStat";

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
          <CharacterStat />
        </Col>
      </Row>
      <Row
        style={{
          transform: "translateY(25rem)",
          height: "13.3rem",
          textAlign: "center",
        }}
      >
        <Col xs={24} md={24}>
          <Button
            style={{
              color: "#F2C12E",
              fontSize: "25px",
              fontWeight: "bold",
              backgroundColor: "#705545",
              width: "20vh",
              height: "7vh",
              borderRadius: "30px",
              border: "1px solid #705545",
              marginLeft: "-30px",
              cursor: "pointer",
            }}
            onClick={() => {
              navigator(`/createcharacter`);
            }}
          >
            + 캐릭터 생성
          </Button>
          <Button
            style={{
              color: "#F2C12E",
              fontSize: "25px",
              fontWeight: "bold",
              backgroundColor: "#705545",
              width: "20vh",
              height: "7vh",
              borderRadius: "30px",
              border: "1px solid #705545",
              marginLeft: "30px",
              cursor: "pointer",
            }}
          >
            X 캐릭터 삭제
          </Button>
        </Col>
      </Row>
    </div>
  );
};

export default SelectCharacter;
