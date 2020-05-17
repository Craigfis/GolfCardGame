import React, { FunctionComponent } from 'react';
import './PlayField.css';
import CardSpot from './CardSpot';
import { PlayerCard } from './PlayerCard';

interface PlayFieldProps {
    cards: PlayerCard[];
}

const PlayField: FunctionComponent<PlayFieldProps> = ({ cards }) => {
  return (
    <>
    
    <div className='playfield'>
        <div className='playfield-row'>
            <CardSpot card={cards[0]}/>
            <CardSpot card={cards[1]}/>
            <CardSpot card={cards[2]}/>
        </div>
        <div className='playfield-row'>
            <CardSpot card={cards[3]}/>
            <CardSpot card={cards[4]}/>
            <CardSpot card={cards[5]}/>
        </div>
        <div className='playfield-row'>
            <CardSpot card={cards[6]}/>
            <CardSpot card={cards[7]}/>
            <CardSpot card={cards[8]}/>
        </div>
    </div>
    </>
  );
}

export default PlayField;
