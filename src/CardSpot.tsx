import React, { FunctionComponent } from 'react';
import './CardSpot.css';
import { PlayerCard } from './PlayerCard';
import { GameModes } from './GameModes';


interface CardSpotProps {
    card: PlayerCard | undefined;
    gameMode: GameModes;
}

const CardSpot: FunctionComponent<CardSpotProps> = ({ card, gameMode }) => {
  let cardStyle = card ? (card.faceUp ? 'cardspot ' + (card.value < 0 ? 'negativeCard' : (card.value > 8 ? 'badCard' : card.value > 0 ? 'okCard' : 'mulliganCard')): 'cardspot facedown') : 'cardspot';

  let dropHandler = (e: React.DragEvent): void => {
    var droppedValue = e.dataTransfer.getData('value');
    card!.cardSelected();
    card!.discard();
    card!.value = Number(droppedValue);
    card!.flip();
  }

  let allowDrop = (e: React.DragEvent): void => {
    if (card) {
      e.preventDefault();
    }
  }
  let dragStart = (e: React.DragEvent): void => {
    if (card) {
      e.dataTransfer.setData('value', String(card.value));
    }
  }

  return (
    <div className={cardStyle} onClick={() => card && gameMode === GameModes.Dealt && card.flip()}
      draggable onDragStart={dragStart} onDrop={dropHandler} onDragOver={allowDrop}>
    <div className={'cardText'}>
    {card ? card.faceUp ? card.value : 'X' : ''}
    </div>
    </div>
  );
}

export default CardSpot;
