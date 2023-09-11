import React from "react";
//import { DefaultItems } from "../../Util/ItemDatas";
import styled from 'styled-components';
import Cover_img from '../../images/frame/cover.png';
import Top_frame_img from '../../images/frame/top.png';
import Line_img from '../../images/frame/line.png';
import StarLine from "./StarLine";
import ItemName from "./ItemName";
import EquipDisable from "./EquipDisable";
import DotLine_img from "../../images/frame/dotline.png";
import ItemPotential from "./ItemGrade";
import ItemImagePart from "./ItemImagePart";
import ZeroPersent from "./ZeroPersent";
import JobLine from "./JobLine";
import BaseAndFlame from "./BaseAndFlame";

const Wrapper = styled.div`
  padding: 0em;
  margin: 0em;
  width: 261px;
  background-image: url('${Cover_img}');
  background-position: left top;
`

export const TopFrame = styled.div`
  height: 13px;
  background-image: url('${Top_frame_img}');
`

export const Line = styled.div`
  height: 1px;
  background-image: url('${Line_img}');
`

export const Line3 = styled.div`
  height: 3px;
  background-image: url('${Line_img}');
`

export const Line7 = styled.div`
  height: 7px;
  background-image: url('${Line_img}');
`

export const DotLine = styled.div`
  height: 2px;
  background-image: url('${DotLine_img}');
`

const ItemStat = () => {
  return (
    <Wrapper>
      <TopFrame/>
      <StarLine currentStar={itemEx.star} maxStar={otherInformation.maxStar}/>
      <Line3/>
      <ItemName name={itemEx.name}/>
      <ItemPotential grade={itemEx.grade}/>
      <EquipDisable/>
      <Line7/>
      <DotLine/>
      <Line7/>
      <Line3/>
      <ItemImagePart grade={itemEx.grade}
                     imgUrl={itemEx.imageUrl}
                     stateChageAmount={otherInformation.stateChageAmount}
                     reqLev={otherInformation.reqLev}/>
      <ZeroPersent/>
      <JobLine/>
      <Line7/>
      <DotLine/>
      <BaseAndFlame category={itemEx.category} base={itemEx.base} flame={itemEx.flame} scroll={itemEx.scroll}/>
      <Line7/>
      <DotLine/>
    </Wrapper>
  );
};

const otherInformation = {
  maxStar : 25,
  stateChageAmount : 2010914,
  reqLev : 150
}

const itemEx2 = {
  name: "이터널 플레임 링",
        imageUrl: "https://avatar.maplestory.nexon.com/ItemIcon/KEODPEMF.png",
        category: "반지",
        upgrade: 0,
        base: {
          str: 40,
          dex: 40,
          int: 40,
          luk: 40,
          hp: 4000,
          mp: 4000,
          atk: 25,
          mAtk: 25,
        },
        scroll: {},
        grade: "unique",
        star: 0,
        potential: {
          grade: "unique",
          effects: [
            {
              strP: 9,
            },
            {
              allStatP: 3,
            },
            {
              mpP: 6,
            },
          ],
        },
        flame: {},
}

const itemEx = {
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
  grade: "legendary",
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
}
export default ItemStat;
