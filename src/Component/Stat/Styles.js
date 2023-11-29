import styled from "styled-components"
import '../../Fonts/Font.css';
import Backgrnd from "../../images/statWindow/common/main/backgrnd.png";
import Layer_name from "../../images/statWindow/common/main/layer_name.png";
import Backgrnd2 from "../../images/statWindow/local/detail/backgrnd.png";
import Stat_img from "../../images/statWindow/local/detail/layer_stat.png";
import Canvas_attackBack from "../../images/statWindow/common/detailStat/canvas_attackBack.png";
import Canvas_mainStatBack from "../../images/statWindow/local/detailStat/canvas_mainStatBack.png";
import Canvas_utilityBack from "../../images/statWindow/common/detailStat/canvas_utilityBack.png";
import ApDistribute_disabled from "../../images/statWindow/local/detailStat/button_apDistribution/disabled.png";
import ApDistribute_mouseOver from "../../images/statWindow/local/detailStat/button_apDistribution/mouseOver.png";
import ApDistribute_normal from "../../images/statWindow/local/detailStat/button_apDistribution/normal.png";
import ApDistribute_pressed from "../../images/statWindow/local/detailStat/button_apDistribution/pressed.png";
import Ability_disabled from "../../images/statWindow/common/detailStat/button_ability/disabled.png";
import Ability_mouseOver from "../../images/statWindow/common/detailStat/button_ability/mouseOver.png";
import Ability_normal from "../../images/statWindow/common/detailStat/button_ability/normal.png";
import Ability_pressed from "../../images/statWindow/common/detailStat/button_ability/pressed.png";
import Hyper_backgrnd from "../../images/statWindow/local/detailStat/HyperStat/Window/backgrnd.png";
import Hyper_disabled from "../../images/statWindow/common/detailStat/button_hyper/disabled.png";
import Hyper_mouseOver from "../../images/statWindow/common/detailStat/button_hyper/mouseOver.png";
import Hyper_normal from "../../images/statWindow/common/detailStat/button_hyper/normal.png";
import Hyper_pressed from "../../images/statWindow/common/detailStat/button_hyper/pressed.png";
import Canvas_mainStatFont from "../../images/statWindow/common/detailStat/canvas_mainStatFont.png";
import Canvas_attackFont from "../../images/statWindow/common/detailStat/canvas_attackFont.png";
import Canvas_utilityFont from "../../images/statWindow/common/detailStat/canvas_utilityFont.png";
import Canvas_defenseFont from "../../images/statWindow/common/detailStat/canvas_defenseFont.png";
import HyperStatUp_disabled from "../../images/statWindow/local/detailStat/button_lvUpHp/disabled.png";
import HyperStatUp_mouseOver from "../../images/statWindow/local/detailStat/button_lvUpHp/mouseOver.png";
import HyperStatUp_normal from "../../images/statWindow/local/detailStat/button_lvUpHp/normal.png";
import HyperStatUp_pressed from "../../images/statWindow/local/detailStat/button_lvUpHp/pressed.png";
import HyperStatReset_mouseOver from "../../images/statWindow/local/detailStat/HyperStat/Window/button_reset/mouseOver.png"
import HyperStatReset_disabled from "../../images/statWindow/local/detailStat/HyperStat/Window/button_reset/disabled.png"
import HyperStatReset_noraml from "../../images/statWindow/local/detailStat/HyperStat/Window/button_reset/normal.png"
import HyperStatReset_pressed from "../../images/statWindow/local/detailStat/HyperStat/Window/button_reset/pressed.png"
import Line_img from "../../images/frame/line.png";
import TopFrame_img from "../../images/frame/top.png";
import BottomFrame_img from "../../images/frame/bottom.png";

export const MainText = styled.span`
color: #FFFFFF;
font-size: 14px;
justify-content: center;
align-items: center;
display: flex;
font-family : "KoPubWorld Dotum Bold";
margin-bottom : 10px;
`

export const SubText = styled.span`
color: #FFFFFF;
font-size: 12px;
line-height: 14px;
justify-content: left;
align-items: center;
display: flex;
text-align: left;
font-weight: 300;
font-family : "KoPubWorld Dotum Medium";
`

export const Menu = styled.div`
  width: 261px;
  position: absolute;
  left: ${props => `${props.xy.x}px`};
  top: ${props => `${props.xy.y}px`};
`

export const BottomFrame = styled.div`
  height: 13px;
  background-image: url("${BottomFrame_img}");
`;

export const Line = styled.div`
  margin: 0px;
  padding: 0px;
  background-image: url('${Line_img}');
  justify-content : center;
`

export const TopFrame = styled.div`
  height: 13px;
  background-image: url("${TopFrame_img}");
`;

export const B1 = styled.div`
width: 14px;
height: 18px;
`

export const Section = styled.div`
width: 207px;
height: 18px;
&:hover {
  background-color: rgb(67,79,92, 100);
}
`

export const LevelText = styled.span`
color: #FFFFFF;
font-size: 11px;
justify-content: center;
align-items: center;
display: flex;
font-family : "KoPubWorld Dotum Bold";
margin-left: 16px;
margin-top : 35px;
`

export const HyperStatText = styled.span`
color: #FFFFFF;
font-size: 11px;
justify-content: center;
align-items: center;
display: flex;
font-family : "KoPubWorld Dotum Bold";
line-height: 19px;
`

