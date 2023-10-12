import React from "react";
import styled from 'styled-components';
import {useState, useEffect} from "react";
import { Button } from "antd";

const StarforceTab = ({item, extraInfo, onAddStar, onSubStar, star, onAdd10Star, onSub10Star}) => {
    const [mouseHoverMTen, setMouseHoverMTen] = useState(false);
    const [mouseHoverMOne, setMouseHoverMOne] = useState(false);
    const [mouseHoverPOne, setMouseHoverPOne] = useState(false);
    const [mouseHoverPTen, setMouseHoverPTen] = useState(false);
    let disableSub = false;
    let disableAdd = false;
    let disable10Sub = false;
    let disable10Add = false;


    if(star <= 0) {
        disableSub = true;
    }
    if(star >= extraInfo.maxStar) {
        disableAdd = true;
    }
    if(star < 10) {
        disable10Sub = true;      
    } 
    if(star + 10 > extraInfo.maxStar) {
        disable10Add = true;
    }
    return (
        <div>
            <div>
            <button onClick={onSub10Star} disabled={disable10Sub} 
            onMouseOver={() => {setMouseHoverMTen(true);}}
            onMouseLeave={() => { setMouseHoverMTen(false);}}
            style={{backgroundColor: `${mouseHoverMTen ? "red" : "white"}`, textAlign:"center", color:`${mouseHoverMTen ? "white" : "red"}`, margin:"2px",borderStyle:"solid",borderColor:"red",width:"50px",padding:"10px"}}> -10</button>
            <button onClick={onSubStar} disabled={disableSub}
            onMouseOver={() => {setMouseHoverMOne(true);}}
            onMouseLeave={() => { setMouseHoverMOne(false);}}
            style={{backgroundColor: `${mouseHoverMOne ? "red" : "white"}`, textAlign:"center", color:`${mouseHoverMOne ? "white" : "red"}`, margin:"2px",borderStyle:"solid",borderColor:"red",width:"50px",padding:"10px"}}>
                -1</button>
            <span style={{margin:"5px"}}>{star}</span>
            <button onClick={onAddStar} disabled={disableAdd} 
            onMouseOver={() => {setMouseHoverPOne(true);}}
            onMouseLeave={() => { setMouseHoverPOne(false);}}
            style={{backgroundColor:`${mouseHoverPOne ? "blue" : "white"}`, textAlign:"center", color:`${mouseHoverPOne ? "white" : "blue"}`, margin:"2px",borderStyle:"solid",borderColor:"blue",width:"50px",padding:"10px"}}>+1</button>
            <button onClick={onAdd10Star} disabled={disable10Add} 
            onMouseOver={() => {setMouseHoverPTen(true);}}
            onMouseLeave={() => { setMouseHoverPTen(false);}}
            style={{backgroundColor:`${mouseHoverPTen ? "blue" : "white"}`, textAlign:"center", color:`${mouseHoverPTen ? "white" : "blue"}`, margin:"2px",borderStyle:"solid",borderColor:"blue",width:"50px",padding:"10px"}}>+10</button>
            </div>
        </div>
    )
}

export default StarforceTab;