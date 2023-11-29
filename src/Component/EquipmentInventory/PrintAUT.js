import AutPlus from "../../images/autEquip/textUp/+.png";
import Aut from "../../images/autEquip/textUp/authentic.png";
import Aut0 from "../../images/autEquip/textUp/0.png";
import Aut1 from "../../images/autEquip/textUp/1.png";
import Aut2 from "../../images/autEquip/textUp/2.png";
import Aut3 from "../../images/autEquip/textUp/3.png";
import Aut4 from "../../images/autEquip/textUp/4.png";
import Aut5 from "../../images/autEquip/textUp/5.png";
import Aut6 from "../../images/autEquip/textUp/6.png";
import Aut7 from "../../images/autEquip/textUp/7.png";
import Aut8 from "../../images/autEquip/textUp/8.png";
import Aut9 from "../../images/autEquip/textUp/9.png";
import Str from "../../images/autEquip/textUp/str.png";
import Dex from "../../images/autEquip/textUp/dex.png";
import Int from "../../images/autEquip/textUp/int.png";
import Luk from "../../images/autEquip/textUp/luk.png";


const numbers = [Aut0, Aut1, Aut2, Aut3, Aut4, 
                 Aut5, Aut6, Aut7, Aut8, Aut9];

const stats = [Str, Dex, Int, Luk];

const PrintAUT = ({authentics}) => {
    let level = [0,0,0,0,0,0];
    let sumOfLevel = 0;
    let sumOfMainStat = 0;
    const mainStat = Object.keys(authentics[0].stat)[0];
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

    for(let i=0; i<authentics.length; i++) {
        level[i] = authentics[i].level;
        sumOfMainStat += Object.values(authentics[i].stat)[0];
        sumOfLevel += level[i];
    }

    let aut = 0;
    for(let i=0; i<level.length; i++) {
        if(level[i]) {
            aut += (level[i]) * 10
        }
    }

    const autArr = String(aut).split("").map((aut, index)=>{
        return {id: index, value : Number(aut)};
    })

    const mainStatArr = String(sumOfMainStat).split("").map((sumOfMainStat, index)=> {
        return {id: index, value : Number(sumOfMainStat)}
    })

    const autList = autArr.map((element, index) => 
        <div key={index} style={{float:"left", width:"6px", height:"14px", overflow:"hidden", marginRight:"2px"}}>
            <img key={element.id} src={numbers[element.value]} style={{objectFit:"cover", marginRight:"4px"}}></img>
        </div>)

    const mainStatList = mainStatArr.map((element, index) => 
    <div key={index} style={{float:"left", width:"6px", height:"14px", overflow:"hidden", marginRight:"2px"}}>
        <img key={element.id} src={numbers[element.value]} style={{objectFit:"cover", marginRight:"4px"}}></img>
    </div>)

    return (
        <>
            <div>
                <img src={Aut}></img>
                <div style={{float:"right"}}>
                    <img src={AutPlus} style={{float:"left", marginTop:"5px", marginRight:"2px"}}/>
                    {autList}
                </div>
            </div>
            <div style={{marginTop:"2px"}}>
                <img src={mainStatImg}></img>
                <div style={{float:"right"}}>
                    <img src={AutPlus} style={{float:"left", marginTop:"5px", marginRight:"2px"}}/>
                    {mainStatList}
                </div>
            </div>
        </>
    )
}

export default PrintAUT;