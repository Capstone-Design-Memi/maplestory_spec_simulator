import { Col, Row } from "antd";
import React from "react";
import ItemList from "../Component/Item/ItemList";
import StatWindow from "../Component/Stat/StatWindow";
import EquipmentInventory from "../Component/EquipmentInventory/EquipmentInventory";

const Main = () => {
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
