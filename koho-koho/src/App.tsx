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
                        <div>கோ கோ</div>
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

                        <p> 🌾 இந்த இணையத்தளத்தின் முக்கிய நோக்கம், உங்கள் நேர மண்டலத்தின் அடிப்படையில், இலங்கையில் 2025
                            சிங்கள மற்றும் தமிழ் புத்தாண்டுக்கான சுப நேரங்களை காட்சிப்படுத்துவதாகும். (மொழிபெயர்ப்புகள்
                            தவறாக இருந்தால் சொல்லுங்கள்!)
                        </p>

                        <p> 🌾 This website's main purpose is to showcase the auspicious times for the 2025 Sinhala and
                            Tamil
                            New
                            Year in Sri Lanka, based on your timezone. </p>
                    </div>
                </div>
                <div className="header-container">
                    <img className="App-logo heading-container" src={logo} alt="logo"/>
                    <div className="heading-container heading">
                        <div>අවුරුදු නැකැත් සීට්ටුව 2025</div>
                        <div className="sub-heading">Auspicious times for the year 2025</div>
                    </div>
                    <img className="App-logo heading-container" src={logo} alt="logo"/>
                </div>
            </header>
            <Nakath/>
            <footer className="footer"> Made with ❤️ by
                <a href="https://github.com/Milindi-Kodikara" target="_blank">Milindi Kodikara</a> : : <a
                    href="https://ko-fi.com/milindi" target="_blank"> Shout me
                    a tea</a> 🍃
            </footer>
        </div>
    )
}

export default App;
