import React from "react";
import styled from 'styled-components';
import Line_img from '../../images/frame/line.png';
import GradeRare_img from '../../images/itemIcon/rare.png';
import GradeEpic_img from '../../images/itemIcon/epic.png';
import GradeUnique_img from '../../images/itemIcon/unique.png';
import GradeLegendary_img from '../../images/itemIcon/legendary.png';
import ItemImagePart_Base from "./ItemImagePart_Base";

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
`
export const GradeRare = styled.div`
  width: 90px;
  height: 80px;
  background-image: url('${GradeRare_img}');
`
export const GradeEpic = styled.div`
  width: 90px;
  height: 80px;
  background-image: url('${GradeEpic_img}');
`
export const GradeUnique = styled.div`
  width: 90px;
  height: 80px;
  background-image: url('${GradeUnique_img}');
`
export const GradeLegendary = styled.div`
  width: 90px;
  height: 80px;
  margin-left: 10px;
  float: left;
  
  background-image: url('${GradeLegendary_img}');
`



const ItemImagePart = (props) => {
  const grade = props.grade
  const imgUrl = props.imgUrl;
  if(grade == "legendary") {
    return(
      <Line>
        <GradeLegendary>
          <ItemImagePart_Base imgUrl={imgUrl}/>
        </GradeLegendary>
      </Line>
    );
  }
}

export default ItemImagePart;