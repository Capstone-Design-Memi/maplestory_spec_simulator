import Number0 from "../../images/autEquip/textDown/0.png";
import Number1 from "../../images/autEquip/textDown/1.png";
import Number2 from "../../images/autEquip/textDown/2.png";
import Number3 from "../../images/autEquip/textDown/3.png";
import Number4 from "../../images/autEquip/textDown/4.png";
import Number5 from "../../images/autEquip/textDown/5.png";
import Number6 from "../../images/autEquip/textDown/6.png";
import Number7 from "../../images/autEquip/textDown/7.png";
import Number8 from "../../images/autEquip/textDown/8.png";
import Number9 from "../../images/autEquip/textDown/9.png";

const numberArr = [Number0, Number1, Number2, Number3, Number4,
                   Number5, Number6, Number7, Number8, Number9];

const PrintAuthenticLevel = ({authentic}) => {
    let output = [];

    if(authentic) {
        let level = authentic.level;
        if(level >= 10) {
            output.push({ id: 1, value : parseInt(level / 10)});
            output.push({ id: 2, value: level % 10});
        }else {
            output.push({ id: 1, value: level});
        }
    } else {
        output.push({ id: 1, value: 0});
    }

    const levelList = output.map((element) => 
    <img key={element.id} src={numberArr[element.value]}></img>);

    return (
        <div style={{float:"right", marginRight: "5px", marginTop:"36px", height:"11px"}}>
            {levelList}
        </div>
    )
}

export default PrintAuthenticLevel;