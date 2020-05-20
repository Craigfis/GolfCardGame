import React, { FunctionComponent } from 'react';
import './PlayField.css';
import CardSpot from './CardSpot';
import { PlayerCard } from './PlayerCard';
import { GameModes } from './GameModes';

interface PlayFieldProps {
    cards: PlayerCard[];
    gameMode: GameModes;
}

const PlayField: FunctionComponent<PlayFieldProps> = ({ cards, gameMode }) => {
  return (
    <>
    <div className='playfield'>
        <div className='playfield-row'>
            <CardSpot card={cards[0]} gameMode={gameMode}/>
            <CardSpot card={cards[1]} gameMode={gameMode}/>
            <CardSpot card={cards[2]} gameMode={gameMode}/>
        </div>
        <div className='playfield-row'>
            <CardSpot card={cards[3]} gameMode={gameMode}/>
            <CardSpot card={cards[4]} gameMode={gameMode}/>
            <CardSpot card={cards[5]} gameMode={gameMode}/>
        </div>
        <div className='playfield-row'>
            <CardSpot card={cards[6]} gameMode={gameMode}/>
            <CardSpot card={cards[7]} gameMode={gameMode}/>
            <CardSpot card={cards[8]} gameMode={gameMode}/>
        </div>
    </div>
    </>
  );
}

export default PlayField;
