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
  top: 55px;
  left: 15px;
  width: 49px;
  height: 15px;
  background-image: url('${Shade_img}');
  position:absolute;
  opacity: 0.5;
`


const ItemImagePart_Base = (props) => {
    const imgUrl = props.imgUrl;
    return(
       <Base>
            <Cover>
              <Shade/>
                <img
                    style={{marginTop:'10px',zIndex:-1}}
                    src={imgUrl}
                    alt="item Image"
                    width={57}
                    height={57}
                />
            </Cover>
       </Base>
    );
}

export default ItemImagePart_Base;