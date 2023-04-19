import React from 'react'
import { Button } from 'react-bootstrap'
import { useState } from 'react'

function Rules({onClose}) {
  return (
    <div className= "helpbox">
            <div className='helpcont'>
                <h3>How to Play Hangman:</h3>
                <ul>
                    <li>Step 1: Press The Start Button</li>
                    <li>Step 2: A Random word will be chosen to guess. Blank spaces will appear indicating how many letters there are in the word.</li>
                    <li>Step 3: Input a letter, if it is wrong a drawing will start to appear, however if you guess correctly one of the blank spaces will be filled with the letter you Inputted.</li>
                    <li>Step 4: To beat the game you have to fill all the blank spaces before the drawing is completed by wrong guesses. Once the drawing is complete you lose.</li>
                </ul>
            </div>
            <Button className='close' variant='danger' onClick={onClose}>Close Help</Button> 
      </div>
  )
}

export default Rules
