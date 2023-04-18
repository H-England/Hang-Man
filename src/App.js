import './App.css';
import { Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

import { useState } from 'react';
import { helpNotification as help } from './helpers/helpers';
import Rules from './components/Rules';

function App() {
  const [showHelp, setShowHelp] = useState(false)

  const showHelpHandler = () => {
    setShowHelp(!showHelp)
  }
  return (
    <div className='home'>
      <body className='App-header'>
        <div className='header'>
          <h1>Hang-man</h1>
          <ul>
            <li className='start'>Start</li>
            <li className='newword'>New Word</li>          
            <li className='help' onClick={showHelpHandler}>Help</li>
            
          </ul>
        </div>
        {showHelp && <Rules onClose={showHelpHandler}/>}
      </body>
    </div>
  )
}
  

export default App;
