import React from "react";

//망토 벨트 어깨장식
const EtcPotentialData = [
    {
        "grade": "rare",
        "effects": [
            {
                "first": [
                    {
                        "str":12
                    },
                    {
                        "dex":12
                    },
                    {
                        "int":12
                    },
                    {
                        "luk":12
                    },
                    {
                        "hp":120
                    },
                    {
                        "mp":120
                    },
                    {
                        "def":120
                    },
                    {
                        "strP":3
                    },
                    {
                        "dexP":3
                    },
                    {
                        "intP":3
                    },
                    {
                        "lukP":3
                    },
                    {
                        "hpP":3
                    },
                    {
                        "mpP":3
                    },
                    {
                        "defP":3
                    },
                    {
                        "allStat":5
                    },
                ]
            },
            {
                "second": [
                    {
                        "str": 6
                    },
                    {
                        "dex": 6
                    },
                    {
                        "int": 6
                    },
                    {
                        "luk": 6
                    },
                    {
                        "hp": 60
                    },
                    {
                        "mp": 60
                    },
                    {
                        "def": 60
                    },
                    {
                        "str": 12
                    },
                    {
                        "dex": 12
                    },
                    {
                        "int": 12
                    },
                    {
                        "luk": 12
                    },
                    {
                        "hp": 120
                    },
                    {
                        "mp": 120
                    },
                    {
                        "def": 120
                    },
                    {
                        "strP":3
                    },
                    {
                        "dexP":3
                    },
                    {
                        "intP":3
                    },
                    {
                        "lukP":3
                    },
                    {
                        "hpP":3
                    },
                    {
                        "mpP":3
                    },
                    {
                        "defP":3
                    },
                    {
                        "allStat":5
                    }
                ]
            }
        ]
    },
    {
        "grade": "epic",
        "effects": [
            {
                "first": [
                    {
                        "strP": 6
                    },
                    {
                        "dexP": 6
                    },
                    {
                        "intP": 6
                    },
                    {
                        "lukP": 6
                    },
                    {
                        "hpP": 6
                    },
                    {
                        "mpP": 6
                    },
                    {
                        "defP": 6
                    },
                    {
                        "allStatP": 3
                    }
                ]
            },
            {
                "second": [
                    {
                        "str": 12
                    },
                    {
                        "dex": 12
                    },
                    {
                        "int": 12
                    },
                    {
                        "luk": 12
                    },
                    {
                        "hp": 120
                    },
                    {
                        "mp": 120
                    },
                    {
                        "def": 120
                    },
                    {
                        "strP": 3
                    },
                    {
                        "dexP": 3
                    },
                    {
                        "intP": 3
                    },
                    {
                        "lukP": 3
                    },
                    {
                        "hpP": 3
                    },
                    {
                        "mpP": 3
                    },
                    {
                        "defP": 3
                    },
                    {
                        "allStat": 5
                    },
                    {
                        "strP":6
                    },
                    {
                        "dexP":6
                    },
                    {
                        "intP":6
                    },
                    {
                        "lukP":6
                    },
                    {
                        "hpP":6
                    },
                    {
                        "mpP":6
                    },
                    {
                        "defP":6
                    },
                    {
                        "allStatP":3
                    }
                ]
            }
        ]
    },
    {
        "grade": "unique",
        "effects": [
            {
                "first": [
                    {
                        "strP": 9
                    },
                    {
                        "dexP": 9
                    },
                    {
                        "intP": 9
                    },
                    {
                        "lukP": 9
                    },
                    {
                        "hpP": 9
                    },
                    {
                        "mpP": 9
                    },
                    {
                        "allStatP": 6
                    },
                    {
                        "hpHeal": 30
                    },
                    {
                      //피격시 5% 확률로 데미지의 20% 무시
                    },
                    {
                      //피격시 5% 확률로 데미지의 40% 무시
                    }
                ]
            },
            {
                "second": [
                    {
                        "strP": 6
                    },
                    {
                        "dexP": 6
                    },
                    {
                        "intP": 6
                    },
                    {
                        "lukP": 6
                    },
                    {
                        "hpP": 6
                    },
                    {
                        "mpP": 6
                    },
                    {
                        "defP": 6
                    },
                    {
                        "allStatP": 3
                    },
                    {
                        "strP":9
                    },
                    {
                        "dexP":9
                    },
                    {
                        "intP":9
                    },
                    {
                        "lukP":9
                    },
                    {
                        "hpP":9
                    },
                    {
                        "mpP":9
                    },
                    {
                        "allStatP":6
                    },
                    {
                        "hpHeal":30
                    },
                    {
                        //피격시 5% 확률로 데미지의 20% 무시
                    },
                    {
                        //피격시 5% 확률로 데미지의 40% 무시
                    }
                ]
            }
        ]
    },
    {
        "grade": "legendary",
        "effects": [
            {
                "first": [
                    {
                        "strP": 12
                    },
                    {
                        "dexP": 12
                    },
                    {
                        "intP": 12
                    },
                    {
                        "lukP": 12
                    },
                    {
                        "hpP": 12
                    },
                    {
                        "mpP": 12
                    },
                    {
                        "allStatP": 9
                    },
                    {
                        //피격 시 10% 확률로 데미지의 20% 무시
                    },
                    {
                        //피격 시 10% 확률로 데미지의 40% 무시
                    }
                ]
            },
            {
                "second": [
                    {
                        "strP": 9
                    },
                    {
                        "dexP": 9
                    },
                    {
                        "intP": 9
                    },
                    {
                        "lukP": 9
                    },
                    {
                        "hpP": 9
                    },
                    {
                        "mpP": 9
                    },
                    {
                        "allStatP": 6
                    },
                    {
                        "hpHeal": 30
                    },
                    {
                        //피격 시 5% 확률로 데미지의 20% 무시
                    },
                    {
                        //피격 시 5% 확률로 데미지의 40% 무시
                    },
                    {
                        "strP":12
                    },
                    {
                        "dexP":12
                    },
                    {
                        "intP":12
                    },
                    {
                        "lukP":12
                    },
                    {
                        "hpP":12
                    },
                    {
                        "mpP":12
                    },
                    {
                        "allStatP":9
                    },
                    {
                        //피격 시 10% 확률로 데미지의 20% 무시
                    },
                    {
                        //피격 시 10% 확률로 데미지의 40% 무시
                    }
                ]
            }
        ]
    }
];

export default EtcPotentialData;