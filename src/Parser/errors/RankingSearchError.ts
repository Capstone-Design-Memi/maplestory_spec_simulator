let saveCharacter = null;
let alertShutDown = false;
export class RankingSearchError extends Error {
    constructor(public characterName: string) {
        super(`'${characterName}' 공식 홈페이지 랭킹 검색 오류`);
        saveCharacter = characterName;
        if(!alertShutDown)
        {
            alertShutDown = true;

            if(saveCharacter !== null)
            {
            // 함수를 호출하고 반환된 div를 변수에 저장
            const myP: HTMLDivElement = createDivWithText(`캐릭터 ${saveCharacter}을(를) 검색하는 과정에서 홈페이지와 충돌이 났습니다.`);

            myP.style.textAlign = 'center'; // 가운데 정렬
            myP.style.color = 'red'; //글자색 빨간색
    
            // 반환된 div를 문서의 어딘가에 추가
            document.body.appendChild(myP);

            setTimeout(() => {
                document.body.removeChild(myP);
            }, 5000);
            }
    
            function createDivWithText(text: string): HTMLDivElement {
                const divElement = document.createElement('div');
                divElement.textContent = text;
                return divElement;
            }
        }
    }
}
