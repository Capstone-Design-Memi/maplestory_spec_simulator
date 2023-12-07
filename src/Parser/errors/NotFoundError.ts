let saveCharacter = null;
let alertShutDown = false;

export class NotFoundError extends Error {
  constructor(item: string) {
    saveCharacter = item;
    super(`캐릭터를 찾을 수 없당꼐요`);
    if (!alertShutDown) {
      alertShutDown = true;

      if (saveCharacter !== null) {
        // 함수를 호출하고 반환된 div를 변수에 저장
        const myP: HTMLDivElement = createDivWithText(
          `캐릭터 ${saveCharacter}을(를) 찾을 수 없습니다`
        );

        myP.style.textAlign = "center"; // 가운데 정렬
        myP.style.color = "red"; //글자색 빨간색

        // 반환된 div를 문서의 어딘가에 추가
        document.body.appendChild(myP);

        setTimeout(() => {
          document.body.removeChild(myP);
        }, 5000);
      }

      function createDivWithText(text: string): HTMLDivElement {
        const divElement = document.createElement("div");
        divElement.textContent = text;
        return divElement;
      }
    }
  }
}
