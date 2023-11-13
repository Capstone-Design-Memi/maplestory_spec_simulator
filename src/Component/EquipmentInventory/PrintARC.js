import React from "react";
import ArcPlus from "../../images/arcEquip/textUp/+.png";
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

const PrintARC = ({arcanes}) => {
    let level = [0,0,0,0,0,0];
    let sumOfLevel = 0;
    for(let i=0; i<arcanes.length; i++) {
        level[i] = arcanes[i].level;
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

    const arcList = arcArr.map((element) => 
        <div style={{float:"left", width:"12px", height:"17px", overflow:"hidden"}}>
            <img key={element.id} src={numbers[element.value]} style={{width:"100%", height:"100%", objectFit:"cover"}}></img>
        </div>)
    
    console.log(arcArr);
    return (
        <div style={{float:"right"}}>
            <img src={ArcPlus} style={{float:"left"}}/>
            {arcList}
        </div>
    )
}

export default PrintARC;