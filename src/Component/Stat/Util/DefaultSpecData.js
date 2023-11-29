
export const DefaultSpecData = [
    {
        job : "히어로",
        spec: {
            "atkSpeed" : [7, 8], //두손 무기, 한손 무기
            "mastery" : 90,
            "str" : 80,
            "dex" : 30,
            "atk" : 30,
            "dmg" : [0,5], // 도끼 착용 시 5
            "endDmg" : 10,
            "ignoreDef" : 50,
            "def" : 200,
            "cstatusDmg" : 30, //상태이상내성
            "allAttributeResit" : 30, //모든속성내성
            "stance" : 100,
            "dcreDmg" : 10, //데미지 감소
            "crit" : 25,
            "hp" : 1800, //바디 오브 스틸 패시브 1500
            "hpP" : 20,
            "speed" : 10,
            "maxSpeed" : 10,
            "jump" : 10
          }
    },
    {
        job : "팔라딘",
        spec : {
            "atkSpeed" : [7, 8], //두손 무기, 한손 무기
            "mastery" : [91, 94], //두손무기, 한손무기
            "str" : 80,
            "dex" : 30,
            "atk" : 10,
            "endDmg" : 42,
            "ignoreDef" : [31, 41], //둔기 착용시 10%증가
            "defP" : 250,
            "def" : 620,
            "conditionResist" : 40,
            "allAttributeResit" : 40,
            "stance" : 100,
            "dcreDmg" : 10, //데미지 감소
            "crit" : 47,
            "critDmg" : [20, 21], //두손검/둔기, 한손검
            "hp" : 1800, // 바디 오브 스틸 패시브 1500
            "hpP" : 20,
            "speed" : 10,
            "maxSpeed" : 10,
            "jump" : 10
        }
    },
    {
        job : "다크나이트",
        spec : {
            "atkSpeed" : 7,
            "mastery" : 90,
            "str" : 80,
            "dex" : 30,
            "atk" : 30,
            "dmg" : [0, 5], //창 사용시 5
            "endDmg" : 103,
            "ignoreDef" : 30,
            "def" : 470,
            "conditionResist" : 20,
            "allAttributeResit" : 20,
            "stance" : 100,
            "dcreDmg" : 10, //데미지 감소
            "crit" : 65,
            "critDmg" : 38,
            "hp" : 1800, // 바디 오브 스틸 패시브 1500
            "hpP" : 80,
            "speed" : 30,
            "maxSpeed" : 10,
            "jump" : 10
        }
    },
    {
        job : "아크메이지(썬,콜)",
        spec : {
            "atkSpeed" : 7,
            "mastery" : 95,
            "int" : 90,
            "mAtk" : 40,
            "dmg" : 50,
            "endDmg" : 40,
            "ignoreDef" : 20,
            "ignorePhsicResist" : 10, //물리 속성 내성 무시
            "ignoreIceResist" : 10, //얼음 속성 내성 무시
            "ignorelightningResist" : 10, //번개 속성 내성 무시
            "def" : 90,
            "conditionResist" : 20,
            "allAttributeResit" : 20,
            "stance" : 100,
            "crit" : [35, 40], //완드 착용시 + 5
            "critDmg" : 13,
            "mpP" : 20,
            "mp" : 2400,
        }
    },
    {
        job : "아크메이지(불,독)",
        spec : {
            "atkSpeed" : 7,
            "mastery" : 95,
            "int" : 90,
            "mAtk" : 40,
            "dmg" : 50,
            "endDmg" : 40,
            "ignoreDef" : 20,
            "ignorePhsicResist" : 10,
            "ignoreFireResist" : 10,//불 속성 내성 무시
            "ignorePoisonResist" : 10,//독 속성 내성 무시
            "def" : 90,
            "conditionResist" : 20,
            "allAttributeResit" : 20,
            "stance" : 100,
            "crit" : [35, 40], //완드 착용시 + 5
            "critDmg" : 13,
            "mpP" : 20,
            "mp" : 2400,
        }
    },
    {
        job : "비숍",
        spec : {
            "atkSpeed" : 7,
            "mastery" : 95,
            "int" : 90,
            "mAtk" : 90,
            "endDmg" : 30,
            "ignorePhsicResist" : 10,
            "ignoreSaintResist" : 10, //성 속성 내성 무시
            "def" : 90,
            "conditionResist" : 40,
            "allAttributeResit" : 40,
            "stance" : 100,
            "dcreDmg" : 25, //데미지 감소
            "crit" : [75, 80], //완드 착용시 + 5
            "critDmg" : 13,
            "mpP" : 20,
            "mp" : 2400,
        }
    },
    {
        job : "보우마스터",
        spec : {
            "atkSpeed" : 7, 
            "mastery" : 85,
            "dex" : 130,
            "str" : 30,
            "atkP" : 25,
            "atk" : 150,
            "endDmg" : 37.8,
            "ignoreDef" : 55,
            "defP" : 30,
            "conditionResist" : 20,
            "allAttributeResit" : 20,
            "dodge" : 51,
            "stance" : 100,
            "dcreDmg" : 20, //데미지 감소
            "crit" : 69,
            "critDmg" : 16,
            "hpP" : 40,
            "speed" : 30,
            "maxSpeed" : 20
        }
    },
    {
        job : "신궁",
        spec : {
            "atkSpeed" : 7, 
            "mastery" : 85,
            "dex" : 130,
            "str" : 30, 
            "atk" : 60,
            "dmg" : 15,
            "endDmg" : 63.94,
            "ignoreDef" : 58,
            "defP" : 30,
            "conditionResist" : 20,
            "allAttributeResit" : 20,
            "dodge" : 51,
            "stance" : 100,
            "dcreDmg" : 20, //데미지 감소
            "crit" : 69,
            "critDmg" : 35,
            "hpP" : 40,
            "speed" : 30,
            "maxSpeed" : 20
        }
    },
    {
        job : "패스파인더",
        spec : {
            "atkSpeed" : 7, 
            "mastery" : 85,
            "dex" : 130,
            "str" : 30, 
            "atk" : 80,
            "atkP" : 20,
            "dmg" : 10,
            "endDmg" : 20,
            "ignoreDef" : 30,
            "defP" : 30,
            "conditionResist" : 30,
            "allAttributeResit" : 30,
            "dodge" : 51,
            "stance" : 100,
            "dcreDmg" : 20, //데미지 감소
            "crit" : 55,
            "critDmg" : 10,
            "hpP" : 50,
            "speed" : 30,
            "maxSpeed" : 20
        }
    },
    {
        job : "나이트로드",
        spec : {
            "atkSpeed" : 8, 
            "mastery" : 85,
            "luk" : 70,
            "dex" : 30, 
            "atk" : 60,
            "endDmg" : 35,
            "ignoreDef" : 30,
            "conditionResist" : 30,
            "allAttributeResit" : 30,
            "dodge" : 45,
            "stance" : 100,
            "dcreDmg" : 20, //데미지 감소
            "crit" : 75,
            "critDmg" : 25,
            "hpP" : 20,
            "speed" : 40,
            "maxSpeed" : 20
        }
    },
    {
        job : "섀도어",
        spec : {
            "atkSpeed" : 8, 
            "mastery" : 90,
            "luk" : 80,
            "dex" : 30, 
            "atk" : 160,
            "endDmg" : 43.75,
            "ignoreDef" : 20,
            "defP" : 110,
            "conditionResist" : 30,
            "allAttributeResit" : 30,
            "dodge" : 56,
            "stance" : 100,
            "dcreDmg" : 60, //데미지 감소
            "crit" : 30,
            "critDmg" : 40,
            "hpP" : 20,
            "speed" : 40,
            "maxSpeed" : 20
        }
    },
    {
        job : "듀얼블레이드",
        spec : {
            "atkSpeed" : 8, 
            "mastery" : 90,
            "luk" : 50,
            "dex" : 30, 
            "atk" : 90,
            "endDmg" : 20,
            "defP" : 60,
            "conditionResist" : 30,
            "allAttributeResit" : 30,
            "dodge" : 55.375,
            "stance" : 100,
            "dcreDmg" : 20, //데미지 감소
            "crit" : 40,
            "critDmg" : 13,
            "hpP" : 20,
            "speed" : 40,
            "maxSpeed" : 20
        }
    },
    {
        job : "캡틴",
        spec : {
            "atkSpeed" : 7, 
            "mastery" : 85,
            "dex" : 50,
            "str" : 30,
            "atk" : 90,
            "endDmg" : 29.6,
            "ignoreDef" : 20,
            "defP" : 20,
            "stance" : 100,
            "dcreDmg" : 35, //데미지 감소
            "crit" : 65,
            "critDmg" : 55,
            "hp" : 5600,
            "mp" : 600,
            "maxSpeed" : 20,
            "jump" : 10
        }
    },
    {
        job : "바이퍼",
        spec : {
            "atkSpeed" : 7, 
            "mastery" : 90,
            "str" : 50,
            "dex" : 30, 
            "atk" : 90,
            "bossDmg" : 20,
            "endDmg" : 24.3,
            "ignoreDef" : 40,
            "conditionResist" : 30,
            "allAttributeResit" : 30,
            "stance" : 100,
            "dcreDmg" : 20, //데미지 감소
            "crit" : 40,
            "critDmg" : 15,
            "hpP" : 20,
            "maxSpeed" : 20,
            "jump" : 10
        }
    },
    {
        job : "캐논마스터",
        spec : {
            "atkSpeed" : 6, 
            "mastery" : 85,
            "str" : 110,
            "dex" : 90, 
            "atk" : 60,
            "bossDmg" : 40,
            "endDmg" : 57.66,
            "ignoreDef" : 20,
            "defP" : 50,
            "def" : 250,
            "conditionResist" : 20,
            "dodge" : 20,
            "stance" : 100,
            "crit" : 45,
            "critDmg" : 15,
            "hpP" : 20,
            "hp" : 1000,
            "mp": 1000,
            "speed" : 15,
            "jump" : 10
        }
    },
    {
        job : "소울마스터",
        spec : {
            "atkSpeed" : [6, 7], //두손검, 한손검 
            "mastery" : 90,
            "str" : 130,
            "dex" : 50, 
            "atk" : 100,
            "bossDmg" : 15,
            "ignoreDef" : 37,
            "def" : 750,
            "conditionResist" : 30,
            "allAttributeResit" : 30,
            "stance" : 100,
            "dcreDmg" : 25, //데미지 감소
            "crit" : 15,
            "critDmg" : 12,
            "hp" : 1500,
            "speed" : 40,
            "maxSpeed" : 20,
            "jump" : 20
        }
    },
    {
        job : "미하일",
        spec : {
            "atkSpeed" : 8,
            "mastery" : 90,
            "str" : 110,
            "dex" : 30, 
            "atk" : 80,
            "atkP" : 10,
            "mAtkP" : 10,
            "endDmg" : 41.45,
            "ignoreDef" : 40,
            "defP" : 100,
            "def" : 200,
            "conditionResist" : 60,
            "allAttributeResit" : 60,
            "stance" : 100,
            "dcreDmg" : 20, //데미지 감소
            "crit" : 40,
            "critDmg" : 15,
            "hpP" : 60,
            "mpP" : 20,
            "speed" : 25,
            "maxSpeed" : 10,
            "jump" : 20
        }
    },
    {
        job : "플레임위자드",
        spec : {
            "atkSpeed" : 7,
            "mastery" : 95,
            "int" : 60,
            "mAtk" : 50,
            "ignoreDef" : 37,
            "endDmg" : 87.5,
            "def" : 100,
            "conditionResist" : 30,
            "allAttributeResit" : 30,
            "stance" : 100,
            "dcreDmg" : 25, //데미지 감소
            "crit" : [35, 40], //완드 착용 + 5
            "critDmg" : 20,
            "mp"  : 600,
            "mpP" : 20,
            "speed" : 40,
            "jump" : 20
        }
    },
    {
        job : "윈드브레이커",
        spec : {
            "atkSpeed" : 8,
            "mastery" : 85,
            "dex" : 50,
            "dexP" : 15,
            "str" : 30,
            "atkP" : 10,
            "atk" : 120,
            "dmg" : 25,
            "bossDmg" : 40,
            "endDmg" : 48.5,
            "ignoreDef" : 15,
            "def" : 1000,
            "conditionResist" : 25,
            "allAttributeResit" : 25,
            "dodge" : 51,
            "stance" : 100,
            "dcreDmg" : 30, //데미지 감소
            "crit" : 40,
            "critDmg" : 20,
            "hp"  : 1500,
            "hpP" : 20,
            "speed" : 35,
            "maxSpeed" : 20,
            "jump" : 15
        }
    },
    {
        job : "나이트워커",
        spec : {
            "atkSpeed" : 8,
            "mastery" : 85,
            "luk" : 60,
            "atk" : 60,
            "dmg" : 30,
            "endDmg" : 29.6,
            "ignoreDef" : 15,
            "conditionResist" : 30,
            "allAttributeResit" : 30,
            "dodge" : 49,
            "stance" : 100,
            "crit" : 40,
            "critDmg" : 30,
            "speed" : 40,
            "maxSpeed" : 20,
            "jump" : 20
        }
    },
    {
        job : "스트라이커",
        spec : {
            "atkSpeed" : 7,
            "mastery" : 90,
            "str" : 60,
            "atk" : 80,
            "dmg" : 5,
            "endDmg" : 20.75,
            "conditionResist" : 30,
            "allAttributeResit" : 30,
            "dodge" : 20,
            "stance" : 100,
            "dcreDmg" : 30,
            "crit" : 5,
            "critDmg" : 20,
            "speed" : 40,
            "maxSpeed" : 20,
            "jump" : 20
        }
    },
    {
        job : "블래스터",
        spec : {
            "atkSpeed" : 7,
            "mastery" : 90,
            "str" : 30,
            "dex" : 30,
            "atkP" : 15,
            "atk" : 60,
            "dmg" : 20,
            "ignoreDef" : 35,
            "def" : 200,
            "conditionResist" : 40,
            "allAttributeResit" : 40,
            "stance" : 100,
            "dcreDmg" : 15,
            "crit" : 35,
            "critDmg" : 20,
            "hpP" : 20,
            "speed" : 30,
            "maxSpeed" : 20,
            "jump" : 15
        }
    },
    {
        job : "배틀메이지",
        spec : {
            "atkSpeed" : 6,
            "mastery" : 95,
            "int" : 40,
            "mAtkP" : 25,
            "mAtk" : 80,
            "dmg" : 10,
            "endDmg" : 31.25,
            "ignoreDef" : 30,
            "defP" : 150,
            "def" : 150,
            "conditionResist" : 30,
            "allAttributeResit" : 30,
            "dodge" : 40,
            "stance" : 100,
            "crit" : 40,
            "critDmg" : 35,
            "hpP" : 180,
            "mpP" : 30,
            "speed" : 60,
            "maxSpeed" : 30,
            "jump" : 20
        }
    },
    {
        job : "와일드헌터",
        spec : {
            "atkSpeed" : 7,
            "mastery" : 85,
            "dex" : 150,
            "str" : 90,
            "atkP" : 35,
            "atk" : 90,
            "dmg" : 10,
            "endDmg" : 32,
            "ignoreDef" : 30,
            "defP" : 50,
            "conditionResist" : 45,
            "allAttributeResit" : 30,
            "dodge" : 49,
            "stance" : 100,
            "dcreDmg" : 35,
            "crit" : 30,
            "critDmg" : 28,
            "hpP" : 70,
            "mpP" : 15,
            "speed" : 55,
            "jump" : 20
        }
    },
    {
        job : "메카닉",
        spec : {
            "atkSpeed" : 7,
            "mastery" : 85,
            "dex" : 30,
            "str" : 30,
            "atk" : 20,
            "dmg" : 55,
            "endDmg" : 54.29,
            "ignoreDef" : 30,
            "def" : 750,
            "conditionResist" : 40,
            "allAttributeResit" : 40,
            "crit" : 35,
            "critDmg" : 5,
            "hpP" : 40,
            "mpP" : 10,
        }
    },
    {
        job : "데몬슬레이어",
        spec : {
            "atkSpeed" : 8,
            "mastery" : 90,
            "str" : 50,
            "dex" : 30,
            "atk" : 100,
            "bossDmg" : 15,
            "endDmg" : 43,
            "ignoreDef" : 30,
            "defP" : 100,
            "conditionResist" : 64,
            "allAttributeResit" : 60,
            "stance" : 100,
            "dcreDmg" : 20,
            "crit" : 25,
            "critDmg" : 15,
            "hpP" : 50,
            "speed" : 25,
            "jump" : 20
        }
    },
    {
        job : "데몬어벤져",
        spec : {
            "atkSpeed" : 7,
            "mastery" : 90,
            "hp" : 1000,
            "atk" : 90,
            "dmg" : 40,
            "endDmg" : 15,
            "ignoreDef" : 30,
            "defP" : 100,
            "def" : 500,
            "stance" : 100,
            "crit" : 25,
            "critDmg" : 8,
            "hpP" : 50,
            "speed" : 45,
            "maxSpeed" : 20,
            "jump" : 20
        }
    },
    {
        job : "아란",
        spec : {
            "atkSpeed" : 8,
            "mastery" : 90,
            "str" : 50,
            "dex" : 30,
            "atkP" : 5,
            "atk" : 100,
            "dmg" : 40,
            "endDmg" : 24.2,
            "ignoreDef" : 40,
            "def" : 715,
            "dcreDmg" : 40,
            "crit" : 5,
            "critDmg" : 8,
            "hpP" : 30,
            "speed" : 25,
            "maxSpeed" : 20
        }
    },
    {
        job : "루미너스",
        spec : {
            "atkSpeed" : 7,
            "mastery" : 95,
            "int" : 60,
            "mAtk" : 70,
            "dmg" : 15,
            "bossDmg" : 15,
            "endDmg" : 90.4,
            "ignoreDef" : 49,
            "def" : 450,
            "conditionResist" : 44,
            "allAttributeResit" : 40,
            "ignore" : 20,
            "stance" : 100,
            "dcreDmg" : 50,
            "crit" : 40,
            "critDmg" : 18,
            "mpP" : 30,
            "speed" : 20,
            "jump" : 10
        }
    },
    {
        job : "에반",
        spec : {
            "atkSpeed" : 6,
            "mastery" : 95,
            "int" : 50,
            "mAtkP" : 30,
            "mAtk" : 105,
            "bossDmg" : 20,
            "endDmg" : 51.2,
            "ignoreDef" : 20,
            "def" : 445,
            "conditionResist" : 20,
            "allAttributeResit" : 25,
            "stance" : 100,
            "dcreDmg" : 30,
            "crit" : [50, 55], //완드 착용시 +5
            "critDmg" : 40,
            "mpP" : 20,
            "mp" : 1800,
            "speed" : 10,
        }
    },
    {
        job : "메르세데스",
        spec : {
            "atkSpeed" : 7,
            "mastery" : 85,
            "dex" : 50,
            "str" : 30,
            "atk" : 90,
            "dmg" : 50,
            "bossDmg" : 20,
            "endDmg" : 65,
            "ignoreDef" : 25,
            "conditionResist" : 35,
            "allAttributeResit" : 35,
            "dodge" : 52,
            "stance" : 100,
            "dcreDmg" : 30,
            "crit" : 60,
            "critDmg" : 30,
            "hp" : 1500,
            "speed" : 30,
            "maxSpeed" : 25,
            "jump" : 20
        }
    },
    {
        job : "팬텀",
        spec : {
            "atkSpeed" : 7,
            "mastery" : 90,
            "luk" : 140,
            "dex" : 40,
            "atk" : 80,
            "dmg" : 30,
            "endDmg" : 71.6,
            "ignoreDef" : 30,
            "conditionResist" : 45,
            "allAttributeResit" : 45,
            "dodge" : 64,
            "stance" : 100,
            "crit" : 55,
            "critDmg" : 15,
            "hpP" : 30,
            "mpP" : 30,
            "speed" : 35,
            "maxSpeed" : 20,
            "jump" : 20
        }
    },
    {
        job : "은월",
        spec : {
            "atkSpeed" : 7,
            "mastery" : 90,
            "str" : 60,
            "atk" : 20,
            "dmg" : 20,
            "bossDmg" : 30,
            "endDmg" : 33.4,
            "ignoreDef" : 30,
            "def" : 2000,
            "conditionResist" : 40,
            "allAttributeResit" : 40,
            "dodge" : 15,
            "stance" : 100,
            "dcreDmg" : 30,
            "crit" : 30,
            "critDmg" : 20,
            "hpP" : 20,
            "mpP" : 20,
            "speed" : 20,
        }
    },
    {
        job : "카이저",
        spec : {
            "atkSpeed" : 5,
            "mastery" : 90,
            "str" : 50,
            "atkP" : 30,
            "atk" : 50,
            "endDmg" : 32,
            "ignoreDef" : 40,
            "def" : 200,
            "stance" : 100,
            "dcreDmg" : 20,
            "crit" : 45,
            "critDmg" : 15,
            "hpP" : 50,
            "speed" : 20,
            "maxSpeed" : 20
        }
    },
    {
        job : "카인",
        spec : {
            "atkSpeed" : 6,
            "mastery" : 85,
            "dex" : 60,
            "atk" : 180,
            "dmg" : 13,
            "bossDmg" : 10,
            "endDmg" : 93.4,
            "ignoreDef" : 37,
            "defP" : 20,
            "def" : 200,
            "conditionResist" : 30,
            "allAttributeResit" : 30,
            "dodge" : 47.5,
            "stance" : 100,
            "dcreDmg" : 30,
            "crit" : 60,
            "critDmg" : 40,
            "hpP" : 20,
            "mpP" : 20,
            "speed" : 30,
            "maxSpeed" : 20,
            "jump" : 20
        }
    },
    {
        job : "카데나",
        spec : {
            "atkSpeed" : 6,
            "mastery" : 90,
            "luk" : 80,
            "dex" : 30,
            "atk" : 70,
            "ignoreDef" : 20,
            "conditionResist" : 30,
            "allAttributeResit" : 30,
            "dodge" : 42.2,
            "stance" : 100,
            "crit" : 55,
            "critDmg" : 33,
            "hpP" : 20,
            "maxSpeed" : 20
        }
    },
    {
        job : "엔젤릭버스터",
        spec : {
            "atkSpeed" : 7,
            "mastery" : 95,
            "dex" : 80,
            "atk" : 90,
            "dmg" : 20,
            "endDmg" : 25,
            "ignoreDef" : 15,
            "def" : 1000,
            "conditionResist" : 40,
            "allAttributeResit" : 40,
            "stance" : 100,
            "crit" : 35,
            "critDmg" : 15,
            "hp" : 3500,
            "speed" : 40,
            "maxSpeed" : 25,
            "jump" : 20
        }
    },
    {
        job : "아델",
        spec : {
            "atkSpeed" : 6,
            "mastery" : 90,
            "str" : 60,
            "atkP" : 10,
            "atk" : 150,
            "dmg" : 2,
            "bossDmg" : 14,
            "endDmg" : 49.5,
            "ignoreDef" : 20,
            "conditionResist" : 30,
            "allAttributeResit" : 30,
            "stance" : 100,
            "dcreDmg" : 30,
            "crit" : 45,
            "critDmg" : 10,
            "hpP" : 10,
            "hp" : 1000,
            "speed" : 15,
            "maxSpeed" : 10,
            "jump" : 10
        }
    },
    {
        job : "일리움",
        spec : {
            "atkSpeed" : 5,
            "mastery" : 90,
            "int" : 40,
            "mAtkP" : 10,
            "mAtk" : 115,
            "dmg" : 20,
            "bossDmg" : 30,
            "endDmg" : 40,
            "ignoreDef" : 25,
            "conditionResist" : 30,
            "allAttributeResit" : 30,
            "stance" : 100,
            "dcreDmg" : 110,
            "crit" : 45,
            "critDmg" : 30,
            "hpP" : 30,
            "mpP" : 30,
            "speed" : 10,
            "maxSpeed" : 10,
            "jump" : 10
        }
    },
    {
        job : "칼리",
        spec : {
            "atkSpeed" : 6,
            "mastery" : 90,
            "luk" : 60,
            "atk" : 120,
            "dmg" : 5,
            "bossDmg" : 30,
            "endDmg" : 63,
            "ignoreDef" : 36,
            "def" : 150,
            "conditionResist" : 30,
            "allAttributeResit" : 30,
            "dodge" : 30,
            "stance" : 100,
            "dcreDmg" : 30,
            "crit" : 40,
            "critDmg" : 28,
            "hp" : 500,
            "hpP" : 15,
            "mp" : 500,
            "mpP" : 20,
            "speed" : 40,
            "maxSpeed" : 20,
            "jump" : 20
        }
    },
    {
        job : "아크",
        spec : {
            "atkSpeed" : 5,
            "mastery" : 90,
            "str" : 60,
            "atk" : 110,
            "bossDmg" : 30,
            "endDmg" : 38.6,
            "ignoreDef" : 30,
            "def" : 250,
            "conditionResist" : 40,
            "allAttributeResit" : 16,
            "stance" : 100,
            "dcreDmg" : 50,
            "crit" : 35,
            "critDmg" : 30,
            "hpP" : 20,
            "mpP" : 20,
            "speed" : 25,
            "maxSpeed" : 25,
            "jump" : 20
        }
    },
    {
        job : "라라",
        spec : {
            "atkSpeed" : 5,
            "mastery" : 95,
            "int" : 60,
            "mAtk" : 135,
            "dmg" : 25,
            "bossDmg" : 10,
            "endDmg" : 88.5,
            "ignoreDef" : 40,
            "def" : 100,
            "conditionResist" : 30,
            "allAttributeResit" : 30,
            "stance" : 100,
            "dcreDmg" : 15,
            "crit" : 45,
            "critDmg" : 20,
            "hpP" : 20,
            "mpP" : 30,
            "speed" : 20,
            "maxSpeed" : 15,
            "jump" : 20
        }
    },
    {
        job : "호영",
        spec : {
            "atkSpeed" : 6,
            "mastery" : 90,
            "luk" : 60,
            "atkP" : 10,
            "atk" : 110,
            "dmg" : 10,
            "bossDmg" : 20,
            "endDmg" : 51.25,
            "ignoreDef" : 27,
            "conditionResist" : 30,
            "allAttributeResit" : 30,
            "dodge" : 46.56,
            "stance" : 100,
            "dcreDmg" : 15,
            "crit" : 55,
            "critDmg" : 40,
            "hpP" : 20,
            "speed" : 20,
            "maxSpeed" : 20,
            "jump" : 20
        }
    },
    {
        job : "제로",
        spec : {
            "atkSpeed" : [8, 6], //알파, 베타
            "mastery" : 90,
            "str" : 50,
            "atk" : [40, 80], //알파, 베타
            "dmg" : [0, 50], //알파, 베타
            "bossDmg" : [0, 30],//알파, 베타
            "endDmg" : 53.75,
            "ignoreDef" : [68.5, 55], //알파, 베타
            "def" : [0,2000], //알파, 베타
            "conditionResist" : [10, 40], //알파, 베타
            "allAttributeResit" : [10, 40], //알파, 베타
            "stance" : 100,
            "dcreDmg" : 15,
            "crit" : 55,
            "critDmg" : [50, 0], //알파, 베타
            "hpP" : [45, 15], //알파, 베타
            "speed" : [30, 0],//알파, 베타
            "maxSpeed" : 20,
            "jump" : [20, 0] //알파, 베타
        }
    },
    {
        job : "키네시스",
        spec : {
            "atkSpeed" : 5,
            "mastery" : 90,
            "int" : 40,
            "mAtkP" : 10,
            "mAtk" : 100,
            "dmg" : 40,
            "bossDmg" : 30,
            "endDmg" : 93,
            "ignoreDef" : 25,
            "def" : 500,
            "conditionResist" : 40,
            "allAttributeResit" : 30,
            "dodge" : 32,
            "stance" : 100,
            "dcreDmg" : 15,
            "crit" : 45,
            "critDmg" : 34,
            "hpP" : 50,
            "speed" : 30,
            "maxSpeed" : 20,
            "jump" : 20
        }
    },
]