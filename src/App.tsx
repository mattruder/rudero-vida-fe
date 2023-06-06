import React from 'react';
import logo from './logo.svg';
import './App.css';
import { useState, useEffect } from "react";
import LoginPage from './loginPage';
import MainScreen from './mainScreen';
import 'bootstrap/dist/css/bootstrap.min.css'
import { Routes } from 'react-router-dom'

export interface LoginProps {
  setCurrentUser: (arg0: UserObject) => void
  setCurrentPage: (arg0: string) => void
  appData: UserData
 
  
}

export interface MainScreenProps {
  currentUser: UserObject
}

export interface UserObject{
    username: string;
    password: string;
    toDo: {
      daily: Array<string>,
      custom: Array<string>
    }
  }

export type UserData = Array<UserObject>

function App() {

 const [appData, setAppData] = useState<UserData | null>(null)
 const [ready, setReady] = useState<string>('no')
 const [loading, setLoading] = useState(true);
 const [error, setError] = useState(null);
 const [currentUser, setCurrentUser] = useState<UserObject>({
  username: "",
  password: "",
  toDo: {
    daily: [],
    custom: []
  }
})
 const [currentPage, setCurrentPage] = useState<string>("loginscreen")

 


 useEffect(() => {
  fetch(`/api/people`)
   .then(response => response.json())
   .then(data => setAppData(data))
   .catch(error => console.log(error))
   
 }, []);

 console.log("app data app.tsx", appData)
 console.log('current user:', currentUser)
 console.log('currentPage', currentPage)

  return (
    <div className="App">
      <h1>Rudero Vida</h1>
      <div className="content">
     
        {currentPage === 'loginscreen' && appData !== null && <LoginPage setCurrentPage={setCurrentPage} appData={appData} setCurrentUser={setCurrentUser} />}
        {currentPage === "mainscreen" && currentUser.username !== null && <MainScreen  currentUser={currentUser}/>}
        
      </div>
    </div>
  );
}

export default App;
