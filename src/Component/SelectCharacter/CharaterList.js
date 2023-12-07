import React from "react";
import CharacterItem from "./CharacterItem";

const CharaterList = ({ toggle }) => {
  return (
    <div style={{ marginLeft: "-200px", marginTop: "1.5vh" }}>
      <CharacterItem toggle={toggle} />
    </div>
  );
};

export default CharaterList;
