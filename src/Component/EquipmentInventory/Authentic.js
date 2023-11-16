import { useEffect, useState } from "react";
import { Cookies, useCookies } from "react-cookie";
import { DefaultAuthentic } from "./DefaultAuthentic";

const Authentic = () => {
    const [cookies, setCookie, removeCookie] = useCookies();
    const [authentics, setAuthentics] = useState(JSON.parse(localStorage.getItem(`testChItem${cookies.cId.cId}`))[0]?.authentics);
    const mainStat = Object.keys(JSON.parse(localStorage.getItem(`testChItem${cookies.cId.cId}`))[0]?.arcanes[0].stat)[0]

    const handleResetClick = () => {
        let resetObj = DefaultAuthentic;
        for(let i=0; i<resetObj.length; i++) {
            resetObj[i].stat = {};
            resetObj[i].stat[mainStat] = 0;
        }
        console.log(resetObj);
        let localStorageInfo = JSON.parse(localStorage.getItem(`testChItem${cookies.cId.cId}`))[0];
        console.log(localStorage);
        //localStorage.setItem
        //setAuthentics(JSON.parse(localStorage.getItem(`testChItem${cookies.cId.cId}`))[0]?.authentics);
    }

    if(Object.keys(authentics[0].stat)[0] !== mainStat) {
        handleResetClick();
    }

    
    //console.log(authentics);

}

export default Authentic;