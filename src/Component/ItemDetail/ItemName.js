import React from "react";
import styled from 'styled-components';
import Line_img from '../../images/frame/line.png';

export const Line = styled.div`
  margin: 0px;
  padding: 0px;
  height: 18px;
  background-image: url('${Line_img}');
  text-align: center;
`

const Name = styled.span`
    letter-spacing: 0px;
    color: ${(props) => props.textcolor ? props.textcolor : "#ffffff"};
    font-size: 14px;
    font-weight: 600;
    font-family : 'KoPubWorld Dotum Medium';  
`

const ItemName = ({name, scroll, flame}) => {
    let color = "white";
    let point = 0;

    let stat = 0;

    if(scroll?.str){
        stat += scroll?.str
    }

    if(scroll?.dex){
        stat += scroll?.dex;
    }
    
    if(scroll?.int){
        stat += scroll?.int;
    }
    
    if(scroll?.luk){
        stat += scroll?.luk;
    }
   

    if(flame?.str){
        stat += flame?.str;
    }
    if(flame?.dex){
        stat += flame?.dex;
    }
    if(flame?.int){
        stat += flame?.int;
    }
    if(flame?.luk){
        stat += flame?.luk;
    }
    

    if(stat <= 7) {

    }else if(stat <= 20) {
        point++;
    }else if(stat <= 32) {
        point=point+2;
    }else if(stat <= 44) {
        point=point+3;
    }else if(stat <= 56) {
        point=point+4;
    }else {
        point=point+5;
    }

    if(flame?.atk && (flame?.atk >= 6)) {
        point++;
    }

    switch(point) {
        case 0:
            color = "#FFFFFF";
            break;
        case 1:
            color = "#66FFFF";
            break;
        case 2:
            color = "#9966FF";
            break;
        case 3:
            color = "#FFCC00";
            break;
        case 4:
            color = "#CCFF00";
            break;
        case 5:
        case 6:
            color = "#FF0066";
            break;
    }

    return(
        <Line>
            <Name textcolor={color}>{name}</Name>
        </Line>
    );
}

export default ItemName;