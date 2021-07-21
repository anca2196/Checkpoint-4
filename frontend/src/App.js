import './App.css';
import HomeGuest from './components/Home/HomeGuest';
import About from './components/About/About';
import { Switch, Route } from "react-router-dom";
import Navbar from './components/NavBar/NavBar';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Switch>
        <Route exact path ="/" component={HomeGuest} />
        <Route exact path ="/about" component={About} />
      </Switch>
    </div>
  );
}

export default App;
