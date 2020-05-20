import React, { FunctionComponent } from 'react';
import './CardSpot.css';


interface DiscardPileProps {
    cards: Number[] | undefined;
}

const DiscardPile: FunctionComponent<DiscardPileProps> = ({ cards }) => {
  console.log(cards);
  let topCard = cards && cards[0];
  let cardStyle = topCard ? 
  ('cardspot ' + (topCard < 0 ? 'negativeCard' : (topCard > 8 ? 'badCard' : topCard > 0 ? 'okCard' : 'mulliganCard'))) : 'cardspot';

  let dropHandler = (e: React.DragEvent): void => {
    var droppedValue = e.dataTransfer.getData('value');
    console.log('you dropped this: ' + droppedValue);
    // Move current card to discard pile
  }

  let allowDrop = (e: React.DragEvent): void => {
    if (true) {
      e.preventDefault();
    }
  }
  let dragStart = (e: React.DragEvent): void => {
    if (topCard) {
      e.dataTransfer.setData('value', String(topCard));
    }
  }

  return (
    <div className={cardStyle}
      draggable onDragStart={dragStart} onDrop={dropHandler} onDragOver={allowDrop}>
    <div className={'cardText'}>
    {topCard ? topCard : ''}
    </div>
    </div>
  );
}

export default DiscardPile;
