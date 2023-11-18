let alertShutDown = false;

export class PrivateInformationError extends Error {
    constructor(scope?: string) {
        super(`캐릭터 정보가 비공개입니다${scope ? ` (${scope})` : ''}`);
        this.name = 'PrivateInformationError';
        if(!alertShutDown)
        {
            alertShutDown = true;
            window.location.reload();
            alert(`캐릭터 정보가 비공개입니다${scope ? ` (${scope})` : ''}`);        
        }
    }
}
