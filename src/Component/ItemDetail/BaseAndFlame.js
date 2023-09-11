import React from "react";
import styled from 'styled-components';
import Line_img from '../../images/frame/line.png';

export const Line = styled.div`
  margin: 0px;
  padding: 0px;
  background-image: url('${Line_img}');
  overflow: auto;
`

export const WhiteText = styled.p`
    font-family : 'KoPubWorld Dotum Medium';
    font-weight: 100;
    color: #FFFFFF;
    font-size: 11px;
    line-height: 16px;
    margin: 0px;
    margin-right:2px;
    padding: 0px;
    letter-spacing: 0.1px;
    float:left;
`

export const BlueText = styled.p`
    font-family : 'KoPubWorld Dotum Medium';
    font-weight: 100;
    color: #66FFFF;
    font-size: 11px;
    line-height: 16px;
    margin: 0px;
    margin-right:2px;
    padding: 0px;
    letter-spacing: 0.1px;
    float:left;
`

export const LimeText = styled.p`
    font-family : 'KoPubWorld Dotum Medium';
    font-weight: 100;
    color: #CCFF00;
    font-size: 11px;
    line-height: 16px;
    margin: 0px;
    margin-right:2px;
    padding: 0px;
    float:left;
`

export const OrangeText = styled.text`
    font-family : 'KoPubWorld Dotum Medium';
    font-weight: 100;
    color: #FFCC00;
    font-size: 11px;
    line-height: 16px;
    margin: 0px;
    margin-right:2px;
    padding: 0px;
    float:left;
`

export const NextLine = styled.div`
    margin:0px;
    padding:0px;
    height: 0px;
    clear:both;
`

const BaseAndFlame = (props) => {
    const base = props.base;
    const flame = props.flame;
    const scroll = props.scroll;
    const category = props.category;

    const statDisplayArr = ['STR','DEX','INT','LUK','최대 HP','최대 MP','공격력','마력','방어력','이동속도','점프력',
                            '보스 몬스터 공격 시 데미지','몬스터 방어율 무시','데미지','올스텟','착용 레벨 감소'];
    const statArr = ['str','dex','int','luk','hp','mp','atk','mAtk','def','speed','jump','bossDmg','ignoreDef','dmg','allStatP','equipLevel'];
    const baseStatArr = [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0];
    const flameStatArr = [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0];
    const scrollStatArr = [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0];
    const sumStatArr = [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0];

    const outputArr = [];

    for(let key1 in base) {
        for(let i=0; i<statArr.length; i++) {
            if(key1 === statArr[i]) {
                baseStatArr[i] = base[key1];
            }
        }
    }

    for(let key2 in flame) {
        for(let j=0; j<statArr.length; j++) {
            if(key2 === statArr[j]) {
                flameStatArr[j] = flame[key2];
            }
        }
    }

    for(let key3 in scroll) {
        for(let k=0; k<statArr.length; k++) {
            if(key3 === statArr[k]) {
                scrollStatArr[k] = scroll[key3];
            }
        }
    }

    outputArr.push(<WhiteText>장비분류 : </WhiteText>)
    outputArr.push(<WhiteText>{category}</WhiteText>)
    outputArr.push(<NextLine/>)

    for(let l=0; l<sumStatArr.length; l++) {
        sumStatArr[l] = baseStatArr[l] + flameStatArr[l] + scrollStatArr[l];
        if(sumStatArr[l]!=0) {
            if(baseStatArr[l] < sumStatArr[l]) {
                if(l>11&&l<15){
                    outputArr.push(<BlueText>{statDisplayArr[l]} : </BlueText>)
                    outputArr.push(<BlueText>{sumStatArr[l]}%</BlueText>)
                    outputArr.push(<WhiteText>({baseStatArr[l]}%</WhiteText>)
                    outputArr.push(<LimeText>+{flameStatArr[l]}%</LimeText>)
                    outputArr.push(<OrangeText>+{scrollStatArr[l]}%</OrangeText>)
                    outputArr.push(<WhiteText>)</WhiteText>)
                }else{
                    outputArr.push(<BlueText>{statDisplayArr[l]} : </BlueText>)
                    outputArr.push(<BlueText>{sumStatArr[l]}</BlueText>)
                    outputArr.push(<WhiteText>({baseStatArr[l]}</WhiteText>)
                    outputArr.push(<LimeText>+{flameStatArr[l]}</LimeText>)
                    outputArr.push(<OrangeText>+{scrollStatArr[l]}</OrangeText>)
                    outputArr.push(<WhiteText>)</WhiteText>)
                }
            }else {
                if(l>11||l<15){
                    outputArr.push(<WhiteText>{statDisplayArr[l]} : </WhiteText>)
                    outputArr.push(<WhiteText> +{baseStatArr[l]}%</WhiteText>)
                }else{
                    outputArr.push(<WhiteText>{statDisplayArr[l]} : </WhiteText>)
                    outputArr.push(<WhiteText> +{baseStatArr[l]}</WhiteText>)
                }
            }
            outputArr.push(<NextLine/>);
        }
    }

    return(
        <Line>
            <div style={{width:"230px",margin:"0 auto", padding: "0px"}}>
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

export default BaseAndFlame;