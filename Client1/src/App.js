import React from 'react';
import Navbar from "./components/Navebar"
import {BrowserRouter as Router , Route} from "react-router-dom"
import './App.css';
import Home from './components/screens/Home';
import Signup from './components/screens/Signup';
import Signin from './components/screens/Signin';
import Profile from './components/screens/Profile';

function App() {
  return (
    <Router>
      <Navbar />
       <Route exact path="/"  component={Home} />
       <Route exact path="/signup"  component={Signup} />
       <Route exact path="/signin"  component={Signin} />
       <Route exact path="/profile"  component={Profile} />

    </Router>
      
  );
}

export default App;
