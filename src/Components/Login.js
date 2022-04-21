import React, { useState, useContext } from 'react';
import firebase from 'firebase/firebase';
import { FirebaseContext } from '../store/FirebaseContext';
import './Login.css';
import { Link } from 'react-router-dom';


function Login(props) {
  const [data, setData] = useState(null)
  // const [print, setPrint] = useState(false)
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const handleLogin = (e) => {
    e.preventDefault()
    firebase.auth().signInWithEmailAndPassword(email, password).then(() => {
      alert('Logged In')
    }).catch((error) => {
      alert(error.message)
    })
  }

  function getData(val) {
    setData(val.target.value)
  }
  return (
    <div>
      <div className="loginParentDiv">
        <form onSubmit={handleLogin}>
          <label htmlFor="fname">Email</label>
          <br />
          <input
            className="input"
            type="email"
            id="fname"
            name="email"
            onChange={getData}

          />
          <br />
          <label htmlFor="lname">Password</label>
          <br />
          <input
            className="input"
            type="password"
            id="lname"
            name="password"

          />
          <br />
          <br />
          <Link to='/todolist'><button>Login</button></Link>
        </form>

        <span>Don't have an account? Create One
          <Link to="signup">Click here</Link>
        </span>

      </div>
    </div>
  );
}

export default Login;