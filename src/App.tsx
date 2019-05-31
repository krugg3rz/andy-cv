import React from 'react';
import logo from './logo.svg';
import './App.css';
import SplashContainer from "./containers/splashContainer/splashContainer";

const App: React.FC = () => {
  return (
    <div className="App">
      <header className="Name">
      <SplashContainer />
      </header>
    </div>
  );
}

export default App;
