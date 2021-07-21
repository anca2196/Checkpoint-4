import './App.css';
import HomeGuest from './components/Home/HomeGuest';
import About from './components/About/About';
import { Switch, Route } from "react-router-dom";
import Navbar from './components/NavBar/NavBar';
import { useState } from 'react';
import HomeLoggedIn from './components/Home/HomeLoggedIn';
import LogIn from './components/Log In /LogIn';

function App() {
  const [userloggedIn, setUserLoggedIn] = useState(false)
  return (
    <div className="App">
      <Navbar />
      <Switch>
        <Route exact path ="/"> 
          {userloggedIn ? <HomeLoggedIn /> : <HomeGuest />}
        </Route>
        <Route exact path ="/login" component={LogIn} />
        <Route exact path ="/about" component={About} />
      </Switch>
    </div>
  );
}

export default App;
