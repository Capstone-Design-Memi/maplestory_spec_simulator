import React from "react";
import styled from 'styled-components';
import {useState, useEffect} from "react";
import ItemStat from "../ItemDetail/ItemStat";
import AccStarForceData from "../../Util/AccStarForceData";
import FlameData from "../../Util/flameData";
import StarforceTab from "./StarforceTab";
import FlameTab from "./FlameTab";

const Enforce = (props) => {
    const accArr = ["벨트","귀고리","반지","펜던트","포켓아이템","눈장식","얼굴장식","기계심장"];
    const amrArr = ["모자","상의","하의","신발","어깨장식","망토","장갑"];
    // 힘덱인럭 곱셈배율
    const canFlame = ["포켓아이템","펜던트","벨트","모자","상의","눈장식","얼굴장식","상의","하의","신발","귀고리","어깨장식","장갑","망토"];


    let mainStatMul = [0,0,0,0];
    if(extraInfo.mainStat === "str") {
        mainStatMul[0] = 1;
        mainStatMul[1] = 1;
    }else if(extraInfo.mainStat === "dex") {
        mainStatMul[1] = 1;
        mainStatMul[0] = 1;
    }else if(extraInfo.mainStat === "int") {
        mainStatMul[2] = 1;
        mainStatMul[3] = 1;
    }else if(extraInfo.mainStat === "luk") {
        mainStatMul[3] = 1;
        mainStatMul[1] = 1;
    }

    let category = '';
    for(let i=0; i<amrArr.length; i++) {
        if(item.category === accArr[i]) {
            for(let j=0; j<AccStarForceData.length; j++) {
                if(extraInfo.reqLev === AccStarForceData[j].reqLev) {
                    starForceInfo = AccStarForceData[j];
                }
            }
        }
    }

    for(let i=0; i<canFlame.length; i++) {
        if(item.category === canFlame[i]) {
            for(let j=0; j<FlameData.length; j++) {
                if(extraInfo.reqLev === FlameData[j].reqLev) {
                    flameInfo = FlameData[j];
                }
            }
        }
    }

    const [starHandler, setStarHandler] = useState(item.star);

    const itemEdit = () => {
        let star = item.star;
        item.scroll.str = starForceInfo.allStat[star] + (starForceInfo.mainStat[star] * mainStatMul[0]);
        item.scroll.dex = starForceInfo.allStat[star] + (starForceInfo.mainStat[star] * mainStatMul[1]);
        item.scroll.int = starForceInfo.allStat[star] + (starForceInfo.mainStat[star] * mainStatMul[2]);
        item.scroll.luk = starForceInfo.allStat[star] + (starForceInfo.mainStat[star] * mainStatMul[3]);
        item.scroll.hp = starForceInfo.hp[star];
        item.scroll.atk = starForceInfo.atk[star];
        item.scroll.mAtk = starForceInfo.mAtk[star];
        item.scroll.def = starForceInfo.def[star];
        setStarHandler(star);
    }

    //const handle

    const handleAddStar = () => {
        item.star++;
        itemEdit();
    }

    const handleSubStar = () => {
        item.star--;
        itemEdit();
    }

    const handleAdd10Star = () => {
        item.star = item.star + 10;
        itemEdit();
    }

    const handleSub10Star = () => {
        item.star = item.star - 10;
        itemEdit();
    }

    return (
        <div style={{clear:"both"}}>
            <div style={{float: "left"}}>
                <ItemStat item={item} extraInfo={extraInfo}/>
            </div>
            <div style={{float:"left"}}>
                <StarforceTab item={item} extraInfo={extraInfo} 
                onAddStar={handleAddStar}
                onSubStar={handleSubStar}
                onAdd10Star={handleAdd10Star}
                onSub10Star={handleSub10Star}
                star={item.star}/>
                <FlameTab flameInfo={flameInfo}/>
            </div>
        </div>
    )
}

export default Enforce;

const extraInfo = {
  maxStar : 25,
  stateChageAmount : 2010914,
  reqLev : 140,
  mainStat : "luk",
}

let flameInfo = {///방어구
    "reqLev" : 0,
    "mainStat" : [],
    "mainAndSub" : [],
    "hp" : [],
    "mp" : [],
    "allStatP" : [],
    "atk" : [],
    "mAtk" : [],
    "speed" : [],
    "jump" : [],
    "def" : [],
    "reqLevDecrease" : []
}

let starForceInfo = {
    "reqLev" : 0,
    "mainStat" : [],
    "allStat" : [],
    "hp" : [],
    "atk" : [],
    "mAtk" : [],
    "def" : []
}

const item = 
    {
    "name": "골든 클로버 벨트",
    "imageUrl": "https://avatar.maplestory.nexon.com/ItemIcon/KEOBJFJD.png",
    "category": "벨트",
    "upgrade": 0,
    "base": {
        "str": 15,
        "dex": 15,
        "int": 15,
        "luk": 15,
        "hp": 150,
        "mp": 150,
        "atk": 1,
        "mAtk": 1,
        "def": 150
    },
    "scroll": {
        "str": 94,
        "dex": 94,
        "int": 94,
        "luk": 94,
        "hp": 255,
        "atk": 63,
        "mAtk": 63,
        "def": 284
    },
    "grade": "legendary",
    "star": 21,
    "potential": {
        "grade": "legendary",
        "effects": [
            {
                "lukP": 12
            },
            {
                "hpP": 9
            },
            {
                "lukP": 9
            }
        ]
    },
    "flame": {
        "dex": 20,
        "int": 40,
        "luk": 60,
        "allStatP": 6
    }
}
