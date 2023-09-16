import { Col, Row } from "antd";
import React from "react";
import ItemList from "../Component/Item/ItemList";
import StatWindow from "../Component/Stat/StatWindow";

const Main = () => {
  return (
    <div>
      <h2>메인</h2>
      <StatWindow />
      <ItemList />
    </div>
  );
};

export default Main;
