export class PlayerCard {
    public faceUp: boolean;
    public value: number;
    private flipAction: () => void;
    private discardAction: (card: Number) => void;
    private cardSelectedAction: () => void;

    constructor(value: number, flipAction: () => void, discardAction: (card: Number) => void,
        cardSelected: () => void) {
        this.value = value;
        this.faceUp = false;
        this.flipAction = flipAction;
        this.discardAction = discardAction;
        this.cardSelectedAction = cardSelected;
    }

    public flip() {
        this.faceUp = true;
        this.flipAction();
    }

    public discard() {
        this.discardAction(this.value);
    }

    public cardSelected(): void {
        this.cardSelectedAction();
    }
}
  