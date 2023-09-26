import React from "react";
import styled from 'styled-components';
import Line_img from '../../images/frame/line.png';
import GradeRare_img from '../../images/itemIcon/rare.png';
import GradeEpic_img from '../../images/itemIcon/epic.png';
import GradeUnique_img from '../../images/itemIcon/unique.png';
import GradeLegendary_img from '../../images/itemIcon/legendary.png';
import ItemImagePart_Base from "./ItemImagePart_Base";
import ItemImagePart_StateChage from "./ItemImagePart_StateChange";
import ItemImagePart_ReqLev from "./ItemImagePart_ReqLev";

export const Line = styled.div`
  margin: 0px;
  padding: 0px;
  height: 80px;
  background-image: url('${Line_img}');
  text-align: center;
`
export const GradeNone = styled.div`
  width: 90px;
  height: 80px;
  margin-left: 10px;
  float: left;
`
export const GradeRare = styled.div`
  width: 90px;
  height: 80px;
  margin-left: 10px;
  float: left;
  background-image: url('${GradeRare_img}');
`
export const GradeEpic = styled.div`
  width: 90px;
  height: 80px;
  margin-left: 10px;
  float: left;
  background-image: url('${GradeEpic_img}');
`
export const GradeUnique = styled.div`
  width: 90px;
  height: 80px;
  margin-left: 10px;
  float: left;
  background-image: url('${GradeUnique_img}');
`
export const GradeLegendary = styled.div`
  width: 90px;
  height: 80px;
  margin-left: 10px;
  float: left;
  background-image: url('${GradeLegendary_img}');
`
export const IncreaseText = styled.span`
    float: right;
    width: 140px;
    margin-right: 10px;
    letter-spacing: 1px;
    color: #999999;
    font-size: 11px;
    font-family : 'KoPubWorld Dotum Bold';
    text-align: right;
`


const ItemImagePart = (props) => {
  const grade = props.grade
  const imgUrl = props.imgUrl;
  const stateChageAmount = props.stateChageAmount;
  const reqLev = props.reqLev;

  if(grade === "legendary") {
    return(
      <Line>
        <GradeLegendary>
          <ItemImagePart_Base imgUrl={imgUrl}/>
        </GradeLegendary>
        <IncreaseText>공격력 증가량</IncreaseText>
        <ItemImagePart_StateChage stateChageAmount={stateChageAmount}/>
        <ItemImagePart_ReqLev reqLev={reqLev}/>
      </Line>
    );
  }

  if(grade === "unique") {
    return(
      <Line>
        <GradeUnique>
          <ItemImagePart_Base imgUrl={imgUrl}/>
        </GradeUnique>
        <IncreaseText>공격력 증가량</IncreaseText>
        <ItemImagePart_StateChage stateChageAmount={stateChageAmount}/>
        <ItemImagePart_ReqLev reqLev={reqLev}/>
      </Line>
    );
  }

  if(grade === "epic") {
    return(
      <Line>
        <GradeEpic>
          <ItemImagePart_Base imgUrl={imgUrl}/>
        </GradeEpic>
        <IncreaseText>공격력 증가량</IncreaseText>
        <ItemImagePart_StateChage stateChageAmount={stateChageAmount}/>
        <ItemImagePart_ReqLev reqLev={reqLev}/>
      </Line>
    );
  }

  if(grade === "rare") {
    return(
      <Line>
        <GradeRare>
          <ItemImagePart_Base imgUrl={imgUrl}/>
        </GradeRare>
        <IncreaseText>공격력 증가량</IncreaseText>
        <ItemImagePart_StateChage stateChageAmount={stateChageAmount}/>
        <ItemImagePart_ReqLev reqLev={reqLev}/>
      </Line>
    );
  }

  if(grade === "nothing" || grade === undefined) {
    return(
      <Line>
        <GradeNone>
          <ItemImagePart_Base imgUrl={imgUrl}/>
        </GradeNone>
        <IncreaseText>공격력 증가량</IncreaseText>
        <ItemImagePart_StateChage stateChageAmount={stateChageAmount}/>
        <ItemImagePart_ReqLev reqLev={reqLev}/>
      </Line>
    );
  }
}

export default ItemImagePart;