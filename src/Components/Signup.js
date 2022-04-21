import React, { useState, useContext } from 'react';
import { FirebaseContext } from '../store/FirebaseContext';
import './Signup.css';
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';

export default function Signup() {
  const navigate = useNavigate()
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [password, setPassword] = useState('');
  const { firebase } = useContext(FirebaseContext)

  const handleSubmit = (e) => {
    e.preventDefault()

    firebase.auth().createUserWithEmailAndPassword(email, password).then((result) => {
      result.user.updateProfile({ displayName: username })
      firebase.firestore().collection('users').add({
        id: result.user.uid,
        username: username,
        phone: phone
      }).then(() => {
        navigate('/login')
      })

    });
  }

  return (
    <div>
      <div className="signupParentDiv">

        <form onSubmit={handleSubmit}>
          <label htmlFor="fname">Username</label>
          <br />
          <input
            className="input"
            type="text"
            id="fname"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            name="name"
          // defaultValue="John"
          />
          <br />
          <label htmlFor="fname">Email</label>
          <br />
          <input
            className="input"
            type="email"
            id="fmail"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            name="email"
          // defaultValue="John"
          />
          <br />
          <label htmlFor="lname">Phone</label>
          <br />
          <input
            className="input"
            type="number"
            id="lname"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            name="phone"
          // defaultValue="Doe"
          />
          <br />
          <label htmlFor="lname">Password</label>
          <br />
          <input
            className="input"
            type="password"
            id="lname"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            name="password"
          // defaultValue="Doe"
          />
          <br />
          <br />
          <button>Signup</button>
        </form>
        <Link to="/login">
          <a>Login</a>
        </Link>

      </div>
    </div>
  );
}