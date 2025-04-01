import React from 'react';
import logo from './logo_white.png';
import './App.css';
import Nakath from "./components/nakath";

const App = () => {
    return (
        <div className="App">
            <header className="App-header">
                <div className="header-container">
                    <img className="App-logo heading-container" src={logo} alt="logo"/>
                    <div className="heading-container heading">
                        <div>කොහෝ කොහෝ</div>
                        <div className="sub-heading">koho koho</div>
                    </div>
                    <img className="App-logo heading-container" src={logo} alt="logo"/>
                </div>
                <div className="description-container">
                    <div className="description-inner-container">
                        <p> 🌾 මෙම වෙබ් අඩවියේ ප්‍රධාන අරමුණ වන්නේ ශ්‍රී ලංකාවේ නැකැත් වේලාවට සමගාමීව ඔබේ වේලා කලාපය මත
                            2025
                            වසරේ සිංහල සහ දෙමළ අලුත් අවුරුදු
                            නැකැත් වේලාවන් ප්‍රදර්ශනය කිරීමයි.</p>

                        <p> 🌾 This website's main purpose is to showcase the auspicious times for the 2025 Sinhala and
                            Tamil
                            New
                            Year in Sri Lanka, based on your timezone. </p>
                    </div>
                </div>
                <div className="header-container">
                    <img className="App-logo heading-container" src={logo} alt="logo"/>
                    <div className="heading-container heading">
                        <div>2025 වසරේ නැකැත් වේලාවන්</div>
                        <div className="sub-heading">Auspicious times for the year 2025</div>
                    </div>
                    <img className="App-logo heading-container" src={logo} alt="logo"/>
                </div>
            </header>
            <Nakath/>
            <footer className="footer"> Made with ❤️ by
                <a href="https://github.com/Milindi-Kodikara" target="_blank">Milindi Kodikara</a> : : <a
                    href="https://ko-fi.com/milindi" target="_blank"> Buy me
                    a tea</a> 🍃
            </footer>
        </div>
    )
}

export default App;
