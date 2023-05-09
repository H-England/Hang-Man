import './App.css';
import { Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useEffect, useState } from 'react';
import { showNotification as notification} from './helpers/helpers';
import Rules from './components/Rules';
import WrongLetters from './components/WrongLetters';
import DisplayWord from './components/DisplayWord';
import Hangman from './components/Figure';
import Notification from './components/Notification';
import Popup from './components/Popup';



function App() {
  const [showHelp, setShowHelp] = useState(false)
  const [words, setWords] = useState([])
  const [currentWord, setCurrentWord] = useState("")
  const [correctLetters, setCorrectLetters] = useState([])
  const [wrongLetters, setWrongLetters ] = useState([])
  const [playable, setPlayable] = useState(true)
  const [showNotification, setShowNotification] = useState(false)
  

  useEffect(() => {
    async function fetchWords() {
      const response = await fetch('/dictionary.txt')
      const text = await response.text()
      const wordList = text.split('\n')
      setWords(wordList.filter(word => word !== '').map(word => word.toLowerCase()))
    }
    fetchWords()
  }, []);

  function getRandomWord() {
    const randomIndex = Math.floor(Math.random() * words.length)
    const randomWord = words[randomIndex]
    setCurrentWord(randomWord)
    resetLetters()
  }

  useEffect(() => {
    const handleKeydown = e => {
      const{key, keyCode} = e
        if(playable && keyCode >= 65 && keyCode <= 90) {
          const letter = key.toLowerCase()
  
          if(currentWord.includes(letter)) {
            if(!correctLetters.includes(letter)) {
              setCorrectLetters(currentLetters => [... currentLetters, letter])

            } else {
              notification(setShowNotification)
            }
            
          } else {
            if(!wrongLetters.includes(letter)) {
              setWrongLetters(wrongLetters => [... wrongLetters, letter])

            } else {
              notification(setShowNotification)
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



  const showHelpHandler = () => {
    setShowHelp(!showHelp)
  };

  const handleNewWordClick = () => {
    resetLetters()
    getRandomWord()

  }

  return (
    <div className='home'>
      <div className='App-header'>
        <div className='header'>
          <h1>Hang-man</h1>
          <ul>
            <li className='newword' onClick={getRandomWord}>
              Start/New Word
            </li>
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
        {currentWord !== "" && <Popup correctLetters={correctLetters} wrongLetters={wrongLetters} currentWord={currentWord} setPlayable={setPlayable} onNewWordClick={handleNewWordClick} />}
        <Notification showNotification={showNotification}/>
      </div>
      
    </div>
  );
}
export default App;