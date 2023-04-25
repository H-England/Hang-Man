import './App.css';
import { Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useEffect, useState } from 'react';
import { helpNotification as help } from './helpers/helpers';
import Rules from './components/Rules';
import WrongLetters from './components/WrongLetters';
import RandomWordSelector from './components/Words';
import DisplayWord from './components/DisplayWord';
import Hangman from './components/Figure';



function App() {
  const [showHelp, setShowHelp] = useState(false)
  const [currentWord, setCurrentWord] = useState("")
  const [correctLetters, setCorrectLetters] = useState([])
  const [wrongLetters, setWrongLetters ] = useState([])
  const [playable, setPlayable] = useState(true)
  
  useEffect(() => {
    const handleKeydown = e => {
      const{key, keyCode} = e
        if(playable && keyCode >= 65 && keyCode <= 90) {
          const letter = key.toLowerCase()
  
          if(currentWord.includes(letter)) {
            if(!correctLetters.includes(letter)) {
              setCorrectLetters(currentLetters => [... currentLetters, letter])

            } else {
              // showNotifcation()
            }
            
          } else {
            if(!wrongLetters.includes(letter)) {
              setWrongLetters(wrongLetters => [... wrongLetters, letter])

            } else {
              // showNotifcation()
            }
  
          }
        
      }
    }
    window.addEventListener('keydown', handleKeydown)
    return () => window.removeEventListener('keydown', handleKeydown)
  }, [correctLetters, wrongLetters, playable])
  
  function resetLetters() {
    setWrongLetters([])
    setCorrectLetters([])

  }

  const handleWordSelected = (word) => {
    setCurrentWord(word)
    setWrongLetters([])
    setCorrectLetters([])
    
  };

  const showHelpHandler = () => {
    setShowHelp(!showHelp)
  };

  const handleNewWordClick = () => {
    resetLetters()
  }

  return (
    <div className='home'>
      <div className='App-header'>
        <div className='header'>
          <h1>Hang-man</h1>
          <ul>
            <li className='start' onClick={resetLetters}>Start</li>
            <RandomWordSelector onWordSelected={handleWordSelected} onNewWordClick={handleNewWordClick}/>
            <li className='help' onClick={showHelpHandler}>
              Help
            </li>
          </ul>
        </div>
        <div>
        <div className='hangmancontainer'>
          <Hangman wrongLetters={wrongLetters}/>
          <DisplayWord currentWord={currentWord} correctLetters={correctLetters}/>
        </div>
          <WrongLetters wrongLetters={wrongLetters} />
          
        </div>
        {showHelp && <Rules onClose={showHelpHandler} />}
      </div>
    </div>
  );
}
export default App;