export const GuildText = styled.span`
height: 18px;
float:right;
margin-top: 147px;
margin-right: 30px;
letter-spacing: 1px;
color: #444444;
font-size: 11px;
justify-content: center;
align-items: center;
display: flex;
font-family : "KoPubWorld Dotum Light";
`

export const NameText = styled.span`
height: 18px;
letter-spacing: 1px;
color: #FFFFFF;
font-size: 11px;
justify-content: center;
align-items: center;
display: flex;
font-family : "KoPubWorld Dotum Light";
`

export const CharacterImg =styled.div`
margin-top:2px;
background-position:center;
background-repeat:no-repeat;
height: 120px;
background-size: auto;
`

export const HyperBack = styled.div`
width: 214px;
height: 482px;
background-image: url(${Hyper_backgrnd});
background-position:center;
background-repeat:no-repeat;
display:inline-block;
background-size:cover;
margin-top: 2px;
position: absolute;
left: -214px;
top: 0px;
`

export const HyperButton = styled.button`
width: 106px;
height: 23px;
float: left;
margin-left: 10px;
border: 0;
outline: 0;
border-radius: 12px;
background-image: url("${Hyper_normal}");
&:hover{
    background-image: url("${Hyper_mouseOver}");
}
&:active{
    background-image: url("${Hyper_pressed}");
}
`

export const HyperStatResetButton = styled.button`
width: 66px;
height: 24px;
float: left;
border: 0;
outline: 0;
border-radius: 12px;
background-image: url("${HyperStatReset_mouseOver}");
&:hover{
    background-image: url("${HyperStatReset_mouseOver}");
}
&:active{
    background-image: url("${HyperStatReset_pressed}");
}
`

export const HyperStatUpButton = styled.button`
width: 16px;
height: 16px;
border: 0;
outline: 0;
border-radius: 5px;
margin-left: 140px;
background-image: url("${HyperStatUp_normal}");
&:hover{
    background-image: url("${HyperStatUp_mouseOver}");
}
&:active{
    background-image: url("${HyperStatUp_pressed}");
}
&:disabled{
  background-image: url("${HyperStatUp_disabled}");
}
`

export const AbilityButton = styled.button`
width: 106px;
height: 23px;
float: right;
margin-right: 10px;
border: 0;
outline: 0;
border-radius: 12px;
background-image: url("${Ability_normal}");
&:hover{
    background-image: url("${Ability_mouseOver}");
}
&:active{
    background-image: url("${Ability_pressed}");
}
`

export const ApDistributeButton = styled.button`
width: 10px;
height: 81px;
border: 0;
outline: 0;
border-radius: 50px;
background-image: url("${ApDistribute_normal}");
&:hover{
    background-image: url("${ApDistribute_mouseOver}");
}
&:active{
    background-image: url("${ApDistribute_pressed}");
}
`

export const UtilityBack = styled.div`
  width: 448px;
  height: 92px;
  background-image: url(${Canvas_utilityBack});
  background-position:center;
  background-repeat:no-repeat;
  display:inline-block;
  background-size:cover;
  margin-top: 2px;
`

export const UtilityFont = styled.div`
  width: 271px;
  height: 74px;
  margin-top: 15px;
  margin-left: 10px;
  background-image: url(${Canvas_utilityFont});
  background-position:center;
  background-repeat:no-repeat;
  background-size:cover;
`

export const DefenseFont = styled.div`
  width: 283px;
  height: 74px;
  margin-top: 15px;
  margin-left: 10px;
  background-image: url(${Canvas_defenseFont});
  background-position:center;
  background-repeat:no-repeat;
  background-size:cover;
`

export const MainStatBack = styled.div`
  width: 435px;
  height: 81px;
  background-image: url(${Canvas_mainStatBack});
  background-position:center;
  background-repeat:no-repeat;
  display:inline-block;
  background-size:cover;
  float:left;
`

export const MainStatFont = styled.div`
  width: 242px;
  height: 53px;
  margin-top: 15px;
  margin-left: 10px;
  position: absolute;
  background-image: url(${Canvas_mainStatFont});
  background-position:center;
  background-repeat:no-repeat;
  background-size:cover;
  pointer-events: none;
`

export const AttackBack = styled.div`
  width: 448px;
  height: 312px;
  background-image: url(${Canvas_attackBack});
  background-position:center;
  background-repeat:no-repeat;
  display:inline-block;
  background-size:cover;
  margin-top:4px;
`

export const AttactFont = styled.div`
  width: 318px;
  height: 167px;
  margin-top: 15px;
  margin-left: 10px;
  background-image: url(${Canvas_attackFont});
  background-position:center;
  background-repeat:no-repeat;
  background-size:cover;
`

export const Stat = styled.div`
  width: 450px;
  height: 20px;
  background-image: url(${Stat_img});
  background-position:center;
  background-repeat:no-repeat;
  background-size:cover;
  display:inline-block;
  margin-top:10px;
`

export const CharacterInfo = styled.div`
  width: 472px;
  height: 230px;
  background-image: url("${Backgrnd}");
  background-position:center;
  background-repeat:no-repeat;
  background-size:cover;
  display:flex;
`;

export const LayerName = styled.div`
  flex: 1;
  background-image: url("${Layer_name}");
  background-position:center 32px;
  background-repeat:no-repeat;
  background-size:auto;
`

export const StatBackgrnd = styled.div`
  width: 472px;
  height: 479px;
  margin-top: 1px;
  position: relative;
  background-image: url("${Backgrnd2}");
  background-position:center;
  background-repeat:no-repeat;
  background-size:cover;
  display:block;
  text-align:center;
`