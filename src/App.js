import React, { useState, useEffect } from 'react';
import Character from './components/Character'
import axios from 'axios'

export default function App() {
  const [characters, setCharacters] = useState([]);
  
  useEffect(() => {
    axios.get(`https://swapi.dev/api/people/?format=json`)
    .then(res => {
      setCharacters(res.data);
    }).catch(err => console.error(err))
    }, [])
    

  return(
    <div className="App">
      <h1 className="Header">Star Wars Characters List</h1>
      { characters.map((char, idx)=> { 
        return <Character info={char} key={idx} />
      }) }
    </div>
  )
}
