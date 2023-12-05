import React, { useContext } from "react";
import { LocalStorageContext } from "../../../Context/LocalStorageContext";
import { JobList } from "./JobList";
import { DefaultSpecData, DefaultSumData, WeaponConstData } from "./DefaultSpecData";
import { AllOfStatName, AllOfStatNameWithPersent } from "./AllOfStatName";

export const GetSumOfStat = () => {
    const statInfo = GetStatInformation();
    const mainStatArr = ["str", "dex", "int", "luk"];
    const atksArr = ["atk", "mAtk"];
    const otherStatArr = ["dmg", "finalDmg", "bossDmg", "mobDmg", "crit", "critDmg", "buff", "reset", "ignoreResist", "statusDmg", "summonor"]

    let result = JSON.parse(JSON.stringify(DefaultSumData));
    const {base, persent, noPersent} = statInfo

    result.atkP = persent.item.atkP;
    result.mAtkP = persent.item.mAtkP;

    for(let i=0; i<mainStatArr.length; i++) {
        let index = mainStatArr[i]
        result[index] = Math.floor((base.base[index] + base.skill[index] + base.item[index] + base.union[index] + base.title[index]) * 
        (1 + (persent.item[index + "P"] / 100)) + noPersent.hexa[index] + noPersent.union[index] + noPersent.hyper[index] + 
        noPersent.arcane[index] + noPersent.authentic[index]);
    }

    for(let i=0; i<atksArr.length; i++) {
        let index = atksArr[i]
        result[index] = Math.floor((base.skill[index] + 
            noPersent.hexa[index] +
            base.item[index] +
            base.union[index] + noPersent.union[index] +
            noPersent.hyper[index] +
            base.title[index]) * (1 + (persent.item[index + "P"] / 100)))
    }

    for(let i=0; i<otherStatArr.length; i++) {
        let element = otherStatArr[i]
        result[element] = base.skill[element] + 
        noPersent.hexa[element] +
        base.item[element] +
        base.union[element] + noPersent.union[element] +
        noPersent.hyper[element] +
        base.title[element] + noPersent.ability[element]
    }

    //DefaultSumData.finalDmg = statInfo.base.skill.finalDmg;
    const constanceArr = GetJobConstance();

    const mainStat = GetMainStat();
    let subStat = "dex";
    let mainAtk = "atk";
    if(mainStat === "str") {
        subStat = "dex";
    }else if(mainStat === "dex") {
        subStat = "str";
    }else if(mainStat === "int") {
        subStat = "luk";
        mainAtk = "mAtk";
    }else if(mainStat === "luk") {
        subStat = "dex";
    }

    result.statAtk = Math.floor(((result[mainStat] * 4 + result[subStat]) / 100) * (result[mainAtk]) * ((100 + result.dmg) / 100)
    * ((100 + result.finalDmg) / 100) * constanceArr[0] * constanceArr[1]);

    const thiefArr = ["듀얼블레이드", "섀도어", "카데나"];
    if(thiefArr.includes(constanceArr[2])) {
        result.statAtk = Math.floor(((result[mainStat] * 4 + result[subStat] + result.str - 2.2) / 100) * (result[mainAtk]) * ((100 + result.dmg) / 100)
    * ((100 + result.finalDmg) / 100) * constanceArr[0] * constanceArr[1]);
    }


    return result;
}

export const GetMainStat = () => {
    const {information, setInformationHandler} = useContext(LocalStorageContext);

    return Object.entries(JobList).find(([key,value]) => value.includes(information.job))[0];
}

export const GetJobConstance = () => {
    const {information, setInformationHandler} = useContext(LocalStorageContext);
    let jobConstance = 1;
    let weaponConstance = 0;
    const wizardArr = ["불독", "썬콜", "비숍", "플레임위자드"];

    if(wizardArr.includes(information.job)) jobConstance = 1.2;
    if("제논" === information.job) jobConstance = 0.875;

    const weapon = information.data.find((element) => element.category.endsWith("무기)"))
    let weaponName;
    if(weapon) {
        weaponName = weapon.category.split(" ")[0];
    }else {
        weaponName = "nothing";
    }

    weaponConstance = WeaponConstData[weaponName];
    

    return [jobConstance, weaponConstance, information.job];
}

