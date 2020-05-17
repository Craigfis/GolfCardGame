export class PlayerCard {
    public faceUp: boolean;
    public value: number;
    private flipAction: (pc: PlayerCard) => void;

    constructor(value: number, flipAction: (pc: PlayerCard) => void) {
        this.value = value;
        this.faceUp = false;
        this.flipAction = flipAction;
    }

    public flip() {
        this.faceUp = true;
        this.flipAction(this);
    }
}
  