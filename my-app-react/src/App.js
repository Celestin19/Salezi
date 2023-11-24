import React, { useState } from "react";
import logo from './logo.svg';
import './App.css';
import { Login } from "./components/Login";
import { Register } from "./components/Register";

function App() {
  const [currentForm, setCurrentForm] = useState('login');

  return (
    <div className="App">
      {
        currentForm === "login" ? <Register onFormSwitch={toggleForm} /> : <Login onFormSwitch={toggleForm} /> 
      }
    </div>
  );
}

export default App;
