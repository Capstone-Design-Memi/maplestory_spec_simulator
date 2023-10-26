import React, { useEffect } from "react";
//import { DefaultItems } from "../../Util/ItemDatas";
import styled from "styled-components";
import Cover_img from "../../images/frame/cover.png";
import Top_frame_img from "../../images/frame/top.png";
import Bottom_frame_img from "../../images/frame/bottom.png";
import Line_img from "../../images/frame/line.png";
import StarLine from "./StarLine";
import ItemName from "./ItemName";
import EquipDisable from "./EquipDisable";
import DotLine_img from "../../images/frame/dotline.png";
import ItemGrade from "./ItemGrade";
import ItemImagePart from "./ItemImagePart";
import ZeroPersent from "./ZeroPersent";
import JobLine from "./JobLine";
import BaseAndFlame from "./BaseAndFlame";
import PotentialLine from "./PotentialLine";

const Wrapper = styled.div`
  padding: 0em;
  margin: 0em;
  width: 261px;
  background-image: url("${Cover_img}");
  background-repeat: no-repeat;
  background-position: left top;
`;

export const TopFrame = styled.div`
  height: 13px;
  background-image: url("${Top_frame_img}");
`;

export const BottomFrame = styled.div`
  height: 13px;
  background-image: url("${Bottom_frame_img}");
`;

export const Line = styled.div`
  height: 1px;
  background-image: url("${Line_img}");
`;

export const Line3 = styled.div`
  height: 3px;
  background-image: url("${Line_img}");
`;

export const Line7 = styled.div`
  height: 7px;
  background-image: url("${Line_img}");
`;

export const DotLine = styled.div`
  height: 2px;
  background-image: url("${DotLine_img}");
`;

const ItemStat = ({ item, extraInfo, eqItem }) => {
  return (
    <Wrapper>
      <TopFrame />
      <StarLine currentStar={item?.star} maxStar={extraInfo?.maxStar} />
      <Line3 />
      <ItemName name={item?.name} />
      <ItemGrade grade={item?.grade} />
      <EquipDisable />
      <Line7 />
      <DotLine />
      <Line7 />
      <Line3 />
      <ItemImagePart
        grade={item?.grade}
        imgUrl={item?.imageUrl}
        stateChageAmount={extraInfo?.stateChageAmount}
        reqLev={extraInfo?.reqLev}
      />
      <ZeroPersent />
      <JobLine />
      <Line7 />
      <DotLine />
      <Line3 />
      <BaseAndFlame
        category={item?.category}
        base={item?.base}
        flame={item?.flame}
        scroll={item?.scroll}
      />
      <Line7 />
      <DotLine />
      <PotentialLine grade={item?.grade} potential={item?.potential} />
      <Line7 />
      <BottomFrame />
    </Wrapper>
  );
};

const otherInformation = {
  maxStar: 20,
  stateChageAmount: 2010914,
  reqLev: 150,
};

// const itemEx = {
//   "name": "데아 시두스 이어링",
//   "imageUrl": "https://avatar.maplestory.nexon.com/ItemIcon/KEPBJFKA.png",
//   "category": "귀고리",
//   "upgrade": 0,
//   "base": {
//       "str": 5,
//       "dex": 5,
//       "int": 5,
//       "luk": 5,
//       "atk": 2,
//       "mAtk": 2,
//       "def": 50
//   },
//   "scroll": {
//       "str": 75,
//       "dex": 75,
//       "int": 75,
//       "luk": 75,
//       "atk": 45,
//       "mAtk": 45,
//       "def": 99
//   },
//   "grade": "legendary",
//   "star": 20,
//   "potential": {
//       "grade": "legendary",
//       "effects": [
//           {
//               "allStatP": 9
//           },
//           {
//               "lukP": 9
//           },
//           {
//               "lukP": 9
//           }
//       ]
//   },
//   "flame": {
//       "luk": 21,
//       "mp": 1950,
//       "speed": 4,
//       "allStatP": 6
//   }
// }

const itemEx2 = {
  name: "하이네스 원더러햇",
  imageUrl: "https://avatar.maplestory.nexon.com/ItemIcon/KEPCIPOA.png",
  category: "모자",
  upgrade: 0,
  base: {
    str: 40,
    dex: 40,
    hp: 360,
    mp: 360,
    atk: 2,
    def: 300,
    ignoreDef: 10,
  },
  scroll: {
    str: 62,
    dex: 62,
    hp: 255,
    atk: 19,
    mAtk: 19,
    def: 402,
  },
  grade: "epic",
  star: 17,
  potential: {
    grade: "epic",
    effects: [
      {
        strP: 6,
      },
      {
        luk: 12,
      },
      {
        str: 12,
      },
    ],
  },
  flame: {
    str: 20,
    int: 20,
    luk: 40,
    hp: 2250,
    mp: 2250,
  },
  scissors: 10,
};
export default ItemStat;
