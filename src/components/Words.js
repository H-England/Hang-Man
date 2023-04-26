import { useState, useEffect } from 'react';

function RandomWordSelector(props) {
  const [words, setWords] = useState([])

  useEffect(() => {
    async function fetchWords() {
      const response = await fetch('/dictionary.txt')
      const text = await response.text()
      const wordList = text.split('\n')
      setWords(wordList.filter(word => word !== '').map(word => word.toLowerCase()))
    }
    fetchWords()
  }, []);

  function handleClick() {
    const randomIndex = Math.floor(Math.random() * words.length)
    const randomWord = words[randomIndex]
    props.onWordSelected(randomWord)
    console.log(randomWord)
  }

  return (
    <li className='newword' onClick={handleClick}>
      Start/New Word
    </li>
  );
}

export default RandomWordSelector;