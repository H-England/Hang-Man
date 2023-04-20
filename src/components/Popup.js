import React from 'react'
import { Button } from 'react-bootstrap'

const Popup = () => {
  return (
    <div className='popup-container' id='popup-container'>
        <div className='popup'>
            <h2 id='final-message'></h2>
            <h3 id='showWord'></h3>
            <Button variant='primary'>Play Again</Button>
        </div>      
    </div>
  )
}

export default Popup
