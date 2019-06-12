import React from 'react';
import logo from './logo.svg';
import './App.css';
import Splash from "./components/splash/splash";
import AboutMe from "./components/aboutMe/aboutMe";

const App: React.FC = () => {
  return (
    <div className="App">
      <header className="Name">
      <AboutMe />
      </header>
    </div>
  );
}

export default App;
