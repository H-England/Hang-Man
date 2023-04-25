import React from 'react'

const WrongLetters = ({ wrongLetters }) => {

  if(wrongLetters.length === 0){
    return null
  }
  
  return (
    <div className="wrong-letters-container">
      <div>
        {wrongLetters.length > 0 && 
          <h3>Wrong</h3>
        }
        {wrongLetters
          .map((letter, i) => <span key={i}>{letter}</span>)
          .reduce((prev, curr) => prev === null ? [curr] : [prev, ', ', curr], null)}
      </div>
    </div>
  )
}

export default WrongLetters
