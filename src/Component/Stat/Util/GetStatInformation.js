import React, { useContext } from "react";
import { LocalStorageContext } from "../../../Context/LocalStorageContext";
import { JobList } from "./JobList";
import { DefaultSpecData } from "./DefaultSpecData";
import { AllOfStatName, AllOfStatNameWithPersent } from "./AllOfStatName";

export const GetMainStat = () => {
    const {information, setInformationHandler} = useContext(LocalStorageContext);

    return Object.entries(JobList).find(([key,value]) => value.includes(information.job))[0];
}

export const GetStatInformation = () => {
    const {information, setInformationHandler} = useContext(LocalStorageContext);
    const mainStat = GetMainStat();

    let newStatNames = JSON.parse(JSON.stringify(AllOfStatName));
    let union = JSON.parse(localStorage.getItem("union"));

    const result = {
        base : {
            base : {str:4, dex:4, int:4, luk:4, hp:4},
            skill : {...newStatNames},
            item : {...newStatNames},
            union : {...union[1]},
            title : {...newStatNames},
        },
        persent : {
            item : {...AllOfStatNameWithPersent},
        },
        noPersent : {
            hexa : {str:0,dex:0,int:0,luk: 1000},
            union : {str:0,dex:0,int:0,luk:0,...union[0]},
            hyper : {str:0,dex:0,int:0,luk:0,...information.spec.hypers},
            arcane : {str:0, dex:0, int:0, luk:0, hp: 0},
            authentic : {str:0, dex:0, int:0, luk:0, hp: 0},
            ability : {},
        }
    };

    information.arcanes.map((arcane) => {
        let obj = Object.entries(arcane.stat)[0];
        result.noPersent.arcane[obj[0]] += obj[1];
    })

    information.authentics.map((authentic) => {
        let obj = Object.entries(authentic.stat)[0];
        result.noPersent.authentic[obj[0]] += obj[1];
    })

    result.base.base[mainStat] = 5 * information.level + 18;

    result.base.skill = {...result.base.skill,
    ...JSON.parse(JSON.stringify(
    DefaultSpecData.find((e)=> e.job === information.job).spec))}
    
    const stats = result.base.item;
    const persentStats = result.persent.item;
    
    information.data.map((item) => {
        const {base, flame, potential, scroll, grade} = item;
        if(base) {
            for(let key in stats) {
                if(base.hasOwnProperty(key)) {
                    stats[key] += base[key];
                }
            }
            for(let key in persentStats) {
                if(base.hasOwnProperty(key)) {
                    persentStats[key] += base[key];
                }
            }
            if(base.hasOwnProperty("ignoreDef")) {
                stats.ignoreDefArr.push(base.ignoreDef);
            }
        }

        if(flame) {
            for(let key in stats) {
                if(flame.hasOwnProperty(key)) {
                    stats[key] += flame[key];
                }
            }
            for(let key in persentStats) {
                if(flame.hasOwnProperty(key)) {
                    persentStats[key] += flame[key];
                }
            }
            if(flame.hasOwnProperty("ignoreDef")) {
                stats.ignoreDefArr.push(flame.ignoreDef);
            }
        }

        if(scroll) {
            for(let key in stats) {
                if(scroll.hasOwnProperty(key)) {
                    stats[key] += scroll[key];
                }
            }
            for(let key in persentStats) {
                if(scroll.hasOwnProperty(key)) {
                    persentStats[key] += scroll[key];
                }
            }
            if(scroll.hasOwnProperty("ignoreDef")) {
                stats.ignoreDefArr.push(scroll.ignoreDef);
            }
        }

        if(grade !== "nothing") {
            let potentialArr = potential.effects;

            for(let key in stats) {
                for(let i=0; i<potentialArr.length; i++) {
                    if(potentialArr[i].hasOwnProperty(key)) {
                        stats[key] += potentialArr[i][key];
                    }
                }
            }
            for(let key in persentStats) {
                for(let i=0; i<potentialArr.length; i++) {
                    if(potentialArr[i].hasOwnProperty(key)) {
                        persentStats[key] += potentialArr[i][key];
                    }
                }
            }

            for(let i=0; i<potentialArr.length; i++) {
                if(potentialArr[i].hasOwnProperty("ignoreDef")) {
                    stats.ignoreDefArr.push(potentialArr[i].ignoreDef);
                }
            }
        }
    });

    information.setEffects.map((element) => {
        element.effects.map((element2) => {
            for(let key in result.base.item) {
                if(element2.hasOwnProperty(key)) {
                    
                    result.base.item[key] += element2[key]
                }
            }
        })
        for(let i=0; i<element.effects.length; i++) {
            if(element.effects[i].hasOwnProperty("ignoreDef")) {
                result.base.item.ignoreDefArr.push(element.effects[i].ignoreDef);
            }
        }
    })

    result.base.item = {...stats}
    result.persent.item = {...persentStats}
    
    if(result.base.item.allStat) {
        result.base.item.str += result.base.item.allStat;
        result.base.item.dex += result.base.item.allStat;
        result.base.item.int += result.base.item.allStat;
        result.base.item.luk += result.base.item.allStat;
    }
    if(result.persent.item.allStatP) {
        result.persent.item.strP += result.persent.item.allStatP;
        result.persent.item.dexP += result.persent.item.allStatP;
        result.persent.item.intP += result.persent.item.allStatP;
        result.persent.item.lukP += result.persent.item.allStatP;
    }

    const allStatArr = ["str","dex","int","luk"];
    const atkArr = ["atk","mAtk"];
    const atkStat = ["str","dex","int","luk","atk","mAtk"]; 
    const baseSkills = Object.keys(result.base.skill);

    for(let i=0; i<atkArr.length; i++) {
        result.base.skill[atkArr[i]] += 5; //연합의 의지
    }

    
    for(let i=0; i<allStatArr.length; i++) {
        result.base.skill[allStatArr[i]] += 5; //연합의 의지 
        result.base.skill[allStatArr[i]] += 40; //팔방미인 
        result.base.skill[allStatArr[i]] += 11; //쓸만한

        result.base.title[allStatArr[i]] += 8; //킹오브루타비스;
    }
    
    return result;
}