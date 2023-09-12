import React from "react";
import styled from 'styled-components';
import Line_img from '../../images/frame/line.png';
import GradeRare_img from '../../images/grade/grade-rare.png';
import GradeEpic_img from '../../images/grade/grade-epic.png';
import GradeUnique_img from '../../images/grade/grade-unique.png';
import GradeLegendary_img from '../../images/grade/grade-legendary.png';

export const Line = styled.div`
  margin: 0px;
  padding: 0px;
  background-image: url('${Line_img}');
  overflow: auto;
`

export const GradeRare = styled.div`
 margin: 0px;
 padding: 0px;
 width: 13px;
 height: 16px;
 background-image: url('${GradeRare_img}');
 float:left;
 background-repeat: no-repeat;
 background-position: center center;
`

export const GradeEpic = styled.div`
 margin: 0px;
 padding: 0px;
 width: 13px;
 height: 16px;
 background-image: url('${GradeEpic_img}');
 float:left;
 background-repeat: no-repeat;
 background-position: center center;
`

export const GradeUnique = styled.div`
 margin: 0px;
 padding: 0px;
 width: 13px;
 height: 16px;
 background-image: url('${GradeUnique_img}');
 float:left;
 background-repeat: no-repeat;
 background-position: center center;
`

export const GradeLegendary = styled.div`
 margin: 0px;
 padding: 0px;
 width: 13px;
 height: 16px;
 background-image: url('${GradeLegendary_img}');
 float:left;
 background-repeat: no-repeat;
 background-position: center center;
`

export const RareText = styled.p`
    font-family : 'KoPubWorld Dotum Medium';
    font-weight: 100;
    color: #66FFFF;
    font-size: 11px;
    line-height: 16px;
    margin: 0px;
    margin-left:5px;
    padding: 0px;
    letter-spacing:1px;
    float:left;
`

export const EpicText = styled.p`
    font-family : 'KoPubWorld Dotum Medium';
    font-weight: 100;
    color: #9966FF;
    font-size: 11px;
    line-height: 16px;
    margin: 0px;
    margin-left:5px;
    padding: 0px;
    letter-spacing:1px;
    float:left;
`

export const UniqueText = styled.p`
    font-family : 'KoPubWorld Dotum Medium';
    font-weight: 100;
    color: #FFCC00;
    font-size: 11px;
    line-height: 16px;
    margin: 0px;
    margin-left:5px;
    padding: 0px;
    letter-spacing:1px;
    float:left;
`

export const LegendaryText = styled.p`
    font-family : 'KoPubWorld Dotum Medium';
    font-weight: 100;
    color: #CCFF00;
    font-size: 11px;
    line-height: 16px;
    margin: 0px;
    margin-left:5px;
    padding: 0px;
    letter-spacing:1px;
    float:left;
`

export const WhiteText = styled.p`
    font-family : 'KoPubWorld Dotum Medium';
    font-weight: 100;
    color: #FFFFFF;
    font-size: 11px;
    line-height: 14px;
    margin: 0px;
    margin-left: 0px;
    margin-right:0px;
    padding: 0px;
    letter-spacing: 0.3px;
    float:left;
`

export const Blank = styled.div`
    height: 11px;
    width: 3px;
    float: left;
`
export const NextLine = styled.div`
    margin:0px;
    padding:0px;
    height: 0px;
    clear:both;
`

const PotentialLine = (props) => {
    const grade = props.grade;
    const potential = props.potential.effects;
    const outputArr = [];
    switch(grade) {
        case "nothing":
            break;
        case "rare" :
            outputArr.push(<GradeRare/>);
            outputArr.push(<RareText>잠재옵션</RareText>)
            break;
        case "epic" :
            outputArr.push(<GradeEpic/>);
            outputArr.push(<EpicText>잠재옵션</EpicText>)
            break;
        case "unique" :
            outputArr.push(<GradeUnique/>);
            outputArr.push(<UniqueText>잠재옵션</UniqueText>)
            break;
        case "legendary" :
            outputArr.push(<GradeLegendary/>);
            outputArr.push(<LegendaryText>잠재옵션</LegendaryText>)
            break;
    }

    outputArr.push(<NextLine/>);

    const statDisplayArr = 
                    ['STR','DEX','INT','LUK','STR','DEX','INT','LUK','최대 HP','최대 HP','최대 HP',
                     '최대 MP','최대 MP','공격력','공격력','마력','마력','방어력','방어력','이동속도','점프력',
                     '몬스터 방어율 무시','보스 몬스터 공격 시 데미지','데미지','올스탯','올스탯','크리티컬 확률',
                     '크리티컬 데미지','메소 획득량','아이템 드롭률','HP 회복 아이템 및 회복 스킬 효율',
                     '모든 스킬의 재사용 대기시간'];

    const statArr = ['str','dex','int','luk','strP','dexP','intP','lukP','hp','hpP',
                     'mp','mpP','atk','atkP','mAtk','mAtkP','def','defP','speed','jump',
                     'ignoreDef','bossDmg','dmg','allStat','allStatP','crit',
                     'critDmg','meso','drop','hpHeal',
                     'reuse'];

    for(let key1 in potential) {
        for(let key2 in potential[key1]) {
            for(let i=0; i<statArr.length; i++) {
                if(key2 === statArr[i]) {
                    outputArr.push(<Blank/>)
                    outputArr.push(<Blank/>)
                    outputArr.push(<Blank/>)
                    outputArr.push(<WhiteText>{statDisplayArr[i]} : </WhiteText>)
                    outputArr.push(<Blank/>)
                    outputArr.push(<WhiteText> +{potential[key1][key2]}</WhiteText>)
                    if(key2 === "str" || key2 === "dex" || key2 === "int" || key2 === "luk"
                    || key2 === "hp" || key2 === "mp" || key2 === "atk" || key2 === "mAtk"
                    || key2 === "def" || key2 === "speed" || key2 === "jump" || key2 === "allStat"
                    || key2 === "recuse") {

                    } else {
                        outputArr.push(<WhiteText>%</WhiteText>)
                    }
                }
                outputArr.push(<NextLine/>)
            }
            console.log(key2);
            console.log(potential[key1][key2]);
        }
    }
    return(
        <Line>
            <div style={{width:"240px",margin:"0 auto", padding: "0px", marginTop:"5px"}}>
                {
                outputArr.map((value, index) => (
                <>
                    {value}
                </>
                ))
                }
                
            </div>
        </Line>
    );
}
export default PotentialLine;