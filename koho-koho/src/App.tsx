import React from 'react';
import logo from './logo.png';
import './App.css';
import Nakath from "./components/nakath";

const App = () => {
    return (
        <div className="App">
            <header className="App-header">
                <div className="header-container">
                    <img className="App-logo heading-container" src={logo} alt="logo"/>
                    <div className="heading-container heading">කොහෝ කොහෝ : : Koho Koho</div>
                    <img className="App-logo heading-container" src={logo} alt="logo"/>
                </div>
                <div className="description-container">
                    <p> 🌾 මෙම වෙබ් අඩවියේ ප්‍රධාන අරමුණ වන්නේ ඔබේ වේලා කලාපය මත පදනම්ව සිංහල සහ දෙමළ අලුත් අවුරුදු
                        නැකැත් වේලාවන් ප්‍රදර්ශනය කිරීමයි.</p>

                    <p> 🌾 This website's main purpose is to showcase the auspicious times for the Sinhala and Tamil New
                        Year, based on your timezone. </p>
                </div>
                <div>
                    <Nakath/>
                </div>
            </header>
            <footer className="footer">Made with ❤️ by Milindi Kodikara : : <a href="https://ko-fi.com/milindi"> Buy me a tea</a>🍃</footer>
        </div>
    )
}

export default App;
