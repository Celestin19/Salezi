import React, { useState } from "react";
import './App.css';
import Login from './components/Login';


export default function App() {
  const [token, setToken] = useState(null);
  const [sellerProfile, setSellerProfile] = useState(null)

  const handleLogin = (newToken, profile) => {
    setToken(newToken);
    setSellerProfile(profile);
  };

  return (
    <div>
      {!token ? (
        <Login onLogin={handleLogin} />
      ) : (
        <div>
          <div>
            <h1>Billet Réduc</h1>
            <Post apiUrl="http://localhost:1337/api/billet-reducs" />
          </div>
  
          <div>
            <h1>France Billet</h1>
            <Post apiUrl="http://localhost:1337/api/france-billets" />
          </div>
  
          <div>
            <h1>Mister Good Deal</h1>
            <Post apiUrl="http://localhost:1337/api/mister-good-deals" />
          </div>
  
          <div>
            <h1>Nature & Découverte</h1>
            <Post apiUrl="http://localhost:1337/api/nature-and-decouvertes" />
          </div>
  
          <div>
            <h1>PC Clinic</h1>
            <Post apiUrl="http://localhost:1337/api/pc-clinics" />
          </div>
  
          <div>
            <h1>Vanden Borre</h1>
            <Post apiUrl="http://localhost:1337/api/vanden-borres" />
          </div>
  
          <div>
            <h1>WeFix</h1>
            <Post apiUrl="http://localhost:1337/api/we-fixes" />
          </div>
        </div>
      )}
    </div>
  );
}