export const GetStatInformation = () => {
    const {information, setInformationHandler} = useContext(LocalStorageContext);
    const mainStat = GetMainStat();

    let newStatNames = JSON.parse(JSON.stringify(AllOfStatName));
    let newStatPersent = JSON.parse(JSON.stringify(AllOfStatNameWithPersent));
    let union = JSON.parse(localStorage.getItem("union"));

    const result = {
        base : {
            base : {...newStatNames, str:4, dex:4, int:4, luk:4},
            skill : {...newStatNames},
            item : {...newStatNames},
            union : {...newStatNames,...union[1]},
            title : {...newStatNames},
        },
        persent : {
            item : {...newStatPersent},
        },
        noPersent : {
            hexa : {...newStatNames,str:0,dex:0,int:0,luk: 1000},
            union : {...newStatNames,...union[0]},
            hyper : {...newStatNames,str:0,dex:0,int:0,luk:0,...information.spec.hypers},
            arcane : {...newStatNames,str:0, dex:0, int:0, luk:0, hp: 0},
            authentic : {...newStatNames,str:0, dex:0, int:0, luk:0, hp: 0},
            ability : {...newStatNames},
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
    const persentStats = JSON.parse(JSON.stringify(result.persent.item));
    
    information.data.map((item) => {
        const {base, flame, potential, scroll, soul, grade} = item;
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

        if(soul) {
            for(let key in stats) {
                if(soul.hasOwnProperty(key)) {
                    stats[key] += soul[key];
                }
            }for(let key in persentStats) {
                if(soul.hasOwnProperty(key)) {
                    persentStats[key] += soul[key]
                }
            }if(soul.hasOwnProperty("ignoreDef")) {
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


    result.noPersent.ability = {...result.noPersent.ability,...information.spec.abilities, }
    console.log(information.spec.abilities)
    console.log(result.noPersent.ability);

    result.persent.item = {...result.persent.item, ...persentStats}
    

    //최종뎀 보정
    let skillFinal = result.base.skill.finalDmg;
    skillFinal = skillFinal / 100 + 1;
    if(information.level < 99) {
        skillFinal = skillFinal * 1.3;
    }else if (information.level < 149) {
        skillFinal = skillFinal * 1.4;
    }else if (information.level < 199) {
        skillFinal = skillFinal * 1.5;
    }else if (information.level < 249) {
        skillFinal = skillFinal * 1.6;
    }else if (information.level < 299) {
        skillFinal = skillFinal * 1.65;
    }else {
        skillFinal = skillFinal * 1.7;
    }
    skillFinal = (skillFinal -1) * 100;
    result.base.skill.finalDmg = Math.round(skillFinal * 100) / 100;

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
        result.base.skill[atkArr[i]] += 10; //길드의 매운맛
        result.base.skill[atkArr[i]] += 12; //길드의 매운맛2
        result.base.skill[atkArr[i]] += 13; //길드의 매운맛3
        result.base.skill[atkArr[i]] += 30; //여제의 축복
        result.base.skill[atkArr[i]] += 8; //어둠의 다크니스
        result.base.skill[atkArr[i]] += 25; //시그너스 블레스
        result.base.skill[atkArr[i]] += 16; //블링크
        result.base.skill[atkArr[i]] += 5; //리부트

        result.base.title[atkArr[i]] += 3; //킹오브루타비스
        result.base.item[atkArr[i]] += 5 // 어디서 빠졌는지 모르는 공마5
    }

    
    for(let i=0; i<allStatArr.length; i++) {
        result.base.skill[allStatArr[i]] += 5; //연합의 의지 
        result.base.skill[allStatArr[i]] += 40; //팔방미인 
        result.base.skill[allStatArr[i]] += 11; //쓸만한

        result.base.title[allStatArr[i]] += 8; //킹오브루타비스;
    }
    
        result.base.skill.dmg += 10; //데몬어벤져 링크
        result.base.skill.dmg += 2; //아델링크

        result.base.skill.bossDmg += 4; //아델링크
        result.base.skill.bossDmg += 15; //데몬슬레이어 링크

        result.base.skill.atk += 30; //레디 투 다이
        result.noPersent.hexa.atk += 30; //헥사 공격력
        result.noPersent.hexa.critDmg += 1.75;
        result.base.skill.critDmg += 4; //판단;
        result.base.title.bossDmg += 5; // 킹오브루타비스;
        

    return result;
}