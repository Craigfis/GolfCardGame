import React, { FunctionComponent } from 'react';
import './CardSpot.css';
import { PlayerCard } from './PlayerCard';


interface CardSpotProps {
    card: PlayerCard;
}

const CardSpot: FunctionComponent<CardSpotProps> = ({ card }) => {
  let cardStyle = card ? (card.faceUp ? 'cardspot ' + (card.value < 0 ? 'negativeCard' : (card.value > 8 ? 'badCard' : card.value > 0 ? 'okCard' : 'mulliganCard')): 'cardspot facedown') : 'cardspot';
  return (

    <div className={cardStyle} onClick={() => card.flip()}>
    <div className={'cardText'}>
    {card ? card.faceUp ? card.value : 'X' : ''}
    </div>
    </div>
  );
}

export default CardSpot;
