import React from 'react';
import logo from './logo.svg';
import './App.css';
import Splash from "./components/splash/splash";
import AboutMe from "./components/aboutMe/aboutMe";
import NavBar from "./components/navBar/navbar";
import InnerApp from "./components/innerApp/innerApp";

const App: React.FC = () => {
  return (
    <div className="App">
      <header className="Name">
      <InnerApp />
      </header>
    </div>
  );
}

export default App;
