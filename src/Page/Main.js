import { Col, Row } from "antd";
import React, { useContext, useEffect, useState } from "react";
import ItemList from "../Component/Item/ItemList";
import EquipmentInventory from "../Component/EquipmentInventory/EquipmentInventory";
import StatInformation from "../Component/Stat/StatInformation";
import { Setting_Unions_Button } from "../Component/Buttons/Setting_Union_Button";
import { AppContext } from "../App";
import { useNavigate } from "react-router-dom";
import { useCookies } from "react-cookie";
import LocalStorageContextProvider from "../Context/LocalStorageContext";

const Main = () => {
  const [cookies] = useCookies();
  const [dragDrop, setDragDrop] = useState();
  const [dragDropSuccess, setDragDropSuccess] = useState(false);
  const navigator = useNavigate();
  useEffect(() => {
    if (cookies.cId === undefined) {
      navigator("/");
    }
  }, []);
  return (
    <div>
      <LocalStorageContextProvider>
      <Row style={{border: "1px solid red"}}>
        <Col>
          <Setting_Unions_Button />
        </Col>
        <Col>
          <EquipmentInventory dragDrop={dragDrop} setDragDrop={setDragDrop} />
        </Col>
        <Col style={{border: "1px solid green"}}>
          <StatInformation />
        </Col>
      </Row>
      <Row>
        <Col>
          <ItemList dragDrop={dragDrop} setDragDrop={setDragDrop} />
        </Col>
        <Col>
        </Col>
        <Col>
        </Col>
      </Row>
      </LocalStorageContextProvider>
    </div>
  );
};

export default Main;
