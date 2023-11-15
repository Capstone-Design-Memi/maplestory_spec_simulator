import {useEffect, useState} from "react";
import img0 from "../../images/arcEquip/ani/0.png";
import img1 from "../../images/arcEquip/ani/1.png";
import img2 from "../../images/arcEquip/ani/2.png";
import img3 from "../../images/arcEquip/ani/3.png";
import img4 from "../../images/arcEquip/ani/4.png";
import img5 from "../../images/arcEquip/ani/5.png";
import img6 from "../../images/arcEquip/ani/6.png";
import img7 from "../../images/arcEquip/ani/7.png";

const imgArr = [img0, img1, img2, img3, img4, img5, img6, img7];
const baseLeft = 50;
const baseTop = 44;

const leftArr = [0,0,0,-1,1,0,1,2];
const topArr = [8,6,0,0,0,2,6,3];
const PrintBgAnimation = () => {
    const [currentFrame, setCurrentFrame] = useState(0);
    
    useEffect(() => {
        const ani = setInterval(() => {
                setCurrentFrame((prev) => prev + 1);
        }, 100);
        return () => clearInterval(ani);
    },[]);

    return(
        <img src={imgArr[currentFrame % 8]} 
        style={{position:"absolute",
                left:`${baseLeft + leftArr[currentFrame%8]}px`,
                top:`${baseTop + topArr[currentFrame%8]}px`}} />
    )
}

export default PrintBgAnimation;