import React from 'react';
import logo from './logo.svg';
import './App.css';
import { useState, useEffect } from "react";

function App() {

 const [appData, setAppData] = useState(null);
 const [loading, setLoading] = useState(true);
 const [error, setError] = useState(null);



 useEffect(() => {
  fetch(`/api/people`)
   .then(response => response.json())
   .then(data => console.log(data))
   .catch(error => console.log(error))
   
 
 }, []);



  
  return (
    <div className="App">
      <h1>Rudero Vida</h1>
    </div>
  );
}

export default App;
