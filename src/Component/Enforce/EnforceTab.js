import React from "react";
import styled from 'styled-components';
import {useState, useEffect} from "react";

const EnforceTab = ({item, extraInfo, onAddStar, onSubStar, star, onAdd10Star, onSub10Star}) => {
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
        <div style={{width:"300px", height:"700px",border:"1px solid lime"}}>
            <div>
            <button onClick={onSub10Star} disabled={disable10Sub}>-10</button>
            <button onClick={onSubStar} disabled={disableSub}>-1</button>
            <span>{star}</span>
            <button onClick={onAddStar} disabled={disableAdd}>+1</button>
            <button onClick={onAdd10Star} disabled={disable10Add}>+10</button>
            </div>
        </div>
    )
}

export default EnforceTab;