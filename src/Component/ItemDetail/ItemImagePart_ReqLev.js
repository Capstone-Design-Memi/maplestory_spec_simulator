import React from "react";
import styled from 'styled-components';
import ReqLev_img from '../../images/Numbers/reqLev/reqLEV.png';

export const ReqLev = styled.div`
  width: 49px;
  height: 6px;
  background-image: url('${ReqLev_img}');
  float: left;
  margin-top: 35px;
`

const ItemImagePart_ReqLev = (props) => {
    return(
        <>
        <ReqLev/>
        </>
    );
}

export default ItemImagePart_ReqLev;