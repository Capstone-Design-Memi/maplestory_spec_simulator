import React from "react";
import styled from 'styled-components';
import Incline0_img from '../../images/Numbers/incline/0.png';
import Incline1_img from '../../images/Numbers/incline/1.png';
import Incline2_img from '../../images/Numbers/incline/2.png';
import Incline3_img from '../../images/Numbers/incline/3.png';
import Incline4_img from '../../images/Numbers/incline/4.png';
import Incline5_img from '../../images/Numbers/incline/5.png';
import Incline6_img from '../../images/Numbers/incline/6.png';
import Incline7_img from '../../images/Numbers/incline/7.png';
import Incline8_img from '../../images/Numbers/incline/8.png';
import Incline9_img from '../../images/Numbers/incline/9.png';
import InclinePlus_img from '../../images/Numbers/incline/plus.png';
import Decline0_img from '../../images/Numbers/decline/0.png';
import Decline1_img from '../../images/Numbers/decline/1.png';
import Decline2_img from '../../images/Numbers/decline/2.png';
import Decline3_img from '../../images/Numbers/decline/3.png';
import Decline4_img from '../../images/Numbers/decline/4.png';
import Decline5_img from '../../images/Numbers/decline/5.png';
import Decline6_img from '../../images/Numbers/decline/6.png';
import Decline7_img from '../../images/Numbers/decline/7.png';
import Decline8_img from '../../images/Numbers/decline/8.png';
import Decline9_img from '../../images/Numbers/decline/9.png';
import DeclineMinus_img from '../../images/Numbers/decline/minus.png';

export const InclinePlus = styled.div`
  background-position: center center;
  width: 18px;
  height: 26px;
  float: right;
  background-image: url('${InclinePlus_img}');
  background-repeat: no-repeat;
`

export const Incline0 = styled.div`
  width: 19px;
  height: 26px;
  float: right;
  background-image: url('${Incline0_img}');
  margin-left: 1px;
`

export const Incline1 = styled.div`
  width: 14px;
  height: 26px;
  float: right;
  background-image: url('${Incline1_img}');
  margin-left: 2px;
`

export const Incline2 = styled.div`
  width: 18px;
  height: 26px;
  float: right;
  background-image: url('${Incline2_img}');
  margin-left: 1px;
`

export const Incline3 = styled.div`
  width: 17px;
  height: 26px;
  float: right;
  background-image: url('${Incline3_img}');
  margin-left: 1px;
`

export const Incline4 = styled.div`
  width: 20px;
  height: 26px;
  float: right;
  background-image: url('${Incline4_img}');
`

export const Incline5 = styled.div`
  width: 17px;
  height: 26px;
  float: right;
  background-image: url('${Incline5_img}');
  margin-left: 1px;
`

export const Incline6 = styled.div`
  width: 18px;
  height: 26px;
  float: right;
  background-image: url('${Incline6_img}');
  margin-left: 1px;
`

export const Incline7 = styled.div`
  width: 18px;
  height: 26px;
  float: right;
  background-image: url('${Incline7_img}');
  margin-left: 1px;
`

export const Incline8 = styled.div`
  width: 19px;
  height: 26px;
  float: right;
  background-image: url('${Incline8_img}');
`

export const Incline9 = styled.div`
  width: 19px;
  height: 26px;
  float: right;
  background-image: url('${Incline9_img}');
`

export const DeclineMinus = styled.div`
  background-position: center center;
  width: 16px;
  height: 26px;
  float: right;
  background-image: url('${DeclineMinus_img}');
  background-repeat: no-repeat;
`

export const Decline0 = styled.div`
  width: 19px;
  height: 26px;
  float: right;
  background-image: url('${Decline0_img}');
  margin-left: 1px;
`

export const Decline1 = styled.div`
  width: 14px;
  height: 26px;
  float: right;
  background-image: url('${Decline1_img}');
  margin-left: 2px;
`

