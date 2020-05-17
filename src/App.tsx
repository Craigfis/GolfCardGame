import React, { useState, FunctionComponent } from 'react';
import './App.css';
import PlayField from './PlayField';
import Deck from './Deck';
import { PlayerCard } from './PlayerCard';

const App: FunctionComponent = () => {
  let [deck, setDeck] = useState(new Deck());
  let [playerCards, setPlayerCards] = useState([] as PlayerCard[]);
  let flipAction = (pc: PlayerCard) => {
    let newCards: PlayerCard[] = [];
    Object.assign(newCards, playerCards);
    setPlayerCards(newCards);
  }
  
  let dealCards = (): void => {
    playerCards = [];
    [1,2,3,4,5,6,7,8,9].forEach(() => {
      playerCards.push(new PlayerCard(deck.takeTopCard()!, flipAction));
    });
    setPlayerCards(playerCards);
    setDeck(deck);
    console.log(playerCards);
  };

  return (
    <>
    <button className='DealButton' onClick={e => dealCards()}>Deal</button>
    <div className="GameTable">
      
      <PlayField cards={playerCards}></PlayField>
      <div className='DrawPiles'>
        <div className='UnplayedDeck'>Unplayed deck</div>
        <div className='DrawFromDeck'>Discard pile</div>
      </div>
    </div>
    </>
  );
}

export default App;
