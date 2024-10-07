import React from 'react'
import "../styles/Browse.css"
import { useState } from "react";
import md5 from 'md5';



export default function BrowseCharacters() {
    const [characterName, setCharacterName] = useState('');
    const [characterData, setCahracterData] = useState(null);
    const [comicData, setComicData] = useState(null);

    const publicKey = import.meta.env.VITE_APP_API_KEY;
    const privateKey = import.meta.env.VITE_APP_API_KEY_PRIVATE;

    const handleSubmit = (event) => {
        event.preventDefault()
        getCharacterData()
        
    }
    const getCharacterData = () => {
        setCahracterData(null);
        setComicData(null);
        
        const timeStamp = new Date().getTime();
        const hash = generateHash(timeStamp);

        const url = `https://gateway.marvel.com/v1/public/characters?ts=1&apikey=${publicKey}&hash=${hash}&nameStartsWith=${characterName}`;

        fetch(url).then((response) => response.json()).then(
            (result) => {
                setCahracterData(result.data);
                console.log(result)
            }
        )

    };
    const generateHash = (timeStamp) => {
        return md5(timeStamp + privateKey + publicKey);
    }

    const handleChange = (event) => {
        setCharacterName(event.target.value)
        
    }
    const handleReset = () => {
        
    }
  return (
    <>
        <form className='search' onSubmit={handleSubmit}>
            <input placeholder='ENTER CHARACTER NAME' type='text' onChange={handleChange} 
             />
        </form>
        <div className='buttons' >
            <button type='submit' >Get Character Data</button>
            <button type='reset' className='reset' onClick={handleReset}>Reset</button>
        </div>
    </>
  )
}
