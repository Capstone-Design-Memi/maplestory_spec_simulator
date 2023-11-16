import Effect0 from "../../images/autEquip/effect_enchant/0.png";
import Effect1 from "../../images/autEquip/effect_enchant/1.png";
import Effect2 from "../../images/autEquip/effect_enchant/2.png";
import Effect3 from "../../images/autEquip/effect_enchant/3.png";
import Effect4 from "../../images/autEquip/effect_enchant/4.png";
import Effect5 from "../../images/autEquip/effect_enchant/5.png";
import Effect6 from "../../images/autEquip/effect_enchant/6.png";
import Effect7 from "../../images/autEquip/effect_enchant/7.png";
import Effect8 from "../../images/autEquip/effect_enchant/8.png";
import Effect9 from "../../images/autEquip/effect_enchant/9.png";
import Effect10 from "../../images/autEquip/effect_enchant/10.png";
import Effect11 from "../../images/autEquip/effect_enchant/11.png";
import React, { useState, useEffect } from "react";

const animationArr = [
    {src: Effect0,left: 0,top: 0},
    {src: Effect1,left: 0,top: 0},
    {src: Effect2,left: 0,top: 0},
    {src: Effect3,left: 0,top: 0},
    {src: Effect4,left: 0,top: 0},
    {src: Effect5,left: 0,top: 0},
    {src: Effect6,left: 0,top: 0},
    {src: Effect7,left: 0,top: 0},
    {src: Effect8,left: 0,top: 0},
    {src: Effect9,left: 0,top: 0},
    {src: Effect10,left: 0,top: 0},
    {src: Effect11,left: 0,top: 0},
];

const PrintAutAnimation = ({isAnimate, setIsAnimate, animationLT}) => {
    const [currentFrame, setCurrentFrame] = useState(animationArr[0]);
    console.log(animationLT);
    useEffect(()=> {
        for(let i=0; i<animationArr.length; i++) {
            const ani = setTimeout(() => {
                setCurrentFrame(animationArr[i]);
            }, (i + 1) * 1000);
        } 
    }, [isAnimate]);

    if(currentFrame.src === Effect11) {
        setIsAnimate(false);
    }
    
    return (
        <img src={currentFrame.src} 
            style={{position:"absolute",
                pointerEvents:"none",
                zIndex:3,
                left: `${animationLT.left + currentFrame.left}px`, 
                top: `${animationLT.top + currentFrame.top}px`}}/>
    )
}

export default PrintAutAnimation;