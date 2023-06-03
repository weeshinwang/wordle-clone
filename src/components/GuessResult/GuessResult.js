import React from 'react';
import { checkGuess } from '../../game-helpers';

function GuessResult({ wordList, answer }) {
  const checkedResult = (word) => {
    if (word === '')
      return Array.from({ length: 5 }, () => ({
        status: 'unchecked',
        letter: '',
      }));
    return checkGuess(word, answer);
  };
  return (
    <div className='guess-results'>
      {wordList.map((word, index) => (
        <p key={index} className='guess'>
          {checkedResult(word).map((checkedItem, cIndex) => (
            <span
              key={`${index}-${cIndex}`}
              className={`cell ${checkedItem?.status}`}
            >
              {checkedItem?.letter}
            </span>
          ))}
        </p>
      ))}
    </div>
  );
}

export default GuessResult;
