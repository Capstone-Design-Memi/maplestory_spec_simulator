import e from "cors";
import { GetCharacterMainStat, GetCharacterSubStat } from "./GetCharacterMainStat"

export const GetSumOfStats = (equipmentItem) => {

    let stats = {
        "str" : 0,
        "dex" : 0,
        "int" : 0,
        "luk" : 0,
        "strP" : 0,
        "dexP" : 0,
        "intP" : 0,
        "lukP" : 0,
        "hp" : 0,
        "hpP" : 0,
        "mp" : 0,
        "mpP" : 0,
        "atk" : 0,
        "atkP" : 0,
        "mAtk" : 0,
        "mAtkP" : 0,
        "def" : 0,
        "defP" : 0,
        "speed" : 0,
        "jump" : 0,
        "ignoreDef" : 0,
        "ignoreDefArr" : [],
        "mobDmg" : 0,
        "bossDmg" : 0,
        "dmg" : 0,
        "allStat" : 0,
        "allStatP" : 0,
        "crit" : 0,
        "critDmg" : 0,
        "meso" : 0,
        "drop" : 0,
        "reuse" : 0,
    };

    console.log(equipmentItem);
    equipmentItem.map((item) => {
        const {base, flame, potential, scroll, grade} = item;
        if(base) {
            for(let key in stats) {
                if(base.hasOwnProperty(key)) {
                    stats[key] += base[key];
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

            for(let i=0; i<potentialArr.length; i++) {
                if(potentialArr[i].hasOwnProperty("ignoreDef")) {
                    stats.ignoreDefArr.push(potentialArr[i].ignoreDef);
                }
            }
        }

    });

    return stats;
}