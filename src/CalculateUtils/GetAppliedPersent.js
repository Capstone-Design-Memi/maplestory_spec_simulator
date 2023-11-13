export const GetAppliedPersent = (sumOfStats,base) => {
    let result = [0,0,0,0];

    result[0] = (base[0] + sumOfStats.str + sumOfStats.allStat) * (1 + (sumOfStats.strP + sumOfStats.allStatP)/100);
    result[1] = (base[1] + sumOfStats.dex + sumOfStats.allStat) * (1 + (sumOfStats.dexP + sumOfStats.allStatP)/100);
    result[2] = (base[2] + sumOfStats.int + sumOfStats.allStat) * (1 + (sumOfStats.intP + sumOfStats.allStatP)/100);
    result[3] = (base[3] + sumOfStats.luk + sumOfStats.allStat) * (1 + (sumOfStats.lukP + sumOfStats.allStatP)/100);

    for(let i=0; i<result.length; i++) {
        result[i] = Math.round(result[i]);
    }

    return result;
}