import React, { FunctionComponent, useState, useEffect } from 'react';
import './CardSpot.css';
import { GameModes } from './GameModes';
import Deck from './Deck';

interface DrawPileProps {
    deck: Deck;
    gameMode: GameModes;
    setPlayingDrawPileCard: () => void;
}

const DrawPile: FunctionComponent<DrawPileProps> = ({ deck, gameMode, setPlayingDrawPileCard }) => {
  let [topCard, setTopCard] = useState(undefined as number | undefined);

  let dragStart = (e: React.DragEvent): void => {
    if (topCard) {
      e.dataTransfer.setData('value', String(topCard));
    }
  }

  const flipTopCard = () => {
      if (gameMode === GameModes.Playing && !topCard) {
          let topCard = deck.takeTopCard();
        setTopCard(topCard);
        setPlayingDrawPileCard();
        setCardStyle('cardspot' + (
            topCard !== undefined ? 
                  (topCard < 0 ? ' negativeCard' 
                   : (topCard > 8 ? ' badCard' 
                      : (topCard > 0 ? ' okCard'
                          : ' mulliganCard')))
                : ' facedown'));  
          }
  };

  let [cardStyle, setCardStyle] = useState('cardspot facedown');
  useEffect(() => {
    if (gameMode === GameModes.Playing) {
        setTopCard(undefined);
        setCardStyle('cardspot facedown');
    }
  }, [gameMode]);

  return (
    <div className={cardStyle} 
        onClick={() => flipTopCard()}
      draggable onDragStart={dragStart}>
    <div className={'cardText'}>
    {topCard}
    </div>
    </div>
  );
}

export default DrawPile;
