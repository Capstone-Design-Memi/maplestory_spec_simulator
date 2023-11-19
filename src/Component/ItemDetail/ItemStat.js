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
import GetExtraInfo from "../../Util/GetExtraInfo";

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

const otherInformation = {
  maxStar: 20,
  stateChageAmount: 2010914,
  reqLev: 150,
};

const ItemStat = ({ item }) => {

  if(item){
  let test = GetExtraInfo(item);
  otherInformation.maxStar = test.maxStar;
  otherInformation.reqLev = test.reqLev;
  }

  //console.log(otherInformation.reqLev);
  return (
    <Wrapper>
      <TopFrame />
      <StarLine currentStar={item?.star} maxStar={otherInformation?.maxStar} />
      <Line3 />
      <ItemName name={item?.name} scroll={item?.scroll} flame={item?.flame}/>
      <ItemGrade grade={item?.grade} />
      <EquipDisable />
      <Line7 />
      <DotLine />
      <Line7 />
      <Line3 />
      <ItemImagePart
        grade={item?.grade}
        imgUrl={item?.imageUrl}
        stateChageAmount={otherInformation?.stateChageAmount}
        reqLev={otherInformation?.reqLev}
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



export default ItemStat;
