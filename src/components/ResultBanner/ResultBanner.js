import React from 'react';

function ResultBanner({ isWin, wordList, answer }) {
  return (
    <div className={`banner ${isWin ? 'happy' : 'sad'}`}>
      {isWin ? (
        <p>
          <strong>Congratulations!</strong> Got it in
          <strong>{`${
            wordList.findIndex((word) => word === '') > 0
              ? wordList.findIndex((word) => word === '')
              : wordList.length
          } guesses`}</strong>
          .
        </p>
      ) : (
        <p>
          Sorry, the correct answer is <strong>{answer}</strong>.
        </p>
      )}
    </div>
  );
}

export default ResultBanner;
