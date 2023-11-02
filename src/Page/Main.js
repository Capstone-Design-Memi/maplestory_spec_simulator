import { Col, Row } from "antd";
import React, { useContext, useEffect } from "react";
import ItemList from "../Component/Item/ItemList";
import StatWindow from "../Component/Stat/StatWindow";
import EquipmentInventory from "../Component/EquipmentInventory/EquipmentInventory";
import { AppContext } from "../App";
import { useNavigate } from "react-router-dom";
import { useCookies } from "react-cookie";

const Main = () => {
  const [cookies] = useCookies();
  const navigator = useNavigate();
  useEffect(() => {
    if (cookies.cId === undefined) {
      navigator("/");
    }
  }, []);
  return (
    <div>
      <h2>메인</h2>
      <Row>
        <Col>
          <EquipmentInventory />
        </Col>
        <Col>
          <ItemList />
        </Col>
        {/* <Col>
          <StatWindow />
        </Col> */}
      </Row>
    </div>
  );
};

export default Main;
