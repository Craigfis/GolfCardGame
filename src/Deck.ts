
type CardInDeck = {
    value: number;
    position: number;
}
export default class Deck {
    private allcards: number[];
    private cards: CardInDeck[];

    constructor() {
        this.allcards = [];
        this.initialize();
        this.cards = [];
        this.shuffle();
    }
    public shuffle(): void {
        this.allcards.forEach(card => {
            let cardPos = Math.random() * 52;
            this.cards.push({ value: card, position: cardPos });
        });
        this.cards.sort((a: CardInDeck, b: CardInDeck) => { return a.position - b.position});
    };

    public takeTopCard(): number | undefined{
        let topCard = this.cards.pop();
        if (topCard === undefined) {
            return undefined;
        }
        return topCard.value;
    }
    public initialize(): void {
        let addMultipleCardsToDeck = (count: number, value: number) => {
            for (let i = 0; i < count; i++) {
                this.allcards.push(value);
            }
        }
        addMultipleCardsToDeck(4, -4);
        addMultipleCardsToDeck(4, -3);
        addMultipleCardsToDeck(7, -2);
        addMultipleCardsToDeck(7, -1);
        addMultipleCardsToDeck(3, 0);
        addMultipleCardsToDeck(13, 3);
        addMultipleCardsToDeck(13, 4);
        addMultipleCardsToDeck(13, 5);
        addMultipleCardsToDeck(13, 6);
        addMultipleCardsToDeck(13, 7);
        addMultipleCardsToDeck(13, 8);
        addMultipleCardsToDeck(10, 9);
        addMultipleCardsToDeck(10, 10);
        addMultipleCardsToDeck(10, 11);
    }
}
