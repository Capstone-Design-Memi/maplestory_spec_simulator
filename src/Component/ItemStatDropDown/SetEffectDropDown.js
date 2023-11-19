import TopFrame_img from "../../images/frame/top.png";
import Line_img from "../../images/frame/line.png";
import WhiteLine_img from "../../images/frame/whiteLine.png";
import { Cookies, useCookies } from "react-cookie";
import styled from "styled-components";
import { SetEffect } from "../../Util/SetEffect";
import Convert from "../../Util/Convert";
import BottomFrame_img from "../../images/frame/bottom.png";


export const Line = styled.div`
  margin: 0px;
  padding: 0px;
  background-image: url('${Line_img}');
  justify-content : center;
`

export const WhiteLine = styled.div`
  height: 1px;
  margin: 0px;
  padding: 0px;
  background-image: url('${WhiteLine_img}');
  justify-content : center;
`

export const TopFrame = styled.div`
  height: 13px;
  background-image: url("${TopFrame_img}");
`;

export const BottomFrame = styled.div`
  height: 13px;
  background-image: url("${BottomFrame_img}");
`;

const Name = styled.span`
    letter-spacing: 0px;
    color: #CCFF00;
    font-size: 11px;
    font-weight: 400;
    font-family : 'KoPubWorld Dotum Medium';
    justify-content:center;
    align-items:center;
    display:flex;
`

const NSetEffect = styled.span`
    letter-spacing: 0px;
    color: #CCFF00;
    margin-left: 10px;
    font-size: 11px;
    font-weight: 400;
    font-family : 'KoPubWorld Dotum Medium';
`

const IncludeItem = styled.span`
    margin-left: 10px;
    margin-right: 10px;
    letter-spacing: 0px;
    color: #FFFFFF;
    font-size: 11px;
    font-weight: 400;
    font-family : 'KoPubWorld Dotum Medium';
`

const WhiteText = styled.span`
    letter-spacing: 0px;
    color: #FFFFFF;
    font-size: 11px;
    font-weight: 400;
    font-family : 'KoPubWorld Dotum Medium';
`

const GrayText = styled.span`
    letter-spacing: 0px;
    color: #808080;
    font-size: 11px;
    font-weight: 400;
    font-family : 'KoPubWorld Dotum Medium';
`

const NotIncludeItem = styled.span`
    margin-left: 10px;
    margin-right: 10px;
    letter-spacing: 0px;
    color: #808080;
    font-size: 11px;
    font-weight: 400;
    font-family : 'KoPubWorld Dotum Medium';
`

const SetEffectDropDown = ({item}) => {
    const [cookies, setCookie, removeCookie] = useCookies();
    const setEffects = JSON.parse(localStorage.getItem(`testChItem${cookies.cId.cId}`))[0]?.setEffects;
    const allItems = JSON.parse(localStorage.getItem(`testChItem${cookies.cId.cId}`))[0]?.data;

    let allItemsNameArr = [];
    allItems.map((element) => {
        allItemsNameArr.push(element.name);
    })

    let setEffectName;

    setEffects.map((element) => {
        if(element.items.includes(item.name)) {
            setEffectName = element.setEffect;
        }
    })

    const currentSetEffect = SetEffect.find((element) =>  {
        return (element.name === setEffectName);
    })

    const equipedSetEffect = setEffects.find((element) => {
        return (element.setEffect === setEffectName);
    })

    const setItemsList = currentSetEffect.display.map((element) => 
        <div>
            {
                allItemsNameArr.includes(element.name)
                ?
                <><IncludeItem>{element.name}</IncludeItem>
                <IncludeItem style={{float:"right"}}>({element.parts})</IncludeItem></>
                :
                <>
                    {
                        element.name.endsWith("중 택1") && 
                        element.selects.filter(it => allItemsNameArr.includes(it)).length > 0
                        ?
                        <><IncludeItem>{element.name}</IncludeItem>
                        <IncludeItem style={{float:"right"}}>({element.parts})</IncludeItem></>
                        :
                        <><NotIncludeItem>{element.name}</NotIncludeItem>
                        <NotIncludeItem style={{float:"right"}}>({element.parts})</NotIncludeItem></>
                    }
                </>
            }
        </div>
    )

    const returnConvert = (value) => {
        const result =  Convert.find((element) => {
            return (element.value === value)
        })
        return result;
    }

    const setEffectsList = currentSetEffect.effects.map((element, index) => 
        <>  
            {
                Object.keys(element).length > 0 &&
                <>
                <div style={{height:"15px"}}>
                    <NSetEffect>{index}세트효과</NSetEffect> 
                </div>
                {
                    Object.entries(element).map((element2) =>
                        <div style={{height:"15px"}}>
                            {
                                equipedSetEffect.items.length + 1 > index ?
                                <>
                                <WhiteText style={{marginLeft:"10px"}}>
                                {returnConvert(element2[0]).first} : 
                                </WhiteText> 
                                <WhiteText> +{element2[1]}</WhiteText>
                                {
                                    returnConvert(element2[0]).persent &&
                                    <WhiteText>%</WhiteText>
                                }
                                </>
                                :
                                <>
                                <GrayText style={{marginLeft:"10px"}}>
                                {returnConvert(element2[0]).first} : 
                                </GrayText> 
                                <GrayText> +{element2[1]}</GrayText>
                                {
                                    returnConvert(element2[0]).persent &&
                                    <GrayText>%</GrayText>
                                }
                                </>
                            }
                        </div>
                    )
                }
                </>
            }
        </>
    )

    return (
        <div style={{width:"261px"}}>
            <TopFrame/>
            <Line>
                <Name>{currentSetEffect.name}</Name>
                <div style={{marginTop:"5px"}}>
                {setItemsList}
                </div>
            </Line>
            <Line style={{height:"5px"}}/>
            <WhiteLine/>
            <Line>
                {setEffectsList}
            </Line>
            <Line style={{height:"10px"}}/>
            <BottomFrame/>
        </div>
    )
}

export default SetEffectDropDown