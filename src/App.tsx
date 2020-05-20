import React, { useState, FunctionComponent } from 'react';
import './App.css';
import PlayField from './PlayField';
import Deck from './Deck';
import { PlayerCard } from './PlayerCard';
import DiscardPile from './DiscardPile';
import { GameModes } from './GameModes';
import DrawPile from './DrawPile';

const App: FunctionComponent = () => {
  let [gameMode, setGameMode] = useState(GameModes.NotStarted);
  let [deck, setDeck] = useState(new Deck());
  let [playerCards, setPlayerCards] = useState([] as PlayerCard[]);
  let [cardsFlipped, setCardsFlipped] = useState(0);
  let [discardPile, setDiscardPile] = useState([] as Number[]);

  let flipAction = () => {
    cardsFlipped++;
    setCardsFlipped(cardsFlipped);
    if (cardsFlipped === 2) {
      setGameMode(GameModes.Playing);
      setDiscardPile([deck.takeTopCard()!]);
    }
    let newCards: PlayerCard[] = [];
    Object.assign(newCards, playerCards);
    setPlayerCards(newCards);
  }

  const cardSelectedAction = (): void => {
    setGameMode(GameModes.Playing);
  }

  let dealCards = (): void => {
    playerCards = [];
    [1,2,3,4,5,6,7,8,9].forEach(() => {
      playerCards.push(new PlayerCard(deck.takeTopCard()!, flipAction, discardAction, cardSelectedAction));
    });
    setPlayerCards(playerCards);
    setDeck(deck);
    setGameMode(GameModes.Dealt);
  };

  let discardAction = (value: Number) => {
    setDiscardPile([value, ...discardPile]);
    console.log(discardPile);
  }

  const setPlayingDrawPileCard = (): void => {
    setGameMode(GameModes.PlayingDrawPileCard);
  }
  return (
    <>
    {gameMode === GameModes.NotStarted &&
    <button className='DealButton' onClick={e => dealCards()}>Deal</button>}
    {gameMode === GameModes.Dealt && <span>Flip two cards</span>}
    <div className="GameTable">
      
      <PlayField cards={playerCards} gameMode={gameMode}></PlayField>
      <div className='DrawPiles'>
      Draw Pile<div className='UnplayedDeck'>
      <DrawPile deck={deck} gameMode={gameMode} setPlayingDrawPileCard={setPlayingDrawPileCard}></DrawPile>
      </div>
      <br/>
      Discard pile<div className='DrawFromDeck'>
        <DiscardPile cards={discardPile}></DiscardPile></div>
      </div>
    </div>
    </>
  );
}

export default App;
