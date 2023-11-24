import { useState } from "react";

export const Register = () => {
  const[email, setEmail] = useState('');
  const[pass, setPass] = useState('');
  const[name,setName] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
  console.log(email);
  }
  

  return (
    <>
        <form onSubmit={handleSubmit} >
          <label htmlFor="name">Full Name</label>
          <input value={name} name="name"id="name" placeholder="full Name" />
          <label htmlFor="email">Email</label>
          <input value={email} onChange={(e) => setEmail(e.target.value)} type="email" placeholder="youremail@gmail.com" id="email" name="email" />
          <label htmlFor="password">Password</label>
          <input value={pass} onChange={(e) => setPass(e.target.value)}  type="password" placeholder="**********" id="password" name="email" />
          <button type="submit">Login</button>
        </form>
        <button>Already have an account? Login here</button>
    </>
  )
}