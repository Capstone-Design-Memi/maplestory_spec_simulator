import React from "react";

//무기
const WeaponPotentialData = [
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
                        "atk":12
                    },
                    {
                        "mAtk":12
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
                        "atkP":3
                    },
                    {
                        "mAtkP":3
                    },
                    {
                        "crit":4
                    },
                    {
                        "dmg":3
                    },
                    {
                        "allStat":5
                    },
                    {
                        //공격 시 20% 확률로 240의 HP 회복
                    },
                    {
                        //공격 시 20% 확률로 120의 MP 회복
                    },
                    {
                        //공격 시 20% 확률로 6레벨 중독효과 적용
                    },
                    {
                         //공격 시 10% 확률로 2레벨 기절효과 적용
                    },
                    {
                        //공격 시 20% 확률로 2레벨 슬로우효과 적용
                    },
                    {
                        //공격 시 20% 확률로 3레벨 암흑효과 적용
                    },
                    {
                        //공격 시 10% 확률로 2레벨 빙결효과 적용
                    },
                    {
                        //공격 시 10% 확률로 2레벨 봉인효과 적용
                    },
                    {
                        "ignoreDef":15
                    }
                ]
            },
            {
                "second": [
                    {
                       "str":6
                    },
                    {
                        "dex":6
                    },
                    {
                        "int":6
                    },
                    {
                        "luk":6
                    },
                    {
                        "hp":60
                    },
                    {
                        "mp":60
                    },
                    {
                        "atk":6
                    },
                    {
                        "mAtk":6
                    },
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
                        "atk":12
                    },
                    {
                        "mAtk":12
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
                        "atkP":3
                    },
                    {
                        "mAtkP":3
                    },
                    {
                        "allStat":5
                    },
                    {
                        //공격 시 20% 확률로 240의 HP 회복
                    },
                    {
                        //공격 시 20% 확률로 120의 MP 회복
                    },
                    {
                        //공격 시 20% 확률로 6레벨 중독효과 적용
                    },
                    {
                        //공격 시 10% 확률로 2레벨 기절효과 적용
                    },
                    {
                        //공격 시 20% 확률로 2레벨 슬로우효과 적용
                    },
                    {
                        //공격 시 20% 확률로 3레벨 암흑효과 적용
                    },
                    {
                       //공격 시 10% 확률로 2레벨 빙결효과 적용
                    },
                    {
                        //공격 시 10% 확률로 2레벨 봉인효과 적용
                    },
                    {
                        "ignoreDef":15
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
                        "atkP":6
                    },
                    {
                        "mAtkP":6
                    },
                    {
                        "crit":8
                    },
                    {
                        "dmg":6
                    },
                    {
                        "allStatP":3
                    },
                    {
                        //공격 시 20% 확률로 360의 HP 회복
                    },
                    {
                       //공격 시 20% 확률로 180의 MP 회복
                    },
                    {
                        "ignoreDef":15
                    }
                ]
            },
            {
                "second": [
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
                        "atk":12
                    },
                    {
                        "mAtk":12
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
                        "atkP":3
                    },
                    {
                        "mAtkP":3
                    },
                    {
                        "crit":4
                    },
                    {
                        "dmg":3
                    },
                    {
                        "allStat":5
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
                        "atkP":6
                    },
                    {
                        "mAtkP":6
                    },
                    {
                        "crit":8
                    },
                    {
                        "dmg":6
                    },
                    {
                        "allStatP":3
                    },
                    {
                        //공격 시 20% 확률로 240의 HP 회복
                    },
                    {
                        //공격 시 20% 확률로 120의 MP 회복
                    },
                    {
                        //공격 시 20% 확률로 6레벨 중독효과 적용
                    },
                    {
                        //공격 시 10% 확률로 2레벨 기절효과 적용
                    },
                    {
                        //공격 시 20% 확률로 2레벨 슬로우효과 적용
                    },
                    {
                        //공격 시 20% 확률로 3레벨 암흑효과 적용
                    },
                    {
                        //공격 시 10% 확률로 2레벨 빙결효과 적용
                    },
                    {
                        //공격 시 10% 확률로 2레벨 봉인효과 적용
                    },
                    {
                        "ignoreDef":15
                    },
                    {
                        //공격 시 20% 확률로 360의 HP 회복
                    },
                    {
                        //공격 시 20% 확률로 180의 MP 회복
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
                        "atkP":9
                    },
                    {
                        "mAtkP":9
                    },
                    {
                        "crit":9
                    },
                    {
                        "dmg":9
                    },
                    {
                        "allStatP":6
                    },
                    {
                        "ignoreDef":30
                    },
                    {
                        "bossDmg":30
                    }
                ]
            },
            {
                "second": [
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
                        "atkP":6
                    },
                    {
                        "mAtk":6
                    },
                    {
                        "crit":8
                    },
                    {
                        "dmg":6
                    },
                    {
                        "allStatP":3
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
                        "atkP":9
                    },
                    {
                        "mAtk":9
                    },
                    {
                        "crit":9
                    },
                    {
                        "dmg":9
                    },
                    {
                        "allStatP":6
                    },
                    {
                        //공격 시 20% 확률로 360의 HP 회복
                    },
                    {
                        //공격 시 20% 확률로 180의 MP 회복
                    },
                    {
                        "ignoreDef":15
                    },
                    {
                        "ignoreDef":30
                    },
                    {
                        "bossDmg":30
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
                        "atkP":12
                    },
                    {
                        "mAtkP":12
                    },
                    {
                        "crit":12
                    },
                    {
                        "dmg":12
                    },
                    {
                        "allStatP":9
                    },
                    {
                        "atk":32
                    },
                    {
                        "mAtk":32
                    },
                    {
                        "ignoreDef":35
                    },
                    {
                        "ignoreDef":40
                    },
                    {
                        "bossDmg":35
                    },
                    {
                        "bossDmg":40
                    }
                ]
            },
            {
                "second": [
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
                        "atkP":9
                    },
                    {
                        "mAtkP":9
                    },
                    {
                        "crit":9
                    },
                    {
                        "dmg":9
                    },
                    {
                        "allStatP":6
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
                        "atkP":12
                    },
                    {
                        "mAtkP":12
                    },
                    {
                        "crit":12
                    },
                    {
                        "dmg":12
                    },
                    {
                        "allStatP":9
                    },
                    {
                        "atk":32
                    },
                    {
                        "mAtk":32
                    },
                    {
                        "ignoreDef":30
                    },
                    {
                        "ignoreDef":35
                    },
                    {
                        "ignoreDef":40
                    },
                    {
                        "bossDmg":30
                    },
                    {
                        "bossDmg":35
                    },
                    {
                        "bossDmg":40
                    }
                ]
            }
        ]
    }
];

export default WeaponPotentialData;