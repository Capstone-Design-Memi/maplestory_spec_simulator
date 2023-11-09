import { Class } from "../Util/Class";

export const GetCharacterMainStat = (information) => {
    const jobClass = Class;
    let result;

    const mainStat = jobClass.map((item) => {
        const type = item.children;
        const testClass = type.map((it) => {
            const testDepart = it.children;
            const testJob = testDepart.map((i) => {
                if (i.value == information.job) {
                    result = i.main;
                  }
            });
        })  
    })
    return result;
}

export const GetCharacterSubStat = (information) => {
    const job = information.job;
    const special = ["듀얼블레이드", "섀도어", "카데나", "제논"];
    const mainStat = GetCharacterMainStat(information);

    if(special.includes(job)) {
        return ["str","dex"];
    }else {
        if(mainStat === "str") {
            return ["dex"];
        }
        if(mainStat === "dex") {
            return ["str"];
        }
        if(mainStat === "int") {
            return ["luk"];
        }
        if(mainStat === "luk") {
            return ["dex"];
        }
    }
}