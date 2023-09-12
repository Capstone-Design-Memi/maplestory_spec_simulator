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

export const Name = styled.span`
    letter-spacing: 0px;
    color: white;
    font-size: 14px;
    font-weight: 600;
    font-family : 'KoPubWorld Dotum Medium';  
`

const ItemName = (props) => {
    return(
        <Line>
            <Name>{props.name}</Name>
        </Line>
    );
}

export default ItemName;