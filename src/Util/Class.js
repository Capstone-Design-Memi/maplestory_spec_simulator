export const Class = [
  {
    value: "모헙가",
    label: "모험가",
    children: [
      {
        value: "전사",
        label: "전사",
        children: [
          {
            value: "히어로",
            label: "히어로",
            main: "str",
            spec: {
              "atkSpeed" : [7, 8], //두손 무기, 한손 무기
              "숙련도" : 90,
              "str" : 80,
              "dex" : 30,
              "atk" : 30,
              "dmg" : [0,5], // 도끼 착용 시 5
              "endDmg" : 10,
              "ignoreDef" : 50,
              "def" : 200,
              "상태이상내성" : 30,
              "모든속성내성" : 30,
              "stance" : 100,
              "dcreDmg" : 10, //데미지 감소
              "crit" : 20,
              "hp" : 1800, //바디 오브 스틸 패시브 1500
              "hpP" : 20,
              "speed" : 10,
              "maxSpeed" : 10,
              "jump" : 10
            }
          },
          {
            value: "팔라딘",
            label: "팔라딘",

            main: "str",
            spec: {
              "atkSpeed" : [7, 8], //두손 무기, 한손 무기
              "숙련도" : [91, 94], //두손무기, 한손무기
              "str" : 80,
              "dex" : 30,
              "atk" : 10,
              "endDmg" : 42,
              "ignoreDef" : [31, 41], //둔기 착용시 10%증가
              "defP" : 250,
              "def" : 620,
              "상태이상내성" : 40,
              "모든속성내성" : 40,
              "stance" : 100,
              "dcreDmg" : 10, //데미지 감소
              "crit" : 42,
              "critDmg" : [20, 21], //두손검/둔기, 한손검
              "hp" : 1800, // 바디 오브 스틸 패시브 1500
              "hpP" : 20,
              "speed" : 10,
              "maxSpeed" : 10,
              "jump" : 10
            }
          },
          {
            value: "다크나이트",
            label: "다크나이트",
            main: "str",
            spec: {
              "atkSpeed" : 7,
              "숙련도" : 90,
              "str" : 80,
              "dex" : 30,
              "atk" : 30,
              "dmg" : [0, 5], //창 사용시 5
              "endDmg" : 103,
              "ignoreDef" : 30,
              "def" : 470,
              "상태이상내성" : 20,
              "모든속성내성" : 20,
              "stance" : 100,
              "dcreDmg" : 10, //데미지 감소
              "crit" : 60,
              "critDmg" : 38,
              "hp" : 1800, // 바디 오브 스틸 패시브 1500
              "hpP" : 80,
              "speed" : 30,
              "maxSpeed" : 10,
              "jump" : 10
            }
          },
        ],
      },
      {
        value: "마법사",
        label: "마법사",
        children: [
          {
            value: "썬콜",
            label: "썬콜",
            main: "int",
            spec: {
              "atkSpeed" : 7,
              "숙련도" : 95,
              "int" : 90,
              "mAtk" : 40,
              "dmg" : 50,
              "endDmg" : 40,
              "ignoreDef" : 20,
              "def" : 90,
              "상태이상내성" : 20,
              "모든속성내성" : 20,
              "stance" : 100,
              "crit" : [30, 35], //완드 착용시 + 5
              "critDmg" : 13,
              "mpP" : 20,
              "mp" : 2400,
            }
          },
          {
            value: "불독",
            label: "불독",
            main: "int",
          },
          {
            value: "비숍",
            label: "비숍",
            main: "int",
          },
        ],
      },
      {
        value: "궁수",
        label: "궁수",
        children: [
          {
            value: "보우마스터",
            label: "보우마스터",
            main: "dex",
          },
          {
            value: "신궁",
            label: "신궁",
            main: "dex",
          },
          {
            value: "패스파인더",
            label: "패스파인더",
            main: "dex",
          },
        ],
      },
      {
        value: "도적",
        label: "도적",
        children: [
          {
            value: "나이트로드",
            label: "나이트로드",
            main: "luk",
          },
          {
            value: "섀도어",
            label: "섀도어",
            main: "luk",
          },
          {
            value: "듀얼블레이드",
            label: "듀얼블레이드",
            main: "luk",
          },
        ],
      },
      {
        value: "해적",
        label: "해적",
        children: [
          {
            value: "캡틴",
            label: "캡틴",
            main: "dex",
          },
          {
            value: "바이퍼",
            label: "바이퍼",
            main: "str",
          },
          {
            value: "캐논슈터",
            label: "캐논슈터",
            main: "str",
          },
        ],
      },
    ],
  },
  {
    value: "시그너스",
    label: "시그너스",
    children: [
      {
        value: "전사",
        label: "전사",
        children: [
          {
            value: "소울마스터",
            label: "소울마스터",
            main: "str",
          },
          {
            value: "미하일",
            label: "미하일",
            main: "str",
          },
        ],
      },
      {
        value: "마법사",
        label: "마법사",
        children: [
          {
            value: "플레임위자드",
            label: "플레임위자드",
            main: "int",
          },
        ],
      },
      {
        value: "궁수",
        label: "궁수",
        children: [
          {
            value: "위드브레이커",
            label: "위드브레이커",
            main: "dex",
          },
        ],
      },
      {
        value: "도적",
        label: "도적",
        children: [
          {
            value: "나이트워커",
            label: "나이트워커",
            main: "luk",
          },
        ],
      },
      {
        value: "해적",
        label: "해적",
        children: [
          {
            value: "스트라이커",
            label: "스트라이커",
            main: "str",
          },
        ],
      },
    ],
  },
  {
    value: "레지스탕스",
    label: "레지스탕스",
    children: [
      {
        value: "전사",
        label: "전사",
        children: [
          {
            value: "블래스터",
            label: "블래스터",
            main: "str",
          },
        ],
      },
      {
        value: "마법사",
        label: "마법사",
        children: [
          {
            value: "배틀메이지",
            label: "배틀메이지",
            main: "int",
          },
        ],
      },
      {
        value: "궁수",
        label: "궁수",
        children: [
          {
            value: "와일드헌터",
            label: "와일드헌터",
            main: "dex",
          },
        ],
      },
      {
        value: "해적",
        label: "해적",
        children: [
          {
            value: "메카닉",
            label: "메카닉",
            main: "dex",
          },
        ],
      },
    ],
  },
  {
    value: "영웅",
    label: "영웅",
    children: [
      {
        value: "전사",
        label: "전사",
        children: [
          {
            value: "아란",
            label: "아란",
            main: "str",
          },
        ],
      },
      {
        value: "마법사",
        label: "마법사",
        children: [
          {
            value: "루미너스",
            label: "루미너스",
            main: "int",
          },
          {
            value: "에반",
            label: "에반",
            main: "int",
          },
        ],
      },
      {
        value: "궁수",
        label: "궁수",
        children: [
          {
            value: "메르세데스",
            label: "메르세데스",
            main: "dex",
          },
        ],
      },
      {
        value: "도적",
        label: "도적",
        children: [
          {
            value: "팬텀",
            label: "팬텀",
            main: "luk",
          },
        ],
      },
      {
        value: "해적",
        label: "해적",
        children: [
          {
            value: "은월",
            label: "은월",
            main: "str",
          },
        ],
      },
    ],
  },
  {
    value: "노바",
    label: "노바",
    children: [
      {
        value: "전사",
        label: "전사",
        main: "str",
        children: [
          {
            value: "카이저",
            label: "카이저",
            main: "str",
          },
        ],
      },
      {
        value: "궁수",
        label: "궁수",
        children: [
          {
            value: "카인",
            label: "카인",
            main: "dex",
          },
        ],
      },
      {
        value: "도적",
        label: "도적",
        children: [
          {
            value: "카데나",
            label: "카데나",
            main: "luk",
          },
        ],
      },
      {
        value: "해적",
        label: "해적",
        children: [
          {
            value: "엔젤릭버스터",
            label: "엔젤릭버스터",
            main: "dex",
          },
        ],
      },
    ],
  },
  {
    value: "레프",
    label: "레프",
    children: [
      {
        value: "전사",
        label: "전사",
        children: [
          {
            value: "아델",
            label: "아델",
            main: "str",
          },
        ],
      },
      {
        value: "마법사",
        label: "마법사",
        children: [
          {
            value: "일리움",
            label: "일리움",
            main: "int",
          },
        ],
      },
      {
        value: "도적",
        label: "도적",
        children: [
          {
            value: "칼리",
            label: "칼리",
            main: "luk",
          },
        ],
      },
      {
        value: "해적",
        label: "해적",
        children: [
          {
            value: "아크",
            label: "아크",
            main: "str",
          },
        ],
      },
    ],
  },
  {
    value: "아니마",
    label: "아니마",
    children: [
      {
        value: "마법사",
        label: "마법사",
        children: [
          {
            value: "라라",
            label: "라라",
            main: "int",
          },
        ],
      },
      {
        value: "도적",
        label: "도적",
        children: [
          {
            value: "호영",
            label: "호영",
            main: "luk",
          },
        ],
      },
    ],
  },
  {
    value: "키네/제로",
    label: "키네/제로",
    children: [
      {
        value: "전사",
        label: "전사",
        children: [
          {
            value: "제로",
            label: "제로",
            main: "str",
          },
        ],
      },
      {
        value: "마법사",
        label: "마법사",
        children: [
          {
            value: "키네시스",
            label: "키네시스",
            main: "int",
          },
        ],
      },
    ],
  },
];
