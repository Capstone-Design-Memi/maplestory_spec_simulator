let alertShutDown = false;
export class PrivateInformationError extends Error {
  constructor(scope?: string) {
    console.log(scope);
    super(`캐릭터 정보가 비공개입니다${scope ? ` (${scope})` : ""}`);

    if (!alertShutDown) {
      alertShutDown = true;

      // 함수를 호출하고 반환된 div를 변수에 저장
      const myP: HTMLDivElement = createDivWithText(
        `검색하려는 케릭터는 비공개 케릭터 입니다.`
      );

      myP.style.textAlign = "center"; // 가운데 정렬
      myP.style.color = "red"; //글자색 빨간색

      // 반환된 div를 문서의 어딘가에 추가
      document.body.appendChild(myP);

      setTimeout(() => {
        document.body.removeChild(myP);
      }, 5000);

      function createDivWithText(text: string): HTMLDivElement {
        const divElement = document.createElement("div");
        divElement.textContent = text;
        return divElement;
      }
    }
  }
}
