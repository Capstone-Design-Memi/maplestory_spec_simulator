import Number0 from "../../images/arcEquip/textDown/0.png";
import Number1 from "../../images/arcEquip/textDown/1.png";
import Number2 from "../../images/arcEquip/textDown/2.png";
import Number3 from "../../images/arcEquip/textDown/3.png";
import Number4 from "../../images/arcEquip/textDown/4.png";
import Number5 from "../../images/arcEquip/textDown/5.png";
import Number6 from "../../images/arcEquip/textDown/6.png";
import Number7 from "../../images/arcEquip/textDown/7.png";
import Number8 from "../../images/arcEquip/textDown/8.png";
import Number9 from "../../images/arcEquip/textDown/9.png";

const PrintArcaneLevel = ({arcane}) => {
    const numberArr = [Number0,Number1,Number2,Number3,Number4,
                       Number5,Number6,Number7,Number8,Number9];

    let output = [];

    if(arcane) {
        let level = arcane.level;
        if(level >= 10) {
            output.push({ id: 1, value : parseInt(level/10)});
            output.push({ id: 2, value : level%10});
        }else {
            output.push({ id: 1, value: level});
        }
    }else {
        output.push({id: 1, value: 0});
    }

    const levelList = output.map((element) => 
    <img key={element.id} src={numberArr[element.value]}></img>);

    return (
        <div style={{marginTop:"5px", float:"right", marginRight: "5px"}}>
            {levelList}
        </div>
    )
}

export default PrintArcaneLevel;