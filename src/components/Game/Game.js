import React from 'react';
import { sample } from '../../utils';
import { WORDS } from '../../data';
import GuessResult from '../GuessResult';
import WordInput from '../WordInput';
import { NUM_OF_GUESSES_ALLOWED } from '../../constants';

// Pick a random word on every pageload.
const answer = sample(WORDS);
// To make debugging easier, we'll log the solution in the console.
console.info({ answer });

function Game() {
  const [wordList, setWordList] = React.useState(
    Array.from({ length: NUM_OF_GUESSES_ALLOWED }, () => '')
  );

  const handleGameReset = () => {
    setWordList(Array.from({ length: NUM_OF_GUESSES_ALLOWED }, () => ''));
  };

  return (
    <div className='game-wrapper'>
      <div>
        <button onClick={handleGameReset}>RESET</button>
      </div>
      <GuessResult wordList={wordList} answer={answer} />
      <WordInput
        wordList={wordList}
        setWordList={setWordList}
        answer={answer}
      />
    </div>
  );
}

export default Game;
