import React from "react";
import styled from 'styled-components';
import Line_img from '../../images/frame/line.png';

export const Line = styled.div`
  margin: 0px;
  padding: 0px;
  height: 15px;
  background-image: url('${Line_img}');
  text-align: center;
`

export const GradeText = styled.span`
    letter-spacing: 1px;
    color: white;
    font-size: 11px;
    font-family : 'KoPubWorld Dotum Light';
`

const ItemGrade = (props) => {
    const grade = props.grade;

    if(grade === "nothing") {
        return(<></>)
    }else if(grade === "rare") {
        return(
            <Line>
            <GradeText>(레어 아이템)</GradeText>
            </Line>
        )
    }else if(grade === "epic") {
        return(
            <Line>
            <GradeText>(에픽 아이템)</GradeText>
            </Line>
        )
    }else if(grade === "unique") {
        return(
            <Line>
            <GradeText>(유니크 아이템)</GradeText>
            </Line>
        )
    }else if(grade === "legendary") {
        return(
            <Line>
            <GradeText>(레전드리 아이템)</GradeText>
            </Line>
        )
    }
}

export default ItemGrade;