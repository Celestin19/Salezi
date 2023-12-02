import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import '../Login.css';

const Login = (props) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();  

  const handleSubmit = async (e) => {
    e.preventDefault();
  
    try {
      const response = await fetch('http://localhost:1337/api/auth/local', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          identifier: email,
          password,
        }),
      });
  
      if (!response.ok) {
        console.error("Authentication Error", response);
        return;
      }
  
      const contentType = response.headers.get('content-type');
      if (contentType && contentType.includes('application/json')) {
        const data = await response.json();
        console.log(data);
  
        props.onLogin(data.jwt, data.user.username, data.user.sellerStock);
  
        if (data.jwt) {
          if (data.user.role === 'SellerFnac') {
            navigate("/SellerFnacPage");
          } else if (data.user.role === 'AutreRole') {
            navigate("/AutrePage");
          }
        }
      } else {
        console.error("Non-JSON Response. Content-Type:", contentType);
      }
    } catch (error) {
      console.error("Error during fetch:", error);
    }
  };
  




  return (
    <div>
      <h2>Connection</h2>
      <form onSubmit={handleSubmit}>
        <label className="Identifiant">
          Identifiant:
          <input 
            type="text"
            value={email}
            onChange={(e) => setEmail(e.target.value)} 
          />
        </label>
        <br />
        <label className="Password">
          Password :
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)} 
          />
        </label>
        <br />
        <button type="submit">Login</button>
      </form>
    </div>
  );
};

export default Login;
