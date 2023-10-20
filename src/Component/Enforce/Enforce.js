import React from "react";
import styled from "styled-components";
import { useState, useEffect } from "react";
import ItemStat from "../ItemDetail/ItemStat";
import AccStarForceData from "../../Util/AccStarForceData";
import ArmStarForceData from "../../Util/ArmStarForceData";
import FlameData from "../../Util/flameData";
import StarforceTab from "./StarforceTab";
import FlameTab from "./FlameTab";
import PotentialTab from "./PotentialTab";

const Enforce = ({ enforceItem }) => {
  const accArr = [
    "벨트",
    "귀고리",
    "반지",
    "펜던트",
    "포켓아이템",
    "눈장식",
    "얼굴장식",
    "기계심장",
  ];
  const amrArr = ["모자", "상의", "하의", "신발", "어깨장식", "망토", "장갑"];

  const canFlame = [
    "포켓 아이템",
    "펜던트",
    "벨트",
    "모자",
    "상의",
    "눈장식",
    "얼굴장식",
    "상의",
    "하의",
    "신발",
    "귀고리",
    "어깨장식",
    "장갑",
    "망토",
  ];

  // 힘덱인럭 곱셈배율
  let mainStatMul = [0, 0, 0, 0];
  if (extraInfo.mainStat === "str") {
    mainStatMul[0] = 1;
    mainStatMul[1] = 1;
  } else if (extraInfo.mainStat === "dex") {
    mainStatMul[1] = 1;
    mainStatMul[0] = 1;
  } else if (extraInfo.mainStat === "int") {
    mainStatMul[2] = 1;
    mainStatMul[3] = 1;
  } else if (extraInfo.mainStat === "luk") {
    mainStatMul[3] = 1;
    mainStatMul[1] = 1;
  }

  let category = "";
  for (let i = 0; i < accArr.length; i++) {
    if (item.category === accArr[i]) {
      for (let j = 0; j < AccStarForceData.length; j++) {
        if (extraInfo.reqLev === AccStarForceData[j].reqLev) {
          starForceInfo = AccStarForceData[j];
        }
      }
    }
  }

  for (let i = 0; i < amrArr.length; i++) {
    if (item.category === amrArr[i]) {
      for (let j = 0; j < ArmStarForceData.length; j++) {
        if (extraInfo.reqLev === ArmStarForceData[j].reqLev) {
          starForceInfo = ArmStarForceData[j];
        }
      }
    }
  }

  for (let i = 0; i < canFlame.length; i++) {
    if (item.category === canFlame[i]) {
      for (let j = 0; j < FlameData.length; j++) {
        if (extraInfo.reqLev === FlameData[j].reqLev) {
          flameInfo = FlameData[j];
        }
      }
    }
  }

  const [starHandler, setStarHandler] = useState(enforceItem?.star);
  const [flameHandler, setFlameHandler] = useState(enforceItem?.flame);

  const itemEdit = () => {
    let star = enforceItem.star;
    enforceItem.scroll.str =
      starForceInfo.allStat[star] +
      starForceInfo.mainStat[star] * mainStatMul[0];
    enforceItem.scroll.dex =
      starForceInfo.allStat[star] +
      starForceInfo.mainStat[star] * mainStatMul[1];
    enforceItem.scroll.int =
      starForceInfo.allStat[star] +
      starForceInfo.mainStat[star] * mainStatMul[2];
    enforceItem.scroll.luk =
      starForceInfo.allStat[star] +
      starForceInfo.mainStat[star] * mainStatMul[3];
    enforceItem.scroll.hp = starForceInfo.hp[star];
    enforceItem.scroll.atk = starForceInfo.atk[star];
    enforceItem.scroll.mAtk = starForceInfo.mAtk[star];
    enforceItem.scroll.def = starForceInfo.def[star];
    setStarHandler(star);
  };

  //const handle

  const handleAddStar = () => {
    enforceItem.star++;
    itemEdit();
  };

  const handleSubStar = () => {
    enforceItem.star--;
    itemEdit();
  };

  const handleAdd10Star = () => {
    enforceItem.star = enforceItem.star + 10;
    itemEdit();
  };

  const handleSub10Star = () => {
    enforceItem.star = enforceItem.star - 10;
    itemEdit();
  };

  const handleFlameChange = (sumOfFlame) => {
    item.flame = sumOfFlame;
    setFlameHandler(sumOfFlame);
  };

  const handlePotentialChange = () => {};

  return (
    <div style={{ clear: "both" }}>
      <div style={{ float: "left" }}>
        <ItemStat item={enforceItem} extraInfo={extraInfo} />
      </div>
      <div style={{ float: "left", border: "1px solid lime", width: "250px" }}>
        <StarforceTab
          item={enforceItem}
          extraInfo={extraInfo}
          onAddStar={handleAddStar}
          onSubStar={handleSubStar}
          onAdd10Star={handleAdd10Star}
          onSub10Star={handleSub10Star}
          star={enforceItem?.star}
        />
        <FlameTab flameInfo={flameInfo} handleFlameChange={handleFlameChange} />
        <PotentialTab
          item={enforceItem}
          handlePotentialChange={handlePotentialChange}
        />
      </div>
    </div>
  );
};

export default Enforce;

const extraInfo = {
  maxStar: 25,
  stateChageAmount: 2010914,
  reqLev: 160,
  mainStat: "luk",
};

let flameInfo = {
  ///방어구
  reqLev: 0,
};

let starForceInfo = {
  reqLev: 0,
  mainStat: [],
  allStat: [],
  hp: [],
  atk: [],
  mAtk: [],
  def: [],
};

const item = {
  name: "트와일라이트 마크",
  imageUrl: "https://avatar.maplestory.nexon.com/ItemIcon/KEPDJALG.png",
  category: "얼굴장식",
  upgrade: 0,
  base: {
    str: 5,
    dex: 5,
    int: 5,
    luk: 5,
    atk: 5,
    mAtk: 5,
    def: 100,
  },
  scroll: {
    str: 76,
    dex: 76,
    int: 76,
    luk: 76,
    atk: 38,
    mAtk: 38,
    def: 168,
  },
  grade: "legendary",
  star: 19,
  potential: {
    grade: "legendary",
    effects: [
      {
        lukP: 12,
      },
      {
        allStatP: 9,
      },
      {
        allStatP: 6,
      },
    ],
  },
  flame: {
    dex: 20,
    luk: 68,
    hp: 2520,
    allStatP: 5,
  },
  scissors: 10,
};
