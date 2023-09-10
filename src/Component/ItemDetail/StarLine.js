import React from "react";
import styled from 'styled-components';
import YellowStar_img from '../../images/itemIcon/yellow.png';
import EmptyStar_img from '../../images/itemIcon/empty.png';
import Line_img from '../../images/frame/line.png';

export const Line = styled.div`
  margin: 0px;
  padding: 0px;
  height: 10px;
  background-image: url('${Line_img}');
`

export const YellowStar = styled.div`
  width: 10px;
  height: 10px;
  float: left;
  background-image: url('${YellowStar_img}');
`

export const EmptyStar = styled.div`
  width: 10px;
  height: 10px;
  float: left;
  background-image: url('${EmptyStar_img}');
`

export const Blank = styled.div`
  float: left;
  width: 5px;
  height: 10px;
`

export const NextLine = styled.div`
    width: 300px;
`

const StarLine = (props) => {
    const currentStar = props.currentStar;
    const maxStar = props.maxStar;

    const line1_stars = [];
    const line2_stars = [];
    for(let i=0; i<maxStar; i++) {
        if(i<15){
            if(i%5==0){
                line1_stars.push(<Blank/>);
            }
            if(i<currentStar){
                line1_stars.push(<YellowStar/>)
            }else{
                line1_stars.push(<EmptyStar/>);
            }
        }else{
            if(i%5==0&&i!=14){
                line2_stars.push(<Blank/>);
            }
            if(i<currentStar){
                line2_stars.push(<YellowStar/>)
            }else{
                line2_stars.push(<EmptyStar/>);
            }
        }
    }

    if(maxStar == 25) {
        return (
            <>
            <Line>
                <ul style={{listStyle:"none",marginLeft:"9px"}}>
                {
                    line1_stars.map((value, index) => (
                        <li>
                            {value}
                        </li>
                ))}
                </ul>
            </Line>
            <Line/>
            <Line>
                <ul style={{listStyle:"none",marginLeft:"35px"}}>
                {
                    line2_stars.map((value, index) => (
                        <li>
                            {value}
                        </li>
                ))}
                </ul>    
            </Line>
            </>
        );
    }else if(maxStar == 20) {
        return(
        <>
            <Line>
                <ul style={{listStyle:"none",marginLeft:"9px"}}>
                    {
                        line1_stars.map((value, index) => (
                            <li>
                                {value}
                            </li>
                    ))}
                </ul>
            </Line>
            <Line/>
            <Line>
                <ul style={{listStyle:"none",marginLeft:"64px"}}>
                {
                    line2_stars.map((value, index) => (
                            <li>
                            {value}
                            </li>
                    ))}
                    </ul>    
            </Line>
        </>
        );
    }else if(maxStar == 15) {
        return(
            <>
                <Line>
                <ul style={{listStyle:"none",marginLeft:"9px"}}>
                    {
                        line1_stars.map((value, index) => (
                            <li>
                                {value}
                            </li>
                    ))}
                </ul>
            </Line>
            </>
        );
    }else if(maxStar == 8) {
        return(
            <>
                <Line>
                <ul style={{listStyle:"none",marginLeft:"40px"}}>
                    {
                        line1_stars.map((value, index) => (
                            <li>
                                {value}
                            </li>
                    ))}
                </ul>
            </Line>
            </>
        );
    }
    
   
}

export default StarLine;