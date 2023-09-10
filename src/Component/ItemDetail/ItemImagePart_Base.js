import React from "react";
import styled from 'styled-components';
import Base_img from '../../images/itemIcon/base.png';
import Shade_img from '../../images/itemIcon/shade.png';
import Cover_img from '../../images/itemIcon/cover.png';

export const Base = styled.div`
  width: 78px;
  height: 78px;
  border-radius: 5px;
  background-image: url('${Base_img}');
  position:relative;
`

export const Cover = styled.div`
  top: 3px;
  left: 3px;
  width: 74px;
  height: 74px;
  border-radius: 5px;
  background-image: url('${Cover_img}');
  position:absolute;
`

export const Shade = styled.div`
  top: 50px;
  left: 15px;
  width: 49px;
  height: 15px;
  background-image: url('${Shade_img}');
  position:absolute;
`


const ItemImagePart_Base = (props) => {
    return(
       <Base>
            <Cover>
                <Shade/>
            </Cover>
       </Base>
    );
}

export default ItemImagePart_Base;