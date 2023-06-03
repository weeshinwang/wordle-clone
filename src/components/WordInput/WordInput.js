import React from 'react';
import ResultBanner from '../ResultBanner/ResultBanner';
import { checkGuess } from '../../game-helpers';

function WordInput({ wordList, setWordList, answer }) {
  const [input, setInput] = React.useState('');
  const [isWin, setIsWin] = React.useState(false);

  const handleWordSubmit = (event) => {
    event.preventDefault();
    const numGuesses = wordList.findIndex((word) => word === '');
    const newWordList = [...wordList];
    newWordList[numGuesses] = input;
    setWordList(newWordList);
    if (checkGuess(input, answer).every((item) => item.status === 'correct')) {
      setIsWin(true);
    }
    setInput('');
  };

  return (
    <form className='guess-input-wrapper' onSubmit={handleWordSubmit}>
      <label htmlFor='guess-input'>Enter guess:</label>
      {isWin || !wordList.some((word) => word === '') ? (
        <ResultBanner isWin={isWin} wordList={wordList} answer={answer} />
      ) : (
        <input
          id='guess-input'
          required
          minLength={5}
          maxLength={5}
          pattern='[a-zA-Z]{5}'
          title='5 letter word'
          type='text'
          value={input}
          onChange={(event) => setInput(event.target.value.toUpperCase())}
        />
      )}
    </form>
  );
}

export default WordInput;
