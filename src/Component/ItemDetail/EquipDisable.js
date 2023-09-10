import React from "react";
import styled from 'styled-components';
import Line_img from '../../images/frame/line.png';

export const Line = styled.div`
  height: 20px;
  background-image: url('${Line_img}');
  text-align: center;
`

export const EquipText = styled.span`
    letter-spacing: 1px;
    color: #FFAA00;
    font-size: 11px;
    font-family : 'KoPubWorld Dotum Medium';
 `

 const EquipDisable = () => {
    return (
        <Line>
            <EquipText>장착 시 교환 불가</EquipText>
        </Line>
    )
 }

 export default EquipDisable;