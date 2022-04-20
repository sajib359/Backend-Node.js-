import './App.css';
import { useEffect, useState } from 'react';

function App() {
  const [users , setUsers] =useState([]);
  useEffect(() => {
    fetch('http://localhost:5000/users')
    .then(res=> res.json())
    .then(data=> setUsers(data))
  },[])

  const handleForm = event => {
    event.preventDefault()
    const name =event.target.name.value;
    const email =event.target.email.value;
   console.log(name ,email);

//     // post data to server
//     fetch('https://example.com/profile', {
//   method: 'POST', // or 'PUT'
//   headers: {
//     'Content-Type': 'application/json',
//   },
//   body: JSON.stringify(user),
// })
// .then(response => response.json())
// .then(data => {
//   console.log('Success:', data);
// })
  }

  
  return (
    <div className="App">
      <form onSubmit={handleForm} action="">
        <input type="text" name='name' placeholder='Name' />
        <input type="text" name='email' placeholder='Email' />
        <button>Add User</button>
      </form>
      <h1>Total user is: {users.length}</h1>
      {
        users.map(user => <li key={user.id}>Name: {user.name} Email: {user.email} Phone: {user.phone}</li>)
      }
    </div>
  );
}

export default App;
