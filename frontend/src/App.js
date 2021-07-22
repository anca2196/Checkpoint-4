import './App.css';
import HomeGuest from './components/Home/HomeGuest';
import About from './components/About/About';
import { Switch, Route } from "react-router-dom";
import Navbar from './components/NavBar/NavBar';
import { useState, useEffect } from 'react';
import HomeLoggedIn from './components/Home/HomeLoggedIn';
import LogIn from './components/Log In /LogIn';

function App() {
  const [userLoggedIn, setUserLoggedIn] = useState(false)
  
  useEffect(()=> {
    console.log(userLoggedIn)
  },[userLoggedIn])

  return (
    <div className="App">
      <Navbar />
      <Switch>
        <Route exact path ="/home"> 
          {userLoggedIn ? <HomeLoggedIn /> : <HomeGuest />}
        </Route>
        <Route exact path ="/login" > <LogIn userLoggedIn={userLoggedIn} setUserLoggedIn={setUserLoggedIn}/></Route>
        <Route exact path ="/about" component={About} />
      </Switch>
    </div>
  );
}

export default App;
