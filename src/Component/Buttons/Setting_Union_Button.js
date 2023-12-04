import React from "react";
import {useState} from "react"; 


const defaultUnion = [
    {
        str : 0,
        dex : 0,
        int : 0,
        luk : 0,
        atk : 0,
        mAtk : 0,
        crit : 0,
        critDmg : 0,
        ignoreDef : 0,
        bossDmg : 0,
        buff : 0,
        meso : 0,
    },
    {
        str : 0,
        dex : 0,
        int : 0,
        luk : 0,
        atk : 0,
        mAtk : 0,
        hp : 0,
        mp : 0,
        crit : 0,
        critDmg : 0,
        ignoreDef : 0,
        bossDmg : 0,
        buff : 0,
        mobDmg : 0,
        statusDmg : 0,
        exp : 0,
    }
]

export const Setting_Unions_Button = () => {
    const [isClicked, setIsClicked] = useState(false);
    const [unionLocalStorage, setUnionLocalStorage] = useState(JSON.parse(localStorage.getItem('union')))

    let inputValue;
    let inputValue2;

    if(!unionLocalStorage) {
        inputValue = defaultUnion[0];
        inputValue2 = defaultUnion[1];
        localStorage.setItem('union', JSON.stringify(defaultUnion));
    }else {
        inputValue = unionLocalStorage[0];
        inputValue2 = unionLocalStorage[1];
    }

    const handleClickButton = () => {
        setIsClicked(!isClicked);
    }

    const unionLocalStorageUpdate = () => {
        setUnionLocalStorage(JSON.parse(localStorage.getItem('union')));
    }

    const handleReset = () => {
        localStorage.setItem('union', JSON.stringify(defaultUnion));
        unionLocalStorageUpdate();
    }

    const onChangeStat = (e) => {
        let { value, name } = e.target;
        if(!value) {
            value = 0;
        }

        inputValue = {
            ...inputValue,
            [name]: parseInt(value)
        }

        //console.log(inputValue);
    }

    const onChangeStat2 = (e) => {
        let { value, name } = e.target;
        if(!value) {
            value = 0;
        }

        inputValue2 = {
            ...inputValue2,
            [name]: parseInt(value)
        }
    }

    const handleClickConfirm = () => {
        localStorage.setItem('union', JSON.stringify([inputValue,inputValue2]));
        unionLocalStorageUpdate();
        setIsClicked(false);
    }

    return (
        <div style={{width:"250px"}}>
        <button onClick={handleClickButton} style={{width:"50px",height:"50px"}}>유니온 설정</button>
        {
            isClicked && (
                <div style={{position:"absolute", zIndex:3, backgroundColor:"lime", width:"250px", left:"50px", top:"0px"}}>
                <div>
                    STR : <input type="text" name="str" style={{width:"50px"}} defaultValue={unionLocalStorage[0].str} onChange={onChangeStat}/><br/>
                    DEX : <input type="text" name="dex" style={{width:"50px"}} defaultValue={unionLocalStorage[0].dex} onChange={onChangeStat}/><br/>
                    INT : <input type="text" name="int" style={{width:"50px"}} defaultValue={unionLocalStorage[0].int} onChange={onChangeStat}/><br/>
                    LUK : <input type="text" name="luk" style={{width:"50px"}} defaultValue={unionLocalStorage[0].luk} onChange={onChangeStat}/><br/>
                    공격력 : <input type="text" name="atk" style={{width:"50px"}} defaultValue={unionLocalStorage[0].atk} onChange={onChangeStat}/><br/>
                    마력 : <input type="text" name="mAtk" style={{width:"50px"}} defaultValue={unionLocalStorage[0].mAtk} onChange={onChangeStat}/><br/>
                    크리티컬 확률 : <input type="text" name="crit" style={{width:"50px"}} defaultValue={unionLocalStorage[0].crit} onChange={onChangeStat}/>%<br/>
                    크리티컬 데미지 : <input type="text" name="critDmg" style={{width:"50px"}} defaultValue={unionLocalStorage[0].critDmg} onChange={onChangeStat}/>%<br/>
                    방어율 무시 : <input type="text" name="ignoreDef" style={{width:"50px"}} defaultValue={unionLocalStorage[0].ignoreDef} onChange={onChangeStat}/>%<br/>
                    보스 공격 시 데미지 : <input type="text" name="bossDmg" style={{width:"50px"}} defaultValue={unionLocalStorage[0].bossDmg} onChange={onChangeStat}/>%<br/>
                    버프 지속 시간 : <input type="text" name="buff" style={{width:"50px"}} defaultValue={unionLocalStorage[0].buff} onChange={onChangeStat}/><br/>
                </div>
                <hr/>
                <div>
                    STR : <input type="text" name="str" style={{width:"50px"}} defaultValue={unionLocalStorage[1].str} onChange={onChangeStat2}/><br/>
                    DEX : <input type="text" name="dex" style={{width:"50px"}} defaultValue={unionLocalStorage[1].dex} onChange={onChangeStat2}/><br/>
                    INT : <input type="text" name="int" style={{width:"50px"}} defaultValue={unionLocalStorage[1].int} onChange={onChangeStat2}/><br/>
                    LUK : <input type="text" name="luk" style={{width:"50px"}} defaultValue={unionLocalStorage[1].luk} onChange={onChangeStat2}/><br/>
                    공격력 : <input type="text" name="atk" style={{width:"50px"}} defaultValue={unionLocalStorage[1].atk} onChange={onChangeStat2}/><br/>
                    마력 : <input type="text" name="mAtk" style={{width:"50px"}} defaultValue={unionLocalStorage[1].mAtk} onChange={onChangeStat2}/><br/>
                    HP : <input type="text" name="hp" style={{width:"50px"}} defaultValue={unionLocalStorage[1].hp} onChange={onChangeStat2}/><br/>
                    MP : <input type="text" name="mp" style={{width:"50px"}} defaultValue={unionLocalStorage[1].mp} onChange={onChangeStat2}/><br/>
                    크리티컬 확률 : <input type="text" name="crit" style={{width:"50px"}} defaultValue={unionLocalStorage[1].crit} onChange={onChangeStat2}/>%<br/>
                    크리티컬 데미지 : <input type="text" name="critDmg" style={{width:"50px"}} defaultValue={unionLocalStorage[1].critDmg} onChange={onChangeStat2}/>%<br/>
                    방어율 무시 : <input type="text" name="ignoreDef" style={{width:"50px"}} defaultValue={unionLocalStorage[1].ignoreDef} onChange={onChangeStat2}/>%<br/>
                    보스 공격 시 데미지 : <input type="text" name="bossDmg" style={{width:"50px"}} defaultValue={unionLocalStorage[1].bossDmg} onChange={onChangeStat2}/>%<br/>
                    버프 지속 시간 : <input type="text" name="buff" style={{width:"50px"}} defaultValue={unionLocalStorage[1].buff} onChange={onChangeStat2}/><br/>
                    일반 몬스터 데미지 : <input type="text" name="mobDmg" style={{width:"50px"}} defaultValue={unionLocalStorage[1].mobDmg} onChange={onChangeStat2}/>%<br/>
                    상태이상 데미지 : <input type="text" name="statusDmg" style={{width:"50px"}} defaultValue={unionLocalStorage[1].statusDmg} onChange={onChangeStat2}/>%<br/>
                    획득 경험치 : <input type="text" name="exp" style={{width:"50px"}} defaultValue={unionLocalStorage[1].exp} onChange={onChangeStat2}/>%<br/>
                </div>
                <button onClick={handleClickButton}>취소</button><button onClick={handleClickConfirm}>확인</button>
                </div>
            )
        }
        </div>
    )
}
