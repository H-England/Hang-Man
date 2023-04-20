import React from 'react'

function DisplayWord({ currentWord, correctLetters }) {
  return (
    <div className='word'>
        {currentWord.split('').map( (letter, i) => {
            return (
                <span className='letter' key={i}>
                    {correctLetters.includes(letter) ? letter : ''}
                </span>
            )
        })}
      
    </div>
  )
}

export default DisplayWord
