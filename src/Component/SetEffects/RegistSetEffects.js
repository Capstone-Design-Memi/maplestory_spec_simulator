import { Cookies, useCookies } from "react-cookie";
import { SetEffect } from "../../Util/SetEffect";

const RegistSetEffects = () => {
    const [cookies, setCookie, removeCookie] = useCookies();
    const localStorageData = JSON.parse(localStorage.getItem(`testChItem${cookies.cId.cId}`))[0];
    const items = localStorageData.data;

    let result = [];
    let alreadyRegisted = [];
    
    const registFunction = (itemName, setName) => {
        if(alreadyRegisted.includes(setName)) {
            result.map((element, index) => {
                if(element.setEffect === setName) {
                    element.items.push(itemName);
                }
            })
        }else {
            alreadyRegisted.push(setName);
            result.push(
                {
                    setEffect : setName,
                    items : [itemName],
                    effects : [],
                }
            )
        }
    }

    for(let i=0; i<items.length; i++) {
        let itemName = items[i].name;

        SetEffect.map((element) => {
            let setName = element.name;
            if(element.includes.includes(itemName)) {
                registFunction(itemName, setName);
            }
        })
    }

    for(let i=0; i<result.length; i++) {
        let setArr = [];
        SetEffect.map((element) => {
            if(element.name === result[i].setEffect) {
                setArr = element.effects;
            }
        })

        for(let j=0; j<result[i].items.length+1; j++) {
            result[i].effects.push(setArr[j]);
        }
    }

    localStorage.setItem(`testChItem${cookies.cId.cId}`, JSON.stringify([{...localStorageData, setEffects: result}]));
}

export default RegistSetEffects;