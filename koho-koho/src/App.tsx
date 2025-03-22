import React from 'react';
import logo from './logo.png';
import './App.css';
import Nakath from "./components/nakath";

const App = () => {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
          <h1>🌞 කොහෝ කොහෝ : : Koho Koho 🌞</h1>
        <div className="App=body">
            <Nakath />
        </div>
      </header>
    {/*TODO: Footer*/}
    </div>
  )
}

export default App;
