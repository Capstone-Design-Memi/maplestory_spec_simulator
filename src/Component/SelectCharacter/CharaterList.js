import React from "react";
import CharacterItem from "./CharacterItem";
import { Button } from "antd";

const CharaterList = ({ toggle }) => {
  return (
    <div style={{ marginLeft: "30vh" }}>
      <CharacterItem toggle={toggle} />
    </div>
  );
};

export default CharaterList;
