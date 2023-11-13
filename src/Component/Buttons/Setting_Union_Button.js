import React from "react";
import {useState} from "react"; 


const defaultUnion = {
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
}

export const Setting_Unions_Button = () => {
    const [isClicked, setIsClicked] = useState(false);
    const [unionLocalStorage, setUnionLocalStorage] = useState(JSON.parse(localStorage.getItem('union')))

    

    if(!unionLocalStorage) {
        localStorage.setItem('union', JSON.stringify(defaultUnion));
    }

    let inputValue = unionLocalStorage;

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

    const handleClickConfirm = () => {
        localStorage.setItem('union', JSON.stringify(inputValue));
        unionLocalStorageUpdate();
        setIsClicked(false);
    }

    return (
        <>
        <button onClick={handleClickButton} style={{width:"50px",height:"50px"}}>유니온 설정</button>
        {
            isClicked && (
                <div style={{position:"absolute", zIndex:1, backgroundColor:"skyblue", width:"250px", left:"50px", top:"0px"}}>
                    STR : <input type="text" name="str" style={{width:"50px"}} defaultValue={unionLocalStorage.str} onChange={onChangeStat}/><br/>
                    DEX : <input type="text" name="dex" style={{width:"50px"}} defaultValue={unionLocalStorage.dex} onChange={onChangeStat}/><br/>
                    INT : <input type="text" name="int" style={{width:"50px"}} defaultValue={unionLocalStorage.int} onChange={onChangeStat}/><br/>
                    LUK : <input type="text" name="luk" style={{width:"50px"}} defaultValue={unionLocalStorage.luk} onChange={onChangeStat}/><br/>
                    공격력 : <input type="text" name="atk" style={{width:"50px"}} defaultValue={unionLocalStorage.atk} onChange={onChangeStat}/><br/>
                    마력 : <input type="text" name="mAtk" style={{width:"50px"}} defaultValue={unionLocalStorage.mAtk} onChange={onChangeStat}/><br/>
                    크리티컬 확률 : <input type="text" name="crit" style={{width:"50px"}} defaultValue={unionLocalStorage.crit} onChange={onChangeStat}/>%<br/>
                    크리티컬 데미지 : <input type="text" name="critDmg" style={{width:"50px"}} defaultValue={unionLocalStorage.critDmg} onChange={onChangeStat}/><br/>
                    방어율 무시 : <input type="text" name="ignoreDef" style={{width:"50px"}} defaultValue={unionLocalStorage.ignoreDef} onChange={onChangeStat}/>%<br/>
                    보스 공격 시 데미지 : <input type="text" name="bossDmg" style={{width:"50px"}} defaultValue={unionLocalStorage.bossDmg} onChange={onChangeStat}/>%<br/>
                    버프 지속 시간 : <input type="text" name="buff" style={{width:"50px"}} defaultValue={unionLocalStorage.buff} onChange={onChangeStat}/><br/>
                    <button onClick={handleClickButton}>취소</button><button onClick={handleClickConfirm}>확인</button>
                </div>
            )
        }
        </>
    )
}
