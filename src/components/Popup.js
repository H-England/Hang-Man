import React, {useEffect} from 'react'
import { Button } from 'react-bootstrap'
import { winCheck } from '../helpers/helpers'

const Popup = ({ correctLetters, wrongLetters, currentWord, setPlayable, onNewWordClick }) => {
  let finalMessage = ""
  let finalMessageRevealWord = ""
  let playable = true

  if(winCheck(correctLetters, wrongLetters, currentWord) === "win") {
    finalMessage = "Well Done, You guess the word correctly. Would you like to play again?"
    playable = false
  } else if (winCheck(correctLetters, wrongLetters, currentWord) === "lose"){
    finalMessage = "You have lost, Feel free to try again!"
    finalMessageRevealWord = `... the word was: ${currentWord}`
    playable = false
  }

  useEffect(() => setPlayable(playable))

  return (
    <div className='popup-container' style={finalMessage !== "" ? {display:"flex"} : {}} >
        <div className='popup'>
            <h2>{finalMessage}</h2>
            <h3>{finalMessageRevealWord}</h3>
            <button onClick={onNewWordClick}>Play Again</button>
        </div>      
    </div>
  )
}

export default Popup
