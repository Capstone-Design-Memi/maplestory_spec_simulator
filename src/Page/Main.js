import { Col, Row } from "antd";
import React, { useContext, useEffect } from "react";
import ItemList from "../Component/Item/ItemList";
import StatWindow from "../Component/Stat/StatWindow";
import EquipmentInventory from "../Component/EquipmentInventory/EquipmentInventory";
import StatInformation from "../Component/Stat/StatInformation";
import { Setting_Unions_Button } from "../Component/Buttons/Setting_Union_Button";
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
      <Row>
        <Col>
          <Setting_Unions_Button />
        </Col>
        <Col>
          <EquipmentInventory />
        </Col>
        <Col>
          <ItemList />
        </Col>
        {/* <Col>
          <StatWindow />
        </Col> */}
        <Col>
          <StatInformation />
        </Col>
      </Row>
    </div>
  );
};

export default Main;
