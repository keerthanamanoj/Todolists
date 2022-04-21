
import './App.css';

import { Routes, Route } from 'react-router-dom'
import Home from './Components/Home';
import Signup from './Components/Signup';
import Login from './Components/Login';
import { Todolist } from './Components/Todolist';


function App() {
  return (
    <div>
      <Routes>
        <Route exact path='/' element={<Home />}></Route>
        <Route exact path='/signup' element={<Signup />}> </Route>
        <Route exact path='/login' element={<Login />}> </Route>
        <Route exact path='/todolist' element={<Todolist />}> </Route>
      </Routes>
    </div>

  );
}

export default App;
