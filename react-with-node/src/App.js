import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react';

function App() {
  const [users , setUsers] =useState([]);
  useEffect(() => {
    fetch('http://localhost:5000/users')
    .then(res=> res.json())
    .then(data=> setUsers(data))
  },[])
  return (
    <div className="App">
      <h1>Total user is: {users.length}</h1>
      {
        users.map(user => <li key={user.id}>Name: {user.name} Email: {user.email} Phone: {user.phone}</li>)
      }
    </div>
  );
}

export default App;
