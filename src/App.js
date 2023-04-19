import './App.css';
import { Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Figure as Hangman } from './components/Figure';
import { useState } from 'react';
import { helpNotification as help } from './helpers/helpers';
import Rules from './components/Rules';
import WrongLetters from './components/WrongLetters';
import RandomWordSelector from './components/Words';

function App() {
  const [showHelp, setShowHelp] = useState(false);
  const [currentWord, setCurrentWord] = useState("");

  const handleWordSelected = (word) => {
    setCurrentWord(word);
  };

  const showHelpHandler = () => {
    setShowHelp(!showHelp);
  };

  return (
    <div className='home'>
      <body className='App-header'>
        <div className='header'>
          <h1>Hang-man</h1>
          <ul>
            <li className='start'>Start</li>
            <RandomWordSelector onWordSelected={handleWordSelected} />
            <li className='help' onClick={showHelpHandler}>
              Help
            </li>
          </ul>
        </div>
        <div className='hangmancontainer'>
          {/* <Hangman/> */}
          <WrongLetters />
          {currentWord && <p>{currentWord}</p>}
        </div>
        {showHelp && <Rules onClose={showHelpHandler} />}
      </body>
    </div>
  );
}
export default App;