export const Decline2 = styled.div`
  width: 18px;
  height: 26px;
  float: right;
  background-image: url('${Decline2_img}');
  margin-left: 1px;
`

export const Decline3 = styled.div`
  width: 17px;
  height: 26px;
  float: right;
  background-image: url('${Decline3_img}');
  margin-left: 1px;
`

export const Decline4 = styled.div`
  width: 20px;
  height: 26px;
  float: right;
  background-image: url('${Decline4_img}');
`

export const Decline5 = styled.div`
  width: 17px;
  height: 26px;
  float: right;
  background-image: url('${Decline5_img}');
  margin-left: 1px;
`

export const Decline6 = styled.div`
  width: 18px;
  height: 26px;
  float: right;
  background-image: url('${Decline6_img}');
  margin-left: 1px;
`

export const Decline7 = styled.div`
  width: 18px;
  height: 26px;
  float: right;
  background-image: url('${Decline7_img}');
  margin-left: 1px;
`

export const Decline8 = styled.div`
  width: 19px;
  height: 26px;
  float: right;
  background-image: url('${Decline8_img}');
`

export const Decline9 = styled.div`
  width: 19px;
  height: 26px;
  float: right;
  background-image: url('${Decline9_img}');
`

const ItemImagePart_StateChage = (props) => {
    const stateChageAmountN = props.stateChageAmount;
    const stateChageAmount = stateChageAmountN.toString();
    const arrAmount = stateChageAmount.split("");

    const outputImage = [];

    if(stateChageAmountN >= 0) {
        outputImage.push(<InclinePlus/>)
        for(let i=0; i<arrAmount.length; i++) {
            switch (arrAmount[i]) {
                case "0":
                    outputImage.push(<Incline0/>)
                    break;
                case "1":
                    outputImage.push(<Incline1/>)
                    break;
                case "2":
                    outputImage.push(<Incline2/>)
                    break;
                case "3":
                    outputImage.push(<Incline3/>)
                    break;
                case "4":
                    outputImage.push(<Incline4/>)
                    break;
                case "5":
                    outputImage.push(<Incline5/>)
                    break;
                case "6":
                    outputImage.push(<Incline6/>)
                    break;
                case "7":
                    outputImage.push(<Incline7/>)
                    break;
                case "8":
                    outputImage.push(<Incline8/>)
                    break;
                case "9":
                    outputImage.push(<Incline9/>)
                    break;
            }
        }
    }

    if(stateChageAmountN < 0) {
        outputImage.push(<DeclineMinus/>)
        for(let i=0; i<arrAmount.length; i++) {
            switch (arrAmount[i]) {
                case "0":
                    outputImage.push(<Decline0/>)
                    break;
                case "1":
                    outputImage.push(<Decline1/>)
                    break;
                case "2":
                    outputImage.push(<Decline2/>)
                    break;
                case "3":
                    outputImage.push(<Decline3/>)
                    break;
                case "4":
                    outputImage.push(<Decline4/>)
                    break;
                case "5":
                    outputImage.push(<Decline5/>)
                    break;
                case "6":
                    outputImage.push(<Decline6/>)
                    break;
                case "7":
                    outputImage.push(<Decline7/>)
                    break;
                case "8":
                    outputImage.push(<Decline8/>)
                    break;
                case "9":
                    outputImage.push(<Decline9/>)
                    break;
            }
        }
    }
    const outputImageR = outputImage.reverse();
    return (
      <div style={{position:"relative"}}>
      <div style={{height:"26px",width:"250px",position:"absolute",left:"15px",top:"16px"}}>
        <ul style={{listStyle:"none", marginRight:"10px", height:"26px"}}>
            {
                outputImageR.map((value, index) => (
                    <li style={{width:"10px;"}}>
                        {value}
                    </li>
            ))}
        </ul>
      </div>
      </div>
    )
}

export default ItemImagePart_StateChage;