import HomeGuest from './components/Home Page/HomeGuest';
import About from './components/About Page/About';
import { Switch, Route } from "react-router-dom";
import Navbar from './components/NavBar/NavBar';
import { useState, useEffect } from 'react';
import HomeLoggedIn from './components/Home Page/HomeLoggedIn';
import LogIn from './components/Log In Page/LogIn';
import DiaryGuest from './components/Fan-Diary Page/DiaryGuest';
import DiaryLoggedIn from './components/Fan-Diary Page/DiaryLoggedIn';

function App() {
  const [userLoggedIn, setUserLoggedIn] = useState(false)
  
  useEffect(()=> {
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
        <Route exact path= "/fan-diary">
        {userLoggedIn ?  <DiaryLoggedIn /> :< DiaryGuest/>}
        </Route>
      </Switch>
    </div>
  );
}

export default App;
