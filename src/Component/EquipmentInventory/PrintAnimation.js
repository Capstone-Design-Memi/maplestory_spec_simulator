import Effect0 from "../../images/arcEquip/effect_enchant/0.png";
import Effect1 from "../../images/arcEquip/effect_enchant/1.png";
import Effect2 from "../../images/arcEquip/effect_enchant/2.png";
import Effect3 from "../../images/arcEquip/effect_enchant/3.png";
import Effect4 from "../../images/arcEquip/effect_enchant/4.png";
import Effect5 from "../../images/arcEquip/effect_enchant/5.png";
import Effect6 from "../../images/arcEquip/effect_enchant/6.png";
import Effect7 from "../../images/arcEquip/effect_enchant/7.png";
import Effect8 from "../../images/arcEquip/effect_enchant/8.png";
import Effect9 from "../../images/arcEquip/effect_enchant/9.png";
import Effect10 from "../../images/arcEquip/effect_enchant/10.png";
import Effect11 from "../../images/arcEquip/effect_enchant/11.png";
import { useEffect, useState, useImperativeHandle } from "react";

const PrintAnimation = ({isAnimate, setIsAnimate, animationLT}) => {
    const [currentFrame, setCurrentFrame] = useState(Effect0);
    const [currentLT, setCurrentLT] = useState({left:0, top: 0});

    const animationArr = [Effect0, Effect1, Effect2, Effect3, Effect4, Effect5,
                          Effect6, Effect7, Effect8, Effect9, Effect10, Effect11];
    
    const addLT = [
        {left: 0,top: 0,},
        {left: -17,top: -14,},
        {left: -30,top: -29,},
        {left: -56,top: -51,},
        {left: -52,top: -48,},
        {left: -58,top: -61,},
        {left: -68,top: -66,},
        {left: -70,top: -68,},
        {left: -64,top: -64,},
        {left: -64,top: -64,},
        {left: -64,top: -64,},
        {left: -64,top: -64,},
    ];
    
    useEffect(()=> {
        for(let i=0; i<animationArr.length; i++) {
            setTimeout(() => {
                setCurrentFrame(animationArr[i]);
                setCurrentLT(addLT[i]);
            }, (i + 1) * 30);
        } 
    }, [isAnimate]);
    
    if(currentFrame === Effect11) {
        setIsAnimate(false);
    }

    console.log(animationLT.left);

    return (
        <img src={currentFrame} 
            style={{position:"absolute", 
                left: `${animationLT.left + currentLT.left}px`, 
                top: `${animationLT.top + currentLT.top}px`}}/>
    )
}

export default PrintAnimation;