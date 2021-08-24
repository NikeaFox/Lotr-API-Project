import React, { useState} from 'react'
import {ImSearch} from 'react-icons/im'
import Card from './Card'
import '../styles/MainPage.css'
function MainPage() {

  const[character, setCharacter] = useState("");
  const[results, setResults] = useState([]);
  const[attribute, setAttribute] = useState("name");

  const headers = {
    'Accept': 'application/json',
    'Authorization': 'Bearer -0_6GNq9Do8A5bFUXLhK'
  }

  const fetchData = async (e) => {
    e.preventDefault();
    const rawCharacters = await fetch(`https://the-one-api.dev/v2/character?${attribute}=/${character}/i`, {
      headers: headers
    })
    const characters = await rawCharacters.json();

    setResults(characters.docs);
    console.log(results);
  };

  const getSearch = (e) => {
    const search = e.target.value;
    setCharacter(search);
  }
  
  
  const getAttribute = (e) => {
    setAttribute(e.target.value);
  }

    return (
          <div className="mainpage__container">
              <div className="search__container">
                  <form action="" className="search__form">
                      <input placeholder="" onChange={getSearch} type="text"  className="search__bar" />
                      <button  onClick={fetchData} className="search__button"><ImSearch /></button>
                  </form>                
                  <select onClick={getAttribute} name="" id="" className="search__attribute">
                    <option value="name">Name</option>
                    <option value="race">Race</option>
                    <option value="gender">Gender</option>
                    <option value="realm">Realm</option>
                  </select>
              </div>
              <div className="character__container">
                  {results.map(result =>(                   
                    <Card 
                      name={result.name}
                      race={result.race}
                      gender={result.gender}
                      realm={result.realm}
                      birth={result.birth}
                      death={result.death}
                      spouse={result.spouse}
                    />
                   ))
                  }
              </div>
        </div>
    )
}

export default MainPage
