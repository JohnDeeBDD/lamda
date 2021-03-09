import React, {useState, useEffect} from 'react';
import './App.css';
import axios from "axios";
import Character from './components/Character';

function App() {
    const [userData,setUserData]=useState([]);
    useEffect(()=>{
        axios.get('https://swapi.dev/api/people/')
          .then(resultJSON=>{
              var numberOfResults = Object.keys(resultJSON).length;
              console.log(numberOfResults);
              console.log(JSON.stringify(resultJSON.data[1]));

              var character = resultJSON.data[5];
              //console.log(character['hair_color']);
              console.log(JSON.stringify(resultJSON.data[5]['hair_color']));

          })
          .catch(err=>{
              console.log(err);
          })
        },[])

  const name = "balls";
  return (
    <div>
    <Character />
  </div>
  );
}



export default App;