import React from "react";
import ArcPlus from "../../images/arcEquip/textUp/+.png";
import Str from "../../images/arcEquip/textUp/str.png";
import Dex from "../../images/arcEquip/textUp/dex.png";
import Int from "../../images/arcEquip/textUp/int.png";
import Luk from "../../images/arcEquip/textUp/luk.png";
import Arc from "../../images/arcEquip/textUp/arcane.png";
import Arc0 from "../../images/arcEquip/textUp/0.png";
import Arc1 from "../../images/arcEquip/textUp/1.png";
import Arc2 from "../../images/arcEquip/textUp/2.png";
import Arc3 from "../../images/arcEquip/textUp/3.png";
import Arc4 from "../../images/arcEquip/textUp/4.png";
import Arc5 from "../../images/arcEquip/textUp/5.png";
import Arc6 from "../../images/arcEquip/textUp/6.png";
import Arc7 from "../../images/arcEquip/textUp/7.png";
import Arc8 from "../../images/arcEquip/textUp/8.png";
import Arc9 from "../../images/arcEquip/textUp/9.png";

const numbers = [Arc0,Arc1,Arc2,Arc3,Arc4,
                 Arc5,Arc6,Arc7,Arc8,Arc9];

const stats = [Str, Dex, Int, Luk];

const PrintARC = ({arcanes}) => {
    let level = [0,0,0,0,0,0];
    let sumOfLevel = 0;
    let sumOfMainStat = 0;
    const mainStat = Object.keys(arcanes[0].stat)[0];
    let mainStatImg = Str;

    if(mainStat === "str") {
        mainStatImg = Str;
    }else if(mainStat === "dex") {
        mainStatImg = Dex;
    }else if(mainStat === "int") {
        mainStatImg = Int;
    }else if(mainStat === "luk") {
        mainStatImg = Luk;
    }

    for(let i=0; i<arcanes.length; i++) {
        level[i] = arcanes[i].level;
        sumOfMainStat += Object.values(arcanes[i].stat)[0];
        sumOfLevel += level[i];
    }

    let arc = 0;
    for(let i=0; i<level.length; i++) {
        if(level[i]) {
            arc += (level[i] + 2) * 10
        }
    }

    const arcArr = String(arc).split("").map((arc, index)=>{
        return {id: index, value : Number(arc)};
    })

    const mainStatArr = String(sumOfMainStat).split("").map((sumOfMainStat, index)=> {
        return {id: index, value : Number(sumOfMainStat)}
    })

    const arcList = arcArr.map((element, index) => 
        <div key={index} style={{float:"left", width:"10px", height:"17px", overflow:"hidden"}}>
            <img key={element.id} src={numbers[element.value]} style={{width:"100%", height:"100%", objectFit:"cover"}}></img>
        </div>)
    
    const mainStatList = mainStatArr.map((element, index) => 
        <div key={index} style={{float:"left", width:"10px", height:"17px", overflow:"hidden"}}>
            <img key={element.id} src={numbers[element.value]} style={{width:"100%", height:"100%", objectFit:"cover"}}></img>
        </div>)

    return (
        <>
            <div>
            <img src={Arc}></img>
            <div style={{float:"right"}}>
                <img src={ArcPlus} style={{float:"left"}}/>
                {arcList}
            </div>
            </div>
            <div>
            <img src={mainStatImg}></img>
            <div style={{float:"right"}}>
                <img src={ArcPlus} style={{float:"left"}}/>
                {mainStatList}
            </div>
            </div>
        </>
    )
}

export default PrintARC;